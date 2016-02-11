/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GeoExtApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'GeoExtApp.view.main.MainController',
        'GeoExtApp.view.main.MainModel'
        //'GeoExtApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
      layout: {
          align: 'stretchmax'
      },
      title: {
          height: 0,
           text: 'GeoExt3 Demo Web Map',
           textAlign: 'center'
      },

      iconCls: 'fa-th-list'
      },

      tabBar: {
          //flex: 10,
          width: 200,
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
              headerPosition: 'bottom'
          }
      },

      defaults: {
          bodyPadding: 0,

          tabConfig: {
              plugins: 'responsive',
              responsiveConfig: {
                  wide: {
                      iconAlign: 'center',
                      textAlign: 'center'

                  },
                  tall: {
                      iconAlign: 'center',
                      textAlign: 'center'//,
                      //width: 20

                  }
              }
          }
      },

      items: [
        {
          iconCls: 'fa-map-marker',
          layout: 'fit',
          items: [{
              xtype: 'mappanel'
          }]
    },{

          iconCls: 'fa-user',
          bind: {
              html: '{loremIpsum}'
          }
      },{

          iconCls: 'fa-cog',
          bind: {
              html: '{loremIpsum}'
          }
      }]

});
