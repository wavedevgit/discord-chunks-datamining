/** Chunk was on web.js **/
/** chunk id: 566697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => w,
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
  Chunk731722 = require("./731722.js"),
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
let P = {
    xlarge: Chunk481060.EFr.SIZE_48,
    large: Chunk481060.EFr.SIZE_40,
    small: Chunk481060.EFr.SIZE_24,
    xsmall: Chunk481060.EFr.SIZE_20,
    default: Chunk481060.EFr.SIZE_32
  },
  w = Chunk473749.memo(function(e) {
    let {
      user: t,
      guildId: n,
      nameplate: a,
      nameplateData: w,
      className: R,
      innerClassName: D,
      isHighlighted: x,
      showStatus: L,
      showPlaceholderUser: j,
      pendingGlobalName: M,
      pendingNickname: k,
      pendingAvatarDecoration: U,
      pendingDisplayNameStyles: G,
      pendingPrimaryGuildId: Z,
      nameplatePreviewSize: F = "default",
      skipEffectDisplayName: B = false,
      width: V
    } = e, H = (0, u.ZP)(), Y = (0, l.wj)(H), W = null != a ? (0, p.E)(a) : w, K = (0, s.e7)([v.Z], () => null != t ? v.Z.getStatus(t.id) : c.Skl.ONLINE), z = Y ? "#706F74" : "#aaaab2", q = i.useRef(null), Q = (0, s.e7)([O.ZP], () => null != n && null != t ? O.ZP.getMember(n, t.id) : null), X = null != t ? (0, y.Ly)({
      pendingNickname: k,
      pendingGlobalName: M,
      user: t,
      guildMember: Q
    }) : true, J = (0, b.Ys)({
      pendingValue: U,
      userValue: null == t ? true : t.avatarDecoration,
      guildValue: null == Q ? true : Q.avatarDecoration,
      guildId: n
    }), $ = i.useMemo(() => P[F], [F]), ee = (0, _.Z)({
      userId: null == t ? true : t.id,
      guildId: n,
      pendingDisplayNameStyles: G
    }), et = (0, g.oZ)(Z), en = i.useMemo(() => null != a ? T.intl.formatToPlainString(T.t.YJig7C, {
      a11y_text: a.label
    }) : T.intl.string(T.t.SZeUdR), [a]);
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": en,
      style: {
        color: Y ? "white" : "black",
        width: null != V ? "".concat(V, "px") : "100%"
      },
      children: (0, r.jsxs)(c.Rny, {
        className: o()(R, C.nameplatePreview, {
          [C.xsmall]: "xsmall" === F,
          [C.small]: "small" === F,
          [C.large]: "large" === F,
          [C.xlarge]: "xlarge" === F,
          [C.inheritWidth]: null != V
        }),
        children: [null != W && (0, r.jsx)(I.Z, {
          nameplate: W,
          hovered: x,
          placement: S.i.PREVIEW,
          content: j ? true : q
        }, null == a ? true : a.skuId), (0, r.jsxs)("div", {
          className: C.overlayContainer,
          children: [null != t ? (0, r.jsx)("div", {
            className: o()(C.avatarContainer, !j && C.avatarVisible),
            children: (0, r.jsx)(d.Z, {
              ref: q,
              avatar: (0, r.jsx)(f.Z, {
                user: t,
                guildId: n,
                avatarSize: $,
                status: L ? K : true,
                avatarDecorationOverride: J,
                "aria-hidden": true
              }),
              decorators: (0, r.jsx)(E.ZP, {
                primaryGuild: et,
                userId: t.id,
                contextGuildId: n,
                className: C.tagChiplet
              }),
              name: (0, r.jsx)(m.Z, {
                userName: X,
                displayNameStyles: ee,
                effectDisplayType: B ? h.F.PLAIN : h.F.ANIMATED,
                loop: true
              }),
              innerClassName: D,
              withDisplayNameStyles: null != ee
            })
          }) : null, (0, r.jsxs)("div", {
            className: o()(C.avatarContainer, j && C.avatarVisible),
            children: [(0, r.jsx)(c.qEK, {
              src: Y ? A : N,
              size: $,
              "aria-hidden": true,
              status: c.Skl.ONLINE,
              statusColor: z,
              className: C.avatar
            }), (0, r.jsx)("div", {
              className: C.placeholderUsername
            })]
          })]
        })]
      })
    })
  }),
  R = w