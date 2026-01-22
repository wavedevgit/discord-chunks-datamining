/** Chunk was on 94503 **/
/** chunk id: 316076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk761640 = require("./761640.js"),
  Chunk706752 = require("./706752.js"),
  Chunk744432 = require("./744432.js"),
  Chunk829887 = require("./829887.jsx"),
  Chunk486974 = require("./486974.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438536 = require("./438536.js");

function g(e) {
  let {
    userId: t,
    guildId: n
  } = e, g = (0, a.bG)([s.Ay], () => s.Ay.getGuildSidebarState(n), [n]), {
    messagesCount: A,
    linksCount: T,
    mediaCount: f
  } = (0, c.u5)(t, n), h = new Intl.NumberFormat(d.intl.currentLocale).format(A), I = new Intl.NumberFormat(d.intl.currentLocale).format(T), O = new Intl.NumberFormat(d.intl.currentLocale).format(f), N = r.useCallback(async e => {
    if (null == g) return;
    let l = (0, c.ry)(t, e, {
      include_nsfw: true
    });
    await (0, o.z)(n, t, g.baseChannelId, {
      modViewPanel: E.g.MESSAGE_HISTORY,
      additionalSearchQuery: l
    })
  }, [n, g, t]);
  return (0, l.jsx)(i.D0$, {
    label: d.intl.string(d.t.vCn2Tn),
    children: (0, l.jsxs)(u.SQ, {
      children: [(0, l.jsx)(u.RU, {
        icon: (0, l.jsx)(i.oyn, {
          size: "custom",
          color: "currentColor",
          width: u.mb,
          height: u.mb
        }),
        name: (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.OIgYlQ)
        }),
        description: A === c.zu ? (0, l.jsx)(i.y$y, {
          type: i.tVU.SPINNING_CIRCLE,
          className: _.S
        }) : (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: h
        }),
        onNavigate: A > 0 ? () => N(c.SA.MESSAGES) : true
      }), (0, l.jsx)(u.RU, {
        icon: (0, l.jsx)(i.qYV, {
          size: "custom",
          width: u.mb,
          height: u.mb
        }),
        name: (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.DFSvTt)
        }),
        description: T === c.zu ? (0, l.jsx)(i.y$y, {
          type: i.tVU.SPINNING_CIRCLE,
          className: _.S
        }) : (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: I
        }),
        onNavigate: T > 0 ? () => N(c.SA.LINKS) : true
      }), (0, l.jsx)(u.RU, {
        icon: (0, l.jsx)(i.sYc, {
          size: "custom",
          width: u.mb,
          height: u.mb
        }),
        name: (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t["Aw9+/M"])
        }),
        description: f === c.zu ? (0, l.jsx)(i.y$y, {
          type: i.tVU.SPINNING_CIRCLE,
          className: _.S
        }) : (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: O
        }),
        onNavigate: f > 0 ? () => N(c.SA.MEDIA) : true
      })]
    })
  })
}