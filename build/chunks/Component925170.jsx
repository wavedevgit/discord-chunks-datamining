/** Chunk was on 38576 **/
/** chunk id: 925170, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk810473 = require("./810473.js"),
  Chunk299560 = require("./299560.jsx"),
  Chunk247397 = require("./247397.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk32442 = require("./32442.js");

function b(e) {
  var t, r, {
      onClose: b,
      trackUserProfileEditAction: O
    } = e,
    g = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["onClose", "trackUserProfileEditAction"]);
  let y = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
    j = (0, s.Z)(),
    m = i.useRef(new Set(j)),
    h = f.rR.filter(e => m.current.has(e)),
    v = h.length > 0,
    [w, P] = i.useState(false),
    k = {
      onClick: () => b(),
      text: p.intl.string(p.t.cpT0Cg)
    },
    C = i.useCallback(() => {
      P(true), b()
    }, [b]);
  return null == y ? null : (0, n.jsx)(l.Modal, (t = function(e) {
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
  }({
    title: p.intl.string(p.t.grUgR0),
    actions: v ? [] : [k],
    size: v ? "md" : "sm",
    onClose: b
  }, g), r = r = {
    children: v ? (0, n.jsx)("ul", {
      "aria-label": p.intl.string(p.t["+EIBSE"]),
      className: d.options,
      children: h.map(e => (0, n.jsx)(u.Z, {
        widgetType: e,
        onAddWidget: C,
        loading: w,
        trackUserProfileEditAction: O
      }, e))
    }) : (0, n.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "text-secondary",
      children: p.intl.string(p.t["1nkDOj"])
    })
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