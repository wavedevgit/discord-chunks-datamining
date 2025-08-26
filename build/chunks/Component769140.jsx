/** Chunk was on web.js **/
/** chunk id: 769140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk318374 = require("./318374.jsx"),
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

function Z(e) {
  let {
    user: t,
    currentUser: n,
    stream: i,
    className: Z,
    onClose: F
  } = e, {
    themeType: V,
    theme: H
  } = (0, C.z)(), Y = (0, a.e7)([O.Z], () => O.Z.getGuild(null == i ? true : i.guildId)), W = (0, a.e7)([y.Z], () => y.Z.getChannel(null == i ? true : i.channelId)), K = (0, a.Wu)([T.ZP], () => null != W ? T.ZP.getVoiceStatesForChannel(W).map(e => {
    let {
      user: t
    } = e;
    return t
  }) : []), z = (0, a.e7)([I.Z], () => I.Z.findActivity(t.id, e => (0, d.Z)(e) && !(0, f.Z)(e))), {
    analyticsLocations: q
  } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), X = (0, S.Z)({
    display: "live",
    voiceChannelId: null == W ? true : W.id,
    user: t,
    stream: i,
    analyticsLocations: q
  }), Q = (0, A.Z)({
    userId: t.id,
    onAction: X
  }), {
    previewUrl: J,
    isLoading: $
  } = (0, E.Z)(null == i ? true : i.guildId, null == i ? true : i.channelId, null == i ? true : i.ownerId), [ee, et] = (0, b.wq)(W), en = (0, _.Kt)() && (0, _.zd)(null == W ? true : W.id), er = (0, a.e7)([v.Z], () => null != W && !en && v.Z.canBasicChannel(L.S7T.CONNECT, W)), ei = (0, u.Z)($ ? null : J), eo = $ || null == J ? ei : J;
  if (null == Y || null == W || false === i.discoverable) return null;
  let ea = () => {
      let e = e => {
        e.stopPropagation(), ee && (X({
          action: "PRESS_IMAGE"
        }), l.default.selectVoiceChannel(i.channelId), (0, c.iV)(i), null == F || F())
      };
      return null == eo && $ ? (0, r.jsx)("div", {
        className: U.preview,
        children: (0, r.jsx)(s.$jN, {})
      }) : null == eo || en ? (0, r.jsxs)(s.P3F, {
        className: o()(U.preview, U.overlay, ee ? U.clickable : U.disabled),
        onClick: e,
        "aria-label": (0, b.gR)(et),
        "aria-disabled": !ee,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: H === L.BRd.LIGHT ? B : G
        }), V !== j.l.MODAL && V !== j.l.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Text, {
            className: U.overlayText,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, b.P9)(et)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: er ? M.intl.string(M.t.uQZTBQ) : M.intl.string(M.t.pgUTZG)
          })]
        })]
      }) : (0, r.jsxs)(s.P3F, {
        className: o()(U.preview, U.overlay, ee ? U.clickable : U.disabled),
        onClick: e,
        "aria-label": (0, b.gR)(et),
        "aria-disabled": !ee,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: eo,
          className: U.image
        }), V !== j.l.MODAL && V !== j.l.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Text, {
            className: U.overlayText,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, b.P9)(et)
          }), (0, r.jsx)(s.gw7, {
            size: "xs",
            color: "currentColor",
            className: U.clyde
          })]
        })]
      })
    },
    es = () => V !== j.l.MODAL && V !== j.l.MODAL_V2 ? null : (0, r.jsxs)("div", {
      className: k.details,
      children: [(0, r.jsx)(P.Z, {
        channel: W,
        guild: Y,
        onAction: X,
        onClose: F
      }), (0, r.jsx)(g.Z, {
        users: K,
        guildId: Y.id,
        channelId: W.id,
        maxUsers: w.W,
        size: s.EFr.SIZE_16,
        onClickOverflow: e => {
          null == e || e.stopPropagation(), null == X || X({
            action: "PRESS_VOICE_CHANNEL_AVATARS"
          })
        },
        onUserClick: e => e.stopPropagation(),
        disableUserPopout: e => e === t.id,
        overflowCountColor: "text-muted",
        "aria-label": M.intl.string(M.t.jNqDh4)
      }), V === j.l.MODAL_V2 && ec()]
    }),
    el = () => V === j.l.MODAL || V === j.l.MODAL_V2 ? null : (0, r.jsx)(w.Z, {
      user: t,
      guild: Y,
      channel: W,
      onAction: X,
      onClose: F
    }),
    ec = () => t.id === n.id ? null : (0, r.jsx)("div", {
      className: k.actions,
      children: (0, r.jsx)(D.Z, {
        channel: W,
        onAction: X,
        onClose: F
      })
    }),
    eu = null != z ? M.intl.formatToPlainString(M.t["4CQq9f"], {
      name: z.name
    }) : M.intl.string(M.t["Jpkr/v"]);
  return (0, r.jsx)(h.Gt, {
    value: q,
    children: (0, r.jsxs)(N.Z, {
      ref: Q,
      className: Z,
      onAction: X,
      onClose: F,
      "aria-label": eu,
      children: [(0, r.jsx)(R.Z, {
        text: eu,
        tags: (0, r.jsx)(m.ZP, {
          size: m.OH.SMALL
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
          children: [ea(), es(), V === j.l.MODAL && ec()]
        }), el()]
      }), V !== j.l.MODAL && V !== j.l.MODAL_V2 && ec()]
    })
  })
}