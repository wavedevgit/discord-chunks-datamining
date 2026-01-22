/** Chunk was on 20570 **/
/** chunk id: 368033, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk256415 = require("./256415.js"),
  Chunk531685 = require("./531685.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk9302 = require("./9302.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function y(e) {
  var t, r;
  let {
    transitionState: y,
    onClose: O,
    contextKey: d
  } = e, g = function(e, t) {
    if (null == e) return {};
    var r, n, o, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
      return c
    }
    if (c = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          c = Object.getOwnPropertyNames(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
    return c
  }(e, ["transitionState", "onClose", "contextKey"]), j = (0, i.bG)([s.A], () => s.A.isFocused()), P = d === f.BRT.APP, w = (0, p.getPID)(), m = (0, i.bG)([l.default], () => l.default.isLocked(w));
  return (o.useEffect(() => {
    (j || P || m) && (null == O || O())
  }, [j, O, P, m]), j || m) ? null : (0, n.jsx)(c.Modal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, g), r = r = {
    title: b.intl.string(b.t.DJ8ojF),
    subtitle: b.intl.string(b.t["E+Ph7D"]),
    actions: [{
      variant: "secondary",
      text: b.intl.string(b.t.FgK5QE),
      onClick: () => null == O ? true : O()
    }, {
      variant: "primary",
      text: b.intl.string(b.t.ELRJQu),
      onClick: () => {
        u.isPlatformEmbedded ? a.Ay.focus() : window.focus(), O()
      }
    }],
    onClose: O,
    transitionState: y
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}