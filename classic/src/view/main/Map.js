
Ext.define("GeoExtApp.view.main.Map",{
    extend: "GeoExt.component.Map",
    alias: 'widget.map',

    requires: [
        "GeoExtApp.view.main.MapController",
        "GeoExtApp.view.main.MapModel"//,
        //'Ext.layout.container.Border'
    ],

    controller: "main-map",
    viewModel: {
        type: "main-map"
    },

    listeners: {
      //beforerender: 'beforeMapCanvasRender',
      afterrender: 'afterMapCanvasRender'
    },
    map: new ol.Map({
      layers: [

            new ol.layer.Tile({
                legendUrl: 'https://otile4-s.mqcdn.com/tiles/1.0.0/sat/4/4/7.jpg',
                source: new ol.source.MapQuest({layer: 'sat'}),
                name: 'MapQuest Satellite',
                visible: false
            }),
            new ol.layer.Tile({
              legendUrl: 'https://otile4-s.mqcdn.com/tiles/1.0.0/hyb/4/4/7.jpg',
              source: new ol.source.MapQuest({layer: 'hyb'}),
              name: 'MapQuest Hybrid'
          })


        ],
        view: new ol.View({
            center: ol.proj.fromLonLat( [ -114.071661, 51.047517] ),
            zoom: 10
        })

      })
});
