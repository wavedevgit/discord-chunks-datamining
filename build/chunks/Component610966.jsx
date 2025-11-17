/** Chunk was on web.js **/
/** chunk id: 610966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk866442 = require("./866442.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk220082 = require("./220082.js"),
  Chunk193528 = require("./193528.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  var t;
  let {
    user: n,
    savedUserColor: d,
    pendingColor: f,
    setPendingAccentColor: _
  } = e, p = n.getAvatarURL(null, 80), h = (0, o.dQu)(a.Z.unsafe_rawColors.PRIMARY_530).hex(), m = (0, s.Cf)(p, h, false), g = (0, i._i)(m[0]);
  return (0, r.jsx)(c.Z, {
    title: u.intl.string(u.t["/X3fkf"]),
    children: (0, r.jsx)(l.Z, {
      onChange: e => _(e),
      color: null != (t = null != f ? f : d) ? t : g,
      suggestedColors: m,
      showEyeDropper: true
    })
  })
}