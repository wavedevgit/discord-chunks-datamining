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
    mediaCount: h
  } = (0, u.u5)(t, n), I = new Intl.NumberFormat(d.intl.currentLocale).format(A), O = new Intl.NumberFormat(d.intl.currentLocale).format(T), m = new Intl.NumberFormat(d.intl.currentLocale).format(h), N = r.useCallback(async e => {
    if (null == g) return;
    let l = (0, u.ry)(t, e, {
      include_nsfw: true
    });
    await (0, o.z)(n, t, g.baseChannelId, {
      modViewPanel: E.g.MESSAGE_HISTORY,
      additionalSearchQuery: l
    })
  }, [n, g, t]);
  return (0, l.jsx)(i.D0$, {
    label: d.intl.string(d.t.vCn2Tn),
    children: (0, l.jsxs)(c.SQ, {
      children: [(0, l.jsx)(c.RU, {
        icon: (0, l.jsx)(i.oyn, {
          size: "custom",
          color: "currentColor",
          width: c.mb,
          height: c.mb
        }),
        name: (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.OIgYlQ)
        }),
        description: A === u.zu ? (0, l.jsx)(i.y$y, {
          type: i.tVU.SPINNING_CIRCLE,
          className: _.S
        }) : (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: I
        }),
        onNavigate: A > 0 ? () => N(u.SA.MESSAGES) : true
      }), (0, l.jsx)(c.RU, {
        icon: (0, l.jsx)(i.qYV, {
          size: "custom",
          width: c.mb,
          height: c.mb
        }),
        name: (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.DFSvTt)
        }),
        description: T === u.zu ? (0, l.jsx)(i.y$y, {
          type: i.tVU.SPINNING_CIRCLE,
          className: _.S
        }) : (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: O
        }),
        onNavigate: T > 0 ? () => N(u.SA.LINKS) : true
      }), (0, l.jsx)(c.RU, {
        icon: (0, l.jsx)(i.sYc, {
          size: "custom",
          width: c.mb,
          height: c.mb
        }),
        name: (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t["Aw9+/M"])
        }),
        description: h === u.zu ? (0, l.jsx)(i.y$y, {
          type: i.tVU.SPINNING_CIRCLE,
          className: _.S
        }) : (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: m
        }),
        onNavigate: h > 0 ? () => N(u.SA.MEDIA) : true
      })]
    })
  })
}