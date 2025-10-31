/** Chunk was on 91053 **/
/** chunk id: 614173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk700785 = require("./700785.js"),
  Chunk471253 = require("./471253.js"),
  Chunk647767 = require("./647767.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let t = (0, i.e7)([l.Z], () => l.Z.getChannel(e), [e]),
    n = (0, o.s)(),
    d = a.Uu(c.Plq.REQUEST_TO_SPEAK, t) && !n,
    [u, p] = r.useState(d);
  return d !== u && p(d), [u, e => {
    null != t && (p(e), (0, s.Pq)(t, c.Plq.REQUEST_TO_SPEAK, e))
  }]
}