/** Chunk was on 13474 **/
/** chunk id: 516604, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk570140 = require("./570140.js"),
  Chunk4646 = require("./4646.js"),
  Chunk258340 = require("./258340.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk823961 = require("./823961.js");
let o = e => {
  let {
    update: t,
    draw: r,
    emit: o,
    tickRate: d,
    improvePerformance: f,
    shouldTick: m
  } = (0, l.Z)(e), h = n.useMemo(() => new i.ZP, []), p = n.useCallback(e => {
    e.assetMap = h, r(e)
  }, [h, r]), [y, w] = n.useState(false), v = n.useRef(null), x = n.useRef(null), E = n.useRef(s.Z.lastConfetti);
  return n.useEffect(() => {
    async function e(e) {
      var t;
      let {
        emoji: r,
        boundingRect: n
      } = e, i = null != (t = r.id) ? t : r.name, l = null == r.id ? c.ZP.getURL(r.name) : u.ZP.getEmojiURL({
        id: r.id,
        animated: false,
        size: 64,
        forcePNG: true
      });
      await h.loadRemoteImage(i, l), o(i, n), w(true), null != x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        var e;
        let t = null == (e = s.Z.lastConfetti) ? true : e.triggerTime;
        (null == t || Date.now() - t > 2500) && a.Z.dispatch({
          type: "POTIONS_SET_CONFETTI_MODE",
          enabled: false
        })
      }, 2500)
    }
    let t = E.current;
    return null != t && (E.current = true, e(t)), a.Z.subscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e), () => a.Z.unsubscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e)
  }, [h, o]), n.useEffect(() => () => {
    null != x.current && (a.Z.dispatch({
      type: "POTIONS_SET_CONFETTI_MODE",
      enabled: false
    }), clearTimeout(x.current))
  }, []), n.useEffect(() => {
    let e = () => {
      m.current ? v.current = setTimeout(e, 1e3) : (w(false), v.current = null)
    };
    return v.current = setTimeout(e, 1e3), () => {
      null != v.current && (a.Z.dispatch({
        type: "POTIONS_SET_CONFETTI_MODE",
        enabled: false
      }), clearTimeout(v.current))
    }
  }, [y, m]), {
    update: t,
    draw: p,
    tickRate: d,
    improvePerformance: f,
    playing: y
  }
}