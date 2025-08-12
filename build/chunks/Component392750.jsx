/** Chunk was on 93886 **/
/** chunk id: 392750, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk752048 = require("./752048.js"),
  Chunk594174 = require("./594174.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk206331 = require("./206331.js"),
  Chunk881291 = require("./881291.js");
let u = [{
  key: "user",
  cellClassName: Chunk206331.userCell,
  render(e) {
    var t;
    let {
      user: a,
      key: n
    } = e;
    return null != (t = null == a ? true : a.username) ? t : n
  }
}, {
  key: "affinity",
  renderHeader: () => (0, Chunk255367.jsx)(Chunk481060.Text, {
    variant: "text-sm/semibold",
    children: "COMMUNICATION AFFINITY"
  }),
  cellClassName: Chunk206331.affinityCell,
  render(e) {
    let {
      affinity: t
    } = e;
    return t.toFixed(5)
  }
}, {
  key: "vcProbability",
  renderHeader: () => (0, Chunk255367.jsx)(Chunk481060.Text, {
    variant: "text-sm/semibold",
    children: "VOICE AFFINITY"
  }),
  cellClassName: Chunk206331.affinityCell,
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
      communicationProbability: a,
      vcProbability: n
    } = e;
    return {
      user: s.default.getUser(t),
      affinity: a,
      vcProbability: n,
      key: t
    }
  }));
  return 0 === module.length ? null : (0, Chunk255367.jsx)(Chunk681619.Z, {
    className: Chunk881291.panel,
    columns: u,
    rowClassName: Chunk206331.row,
    data: module
  })
}