
Ext.define("GeoExtApp.view.main.MapPanel",{
    extend: "Ext.panel.Panel",
    xtype: 'mappanel',
    requires: [
        "GeoExtApp.view.main.MapPanelController",
        "GeoExtApp.view.main.MapPanelModel",
        'Ext.layout.container.Border'
    ],
        layout: 'border',

    controller: "main-mappanel",
    viewModel: {
        type: "main-mappanel"
    },

    bodyBorder: false,

    defaults: {
        collapsible: true,
        split: false,
        bodyPadding: 5
    },

    items: [

        {
            title: 'Legend',
            region:'west',
            xtype: 'legend',
            floatable: false,
            margin: '0 0 0 0',
            width: 200,
            minWidth: 100,
            maxWidth: 250
            //html: '<p>Legend will go here</p>'
        },
        {
            xtype: 'map',
            collapsible: false,
            region: 'center',
            margin: '0 0 0 0',

        }
    ]
});
