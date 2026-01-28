/** Chunk was on 78528 **/
/** chunk id: 19844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk311907 = require("./311907.js"),
  Chunk996439 = require("./996439.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3,
    [n] = (0, r.bG)([i.A], () => {
      let n = i.A.getMutableParticipants(e).filter(e => e.type === s.wY.VOICE),
        r = [];
      for (let e of n) {
        if (r.length >= t) break;
        null == r.find(t => t.id === e.user.id) && r.push(e.user)
      }
      return [{
        participants: n,
        usersInSummary: r
      }, i.A.getParticipantsVersion(e)]
    }, [e, t], l.D);
  return n
}