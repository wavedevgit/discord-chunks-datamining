/** Chunk was on 73755 **/
/** chunk id: 295536, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk728345 = require("./728345.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk463421 = require("./463421.js"),
  Chunk314897 = require("./314897.js"),
  Chunk906605 = require("./906605.js"),
  Chunk748855 = require("./748855.jsx"),
  Chunk972526 = require("./972526.js");

function h(e) {
  var t;
  let {
    guildId: n,
    onSetActivityStatus: h
  } = e, f = (0, l.e7)([c.default], () => c.default.getId()), m = (0, s.Z)(f, n)[0], g = null != (t = (0, a.IX)(null == m ? true : m.application_id).data) ? t : true, b = r.useCallback(() => {
    null != g && ((0, u.XE)(g.id, true), h())
  }, [g, h]);
  return null == g ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(d.L, {
      label: g.name,
      icon: (0, i.jsx)(o.Z, {
        game: g,
        className: p.icon
      }),
      setStatus: b
    }), (0, i.jsx)("div", {
      role: "separator",
      className: p.separator
    })]
  })
}