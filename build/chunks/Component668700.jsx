/** Chunk was on web.js **/
/** chunk id: 668700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => I,
  Z: () => T
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk663907 = require("./663907.js");
let I = 3;

function T(e) {
  let {
    user: t,
    guild: n,
    channel: T,
    onAction: S,
    onClose: A
  } = e, {
    themeType: C
  } = (0, g.z)(), N = (0, h.Z)(T), R = (0, u.ZP)(T), {
    canViewChannel: P,
    canConnect: w
  } = (0, i.cj)([p.Z], () => ({
    canViewChannel: p.Z.can(b.Plq.VIEW_CHANNEL, T),
    canConnect: T.isPrivate() || p.Z.can(b.Plq.CONNECT, T)
  }));
  if (!P) return null;
  let D = () => {
      let e = e => {
        e.stopPropagation(), (0, _.X)(n.id), null == S || S({
          action: "OPEN_VOICE_GUILD"
        }), null == A || A()
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
        color: "text-secondary",
        lineClamp: 1,
        children: (0, r.jsx)(a.Z, {
          children: R
        })
      });
      let e = e => {
        e.stopPropagation(), c.default.selectVoiceChannel(T.id), (0, f.Kh)(T.id), null == S || S({
          action: "OPEN_VOICE_CHANNEL"
        }), null == A || A()
      };
      return (0, r.jsx)(l.P3F, {
        onClick: e,
        className: v.clickableText,
        children: (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: (0, r.jsx)(a.Z, {
            children: R
          })
        })
      })
    },
    L = C !== y.l.MODAL && C !== y.l.MODAL_V2 && C !== y.l.SIDEBAR;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.Z, {
      className: v.voiceChannelDivider
    }), (0, r.jsxs)("div", {
      className: v.voiceChannel,
      children: [D(), (0, r.jsx)(l.Fbu, {
        size: "xxs",
        color: l.TVs.colors.TEXT_SECONDARY
      }), (0, r.jsxs)("div", {
        className: v.voiceChannelText,
        children: [(0, r.jsx)(E.Z, {
          channel: T,
          size: "xxs",
          color: l.TVs.colors.TEXT_SECONDARY,
          className: v.voiceIcon
        }), x()]
      }), (0, r.jsx)(o.Z, {
        users: N,
        guildId: n.id,
        channelId: T.id,
        maxUsers: I,
        size: l.EFr.SIZE_16,
        overflowCountColor: "text-secondary",
        overflowCountClassName: v.voiceChannelOverflowCount,
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