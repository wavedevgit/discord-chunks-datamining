/** Chunk was on 1272 **/
/** chunk id: 376191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk139117 = require("./139117.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk570928 = require("./570928.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk43267 = require("./43267.js"),
  Chunk699516 = require("./699516.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk620924 = require("./620924.js"),
  Chunk332712 = require("./332712.js"),
  Chunk81471 = require("./81471.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk68599 = require("./68599.js");
let y = e => {
    let {
      userId: t
    } = e, n = (0, E.O)(t);
    return null == n || 0 === n.length ? (0, r.jsx)(a.Text, {
      className: v.mutualGuilds,
      variant: "text-sm/normal",
      color: "text-muted",
      children: O.intl.string(O.t.jpY0X5)
    }) : (0, r.jsxs)("div", {
      className: v.mutualGuildsContainer,
      children: [(0, r.jsx)(l.Z, {
        guilds: n,
        maxGuilds: 3,
        size: u.Vj.Sizes.SMOL,
        hideOverflowCount: true
      }), (0, r.jsx)(a.Text, {
        className: v.mutualGuilds,
        variant: "text-sm/normal",
        color: "text-muted",
        children: O.intl.format(O.t.eE3oep, {
          count: n.length
        })
      })]
    })
  },
  I = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function C(e) {
  var t;
  let {
    channel: n,
    otherUser: l,
    active: u
  } = e, m = (0, i.e7)([o.Z], () => o.Z.useReducedMotion), E = (0, i.e7)([g.Z], () => null == l ? null : g.Z.getNickname(l.id)), C = !m && u, S = (0, b.c)(n), {
    avatarDecorationSrc: T
  } = (0, p.Z)({
    user: l,
    size: (0, d.y9)(a.EFr.SIZE_40),
    onlyAnimateOnHoverOrFocus: true
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I, {
      className: v.avatar,
      src: (0, f.x)(n, 40, C),
      avatarDecoration: T,
      size: a.EFr.SIZE_40,
      "aria-label": null != (t = null == l ? true : l.username) ? t : O.intl.string(O.t["30mdIx"])
    }), (0, r.jsxs)("div", {
      className: v.userPreview,
      children: [(0, r.jsxs)("div", {
        className: v.userContainerWithPreview,
        children: [(0, r.jsx)(s.Z, {
          nick: E,
          user: l,
          showAccountIdentifier: true,
          className: v.tagContainer,
          usernameClass: v.username,
          discriminatorClass: null != h.ZP.getGlobalName(l) ? v.globalName : v.discriminator
        }), (0, r.jsx)(a.Text, {
          className: v.timestampWithPreview,
          color: "text-muted",
          variant: "text-xs/normal",
          children: S
        })]
      }), (0, r.jsx)(c.Z, {
        hoverText: (0, r.jsx)(_.Z, {
          channel: n
        }),
        forceHover: u,
        children: (0, r.jsx)(y, {
          userId: l.id
        })
      })]
    })]
  })
}