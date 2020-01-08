$(function () {


Highcharts.data({
        googleSpreadsheetKey: '1p9JvCx9-j3MFTTLnyljLBQf83Y0YPQ7dAOJxJfe7ZEY',

        // Custom handler when the spreadsheet is parsed
        parsed: function(columns) {
            // Creating variables
            var playbutton = document.getElementById("PlayPause");
            var incidencecheck = document.getElementById("Incidence");
            var mortalitycheck = document.getElementById("Mortality");
            var allcancercheck = document.getElementById("AllCancers");
            var cervicalcheck = document.getElementById("CervicalCancer");
            var HPVAcheck = document.getElementById("HPVA");
            var ScreeningAcheck = document.getElementById("ScreeningA");
            var greenKey = document.getElementById("checkbutton10");
            var redKey = document.getElementById("checkbutton11");

            
            // Read the columns from the Google spreadsheet into the data array
            var incidencecc = [];
            $.each(columns[0], function (i, code) { 
                incidencecc.push({
                    code: code,
                    value: parseFloat(columns[1][i]),   
                })  
            });
            
            var mortalitycc = [];
            $.each(columns[0], function (i, code) {
                mortalitycc.push({
                    code: code,
                    value: parseFloat(columns[2][i]),
                })
            });

			var incidenceac = [];
            $.each(columns[0], function (i, code) {
                incidenceac.push({
                    code: code,
                    value: parseFloat(columns[4][i]),
                })
            });

			var mortalityac = [];
            $.each(columns[0], function (i, code) {
                mortalityac.push({
                    code: code,
                    value: parseFloat(columns[5][i]),
                })
            });

            
			var HPVA = [];
            $.each(columns[0], function (i, code) {
                HPVA.push({
                    code: code,
                    value: parseFloat(columns[14][i]),
                    
                })
            });

            
			var ScreeningA = [];
            $.each(columns[0], function (i, code) {
                ScreeningA.push({
                    code: code,
                    value: parseFloat(columns[6][i]),
                })
            });



            var iage2024 =[]
            $.each(columns[0], function (i, code) {
                iage2024.push({
                    code: code,
                    value: parseFloat(columns[95][i]),
                })
            });

            var iage2529 =[]
            $.each(columns[0], function (i, code) {
                iage2529.push({
                    code: code,
                    value: parseFloat(columns[96][i]),
                })
            });

            var iage3034 =[]
            $.each(columns[0], function (i, code) {
                iage3034.push({
                    code: code,
                    value: parseFloat(columns[97][i]),
                })
            });

            
            var iage3539 =[]
            $.each(columns[0], function (i, code) {
                iage3539.push({
                    code: code,
                    value: parseFloat(columns[98][i]),
                })
            });

            var iage4044 =[]
            $.each(columns[0], function (i, code) {
                iage4044.push({
                    code: code,
                    value: parseFloat(columns[99][i]),
                })
            });

            var iage4549 =[]
            $.each(columns[0], function (i, code) {
                iage4549.push({
                    code: code,
                    value: parseFloat(columns[80][i]),
                })
            });

            var iage5054 =[]
            $.each(columns[0], function (i, code) {
                iage5054.push({
                    code: code,
                    value: parseFloat(columns[100][i]),
                })
            });

            var iage5559 =[]
            $.each(columns[0], function (i, code) {
                iage5559.push({
                    code: code,
                    value: parseFloat(columns[101][i]),
                })
            });

            var iage6064 =[]
            $.each(columns[0], function (i, code) {
                iage6064.push({
                    code: code,
                    value: parseFloat(columns[102][i]),
                })
            });

            var iage6569 =[]
            $.each(columns[0], function (i, code) {
                iage6569.push({
                    code: code,
                    value: parseFloat(columns[103][i]),
                })
            });
            var iage7074 =[]
            $.each(columns[0], function (i, code) {
                iage7074.push({
                    code: code,
                    value: parseFloat(columns[104][i]),
                })
            });

            var iage019 = []
            $.each(columns[0], function (i, code) {
                iage019.push({
                    code: code,
                    value: parseFloat(columns[80][i]),
                })
            });

            var iage024 = []
            $.each(columns[0], function (i, code) {
                iage024.push({
                    code: code,
                    value: parseFloat(columns[81][i]),
                })
            });

            var iage029 = []
            $.each(columns[0], function (i, code) {
                iage029.push({
                    code: code,
                    value: parseFloat(columns[82][i]),
                })
            });

            var iage034 = []
            $.each(columns[0], function (i, code) {
                iage034.push({
                    code: code,
                    value: parseFloat(columns[83][i]),
                })
            });

            var iage039 = []
            $.each(columns[0], function (i, code) {
                iage039.push({
                    code: code,
                    value: parseFloat(columns[84][i]),
                })
            });

            var iage044 = []
            $.each(columns[0], function (i, code) {
                iage044.push({
                    code: code,
                    value: parseFloat(columns[85][i]),
                })
            });

            var iage049 = []
            $.each(columns[0], function (i, code) {
                iage049.push({
                    code: code,
                    value: parseFloat(columns[86][i]),
                })
            });

            var iage054 = []
            $.each(columns[0], function (i, code) {
                iage054.push({
                    code: code,
                    value: parseFloat(columns[87][i]),
                })
            });

            var iage059 = []
            $.each(columns[0], function (i, code) {
                iage059.push({
                    code: code,
                    value: parseFloat(columns[88][i]),
                })
            });

            var iage064 = []
            $.each(columns[0], function (i, code) {
                iage064.push({
                    code: code,
                    value: parseFloat(columns[89][i]),
                })
            });

            var iage069 = []
            $.each(columns[0], function (i, code) {
                iage069.push({
                    code: code,
                    value: parseFloat(columns[90][i]),
                })
            });

            var iage074 = []
            $.each(columns[0], function (i, code) {
                iage074.push({
                    code: code,
                    value: parseFloat(columns[91][i]),
                })
            });

            var iage079 = []
            $.each(columns[0], function (i, code) {
                iage079.push({
                    code: code,
                    value: parseFloat(columns[92][i]),
                })
            });

            var iage084 = []
            $.each(columns[0], function (i, code) {
                iage084.push({
                    code: code,
                    value: parseFloat(columns[93][i]),
                })
            });

            var iage085 = []
            $.each(columns[0], function (i, code) {
                iage085.push({
                    code: code,
                    value: parseFloat(columns[94][i]),
                })
            });

            var mage2024 =[]
            $.each(columns[0], function (i, code) {
                mage2024.push({
                    code: code,
                    value: parseFloat(columns[120][i]),
                })
            });

            var mage2529 =[]
            $.each(columns[0], function (i, code) {
                mage2529.push({
                    code: code,
                    value: parseFloat(columns[121][i]),
                })
            });

            var mage3034 =[]
            $.each(columns[0], function (i, code) {
                mage3034.push({
                    code: code,
                    value: parseFloat(columns[122][i]),
                })
            });

            
            var mage3539 =[]
            $.each(columns[0], function (i, code) {
                mage3539.push({
                    code: code,
                    value: parseFloat(columns[123][i]),
                })
            });

            var mage4044 =[]
            $.each(columns[0], function (i, code) {
                mage4044.push({
                    code: code,
                    value: parseFloat(columns[124][i]),
                })
            });

            var mage4549 =[]
            $.each(columns[0], function (i, code) {
                mage4549.push({
                    code: code,
                    value: parseFloat(columns[125][i]),
                })
            });

            var mage5054 =[]
            $.each(columns[0], function (i, code) {
                mage5054.push({
                    code: code,
                    value: parseFloat(columns[126][i]),
                })
            });

            var mage5559 =[]
            $.each(columns[0], function (i, code) {
                mage5559.push({
                    code: code,
                    value: parseFloat(columns[127][i]),
                })
            });

            var mage6064 =[]
            $.each(columns[0], function (i, code) {
                mage6064.push({
                    code: code,
                    value: parseFloat(columns[128][i]),
                })
            });

            var mage6569 =[]
            $.each(columns[0], function (i, code) {
                mage6569.push({
                    code: code,
                    value: parseFloat(columns[129][i]),
                })
            });
            var mage7074 =[]
            $.each(columns[0], function (i, code) {
                mage7074.push({
                    code: code,
                    value: parseFloat(columns[130][i]),
                })
            });

            var mage019 = []
            $.each(columns[0], function (i, code) {
                mage019.push({
                    code: code,
                    value: parseFloat(columns[105][i]),
                })
            });

            var mage024 = []
            $.each(columns[0], function (i, code) {
                mage024.push({
                    code: code,
                    value: parseFloat(columns[106][i]),
                })
            });

            var mage029 = []
            $.each(columns[0], function (i, code) {
                mage029.push({
                    code: code,
                    value: parseFloat(columns[107][i]),
                })
            });

            var mage034 = []
            $.each(columns[0], function (i, code) {
                mage034.push({
                    code: code,
                    value: parseFloat(columns[108][i]),
                })
            });

            var mage039 = []
            $.each(columns[0], function (i, code) {
                mage039.push({
                    code: code,
                    value: parseFloat(columns[109][i]),
                })
            });

            var mage044 = []
            $.each(columns[0], function (i, code) {
                mage044.push({
                    code: code,
                    value: parseFloat(columns[110][i]),
                })
            });

            var mage049 = []
            $.each(columns[0], function (i, code) {
                mage049.push({
                    code: code,
                    value: parseFloat(columns[111][i]),
                })
            });

            var mage054 = []
            $.each(columns[0], function (i, code) {
                mage054.push({
                    code: code,
                    value: parseFloat(columns[112][i]),
                })
            });

            var mage059 = []
            $.each(columns[0], function (i, code) {
                mage059.push({
                    code: code,
                    value: parseFloat(columns[113][i]),
                })
            });

            var mage064 = []
            $.each(columns[0], function (i, code) {
                mage064.push({
                    code: code,
                    value: parseFloat(columns[114][i]),
                })
            });

            var mage069 = []
            $.each(columns[0], function (i, code) {
                mage069.push({
                    code: code,
                    value: parseFloat(columns[115][i]),
                })
            });

            var mage074 = []
            $.each(columns[0], function (i, code) {
                mage074.push({
                    code: code,
                    value: parseFloat(columns[116][i]),
                })
            });

            var mage079 = []
            $.each(columns[0], function (i, code) {
                mage079.push({
                    code: code,
                    value: parseFloat(columns[117][i]),
                })
            });

            var mage084 = []
            $.each(columns[0], function (i, code) {
                mage084.push({
                    code: code,
                    value: parseFloat(columns[118][i]),
                })
            });

            var mage085 = []
            $.each(columns[0], function (i, code) {
                mage085.push({
                    code: code,
                    value: parseFloat(columns[119][i]),
                })
            });

            //Creating data series for incidence through ages
            var datatimeseries = [
                {
                    name: '0-19',
                    data: iage019,
                },
                {
                    name: '0-24',
                    data: iage024
                },
                {
                    name: '0-29',
                    data: iage029
                },
                {
                    name: '0-34',
                    data: iage034
                },
                {
                    name: '0-39',
                    data: iage039
                },
                {
                    name: '0-44',
                    data: iage044
                },
                {
                    name: '0-49',
                    data: iage049
                },
                {
                    name: '0-54',
                    data: iage054
                },
                {
                    name: '0-59',
                    data: iage059
                },
                {
                    name: '0-64',
                    data: iage064
                },
                {
                    name: '0-69',
                    data: iage069
                },
                {
                    name: '0-74',
                    data: iage074
                },
                {
                    name: '0-79',
                    data: iage079
                },
                {
                    name: '0-84',
                    data: iage084
                },
                {
                    name: '85+',
                    data: iage085
                }
                ];

            //Creating data series for mortality through ages
            var datatimeseries2 = [
                {
                    name: '0-19',
                    data: mage019
                },
                {
                    name: '0-24',
                    data: mage024
                },
                {
                    name: '0-29',
                    data: mage029
                },
                {
                    name: '0-34',
                    data: mage034
                },
                {
                    name: '0-39',
                    data: mage039
                },
                {
                    name: '0-44',
                    data: mage044
                },
                {
                    name: '0-49',
                    data: mage049
                },
                {
                    name: '0-54',
                    data: mage054
                },
                {
                    name: '0-59',
                    data: mage059
                },
                {
                    name: '0-64',
                    data: mage064
                },
                {
                    name: '0-69',
                    data: mage069
                },
                {
                    name: '0-74',
                    data: mage074
                },
                {
                    name: '0-79',
                    data: mage079
                },
                {
                    name: '0-84',
                    data: mage084
                },
                {
                    name: '85+',
                    data: mage085
                }
            ];
            
            //Creating functions
			//Click on country to create a chart
            function pointClick() {
                $div = $('<div></div>')
                    .dialog({
                        width: 1200,
                        height: 900
                    });
                //Extract country name ID and find relevant row in spreadsheet
                var a = this.code;
                console.log("new", a);
                for( var i = 0; i < columns[0].length; i++ ) {
                    if ( columns[0][i] != a ) {
                    //do nothing
                    }
                else return [i];
                //Create a rownumber variable for selected country
                var rownum = i+1;
            
                //Create the line chart for the selected country
                window.chart6 = new Highcharts.Chart({  
                    
                    title:{
                        text: this.name + (" Cervical Cancer Mortality Over the Years"),
                        style: { "color": "#060a82","fontSize": "30px", "fontFamily" : "Arial", "fontFamily" : "sans-serif", "fontWeight" : "bold"}
                    },
                    
                    chart:{
                        renderTo: $div[0],
                        type: 'line',
                        width: 1000,
                        height: 680,
                        borderColor: '#060a82',
                        borderWidth: 5
                        
                        
                    },
                    //X-Axis - Add all years that data is available
                    xAxis:{
                        
                        min: null,
                        
                        title:{
                            text: 'Years'
                        },  
                        categories: ['1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966',
                                     '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983',
                                     '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                                     '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013']
                    },
                    
                    yAxis:{
                        title:{
                            text: 'Mortality'
                        },
                    },    
                    //Using rownum variable extract all data for selected country
                    series:[{
                        showInLegend: false,   
                        color: '#ab3aad',
                        data:[
                            {y: parseFloat(columns[16][rownum]),
                             x:0},
                            {y: parseFloat(columns[17][rownum]),
                             x:1},
                            {y: parseFloat(columns[18][rownum]),
                             x:2},
                            {y: parseFloat(columns[19][rownum]),
                             x:3},
                            {y: parseFloat(columns[20][rownum]),
                             x:4},
                            {y: parseFloat(columns[21][rownum]),
                             x:5},
                            {y: parseFloat(columns[22][rownum]),
                             x:6},
                            {y: parseFloat(columns[23][rownum]),
                             x:7},
                            {y: parseFloat(columns[24][rownum]),
                                x:8},
                            {y: parseFloat(columns[25][rownum]),
                                x:9},
                            {y: parseFloat(columns[26][rownum]),
                                x:10},
                            {y: parseFloat(columns[27][rownum]),
                                x:11},
                            {y: parseFloat(columns[28][rownum]),
                                x:12},
                            {y: parseFloat(columns[29][rownum]),
                                x:13},
                            {y: parseFloat(columns[22][rownum]),
                                x:14},
                            {y: parseFloat(columns[23][rownum]),
                                x:15},
                            {y: parseFloat(columns[24][rownum]),
                                x:16},
                            {y: parseFloat(columns[25][rownum]),
                                x:17},
                            {y: parseFloat(columns[26][rownum]),
                                x:18},
                            {y: parseFloat(columns[27][rownum]),
                                x:19},
                            {y: parseFloat(columns[28][rownum]),
                                x:20},
                            {y: parseFloat(columns[29][rownum]),
                                x:21},
                            {y: parseFloat(columns[30][rownum]),
                                x:22},
                            {y: parseFloat(columns[31][rownum]),
                                x:23},
                            {y: parseFloat(columns[32][rownum]),
                                x:24},
                            {y: parseFloat(columns[33][rownum]),
                                x:25},
                            {y: parseFloat(columns[34][rownum]),
                                x:26},
                            {y: parseFloat(columns[35][rownum]),
                                x:27},
                            {y: parseFloat(columns[36][rownum]),
                                x:28},
                            {y: parseFloat(columns[37][rownum]),
                                x:30},
                            {y: parseFloat(columns[38][rownum]),
                                x:31},
                            {y: parseFloat(columns[39][rownum]),
                                x:32},
                            {y: parseFloat(columns[40][rownum]),
                                x:33},
                            {y: parseFloat(columns[41][rownum]),
                                x:34},
                            {y: parseFloat(columns[42][rownum]),
                                x:35},
                            {y: parseFloat(columns[43][rownum]),
                                x:36},
                            {y: parseFloat(columns[44][rownum]),
                                x:37},
                            {y: parseFloat(columns[45][rownum]),
                                x:38},
                            {y: parseFloat(columns[46][rownum]),
                                x:39},
                            {y: parseFloat(columns[47][rownum]),
                                x:40},
                            {y: parseFloat(columns[48][rownum]),
                                x:41},                           
                            {y: parseFloat(columns[49][rownum]),
                                x:42},
                            {y: parseFloat(columns[50][rownum]),
                                x:43},
                            {y: parseFloat(columns[51][rownum]),
                                x:44},
                            {y: parseFloat(columns[52][rownum]),
                                x:45},
                            {y: parseFloat(columns[53][rownum]),
                                x:46},
                            {y: parseFloat(columns[54][rownum]),
                                x:47},
                            {y: parseFloat(columns[55][rownum]),
                                x:48},
                            {y: parseFloat(columns[56][rownum]),
                                x:49},
                            {y: parseFloat(columns[57][rownum]),
                                x:50},
                            {y: parseFloat(columns[58][rownum]),
                                x:51},
                            {y: parseFloat(columns[59][rownum]),
                                x:52},
                            {y: parseFloat(columns[60][rownum]),
                                x:53},
                            {y: parseFloat(columns[61][rownum]),
                                x:54},
                            {y: parseFloat(columns[62][rownum]),
                                x:55},
                            {y: parseFloat(columns[63][rownum]),
                                x:56},
                            {y: parseFloat(columns[64][rownum]),
                                x:57},
                            {y: parseFloat(columns[65][rownum]),
                                x:58},
                            {y: parseFloat(columns[66][rownum]),
                                x:59},
                            {y: parseFloat(columns[67][rownum]),
                                x:60},
                            {y: parseFloat(columns[68][rownum]),
                                x:61},
                            {y: parseFloat(columns[69][rownum]),
                                x:62},
                            {y: parseFloat(columns[70][rownum]),
                                x:63}
                                                        
                        ]
                        
                    }],
                                
                    point:{
                        events:{
                            click: pointClick
                        }                
                    }
                
                });
                }
            }

            //Update the chart. This happens either on updating (moving) the range input,
            //or from a timer when the timeline is playing.   
            function update(increment) {
                var input = $('#play-range')[0],
                    output = $('#play-output')[0];
                

                if (increment) {
                    input.value = parseInt(input.value) + increment;
                }
          
                if (incidencecheck.checked){console.log("incidence checked")}
                if (playbutton.click){console.log("playbutton clicked")}
                if (mortalitycheck.checked){console.log("mortality checked")}
                
                
                if (incidencecheck.checked && playbutton.click && cervicalcheck.checked){
                    // Increment dataset (updates chart)
                    chart.series[0].setData(datatimeseries[input.value].data);
                    // Output value
                    output.innerHTML = datatimeseries[input.value].name; 
                    document.getElementById("PlayPause").hidden = false;
                    // Auto-pause
                    if (input.value === input.max) { 
                        document.getElementById("PlayPause").click(),
                        //Reset
                        input.value = input.min;
                    }
                }
                if (mortalitycheck.checked && playbutton.click && cervicalcheck.checked){
                    // Increment dataset (updates chart)
                    chart.series[0].setData(datatimeseries2[input.value].data);
                    // Output value
                    output.innerHTML = datatimeseries[input.value].name; 
                    document.getElementById("PlayPause").hidden = false;
                    // Auto-pause
                    if (input.value === input.max) { 
                        document.getElementById("PlayPause").click(),
                        //Reset
                        input.value = input.min;
                    }
                }    
            
                if (allcancercheck.checked){
                    
                    document.getElementById("PlayPause").hidden = true;
                    
                }
                console.log(input.value);
   
            }
         
            //Play timeline, button changes to pause
            function play(button) {
                button.title = 'pause';
                button.className = 'h-pause';
                chart.sequenceTimer = setInterval ( function () {
                    update(1);
                }, 1000);
        
            }
            
            //Pause timeline 
            //Timer can time out or pause clicked 
            //Changes button to play
            function pause(button) {
                button.title = 'play';
                button.className = 'h-play';
                clearTimeout(chart.sequenceTimer);
                chart.sequenceTimer = undefined;
            }

            //Instantiate the map
            chart = $('#CervicalCancerMap').highcharts('Map', {
                
                chart : {
                    
                },
            
                title : {
                    text : 'Incidence of Cervical Cancer Worldwide (ASR)',
                    margin: 60,
                    style: { "color": "#060a82", "fontSize": "40", "fontFamily" : "Arial", "fontWeight" : "bold"},
                },

                mapNavigation: {
                    enabled: true,
                    enableDoubleClickZoomTo: true
                },


                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'bottom',
                    y: 25
            

                     
                },

                plotOptions:{
                    map:{
                        nullColor: 'white'
                    }
                },

                colorAxis: {
                    min: 0,
                    max: 100,
                    maxColor: '#060a82',
                    nullColor: 'white'
                },


                series: [{
                    animation: true,
                    name: 'World Map',
                    mapData: Highcharts.maps['custom/world'],
                    data: incidencecc,
                    joinBy: ['hc-key','code'],
                    dataLabels: {
                        color: '#f4f5f9',
                        format: '{point.name}',
                        style: {
                            fontWeight: 'bold',
                            textShadow: '0 0 1px black'
                        }
                    },
                    point: {
                        events: {
                            click: pointClick
                        }
                    },
                    
                   
                    
                        
                }],

                
            });
            //Create the tab responses
            $('#Screening').click(function(){
                openTopic(event, "Screening")});

            $('#Why').click(function(){
                openTopic(event, "Why")});    

            $('#Map').click(function(){
                openTopic(event, "Map")});

            $('#RelatedDiseases').click(function(){
                openTopic(event, "RelatedDiseases")});

            $('#References').click(function(){
                openTopic(event, "References")});

            function openTopic(evt, topicName) {
                // Declare all variables
                var i, tabcontent, tablinks;
              
                // Get all elements with class="tabcontent" and hide them
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                  tabcontent[i].style.display = "none";
                }
              
                // Get all elements with class="tablinks" and remove the class "active"
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                  tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
              
                // Show the current tab, and add an "active" class to the button that opened the tab
               document.getElementById(topicName+'Tab').style.display = "block";
               evt.currentTarget.className += " active";

               console.log(document.getElementById(topicName));
            };

              

        //Creating functions
             
        //Click HIV/AIDS Infographic to show more
        $('#CervicalCancerHIVStat').click(function(){
            var $div = $('<div></div>')
                    .dialog({
                        width: 640,
                        height: 600
                    });
        
            //Create the bar chart - Incidence of HIV across continents
            window.chart5 = new Highcharts.chart({
                chart : {
                    renderTo: $div[0],
                    type: 'column',
                    width: 600,
                    height: 560,
                    borderColor: '#060a82',
                    borderWidth: 5,
                },
                
                title : {
                    text : 'Incidence of HIV/AIDs Across Continents',
                    style: { "color": "#060a82","fontSize": "large", "fontFamily" : "Arial", "fontFamily" : "sans-serif", "fontWeight" : "bold"}
                },

                xAxis: { 
                    
                    categories: [
                        'Africa', 'Americas', 'South-East Asia', 'Europe', 'Eastern Mediterranean', 'Western Pacific'
                    ],
                    crosshair:true},

                    yAxis:{
                        min:0, 
                        title: {
                            text: 'Average Number of People Infected'

                        }
                    },

                    plotOptions: {
                        column: {
                            pointWidth: 30,
                            pointPadding:0.6
                         

                        }
                    },
                    series: [{
                        showInLegend: false,
                        type: 'column',
                        data: [
                            {y:25700000, color: 'green'},
                            {y:3400000, color: 'red'},
                            {y:3500000, color: 'purple'},
                            {y:2300000, color: 'blue'},
                            {y:350000, color: 'orange'},
                            {y:1500000, color: 'yellow'}

                        ]

                    }

                    ],

                    
                })
            });

            //Smoking Chart
            $('#CervicalCancerSmoking').click(function(){
                var $div = $('<div></div>')
                        .dialog({
                            width: 640,
                            height: 600
                        });

                window.chart4 = new Highcharts.chart({
                    chart : {
                        renderTo: $div[0],
                        type: 'column',
                        width: 600,
                        height: 560,
                        borderColor: '#060a82',
                        borderWidth: 8,
                    },
                    
                    title : {
                        text : 'Age-standardized prevalence of current tobacco smoking among persons aged 15 years and older',
                        style: { "color": "#060a82","fontSize": "large", "fontFamily" : "Arial", "fontFamily" : "sans-serif", "fontWeight" : "bold"}
                    },
    
                    xAxis: { 
                        
                        categories: [
                            'Africa', 'Americas', 'South-East Asia', 'Europe', 'Eastern Mediterranean', 'Western Pacific'
                        ],
                        crosshair:true},
    
                        yAxis:{
                            min:0, 
                            title: {
                                text: 'Amount of Smokers (ASR)'
    
                            }
                        },
    
                        plotOptions: {
                            column: {
                                pointWidth: 30,
                                pointPadding:0.6
                             
    
                            }
                        },
                        series: [{
                            showInLegend: false,
                            type: 'column',
                            data: [
                                {y:9.8, color: '#556B2F'},
                                {y:16.9, color: '#FF6347'},
                                {y:16.9, color: '#800080'},
                                {y:29.4, color: '#99ccff'},
                                {y:18.1, color: '#FFA500'},
                                {y:24.5, color: '#ffdd1a'}
                                
                            ]
    
                        }

                        ],
    
                        
                    })
                });
        
                //Number of Children Chart
                $('#CervicalCancerChild').click(function(){
                    var $div = $('<div></div>')
                            .dialog({
                                width: 640,
                                height: 600
                            });
    
                    window.chart3 = new Highcharts.chart({
                        chart : {
                            renderTo: $div[0],
                            type: 'column',
                            width: 600,
                            height: 560,
                            borderColor: '#060a82',
                            borderWidth: 5,
                        },
                        
                        title : {
                            text : 'Average number of children per woman between 2010-2015',
                            style: { "color": "#060a82","fontSize": "large", "fontFamily" : "Arial", "fontFamily" : "sans-serif", "fontWeight" : "bold"}
                        },
        
                        xAxis: { 
                            
                            categories: [
                                'Africa', 'Americas', 'South-East Asia', 'Europe', 'Oceania'
                            ],
                            crosshair:true},
        
                            yAxis:{
                                min:0, 
                                title: {
                                    text: 'Average number of children pre woman'
        
                                }
                            },
        
                            plotOptions: {
                                column: {
                                    pointWidth: 30,
                                    pointPadding:0.6
                                 
        
                                }
                            },
                            series: [{
                                showInLegend: false,
                                type: 'column',
                                data: [
                                    {y:4.7, color: 'green'},
                                    {y:1.9, color: 'red'},
                                    {y:2.2, color: 'purple'},
                                    {y:1.6, color: 'blue'},
                                    {y:2.4, color: 'yellow'}
                                    
                                ]
        
                            }

                            ],
        
                            
                        })
                    });
                

        //Create the bar chart - reasons for not attending screening
        $('#viewAllReasonsButton').click(function(){
            var $div = $('<div></div>')
                    .dialog({
                        renderTo: 'ScreeningDecreasing',
                        style: {"position":"fixed","z-index":"10","max-height": "500"},
                        width: 900,
                        
                    });

            window.chart2 = new Highcharts.chart({
                chart : {
                    renderTo: $div[0],
                    type: 'column',
                    width: 800,
                    height: 500,
                    borderColor: '#060a82',
                    borderWidth: 5
                    
                },
            
                title : {
                    text : 'Reasons for not attending screening',
                    style: { "color": "#060a82", "fontSize": "36px", "fontFamily" : "Arial", "fontFamily" : "sans-serif", "fontWeight" : "bold"}
                },

                xAxis: { 
                    categories: [
                        'Being embarrassed', 'Had not shaved or waxed bikini area', 'Would not go if they had to take time off work', 'Would not miss the gym ', 'Said it is too hard to make an appointment',
                        'Did not know where to get the test', 'Would rather not know if something was wrong'
                    ],
                    crosshair:true},
                yAxis:{
                    min:0,
                    max:100,
                    title: {
                        text: 'Percentage (%)'

                    }
                },

                plotOptions: {
                    column: {
                        pointPadding:0.6,
                        pointWidth: 30                   

                    }
                },
                
                series: [{
                    showInLegend: false,
                    data: [
                        {y:35, color:'#ebc6e4'},
                        {y:31, color:'#dea0d2'},
                        {y:35, color:'#d17ac0'},
                        {y:16, color:'#cb67b7'},
                        {y:26, color:'#c454ae'},
                        {y:30, color:'#ab3aad'},
                        {y:20, color:'#be41a5'}
                    ]  
                
                }]

            });
        
        });
      
        //Ensuring only one of Cervical Cancers/All Cancers and Incidence/Mortality can be selected
        $('input[type="checkbox"]').on('change', function() {
            $('input[name="' + this.name + '"]').not(this).prop('checked', false);
        });
              
        //Create the checkbox responses
        $('#Incidence, #CervicalCancer').click(function(){
            if (incidencecheck.checked && cervicalcheck.checked) {
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], incidencecc))
                chart.title.update({ text: 'Incidence of Cervical Cancer Worldwide (ASR)'})
                chart.colorAxis[0].update({
                min: 0,
                max: 100,
                maxColor: '#060a82',
                nullColor: 'white',
                //Remove stops that may be in place by clicking HPV/Screening buttons
                stops: null
                })
                chart.legend.update({
                    enabled: true
                })
                redKey.hidden = true;
                greenKey.hidden = true;
            }
        }) 

        $('#Mortality, #CervicalCancer').click(function(){
            if (mortalitycheck.checked && cervicalcheck.checked) {
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mortalitycc))
                chart.title.update({ text: 'Cervical Cancer Mortality Worldwide (ASR)'})
                chart.colorAxis[0].update({
                    min: 0,
                    max: 100,
                    maxColor: '#060a82',
                    nullColor: 'white',
                    //Remove stops that may be in place by clicking HPV/Screening buttons
                    stops: null
                    })
                    chart.legend.update({
                        enabled: true
                    })
                    redKey.hidden = true;
                    greenKey.hidden = true;
            }
        }) 

        $('#Incidence, #AllCancers').click(function(){
            if (incidencecheck.checked && allcancercheck.checked) {
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], incidenceac))
                chart.title.update({ text: 'Incidence of All Cancers Worldwide (ASR)'})
                chart.colorAxis[0].update({
                    min: 0,
                    max: 500,
                    maxColor: '#060a82',
                    nullColor: 'white',
                    //Remove stops that may be in place by clicking HPV/Screening buttons
                    stops: null
                    })
                    chart.legend.update({
                        enabled: true
                    })
                    redKey.hidden = true;
                    greenKey.hidden = true;
            }
        }) 

        $('#Mortality, #AllCancers').click(function(){
            if (mortalitycheck.checked && allcancercheck.checked) {
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mortalityac))
                chart.title.update({ text: 'All Cancers Mortality Worldwide (ASR)'})
                chart.colorAxis[0].update({
                    min: 0,
                    max: 500,
                    maxColor: '#060a82',
                    nullColor: 'white',
                    //Remove stops that may be in place by clicking HPV/Screening buttons
                    stops: null
                    })
                    chart.legend.update({
                        enabled: true
                    })
                    redKey.hidden = true;
                    greenKey.hidden = true;
            }
        }) 

        $('#HPVA, #CervicalCancer').click(function(){
            if (HPVAcheck.checked && cervicalcheck.checked) {
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], HPVA))
                chart.title.update({ text: 'Countries with access to HPV Vaccination Programme 2017'})
                //Changing coloraxis to red green and white to highlight availability of HPV
                chart.colorAxis[0].update({
                    min: 0,
                    max: 2,
                    stops: [
                        [0, '#cc0000'],
                        [0.9, 'green'],
                        [1.9, '#ffffff']
                    ],
                })
                chart.legend.update({
                    enabled: false
                }),
                redKey.hidden = false,
                greenKey.hidden = false;
            }
        }) 

        $('#ScreeningA, #CervicalCancer').click(function(){
            if (ScreeningAcheck.checked && cervicalcheck.checked) {
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], ScreeningA))
                chart.title.update({ text: 'Countries With Access to a Cervical Cancer <br> Screening Programme 2017'})
                //Changing coloraxis to red green and white to highlight availability of screening
                chart.colorAxis[0].update({
                    min: 0,
                    stops: [
                        [0, '#cc0000'],
                        [0.9, 'green'],
                        [1.9, '#ffffff']
                    ],
                })
                chart.legend.update({
                    enabled: false
                }),
                redKey.hidden = false,
                greenKey.hidden = false;
            }
        }) 

        $('#Incidence, #CervicalCancer, #PlayPause').click(function(){
            if (incidencecheck.checked && cervicalcheck.checked && playbutton.checked) {
                chart.title.update({ text: 'Incidence of All Cancers Worldwide - Through Ages (ASR)'})}})

        $('#Mortality, #CervicalCancer, #PlayPause').click(function(){
            if (mortalitycheck.checked && cervicalcheck.checked && playbutton.checked) {
                chart.title.update({ text: 'Cervical Cancer Mortality Worldwide - Through Ages (ASR)'})}})



        $('#display').click(function(){        
            var value = $("#dropdown").val(); 
            if (incidencecheck.checked && cervicalcheck.checked && value === "20-24") {
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage2024))}
            else if (incidencecheck.checked && cervicalcheck.checked && value === "25-29"){
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage2529))}
            else if (incidencecheck.checked && cervicalcheck.checked && value === "30-34"){
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage3034))}
            else if (incidencecheck.checked && cervicalcheck.checked && value === "35-39"){
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage3539))}
            else if (incidencecheck.checked && cervicalcheck.checked && value === "40-44"){
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage4044))}
            else if (incidencecheck.checked && cervicalcheck.checked && value === "45-49"){
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage4549))}
            else if (incidencecheck.checked && cervicalcheck.checked && value === "50-54"){
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage5054))}
            else if (incidencecheck.checked && cervicalcheck.checked && value === "55-59"){
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage5559))}
            else if (incidencecheck.checked && cervicalcheck.checked && value === "60-64"){
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage6064))}
            else if (incidencecheck.checked && cervicalcheck.checked && value === "65-69"){
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage6569))}
            else if (incidencecheck.checked && cervicalcheck.checked && value === "70-74"){
                $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], iage7074))}
        
            chart.title.update({ text: 'Incidence of Cervical Cancer Ages ' + value})
                chart.colorAxis[0].update({
                    min: 0,
                    max: 100,
                    maxColor: '#060a82',
                    nullColor: 'white',
                    //Remove stops that may be in place by clicking HPV/Screening buttons
                    stops: null
                    })
                    chart.legend.update({
                        enabled: true
                    })
            })     

        
            $('#display').click(function(){        
                var value = $("#dropdown").val(); 
                if (mortalitycheck.checked && cervicalcheck.checked && value === "20-24") {
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage2024))}
                else if (mortalitycheck.checked && cervicalcheck.checked && value === "25-29"){
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage2529))}
                else if (mortalitycheck.checked && cervicalcheck.checked && value === "30-34"){
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage3034))}
                else if (mortalitycheck.checked && cervicalcheck.checked && value === "35-39"){
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage3539))}
                else if (mortalitycheck.checked && cervicalcheck.checked && value === "40-44"){
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage4044))}
                else if (mortalitycheck.checked && cervicalcheck.checked && value === "45-49"){
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage4549))}
                else if (mortalitycheck.checked && cervicalcheck.checked && value === "50-54"){
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage5054))}
                else if (mortalitycheck.checked && cervicalcheck.checked && value === "55-59"){
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage5559))}
                else if (mortalitycheck.checked && cervicalcheck.checked && value === "60-64"){
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage6064))}
                else if (mortalitycheck.checked && cervicalcheck.checked && value === "65-69"){
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage6569))}
                else if (mortalitycheck.checked && cervicalcheck.checked && value === "70-74"){
                    $('#CervicalCancerMap').highcharts().series[0].setData($.extend(true, [], mage7074))}
            
                chart.title.update({ text: 'Cervical Cancer Mortality Ages ' + value})
                    chart.colorAxis[0].update({
                        min: 0,
                        max: 100,
                        maxColor: '#060a82',
                        nullColor: 'white',
                        //Remove stops that may be in place by clicking HPV/Screening buttons
                        stops: null
                        })
                        chart.legend.update({
                            enabled: true
                        })
                })     

     
        chart = $('#CervicalCancerMap').highcharts();
        
        //Toggle play and pause from the button
        $('#PlayPause').bind('click', function () {
            if (chart.sequenceTimer === undefined) {
                play(this);
         
            } else {
                pause(this);
                
            }
 
        });
   
        //Update the chart when the input is changed
        $('#play-range').bind('input', function () {
            update();
        });
 
        //Create image change responses when radio buttons selected
        $('input:radio[name="why"]').change(
            function(){
                var $src = "";
                if ($(this).val() == '1') {
                    $src = "slide1.jpg"
                }
                else if ($(this).val() == '2') {
                    $src = "slide4.jpg"
                }
                else if ($(this).val() == '3') {
                    $src = "slide2.jpg"
                }
                else if ($(this).val() == '4') {
                    $src = "slide3.jpg"
                }
                else if ($(this).val() == '5') {
                    $src = "slide5.jpg"
                }
                else if ($(this).val() == '6') {
                    $src = "slide8.jpg"
                }
                else if ($(this).val() == '7') {
                    $src = "slide6.jpg"
                }
                else{
                    $src = "slide7.jpg"
                }
                $('.whyimage').attr('src',$src);
            
            });
            
            //Create the chart showing screening rates decreasing       
            Highcharts.chart('ScreeningDecreasing', {

                title: {
                    text: 'Cervical Cancer Screening Uptake',
                    margin:30,
                    style: { "color": "#060a82", "fontSize": "36px", "fontFamily" : "Arial", "fontFamily" : "sans-serif", "fontWeight" : "bold"}
                    
                },

                yAxis: {
                    title: {
                        text: 'Cervical Screening Uptake (%)',
                        style: {"fontFamily" : "Arial"},
                        min: 0,
                        max: 100
                    }
                },

                xAxis:{
                    title:{
                            text: 'Financial Year',
                            style: {"fontFamily" : "Arial"}
                            },  
                            categories: ['2008-2009', '2009-2010', '2010-2011', '2011-2012', '2012-2013', '2013-2014', '2014-2015']
                        },
                    
                legend: {
                
                    layout: 'horizontal',
                    borderWidth: 0,
                    floating: true,
                    verticalAlign: 'bottom',
                    y: 25,
                    style: {"fontFamily" : "Arial"}
                },
                
                series: [{
                    name: 'England (aged 25 to 49)',
                    color: '#ab3aad',
                    data: [	72.5,	74.0,	73.7,	73.5,	71.5,	71.9,	71.3]
                }, {
                    name: 'England (aged 50 to 64)',
                    color: '#060a82',
                    data: [	80.0,	78.9,	78.0,	77.8,	77.5,	77.0,	76.5]
                }

            ],
            
            });

            //Click on Screening tab to load it when html opened
            document.getElementById("Why").click();
    
                    }

    })

});