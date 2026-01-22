/** Chunk was on 97492 **/
/** chunk id: 829444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk73153 = require("./73153.js"),
  Chunk775602 = require("./775602.js"),
  Chunk649963 = require("./649963.js"),
  Chunk253932 = require("./253932.js"),
  Chunk900210 = require("./900210.js"),
  Chunk505527 = require("./505527.js");

function d() {
  let e = o.Sf.useSetting(),
    t = (0, l.bG)([a.A], () => a.A.useReducedMotion);
  r.useEffect(() => {
    function n(n) {
      let {
        messageId: r,
        channelId: l,
        emoji: i,
        optimistic: a,
        reactionType: o
      } = n;
      a || o !== u.v.BURST || !e || t || (0, s.on)({
        channelId: l,
        messageId: r,
        emoji: i,
        key: c.W.EXTERNAL
      })
    }
    return i.h.subscribe("MESSAGE_REACTION_ADD", n), () => {
      i.h.unsubscribe("MESSAGE_REACTION_ADD", n)
    }
  }, [e, t])
}