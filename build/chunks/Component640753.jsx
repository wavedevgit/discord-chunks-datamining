/** Chunk was on 38626 **/
/** chunk id: 640753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk222677 = require("./222677.js"),
  Chunk695346 = require("./695346.js"),
  Chunk960020 = require("./960020.js"),
  Chunk347904 = require("./347904.js"),
  Chunk620652 = require("./620652.jsx"),
  Chunk815605 = require("./815605.js"),
  Chunk537509 = require("./537509.js"),
  Chunk491726 = require("./491726.js");
let g = Chunk647438.memo(function(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: g,
    useChatFontScaling: b,
    color: j,
    count: v,
    emojiSize: O
  } = e, y = (0, r.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, g)), T = l.useMemo(() => (0, p.Zn)(g, j, t, {
    key: y,
    messageId: n
  }), [j, y, g, t, n]), [x, S] = l.useState(false), E = (0, r.e7)([a.Z], () => a.Z.useReducedMotion), R = c.Yk.useSetting(), I = l.useCallback(() => {
    o.Z.dispatch({
      type: "BURST_REACTION_EFFECT_CLEAR",
      channelId: t,
      messageId: n,
      emoji: g
    })
  }, [g, t, n]);
  return (l.useEffect(() => {
    let e = () => {
      if (x) return;
      let e = (0, d.vJ)("".concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
      (e += v > 4 ? 4 : v - 1) > 7 && (S(true), (0, s.T6)({
        channelId: t,
        messageId: n,
        emoji: g,
        key: u.I.RANDOM
      }))
    };
    if (x || E && !R || !R) return;
    e();
    let i = setInterval(e, 5e3);
    return () => {
      clearInterval(i)
    }
  }, [R, t, v, g, g.name, x, n, E]), null == y) ? null : (0, i.jsx)(h.Z, {
    className: (b ? f : m).effect,
    effect: T,
    onComplete: I,
    emojiSize: O
  })
})