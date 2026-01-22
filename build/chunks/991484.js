/** Chunk was on 23628 **/
/** chunk id: 991484, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function l(e) {
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

function o(e, t) {
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
    isInitialSeekComplete: s,
    onAnalytics: a,
    emitIntervalMs: c,
    minSegmentDurationMs: u
  } = e, [d, f] = r.useState(null), m = (0, r.useRef)(null), p = (0, r.useRef)(Date.now()), v = (0, r.useRef)(false), E = (0, r.useCallback)(e => {
    e.segmentEndSec < e.segmentStartSec || a({
      start_time: e.startTime,
      end_time: e.endTime,
      duration: e.endTime - e.startTime,
      segment_start_sec: e.segmentStartSec,
      segment_end_sec: e.segmentEndSec,
      segment_duration_sec: e.segmentEndSec - e.segmentStartSec
    })
  }, [a]), g = (0, r.useCallback)(() => {
    let e = t();
    if (null != e && i && s) {
      let t = Date.now();
      f({
        startTime: t,
        endTime: t,
        segmentStartSec: e,
        segmentEndSec: e
      }), v.current = true
    }
  }, [t, i, s]), h = (0, r.useCallback)(() => {
    let e = t();
    if (null == e || null == d) return;
    let n = Date.now();
    n - p.current < c || e - d.segmentStartSec < u / 1e3 || (E(o(l({}, d), {
      endTime: n,
      segmentEndSec: e
    })), f({
      startTime: n,
      endTime: n,
      segmentStartSec: e,
      segmentEndSec: e
    }), p.current = n)
  }, [d, E, c, u, t]);
  return (0, r.useEffect)(() => {
    i && s || (f(null), v.current = false)
  }, [i, s]), (0, r.useEffect)(() => {
    if (n && i && s) v.current || g(), m.current = window.setInterval(() => {
      h()
    }, 200);
    else {
      let e = t();
      if (null != d && null != e) {
        let t = Date.now();
        e - d.segmentStartSec > .2 && E(o(l({}, d), {
          endTime: t,
          segmentEndSec: e
        }))
      }
      f(null), v.current = false, null != m.current && (clearInterval(m.current), m.current = null)
    }
    return () => {
      null != m.current && (clearInterval(m.current), m.current = null)
    }
  }, [n, i, s, d, h, E, g, t]), {
    forceSendCurrentSegment: (0, r.useCallback)(() => {
      let e = t();
      if (null != d && null != e) {
        let t = Date.now();
        e - d.segmentStartSec > .2 && E(o(l({}, d), {
          endTime: t,
          segmentEndSec: e
        })), f(null), v.current = false
      }
    }, [d, E, t]),
    isInitialized: v.current
  }
}