/** Chunk was on web.js **/
/** chunk id: 566697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
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
  Chunk150039 = require("./150039.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk271383 = require("./271383.js"),
  Chunk158776 = require("./158776.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk365616 = require("./365616.js"),
  Chunk460400 = require("./460400.js"),
  Chunk943549 = require("./943549.js");
let N = {
    xlarge: Chunk481060.EFr.SIZE_48,
    large: Chunk481060.EFr.SIZE_40,
    default: Chunk481060.EFr.SIZE_32
  },
  R = Chunk647438.memo(function(e) {
    let {
      user: t,
      guildId: n,
      nameplate: a,
      nameplateData: R,
      className: P,
      innerClassName: w,
      isHighlighted: D,
      showStatus: x,
      showPlaceholderUser: L,
      pendingGlobalName: M,
      pendingNickname: k,
      pendingAvatarDecoration: j,
      pendingDisplayNameStyles: U,
      nameplatePreviewSize: G = "default",
      isPurchased: B = false,
      skipEffectDisplayName: Z = false,
      width: F
    } = e, V = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)), H = null != a ? (0, f.EU)(a) : R, Y = (0, s.e7)([O.Z], () => null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE), W = V ? "#706F74" : "#aaaab2", K = i.useRef(null), z = (0, s.e7)([y.ZP], () => null != n && null != t ? y.ZP.getMember(n, t.id) : null), q = null != t ? (0, E.Ly)({
      pendingNickname: k,
      pendingGlobalName: M,
      user: t,
      guildMember: z
    }) : true, X = (0, g.Ys)({
      pendingValue: j,
      userValue: null == t ? true : t.avatarDecoration,
      guildValue: null == z ? true : z.avatarDecoration,
      guildId: n
    }), Q = i.useMemo(() => N[G], [G]), J = (0, _.Z)({
      userId: null == t ? true : t.id,
      guildId: n,
      pendingDisplayNameStyles: U
    }), $ = i.useMemo(() => null != a ? T.intl.formatToPlainString(T.t.YJig7C, {
      a11y_text: a.label
    }) : T.intl.string(T.t.SZeUdR), [a]);
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": $,
      style: {
        color: V ? "white" : "black",
        width: null != F ? "".concat(F, "px") : "100%"
      },
      children: (0, r.jsxs)(c.Rny, {
        className: o()(P, S.nameplatePreview, {
          [S.nameplatePurchased]: B && !D,
          [S.large]: "large" === G,
          [S.xlarge]: "xlarge" === G,
          [S.inheritWidth]: null != F
        }),
        children: [null != H && (0, r.jsx)(I.Z, {
          nameplate: H,
          hovered: D,
          placement: v.i.PREVIEW,
          content: L ? true : K
        }, null == a ? true : a.skuId), (0, r.jsxs)("div", {
          className: S.overlayContainer,
          children: [null != t ? (0, r.jsx)("div", {
            className: o()(S.avatarContainer, !L && S.avatarVisible),
            children: (0, r.jsx)(u.Z, {
              ref: K,
              avatar: (0, r.jsx)(d.Z, {
                user: t,
                guildId: n,
                avatarSize: Q,
                status: x ? Y : true,
                avatarDecorationOverride: X,
                "aria-hidden": true
              }),
              decorators: (0, r.jsx)(m.ZP, {
                userId: t.id,
                contextGuildId: n,
                className: S.tagChiplet
              }),
              name: (0, r.jsx)(h.Z, {
                userName: q,
                displayNameStyles: J,
                effectDisplayType: Z ? p.F.PLAIN : p.F.ANIMATED,
                loop: true
              }),
              innerClassName: w,
              withDisplayNameStyles: null != J
            })
          }) : null, (0, r.jsxs)("div", {
            className: o()(S.avatarContainer, L && S.avatarVisible),
            children: [(0, r.jsx)(c.qEK, {
              src: V ? A : C,
              size: Q,
              "aria-hidden": true,
              status: c.Skl.ONLINE,
              statusColor: W,
              className: S.avatar
            }), (0, r.jsx)("div", {
              className: S.placeholderUsername
            })]
          })]
        })]
      })
    })
  })