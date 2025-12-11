/** Chunk was on 85032 **/
/** chunk id: 28671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk296009 = require("./296009.js"),
  Chunk28664 = require("./28664.jsx"),
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
  let {
    user: t,
    application: n,
    onDismiss: m
  } = e, {
    trackUserProfileEditAction: h
  } = (0, c.KZ)(), y = i.useMemo(() => new s.q({
    type: a.l.APPLICATION,
    applicationId: n.id
  }), [n.id]), v = i.useCallback(() => {
    null != y && ((0, u.qH)(y.type, y, true), h(function(e) {
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
    }({
      action: "WIDGET_ADDED"
    }, y.getProfileEditAnalyticsOptions())), (0, d.L$)(g.qb.WIDGET_ADDED))
  }, [y, h]);
  return (0, r.jsx)(f.Z, {
    user: t,
    widget: y,
    subtle: true,
    cta: (0, r.jsx)(f.Z.Cta, {
      showSuggestedForYou: true,
      heading: b.intl.format(b.t.OIzLCy, {
        applicationName: n.name
      }),
      content: b.intl.format(b.t.BQySru, {
        applicationName: n.name
      }),
      buttons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.u, {
          text: b.intl.string(b.t.WAI6xu),
          ariaHidden: true,
          children: (0, r.jsx)(o.Yd2, {
            variant: "secondary",
            size: "sm",
            icon: o.Dio,
            "aria-label": b.intl.string(b.t.WAI6xu),
            onClick: () => {
              m(p.L.USER_DISMISS)
            }
          })
        }), (0, r.jsx)(l.u, {
          text: b.intl.string(b.t["lBG2s/"]),
          ariaHidden: true,
          children: (0, r.jsx)(o.Yd2, {
            variant: "primary",
            size: "sm",
            icon: o.kmB,
            "aria-label": b.intl.formatToPlainString(b.t.KfGahB, {
              applicationName: n.name
            }),
            onClick: () => {
              m(p.L.TAKE_ACTION), v()
            }
          })
        })]
      })
    })
  })
}