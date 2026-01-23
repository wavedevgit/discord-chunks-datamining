/** Chunk was on 53600 **/
/** chunk id: 380035, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk735321 = require("./735321.js"),
  Chunk463259 = require("./463259.jsx"),
  Chunk384377 = require("./384377.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk22047 = require("./22047.js");

function x(t) {
  let {
    widget: e,
    user: n
  } = t;
  return (0, r.jsx)(d.u, {
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
    trackUserProfileEditAction: j
  } = t, m = i.useCallback(() => {
    (0, u.qA)(n), j(function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), r.forEach(function(e) {
          var r;
          r = n[e], e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = r
        })
      }
      return t
    }({
      action: "WIDGET_REMOVED"
    }, n.getProfileEditAnalyticsOptions())), h(), (0, b.XA)(f.jM.WIDGET_REMOVED)
  }, [n, h, j]), w = (0, a.bG)([c.default], () => c.default.getUser(d));
  return null == w ? null : (0, r.jsxs)(l.Modal, {
    transitionState: e,
    onClose: h,
    title: p.intl.string(p.t.Mm07Yc),
    subtitle: p.intl.format(p.t["x+djI4"], {
      helpUrl: o.C
    }),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: h
    }, {
      variant: "critical-primary",
      text: p.intl.string(p.t.Mm07Yc),
      onClick: m
    }],
    children: [(0, r.jsx)("div", {
      className: g.w,
      children: (0, r.jsx)(x, {
        widget: n,
        user: w
      })
    }), (0, r.jsx)("div", {
      className: g.d,
      children: (0, r.jsx)(s.Text, {
        color: "text-subtle",
        variant: "text-sm/normal",
        children: p.intl.string(p.t.bQNGeT)
      })
    })]
  })
}