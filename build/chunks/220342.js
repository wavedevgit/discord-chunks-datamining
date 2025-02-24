/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
function r(e, t) {
  if (i("noDeprecation")) return e;
  var n = !1;
  return function() {
    if (!n) {
      if (i("throwDeprecation")) throw Error(t);
      i("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
    }
    return e.apply(this, arguments)
  }
}

function i(e) {
  try {
    if (!n.g.localStorage) return !1
  } catch (e) {
    return !1
  }
  var t = n.g.localStorage[e];
  return null != t && "true" === String(t).toLowerCase()
}
e.exports = r