/** Chunk was on 38576 **/
/** chunk id: 925170, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk810473 = require("./810473.js"),
  Chunk299560 = require("./299560.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk32442 = require("./32442.js");

function d(e) {
  var t, r, {
      onClose: d,
      trackUserProfileAction: O
    } = e,
    y = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["onClose", "trackUserProfileAction"]);
  let g = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    j = (0, u.Z)(),
    m = o.useRef(new Set(j)),
    h = p.rR.filter(e => m.current.has(e)),
    w = h.length > 0,
    [v, P] = o.useState(false),
    k = {
      onClick: () => d(),
      text: f.intl.string(f.t.cpT0Cg)
    },
    x = o.useCallback(() => {
      P(true), d()
    }, [d]);
  return null == g ? null : (0, n.jsx)(l.Modal, (t = function(e) {
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
    title: f.intl.string(f.t.grUgR0),
    actions: w ? [] : [k],
    size: w ? "md" : "sm",
    onClose: d
  }, y), r = r = {
    children: w ? (0, n.jsx)("ul", {
      "aria-label": f.intl.string(f.t["+EIBSE"]),
      className: b.options,
      children: h.map(e => (0, n.jsx)(a.Z, {
        widgetType: e,
        onAddWidget: x,
        loading: v,
        trackUserProfileAction: O
      }, e))
    }) : (0, n.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "text-secondary",
      children: f.intl.string(f.t["1nkDOj"])
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