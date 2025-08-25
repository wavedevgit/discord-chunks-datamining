/** Chunk was on web.js **/
/** chunk id: 22267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570908 = require("./570908.jsx"),
  Chunk204418 = require("./204418.jsx"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk654904 = require("./654904.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk271383 = require("./271383.js"),
  Chunk158776 = require("./158776.js"),
  Chunk579407 = require("./579407.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk198921 = require("./198921.js"),
  Chunk460400 = require("./460400.js"),
  Chunk943549 = require("./943549.js");
let C = {
    xlarge: Chunk481060.EFr.SIZE_48,
    large: Chunk481060.EFr.SIZE_40,
    default: Chunk481060.EFr.SIZE_32
  },
  N = e => {
    let {
      user: t,
      guildId: n,
      nameplate: a,
      nameplateData: N,
      className: R,
      innerClassName: P,
      isHighlighted: w,
      showStatus: D,
      showPlaceholderUser: x,
      pendingGlobalName: L,
      pendingDisplayNameStyles: j,
      avatarDecorationOverride: k,
      nameplatePreviewSize: M = "default",
      isPurchased: U = false,
      skipEffectDisplayName: G = false
    } = e, B = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)), Z = null != a ? (0, v.EU)(a) : N, F = (0, s.e7)([O.Z], () => null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE), V = B ? "#706F74" : "#aaaab2", H = i.useRef(null), Y = (0, s.e7)([y.ZP], () => null != n && null != t ? y.ZP.getMember(n, t.id) : null), W = null != t ? (0, E.Ly)({
      pendingNickname: true,
      pendingGlobalName: L,
      user: t,
      guildMember: Y
    }) : true, K = C[M], z = (0, f.Y)({
      location: "NameplatePreview"
    }), q = true !== j ? j : null == t ? true : t.displayNameStyles;
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": I.intl.string(I.t.SZeUdX),
      style: {
        color: B ? "white" : "black",
        width: "100%"
      },
      children: (0, r.jsxs)(c.Rny, {
        className: o()(R, T.nameplatePreview, {
          [T.nameplatePurchased]: U && !w,
          [T.large]: "large" === M,
          [T.xlarge]: "xlarge" === M
        }),
        children: [null != Z && (0, r.jsx)(g.Z, {
          nameplate: Z,
          hovered: w,
          placement: m.i.PREVIEW,
          content: x ? true : H
        }, null == a ? true : a.id), (0, r.jsxs)("div", {
          className: T.overlayContainer,
          children: [null != t ? (0, r.jsx)("div", {
            className: o()(T.avatarContainer, !x && T.avatarVisible),
            children: (0, r.jsx)(u.Z, {
              ref: H,
              avatar: (0, r.jsx)(d.Z, {
                user: t,
                guildId: n,
                avatarSize: K,
                status: D ? F : true,
                "aria-hidden": true,
                avatarDecorationOverride: null != k ? {
                  asset: k.asset
                } : true
              }),
              decorators: (0, r.jsx)(h.ZP, {
                userId: t.id,
                contextGuildId: n,
                className: T.tagChiplet
              }),
              name: (0, r.jsx)(p.Z, {
                userName: W,
                displayNameStyles: q,
                effectDisplayType: G ? _.F.PLAIN : _.F.ANIMATED,
                loop: true
              }),
              innerClassName: P,
              withDisplayNameStyles: z && null != q
            })
          }) : null, (0, r.jsxs)("div", {
            className: o()(T.avatarContainer, x && T.avatarVisible),
            children: [(0, r.jsx)(c.qEK, {
              src: B ? S : A,
              size: K,
              "aria-hidden": true,
              status: c.Skl.ONLINE,
              statusColor: V,
              className: T.avatar
            }), (0, r.jsx)("div", {
              className: T.placeholderUsername
            })]
          })]
        })]
      })
    })
  }