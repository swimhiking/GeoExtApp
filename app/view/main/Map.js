
Ext.define("GeoExtApp.view.main.Map",{
    extend: "Ext.panel.Panel",
    xtype: 'mappanel',
    alias: 'widget.mappanel',

    requires: [
        "GeoExtApp.view.main.MapController",
        "GeoExtApp.view.main.MapModel"//,
        //'Ext.layout.container.Border'
    ],
    layout: 'fit',
    //bodyBorder: false,
    /*

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 0
    },
    */

    controller: "main-map",
    viewModel: {
        type: "main-map"
    },

    items: [
       {
           //title: 'Map Content',
           //collapsible: false,
           region: 'center',
           margin: '0 0 0 0',
           xtype: 'mapcanvas'
       }
   ]
});
