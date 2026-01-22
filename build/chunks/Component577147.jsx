/** Chunk was on 1636 **/
/** chunk id: 577147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk373963 = require("./373963.jsx"),
  Chunk345254 = require("./345254.jsx"),
  Chunk734495 = require("./734495.jsx"),
  Chunk985018 = require("./985018.jsx");

function u(e, t, n) {
  let u = (0, a.A)(n),
    f = (0, s.A)(e),
    g = (0, c.A)(e, t),
    p = (0, o.A)({
      id: e.id,
      label: d.intl.string(d.t.zBoHlf),
      shiftId: "".concat(e.channel_id, "-").concat(e.id)
    }),
    b = l.useMemo(() => [f, g, p, u].filter(Boolean), [u, f, g, p]);
  return 0 === b.length ? null : (0, r.jsx)(i.Drp, {
    id: "copy",
    label: d.intl.string(d.t.OpuAlK),
    icon: i.TdU,
    children: b
  })
}