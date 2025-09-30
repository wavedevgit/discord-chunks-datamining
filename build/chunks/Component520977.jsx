/** Chunk was on 47552 **/
/** chunk id: 520977, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk237997 = require("./237997.js"),
  Chunk451478 = require("./451478.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(t) {
  var e, r, {
      transitionState: O,
      onClose: y,
      contextKey: d
    } = t,
    g = function(t, e) {
      if (null == t) return {};
      var r, n, o = function(t, e) {
        if (null == t) return {};
        var r, n, o = {},
          i = Object.keys(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
        return o
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
      }
      return o
    }(t, ["transitionState", "onClose", "contextKey"]);
  let j = (0, i.e7)([s.Z], () => s.Z.isFocused()),
    P = d === b.IlC.APP,
    w = (0, f.getPID)(),
    v = (0, i.e7)([l.default], () => l.default.isLocked(w));
  return (o.useEffect(() => {
    (j || P || v) && (null == y || y())
  }, [j, y, P, v]), j || v) ? null : (0, n.jsx)(c.Modal, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = r[e], e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      })
    }
    return t
  }({}, g), r = r = {
    title: p.intl.string(p.t.DJ8ojI),
    subtitle: p.intl.string(p.t["E+Ph7O"]),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t.FgK5QE),
      onClick: () => null == y ? true : y()
    }, {
      variant: "primary",
      text: p.intl.string(p.t.ELRJQk),
      onClick: () => {
        u.isPlatformEmbedded ? a.ZP.focus() : window.focus(), y()
      }
    }],
    onClose: y,
    transitionState: O
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e))
}