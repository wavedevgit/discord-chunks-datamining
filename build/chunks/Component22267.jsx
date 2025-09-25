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
  Chunk550224 = require("./550224.js"),
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
      avatarDecorationOverride: M,
      nameplatePreviewSize: k = "default",
      isPurchased: U = false,
      skipEffectDisplayName: G = false,
      width: B
    } = e, Z = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)), F = null != a ? (0, v.EU)(a) : N, V = (0, s.e7)([O.Z], () => null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE), H = Z ? "#706F74" : "#aaaab2", Y = i.useRef(null), W = (0, s.e7)([y.ZP], () => null != n && null != t ? y.ZP.getMember(n, t.id) : null), K = null != t ? (0, E.Ly)({
      pendingNickname: true,
      pendingGlobalName: L,
      user: t,
      guildMember: W
    }) : true, z = C[k], q = (0, f.Y)({
      location: "NameplatePreview"
    }), X = true !== j ? j : null == t ? true : t.displayNameStyles;
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": I.intl.string(I.t.SZeUdX),
      style: {
        color: Z ? "white" : "black",
        width: null != B ? "".concat(B, "px") : "100%"
      },
      children: (0, r.jsxs)(c.Rny, {
        className: o()(R, T.nameplatePreview, {
          [T.nameplatePurchased]: U && !w,
          [T.large]: "large" === k,
          [T.xlarge]: "xlarge" === k,
          [T.inheritWidth]: null != B
        }),
        children: [null != F && (0, r.jsx)(g.Z, {
          nameplate: F,
          hovered: w,
          placement: m.i.PREVIEW,
          content: x ? true : Y
        }, null == a ? true : a.id), (0, r.jsxs)("div", {
          className: T.overlayContainer,
          children: [null != t ? (0, r.jsx)("div", {
            className: o()(T.avatarContainer, !x && T.avatarVisible),
            children: (0, r.jsx)(u.Z, {
              ref: Y,
              avatar: (0, r.jsx)(d.Z, {
                user: t,
                guildId: n,
                avatarSize: z,
                status: D ? V : true,
                "aria-hidden": true,
                avatarDecorationOverride: null != M ? {
                  asset: M.asset
                } : true
              }),
              decorators: (0, r.jsx)(h.ZP, {
                userId: t.id,
                contextGuildId: n,
                className: T.tagChiplet
              }),
              name: (0, r.jsx)(p.Z, {
                userName: K,
                displayNameStyles: X,
                effectDisplayType: G ? _.F.PLAIN : _.F.ANIMATED,
                loop: true
              }),
              innerClassName: P,
              withDisplayNameStyles: q && null != X
            })
          }) : null, (0, r.jsxs)("div", {
            className: o()(T.avatarContainer, x && T.avatarVisible),
            children: [(0, r.jsx)(c.qEK, {
              src: Z ? S : A,
              size: z,
              "aria-hidden": true,
              status: c.Skl.ONLINE,
              statusColor: H,
              className: T.avatar
            }), (0, r.jsx)("div", {
              className: T.placeholderUsername
            })]
          })]
        })]
      })
    })
  }