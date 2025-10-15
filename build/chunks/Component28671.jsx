/** Chunk was on 56848 **/
/** chunk id: 28671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function h(e) {
  let {
    user: t,
    application: n,
    onDismiss: h
  } = e, {
    trackUserProfileEditAction: v
  } = (0, o.KZ)(), y = i.useMemo(() => new c.q({
    type: l.l.APPLICATION,
    applicationId: n.id
  }), [n.id]), j = i.useCallback(() => {
    null != y && ((0, u.qH)(y.type, y, true), v({
      action: "WIDGET_ADDED",
      widgetEdited: y.type
    }), (0, d.L$)(g.qb.WIDGET_ADDED))
  }, [y, v]);
  return (0, r.jsx)(f.Z, {
    user: t,
    widget: y,
    cta: (0, r.jsx)(f.Z.Cta, {
      heading: m.intl.format(m.t.OIzLCw, {
        applicationName: n.name
      }),
      content: m.intl.format(m.t.BQySrq, {
        applicationName: n.name
      }),
      buttons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.u, {
          text: m.intl.string(m.t.WAI6xs),
          children: (0, r.jsx)(s.Yd2, {
            variant: "secondary",
            size: "sm",
            icon: s.Dio,
            "aria-label": m.intl.string(m.t.WAI6xs),
            onClick: () => {
              h(p.L.USER_DISMISS)
            }
          })
        }), (0, r.jsx)(a.u, {
          text: m.intl.string(m.t.lBG2s7),
          children: (0, r.jsx)(s.Yd2, {
            variant: "primary",
            size: "sm",
            icon: s.kmB,
            "aria-label": m.intl.formatToPlainString(m.t.KfGahI, {
              applicationName: n.name
            }),
            onClick: () => {
              h(p.L.TAKE_ACTION), j()
            }
          })
        })]
      })
    })
  })
}