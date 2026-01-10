/** Chunk was on 70887 **/
/** chunk id: 37668, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk86419 = require("./86419.js"),
  Chunk778414 = require("./778414.jsx"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk316067 = require("./316067.js");

function x(t) {
  let {
    widget: e,
    user: n
  } = t;
  return (0, i.jsx)(d.Z, {
    widget: e,
    user: n,
    disableInteraction: true
  })
}

function h(t) {
  let {
    transitionState: e,
    widget: n,
    userId: d,
    onClose: h,
    trackUserProfileEditAction: w
  } = t, v = r.useCallback(() => {
    (0, u.y8)(n), w(function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          var i;
          i = n[e], e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = i
        })
      }
      return t
    }({
      action: "WIDGET_REMOVED"
    }, n.getProfileEditAnalyticsOptions())), h(), (0, b.L$)(f.qb.WIDGET_REMOVED)
  }, [n, h, w]), j = (0, l.e7)([s.default], () => s.default.getUser(d));
  return null == j ? null : (0, i.jsxs)(a.Modal, {
    transitionState: e,
    onClose: h,
    title: p.intl.string(p.t.Mm07Yc),
    subtitle: p.intl.format(p.t["x+djI4"], {
      helpUrl: o.w
    }),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: h
    }, {
      variant: "critical-primary",
      text: p.intl.string(p.t.Mm07Yc),
      onClick: v
    }],
    children: [(0, i.jsx)("div", {
      className: g.widgetPreview,
      children: (0, i.jsx)(x, {
        widget: n,
        user: j
      })
    }), (0, i.jsx)("div", {
      className: g.hintText,
      children: (0, i.jsx)(c.Text, {
        color: "text-subtle",
        variant: "text-sm/normal",
        children: p.intl.string(p.t.bQNGeT)
      })
    })]
  })
}