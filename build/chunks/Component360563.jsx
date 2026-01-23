/** Chunk was on web.js **/
/** chunk id: 360563, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk342952 = require("./342952.jsx"),
  Chunk692617 = require("./692617.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk913453 = require("./913453.js"),
  Chunk837531 = require("./837531.js"),
  Chunk186272 = require("./186272.js"),
  Chunk518477 = require("./518477.js"),
  Chunk778712 = require("./778712.js"),
  Chunk252055 = require("./252055.js");
let _ = 3;

function h(e) {
  let {
    user: t,
    onOpenProfile: n
  } = e, {
    mutualFriends: h,
    mutualGuilds: m
  } = (0, l.A)(t), g = null != h && h.length > 0, E = null != m && m.length > 0, y = g && E ? "text-xs/normal" : "text-sm/normal";
  if (!g && !E) return null;
  let b = () => g ? (0, r.jsxs)(s.DUT, {
      className: p.uW,
      onClick: () => null == n ? true : n(d.RP.MUTUAL_FRIENDS),
      children: [(0, r.jsx)(i.A, {
        maxUsers: _,
        users: h.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        size: f._3.SIZE_16,
        hideOverflowCount: true,
        disableUsernameTooltip: true,
        "aria-hidden": true
      }), (0, r.jsx)(s.Text, {
        className: p.Qq,
        variant: y,
        color: "interactive-text-default",
        children: (0, c.A)(h.length)
      })]
    }) : null,
    O = () => g && E ? (0, r.jsx)("div", {
      "aria-hidden": "true",
      className: p.jH
    }) : null,
    v = () => E ? (0, r.jsxs)(s.DUT, {
      className: p.uW,
      onClick: () => null == n ? true : n(d.RP.MUTUAL_GUILDS),
      children: [!g && (0, r.jsx)(a.A, {
        maxGuilds: _,
        guilds: m.map(e => {
          let {
            guild: t
          } = e;
          return t
        }),
        size: o.A.Sizes.SMOL,
        hideOverflowCount: true,
        disableGuildNameTooltip: true
      }), (0, r.jsx)(s.Text, {
        className: p.Qq,
        variant: y,
        color: "interactive-text-default",
        children: (0, u.A)(m.length)
      })]
    }) : null;
  return (0, r.jsxs)("div", {
    className: p.I0,
    children: [b(), O(), v()]
  })
}