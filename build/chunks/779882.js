/** Chunk was on web.js **/
/** chunk id: 779882, original params: e,t,n (module,exports,re quire) **/
var Chunk911081 = require("./911081.js"),
  Chunk44091 = require("./44091.js"),
  a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  o = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
module.exports = function(e) {
  return (e = i(e)) && e.replace(a, r).replace(o, "")
}