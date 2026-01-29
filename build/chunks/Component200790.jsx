/** Chunk was on 2827 **/
/** chunk id: 200790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk507698 = require("./507698.js"),
  Chunk954921 = require("./954921.jsx"),
  Chunk354328 = require("./354328.js"),
  Chunk405810 = require("./405810.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk223772 = require("./223772.js");

function f(e) {
  let {
    user: t,
    guild: n,
    className: i,
    sectionTitle: _,
    forcedDivider: f = false,
    withTutorial: h = false
  } = e, {
    analyticsLocations: E
  } = (0, o.Ay)(), O = (0, u.A)("enable_avatar_decoration_uploads"), C = (0, p.a4)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingAvatarDecoration: x,
    errors: S
  } = (0, p.CP)(null == n ? true : n.id), T = h ? a.wLn : s.$n;
  return (0, r.jsxs)(m.A, {
    className: i,
    forcedDivider: f,
    hasBackground: true,
    title: _,
    errors: S,
    children: [(0, r.jsxs)("div", {
      className: A.NC,
      children: [(0, r.jsx)(T, {
        size: s.$n.Sizes.SMALL,
        onClick: () => {
          (0, d.L)({
            analyticsLocations: E,
            guild: n
          })
        },
        className: l()({
          [A.yj]: h
        }),
        children: g.intl.string(g.t.BVcYCx)
      }), (true === x ? null != C : null != x) && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: A.DT,
        children: (0, r.jsx)(a.Button, {
          variant: "secondary",
          size: "sm",
          text: (0, c.uZ)(t, n) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
          onClick: () => {
            (0, p.Dx)(null, null == n ? true : n.id)
          }
        })
      })]
    }), t.isStaff() && O && (0, r.jsx)(b, {
      user: t
    })]
  })
}
let b = e => {
  let {
    user: t
  } = e;
  return (0, r.jsxs)("div", {
    className: A.J_,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-xs/bold",
      children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
    }), (0, r.jsx)(_.A, {
      onChange: e => {
        null != e && (t.avatarDecoration = {
          asset: e,
          skuID: "PALUE000000001"
        })
      },
      size: "sm",
      variant: "primary",
      text: g.intl.string(g.t.a9F1Qu)
    })]
  })
}