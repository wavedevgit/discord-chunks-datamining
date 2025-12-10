/** Chunk was on web.js **/
/** chunk id: 640753, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function h(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: h,
    useChatFontScaling: g,
    color: E,
    count: b,
    emojiSize: y
  } = e, O = (0, a.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, h)), v = g ? m : _, S = i.useMemo(() => (0, p.Zn)(h, E, t, {
    key: O,
    messageId: n
  }), [E, O, h, t, n]), [I, T] = i.useState(false), C = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), A = c.Yk.useSetting(), N = i.useCallback(() => {
    o.Z.dispatch({
      type: "BURST_REACTION_EFFECT_CLEAR",
      channelId: t,
      messageId: n,
      emoji: h
    })
  }, [h, t, n]);
  return (i.useEffect(() => {
    let e = () => {
      if (I) return;
      let e = (0, d.vJ)("".concat(Date.now()).concat(t).concat(n).concat(h.name)) % 10;
      (e += b > 4 ? 4 : b - 1) > 7 && (T(true), (0, l.T6)({
        channelId: t,
        messageId: n,
        emoji: h,
        key: u.I.RANDOM
      }))
    };
    if (I || C && !A || !A) return;
    e();
    let r = setInterval(e, 5e3);
    return () => {
      clearInterval(r)
    }
  }, [A, t, b, h, h.name, I, n, C]), null == O) ? null : (0, r.jsx)(f.Z, {
    className: v.effect,
    effect: S,
    onComplete: N,
    emojiSize: y
  })
}
let g = Chunk473749.memo(h)