/** Chunk was on web.js **/
/** chunk id: 709066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk931228 = require("./931228.js");
let d = e => {
  let {
    invertColor: t = false,
    type: n = l.nu.BOT,
    className: i,
    verified: d,
    hideIcon: f = false,
    useRemSizes: p = false,
    children: _ = []
  } = e, h = null, m = c.intl.string(c.t.g76OcH), g = t ? u.i$ : u.GD;
  switch (n) {
    case l.nu.SYSTEM_DM:
    case l.nu.OFFICIAL:
      d = true, m = c.intl.string(c.t["7s687k"]), h = c.intl.string(c.t.lKQ7Wt);
      break;
    case l.nu.SERVER:
      h = c.intl.string(c.t.PuJGuM);
      break;
    case l.nu.ORIGINAL_POSTER:
      h = c.intl.string(c.t.fyE8sH);
      break;
    case l.nu.STAFF_ONLY_DM:
      h = c.intl.string(c.t.oMx98L);
      break;
    case l.nu.NOT_STAFF_WARNING:
      h = c.intl.string(c.t.UWhXbK), g = u.Zi;
      break;
    case l.nu.BOT:
    default:
      h = c.intl.string(c.t["9RNkeF"])
  }
  let E = n === l.nu.ORIGINAL_POSTER,
    b = null;
  d && (b = (0, r.jsx)(s.m, {
    text: m,
    align: "center",
    position: "top",
    children: (0, r.jsx)(o.BNr, {
      className: u.go,
      color: o.LU0.colors.WHITE
    })
  }));
  let y = () => (0, r.jsxs)("span", {
    className: a()(i, g, p ? u.D0 : u.px, {
      [u.rV]: E
    }),
    children: [f ? null : b, _, (0, r.jsx)("span", {
      className: u.lc,
      children: h
    })]
  });
  return n === l.nu.ORIGINAL_POSTER ? (0, r.jsx)(s.m, {
    text: c.intl.string(c.t.uN6Emt),
    position: "top",
    asContainer: true,
    children: y()
  }) : y()
};
d.Types = Chunk705751.nu;
let f = d