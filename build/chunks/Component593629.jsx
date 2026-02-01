/** Chunk was on 9207 **/
/** chunk id: 593629, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
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

function u(e) {
  var t;
  let {
    user: n,
    savedUserColor: u,
    pendingColor: _,
    setPendingAccentColor: p
  } = e, m = n.getAvatarURL(null, 80), g = (0, s.rdh)(l.A.unsafe_rawColors.PRIMARY_530).hex(), A = (0, a.rh)(m, g, false), f = (0, i.LX)(A[0]);
  return (0, r.jsx)(c.A, {
    title: d.intl.string(d.t["/X3fkf"]),
    children: (0, r.jsx)(o.A, {
      onChange: e => p(e),
      color: null != (t = null != _ ? _ : u) ? t : f,
      suggestedColors: A,
      showEyeDropper: true
    })
  })
}