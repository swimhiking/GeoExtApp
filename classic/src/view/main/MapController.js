Ext.define('GeoExtApp.view.main.MapController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-map',
    afterMapCanvasRender: function (view) {
       var me = this;
       var olMap = view.map;
       var vm = view.up('mappanel').getViewModel();
       var treeStore = Ext.create('GeoExt.data.store.LayersTree', {
           layerGroup: olMap.getLayerGroup()
       });
       vm.setStores({'treeStore': treeStore});
       var tree = view.up('mappanel').down('legend');
       tree.setStore(treeStore);
    }

});
