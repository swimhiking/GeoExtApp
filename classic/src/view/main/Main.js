/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GeoExtApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'GeoExtApp.view.main.MainController',
        'GeoExtApp.view.main.MainModel'
        //'GeoExtApp.view.main.List'
    ],
    layout: 'border',

    controller: 'main',
    viewModel: 'main',
    bodyBorder: false,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 0
    },
    items: [

        {
            title: 'Legend',
            region:'west',
            floatable: false,
            margin: '0 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            html: '<p>Legend will go here</p>'
        },
        {
            title: 'Map Content',
            collapsible: false,
            region: 'center',
            margin: '0 0 0 0',
            xtype: 'mappanel'
        }
    ]

    /*ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },



    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
      {
        title: 'GeoExt3 OL3 Map',
        iconCls: 'fa-map-marker',
        layout: 'fit',
        items: [
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
    ]*/
});
