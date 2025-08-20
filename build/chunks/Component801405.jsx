/** Chunk was on 5665 **/
/** chunk id: 801405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function C(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: C,
    popoutWindow: x,
    currentWindow: v
  } = e, {
    parentAnalyticsLocation: O
  } = (0, c.ZP)(), j = n === y.IlC.POPOUT, E = i.useRef(null), {
    currentLayout: S,
    mode: I
  } = (0, l.cj)([u.Z], () => {
    let e = u.Z.getMode(t.id),
      r = n === y.IlC.POPOUT;
    r && (e = y.WtW.VIDEO);
    let i = e === y.WtW.VIDEO ? u.Z.getLayout(t.id, n) : y.AEg.MINIMUM;
    return r && i !== y.AEg.FULL_SCREEN && (i = y.AEg.NO_CHAT), {
      currentLayout: i,
      mode: e
    }
  }, [t, n]), P = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
  i.useEffect(() => {
    E.current = I
  });
  let Z = i.useRef(S),
    {
      currentDocument: T,
      rootNode: N
    } = i.useMemo(() => {
      let e = null != x && j ? x.document : document,
        t = v.document.getElementById("app-mount");
      return {
        currentWindow: v,
        currentDocument: e,
        rootNode: t
      }
    }, [x, j, v]),
    A = C && !j,
    w = I === y.WtW.VIDEO && P && !A,
    R = i.useCallback((e, r) => {
      r !== e && (o.Z.updateLayout(t.id, r, n), r === y.AEg.FULL_SCREEN && t.isPrivate() && g.S.dispatch(y.CkL.TEXTAREA_BLUR))
    }, [n, t]),
    M = i.useCallback(e => {
      null != N && e === y.AEg.FULL_SCREEN && (R(e, Z.current), (0, _.Pr)(e => {
        Z.current = e
      }, T))
    }, [T, R, N]),
    D = i.useCallback(e => () => {
      null != N && ((0, d.v)(O, d.d.FULL_SCREEN, e !== y.AEg.FULL_SCREEN), e !== y.AEg.FULL_SCREEN ? (Z.current = e, R(e, y.AEg.FULL_SCREEN), (0, _.Dj)(N)) : M(e))
    }, [R, M, N, O]);
  i.useEffect(() => {
    let e = () => {
      null != N && ((0, _.rB)(N, T) || S !== y.AEg.FULL_SCREEN || D(S)())
    };
    return T.addEventListener(_.NO, e), () => {
      T.removeEventListener(_.NO, e)
    }
  }, [T, S, D, N]);
  let L = {
      channel: t,
      maybeLeaveFullScreen: M
    },
    k = i.useRef(L);
  return (i.useEffect(() => {
    k.current = L
  }), i.useEffect(() => {
    let {
      channel: e,
      maybeLeaveFullScreen: t
    } = k.current;
    return m.default.track(y.rMx.VIDEO_LAYOUT_TOGGLED, function(e) {
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
      video_layout: j ? "popout" : S
    }, (0, s.AB)(e.id))), () => {
      j && (0, b.isMac)() || t(S)
    }
  }, [S, j]), i.useEffect(() => {
    null != N && E.current === y.WtW.VIDEO && I === y.WtW.VOICE && (0, _.Pr)(N, T)
  }, [T, I, E, N]), i.useEffect(() => {
    !P && j && a.Z.wait(() => p.xv(y.KJ3.CHANNEL_CALL_POPOUT))
  }, [P, j]), w) ? (0, r.jsx)(h.Z, {
    themeable: false,
    node: N,
    guestWindow: x,
    onClick: D(S)
  }) : null
}