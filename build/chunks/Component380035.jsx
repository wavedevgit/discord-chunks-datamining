/** Chunk was on 53600 **/
/** chunk id: 380035, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => x
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

function j(t) {
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

function x(t) {
  let {
    transitionState: e,
    widget: n,
    userId: d,
    onClose: x,
    trackUserProfileEditAction: h
  } = t, m = i.useCallback(() => {
    (0, u.qA)(n), h(function(t) {
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
    }, n.getProfileEditAnalyticsOptions())), x(), (0, f.XA)(b.jM.WIDGET_REMOVED)
  }, [n, x, h]), y = (0, a.bG)([s.default], () => s.default.getUser(d));
  return null == y ? null : (0, r.jsxs)(l.Modal, {
    transitionState: e,
    onClose: x,
    title: p.intl.string(p.t.Mm07Yc),
    subtitle: p.intl.format(p.t["x+djI4"], {
      helpUrl: o.C
    }),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: x
    }, {
      variant: "critical-primary",
      text: p.intl.string(p.t.Mm07Yc),
      onClick: m
    }],
    children: [(0, r.jsx)("div", {
      className: g.w,
      children: (0, r.jsx)(j, {
        widget: n,
        user: y
      })
    }), (0, r.jsx)("div", {
      className: g.d,
      children: (0, r.jsx)(c.Text, {
        color: "text-subtle",
        variant: "text-sm/normal",
        children: p.intl.string(p.t.bQNGeT)
      })
    })]
  })
}