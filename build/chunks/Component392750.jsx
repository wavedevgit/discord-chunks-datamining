/** Chunk was on 84249 **/
/** chunk id: 392750, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk752048 = require("./752048.js"),
  Chunk594174 = require("./594174.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk439267 = require("./439267.js"),
  Chunk663618 = require("./663618.js");
let u = [{
  key: "user",
  cellClassName: Chunk439267.userCell,
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
  renderHeader: () => (0, a.jsx)(i.Text, {
    variant: "text-sm/semibold",
    children: "COMMUNICATION AFFINITY"
  }),
  cellClassName: Chunk439267.affinityCell,
  render(e) {
    let {
      affinity: t
    } = e;
    return t.toFixed(5)
  }
}, {
  key: "vcProbability",
  renderHeader: () => (0, a.jsx)(i.Text, {
    variant: "text-sm/semibold",
    children: "VOICE AFFINITY"
  }),
  cellClassName: Chunk439267.affinityCell,
  render(e) {
    let {
      vcProbability: t
    } = e;
    return t.toFixed(5)
  }
}, {
  key: "isFriend",
  renderHeader: () => (0, a.jsx)(i.Text, {
    variant: "text-sm/semibold",
    children: "IS FRIEND"
  }),
  cellClassName: Chunk439267.affinityCell,
  render(e) {
    let {
      isFriend: t
    } = e;
    return t.toString()
  }
}];

function m() {
  let e = (0, r.Wu)([l.Z, s.default], () => l.Z.getUserAffinities().map(e => {
    let {
      otherUserId: t,
      communicationProbability: n,
      vcProbability: a,
      isFriend: r
    } = e;
    return {
      user: s.default.getUser(t),
      affinity: n,
      vcProbability: a,
      isFriend: r,
      key: t
    }
  }));
  return 0 === e.length ? null : (0, a.jsx)(o.Z, {
    className: d.panel,
    columns: u,
    rowClassName: c.row,
    data: e
  })
}