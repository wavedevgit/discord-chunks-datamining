/** Chunk was on web.js **/
/** chunk id: 593629, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk317097 = require("./317097.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk654107 = require("./654107.js"),
  Chunk911180 = require("./911180.jsx"),
  Chunk128450 = require("./128450.jsx"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  var t;
  let {
    user: n,
    savedUserColor: d,
    pendingColor: f,
    setPendingAccentColor: p
  } = e, _ = n.getAvatarURL(null, 80), h = (0, s.rdh)(a.A.unsafe_rawColors.PRIMARY_530).hex(), m = (0, o.rh)(_, h, false), g = (0, i.LX)(m[0]);
  return (0, r.jsx)(c.A, {
    title: u.intl.string(u.t["/X3fkf"]),
    children: (0, r.jsx)(l.A, {
      onChange: e => p(e),
      color: null != (t = null != f ? f : d) ? t : g,
      suggestedColors: m,
      showEyeDropper: true
    })
  })
}