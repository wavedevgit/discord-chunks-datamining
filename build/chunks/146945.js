/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
var r = n(466293),
  i = Object.prototype,
  o = i.hasOwnProperty,
  a = i.toString,
  s = r ? r.toStringTag : void 0;

function l(e) {
  var t = o.call(e, s),
    n = e[s];
  try {
    e[s] = void 0;
    var r = !0
  } catch (e) {}
  var i = a.call(e);
  return r && (t ? e[s] = n : delete e[s]), i
}
e.exports = l