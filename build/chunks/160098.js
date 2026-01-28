/** Chunk was on 78528 **/
/** chunk id: 160098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk429913 = require("./429913.js"),
  Chunk322387 = require("./322387.js");
let s = new Set([Chunk322387.Uo.INCOMING_GAME_FRIEND_REQUESTS, Chunk322387.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, Chunk322387.Uo.INCOMING_FRIEND_REQUESTS, Chunk322387.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED]);

function a(e) {
  let t = r.useMemo(() => {
    let t = new Set,
      n = [];
    return e.forEach(e => {
      let {
        applicationId: r,
        type: l
      } = e;
      !s.has(l) || null == r || t.has(r) || (t.add(r), n.push(r))
    }), n
  }, [e]);
  return (0, l.A)(t)
}