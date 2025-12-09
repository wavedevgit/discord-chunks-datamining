/** Chunk was on web.js **/
/** chunk id: 769140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk36563 = require("./36563.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk110924 = require("./110924.js"),
  Chunk833664 = require("./833664.js"),
  Chunk579630 = require("./579630.js"),
  Chunk622822 = require("./622822.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk194082 = require("./194082.jsx"),
  Chunk449605 = require("./449605.js"),
  Chunk102172 = require("./102172.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk938475 = require("./938475.js"),
  Chunk960870 = require("./960870.js"),
  Chunk139793 = require("./139793.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk336383 = require("./336383.jsx"),
  Chunk194811 = require("./194811.jsx"),
  Chunk265386 = require("./265386.jsx"),
  Chunk668700 = require("./668700.jsx"),
  Chunk384298 = require("./384298.jsx"),
  Chunk670451 = require("./670451.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js"),
  Chunk936524 = require("./936524.js"),
  Chunk924482 = require("./924482.js"),
  Chunk774797 = require("./774797.js");

function B(e) {
  let {
    user: t,
    currentUser: n,
    stream: i,
    className: B,
    onClose: F
  } = e, {
    themeType: V,
    theme: H
  } = (0, C.z)(), Y = (0, o.e7)([O.Z], () => O.Z.getGuild(null == i ? true : i.guildId)), W = (0, o.e7)([y.Z], () => y.Z.getChannel(null == i ? true : i.channelId)), K = (0, o.Wu)([I.ZP], () => null != W ? I.ZP.getVoiceStatesForChannel(W).map(e => {
    let {
      user: t
    } = e;
    return t
  }) : []), z = (0, o.e7)([S.Z], () => S.Z.findActivity(t.id, e => (0, f.Z)(e) && !(0, p.Z)(e))), {
    analyticsLocations: q
  } = (0, h.ZP)(m.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), Q = (0, T.Z)({
    display: "live",
    voiceChannelId: null == W ? true : W.id,
    user: t,
    stream: i,
    analyticsLocations: q
  }), X = (0, A.Z)({
    userId: t.id,
    onAction: Q
  }), {
    previewUrl: J,
    isLoading: $
  } = (0, E.Z)(null == i ? true : i.guildId, null == i ? true : i.channelId, null == i ? true : i.ownerId), [ee, et] = (0, b.wq)(W), en = (0, _.Kt)() && (0, _.zd)(null == W ? true : W.id), er = (0, o.e7)([v.Z], () => null != W && !en && v.Z.canBasicChannel(L.S7T.CONNECT, W)), ei = (0, d.Z)($ ? null : J), ea = $ || null == J ? ei : J;
  if (null == Y || null == W || false === i.discoverable) return null;
  let eo = () => {
      let e = e => {
        e.stopPropagation(), ee && (Q({
          action: "PRESS_IMAGE"
        }), c.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == F || F())
      };
      return null == ea && $ ? (0, r.jsx)("div", {
        className: U.preview,
        children: (0, r.jsx)(l.$jN, {})
      }) : null == ea || en ? (0, r.jsxs)(l.P3F, {
        className: a()(U.preview, U.overlay, ee ? U.clickable : U.disabled),
        onClick: e,
        "aria-label": (0, b.gR)(et),
        "aria-disabled": !ee,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: H === L.BRd.LIGHT ? Z : G
        }), V !== j.l.MODAL && V !== j.l.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            className: U.overlayText,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, b.P9)(et)
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            children: er ? M.intl.string(M.t.uQZTBV) : M.intl.string(M.t.pgUTZC)
          })]
        })]
      }) : (0, r.jsxs)(l.P3F, {
        className: a()(U.preview, U.overlay, ee ? U.clickable : U.disabled),
        onClick: e,
        "aria-label": (0, b.gR)(et),
        "aria-disabled": !ee,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: ea,
          className: U.image
        }), V !== j.l.MODAL && V !== j.l.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            className: U.overlayText,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, b.P9)(et)
          }), (0, r.jsx)(l.gw7, {
            size: "xs",
            color: "currentColor",
            className: U.clyde
          })]
        })]
      })
    },
    es = () => V !== j.l.MODAL && V !== j.l.MODAL_V2 ? null : (0, r.jsxs)("div", {
      className: k.details,
      children: [(0, r.jsx)(R.Z, {
        channel: W,
        guild: Y,
        onAction: Q,
        onClose: F
      }), (0, r.jsx)(s.Z, {
        users: K,
        guildId: Y.id,
        channelId: W.id,
        maxUsers: D.W,
        size: l.EFr.SIZE_16,
        onClickOverflow: e => {
          null == e || e.stopPropagation(), null == Q || Q({
            action: "PRESS_VOICE_CHANNEL_AVATARS"
          })
        },
        onUserClick: e => e.stopPropagation(),
        disableUserPopout: e => e === t.id,
        overflowCountColor: "text-muted",
        "aria-label": M.intl.string(M.t["jNqDh/"])
      }), V === j.l.MODAL_V2 && ec()]
    }),
    el = () => V === j.l.MODAL || V === j.l.MODAL_V2 ? null : (0, r.jsx)(D.Z, {
      user: t,
      guild: Y,
      channel: W,
      onAction: Q,
      onClose: F
    }),
    ec = () => t.id === n.id ? null : (0, r.jsx)("div", {
      className: k.actions,
      children: (0, r.jsx)(w.Z, {
        channel: W,
        onAction: Q,
        onClose: F
      })
    }),
    eu = null != z ? M.intl.formatToPlainString(M.t["4CQq9Q"], {
      name: z.name
    }) : M.intl.string(M.t["Jpkr/q"]);
  return (0, r.jsx)(h.Gt, {
    value: q,
    children: (0, r.jsxs)(N.Z, {
      ref: X,
      className: B,
      onAction: Q,
      onClose: F,
      "aria-label": eu,
      children: [(0, r.jsx)(P.Z, {
        text: eu,
        tags: (0, r.jsx)(g.ZP, {
          size: g.OH.SMALL
        }),
        contextMenu: (0, r.jsx)(x.Z, {
          display: "live",
          user: t,
          onClose: F
        })
      }), (0, r.jsxs)("div", {
        className: k.body,
        children: [(0, r.jsxs)("div", {
          className: k.content,
          children: [eo(), es(), V === j.l.MODAL && ec()]
        }), el()]
      }), V !== j.l.MODAL && V !== j.l.MODAL_V2 && ec()]
    })
  })
}