/** Chunk was on 10576 **/
/** chunk id: 467014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk433355 = require("./433355.js"),
  Chunk189432 = require("./189432.js"),
  Chunk356778 = require("./356778.js"),
  Chunk776767 = require("./776767.jsx"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk87819 = require("./87819.js");

function A(e) {
  let {
    userId: t,
    guildId: n
  } = e, A = (0, i.e7)([s.ZP], () => s.ZP.getGuildSidebarState(n), [n]), {
    messagesCount: m,
    linksCount: T,
    mediaCount: I
  } = (0, u.P2)(t, n), g = new Intl.NumberFormat(E.intl.currentLocale).format(m), f = new Intl.NumberFormat(E.intl.currentLocale).format(T), h = new Intl.NumberFormat(E.intl.currentLocale).format(I), N = l.useCallback(async e => {
    if (null == A) return;
    let r = (0, u.Ow)(t, e, {
      include_nsfw: true
    });
    await (0, o.r)(n, t, A.baseChannelId, {
      modViewPanel: d.k.MESSAGE_HISTORY,
      additionalSearchQuery: r
    })
  }, [n, A, t]);
  return (0, r.jsx)(a.xJW, {
    title: E.intl.string(E.t.vCn2Tk),
    titleClassName: _.infoTitle,
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
          children: E.intl.string(E.t.OIgYlZ)
        }),
        description: m === u.II ? (0, r.jsx)(a.$jN, {
          type: a.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: g
        }),
        onNavigate: m > 0 ? () => N(u.mw.MESSAGES) : true
      }), (0, r.jsx)(c._2, {
        icon: (0, r.jsx)(a.xPt, {
          size: "custom",
          width: c.Mn,
          height: c.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t.DFSvTk)
        }),
        description: T === u.II ? (0, r.jsx)(a.$jN, {
          type: a.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: f
        }),
        onNavigate: T > 0 ? () => N(u.mw.LINKS) : true
      }), (0, r.jsx)(c._2, {
        icon: (0, r.jsx)(a.Ka2, {
          size: "custom",
          width: c.Mn,
          height: c.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t["Aw9+/P"])
        }),
        description: I === u.II ? (0, r.jsx)(a.$jN, {
          type: a.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: h
        }),
        onNavigate: I > 0 ? () => N(u.mw.MEDIA) : true
      })]
    })
  })
}