/** Chunk was on 12192 **/
/** chunk id: 876231, original params: e,t,n (module,exports,require) **/
function r(e) {
  return Object.entries(e).filter(function(e) {
    e[0];
    var t = e[1];
    return t || false === t
  }).map(function(e) {
    var t = e[0],
      n = e[1];
    return encodeURIComponent(t) + "=" + encodeURIComponent(n)
  }).join("&")
}

function a(e) {
  var t = e && e.ownerDocument || document,
    n = t.defaultView || t.parentWindow || window;
  return {
    document: t,
    window: n
  }
}

function i(e) {
  return e || document.head
}
require.d(exports, {
  $h: () => a,
  Ku: () => r,
  as: () => i
})