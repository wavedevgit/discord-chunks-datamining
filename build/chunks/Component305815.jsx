/** Chunk was on 41023 **/
/** chunk id: 305815, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk509212 = require("./509212.js"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx");

function o(e) {
  let {
    quest: n,
    onClose: a,
    transitionState: o
  } = e, d = i.useMemo(() => (0, r.xn)(n.config), [n]);
  return null == d ? null : (0, t.jsx)(s.Z, {
    onClose: a,
    transitionState: o,
    quest: n,
    rewardContent: (0, t.jsx)(l.Z, {
      rewardName: d.messages.name
    })
  })
}