/**
*Name : bar_d3.js
*Varsion : 0.01 
*Globar object : $$bar
*Dependencies : D3.js
*Author : Sathish@Ducen
**/

(function (window, d3) {
   
    var l_fnHbard3 = function () {
        return new l_csHbard3_init
    };

    //Base object constructor 
    function l_csHbard3_init() {

        //Data object contain json data to visualize 
        //Type array[]
        this.data = [];

        //Bar style attributes
        //Type array[]
        this.bar_style = [];

        //Add selector to the dom
        //Type array[]
        this.selector = [];

        //Add colors to the bar Chart 
        //Type array[]
        this.colors = [];

        //Add animation to the Chart
        //Type array[]
        this.animation = [];

        //Add Events to the Chart 
        //Type array[]
        this.events = [];

        //Add Yaxis values to the Chart 
        //Type array []
        this.tickValues = [];
        
   };


    l_fnHbard3.prototype = {



        /** Add basic config to the bar chart **/
        /* Param Type : p_data[],toAppend[],yAxisValues[];
        **/
        fn_barConfig: function (p_data, toAppend, yAxisValues) {

            if (p_data instanceof Array && toAppend instanceof Array && yAxisValues instanceof Array)
            {
                var l_data = d3.map(p_data);
                var l_element = d3.map(toAppend);
                var l_yAxisValues = d3.map(yAxisValues);

                //check data is empty or not 
               
               
            } else {
                throw new Error("All parammeters should be array");
                console.log("Some parameter is not array");
            }

            var l_data = d3.map(p_data);
            var l_element = d3.map(toAppend);
            var l_yAxisValues = d3.map(yAxisValues);
        
        },

        /** AddData to the Visual 
        ** Type of param : json type
        **/
        fn_addData: function (p_jsonData) {
            this.data.push(p_jsonData);
            return this;
        },

        /** AddStyle to the Visual 
        ** Type of param : json type
        **/
        fn_addStyle : function (p_jsonStyleData){
            this.bar_style.push(p_jsonStyleData);
            return this;
        },


        /** AddSelector to the Visual 
        ** Type of param : json type
        **/
        fn_addSelectors : function(p_jsonSelectorData){
            this.selector.push(p_jsonSelectorData);
            return this;
        },

        /** AddColors to the Visual 
        ** Type of param : json type
        **/
        fn_addColors : function(p_jsonColorData){
            this.colors.push(p_jsonColorData);
            return this;
        },

        /** AddAnimation to the Visual 
        ** Type of param : json type
        **/
        fn_addAnimation : function(p_jsonAnimationAttr){
            this.animation.push(p_jsonAnimationAttr);
            return this;
        },


        fn_addYaxisValues : function(p_yaxisValues){
            this.tickValues.push(p_yaxisValues);
            return this;
        },


        /** AddEvents to the Visual 
        ** Type of param : json type
        **/
        fn_addEvents : function (p_jsonEventAttr){
            this.events.push(p_jsonEventAttr);
            return this;
        },

        fn_getCommonData: function () {
            console.log("Data");
            console.log(this.data);
            console.log("===============");

            console.log("Style");
            console.log(this.bar_style);
            console.log("===============");

            console.log("Selector");
            console.log(this.selector);
            console.log("===============");

            console.log("Colors");
            console.log(this.colors);
            console.log("==============");

            console.log("Animation");
            console.log(this.animation);
            console.log("===============");

            console.log("Events");
            console.log(this.events);
            console.log("===============");

        }


        //if Every variable i


    };




    //assign prototype to l_csHbard3_init constructor
    l_csHbard3_init.prototype = l_fnHbard3.prototype;
    
    //Add hBard3 object to globally using window object
    window.hrbr = window.$$bar = l_fnHbard3;

}(window, d3))



//BluePrint 

var data = [
{ category: "", value: 0 },
{ category: "Shorts", value: 12 },
{ category: "Water Bottle", value: 13 },
{ category: "Cage", value: 40 },
{ category: "Sleeve", value: 30 },
{ category: "Tire", value: 17 },
{ category: "Fender", value: 15 },
{ category: "Vest", value: 29 },
{ category: "Car", value: 19 },
{ category: "cap", value: 23 },
{ category: "Bike", value: 22 },
{ category: "Sathish", value: 19 }
]


var colors = ['#0000b4', '#0082ca', '#0094ff', '#0d4bcf', '#0066AE', '#074285', '#00187B', '#285964', '#405F83', '#416545'];


var tickVals = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


var xscale = d3.scale.linear()
                .domain([0, 50])
                .range([0, 722]);

var yscale = d3.scale.linear()
                .domain([0, data.length])
                .range([0, 480]);

var colorScale = d3.scale.quantize()
                .domain([0, data.length])
                .range(colors);
//finished;
var canvas = d3.select('#wrapper')
                .append('svg')
                .attr({ 'width': 900, 'height': 550 });

var xAxis = d3.svg.axis();
xAxis
    .orient('bottom')
    .scale(xscale)
    .tickFormat(function (d, i) { return tickVals[i] + "K"; })
    .tickValues(tickVals);

var yAxis = d3.svg.axis();
yAxis
    .orient('left')
    .scale(yscale)
    .tickSize(2)
    .tickFormat(function (d, i) { return data[i].category; })
    .tickValues(d3.range(data.length));

var y_xis = canvas.append('g')
                  .attr("transform", "translate(150,4)")
                  .attr('id', 'yaxis')
                  .call(yAxis);

var x_xis = canvas.append('g')
                  .attr("transform", "translate(150,480)")
                  .attr('id', 'xaxis')
                  .call(xAxis);

var chart = canvas.append('g')
                    .attr("transform", "translate(150,6)")
                    .attr('id', 'bars')
                    .selectAll('rect')
                    .data(data)
                    .enter()
                    .append('rect')
                    .attr('height', 20)
                    .attr({ 'x': 0, 'y': function (d, i) { return yscale(i); } })
                    .style('fill', function (d, i) { return colorScale(i); })
                    .attr('width', function (d) { return 0; });


chart.on("mouseover", function (d, i) {
    d3.select(this)
    .style('fill', function () {
        console.log(d);
        console.log(i);
        return colorScale(i);
    });

    canvas.append("text")
          .attr({
              id: "t" + d.value,
              x: function () { return d.value + 200; },
              y: function () { return yscale(i); }
          })
          .text(function () {
              console.log("[" + d.category + "==" + d.value + "]")
              return [d.category, +d.value];
          });

})

.on("mouseout", function (d, i) {
    d3.select("#t" + d.value).remove();
    console.log("This is triggered");
});





chart.on("mouseleave", function () {

});



canvas.on("click", function () {
    console.log('clicked');
    console.log(this);
});


var transit = d3.select("svg").selectAll("rect")
                    .data(data)
                    .transition()
                    .duration(1000)
                    .attr("width", function (d) { console.log(d); return xscale(d.value); });





//EndBluePrint


