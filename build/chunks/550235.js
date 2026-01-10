/** Chunk was on 75909 **/
/** chunk id: 550235, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

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

function l(e, t) {
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

function i(e) {
  let {
    getCurrentVideoTime: t,
    isPlaying: n,
    isMetadataLoaded: i,
    isInitialSeekComplete: a,
    onAnalytics: s,
    emitIntervalMs: c,
    minSegmentDurationMs: u
  } = e, [d, m] = r.useState(null), f = (0, r.useRef)(null), p = (0, r.useRef)(Date.now()), v = (0, r.useRef)(false), E = (0, r.useCallback)(e => {
    e.segmentEndSec < e.segmentStartSec || s({
      start_time: e.startTime,
      end_time: e.endTime,
      duration: e.endTime - e.startTime,
      segment_start_sec: e.segmentStartSec,
      segment_end_sec: e.segmentEndSec,
      segment_duration_sec: e.segmentEndSec - e.segmentStartSec
    })
  }, [s]), g = (0, r.useCallback)(() => {
    let e = t();
    if (null != e && i && a) {
      let t = Date.now();
      m({
        startTime: t,
        endTime: t,
        segmentStartSec: e,
        segmentEndSec: e
      }), v.current = true
    }
  }, [t, i, a]), h = (0, r.useCallback)(() => {
    let e = t();
    if (null == e || null == d) return;
    let n = Date.now();
    !(n - p.current < c) && (e - d.segmentStartSec < u / 1e3 || (E(l(o({}, d), {
      endTime: n,
      segmentEndSec: e
    })), m({
      startTime: n,
      endTime: n,
      segmentStartSec: e,
      segmentEndSec: e
    }), p.current = n))
  }, [d, E, c, u, t]);
  return (0, r.useEffect)(() => {
    i && a || (m(null), v.current = false)
  }, [i, a]), (0, r.useEffect)(() => {
    if (n && i && a) v.current || g(), f.current = window.setInterval(() => {
      h()
    }, 200);
    else {
      let e = t();
      if (null != d && null != e) {
        let t = Date.now();
        e - d.segmentStartSec > .2 && E(l(o({}, d), {
          endTime: t,
          segmentEndSec: e
        }))
      }
      m(null), v.current = false, null != f.current && (clearInterval(f.current), f.current = null)
    }
    return () => {
      null != f.current && (clearInterval(f.current), f.current = null)
    }
  }, [n, i, a, d, h, E, g, t]), {
    forceSendCurrentSegment: (0, r.useCallback)(() => {
      let e = t();
      if (null != d && null != e) {
        let t = Date.now();
        e - d.segmentStartSec > .2 && E(l(o({}, d), {
          endTime: t,
          segmentEndSec: e
        })), m(null), v.current = false
      }
    }, [d, E, t]),
    isInitialized: v.current
  }
}