/** Chunk was on 7034 **/
/** chunk id: 803203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk775602 = require("./775602.js"),
  Chunk649963 = require("./649963.js"),
  Chunk253932 = require("./253932.js"),
  Chunk900210 = require("./900210.js"),
  Chunk297494 = require("./297494.js"),
  Chunk211180 = require("./211180.jsx"),
  Chunk60317 = require("./60317.js"),
  Chunk859751 = require("./859751.js"),
  Chunk113520 = require("./113520.js");
let g = Chunk64700.memo(function(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: g,
    useChatFontScaling: b,
    color: y,
    count: O,
    emojiSize: v
  } = e, j = (0, r.bG)([c.A], () => c.A.getEffectForEmojiId(t, n, g)), A = l.useMemo(() => (0, h.eT)(g, y, t, {
    key: j,
    messageId: n
  }), [y, j, g, t, n]), [T, E] = l.useState(false), I = (0, r.bG)([a.A], () => a.A.useReducedMotion), S = u.Sf.useSetting(), x = l.useCallback(() => {
    o.h.dispatch({
      type: "BURST_REACTION_EFFECT_CLEAR",
      channelId: t,
      messageId: n,
      emoji: g
    })
  }, [g, t, n]);
  return (l.useEffect(() => {
    let e = () => {
      if (T) return;
      let e = (0, d.H4)("".concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
      (e += O > 4 ? 4 : O - 1) > 7 && (E(true), (0, s.on)({
        channelId: t,
        messageId: n,
        emoji: g,
        key: c.W.RANDOM
      }))
    };
    if (T || I && !S || !S) return;
    e();
    let i = setInterval(e, 5e3);
    return () => {
      clearInterval(i)
    }
  }, [S, t, O, g, g.name, T, n, I]), null == j) ? null : (0, i.jsx)(p.A, {
    className: (b ? f : m).effect,
    effect: A,
    onComplete: x,
    emojiSize: v
  })
})