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
    count: O,
    emojiSize: y
  } = e, v = (0, l.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, g)), T = r.useMemo(() => (0, p.Zn)(g, j, t, {
    key: v,
    messageId: n
  }), [j, v, g, t, n]), [S, x] = r.useState(false), E = (0, l.e7)([a.Z], () => a.Z.useReducedMotion), R = c.Yk.useSetting(), I = r.useCallback(() => {
    o.Z.dispatch({
      type: "BURST_REACTION_EFFECT_CLEAR",
      channelId: t,
      messageId: n,
      emoji: g
    })
  }, [g, t, n]);
  return (r.useEffect(() => {
    let e = () => {
      if (S) return;
      let e = (0, d.vJ)("".concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
      (e += O > 4 ? 4 : O - 1) > 7 && (x(true), (0, s.T6)({
        channelId: t,
        messageId: n,
        emoji: g,
        key: u.I.RANDOM
      }))
    };
    if (S || E && !R || !R) return;
    e();
    let i = setInterval(e, 5e3);
    return () => {
      clearInterval(i)
    }
  }, [R, t, O, g, g.name, S, n, E]), null == v) ? null : (0, i.jsx)(h.Z, {
    className: (b ? f : m).effect,
    effect: T,
    onComplete: I,
    emojiSize: y
  })
})