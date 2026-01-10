/** Chunk was on 38576 **/
/** chunk id: 925170, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk500143 = require("./500143.js"),
  Chunk299560 = require("./299560.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk387083 = require("./387083.js");

function b(e) {
  var t, r, {
      onClose: b,
      trackUserProfileEditAction: d
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
    }(e, ["onClose", "trackUserProfileEditAction"]);
  let g = (0, l.e7)([s.default], () => s.default.getCurrentUser()),
    y = function() {
      let e = (0, u.Z)({
          location: "UserProfileWidgetAddModal"
        }),
        [t, r] = o.useState(e);
      return o.useEffect(() => {
        e.length > t.length && r(e)
      }, [e, t]), t
    }(),
    j = y.length > 0,
    [h, m] = o.useState(false),
    P = {
      onClick: () => b(),
      text: f.intl.string(f.t.cpT0Cq)
    },
    w = o.useCallback(() => {
      m(true), b()
    }, [b]);
  return null == g ? null : (0, n.jsx)(i.Modal, (t = function(e) {
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
    title: f.intl.string(f.t["grUgR+"]),
    actions: j ? [] : [P],
    size: j ? "md" : "sm",
    onClose: b
  }, O), r = r = {
    children: j ? (0, n.jsx)("ul", {
      "aria-label": f.intl.string(f.t["+EIBSA"]),
      className: p.options,
      children: y.map(e => (0, n.jsx)(a.Z, {
        widget: e,
        onAddWidget: w,
        loading: h,
        trackUserProfileEditAction: d
      }, e.getUniqueKey()))
    }) : (0, n.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: f.intl.string(f.t["1nkDOs"])
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