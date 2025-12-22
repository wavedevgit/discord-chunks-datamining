/** Chunk was on 15718 **/
/** chunk id: 467014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk433355 = require("./433355.js"),
  Chunk189432 = require("./189432.js"),
  Chunk356778 = require("./356778.js"),
  Chunk776767 = require("./776767.jsx"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk280533 = require("./280533.js");

function A(e) {
  let {
    userId: t,
    guildId: n
  } = e, A = (0, i.e7)([s.ZP], () => s.ZP.getGuildSidebarState(n), [n]), {
    messagesCount: T,
    linksCount: I,
    mediaCount: m
  } = (0, u.P2)(t, n), f = new Intl.NumberFormat(d.intl.currentLocale).format(T), g = new Intl.NumberFormat(d.intl.currentLocale).format(I), N = new Intl.NumberFormat(d.intl.currentLocale).format(m), h = l.useCallback(async e => {
    if (null == A) return;
    let r = (0, u.Ow)(t, e, {
      include_nsfw: true
    });
    await (0, o.r)(n, t, A.baseChannelId, {
      modViewPanel: E.k.MESSAGE_HISTORY,
      additionalSearchQuery: r
    })
  }, [n, A, t]);
  return (0, r.jsx)(a.gNt, {
    label: d.intl.string(d.t.vCn2Tn),
    children: (0, r.jsxs)(c.WM, {
      children: [(0, r.jsx)(c._2, {
        icon: (0, r.jsx)(a.kBi, {
          size: "custom",
          color: "currentColor",
          width: c.Mn,
          height: c.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.OIgYlQ)
        }),
        description: T === u.II ? (0, r.jsx)(a.$jN, {
          type: a.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: f
        }),
        onNavigate: T > 0 ? () => h(u.mw.MESSAGES) : true
      }), (0, r.jsx)(c._2, {
        icon: (0, r.jsx)(a.xPt, {
          size: "custom",
          width: c.Mn,
          height: c.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.DFSvTt)
        }),
        description: I === u.II ? (0, r.jsx)(a.$jN, {
          type: a.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: g
        }),
        onNavigate: I > 0 ? () => h(u.mw.LINKS) : true
      }), (0, r.jsx)(c._2, {
        icon: (0, r.jsx)(a.Ka2, {
          size: "custom",
          width: c.Mn,
          height: c.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t["Aw9+/M"])
        }),
        description: m === u.II ? (0, r.jsx)(a.$jN, {
          type: a.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: N
        }),
        onNavigate: m > 0 ? () => h(u.mw.MEDIA) : true
      })]
    })
  })
}