/** Chunk was on web.js **/
/** chunk id: 668700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => S,
  Z: () => I
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk36563 = require("./36563.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk933557 = require("./933557.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk769654 = require("./769654.js"),
  Chunk496675 = require("./496675.js"),
  Chunk323038 = require("./323038.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk788858 = require("./788858.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js");
let S = 3;

function I(e) {
  let {
    user: t,
    guild: n,
    channel: I,
    onAction: T,
    onClose: C
  } = e, {
    themeType: A
  } = (0, g.z)(), N = (0, m.Z)(I), P = (0, u.ZP)(I), {
    canViewChannel: R,
    canConnect: w
  } = (0, i.cj)([_.Z], () => ({
    canViewChannel: _.Z.can(b.Plq.VIEW_CHANNEL, I),
    canConnect: I.isPrivate() || _.Z.can(b.Plq.CONNECT, I)
  }));
  if (!R) return null;
  let D = () => {
      let e = e => {
        e.stopPropagation(), (0, p.X)(n.id), null == T || T({
          action: "OPEN_VOICE_GUILD"
        }), null == C || C()
      };
      return (0, r.jsx)(s.u, {
        asContainer: true,
        text: n.name,
        "aria-label": false,
        children: (0, r.jsx)(d.Z, {
          guild: n,
          size: d.Z.Sizes.SMOL,
          className: v.guildIcon,
          onClick: e
        })
      })
    },
    x = () => {
      if (!w) return (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        lineClamp: 1,
        children: (0, r.jsx)(a.Z, {
          children: P
        })
      });
      let e = e => {
        e.stopPropagation(), c.default.selectVoiceChannel(I.id), (0, f.Kh)(I.id), null == T || T({
          action: "OPEN_VOICE_CHANNEL"
        }), null == C || C()
      };
      return (0, r.jsx)(l.P3F, {
        onClick: e,
        className: v.clickableText,
        children: (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: (0, r.jsx)(a.Z, {
            children: P
          })
        })
      })
    },
    L = A !== y.l.MODAL && A !== y.l.MODAL_V2 && A !== y.l.SIDEBAR;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.Z, {
      className: v.voiceChannelDivider
    }), (0, r.jsxs)("div", {
      className: v.voiceChannel,
      children: [D(), (0, r.jsx)(l.Fbu, {
        size: "xxs",
        color: l.TVs.colors.TEXT_SUBTLE
      }), (0, r.jsxs)("div", {
        className: v.voiceChannelText,
        children: [(0, r.jsx)(E.Z, {
          channel: I,
          size: "xxs",
          color: l.TVs.colors.TEXT_SUBTLE,
          className: v.voiceIcon
        }), x()]
      }), (0, r.jsx)(o.Z, {
        users: N,
        guildId: n.id,
        channelId: I.id,
        maxUsers: S,
        size: l.EFr.SIZE_16,
        overflowCountColor: "text-subtle",
        overflowCountClassName: v.voiceChannelOverflowCount,
        onClickOverflow: e => {
          e.stopPropagation(), null == T || T({
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