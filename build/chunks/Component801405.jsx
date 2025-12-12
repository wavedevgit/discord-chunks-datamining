/** Chunk was on 41700 **/
/** chunk id: 801405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk475179 = require("./475179.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk522651 = require("./522651.js"),
  Chunk788983 = require("./788983.js"),
  Chunk268353 = require("./268353.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk228488 = require("./228488.js"),
  Chunk981631 = require("./981631.js");

function x(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: x,
    popoutWindow: j,
    currentWindow: v
  } = e, {
    parentAnalyticsLocation: C
  } = (0, c.ZP)(), I = n === O.IlC.POPOUT, _ = i.useRef(null), {
    currentLayout: S,
    mode: E
  } = (0, l.cj)([d.Z], () => {
    let e = d.Z.getMode(t.id),
      r = n === O.IlC.POPOUT;
    r && (e = O.WtW.VIDEO);
    let i = e === O.WtW.VIDEO ? d.Z.getLayout(t.id, n) : O.AEg.MINIMUM;
    return r && i !== O.AEg.FULL_SCREEN && (i = O.AEg.NO_CHAT), {
      currentLayout: i,
      mode: e
    }
  }, [t, n]), Z = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
  i.useEffect(() => {
    _.current = E
  });
  let P = i.useRef(S),
    {
      currentDocument: T,
      rootNode: N
    } = i.useMemo(() => {
      let e = null != j && I ? j.document : document,
        t = v.document.getElementById("app-mount");
      return {
        currentWindow: v,
        currentDocument: e,
        rootNode: t
      }
    }, [j, I, v]),
    R = x && !I,
    w = E === O.WtW.VIDEO && Z && !R,
    A = i.useCallback((e, r) => {
      r !== e && (s.Z.updateLayout(t.id, r, n), r === O.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(O.CkL.TEXTAREA_BLUR))
    }, [n, t]),
    D = i.useCallback(e => {
      null != N && e === O.AEg.FULL_SCREEN && (A(e, P.current), (0, y.Pr)(e => {
        P.current = e
      }, T))
    }, [T, A, N]),
    L = i.useCallback(e => () => {
      null != N && ((0, u.v)(C, u.d.FULL_SCREEN, e !== O.AEg.FULL_SCREEN), e !== O.AEg.FULL_SCREEN ? (P.current = e, A(e, O.AEg.FULL_SCREEN), (0, y.Dj)(N)) : D(e))
    }, [A, D, N, C]);
  i.useEffect(() => {
    let e = () => {
      null != N && ((0, y.rB)(N, T) || S !== O.AEg.FULL_SCREEN || L(S)())
    };
    return T.addEventListener(y.NO, e), () => {
      T.removeEventListener(y.NO, e)
    }
  }, [T, S, L, N]);
  let M = {
      channel: t,
      maybeLeaveFullScreen: D
    },
    k = i.useRef(M);
  return (i.useEffect(() => {
    k.current = M
  }), i.useEffect(() => {
    let {
      channel: e,
      maybeLeaveFullScreen: t
    } = k.current;
    return g.default.track(O.rMx.VIDEO_LAYOUT_TOGGLED, function(e) {
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
      video_layout: I ? "popout" : S
    }, (0, o.AB)(e.id))), () => {
      I && (0, b.isMac)() || t(S)
    }
  }, [S, I]), i.useEffect(() => {
    null != N && _.current === O.WtW.VIDEO && E === O.WtW.VOICE && (0, y.Pr)(N, T)
  }, [T, E, _, N]), i.useEffect(() => {
    !Z && I && a.Z.wait(() => p.close(O.KJ3.CHANNEL_CALL_POPOUT))
  }, [Z, I]), w) ? (0, r.jsx)(h.Z, {
    themeable: false,
    node: N,
    guestWindow: j,
    onClick: L(S)
  }) : null
}