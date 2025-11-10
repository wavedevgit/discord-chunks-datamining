/** Chunk was on 33213 **/
/** chunk id: 640678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => a
});
var Chunk163400 = require("./163400.js"),
  Chunk995532 = require("./995532.js"),
  Chunk496675 = require("./496675.js"),
  Chunk896007 = require("./896007.js");

function a(e) {
  var t, n;
  let a = s.Z.getGuildPermissionProps(e),
    c = (0, i.p)(e.id).length > 0;
  return l.ZP.generateSections((t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({
    showDirtyGuildTemplateIndicator: false
  }, a), n = n = {
    canUnlinkChannels: c,
    welcomeScreenEmpty: r.Z.isEmpty(e.id)
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t)).filter(e => {
    let {
      section: t
    } = e;
    return "HEADER" !== t && "DIVIDER" !== t
  }).filter(e => null == e.predicate || e.predicate())
}