//Create pH Graph
        AmCharts.ready(function () {
            // SERIAL CHART
            var ph_chart = new AmCharts.AmSerialChart();

            ph_chart.dataProvider = pHchartData;
            ph_chart.marginLeft = 10;
            ph_chart.categoryField = "date";

            // listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
            ph_chart.addListener("dataUpdated", zoomChart);

            // AXES
            // category
            var categoryAxis = ph_chart.categoryAxis;
            categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
            categoryAxis.minPeriod = "mm"; // our data is yearly, so we set minPeriod to YYYY
            categoryAxis.dashLength = 3;
            categoryAxis.minorGridEnabled = true;
            categoryAxis.minorGridAlpha = 0.1;
            //categoryAxis.offset = 83;

            // value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.inside = true;
            valueAxis.dashLength = 3;
            valueAxis.labelOffset = -30;
            ph_chart.addValueAxis(valueAxis);

            // GRAPH
            var ph_graph = new AmCharts.AmGraph();
            ph_graph.type = "smoothedLine"; // this line makes the graph smoothed line.
            ph_graph.lineColor = "#FF9E3A";
            ph_graph.negativeBase = "6.5";
            ph_graph.negativeLineColor = "#41A6A8"; // this line makes the graph to change color when it drops below 0
            ph_graph.bullet = "round";
            ph_graph.bulletSize = 8;
            ph_graph.bulletBorderColor = "#FFFFFF";
            ph_graph.bulletBorderAlpha = 1;
            ph_graph.bulletBorderThickness = 2;
            ph_graph.lineThickness = 2;
            ph_graph.valueField = "value";
            ph_graph.selectedBackgroundColor = "#FFF";
            ph_graph.balloonText = "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>";
            ph_chart.addGraph(ph_graph);

            // CURSOR
            var chartCursor = new AmCharts.ChartCursor();
            chartCursor.cursorAlpha = 0;
            chartCursor.cursorPosition = "mouse";
            chartCursor.categoryBalloonDateFormat = "DD MMM YYYY, @HH:NN";
            chartCursor.cursorColor = "#47DBB7";
            ph_chart.addChartCursor(chartCursor);

            // SCROLLBAR
            var chartScrollbar = new AmCharts.ChartScrollbar();
            ph_chart.addChartScrollbar(chartScrollbar);

            // WRITE
            ph_chart.write("pH_chartDiv");
        });

        //Create EC Graph
        AmCharts.ready(function () {
            // SERIAL CHART
            var ec_chart = new AmCharts.AmSerialChart();

            ec_chart.dataProvider = ecChartData;
            ec_chart.marginLeft = 10;
            ec_chart.categoryField = "date";

            // listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
            ec_chart.addListener("dataUpdated", zoomChart);

            // AXES
            // category
            var categoryAxis = ec_chart.categoryAxis;
            categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
            categoryAxis.minPeriod = "mm"; // our data is yearly, so we set minPeriod to YYYY
            categoryAxis.dashLength = 3;
            categoryAxis.minorGridEnabled = true;
            categoryAxis.minorGridAlpha = 0.1;
            //categoryAxis.offset = 83;

            // value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.inside = true;
            valueAxis.dashLength = 3;
            valueAxis.labelOffset = -30;
            ec_chart.addValueAxis(valueAxis);

            // GRAPH
            var ec_graph = new AmCharts.AmGraph();
            ec_graph.type = "smoothedLine"; // this line makes the graph smoothed line.
            ec_graph.lineColor = "#FF9E3A";
            ec_graph.negativeBase = "1000";
            ec_graph.negativeLineColor = "#41A6A8"; // this line makes the graph to change color when it drops below 0
            ec_graph.bullet = "round";
            ec_graph.bulletSize = 8;
            ec_graph.bulletBorderColor = "#FFFFFF";
            ec_graph.bulletBorderAlpha = 1;
            ec_graph.bulletBorderThickness = 2;
            ec_graph.lineThickness = 2;
            ec_graph.valueField = "ec_value";
            ec_graph.selectedBackgroundColor = "#FFF";
            ec_graph.balloonText = "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>";
            ec_chart.addGraph(ec_graph);

            // CURSOR
            var chartCursor = new AmCharts.ChartCursor();
            chartCursor.cursorAlpha = 0;
            chartCursor.cursorPosition = "mouse";
            chartCursor.categoryBalloonDateFormat = "DD MMM YYYY, @HH:NN";
            chartCursor.cursorColor = "#47DBB7";
            ec_chart.addChartCursor(chartCursor);

            // SCROLLBAR
            var chartScrollbar = new AmCharts.ChartScrollbar();
            ec_chart.addChartScrollbar(chartScrollbar);

            // WRITE
            ec_chart.write("ec_chartDiv");
        });
        
        //Create TDS Graph
        AmCharts.ready(function () {
            // SERIAL CHART
            var tds_chart = new AmCharts.AmSerialChart();

            tds_chart.dataProvider = ecChartData;
            tds_chart.marginLeft = 10;
            tds_chart.categoryField = "date";

            // listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
            tds_chart.addListener("dataUpdated", zoomChart);

            // AXES
            // category
            var categoryAxis = tds_chart.categoryAxis;
            categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
            categoryAxis.minPeriod = "mm"; // our data is yearly, so we set minPeriod to YYYY
            categoryAxis.dashLength = 3;
            categoryAxis.minorGridEnabled = true;
            categoryAxis.minorGridAlpha = 0.1;
            //categoryAxis.offset = 83;

            // value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.inside = true;
            valueAxis.dashLength = 3;
            valueAxis.labelOffset = -30;
            tds_chart.addValueAxis(valueAxis);

            // GRAPH
            var tds_graph = new AmCharts.AmGraph();
            tds_graph.type = "smoothedLine"; // this line makes the graph smoothed line.
            tds_graph.lineColor = "#FF9E3A";
            tds_graph.negativeBase = "1000";
            tds_graph.negativeLineColor = "#41A6A8"; // this line makes the graph to change color when it drops below 0
            tds_graph.bullet = "round";
            tds_graph.bulletSize = 8;
            tds_graph.bulletBorderColor = "#FFFFFF";
            tds_graph.bulletBorderAlpha = 1;
            tds_graph.bulletBorderThickness = 2;
            tds_graph.lineThickness = 2;
            tds_graph.valueField = "tds";
            tds_graph.selectedBackgroundColor = "#FFF";
            tds_graph.balloonText = "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>";
            tds_chart.addGraph(tds_graph);

            // CURSOR
            var chartCursor = new AmCharts.ChartCursor();
            chartCursor.cursorAlpha = 0;
            chartCursor.cursorPosition = "mouse";
            chartCursor.categoryBalloonDateFormat = "DD MMM YYYY, @HH:NN";
            chartCursor.cursorColor = "#47DBB7";
            tds_chart.addChartCursor(chartCursor);

            // SCROLLBAR
            var chartScrollbar = new AmCharts.ChartScrollbar();
            tds_chart.addChartScrollbar(chartScrollbar);

            // WRITE
            tds_chart.write("tds_chartDiv");
        });

        //Create PS Graph
        AmCharts.ready(function () {
            // SERIAL CHART
            var ps_chart = new AmCharts.AmSerialChart();

            ps_chart.dataProvider = ecChartData;
            ps_chart.marginLeft = 10;
            ps_chart.categoryField = "date";

            // listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
            ps_chart.addListener("dataUpdated", zoomChart);

            // AXES
            // category
            var categoryAxis = ps_chart.categoryAxis;
            categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
            categoryAxis.minPeriod = "mm"; // our data is yearly, so we set minPeriod to YYYY
            categoryAxis.dashLength = 3;
            categoryAxis.minorGridEnabled = true;
            categoryAxis.minorGridAlpha = 0.1;
            //categoryAxis.offset = 83;

            // value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.inside = true;
            valueAxis.dashLength = 3;
            valueAxis.labelOffset = -30;
            ps_chart.addValueAxis(valueAxis);

            // GRAPH
            ps_graph = new AmCharts.AmGraph();
            ps_graph.type = "smoothedLine"; // this line makes the graph smoothed line.
            ps_graph.lineColor = "#FF9E3A";
            ps_graph.negativeBase = "1000";
            ps_graph.negativeLineColor = "#41A6A8"; // this line makes the graph to change color when it drops below 0
            ps_graph.bullet = "round";
            ps_graph.bulletSize = 8;
            ps_graph.bulletBorderColor = "#FFFFFF";
            ps_graph.bulletBorderAlpha = 1;
            ps_graph.bulletBorderThickness = 2;
            ps_graph.lineThickness = 2;
            ps_graph.valueField = "ps";
            ps_graph.selectedBackgroundColor = "#FFF";
            ps_graph.balloonText = "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>";
            ps_chart.addGraph(ps_graph);

            // CURSOR
            var chartCursor = new AmCharts.ChartCursor();
            chartCursor.cursorAlpha = 0;
            chartCursor.cursorPosition = "mouse";
            chartCursor.categoryBalloonDateFormat = "DD MMM YYYY, @HH:NN";
            chartCursor.cursorColor = "#47DBB7";
            ps_chart.addChartCursor(chartCursor);

            // SCROLLBAR
            var chartScrollbar = new AmCharts.ChartScrollbar();
            ps_chart.addChartScrollbar(chartScrollbar);

            // WRITE
            ps_chart.write("ps_chartDiv");
        });