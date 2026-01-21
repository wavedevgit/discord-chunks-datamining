/** Chunk was on 82124 **/
/** chunk id: 295536, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => f
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
  Chunk849191 = require("./849191.js");

function f(e) {
  var t;
  let {
    guildId: n,
    onSetActivityStatus: f
  } = e, h = (0, l.e7)([c.default], () => c.default.getId()), g = (0, s.Z)(h, n)[0], m = null != (t = (0, a.IX)(null == g ? true : g.application_id).data) ? t : true, b = i.useCallback(() => {
    null != m && ((0, u.XE)(m.id, true), f())
  }, [m, f]);
  return null == m ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.L, {
      label: m.name,
      icon: (0, r.jsx)(o.Z, {
        game: m,
        className: p.icon
      }),
      setStatus: b
    }), (0, r.jsx)("div", {
      role: "separator",
      className: p.separator
    })]
  })
}