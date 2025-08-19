/** Chunk was on 66181 **/
/** chunk id: 610966, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk866442 = require("./866442.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk220082 = require("./220082.js"),
  Chunk193528 = require("./193528.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  var t;
  let {
    user: n,
    savedUserColor: u,
    pendingColor: m,
    setPendingAccentColor: p
  } = e, g = n.getAvatarURL(null, 80), h = (0, a.dQu)(s.Z.unsafe_rawColors.PRIMARY_530).hex(), f = (0, l.Cf)(g, h, false), b = (0, r._i)(f[0]);
  return (0, i.jsx)(c.Z, {
    title: d.intl.string(d.t["/X3fkZ"]),
    children: (0, i.jsx)(o.Z, {
      onChange: e => p(e),
      color: null != (t = null != m ? m : u) ? t : b,
      suggestedColors: f,
      showEyeDropper: true
    })
  })
}