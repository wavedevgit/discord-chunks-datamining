/** Chunk was on 30025 **/
/** chunk id: 801405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function x(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: x,
    popoutWindow: O,
    currentWindow: j
  } = e, {
    parentAnalyticsLocation: v
  } = (0, c.ZP)(), C = n === y.IlC.POPOUT, I = i.useRef(null), {
    currentLayout: S,
    mode: E
  } = (0, l.cj)([d.Z], () => {
    let e = d.Z.getMode(t.id),
      r = n === y.IlC.POPOUT;
    r && (e = y.WtW.VIDEO);
    let i = e === y.WtW.VIDEO ? d.Z.getLayout(t.id, n) : y.AEg.MINIMUM;
    return r && i !== y.AEg.FULL_SCREEN && (i = y.AEg.NO_CHAT), {
      currentLayout: i,
      mode: e
    }
  }, [t, n]), Z = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
  i.useEffect(() => {
    I.current = E
  });
  let P = i.useRef(S),
    {
      currentDocument: T,
      rootNode: N
    } = i.useMemo(() => {
      let e = null != O && C ? O.document : document,
        t = j.document.getElementById("app-mount");
      return {
        currentWindow: j,
        currentDocument: e,
        rootNode: t
      }
    }, [O, C, j]),
    R = x && !C,
    w = E === y.WtW.VIDEO && Z && !R,
    A = i.useCallback((e, r) => {
      r !== e && (s.Z.updateLayout(t.id, r, n), r === y.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(y.CkL.TEXTAREA_BLUR))
    }, [n, t]),
    D = i.useCallback(e => {
      null != N && e === y.AEg.FULL_SCREEN && (A(e, P.current), (0, _.Pr)(e => {
        P.current = e
      }, T))
    }, [T, A, N]),
    L = i.useCallback(e => () => {
      null != N && ((0, u.v)(v, u.d.FULL_SCREEN, e !== y.AEg.FULL_SCREEN), e !== y.AEg.FULL_SCREEN ? (P.current = e, A(e, y.AEg.FULL_SCREEN), (0, _.Dj)(N)) : D(e))
    }, [A, D, N, v]);
  i.useEffect(() => {
    let e = () => {
      null != N && ((0, _.rB)(N, T) || S !== y.AEg.FULL_SCREEN || L(S)())
    };
    return T.addEventListener(_.NO, e), () => {
      T.removeEventListener(_.NO, e)
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
    return g.default.track(y.rMx.VIDEO_LAYOUT_TOGGLED, function(e) {
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
      video_layout: C ? "popout" : S
    }, (0, o.AB)(e.id))), () => {
      C && (0, b.isMac)() || t(S)
    }
  }, [S, C]), i.useEffect(() => {
    null != N && I.current === y.WtW.VIDEO && E === y.WtW.VOICE && (0, _.Pr)(N, T)
  }, [T, E, I, N]), i.useEffect(() => {
    !Z && C && a.Z.wait(() => p.xv(y.KJ3.CHANNEL_CALL_POPOUT))
  }, [Z, C]), w) ? (0, r.jsx)(h.Z, {
    themeable: false,
    node: N,
    guestWindow: O,
    onClick: L(S)
  }) : null
}