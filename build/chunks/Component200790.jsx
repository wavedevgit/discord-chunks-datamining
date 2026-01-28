/** Chunk was on 5606 **/
/** chunk id: 200790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  let {
    user: t,
    guild: n,
    className: i,
    sectionTitle: p,
    forcedDivider: b = false,
    withTutorial: A = false
  } = e, {
    analyticsLocations: E
  } = (0, o.Ay)(), x = (0, u.A)("enable_avatar_decoration_uploads"), O = (0, _.a4)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingAvatarDecoration: C,
    errors: y
  } = (0, _.CP)(null == n ? true : n.id), j = A ? a.wLn : s.$n;
  return (0, r.jsxs)(m.A, {
    className: i,
    forcedDivider: b,
    hasBackground: true,
    title: p,
    errors: y,
    children: [(0, r.jsxs)("div", {
      className: f.NC,
      children: [(0, r.jsx)(j, {
        size: s.$n.Sizes.SMALL,
        onClick: () => {
          (0, d.L)({
            analyticsLocations: E,
            guild: n
          })
        },
        className: l()({
          [f.yj]: A
        }),
        children: g.intl.string(g.t.BVcYCx)
      }), (true === C ? null != O : null != C) && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: f.DT,
        children: (0, r.jsx)(a.Button, {
          variant: "secondary",
          size: "sm",
          text: (0, c.uZ)(t, n) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
          onClick: () => {
            (0, _.Dx)(null, null == n ? true : n.id)
          }
        })
      })]
    }), t.isStaff() && x && (0, r.jsx)(h, {
      user: t
    })]
  })
}
let h = e => {
  let {
    user: t
  } = e;
  return (0, r.jsxs)("div", {
    className: f.J_,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-xs/bold",
      children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
    }), (0, r.jsx)(p.A, {
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