/** Chunk was on web.js **/
/** chunk id: 550111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P,
  a: () => R
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk262295 = require("./262295.jsx"),
  Chunk291661 = require("./291661.jsx"),
  Chunk628856 = require("./628856.js"),
  Chunk609425 = require("./609425.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk685073 = require("./685073.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk385612 = require("./385612.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk290863 = require("./290863.js"),
  Chunk226540 = require("./226540.js"),
  Chunk227 = require("./227.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk662567 = require("./662567.js"),
  Chunk16533 = require("./16533.js"),
  Chunk312653 = require("./312653.js");
let w = {
    xlarge: Chunk397927._3J.SIZE_48,
    large: Chunk397927._3J.SIZE_40,
    small: Chunk397927._3J.SIZE_24,
    xsmall: Chunk397927._3J.SIZE_20,
    default: Chunk397927._3J.SIZE_32
  },
  R = Chunk64700.memo(function(e) {
    let {
      user: t,
      guildId: n,
      nameplate: a,
      nameplateData: R,
      className: P,
      innerClassName: D,
      isHighlighted: x,
      showStatus: L,
      showPlaceholderUser: j,
      pendingGlobalName: M,
      pendingNickname: k,
      pendingAvatarDecoration: U,
      pendingDisplayNameStyles: G,
      pendingPrimaryGuildId: V,
      nameplatePreviewSize: F = "default",
      skipEffectDisplayName: B = false,
      width: H
    } = e, Y = (0, u.Ay)(), W = (0, l.Mw)(Y), K = null != a ? (0, p.D)(a) : R, z = (0, o.bG)([v.A], () => null != t ? v.A.getStatus(t.id) : c.clD.ONLINE), q = W ? "#706F74" : "#aaaab2", Z = i.useRef(null), X = (0, o.bG)([O.Ay], () => null != n && null != t ? O.Ay.getMember(n, t.id) : null), Q = null != t ? (0, b.eh)({
      pendingNickname: k,
      pendingGlobalName: M,
      user: t,
      guildMember: X
    }) : true, J = (0, y.lw)({
      pendingValue: U,
      userValue: null == t ? true : t.avatarDecoration,
      guildValue: null == X ? true : X.avatarDecoration,
      guildId: n
    }), $ = i.useMemo(() => w[F], [F]), ee = (0, _.A)({
      userId: null == t ? true : t.id,
      guildId: n,
      pendingDisplayNameStyles: G
    }), et = (0, g.gS)(V), en = i.useMemo(() => null != a ? S.intl.formatToPlainString(S.t.YJig7C, {
      a11y_text: a.label
    }) : S.intl.string(S.t.SZeUdR), [a]);
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": en,
      style: {
        color: W ? "white" : "black",
        width: null != H ? "".concat(H, "px") : "100%"
      },
      children: (0, r.jsxs)(c.M1G, {
        className: s()(P, T.M4, {
          [T.s]: "xsmall" === F,
          [T.EX]: "small" === F,
          [T.as]: "large" === F,
          [T.AQ]: "xlarge" === F,
          [T.gf]: null != H
        }),
        children: [null != K && (0, r.jsx)(I.A, {
          nameplate: K,
          hovered: x,
          placement: A.u.PREVIEW,
          content: j ? true : Z
        }, null == a ? true : a.skuId), (0, r.jsxs)("div", {
          className: T.MU,
          children: [null != t ? (0, r.jsx)("div", {
            className: s()(T.H, !j && T.Mk),
            children: (0, r.jsx)(d.A, {
              ref: Z,
              avatar: (0, r.jsx)(f.A, {
                user: t,
                guildId: n,
                avatarSize: $,
                status: L ? z : true,
                avatarDecorationOverride: J,
                "aria-hidden": true
              }),
              decorators: (0, r.jsx)(E.Ay, {
                primaryGuild: et,
                userId: t.id,
                contextGuildId: n,
                className: T.id
              }),
              name: (0, r.jsx)(m.A, {
                userName: Q,
                displayNameStyles: ee,
                effectDisplayType: B ? h.G.PLAIN : h.G.ANIMATED,
                loop: true
              }),
              innerClassName: D,
              withDisplayNameStyles: null != ee
            })
          }) : null, (0, r.jsxs)("div", {
            className: s()(T.H, j && T.Mk),
            children: [(0, r.jsx)(c.euF, {
              src: W ? C : N,
              size: $,
              "aria-hidden": true,
              status: c.clD.ONLINE,
              statusColor: q,
              className: T.my
            }), (0, r.jsx)("div", {
              className: T.gM
            })]
          })]
        })]
      })
    })
  }),
  P = R