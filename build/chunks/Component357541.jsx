/** Chunk was on 60118 **/
/** chunk id: 357541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk633075 = require("./633075.js"),
  Chunk735321 = require("./735321.js"),
  Chunk384377 = require("./384377.js"),
  Chunk605694 = require("./605694.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    user: t,
    application: n,
    onDismiss: m
  } = e, {
    trackUserProfileEditAction: b
  } = (0, o.NJ)(), y = l.useMemo(() => new s.R({
    applicationId: n.id
  }), [n.id]), O = l.useCallback(() => {
    null != y && ((0, c.Y5)(y), b(function(e) {
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
    }, y.getProfileEditAnalyticsOptions())), (0, u.XA)(f.jM.WIDGET_ADDED))
  }, [y, b]);
  return (0, r.jsx)(d.A, {
    user: t,
    widget: y,
    subtle: true,
    cta: (0, r.jsx)(d.A.Cta, {
      showSuggestedForYou: true,
      heading: g.intl.format(g.t.OIzLCy, {
        applicationName: n.name
      }),
      content: g.intl.format(g.t.BQySru, {
        applicationName: n.name
      }),
      buttons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.m, {
          text: g.intl.string(g.t.WAI6xu),
          ariaHidden: true,
          children: (0, r.jsx)(a.SCx, {
            variant: "secondary",
            size: "sm",
            icon: a.PGe,
            "aria-label": g.intl.string(g.t.WAI6xu),
            onClick: () => {
              m(p.i.USER_DISMISS)
            }
          })
        }), (0, r.jsx)(i.m, {
          text: g.intl.string(g.t["lBG2s/"]),
          ariaHidden: true,
          children: (0, r.jsx)(a.SCx, {
            variant: "primary",
            size: "sm",
            icon: a.Uzd,
            "aria-label": g.intl.formatToPlainString(g.t.KfGahB, {
              applicationName: n.name
            }),
            onClick: () => {
              m(p.i.TAKE_ACTION), O()
            }
          })
        })]
      })
    })
  })
}