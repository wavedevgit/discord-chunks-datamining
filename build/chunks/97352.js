/** Chunk was on 40184 **/
/** chunk id: 97352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk222677 = require("./222677.js"),
  Chunk695346 = require("./695346.js"),
  Chunk960020 = require("./960020.js"),
  Chunk566006 = require("./566006.js");

function d() {
  let e = s.Yk.useSetting(),
    t = (0, r.e7)([a.Z], () => a.Z.useReducedMotion);
  i.useEffect(() => {
    function n(n) {
      let {
        messageId: i,
        channelId: r,
        emoji: l,
        optimistic: a,
        reactionType: s
      } = n;
      a || s !== u.O.BURST || !e || t || (0, o.T6)({
        channelId: r,
        messageId: i,
        emoji: l,
        key: c.I.EXTERNAL
      })
    }
    return l.Z.subscribe("MESSAGE_REACTION_ADD", n), () => {
      l.Z.unsubscribe("MESSAGE_REACTION_ADD", n)
    }
  }, [e, t])
}