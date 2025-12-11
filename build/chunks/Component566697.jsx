/** Chunk was on web.js **/
/** chunk id: 566697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => P,
  Z: () => R
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk570908 = require("./570908.jsx"),
  Chunk204418 = require("./204418.jsx"),
  Chunk579407 = require("./579407.js"),
  Chunk386725 = require("./386725.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk158776 = require("./158776.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk585633 = require("./585633.js"),
  Chunk460400 = require("./460400.js"),
  Chunk943549 = require("./943549.js");
let N = {
    xlarge: Chunk481060.EFr.SIZE_48,
    large: Chunk481060.EFr.SIZE_40,
    small: Chunk481060.EFr.SIZE_24,
    xsmall: Chunk481060.EFr.SIZE_20,
    default: Chunk481060.EFr.SIZE_32
  },
  P = Chunk473749.memo(function(e) {
    let {
      user: t,
      guildId: n,
      nameplate: a,
      nameplateData: P,
      className: R,
      innerClassName: w,
      isHighlighted: D,
      showStatus: x,
      showPlaceholderUser: L,
      pendingGlobalName: j,
      pendingNickname: M,
      pendingAvatarDecoration: k,
      pendingDisplayNameStyles: U,
      nameplatePreviewSize: G = "default",
      isPurchased: Z = false,
      skipEffectDisplayName: F = false,
      width: B
    } = e, V = (0, u.ZP)(), H = (0, l.wj)(V), Y = null != a ? (0, p.EU)(a) : P, W = (0, s.e7)([O.Z], () => null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE), K = H ? "#706F74" : "#aaaab2", z = i.useRef(null), q = (0, s.e7)([y.ZP], () => null != n && null != t ? y.ZP.getMember(n, t.id) : null), Q = null != t ? (0, b.Ly)({
      pendingNickname: M,
      pendingGlobalName: j,
      user: t,
      guildMember: q
    }) : true, X = (0, E.Ys)({
      pendingValue: k,
      userValue: null == t ? true : t.avatarDecoration,
      guildValue: null == q ? true : q.avatarDecoration,
      guildId: n
    }), J = i.useMemo(() => N[G], [G]), $ = (0, _.Z)({
      userId: null == t ? true : t.id,
      guildId: n,
      pendingDisplayNameStyles: U
    }), ee = i.useMemo(() => null != a ? I.intl.formatToPlainString(I.t.YJig7C, {
      a11y_text: a.label
    }) : I.intl.string(I.t.SZeUdR), [a]);
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": ee,
      style: {
        color: H ? "white" : "black",
        width: null != B ? "".concat(B, "px") : "100%"
      },
      children: (0, r.jsxs)(c.Rny, {
        className: o()(R, T.nameplatePreview, {
          [T.nameplatePurchased]: Z && !D,
          [T.xsmall]: "xsmall" === G,
          [T.small]: "small" === G,
          [T.large]: "large" === G,
          [T.xlarge]: "xlarge" === G,
          [T.inheritWidth]: null != B
        }),
        children: [null != Y && (0, r.jsx)(S.Z, {
          nameplate: Y,
          hovered: D,
          placement: v.i.PREVIEW,
          content: L ? true : z
        }, null == a ? true : a.skuId), (0, r.jsxs)("div", {
          className: T.overlayContainer,
          children: [null != t ? (0, r.jsx)("div", {
            className: o()(T.avatarContainer, !L && T.avatarVisible),
            children: (0, r.jsx)(d.Z, {
              ref: z,
              avatar: (0, r.jsx)(f.Z, {
                user: t,
                guildId: n,
                avatarSize: J,
                status: x ? W : true,
                avatarDecorationOverride: X,
                "aria-hidden": true
              }),
              decorators: (0, r.jsx)(g.ZP, {
                userId: t.id,
                contextGuildId: n,
                className: T.tagChiplet
              }),
              name: (0, r.jsx)(h.Z, {
                userName: Q,
                displayNameStyles: $,
                effectDisplayType: F ? m.F.PLAIN : m.F.ANIMATED,
                loop: true
              }),
              innerClassName: w,
              withDisplayNameStyles: null != $
            })
          }) : null, (0, r.jsxs)("div", {
            className: o()(T.avatarContainer, L && T.avatarVisible),
            children: [(0, r.jsx)(c.qEK, {
              src: H ? C : A,
              size: J,
              "aria-hidden": true,
              status: c.Skl.ONLINE,
              statusColor: K,
              className: T.avatar
            }), (0, r.jsx)("div", {
              className: T.placeholderUsername
            })]
          })]
        })]
      })
    })
  }),
  R = P