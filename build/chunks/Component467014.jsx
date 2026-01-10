/** Chunk was on 69937 **/
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
    messagesCount: f,
    linksCount: T,
    mediaCount: g
  } = (0, c.P2)(t, n), I = new Intl.NumberFormat(E.intl.currentLocale).format(f), m = new Intl.NumberFormat(E.intl.currentLocale).format(T), h = new Intl.NumberFormat(E.intl.currentLocale).format(g), N = l.useCallback(async e => {
    if (null == A) return;
    let r = (0, c.Ow)(t, e, {
      include_nsfw: true
    });
    await (0, o.r)(n, t, A.baseChannelId, {
      modViewPanel: d.k.MESSAGE_HISTORY,
      additionalSearchQuery: r
    })
  }, [n, A, t]);
  return (0, r.jsx)(a.gNt, {
    label: E.intl.string(E.t.vCn2Tn),
    children: (0, r.jsxs)(u.WM, {
      children: [(0, r.jsx)(u._2, {
        icon: (0, r.jsx)(a.kBi, {
          size: "custom",
          color: "currentColor",
          width: u.Mn,
          height: u.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t.OIgYlQ)
        }),
        description: f === c.II ? (0, r.jsx)(a.$jN, {
          type: a.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: I
        }),
        onNavigate: f > 0 ? () => N(c.mw.MESSAGES) : true
      }), (0, r.jsx)(u._2, {
        icon: (0, r.jsx)(a.xPt, {
          size: "custom",
          width: u.Mn,
          height: u.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t.DFSvTt)
        }),
        description: T === c.II ? (0, r.jsx)(a.$jN, {
          type: a.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: m
        }),
        onNavigate: T > 0 ? () => N(c.mw.LINKS) : true
      }), (0, r.jsx)(u._2, {
        icon: (0, r.jsx)(a.Ka2, {
          size: "custom",
          width: u.Mn,
          height: u.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t["Aw9+/M"])
        }),
        description: g === c.II ? (0, r.jsx)(a.$jN, {
          type: a.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: h
        }),
        onNavigate: g > 0 ? () => N(c.mw.MEDIA) : true
      })]
    })
  })
}