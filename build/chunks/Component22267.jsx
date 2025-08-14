/** Chunk was on web.js **/
/** chunk id: 22267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk805920 = require("./805920.js"),
  Chunk460400 = require("./460400.js"),
  Chunk943549 = require("./943549.js");
let N = {
    xlarge: Chunk481060.EFr.SIZE_48,
    large: Chunk481060.EFr.SIZE_40,
    default: Chunk481060.EFr.SIZE_32
  },
  C = e => {
    let {
      user: t,
      guildId: n,
      nameplate: o,
      nameplateData: C,
      className: R,
      innerClassName: P,
      isHighlighted: w,
      showStatus: D,
      showPlaceholderUser: L,
      pendingGlobalName: x,
      pendingDisplayNameStyles: M,
      nameplatePreviewSize: j = "default",
      isPurchased: k = false
    } = e, U = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)), G = null != o ? (0, v.EU)(o) : C, B = (0, s.e7)([O.Z], () => null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE), Z = U ? "#706F74" : "#aaaab2", F = i.useRef(null), V = (0, s.e7)([y.ZP], () => null != n && null != t ? y.ZP.getMember(n, t.id) : null), H = null != t ? (0, E.Ly)({
      pendingNickname: true,
      pendingGlobalName: x,
      user: t,
      guildMember: V
    }) : true, Y = N[j], W = (0, f.Y)({
      location: "NameplatePreview"
    }), K = true !== M ? M : null == t ? true : t.displayNameStyles;
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": I.intl.string(I.t.SZeUdX),
      style: {
        color: U ? "white" : "black",
        width: "100%"
      },
      children: (0, r.jsxs)(c.Rny, {
        className: a()(R, T.nameplatePreview, {
          [T.nameplatePurchased]: k && !w,
          [T.large]: "large" === j,
          [T.xlarge]: "xlarge" === j
        }),
        children: [null != G && (0, r.jsx)(g.Z, {
          nameplate: G,
          hovered: w,
          placement: m.i.PREVIEW,
          content: L ? true : F
        }, null == o ? true : o.id), (0, r.jsxs)("div", {
          className: T.overlayContainer,
          children: [null != t ? (0, r.jsx)("div", {
            className: a()(T.avatarContainer, !L && T.avatarVisible),
            children: (0, r.jsx)(u.Z, {
              ref: F,
              avatar: (0, r.jsx)(d.Z, {
                user: t,
                guildId: n,
                avatarSize: Y,
                status: D ? B : true,
                "aria-hidden": true
              }),
              decorators: (0, r.jsx)(h.ZP, {
                userId: t.id,
                contextGuildId: n,
                className: T.tagChiplet
              }),
              name: (0, r.jsx)(p.Z, {
                userName: H,
                displayNameStyles: K,
                effectDisplayType: _.F.ANIMATED
              }),
              innerClassName: P,
              withDisplayNameStyles: W && null != K
            })
          }) : null, (0, r.jsxs)("div", {
            className: a()(T.avatarContainer, L && T.avatarVisible),
            children: [(0, r.jsx)(c.qEK, {
              src: U ? S : A,
              size: Y,
              "aria-hidden": true,
              status: c.Skl.ONLINE,
              statusColor: Z,
              className: T.avatar
            }), (0, r.jsx)("div", {
              className: T.placeholderUsername
            })]
          })]
        })]
      })
    })
  }