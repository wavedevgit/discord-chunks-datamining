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
  } = e, [d, p] = r.useState(null), f = (0, r.useRef)(null), m = (0, r.useRef)(Date.now()), v = (0, r.useRef)(false), b = (0, r.useCallback)(e => {
    e.segmentEndSec < e.segmentStartSec || a({
      start_time: e.startTime,
      end_time: e.endTime,
      duration: e.endTime - e.startTime,
      segment_start_sec: e.segmentStartSec,
      segment_end_sec: e.segmentEndSec,
      segment_duration_sec: e.segmentEndSec - e.segmentStartSec
    })
  }, [a]), E = (0, r.useCallback)(() => {
    let e = t();
    if (null != e && i && s) {
      let t = Date.now();
      p({
        startTime: t,
        endTime: t,
        segmentStartSec: e,
        segmentEndSec: e
      }), v.current = true
    }
  }, [t, i, s]), g = (0, r.useCallback)(() => {
    let e = t();
    if (null == e || null == d) return;
    let n = Date.now();
    n - m.current < c || e - d.segmentStartSec < u / 1e3 || (b(o(l({}, d), {
      endTime: n,
      segmentEndSec: e
    })), p({
      startTime: n,
      endTime: n,
      segmentStartSec: e,
      segmentEndSec: e
    }), m.current = n)
  }, [d, b, c, u, t]);
  return (0, r.useEffect)(() => {
    i && s || (p(null), v.current = false)
  }, [i, s]), (0, r.useEffect)(() => {
    if (n && i && s) v.current || E(), f.current = window.setInterval(() => {
      g()
    }, 200);
    else {
      let e = t();
      if (null != d && null != e) {
        let t = Date.now();
        e - d.segmentStartSec > .2 && b(o(l({}, d), {
          endTime: t,
          segmentEndSec: e
        }))
      }
      p(null), v.current = false, null != f.current && (clearInterval(f.current), f.current = null)
    }
    return () => {
      null != f.current && (clearInterval(f.current), f.current = null)
    }
  }, [n, i, s, d, g, b, E, t]), {
    forceSendCurrentSegment: (0, r.useCallback)(() => {
      let e = t();
      if (null != d && null != e) {
        let t = Date.now();
        e - d.segmentStartSec > .2 && b(o(l({}, d), {
          endTime: t,
          segmentEndSec: e
        })), p(null), v.current = false
      }
    }, [d, b, t]),
    isInitialized: v.current
  }
}