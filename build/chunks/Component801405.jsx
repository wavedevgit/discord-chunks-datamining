/** Chunk was on 81985 **/
/** chunk id: 801405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: O,
    popoutWindow: j,
    currentWindow: x
  } = e, {
    parentAnalyticsLocation: C
  } = (0, c.ZP)(), E = n === v.IlC.POPOUT, S = i.useRef(null), {
    currentLayout: _,
    mode: I
  } = (0, l.cj)([u.Z], () => {
    let e = u.Z.getMode(t.id),
      r = n === v.IlC.POPOUT;
    r && (e = v.WtW.VIDEO);
    let i = e === v.WtW.VIDEO ? u.Z.getLayout(t.id, n) : v.AEg.MINIMUM;
    return r && i !== v.AEg.FULL_SCREEN && (i = v.AEg.NO_CHAT), {
      currentLayout: i,
      mode: e
    }
  }, [t, n]), P = (0, l.e7)([h.Z], () => h.Z.getVoiceChannelId() === t.id, [t.id]);
  i.useEffect(() => {
    S.current = I
  });
  let Z = i.useRef(_),
    {
      currentDocument: N,
      rootNode: T
    } = i.useMemo(() => {
      let e = null != j && E ? j.document : document,
        t = x.document.getElementById("app-mount");
      return {
        currentWindow: x,
        currentDocument: e,
        rootNode: t
      }
    }, [j, E, x]),
    A = O && !E,
    w = I === v.WtW.VIDEO && P && !A,
    R = i.useCallback((e, r) => {
      r !== e && (o.Z.updateLayout(t.id, r, n), r === v.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(v.CkL.TEXTAREA_BLUR))
    }, [n, t]),
    D = i.useCallback(e => {
      null != T && e === v.AEg.FULL_SCREEN && (R(e, Z.current), (0, y.Pr)(e => {
        Z.current = e
      }, N))
    }, [N, R, T]),
    M = i.useCallback(e => () => {
      null != T && ((0, d.v)(C, d.d.FULL_SCREEN, e !== v.AEg.FULL_SCREEN), e !== v.AEg.FULL_SCREEN ? (Z.current = e, R(e, v.AEg.FULL_SCREEN), (0, y.Dj)(T)) : D(e))
    }, [R, D, T, C]);
  i.useEffect(() => {
    let e = () => {
      null != T && ((0, y.rB)(T, N) || _ !== v.AEg.FULL_SCREEN || M(_)())
    };
    return N.addEventListener(y.NO, e), () => {
      N.removeEventListener(y.NO, e)
    }
  }, [N, _, M, T]);
  let k = {
      channel: t,
      maybeLeaveFullScreen: D
    },
    L = i.useRef(k);
  return (i.useEffect(() => {
    L.current = k
  }), i.useEffect(() => {
    let {
      channel: e,
      maybeLeaveFullScreen: t
    } = L.current;
    return g.default.track(v.rMx.VIDEO_LAYOUT_TOGGLED, function(e) {
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
      video_layout: E ? "popout" : _
    }, (0, s.AB)(e.id))), () => {
      E && (0, b.isMac)() || t(_)
    }
  }, [_, E]), i.useEffect(() => {
    null != T && S.current === v.WtW.VIDEO && I === v.WtW.VOICE && (0, y.Pr)(T, N)
  }, [N, I, S, T]), i.useEffect(() => {
    !P && E && a.Z.wait(() => p.close(v.KJ3.CHANNEL_CALL_POPOUT))
  }, [P, E]), w) ? (0, r.jsx)(f.Z, {
    themeable: false,
    node: T,
    guestWindow: j,
    onClick: M(_)
  }) : null
}