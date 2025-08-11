/** Chunk was on 1272 **/
/** chunk id: 376191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk570928 = require("./570928.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk43267 = require("./43267.js"),
  Chunk522289 = require("./522289.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk620924 = require("./620924.js"),
  Chunk332712 = require("./332712.js"),
  Chunk81471 = require("./81471.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818816 = require("./818816.js");
let v = e => {
    let {
      userId: t
    } = e, n = (0, _.O)(t);
    return null == n || 0 === n.length ? (0, r.jsx)(l.Text, {
      className: y.mutualGuilds,
      variant: "text-sm/normal",
      color: "text-muted",
      children: E.intl.string(E.t.jpY0X1)
    }) : (0, r.jsxs)("div", {
      className: y.mutualGuildsContainer,
      children: [(0, r.jsx)(f.Z, {
        guilds: n,
        maxGuilds: 3,
        size: c.Vj.Sizes.SMOL,
        hideOverflowCount: true
      }), (0, r.jsx)(l.Text, {
        className: y.mutualGuilds,
        variant: "text-sm/normal",
        color: "text-muted",
        children: E.intl.format(E.t.eE3oen, {
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
    otherUser: c,
    active: f
  } = e, m = (0, i.e7)([o.Z], () => o.Z.useReducedMotion), _ = (0, i.e7)([h.Z], () => null == c ? null : h.Z.getNickname(c.id)), C = !m && f, S = (0, b.c)(n), {
    avatarDecorationSrc: N
  } = (0, d.Z)({
    user: c,
    size: (0, u.y9)(l.EFr.SIZE_40),
    onlyAnimateOnHover: true
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I, {
      className: y.avatar,
      src: (0, p.x)(n, 40, C),
      avatarDecoration: N,
      size: l.EFr.SIZE_40,
      "aria-label": null != (t = null == c ? true : c.username) ? t : E.intl.string(E.t["30mdIy"])
    }), (0, r.jsxs)("div", {
      className: y.userPreview,
      children: [(0, r.jsxs)("div", {
        className: y.userContainerWithPreview,
        children: [(0, r.jsx)(a.Z, {
          nick: _,
          user: c,
          showAccountIdentifier: true,
          className: y.tagContainer,
          usernameClass: y.username,
          discriminatorClass: null != g.ZP.getGlobalName(c) ? y.globalName : y.discriminator
        }), (0, r.jsx)(l.Text, {
          className: y.timestampWithPreview,
          color: "text-muted",
          variant: "text-xs/normal",
          children: S
        })]
      }), (0, r.jsx)(s.Z, {
        hoverText: (0, r.jsx)(O.Z, {
          channel: n
        }),
        forceHover: f,
        children: (0, r.jsx)(v, {
          userId: c.id
        })
      })]
    })]
  })
}