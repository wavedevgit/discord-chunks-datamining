/** Chunk was on web.js **/
/** chunk id: 431982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk590547 = require("./590547.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk888920 = require("./888920.js");

function f(e) {
  let {
    user: t,
    guild: n,
    titleIcon: f
  } = e, {
    analyticsLocations: p
  } = (0, s.Ay)(), _ = null != n, {
    userNameplate: h,
    guildNameplate: m,
    pendingNameplate: g,
    pendingErrors: E
  } = (0, l.rv)(t, null == n ? true : n.id), y = true === g ? (_ ? m : h) != null : null != g, b = i.useCallback(() => {
    (0, o.p)({
      analyticsLocations: p,
      guildId: null == n ? true : n.id
    })
  }, [p, null == n ? true : n.id]), O = i.useCallback(() => {
    (0, l.pX)(null, null == n ? true : n.id)
  }, [null == n ? true : n.id]);
  return (0, r.jsx)(c.A, {
    title: u.intl.string(u.t.x5CoXR),
    titleIcon: f,
    errors: E,
    children: (0, r.jsxs)("div", {
      className: d.u,
      children: [(0, r.jsx)(a.Button, {
        variant: "primary",
        size: "sm",
        text: u.intl.string(u.t.BwdeM1),
        onClick: b
      }), y && (0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: _ ? u.intl.string(u.t.CHf9iJ) : u.intl.string(u.t["9zwziY"]),
        onClick: O
      })]
    })
  })
}