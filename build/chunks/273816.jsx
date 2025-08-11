/** Chunk was on 89298 **/
/** chunk id: 273816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk178821 = require("./178821.jsx"),
  Chunk38618 = require("./38618.js"),
  Chunk522474 = require("./522474.js"),
  Chunk333031 = require("./333031.js"),
  Chunk610394 = require("./610394.js"),
  Chunk501787 = require("./501787.js"),
  Chunk565655 = require("./565655.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    locked: t,
    pinned: n,
    anchorLeft: o
  } = e, b = (0, a.e7)([d.Z], () => d.Z.getSocket()), v = (0, a.e7)([h.ZP], () => h.ZP.isGPUBoosted());
  (0, u.nU)();
  let E = (0, a.e7)([p.Z], () => p.Z.getWindow(m.$J)),
    [_, x] = (0, u.m8)(b),
    {
      currentFPS: S,
      averageFrameTime: I,
      timeSinceLastDrop: j,
      onResetFrameData: C,
      droppedFramesRef: N,
      renderedFrameCount: w,
      bufferFramecountRef: Z,
      frameCheckerEffect: P
    } = (0, u.d6)(true, _, true),
    [T, A, k] = (0, u.ZF)(b),
    [D, R] = (0, u.Y5)(T, P, E),
    L = performance.now() - x.current < u.MC,
    M = A(I, Z.current);
  (0, c.ZP)(() => (D(), () => {
    R()
  }));
  let z = r.useCallback(() => {
      C(), k(), D()
    }, [C, k, D]),
    [U, V] = r.useState(true),
    [W, F] = r.useState(true),
    [G, B] = r.useState(true),
    [H, Y] = r.useState(true),
    [Q, K] = r.useState(true);
  return t && !n ? null : <div className={l()(g.panelGroup, !o && g.rightAligned)}>{(U || !t) && <div className={g.measurement}>{!t && <div className={g.measurementCheckbox}><s.XZJ size={16} value={U} onChange={(e, t) => V(t)} /></div>}{<s.Text variant={"text-md/normal"} color={"text-secondary"} className={g.measurementText}>{"FPS:"}{" "}{<s.Text tag={"span"} variant={"code"} color={S < 30 ? "text-danger" : S < 45 ? "text-feedback-warning" : "text-primary"}>{S.toFixed(2)}</s.Text>}</s.Text>}</div>}{(W || !t) && <div className={g.measurement}>{!t && <div className={g.measurementCheckbox}><s.XZJ size={16} value={W} onChange={(e, t) => F(t)} /></div>}{<s.Text variant={"text-md/normal"} color={"text-secondary"} className={g.measurementText}>{"Frame Times:"}{" "}{<s.Text tag={"span"} variant={"code"} color={I > 1.1 * u.tO ? "text-feedback-warning" : "text-primary"}>{I.toFixed(2)}{"ms"}</s.Text>}</s.Text>}</div>}{(G || !t) && <div className={g.measurement}>{!t && <div className={g.measurementCheckbox}><s.XZJ size={16} value={G} onChange={(e, t) => B(t)} /></div>}{<s.Text variant={"text-md/normal"} color={"text-secondary"} className={g.measurementText}>{"Dropped Frames:"}{" "}{<s.Text tag={"span"} variant={"code"} color={j < 2 ? "text-danger" : j < 5 ? "text-feedback-warning" : "text-primary"}>{N.current}</s.Text>}{<s.Text tag={"span"} variant={"code"} color={"text-secondary"} className={g.secondaryInfoText}>{"("}{(N.current / w.current * 100).toFixed(3)}{"%)"}</s.Text>}</s.Text>}</div>}{(H || !t) && <div className={g.measurement}>{!t && <div className={g.measurementCheckbox}><s.XZJ size={16} value={H} onChange={(e, t) => Y(t)} /></div>}{<s.Text variant={"text-md/normal"} color={"text-secondary"} className={g.measurementText}>{"Rendered Frames:"}{" "}{<s.Text tag={"span"} variant={"code"} color={"text-primary"}>{w.current.toFixed(0)}</s.Text>}</s.Text>}</div>}{(Q || !t) && <div className={g.measurement}>{!t && <div className={g.measurementCheckbox}><s.XZJ size={16} value={Q} onChange={(e, t) => K(t)} /></div>}{<s.ua7 position={"left"} text={"The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)"}>{e => (0, i.jsx)("div", O(y({}, e), {
          children: (0, i.jsxs)(s.Text, {
            variant: "text-md/normal",
            color: "text-secondary",
            className: g.measurementText,
            children: ["Idle Frame Delta:", " ", (0, i.jsxs)(s.Text, {
              tag: "span",
              variant: "code",
              color: M > 1 ? "text-danger" : "text-primary",
              children: [M.toFixed(2), "ms"]
            })]
          })
        }))}</s.ua7>}</div>}{L && <s.ua7 position={"left"} text={"We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background"}>{e => (0, i.jsx)("span", O(y({}, e), {
        children: (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: "text-danger",
          children: "(Main App Backgrounded)"
        })
      }))}</s.ua7>}{v && <s.Text tag={"span"} variant={"code"} color={"text-feedback-positive"}>{"(Using GPU Priority - Realtime)"}</s.Text>}{!t && <div className={g.bottomPanelButton}><f.Z><s.zxk variant={"primary"} text={"Reset Frame Data"} onClick={z} /></f.Z></div>}</div>
}