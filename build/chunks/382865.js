/** Chunk was on 82477 **/
/** chunk id: 382865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk835473 = require("./835473.js"),
  Chunk497089 = require("./497089.js");
let a = new Set([Chunk497089.O7.INCOMING_GAME_FRIEND_REQUESTS, Chunk497089.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, Chunk497089.O7.INCOMING_FRIEND_REQUESTS, Chunk497089.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED]);

function o(e) {
  let t = r.useMemo(() => {
    let t = new Set,
      n = [];
    return e.forEach(e => {
      let {
        applicationId: r,
        type: i
      } = e;
      a.has(i) && (null == r || t.has(r) || (t.add(r), n.push(r)))
    }), n
  }, [e]);
  return (0, i.Z)(t)
}