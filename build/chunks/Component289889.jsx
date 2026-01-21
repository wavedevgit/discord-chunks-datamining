/** Chunk was on 37220 **/
/** chunk id: 289889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk26737 = require("./26737.jsx"),
  Chunk449751 = require("./449751.jsx"),
  Chunk749339 = require("./749339.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  let d = (0, a.Z)(n),
    f = (0, c.Z)(e),
    g = (0, s.Z)(e, t),
    p = (0, o.Z)({
      id: e.id,
      label: u.intl.string(u.t.zBoHlf),
      shiftId: "".concat(e.channel_id, "-").concat(e.id)
    }),
    b = i.useMemo(() => [f, g, p, d].filter(Boolean), [d, f, g, p]);
  return 0 === b.length ? null : (0, r.jsx)(l.sNh, {
    id: "copy",
    label: u.intl.string(u.t.OpuAlK),
    icon: l.TIy,
    children: b
  })
}