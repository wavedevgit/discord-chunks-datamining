/** Chunk was on 13140 **/
/** chunk id: 97352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk222677 = require("./222677.js"),
  Chunk695346 = require("./695346.js"),
  Chunk960020 = require("./960020.js"),
  Chunk566006 = require("./566006.js");

function d() {
  let e = Chunk695346.Yk.useSetting(),
    t = (0, Chunk399606.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  Chunk647438.useEffect(() => {
    function n(n) {
      let {
        messageId: r,
        channelId: i,
        emoji: l,
        optimistic: a,
        reactionType: s
      } = n;
      a || s !== u.O.BURST || !e || t || (0, o.T6)({
        channelId: i,
        messageId: r,
        emoji: l,
        key: c.I.EXTERNAL
      })
    }
    return Chunk570140.Z.subscribe("MESSAGE_REACTION_ADD", require), () => {
      Chunk570140.Z.unsubscribe("MESSAGE_REACTION_ADD", require)
    }
  }, [module, exports])
}