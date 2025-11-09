/** Chunk was on web.js **/
/** chunk id: 385499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk892958 = require("./892958.js");
let d = e => {
  let {
    invertColor: t = false,
    type: n = l.Hb.BOT,
    className: i,
    verified: d,
    hideIcon: f = false,
    useRemSizes: _ = false,
    children: p = []
  } = e, h = null, m = c.intl.string(c.t.g76OcH), g = t ? u.botTagInvert : u.botTagRegular;
  switch (n) {
    case l.Hb.SYSTEM_DM:
    case l.Hb.OFFICIAL:
      d = true, m = c.intl.string(c.t["7s687k"]), h = c.intl.string(c.t.lKQ7Wt);
      break;
    case l.Hb.SERVER:
      h = c.intl.string(c.t.PuJGuM);
      break;
    case l.Hb.ORIGINAL_POSTER:
      h = c.intl.string(c.t.fyE8sH);
      break;
    case l.Hb.STAFF_ONLY_DM:
      h = c.intl.string(c.t.oMx98L);
      break;
    case l.Hb.NOT_STAFF_WARNING:
      h = c.intl.string(c.t.UWhXbK), g = u.botTagNotStaffWarning;
      break;
    case l.Hb.REMIX:
      d = false, h = c.intl.string(c.t.uXDG34);
      break;
    case l.Hb.BOT:
    default:
      h = c.intl.string(c.t["9RNkeF"])
  }
  let E = n === l.Hb.ORIGINAL_POSTER,
    b = n === l.Hb.REMIX,
    y = null;
  d && (y = (0, r.jsx)(o.u, {
    text: m,
    align: "center",
    position: "top",
    children: (0, r.jsx)(s.kSu, {
      className: u.botTagVerified,
      color: s.TVs.colors.WHITE
    })
  }));
  let O = () => (0, r.jsxs)("span", {
    className: a()(i, g, _ ? u.rem : u.px, {
      [u.botTagOP]: E,
      [u.botTagRemix]: b
    }),
    children: [f ? null : y, p, (0, r.jsx)("span", {
      className: u.botText,
      children: h
    })]
  });
  switch (n) {
    case l.Hb.REMIX:
      return (0, r.jsx)(o.u, {
        text: c.intl.string(c.t.xb0sts),
        position: "top",
        asContainer: true,
        children: O()
      });
    case l.Hb.ORIGINAL_POSTER:
      return (0, r.jsx)(o.u, {
        text: c.intl.string(c.t.uN6Emt),
        position: "top",
        asContainer: true,
        children: O()
      });
    default:
      return O()
  }
};
d.Types = Chunk674563.Hb;
let f = d