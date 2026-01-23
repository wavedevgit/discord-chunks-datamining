/** Chunk was on web.js **/
/** chunk id: 910607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I,
  k: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk342952 = require("./342952.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk47167 = require("./47167.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk345942 = require("./345942.js"),
  Chunk576705 = require("./576705.js"),
  Chunk575731 = require("./575731.js"),
  Chunk21241 = require("./21241.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk10862 = require("./10862.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380297 = require("./380297.js");
let A = 3;

function I(e) {
  let {
    user: t,
    guild: n,
    channel: I,
    onAction: S,
    onClose: T
  } = e, {
    themeType: C
  } = (0, g.E)(), N = (0, h.A)(I), w = (0, u.Ay)(I), {
    canViewChannel: R,
    canConnect: P
  } = (0, i.cf)([_.A], () => ({
    canViewChannel: _.A.can(y.xBc.VIEW_CHANNEL, I),
    canConnect: I.isPrivate() || _.A.can(y.xBc.CONNECT, I)
  }));
  if (!R) return null;
  let D = () => {
      let e = e => {
        e.stopPropagation(), (0, p.u)(n.id), null == S || S({
          action: "OPEN_VOICE_GUILD"
        }), null == T || T()
      };
      return (0, r.jsx)(o.m, {
        asContainer: true,
        text: n.name,
        "aria-label": false,
        children: (0, r.jsx)(d.A, {
          guild: n,
          size: d.A.Sizes.SMOL,
          className: v.$f,
          onClick: e
        })
      })
    },
    x = () => {
      if (!P) return (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        lineClamp: 1,
        children: (0, r.jsx)(a.A, {
          children: w
        })
      });
      let e = e => {
        e.stopPropagation(), c.default.selectVoiceChannel(I.id), (0, f.iN)(I.id), null == S || S({
          action: "OPEN_VOICE_CHANNEL"
        }), null == T || T()
      };
      return (0, r.jsx)(l.DUT, {
        onClick: e,
        className: v.sd,
        children: (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: (0, r.jsx)(a.A, {
            children: w
          })
        })
      })
    },
    L = C !== b.d.MODAL && C !== b.d.MODAL_V2 && C !== b.d.SIDEBAR;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.A, {
      className: v.Ph
    }), (0, r.jsxs)("div", {
      className: v.gx,
      children: [D(), (0, r.jsx)(l._BQ, {
        size: "xxs",
        color: l.LU0.colors.TEXT_SUBTLE
      }), (0, r.jsxs)("div", {
        className: v.FH,
        children: [(0, r.jsx)(E.A, {
          channel: I,
          size: "xxs",
          color: l.LU0.colors.TEXT_SUBTLE,
          className: v.Ow
        }), x()]
      }), (0, r.jsx)(s.A, {
        users: N,
        guildId: n.id,
        channelId: I.id,
        maxUsers: A,
        size: l._3J.SIZE_16,
        overflowCountColor: "text-subtle",
        overflowCountClassName: v.NS,
        onClickOverflow: e => {
          e.stopPropagation(), null == S || S({
            action: "PRESS_VOICE_CHANNEL_AVATARS"
          })
        },
        onUserClick: e => e.stopPropagation(),
        disableUserPopout: !!L || (e => e === t.id),
        "aria-label": O.intl.string(O.t["jNqDh/"])
      })]
    })]
  })
}