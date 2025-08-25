/** Chunk was on web.js **/
/** chunk id: 440693, original params: e,t,n (module,exports,re quire) **/
var Chunk56135 = require("./56135.js"),
  i = Object.prototype,
  o = i.hasOwnProperty,
  a = i.toString,
  s = Chunk56135 ? Chunk56135.toStringTag : true;
module.exports = function(e) {
  var t = o.call(e, s),
    n = e[s];
  try {
    e[s] = true;
    var r = true
  } catch (e) {}
  var i = a.call(e);
  return r && (t ? e[s] = n : delete e[s]), i
}