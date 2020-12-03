/*
  Highcharts JS v6.1.4 (2018-09-25)
 Tilemap module

 (c) 2010-2017 Highsoft AS

 License: www.highcharts.com/license
*/
(function(h){"object"===typeof module&&module.exports?module.exports=h:"function"===typeof define&&define.amd?define(function(){return h}):h(Highcharts)})(function(h){(function(d){var h=d.defined,r=d.each,x=d.noop,u=d.seriesTypes;d.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(d){var e=this,a=d?"show":"hide";e.visible=!!d;r(["graphic","dataLabel"],function(b){if(e[b])e[b][a]()})},setState:function(e){d.Point.prototype.setState.call(this,
e);this.graphic&&this.graphic.attr({zIndex:"hover"===e?1:0})}};d.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:x,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:u.column.prototype.pointAttribs,translateColors:function(){var d=this,w=this.options.nullColor,a=this.colorAxis,b=this.colorKey;r(this.data,function(c){var f=c[b];if(f=c.options.color||(c.isNull?w:a&&
void 0!==f?a.toColor(f,c):c.color||d.color))c.color=f})},colorAttribs:function(d){var e={};h(d.color)&&(e[this.colorProp||"fill"]=d.color);return e}}})(h);(function(d){var h=d.colorPointMixin,r=d.each,x=d.merge,u=d.noop,e=d.pick,w=d.Series,a=d.seriesType,b=d.seriesTypes;a("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},
states:{hover:{halo:!1,brightness:.2}}},x(d.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var c;b.scatter.prototype.init.apply(this,arguments);c=this.options;c.pointRange=e(c.pointRange,c.colsize||1);this.yAxis.axisPointRange=c.rowsize||1},translate:function(){var b=this.options,a=this.xAxis,d=this.yAxis,v=b.pointPadding||0,k=function(b,a,c){return Math.min(Math.max(a,b),c)};this.generatePoints();r(this.points,function(c){var g=
(b.colsize||1)/2,f=(b.rowsize||1)/2,l=k(Math.round(a.len-a.translate(c.x-g,0,1,0,1)),-a.len,2*a.len),g=k(Math.round(a.len-a.translate(c.x+g,0,1,0,1)),-a.len,2*a.len),t=k(Math.round(d.translate(c.y-f,0,1,0,1)),-d.len,2*d.len),f=k(Math.round(d.translate(c.y+f,0,1,0,1)),-d.len,2*d.len),m=e(c.pointPadding,v);c.plotX=c.clientX=(l+g)/2;c.plotY=(t+f)/2;c.shapeType="rect";c.shapeArgs={x:Math.min(l,g)+m,y:Math.min(t,f)+m,width:Math.abs(g-l)-2*m,height:Math.abs(f-t)-2*m}});this.translateColors()},drawPoints:function(){b.column.prototype.drawPoints.call(this);
r(this.points,function(b){b.graphic.attr(this.colorAttribs(b))},this)},animate:u,getBox:u,drawLegendSymbol:d.LegendSymbolMixin.drawRectangle,alignDataLabel:b.column.prototype.alignDataLabel,getExtremes:function(){w.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;w.prototype.getExtremes.call(this)}}),d.extend({haloPath:function(b){if(!b)return[];var a=this.shapeArgs;return["M",a.x-b,a.y-b,"L",a.x-b,a.y+a.height+b,a.x+a.width+b,a.y+a.height+b,a.x+
a.width+b,a.y-b,"Z"]}},h))})(h);(function(d){var h=d.seriesType,r=d.each,x=d.reduce,u=d.pick,e=function(a,b,c){return Math.min(Math.max(b,a),c)},w=function(a,b,c){a=a.options;return{xPad:(a.colsize||1)/-b,yPad:(a.rowsize||1)/-c}};d.tileShapeTypes={hexagon:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return w(a,3,2)},haloPath:function(a){if(!a)return[];var b=this.tileEdges;return["M",b.x2-a,b.y1+a,"L",b.x3+a,b.y1+a,b.x4+1.5*a,b.y2,b.x3+a,b.y3-a,b.x2-a,
b.y3-a,b.x1-1.5*a,b.y2,"Z"]},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,y=(a.colsize||1)/3,h=(a.rowsize||1)/2,k;this.generatePoints();r(this.points,function(a){var g=e(Math.floor(b.len-b.translate(a.x-2*y,0,1,0,1)),-b.len,2*b.len),f=e(Math.floor(b.len-b.translate(a.x-y,0,1,0,1)),-b.len,2*b.len),l=e(Math.floor(b.len-b.translate(a.x+y,0,1,0,1)),-b.len,2*b.len),t=e(Math.floor(b.len-b.translate(a.x+2*y,0,1,0,1)),-b.len,2*b.len),m=e(Math.floor(c.translate(a.y-
h,0,1,0,1)),-c.len,2*c.len),n=e(Math.floor(c.translate(a.y,0,1,0,1)),-c.len,2*c.len),p=e(Math.floor(c.translate(a.y+h,0,1,0,1)),-c.len,2*c.len),q=u(a.pointPadding,d),v=q*Math.abs(f-g)/Math.abs(p-n),v=b.reversed?-v:v,r=b.reversed?-q:q,q=c.reversed?-q:q;a.x%2&&(k=k||Math.round(Math.abs(p-m)/2)*(c.reversed?-1:1),m+=k,n+=k,p+=k);a.plotX=a.clientX=(f+l)/2;a.plotY=n;g+=v+r;f+=r;l-=r;t-=v+r;m-=q;p+=q;a.tileEdges={x1:g,x2:f,x3:l,x4:t,y1:m,y2:n,y3:p};a.shapeType="path";a.shapeArgs={d:["M",f,m,"L",l,m,t,n,
l,p,f,p,g,n,"Z"]}});this.translateColors()}},diamond:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return w(a,2,2)},haloPath:function(a){if(!a)return[];var b=this.tileEdges;return["M",b.x2,b.y1+a,"L",b.x3+a,b.y2,b.x2,b.y3-a,b.x1-a,b.y2,"Z"]},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,h=a.colsize||1,v=(a.rowsize||1)/2,k;this.generatePoints();r(this.points,function(a){var f=e(Math.round(b.len-b.translate(a.x-h,
0,1,0,0)),-b.len,2*b.len),g=e(Math.round(b.len-b.translate(a.x,0,1,0,0)),-b.len,2*b.len),l=e(Math.round(b.len-b.translate(a.x+h,0,1,0,0)),-b.len,2*b.len),t=e(Math.round(c.translate(a.y-v,0,1,0,0)),-c.len,2*c.len),m=e(Math.round(c.translate(a.y,0,1,0,0)),-c.len,2*c.len),n=e(Math.round(c.translate(a.y+v,0,1,0,0)),-c.len,2*c.len),p=u(a.pointPadding,d),q=p*Math.abs(g-f)/Math.abs(n-m),q=b.reversed?-q:q,p=c.reversed?-p:p;a.x%2&&(k=Math.abs(n-t)/2*(c.reversed?-1:1),t+=k,m+=k,n+=k);a.plotX=a.clientX=g;a.plotY=
m;f+=q;l-=q;t-=p;n+=p;a.tileEdges={x1:f,x2:g,x3:l,y1:t,y2:m,y3:n};a.shapeType="path";a.shapeArgs={d:["M",g,t,"L",l,m,g,n,f,m,"Z"]}});this.translateColors()}},circle:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return w(a,2,2)},haloPath:function(a){return d.seriesTypes.scatter.prototype.pointClass.prototype.haloPath.call(this,a+(a&&this.radius))},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,h=(a.rowsize||1)/2,v=
a.colsize||1,k,g,w,u,l=!1;this.generatePoints();r(this.points,function(a){var f=e(Math.round(b.len-b.translate(a.x,0,1,0,0)),-b.len,2*b.len),n=e(Math.round(c.translate(a.y,0,1,0,0)),-c.len,2*c.len),p=d,q=!1;void 0!==a.pointPadding&&(p=a.pointPadding,l=q=!0);if(!u||l)k=Math.abs(e(Math.floor(b.len-b.translate(a.x+v,0,1,0,0)),-b.len,2*b.len)-f),g=Math.abs(e(Math.floor(c.translate(a.y+h,0,1,0,0)),-c.len,2*c.len)-n),w=Math.floor(Math.sqrt(k*k+g*g)/2),u=Math.min(k,w,g)-p,l&&!q&&(l=!1);a.x%2&&(n+=g*(c.reversed?
-1:1));a.plotX=a.clientX=f;a.plotY=n;a.radius=u;a.shapeType="circle";a.shapeArgs={x:f,y:n,r:u}});this.translateColors()}},square:{alignDataLabel:d.seriesTypes.heatmap.prototype.alignDataLabel,translate:d.seriesTypes.heatmap.prototype.translate,getSeriesPadding:function(){},haloPath:d.seriesTypes.heatmap.prototype.pointClass.prototype.haloPath}};d.wrap(d.Axis.prototype,"setAxisTranslation",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));var b=this,c=x(d.map(b.series,function(a){return a.getSeriesPixelPadding&&
a.getSeriesPixelPadding(b)}),function(a,b){return(a&&a.padding)>(b&&b.padding)?a:b},void 0)||{padding:0,axisLengthFactor:1},f=Math.round(c.padding*c.axisLengthFactor);c.padding&&(b.len-=f,a.apply(b,Array.prototype.slice.call(arguments,1)),b.minPixelPadding+=c.padding,b.len+=f)});h("tilemap","heatmap",{states:{hover:{halo:{enabled:!0,size:2,opacity:.5,attributes:{zIndex:3}}}},pointPadding:2,tileShape:"hexagon"},{setOptions:function(){var a=d.seriesTypes.heatmap.prototype.setOptions.apply(this,Array.prototype.slice.call(arguments));
this.tileShape=d.tileShapeTypes[a.tileShape];return a},alignDataLabel:function(){return this.tileShape.alignDataLabel.apply(this,Array.prototype.slice.call(arguments))},getSeriesPixelPadding:function(a){var b=a.isXAxis,c=this.tileShape.getSeriesPadding(this),d;if(!c)return{padding:0,axisLengthFactor:1};d=Math.round(a.translate(b?2*c.xPad:c.yPad,0,1,0,1));a=Math.round(a.translate(b?c.xPad:0,0,1,0,1));return{padding:Math.abs(d-a)||0,axisLengthFactor:b?2:1.1}},translate:function(){return this.tileShape.translate.apply(this,
Array.prototype.slice.call(arguments))}},d.extend({haloPath:function(){return this.series.tileShape.haloPath.apply(this,Array.prototype.slice.call(arguments))}},d.colorPointMixin))})(h)});
//# sourceMappingURL=tilemap.js.map
