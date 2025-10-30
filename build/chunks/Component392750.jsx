/** Chunk was on 87665 **/
/** chunk id: 392750, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk752048 = require("./752048.js"),
  Chunk594174 = require("./594174.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk960932 = require("./960932.js"),
  Chunk866403 = require("./866403.js");
let u = [{
  key: "user",
  cellClassName: Chunk960932.userCell,
  render(e) {
    var t;
    let {
      user: n,
      key: a
    } = e;
    return null != (t = null == n ? true : n.username) ? t : a
  }
}, {
  key: "affinity",
  renderHeader: () => (0, Chunk951288.jsx)(Chunk481060.Text, {
    variant: "text-sm/semibold",
    children: "COMMUNICATION AFFINITY"
  }),
  cellClassName: Chunk960932.affinityCell,
  render(e) {
    let {
      affinity: t
    } = e;
    return t.toFixed(5)
  }
}, {
  key: "vcProbability",
  renderHeader: () => (0, Chunk951288.jsx)(Chunk481060.Text, {
    variant: "text-sm/semibold",
    children: "VOICE AFFINITY"
  }),
  cellClassName: Chunk960932.affinityCell,
  render(e) {
    let {
      vcProbability: t
    } = e;
    return t.toFixed(5)
  }
}];

function m() {
  let e = (0, Chunk442837.Wu)([Chunk752048.Z, Chunk594174.default], () => Chunk752048.Z.getUserAffinities().map(e => {
    let {
      otherUserId: t,
      communicationProbability: n,
      vcProbability: a
    } = e;
    return {
      user: o.default.getUser(t),
      affinity: n,
      vcProbability: a,
      key: t
    }
  }));
  return 0 === module.length ? null : (0, Chunk951288.jsx)(Chunk681619.Z, {
    className: Chunk866403.panel,
    columns: u,
    rowClassName: Chunk960932.row,
    data: module
  })
}