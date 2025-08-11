/** Chunk was on 3078 **/
/** chunk id: 744373, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk399606 = require("./399606.js"),
  Chunk478923 = require("./478923.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    transitionState: n,
    onClose: t,
    userId: s,
    onCancel: d,
    confirmBlock: f
  } = e, l = (0, o.e7)([r.default], () => r.default.getUser(s));
  if (null != l) return <i.default transitionState={n} user={l} onBlock={() => {
      f(), c.default.track(u.rMx.BLOCK_USER_CONFIRMED)
    }} onClose={t} onCancel={d} />
}