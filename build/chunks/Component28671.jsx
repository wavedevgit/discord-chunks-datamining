/** Chunk was on 56848 **/
/** chunk id: 28671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk931847 = require("./931847.js"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk860717 = require("./860717.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    user: t,
    application: n,
    onDismiss: v
  } = e, {
    trackUserProfileEditAction: y
  } = (0, s.KZ)(), j = i.useMemo(() => new o.q({
    type: l.l.APPLICATION,
    applicationId: n.id
  }), [n.id]), b = i.useCallback(() => {
    null != j && ((0, c.qH)(j.type, j, true), y({
      action: "WIDGET_ADDED",
      widgetEdited: j.type
    }), (0, u.L$)(f.qb.WIDGET_ADDED))
  }, [j, y]);
  return (0, r.jsx)(d.Z, {
    user: t,
    widget: j,
    cta: (0, r.jsx)(d.Z.Cta, {
      heading: p.intl.format(p.t.OIzLCw, {
        applicationName: n.name
      }),
      content: p.intl.format(p.t.BQySrq, {
        applicationName: n.name
      }),
      buttons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.ua7, {
          text: p.intl.string(p.t.WAI6xs),
          children: e => (0, r.jsx)(a.Yd2, h(m({}, e), {
            variant: "secondary",
            size: "sm",
            icon: a.Dio,
            "aria-label": p.intl.string(p.t.WAI6xs),
            onClick: () => {
              v(g.L.USER_DISMISS)
            }
          }))
        }), (0, r.jsx)(a.ua7, {
          text: p.intl.string(p.t.lBG2s7),
          children: e => (0, r.jsx)(a.Yd2, h(m({}, e), {
            variant: "primary",
            size: "sm",
            icon: a.kmB,
            "aria-label": p.intl.formatToPlainString(p.t.KfGahI, {
              applicationName: n.name
            }),
            onClick: () => {
              v(g.L.TAKE_ACTION), b()
            }
          }))
        })]
      })
    })
  })
}