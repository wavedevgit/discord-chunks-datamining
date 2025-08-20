/** Chunk was on web.js **/
/** chunk id: 382425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
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
  Chunk510659 = require("./510659.jsx"),
  Chunk287954 = require("./287954.jsx"),
  Chunk660579 = require("./660579.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk64621 = require("./64621.jsx"),
  Chunk336383 = require("./336383.jsx"),
  Chunk194811 = require("./194811.jsx"),
  Chunk265386 = require("./265386.jsx"),
  Chunk668700 = require("./668700.jsx"),
  Chunk384298 = require("./384298.jsx"),
  Chunk386019 = require("./386019.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js"),
  Chunk936524 = require("./936524.js"),
  Chunk924482 = require("./924482.js"),
  Chunk774797 = require("./774797.js");

function K(e) {
  let {
    user: t,
    currentUser: n,
    stream: a,
    className: K,
    onClose: z,
    profileGuildId: q
  } = e, X = i.useRef(null), {
    themeType: Q,
    theme: J
  } = (0, w.z)(), {
    interactionSource: $,
    interactionSourceId: ee
  } = (0, N.Xo)(), et = (0, s.e7)([v.Z], () => v.Z.getGuild(null == a ? true : a.guildId)), en = (0, s.e7)([O.Z], () => O.Z.getChannel(null == a ? true : a.channelId)), er = (0, s.Wu)([S.ZP], () => null != en ? S.ZP.getVoiceStatesForChannel(en).map(e => {
    let {
      user: t
    } = e;
    return t
  }) : []), ei = (0, s.e7)([T.Z], () => T.Z.findActivity(t.id, e => (0, f.Z)(e) && !(0, _.Z)(e))), {
    analyticsLocations: ea
  } = (0, m.ZP)(h.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), eo = (0, A.Z)({
    display: "live",
    voiceChannelId: null == en ? true : en.id,
    user: t,
    stream: a,
    analyticsLocations: ea
  }), es = (0, C.Z)({
    userId: t.id,
    onAction: eo
  }), [el, ec] = (0, y.wq)(en), eu = (0, p.Kt)() && (0, p.zd)(null == en ? true : en.id), {
    previewUrl: ed,
    isLoading: ef
  } = (0, b.Z)(a.guildId, a.channelId, a.ownerId), e_ = (0, s.e7)([I.Z], () => null != en && !eu && I.Z.canBasicChannel(B.S7T.CONNECT, en)), ep = (0, d.Z)(ef ? null : ed), eh = ef || null == ed ? ep : ed;
  if (null == et || null == en || false === a.discoverable || null === Q) return null;
  let em = () => {
      let e = e => {
        e.stopPropagation(), el && (eo({
          action: "PRESS_IMAGE"
        }), c.default.selectVoiceChannel(a.channelId), (0, u.iV)(a), null == z || z())
      };
      return null == eh && ef ? (0, r.jsx)("div", {
        className: H.preview,
        children: (0, r.jsx)(l.$jN, {})
      }) : null == eh || eu ? (0, r.jsxs)(l.P3F, {
        className: o()(H.preview, H.overlay, el ? H.clickable : H.disabled),
        onClick: e,
        "aria-label": (0, y.gR)(ec),
        "aria-disabled": !el,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: J === B.BRd.LIGHT ? W : Y
        }), Q !== Z.l.MODAL && Q !== Z.l.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            className: H.overlayText,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, y.P9)(ec)
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            children: e_ ? V.intl.string(V.t.uQZTBQ) : V.intl.string(V.t.pgUTZG)
          })]
        })]
      }) : (0, r.jsxs)(l.P3F, {
        className: o()(H.preview, H.overlay, el ? H.clickable : H.disabled),
        onClick: e,
        "aria-label": (0, y.gR)(ec),
        "aria-disabled": !el,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: eh,
          className: H.image
        }), Q !== Z.l.MODAL && Q !== Z.l.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            className: H.overlayText,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, y.P9)(ec)
          }), (0, r.jsx)(l.gw7, {
            size: "xs",
            color: "currentColor",
            className: H.clyde
          })]
        })]
      })
    },
    eg = () => Q !== Z.l.MODAL && Q !== Z.l.MODAL_V2 ? null : (0, r.jsxs)("div", {
      className: F.details,
      children: [(0, r.jsx)(j.Z, {
        channel: en,
        guild: et,
        onAction: eo,
        onClose: z
      }), (0, r.jsx)(E.Z, {
        users: er,
        guildId: et.id,
        channelId: en.id,
        maxUsers: M.W,
        size: l.EFr.SIZE_16,
        onClickOverflow: e => {
          null == e || e.stopPropagation(), null == eo || eo({
            action: "PRESS_VOICE_CHANNEL_AVATARS"
          })
        },
        onUserClick: e => e.stopPropagation(),
        disableUserPopout: e => e === t.id,
        overflowCountColor: "text-muted",
        "aria-label": V.intl.string(V.t.jNqDh4)
      }), Q === Z.l.MODAL_V2 && eb()]
    }),
    eE = () => Q === Z.l.MODAL || Q === Z.l.MODAL_V2 ? null : (0, r.jsx)(M.Z, {
      user: t,
      guild: et,
      channel: en,
      onAction: eo,
      onClose: z
    }),
    eb = () => t.id === n.id ? null : (0, r.jsx)("div", {
      className: F.actions,
      children: (0, r.jsx)(k.Z, {
        channel: en,
        onAction: eo,
        onClose: z
      })
    }),
    ey = ed,
    eO = $ === G.n_.ACTIVITY && ee === ey,
    ev = null != ei ? V.intl.formatToPlainString(V.t["4CQq9f"], {
      name: ei.name
    }) : V.intl.string(V.t["Jpkr/v"]);
  return (0, r.jsx)(m.Gt, {
    value: ea,
    children: (0, r.jsx)(D.Z, {
      targetElementRef: X,
      sourceType: G.n_.ACTIVITY,
      user: t,
      children: (0, r.jsx)(R.Z, {
        user: t,
        guildId: q,
        themeType: Q,
        sourceId: ey,
        sourceDetails: ev,
        sourceType: G.n_.ACTIVITY,
        onAction: eo,
        children: () => (0, r.jsx)(P.Z, {
          ref: X,
          user: t,
          className: F.toolbarContainer,
          interactionSourceId: ey,
          sourceType: G.n_.ACTIVITY,
          onAction: eo,
          onShowToolbar: () => eo({
            action: "HOVER_ACTIVITY_CARD"
          }),
          renderMoreButtonPopout: e => (0, r.jsx)(U.Z, {
            display: "live",
            user: t,
            onClose: z,
            children: e
          }),
          children: (0, r.jsxs)(x.Z, {
            ref: es,
            className: o()(K, {
              [F.hoisted]: eO
            }),
            onAction: eo,
            onClose: z,
            "aria-label": ev,
            children: [(0, r.jsx)(L.Z, {
              text: ev,
              tags: (0, r.jsx)(g.ZP, {
                size: g.OH.SMALL
              })
            }), (0, r.jsxs)("div", {
              className: F.body,
              children: [(0, r.jsxs)("div", {
                className: F.content,
                children: [em(), eg(), Q === Z.l.MODAL && eb()]
              }), eE()]
            }), Q !== Z.l.MODAL && Q !== Z.l.MODAL_V2 && eb()]
          })
        })
      })
    })
  })
}