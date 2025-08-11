/** Chunk was on 12097 **/
/** chunk id: 467014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk433355 = require("./433355.js"),
  Chunk189432 = require("./189432.js"),
  Chunk356778 = require("./356778.js"),
  Chunk776767 = require("./776767.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk12740 = require("./12740.js");

function A(e) {
  let {
    userId: t,
    guildId: n
  } = e, A = (0, s.e7)([a.ZP], () => a.ZP.getGuildSidebarState(n), [n]), {
    messagesCount: T,
    linksCount: m,
    mediaCount: I
  } = (0, u.P2)(t, n), g = new Intl.NumberFormat(d.intl.currentLocale).format(T), f = new Intl.NumberFormat(d.intl.currentLocale).format(m), N = new Intl.NumberFormat(d.intl.currentLocale).format(I), h = l.useCallback(async e => {
    if (null == A) return;
    let r = (0, u.Ow)(t, e, {
      include_nsfw: true
    });
    await (0, o.r)(n, t, A.baseChannelId, {
      modViewPanel: E.k.MESSAGE_HISTORY,
      additionalSearchQuery: r
    })
  }, [n, A, t]);
  return <i.xJW title={d.intl.string(d.t.vCn2Tk)} titleClassName={_.infoTitle}><c.WM>{<c._2 icon={(0, r.jsx)(i.kBi, {
          size: "custom",
          color: "currentColor",
          width: c.Mn,
          height: c.Mn
        })} name={(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.OIgYlZ)
        })} description={T === u.II ? (0, r.jsx)(i.$jN, {
          type: i.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: g
        })} onNavigate={T > 0 ? () => h(u.mw.MESSAGES) : true} />}{<c._2 icon={(0, r.jsx)(i.xPt, {
          size: "custom",
          width: c.Mn,
          height: c.Mn
        })} name={(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.DFSvTk)
        })} description={m === u.II ? (0, r.jsx)(i.$jN, {
          type: i.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: f
        })} onNavigate={m > 0 ? () => h(u.mw.LINKS) : true} />}{<c._2 icon={(0, r.jsx)(i.Ka2, {
          size: "custom",
          width: c.Mn,
          height: c.Mn
        })} name={(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t["Aw9+/P"])
        })} description={I === u.II ? (0, r.jsx)(i.$jN, {
          type: i.RAz.SPINNING_CIRCLE,
          className: _.loadingSpinner
        }) : (0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: N
        })} onNavigate={I > 0 ? () => h(u.mw.MEDIA) : true} />}</c.WM></i.xJW>
}