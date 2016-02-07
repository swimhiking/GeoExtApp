
Ext.define("GeoExtApp.view.main.MapCanvas",{
    extend: "GeoExt.component.Map",
    xtype: 'mapcanvas',

    requires: [
        "GeoExtApp.view.main.MapCanvasController",
        "GeoExtApp.view.main.MapCanvasModel"
    ],

    controller: "main-mapcanvas",
    viewModel: {
        type: "main-mapcanvas"
    },
    map: new ol.Map({
      layers: [


            new ol.layer.Tile({
                source: new ol.source.MapQuest({
                    layer: 'osm'
                }),
                name: 'MapQuest'
            }),
            new ol.layer.Group({
                layers: [
                  new ol.layer.Tile({
                      source: new ol.source.Stamen({
                          layer: 'watercolor'
                      }),
                      name: 'Watercolor'
                  }),
                  new ol.layer.Tile({
                      source: new ol.source.Stamen({
                          layer: 'terrain'
                      }),
                      name: 'Terrain'
                  })
                ],
                name: 'Stamen Group'
            }),
            new ol.layer.Tile({
                 source: new ol.source.OSM(),
                 name: 'OpenStreetMap'
             }),
          ],
            view: new ol.View({
              center: ol.proj.fromLonLat( [-4.751278, 40.611368] ),
              zoom: 6
          })
      })
  });
