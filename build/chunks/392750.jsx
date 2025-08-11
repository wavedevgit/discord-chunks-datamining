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
  Chunk681619 = require("./681619.js"),
  Chunk534514 = require("./534514.js"),
  Chunk616257 = require("./616257.js");
let u = [{
  key: "user",
  cellClassName: Chunk534514.userCell,
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
  renderHeader: () => <Chunk481060.Text variant={"text-sm/semibold"}>{"COMMUNICATION AFFINITY"}</Chunk481060.Text>,
  cellClassName: Chunk534514.affinityCell,
  render(e) {
    let {
      affinity: t
    } = e;
    return t.toFixed(5)
  }
}, {
  key: "vcProbability",
  renderHeader: () => <Chunk481060.Text variant={"text-sm/semibold"}>{"VOICE AFFINITY"}</Chunk481060.Text>,
  cellClassName: Chunk534514.affinityCell,
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
  return 0 === module.length ? null : <Chunk681619.Z className={Chunk616257.panel} columns={u} rowClassName={Chunk534514.row} data={module} />
}