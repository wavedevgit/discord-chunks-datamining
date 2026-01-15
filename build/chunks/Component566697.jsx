/** Chunk was on web.js **/
/** chunk id: 566697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => P,
  Z: () => w
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
      className: w,
      innerClassName: R,
      isHighlighted: D,
      showStatus: x,
      showPlaceholderUser: L,
      pendingGlobalName: j,
      pendingNickname: M,
      pendingAvatarDecoration: k,
      pendingDisplayNameStyles: U,
      nameplatePreviewSize: G = "default",
      skipEffectDisplayName: Z = false,
      width: F
    } = e, B = (0, u.ZP)(), V = (0, l.wj)(B), H = null != a ? (0, p.E)(a) : P, Y = (0, s.e7)([O.Z], () => null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE), W = V ? "#706F74" : "#aaaab2", K = i.useRef(null), z = (0, s.e7)([y.ZP], () => null != n && null != t ? y.ZP.getMember(n, t.id) : null), q = null != t ? (0, b.Ly)({
      pendingNickname: M,
      pendingGlobalName: j,
      user: t,
      guildMember: z
    }) : true, Q = (0, E.Ys)({
      pendingValue: k,
      userValue: null == t ? true : t.avatarDecoration,
      guildValue: null == z ? true : z.avatarDecoration,
      guildId: n
    }), X = i.useMemo(() => N[G], [G]), J = (0, _.Z)({
      userId: null == t ? true : t.id,
      guildId: n,
      pendingDisplayNameStyles: U
    }), $ = i.useMemo(() => null != a ? I.intl.formatToPlainString(I.t.YJig7C, {
      a11y_text: a.label
    }) : I.intl.string(I.t.SZeUdR), [a]);
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": $,
      style: {
        color: V ? "white" : "black",
        width: null != F ? "".concat(F, "px") : "100%"
      },
      children: (0, r.jsxs)(c.Rny, {
        className: o()(w, T.nameplatePreview, {
          [T.xsmall]: "xsmall" === G,
          [T.small]: "small" === G,
          [T.large]: "large" === G,
          [T.xlarge]: "xlarge" === G,
          [T.inheritWidth]: null != F
        }),
        children: [null != H && (0, r.jsx)(S.Z, {
          nameplate: H,
          hovered: D,
          placement: v.i.PREVIEW,
          content: L ? true : K
        }, null == a ? true : a.skuId), (0, r.jsxs)("div", {
          className: T.overlayContainer,
          children: [null != t ? (0, r.jsx)("div", {
            className: o()(T.avatarContainer, !L && T.avatarVisible),
            children: (0, r.jsx)(d.Z, {
              ref: K,
              avatar: (0, r.jsx)(f.Z, {
                user: t,
                guildId: n,
                avatarSize: X,
                status: x ? Y : true,
                avatarDecorationOverride: Q,
                "aria-hidden": true
              }),
              decorators: (0, r.jsx)(g.ZP, {
                userId: t.id,
                contextGuildId: n,
                className: T.tagChiplet
              }),
              name: (0, r.jsx)(m.Z, {
                userName: q,
                displayNameStyles: J,
                effectDisplayType: Z ? h.F.PLAIN : h.F.ANIMATED,
                loop: true
              }),
              innerClassName: R,
              withDisplayNameStyles: null != J
            })
          }) : null, (0, r.jsxs)("div", {
            className: o()(T.avatarContainer, L && T.avatarVisible),
            children: [(0, r.jsx)(c.qEK, {
              src: V ? C : A,
              size: X,
              "aria-hidden": true,
              status: c.Skl.ONLINE,
              statusColor: W,
              className: T.avatar
            }), (0, r.jsx)("div", {
              className: T.placeholderUsername
            })]
          })]
        })]
      })
    })
  }),
  w = P