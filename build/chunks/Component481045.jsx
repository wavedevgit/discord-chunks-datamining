/** Chunk was on 78528 **/
/** chunk id: 481045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L7: () => m,
  qA: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk711014 = require("./711014.js"),
  Chunk115063 = require("./115063.js"),
  Chunk704037 = require("./704037.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk536482 = require("./536482.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk259533 = require("./259533.js");
let m = () => {
  (0, o.openUserSettings)(a.X.ACTIVITY_PRIVACY_PANEL, {
    section: p.nc_.ACTIVITY_PRIVACY
  })
};

function b(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return (0, r.jsxs)(i.DUT, {
    className: g.E1,
    onClick: n,
    children: [(0, r.jsx)("div", {
      className: g.j3,
      children: t
    }), (0, r.jsx)(i._BQ, {
      color: i.LU0.colors.TEXT_SUBTLE,
      size: "xs"
    })]
  })
}

function A(e) {
  let {
    onClosePopout: t
  } = e, n = s.tz.useSetting(), a = (0, l.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()), o = (0, u.Kk)(), p = a.filter(e => !o.has(e));
  return 0 === a.length ? null : (0, r.jsxs)(b, {
    onClick: () => {
      t(), m()
    },
    children: [(0, r.jsx)(i.Text, {
      variant: "text-sm/semibold",
      children: f.intl.string(n ? h.default["3GrhnF"] : h.default["54ycKJ"])
    }), (0, r.jsx)(d.l, {
      guildIds: p
    })]
  })
}