/** Chunk was on 80037 **/
/** chunk id: 295536, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk728345 = require("./728345.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk463421 = require("./463421.js"),
  Chunk314897 = require("./314897.js"),
  Chunk906605 = require("./906605.js"),
  Chunk748855 = require("./748855.jsx"),
  Chunk175379 = require("./175379.js");

function p(e) {
  var t;
  let {
    guildId: n
  } = e, p = (0, i.e7)([s.default], () => s.default.getId()), h = (0, o.Z)(p, n)[0], f = null != (t = (0, l.IX)(null == h ? true : h.application_id).data) ? t : true;
  return null == f ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.L, {
      label: f.name,
      icon: (0, r.jsx)(a.Z, {
        game: f,
        className: d.icon
      }),
      setStatus: () => (0, c.XE)(f.id, true)
    }), (0, r.jsx)("div", {
      role: "separator",
      className: d.separator
    })]
  })
}