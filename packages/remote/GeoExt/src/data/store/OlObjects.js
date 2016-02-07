/* Copyright (c) 2015-2016 The Open Source Geospatial Foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Simple store that maps a ol.Collection to a Ext.data.Store.
 *
 * @class GeoExt.data.store.OlObjects
 */
Ext.define('GeoExt.data.store.OlObjects', {
    extend: 'Ext.data.Store',
    requires: [
        'GeoExt.data.model.OlObject'
    ],

    mixins: [
        'GeoExt.mixin.SymbolCheck'
    ],

    // <debug>
    symbols: [
        'ol.Collection',
        'ol.Collection#getArray',
        'ol.Collection#insertAt',
        'ol.Collection#removeAt'
    ],
    // </debug>

    /**
     * The ol collection this store syncs with.
     *
     * @property {ol.Collection}
     */
    olCollection: null,

    model: 'GeoExt.data.model.OlObject',

    proxy: {
        type: 'memory',
        reader: 'json'
    },

    listeners: {
        /**
         * Forwards changes on the Ext.data.Store to the ol.Collection.
         *
         * @inheritdoc
         */
        add: function(store, records, index) {
            var coll = store.olCollection,
                length = records.length,
                i;

            store.__updating = true;
            for (i = 0; i < length; i++) {
                coll.insertAt(index + i, records[i].olObject);
            }
            store.__updating = false;
        },

        /**
         * Forwards changes on the Ext.data.Store to the ol.Collection.
         *
         * @inheritdoc
         */
        remove: function(store, records, index) {
            var coll = store.olCollection,
                length = records.length,
                i;

            store.__updating = true;
            for (i = 0; i < length; i++) {
                coll.removeAt(index);
            }
            store.__updating = false;
        }
    },

    /**
     * Constructs a new OlObjects store.
     *
     * @param {Object} config The configuration object.
     */
    constructor: function(config) {
        config = config || {};

        // cache ol.Collection on property
        if (config.data instanceof ol.Collection) {
            this.olCollection = config.data;
        // init ol.Collection if array is provided
        } else {
            this.olCollection = new ol.Collection(config.data || []);
        }
        delete config.data;

        config.data = this.olCollection.getArray();

        this.callParent([config]);

        this.olCollection.on('add', this.onOlCollectionAdd, this);
        this.olCollection.on('remove', this.onOlCollectionRemove, this);
    },

    /**
     * Forwards changes to the `ol.Collection` to the Ext.data.Store.
     *
     * @param {ol.CollectionEvent} evt The event emitted by the `ol.Collection`.
     */
    onOlCollectionAdd: function(evt) {
        var target = evt.target,
            element = evt.element,
            idx = Ext.Array.indexOf(target.getArray(), element);

        if (!this.__updating) {
            this.insert(idx, element);
        }
    },

    /**
     * Forwards changes to the `ol.Collection` to the Ext.data.Store.
     *
     * @param {ol.CollectionEvent} evt The event emitted by the `ol.Collection`.
     */
    onOlCollectionRemove: function(evt) {
        var element = evt.element,
            idx = this.findBy(function(rec) {
                return rec.olObject === element;
            });

        if (idx !== -1) {
            if (!this.__updating) {
                this.removeAt(idx);
            }
        }
    },

    /**
     * @inheritdoc
     */
    destroy: function() {
        this.olCollection.un('add', this.onCollectionAdd, this);
        this.olCollection.un('remove', this.onCollectionRemove, this);

        delete this.olCollection;

        this.callParent(arguments);
    }
});
