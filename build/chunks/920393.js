/** Chunk was on 32249 **/
n.d(t, {
  Z: () => i
}), n(47120);
var r = n(192379);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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
    videoRef: t,
    isPlaying: n,
    isMetadataLoaded: i,
    isInitialSeekComplete: s,
    onAnalytics: a,
    emitIntervalMs: c,
    minSegmentDurationMs: u
  } = e, [d, m] = r.useState(null), p = (0, r.useRef)(null), v = (0, r.useRef)(Date.now()), f = (0, r.useRef)(!1), E = (0, r.useCallback)(e => {
    !(e.segmentEndSec < e.segmentStartSec) && a({
      start_time: e.startTime,
      end_time: e.endTime,
      duration: e.endTime - e.startTime,
      segment_start_sec: e.segmentStartSec,
      segment_end_sec: e.segmentEndSec,
      segment_duration_sec: e.segmentEndSec - e.segmentStartSec
    })
  }, [a]), g = (0, r.useCallback)(() => {
    if (null != t.current && i && s) {
      let e = Date.now(),
        n = t.current.currentTime;
      m({
        startTime: e,
        endTime: e,
        segmentStartSec: n,
        segmentEndSec: n
      }), f.current = !0
    }
  }, [t, i, s]), b = (0, r.useCallback)(() => {
    if (null == t.current || null == d) return;
    let e = Date.now();
    if (e - v.current < c) return;
    let n = t.current.currentTime;
    !(n - d.segmentStartSec < u / 1e3) && (E(l(o({}, d), {
      endTime: e,
      segmentEndSec: n
    })), m({
      startTime: e,
      endTime: e,
      segmentStartSec: n,
      segmentEndSec: n
    }), v.current = e)
  }, [d, E, c, t, u]);
  return (0, r.useEffect)(() => {
    i && s || (m(null), f.current = !1)
  }, [i, s]), (0, r.useEffect)(() => {
    if (n && i && s) f.current || g(), p.current = window.setInterval(() => {
      b()
    }, 200);
    else {
      if (null != d && null != t.current) {
        let e = Date.now(),
          n = t.current.currentTime;
        n - d.segmentStartSec > .2 && E(l(o({}, d), {
          endTime: e,
          segmentEndSec: n
        }))
      }
      m(null), f.current = !1, null != p.current && (clearInterval(p.current), p.current = null)
    }
    return () => {
      null != p.current && (clearInterval(p.current), p.current = null)
    }
  }, [n, i, s, d, b, E, t, g]), {
    forceSendCurrentSegment: (0, r.useCallback)(() => {
      if (null != d && null != t.current) {
        let e = Date.now(),
          n = t.current.currentTime;
        n - d.segmentStartSec > .2 && E(l(o({}, d), {
          endTime: e,
          segmentEndSec: n
        })), m(null), f.current = !1
      }
    }, [d, E, t]),
    isInitialized: f.current
  }
}