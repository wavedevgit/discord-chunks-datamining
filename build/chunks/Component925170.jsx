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
  Chunk247397 = require("./247397.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk32442 = require("./32442.js");

function d(e) {
  var t, r, {
      onClose: d
    } = e,
    O = function(e, t) {
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
    }(e, ["onClose"]);
  let y = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    g = (0, u.Z)(),
    j = o.useRef(new Set(g)),
    m = p.rR.filter(e => j.current.has(e)),
    h = m.length > 0,
    [w, v] = o.useState(false),
    P = {
      onClick: () => d(),
      text: f.intl.string(f.t.cpT0Cg)
    },
    x = o.useCallback(() => {
      v(true), d()
    }, [d]);
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
    title: f.intl.string(f.t.grUgR0),
    actions: h ? [] : [P],
    size: h ? "md" : "sm",
    onClose: d
  }, O), r = r = {
    children: h ? (0, n.jsx)("ul", {
      "aria-label": f.intl.string(f.t["+EIBSE"]),
      className: b.options,
      children: m.map(e => (0, n.jsx)(a.Z, {
        widgetType: e,
        onAddWidget: x,
        loading: w
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