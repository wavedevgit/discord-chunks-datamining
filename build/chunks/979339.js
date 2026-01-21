/** Chunk was on 82124 **/
/** chunk id: 979339, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk136015 = require("./136015.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js");

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3,
    [n] = (0, r.e7)([l.Z], () => {
      let n = l.Z.getMutableParticipants(e).filter(e => e.type === a.Ui.VOICE),
        r = [];
      for (let e of n) {
        if (r.length >= t) break;
        null == r.find(t => t.id === e.user.id) && r.push(e.user)
      }
      return [{
        participants: n,
        usersInSummary: r
      }, l.Z.getParticipantsVersion(e)]
    }, [e, t], i.Q);
  return n
}