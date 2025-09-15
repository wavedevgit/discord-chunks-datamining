/** Chunk was on 32249 **/
/** chunk id: 117242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function a(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function l(e) {
  let {
    getCurrentVideoTime: t,
    isPlaying: n,
    isMetadataLoaded: l,
    isInitialSeekComplete: i,
    onAnalytics: s,
    emitIntervalMs: c,
    minSegmentDurationMs: u
  } = e, [d, f] = r.useState(null), p = (0, r.useRef)(null), m = (0, r.useRef)(Date.now()), v = (0, r.useRef)(false), g = (0, r.useCallback)(e => {
    e.segmentEndSec < e.segmentStartSec || s({
      start_time: e.startTime,
      end_time: e.endTime,
      duration: e.endTime - e.startTime,
      segment_start_sec: e.segmentStartSec,
      segment_end_sec: e.segmentEndSec,
      segment_duration_sec: e.segmentEndSec - e.segmentStartSec
    })
  }, [s]), _ = (0, r.useCallback)(() => {
    let e = t();
    if (null != e && l && i) {
      let t = Date.now();
      f({
        startTime: t,
        endTime: t,
        segmentStartSec: e,
        segmentEndSec: e
      }), v.current = true
    }
  }, [t, l, i]), C = (0, r.useCallback)(() => {
    let e = t();
    if (null == e || null == d) return;
    let n = Date.now();
    !(n - m.current < c) && (e - d.segmentStartSec < u / 1e3 || (g(a(o({}, d), {
      endTime: n,
      segmentEndSec: e
    })), f({
      startTime: n,
      endTime: n,
      segmentStartSec: e,
      segmentEndSec: e
    }), m.current = n))
  }, [d, g, c, u, t]);
  return (0, r.useEffect)(() => {
    l && i || (f(null), v.current = false)
  }, [l, i]), (0, r.useEffect)(() => {
    if (n && l && i) v.current || _(), p.current = window.setInterval(() => {
      C()
    }, 200);
    else {
      let e = t();
      if (null != d && null != e) {
        let t = Date.now();
        e - d.segmentStartSec > .2 && g(a(o({}, d), {
          endTime: t,
          segmentEndSec: e
        }))
      }
      f(null), v.current = false, null != p.current && (clearInterval(p.current), p.current = null)
    }
    return () => {
      null != p.current && (clearInterval(p.current), p.current = null)
    }
  }, [n, l, i, d, C, g, _, t]), {
    forceSendCurrentSegment: (0, r.useCallback)(() => {
      let e = t();
      if (null != d && null != e) {
        let t = Date.now();
        e - d.segmentStartSec > .2 && g(a(o({}, d), {
          endTime: t,
          segmentEndSec: e
        })), f(null), v.current = false
      }
    }, [d, g, t]),
    isInitialized: v.current
  }
}