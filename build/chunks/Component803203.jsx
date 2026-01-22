/** Chunk was on web.js **/
/** chunk id: 803203, original params: e,t,n (module,exports,re quire) **/
"use strict";
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

function m(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: m,
    useChatFontScaling: g,
    color: E,
    count: b,
    emojiSize: y
  } = e, O = (0, a.bG)([u.A], () => u.A.getEffectForEmojiId(t, n, m)), A = g ? h : _, v = i.useMemo(() => (0, p.eT)(m, E, t, {
    key: O,
    messageId: n
  }), [E, O, m, t, n]), [S, I] = i.useState(false), T = (0, a.bG)([o.A], () => o.A.useReducedMotion), C = c.Sf.useSetting(), N = i.useCallback(() => {
    s.h.dispatch({
      type: "BURST_REACTION_EFFECT_CLEAR",
      channelId: t,
      messageId: n,
      emoji: m
    })
  }, [m, t, n]);
  return (i.useEffect(() => {
    let e = () => {
      if (S) return;
      let e = (0, d.H4)("".concat(Date.now()).concat(t).concat(n).concat(m.name)) % 10;
      (e += b > 4 ? 4 : b - 1) > 7 && (I(true), (0, l.on)({
        channelId: t,
        messageId: n,
        emoji: m,
        key: u.W.RANDOM
      }))
    };
    if (S || T && !C || !C) return;
    e();
    let r = setInterval(e, 5e3);
    return () => {
      clearInterval(r)
    }
  }, [C, t, b, m, m.name, S, n, T]), null == O) ? null : (0, r.jsx)(f.A, {
    className: A.effect,
    effect: v,
    onComplete: N,
    emojiSize: y
  })
}
let g = Chunk64700.memo(m)