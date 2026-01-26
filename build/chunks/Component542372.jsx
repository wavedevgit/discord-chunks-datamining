/** Chunk was on 97887 **/
/** chunk id: 542372, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk367513 = require("./367513.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk384059 = require("./384059.js"),
  Chunk574172 = require("./574172.js"),
  Chunk423562 = require("./423562.jsx"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk475815 = require("./475815.js"),
  Chunk652215 = require("./652215.js");

function _(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: _,
    popoutWindow: O,
    currentWindow: j
  } = e, {
    parentAnalyticsLocation: v
  } = (0, c.Ay)(), x = n === y.BRT.POPOUT, E = l.useRef(null), {
    currentLayout: C,
    mode: S
  } = (0, i.cf)([u.A], () => {
    let e = u.A.getMode(t.id),
      r = n === y.BRT.POPOUT;
    r && (e = y._Of.VIDEO);
    let l = e === y._Of.VIDEO ? u.A.getLayout(t.id, n) : y.DUB.MINIMUM;
    return r && l !== y.DUB.FULL_SCREEN && (l = y.DUB.NO_CHAT), {
      currentLayout: l,
      mode: e
    }
  }, [t, n]), I = (0, i.bG)([f.A], () => f.A.getVoiceChannelId() === t.id, [t.id]);
  l.useEffect(() => {
    E.current = S
  });
  let N = l.useRef(C),
    {
      currentDocument: T,
      rootNode: P
    } = l.useMemo(() => {
      let e = null != O && x ? O.document : document,
        t = j.document.getElementById("app-mount");
      return {
        currentWindow: j,
        currentDocument: e,
        rootNode: t
      }
    }, [O, x, j]),
    w = _ && !x,
    R = S === y._Of.VIDEO && I && !w,
    D = l.useCallback((e, r) => {
      r !== e && (a.A.updateLayout(t.id, r, n), r === y.DUB.FULL_SCREEN && t.isPrivate() && m._.dispatch(y.jej.TEXTAREA_BLUR))
    }, [n, t]),
    M = l.useCallback(e => {
      null == P || e === y.DUB.FULL_SCREEN && (D(e, N.current), (0, A.sP)(e => {
        N.current = e
      }, T))
    }, [T, D, P]),
    L = l.useCallback(e => () => {
      null != P && ((0, d.X)(v, d.O.FULL_SCREEN, e !== y.DUB.FULL_SCREEN), e !== y.DUB.FULL_SCREEN ? (N.current = e, D(e, y.DUB.FULL_SCREEN), (0, A.tl)(P)) : M(e))
    }, [D, M, P, v]);
  l.useEffect(() => {
    let e = () => {
      null != P && ((0, A._U)(P, T) || C !== y.DUB.FULL_SCREEN || L(C)())
    };
    return T.addEventListener(A.Wb, e), () => {
      T.removeEventListener(A.Wb, e)
    }
  }, [T, C, L, P]);
  let k = {
      channel: t,
      maybeLeaveFullScreen: M
    },
    G = l.useRef(k);
  return (l.useEffect(() => {
    G.current = k
  }), l.useEffect(() => {
    let {
      channel: e,
      maybeLeaveFullScreen: t
    } = G.current;
    return g.default.track(y.HAw.VIDEO_LAYOUT_TOGGLED, function(e) {
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
    }({
      video_layout: x ? "popout" : C
    }, (0, o.QS)(e.id))), () => {
      x && (0, b.isMac)() || t(C)
    }
  }, [C, x]), l.useEffect(() => {
    null != P && E.current === y._Of.VIDEO && S === y._Of.VOICE && (0, A.sP)(P, T)
  }, [T, S, E, P]), l.useEffect(() => {
    !I && x && s.h.wait(() => p.close(y.MLl.CHANNEL_CALL_POPOUT))
  }, [I, x]), R) ? (0, r.jsx)(h.A, {
    themeable: false,
    node: P,
    guestWindow: O,
    onClick: L(C)
  }) : null
}