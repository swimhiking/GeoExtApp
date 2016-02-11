
Ext.define("GeoExtApp.view.main.MapLegend",{
    extend: "Ext.tree.Panel",
    alias: "widget.legend",

    requires: [
        "GeoExtApp.view.main.BasicTreeColumnLegends",
        "GeoExtApp.view.main.MapLegendController",
        "GeoExtApp.view.main.MapLegendModel"
    ],

    controller: "main-maplegend",
    viewModel: {
        type: "main-maplegend"
    },

    viewConfig: {
        plugins: { ptype: 'treeviewdragdrop' }
    },

    title: 'Legend tree',
    rootVisible: false,
    hideHeaders: true,
    flex: 1,
    border: false,

    columns: {
        header: false,
        items: [
            {
                xtype: 'treecolumn',
                dataIndex: 'text',
                flex: 1,
                plugins: [
                    {
                        ptype: 'basic_tree_column_legend'
                    }
                ]
            }
        ]
    }


});
