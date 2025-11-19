/** Chunk was on web.js **/
/** chunk id: 566697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => R,
  Z: () => P
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
  Chunk365616 = require("./365616.js"),
  Chunk460400 = require("./460400.js"),
  Chunk943549 = require("./943549.js");
let N = {
    xlarge: Chunk481060.EFr.SIZE_48,
    large: Chunk481060.EFr.SIZE_40,
    small: Chunk481060.EFr.SIZE_24,
    xsmall: Chunk481060.EFr.SIZE_20,
    default: Chunk481060.EFr.SIZE_32
  },
  R = Chunk473749.memo(function(e) {
    let {
      user: t,
      guildId: n,
      nameplate: a,
      nameplateData: R,
      className: P,
      innerClassName: D,
      isHighlighted: w,
      showStatus: L,
      showPlaceholderUser: x,
      pendingGlobalName: M,
      pendingNickname: j,
      pendingAvatarDecoration: k,
      pendingDisplayNameStyles: U,
      nameplatePreviewSize: G = "default",
      isPurchased: B = false,
      skipEffectDisplayName: Z = false,
      width: F
    } = e, V = (0, u.ZP)(), H = (0, l.wj)(V), Y = null != a ? (0, _.EU)(a) : R, W = (0, s.e7)([O.Z], () => null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE), K = H ? "#706F74" : "#aaaab2", z = i.useRef(null), q = (0, s.e7)([y.ZP], () => null != n && null != t ? y.ZP.getMember(n, t.id) : null), X = null != t ? (0, b.Ly)({
      pendingNickname: j,
      pendingGlobalName: M,
      user: t,
      guildMember: q
    }) : true, Q = (0, E.Ys)({
      pendingValue: k,
      userValue: null == t ? true : t.avatarDecoration,
      guildValue: null == q ? true : q.avatarDecoration,
      guildId: n
    }), J = i.useMemo(() => N[G], [G]), $ = (0, p.Z)({
      userId: null == t ? true : t.id,
      guildId: n,
      pendingDisplayNameStyles: U
    }), ee = i.useMemo(() => null != a ? T.intl.formatToPlainString(T.t.YJig7C, {
      a11y_text: a.label
    }) : T.intl.string(T.t.SZeUdR), [a]);
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": ee,
      style: {
        color: H ? "white" : "black",
        width: null != F ? "".concat(F, "px") : "100%"
      },
      children: (0, r.jsxs)(c.Rny, {
        className: o()(P, S.nameplatePreview, {
          [S.nameplatePurchased]: B && !w,
          [S.xsmall]: "xsmall" === G,
          [S.small]: "small" === G,
          [S.large]: "large" === G,
          [S.xlarge]: "xlarge" === G,
          [S.inheritWidth]: null != F
        }),
        children: [null != Y && (0, r.jsx)(I.Z, {
          nameplate: Y,
          hovered: w,
          placement: v.i.PREVIEW,
          content: x ? true : z
        }, null == a ? true : a.skuId), (0, r.jsxs)("div", {
          className: S.overlayContainer,
          children: [null != t ? (0, r.jsx)("div", {
            className: o()(S.avatarContainer, !x && S.avatarVisible),
            children: (0, r.jsx)(d.Z, {
              ref: z,
              avatar: (0, r.jsx)(f.Z, {
                user: t,
                guildId: n,
                avatarSize: J,
                status: L ? W : true,
                avatarDecorationOverride: Q,
                "aria-hidden": true
              }),
              decorators: (0, r.jsx)(g.ZP, {
                userId: t.id,
                contextGuildId: n,
                className: S.tagChiplet
              }),
              name: (0, r.jsx)(m.Z, {
                userName: X,
                displayNameStyles: $,
                effectDisplayType: Z ? h.F.PLAIN : h.F.ANIMATED,
                loop: true
              }),
              innerClassName: D,
              withDisplayNameStyles: null != $
            })
          }) : null, (0, r.jsxs)("div", {
            className: o()(S.avatarContainer, x && S.avatarVisible),
            children: [(0, r.jsx)(c.qEK, {
              src: H ? A : C,
              size: J,
              "aria-hidden": true,
              status: c.Skl.ONLINE,
              statusColor: K,
              className: S.avatar
            }), (0, r.jsx)("div", {
              className: S.placeholderUsername
            })]
          })]
        })]
      })
    })
  }),
  P = R