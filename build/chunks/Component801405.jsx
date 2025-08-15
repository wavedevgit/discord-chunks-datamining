/** Chunk was on 86357 **/
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
    parentAnalyticsLocation: j
  } = (0, c.ZP)(), O = n === _.IlC.POPOUT, E = i.useRef(null), {
    currentLayout: S,
    mode: P
  } = (0, l.cj)([u.Z], () => {
    let e = u.Z.getMode(t.id),
      r = n === _.IlC.POPOUT;
    r && (e = _.WtW.VIDEO);
    let i = e === _.WtW.VIDEO ? u.Z.getLayout(t.id, n) : _.AEg.MINIMUM;
    return r && i !== _.AEg.FULL_SCREEN && (i = _.AEg.NO_CHAT), {
      currentLayout: i,
      mode: e
    }
  }, [t, n]), I = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
  i.useEffect(() => {
    E.current = P
  });
  let Z = i.useRef(S),
    {
      currentDocument: T,
      rootNode: N
    } = i.useMemo(() => {
      let e = null != x && O ? x.document : document,
        t = v.document.getElementById("app-mount");
      return {
        currentWindow: v,
        currentDocument: e,
        rootNode: t
      }
    }, [x, O, v]),
    A = C && !O,
    w = P === _.WtW.VIDEO && I && !A,
    R = i.useCallback((e, r) => {
      r !== e && (o.Z.updateLayout(t.id, r, n), r === _.AEg.FULL_SCREEN && t.isPrivate() && g.S.dispatch(_.CkL.TEXTAREA_BLUR))
    }, [n, t]),
    M = i.useCallback(e => {
      null != N && e === _.AEg.FULL_SCREEN && (R(e, Z.current), (0, y.Pr)(e => {
        Z.current = e
      }, T))
    }, [T, R, N]),
    k = i.useCallback(e => () => {
      null != N && ((0, d.v)(j, d.d.FULL_SCREEN, e !== _.AEg.FULL_SCREEN), e !== _.AEg.FULL_SCREEN ? (Z.current = e, R(e, _.AEg.FULL_SCREEN), (0, y.Dj)(N)) : M(e))
    }, [R, M, N, j]);
  i.useEffect(() => {
    let e = () => {
      null != N && ((0, y.rB)(N, T) || S !== _.AEg.FULL_SCREEN || k(S)())
    };
    return T.addEventListener(y.NO, e), () => {
      T.removeEventListener(y.NO, e)
    }
  }, [T, S, k, N]);
  let D = {
      channel: t,
      maybeLeaveFullScreen: M
    },
    L = i.useRef(D);
  return (i.useEffect(() => {
    L.current = D
  }), i.useEffect(() => {
    let {
      channel: e,
      maybeLeaveFullScreen: t
    } = L.current;
    return m.default.track(_.rMx.VIDEO_LAYOUT_TOGGLED, function(e) {
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
      video_layout: O ? "popout" : S
    }, (0, s.AB)(e.id))), () => {
      O && (0, b.isMac)() || t(S)
    }
  }, [S, O]), i.useEffect(() => {
    null != N && E.current === _.WtW.VIDEO && P === _.WtW.VOICE && (0, y.Pr)(N, T)
  }, [T, P, E, N]), i.useEffect(() => {
    !I && O && a.Z.wait(() => p.xv(_.KJ3.CHANNEL_CALL_POPOUT))
  }, [I, O]), w) ? (0, r.jsx)(h.Z, {
    themeable: false,
    node: N,
    guestWindow: x,
    onClick: k(S)
  }) : null
}