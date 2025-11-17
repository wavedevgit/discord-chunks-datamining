/** Chunk was on web.js **/
/** chunk id: 658312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk493773 = require("./493773.js");
let s = 1e3 / 24,
  l = 3,
  c = 3e3,
  u = function(e) {
    let {
      minInterval: t = s,
      allowableMinInterval: n,
      droppedFramesCallbackThreshold: i,
      droppedFramesCallback: u,
      droppedFramesResetTime: d = c
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, f = r.useRef(t), _ = r.useRef(0), p = r.useRef(true), h = r.useRef(true), m = r.useRef(true), g = r.useRef(0), E = r.useRef(true), b = r.useCallback(() => {
      g.current = 0, null != E.current && (clearTimeout(E.current), E.current = true)
    }, []), y = r.useCallback(() => {
      m.current = false, cancelAnimationFrame(_.current), clearTimeout(E.current)
    }, []), O = r.useCallback(t => {
      if (!m.current) return;
      null == p.current && (p.current = t), null == h.current && (h.current = t);
      let r = t - h.current;
      t - p.current > 1.5 * Math.min(null != n ? n : 120, f.current) && (g.current += 1, null != E.current && clearTimeout(E.current), E.current = setTimeout(b, d), null != i && g.current > i && (a()(null != u, "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit"), u() && (g.current = 0))), p.current = t, r >= f.current - l && (h.current = t, e(r)), _.current = requestAnimationFrame(O)
    }, [n, b, d, i, u, e]), v = r.useCallback(() => {
      m.current = true, h.current = true, _.current = requestAnimationFrame(O)
    }, [O]);
    return r.useEffect(() => {
      f.current = t
    }, [t]), (0, o.ZP)(() => (_.current = requestAnimationFrame(O), () => y())), {
      stop: y,
      reset: v,
      ticking: m
    }
  }