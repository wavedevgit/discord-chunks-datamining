/** Chunk was on web.js **/
/** chunk id: 640753, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  Chunk186163 = require("./186163.js"),
  Chunk375096 = require("./375096.js");

function m(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: m,
    useChatFontScaling: g,
    color: E,
    count: b,
    emojiSize: y
  } = e, O = (0, a.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, m)), v = g ? h : p, I = i.useMemo(() => (0, _.Zn)(m, E, t, {
    key: O,
    messageId: n
  }), [E, O, m, t, n]), [T, S] = i.useState(false), A = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), C = c.Yk.useSetting(), N = i.useCallback(() => {
    o.Z.dispatch({
      type: "BURST_REACTION_EFFECT_CLEAR",
      channelId: t,
      messageId: n,
      emoji: m
    })
  }, [m, t, n]);
  return (i.useEffect(() => {
    let e = () => {
      if (T) return;
      let e = (0, d.vJ)("".concat(Date.now()).concat(t).concat(n).concat(m.name)) % 10;
      (e += b > 4 ? 4 : b - 1) > 7 && (S(true), (0, l.T6)({
        channelId: t,
        messageId: n,
        emoji: m,
        key: u.I.RANDOM
      }))
    };
    if (T || A && !C || !C) return;
    e();
    let r = setInterval(e, 5e3);
    return () => {
      clearInterval(r)
    }
  }, [C, t, b, m, m.name, T, n, A]), null == O) ? null : (0, r.jsx)(f.Z, {
    className: v.effect,
    effect: I,
    onComplete: N,
    emojiSize: y
  })
}
let g = Chunk647438.memo(m)