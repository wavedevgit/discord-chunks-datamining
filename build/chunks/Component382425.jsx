/** Chunk was on web.js **/
/** chunk id: 382425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => W
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk861242 = require("./861242.js"),
  Chunk247352 = require("./247352.js"),
  Chunk924482 = require("./924482.js"),
  Chunk774797 = require("./774797.js");

function W(e) {
  let {
    user: t,
    currentUser: n,
    stream: o,
    className: W,
    onClose: K,
    profileGuildId: z
  } = e, q = i.useRef(null), {
    themeType: X,
    theme: Q
  } = (0, w.z)(), {
    interactionSource: J,
    interactionSourceId: $
  } = (0, C.Xo)(), ee = (0, s.e7)([v.Z], () => v.Z.getGuild(null == o ? true : o.guildId)), et = (0, s.e7)([O.Z], () => O.Z.getChannel(null == o ? true : o.channelId)), en = (0, s.Wu)([S.ZP], () => null != et ? S.ZP.getVoiceStatesForChannel(et).map(e => {
    let {
      user: t
    } = e;
    return t
  }) : []), er = (0, s.e7)([T.Z], () => T.Z.findActivity(t.id, e => (0, f.Z)(e) && !(0, _.Z)(e))), {
    analyticsLocations: ei
  } = (0, m.ZP)(h.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), eo = (0, A.Z)({
    display: "live",
    voiceChannelId: null == et ? true : et.id,
    user: t,
    stream: o,
    analyticsLocations: ei
  }), ea = (0, N.Z)({
    userId: t.id,
    onAction: eo
  }), [es, el] = (0, y.wq)(et), ec = (0, p.Kt)() && (0, p.zd)(null == et ? true : et.id), {
    previewUrl: eu,
    isLoading: ed
  } = (0, b.Z)(o.guildId, o.channelId, o.ownerId), ef = (0, s.e7)([I.Z], () => null != et && !ec && I.Z.canBasicChannel(B.S7T.CONNECT, et)), e_ = (0, d.Z)(ed ? null : eu), ep = ed || null == eu ? e_ : eu;
  if (null == ee || null == et || false === o.discoverable || null === X) return null;
  let eh = () => {
      let e = e => {
        e.stopPropagation(), es && (eo({
          action: "PRESS_IMAGE"
        }), c.default.selectVoiceChannel(o.channelId), (0, u.iV)(o), null == K || K())
      };
      return null == ep && ed ? (0, r.jsx)("div", {
        className: V.preview,
        children: (0, r.jsx)(l.$jN, {})
      }) : null == ep || ec ? (0, r.jsxs)(l.P3F, {
        className: a()(V.preview, V.overlay, es ? V.clickable : V.disabled),
        onClick: e,
        "aria-label": (0, y.gR)(el),
        "aria-disabled": !es,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: Q === B.BRd.LIGHT ? Y : H
        }), X !== G.lY.MODAL && X !== G.lY.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            className: V.overlayText,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, y.P9)(el)
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            children: ef ? Z.intl.string(Z.t.uQZTBQ) : Z.intl.string(Z.t.pgUTZG)
          })]
        })]
      }) : (0, r.jsxs)(l.P3F, {
        className: a()(V.preview, V.overlay, es ? V.clickable : V.disabled),
        onClick: e,
        "aria-label": (0, y.gR)(el),
        "aria-disabled": !es,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: ep,
          className: V.image
        }), X !== G.lY.MODAL && X !== G.lY.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            className: V.overlayText,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, y.P9)(el)
          }), (0, r.jsx)(l.gw7, {
            size: "xs",
            color: "currentColor",
            className: V.clyde
          })]
        })]
      })
    },
    em = () => X !== G.lY.MODAL && X !== G.lY.MODAL_V2 ? null : (0, r.jsxs)("div", {
      className: F.details,
      children: [(0, r.jsx)(M.Z, {
        channel: et,
        guild: ee,
        onAction: eo,
        onClose: K
      }), (0, r.jsx)(E.Z, {
        users: en,
        guildId: ee.id,
        channelId: et.id,
        maxUsers: j.W,
        size: l.EFr.SIZE_16,
        onClickOverflow: e => {
          null == e || e.stopPropagation(), null == eo || eo({
            action: "PRESS_VOICE_CHANNEL_AVATARS"
          })
        },
        onUserClick: e => e.stopPropagation(),
        disableUserPopout: e => e === t.id,
        overflowCountColor: "text-muted",
        "aria-label": Z.intl.string(Z.t.jNqDh4)
      }), X === G.lY.MODAL_V2 && eE()]
    }),
    eg = () => X === G.lY.MODAL || X === G.lY.MODAL_V2 ? null : (0, r.jsx)(j.Z, {
      user: t,
      guild: ee,
      channel: et,
      onAction: eo,
      onClose: K
    }),
    eE = () => t.id === n.id ? null : (0, r.jsx)("div", {
      className: F.actions,
      children: (0, r.jsx)(k.Z, {
        channel: et,
        onAction: eo,
        onClose: K
      })
    }),
    eb = eu,
    ey = J === G.n_.ACTIVITY && $ === eb,
    eO = null != er ? Z.intl.formatToPlainString(Z.t["4CQq9f"], {
      name: er.name
    }) : Z.intl.string(Z.t["Jpkr/v"]);
  return (0, r.jsx)(m.Gt, {
    value: ei,
    children: (0, r.jsx)(D.Z, {
      targetElementRef: q,
      sourceType: G.n_.ACTIVITY,
      user: t,
      children: (0, r.jsx)(R.Z, {
        user: t,
        guildId: z,
        themeType: X,
        sourceId: eb,
        sourceDetails: eO,
        sourceType: G.n_.ACTIVITY,
        onAction: eo,
        children: () => (0, r.jsx)(P.Z, {
          ref: q,
          user: t,
          className: F.toolbarContainer,
          interactionSourceId: eb,
          sourceType: G.n_.ACTIVITY,
          onAction: eo,
          onShowToolbar: () => eo({
            action: "HOVER_ACTIVITY_CARD"
          }),
          renderMoreButtonPopout: e => (0, r.jsx)(U.Z, {
            display: "live",
            user: t,
            onClose: K,
            children: e
          }),
          children: (0, r.jsxs)(L.Z, {
            ref: ea,
            className: a()(W, {
              [F.hoisted]: ey
            }),
            onAction: eo,
            onClose: K,
            "aria-label": eO,
            children: [(0, r.jsx)(x.Z, {
              text: eO,
              tags: (0, r.jsx)(g.ZP, {
                size: g.OH.SMALL
              })
            }), (0, r.jsxs)("div", {
              className: F.body,
              children: [(0, r.jsxs)("div", {
                className: F.content,
                children: [eh(), em(), X === G.lY.MODAL && eE()]
              }), eg()]
            }), X !== G.lY.MODAL && X !== G.lY.MODAL_V2 && eE()]
          })
        })
      })
    })
  })
}