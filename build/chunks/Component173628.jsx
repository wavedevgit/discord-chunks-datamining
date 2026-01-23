/** Chunk was on 65599 **/
/** chunk id: 173628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk21119 = require("./21119.js"),
  Chunk287809 = require("./287809.js"),
  Chunk303054 = require("./303054.jsx"),
  Chunk987986 = require("./987986.js"),
  Chunk661251 = require("./661251.js");
let u = [{
  key: "user",
  cellClassName: Chunk987986.iL,
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
  renderHeader: () => (0, a.jsx)(r.Text, {
    variant: "text-sm/semibold",
    children: "COMMUNICATION AFFINITY"
  }),
  cellClassName: Chunk987986.nz,
  render(e) {
    let {
      affinity: t
    } = e;
    return t.toFixed(5)
  }
}, {
  key: "vcProbability",
  renderHeader: () => (0, a.jsx)(r.Text, {
    variant: "text-sm/semibold",
    children: "VOICE AFFINITY"
  }),
  cellClassName: Chunk987986.nz,
  render(e) {
    let {
      vcProbability: t
    } = e;
    return t.toFixed(5)
  }
}, {
  key: "isFriend",
  renderHeader: () => (0, a.jsx)(r.Text, {
    variant: "text-sm/semibold",
    children: "IS FRIEND"
  }),
  cellClassName: Chunk987986.nz,
  render(e) {
    let {
      isFriend: t
    } = e;
    return t.toString()
  }
}];

function m() {
  let e = (0, l.yK)([i.A, s.default], () => i.A.getUserAffinities().map(e => {
    let {
      otherUserId: t,
      communicationProbability: n,
      vcProbability: a,
      isFriend: l
    } = e;
    return {
      user: s.default.getUser(t),
      affinity: n,
      vcProbability: a,
      isFriend: l,
      key: t
    }
  }));
  return 0 === e.length ? null : (0, a.jsx)(o.A, {
    className: d.nd,
    columns: u,
    rowClassName: c.nM,
    data: e
  })
}