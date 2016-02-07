/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GeoExtApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'GeoExtApp.view.main.MainController',
        'GeoExtApp.view.main.MainModel',
        'GeoExtApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
      {
        title: 'GeoExt3 OL3 Map',
        iconCls: 'fa-map-marker',
        //layout: 'Fit',
        html: 'test',
        alias: 'widget.mappanel',
        //xtype: 'mappanel',
      },
      {
         title: 'Navigation',
         region:'west',
         floatable: false,
         margin: '5 0 0 0',
         width: 125,
         minWidth: 100,
         maxWidth: 250,
         html: '<p>Secondary content like navigation links could go here</p>'
     },
     {
         title: 'Main Content',
         collapsible: false,
         region: 'center',
         margin: '5 0 0 0',
         html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
     }
    ]
});
