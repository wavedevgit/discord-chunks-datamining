/** Chunk was on 91053 **/
/** chunk id: 801405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function j(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: j,
    popoutWindow: x,
    currentWindow: O
  } = e, {
    parentAnalyticsLocation: v
  } = (0, c.ZP)(), C = n === _.IlC.POPOUT, I = i.useRef(null), {
    currentLayout: S,
    mode: E
  } = (0, l.cj)([d.Z], () => {
    let e = d.Z.getMode(t.id),
      r = n === _.IlC.POPOUT;
    r && (e = _.WtW.VIDEO);
    let i = e === _.WtW.VIDEO ? d.Z.getLayout(t.id, n) : _.AEg.MINIMUM;
    return r && i !== _.AEg.FULL_SCREEN && (i = _.AEg.NO_CHAT), {
      currentLayout: i,
      mode: e
    }
  }, [t, n]), Z = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
  i.useEffect(() => {
    I.current = E
  });
  let T = i.useRef(S),
    {
      currentDocument: P,
      rootNode: N
    } = i.useMemo(() => {
      let e = null != x && C ? x.document : document,
        t = O.document.getElementById("app-mount");
      return {
        currentWindow: O,
        currentDocument: e,
        rootNode: t
      }
    }, [x, C, O]),
    R = j && !C,
    w = E === _.WtW.VIDEO && Z && !R,
    A = i.useCallback((e, r) => {
      r !== e && (s.Z.updateLayout(t.id, r, n), r === _.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(_.CkL.TEXTAREA_BLUR))
    }, [n, t]),
    D = i.useCallback(e => {
      null != N && e === _.AEg.FULL_SCREEN && (A(e, T.current), (0, y.Pr)(e => {
        T.current = e
      }, P))
    }, [P, A, N]),
    L = i.useCallback(e => () => {
      null != N && ((0, u.v)(v, u.d.FULL_SCREEN, e !== _.AEg.FULL_SCREEN), e !== _.AEg.FULL_SCREEN ? (T.current = e, A(e, _.AEg.FULL_SCREEN), (0, y.Dj)(N)) : D(e))
    }, [A, D, N, v]);
  i.useEffect(() => {
    let e = () => {
      null != N && ((0, y.rB)(N, P) || S !== _.AEg.FULL_SCREEN || L(S)())
    };
    return P.addEventListener(y.NO, e), () => {
      P.removeEventListener(y.NO, e)
    }
  }, [P, S, L, N]);
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
    return g.default.track(_.rMx.VIDEO_LAYOUT_TOGGLED, function(e) {
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
    null != N && I.current === _.WtW.VIDEO && E === _.WtW.VOICE && (0, y.Pr)(N, P)
  }, [P, E, I, N]), i.useEffect(() => {
    !Z && C && a.Z.wait(() => h.xv(_.KJ3.CHANNEL_CALL_POPOUT))
  }, [Z, C]), w) ? (0, r.jsx)(p.Z, {
    themeable: false,
    node: N,
    guestWindow: x,
    onClick: L(S)
  }) : null
}