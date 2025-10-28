/** Chunk was on web.js **/
/** chunk id: 566697, original params: e,t,n (module,exports,re quire) **/
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
  Chunk579407 = require("./579407.js"),
  Chunk386725 = require("./386725.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk654904 = require("./654904.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk271383 = require("./271383.js"),
  Chunk158776 = require("./158776.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk63053 = require("./63053.js"),
  Chunk460400 = require("./460400.js"),
  Chunk943549 = require("./943549.js");
let C = {
    xlarge: Chunk481060.EFr.SIZE_48,
    large: Chunk481060.EFr.SIZE_40,
    default: Chunk481060.EFr.SIZE_32
  },
  N = Chunk647438.memo(function(e) {
    let {
      user: t,
      guildId: n,
      nameplate: a,
      nameplateData: N,
      className: R,
      innerClassName: P,
      isHighlighted: w,
      showStatus: D,
      showPlaceholderUser: L,
      pendingGlobalName: x,
      pendingNickname: M,
      pendingDisplayNameStyles: k,
      avatarDecorationOverride: j,
      nameplatePreviewSize: U = "default",
      isPurchased: G = false,
      skipEffectDisplayName: B = false,
      width: Z
    } = e, F = (0, s.e7)([E.Z], () => (0, l.wj)(E.Z.theme)), V = null != a ? (0, f.EU)(a) : N, H = (0, s.e7)([y.Z], () => null != t ? y.Z.getStatus(t.id) : c.Skl.ONLINE), Y = F ? "#706F74" : "#aaaab2", W = i.useRef(null), K = (0, s.e7)([b.ZP], () => null != n && null != t ? b.ZP.getMember(n, t.id) : null), z = null != t ? (0, g.Ly)({
      pendingNickname: M,
      pendingGlobalName: x,
      user: t,
      guildMember: K
    }) : true, q = i.useMemo(() => C[U], [U]), X = (0, _.Z)({
      userId: null == t ? true : t.id,
      guildId: n,
      pendingDisplayNameStyles: k
    }), Q = i.useMemo(() => null != a ? I.intl.formatToPlainString(I.t.YJig7C, {
      a11y_text: a.label
    }) : I.intl.string(I.t.SZeUdR), [a]);
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": Q,
      style: {
        color: F ? "white" : "black",
        width: null != Z ? "".concat(Z, "px") : "100%"
      },
      children: (0, r.jsxs)(c.Rny, {
        className: o()(R, T.nameplatePreview, {
          [T.nameplatePurchased]: G && !w,
          [T.large]: "large" === U,
          [T.xlarge]: "xlarge" === U,
          [T.inheritWidth]: null != Z
        }),
        children: [null != V && (0, r.jsx)(v.Z, {
          nameplate: V,
          hovered: w,
          placement: O.i.PREVIEW,
          content: L ? true : W
        }, null == a ? true : a.skuId), (0, r.jsxs)("div", {
          className: T.overlayContainer,
          children: [null != t ? (0, r.jsx)("div", {
            className: o()(T.avatarContainer, !L && T.avatarVisible),
            children: (0, r.jsx)(u.Z, {
              ref: W,
              avatar: (0, r.jsx)(d.Z, {
                user: t,
                guildId: n,
                avatarSize: q,
                status: D ? H : true,
                "aria-hidden": true,
                avatarDecorationOverride: null != j ? {
                  asset: j.asset
                } : true
              }),
              decorators: (0, r.jsx)(m.ZP, {
                userId: t.id,
                contextGuildId: n,
                className: T.tagChiplet
              }),
              name: (0, r.jsx)(h.Z, {
                userName: z,
                displayNameStyles: X,
                effectDisplayType: B ? p.F.PLAIN : p.F.ANIMATED,
                loop: true
              }),
              innerClassName: P,
              withDisplayNameStyles: null != X
            })
          }) : null, (0, r.jsxs)("div", {
            className: o()(T.avatarContainer, L && T.avatarVisible),
            children: [(0, r.jsx)(c.qEK, {
              src: F ? S : A,
              size: q,
              "aria-hidden": true,
              status: c.Skl.ONLINE,
              statusColor: Y,
              className: T.avatar
            }), (0, r.jsx)("div", {
              className: T.placeholderUsername
            })]
          })]
        })]
      })
    })
  })