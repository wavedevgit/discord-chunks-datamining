/** Chunk was on 78528 **/
/** chunk id: 250719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk607567 = require("./607567.js"),
  Chunk181079 = require("./181079.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  return (0, r.cf)([i.Ay, l.A, s.A], () => {
    if (e !== a.YYv) return i.Ay.getVoiceStates(e);
    let t = s.A.getFavoriteChannels(),
      n = {};
    for (let e in t) {
      let t = l.A.getChannel(e);
      null != t && (n[e] = i.Ay.getVoiceStatesForChannel(t))
    }
    return n
  }, [e])
}