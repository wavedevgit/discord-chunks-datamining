/** Chunk was on 21087 **/
/** chunk id: 801405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let _ = () => {
  Chunk570140.Z.wait(() => Chunk788983.xv(Chunk981631.KJ3.CHANNEL_CALL_POPOUT))
};

function j(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: a,
    popoutWindow: h,
    currentWindow: j
  } = e, {
    parentAnalyticsLocation: O
  } = (0, c.ZP)(), v = n === x.IlC.POPOUT, C = i.useRef(null), {
    currentLayout: E,
    mode: S
  } = (0, l.cj)([u.Z], () => {
    let e = u.Z.getMode(t.id),
      r = n === x.IlC.POPOUT;
    r && (e = x.WtW.VIDEO);
    let i = e === x.WtW.VIDEO ? u.Z.getLayout(t.id, n) : x.AEg.MINIMUM;
    return r && i !== x.AEg.FULL_SCREEN && (i = x.AEg.NO_CHAT), {
      currentLayout: i,
      mode: e
    }
  }, [t, n]), I = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
  i.useEffect(() => {
    C.current = S
  });
  let Z = i.useRef(E),
    {
      currentDocument: P,
      rootNode: T
    } = i.useMemo(() => {
      let e = null != h && v ? h.document : document,
        t = j.document.getElementById("app-mount");
      return {
        currentWindow: j,
        currentDocument: e,
        rootNode: t
      }
    }, [h, v, j]),
    N = a && !v,
    R = S === x.WtW.VIDEO && I && !N,
    w = i.useCallback((e, r) => {
      r !== e && (s.Z.updateLayout(t.id, r, n), r === x.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(x.CkL.TEXTAREA_BLUR))
    }, [n, t]),
    A = i.useCallback(e => {
      null != T && e === x.AEg.FULL_SCREEN && (w(e, Z.current), (0, y.Pr)(e => {
        Z.current = e
      }, P))
    }, [P, w, T]),
    D = i.useCallback(e => () => {
      null != T && ((0, d.v)(O, d.d.FULL_SCREEN, e !== x.AEg.FULL_SCREEN), e !== x.AEg.FULL_SCREEN ? (Z.current = e, w(e, x.AEg.FULL_SCREEN), (0, y.Dj)(T)) : A(e))
    }, [w, A, T, O]);
  i.useEffect(() => {
    let e = () => {
      null != T && ((0, y.rB)(T, P) || E !== x.AEg.FULL_SCREEN || D(E)())
    };
    return P.addEventListener(y.NO, e), () => {
      P.removeEventListener(y.NO, e)
    }
  }, [P, E, D, T]);
  let k = {
      channel: t,
      maybeLeaveFullScreen: A
    },
    L = i.useRef(k);
  return (i.useEffect(() => {
    L.current = k
  }), i.useEffect(() => {
    let {
      channel: e,
      maybeLeaveFullScreen: t
    } = L.current;
    return g.default.track(x.rMx.VIDEO_LAYOUT_TOGGLED, function(e) {
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
      video_layout: v ? "popout" : E
    }, (0, o.AB)(e.id))), () => {
      v && (0, b.isMac)() || t(E)
    }
  }, [E, v]), i.useEffect(() => {
    null != T && C.current === x.WtW.VIDEO && S === x.WtW.VOICE && (0, y.Pr)(T, P)
  }, [P, S, C, T]), i.useEffect(() => {
    !I && v && _()
  }, [I, v]), R) ? (0, r.jsx)(p.Z, {
    themeable: false,
    node: T,
    guestWindow: h,
    onClick: D(E)
  }) : null
}