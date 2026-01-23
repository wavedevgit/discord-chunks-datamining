/** Chunk was on web.js **/
/** chunk id: 200790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function g(e) {
  let {
    user: t,
    guild: n,
    className: i,
    sectionTitle: f,
    forcedDivider: g = false,
    withTutorial: E = false
  } = e, {
    analyticsLocations: b
  } = (0, l.Ay)(), O = (0, d.A)("enable_avatar_decoration_uploads"), v = (0, p.a4)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingAvatarDecoration: A,
    errors: I
  } = (0, p.CP)(null == n ? true : n.id), S = true === A ? null != v : null != A, T = () => {
    (0, u.L)({
      analyticsLocations: b,
      guild: n
    })
  }, C = () => {
    (0, p.Dx)(null, null == n ? true : n.id)
  }, N = E ? o.wLn : s.$n;
  return (0, r.jsxs)(_.A, {
    className: i,
    forcedDivider: g,
    hasBackground: true,
    title: f,
    errors: I,
    children: [(0, r.jsxs)("div", {
      className: m.NC,
      children: [(0, r.jsx)(N, {
        size: s.$n.Sizes.SMALL,
        onClick: T,
        className: a()({
          [m.yj]: E
        }),
        children: h.intl.string(h.t.BVcYCx)
      }), S && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: m.DT,
        children: (0, r.jsx)(o.Button, {
          variant: "secondary",
          size: "sm",
          text: (0, c.uZ)(t, n) ? h.intl.string(h.t.CHf9iJ) : h.intl.string(h.t.OrokWm),
          onClick: C
        })
      })]
    }), t.isStaff() && O && (0, r.jsx)(y, {
      user: t
    })]
  })
}
let E = "PALUE000000001",
  y = e => {
    let {
      user: t
    } = e;
    return (0, r.jsxs)("div", {
      className: m.J_,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-xs/bold",
        children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
      }), (0, r.jsx)(f.A, {
        onChange: e => {
          null != e && (t.avatarDecoration = {
            asset: e,
            skuID: E
          })
        },
        size: "sm",
        variant: "primary",
        text: h.intl.string(h.t.a9F1Qu)
      })]
    })
  }