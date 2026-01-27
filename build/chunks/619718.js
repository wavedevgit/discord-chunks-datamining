/** Chunk was on web.js **/
/** chunk id: 619718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk964486 = require("./964486.js");
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
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, f = r.useRef(t), p = r.useRef(0), _ = r.useRef(true), h = r.useRef(true), m = r.useRef(true), g = r.useRef(0), E = r.useRef(true), y = r.useCallback(() => {
      g.current = 0, null != E.current && (clearTimeout(E.current), E.current = true)
    }, []), b = r.useCallback(() => {
      m.current = false, cancelAnimationFrame(p.current), clearTimeout(E.current)
    }, []), O = r.useCallback(t => {
      if (!m.current) return;
      null == _.current && (_.current = t), null == h.current && (h.current = t);
      let r = t - h.current;
      t - _.current > 1.5 * Math.min(null != n ? n : 120, f.current) && (g.current += 1, null != E.current && clearTimeout(E.current), E.current = setTimeout(y, d), null != i && g.current > i && (a()(null != u, "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit"), u() && (g.current = 0))), _.current = t, r >= f.current - l && (h.current = t, e(r)), p.current = requestAnimationFrame(O)
    }, [n, y, d, i, u, e]), v = r.useCallback(() => {
      m.current = true, h.current = true, p.current = requestAnimationFrame(O)
    }, [O]);
    return r.useEffect(() => {
      f.current = t
    }, [t]), (0, o.Ay)(() => (p.current = requestAnimationFrame(O), () => b())), {
      stop: b,
      reset: v,
      ticking: m
    }
  }