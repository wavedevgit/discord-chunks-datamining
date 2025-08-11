/** Chunk was on 92922 **/
/** chunk id: 178821, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  MC: () => g,
  Y5: () => v,
  ZF: () => T,
  ZP: () => F,
  d6: () => y,
  m8: () => k,
  nU: () => I,
  tO: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk38618 = require("./38618.js"),
  Chunk917356 = require("./917356.js"),
  Chunk616257 = require("./616257.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let p = 1e3 / 60,
  f = 1e3 / 30,
  g = 5e3,
  b = 1e3 / 60 * 3,
  j = Math.ceil(3e3 / (1e3 / 60));

function v(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : window,
    n = a.useRef(null),
    c = a.useRef(null),
    s = a.useRef(null),
    l = a.useRef(null != r ? r : window);
  a.useEffect(() => {
    l.current = null != r ? r : window
  }, [r]);
  let u = a.useCallback(() => {
      null != n.current && l.current.clearInterval(n.current), null != c.current && l.current.cancelIdleCallback(c.current), null != s.current && l.current.cancelAnimationFrame(s.current)
    }, []),
    i = a.useCallback(() => {
      n.current = l.current.setTimeout(() => {
        c.current = l.current.requestIdleCallback(e), s.current = l.current.requestAnimationFrame(() => {
          t(), i()
        })
      }, 12)
    }, [e, t]);
  return [a.useCallback(() => {
    u(), i()
  }, [u, i]), u]
}

function T(e) {
  let t = a.useRef(Array(j).fill(0)),
    r = a.useRef(performance.now()),
    n = a.useRef(0),
    c = a.useRef(0),
    s = a.useRef(0),
    l = e.dispatcher.getIsSchedulerBackgrounded(),
    u = a.useRef(l);
  u.current = l;
  let i = a.useRef(l ? performance.now() : 0);
  return a.useEffect(() => {
    e.dispatcher.getIsSchedulerBackgrounded() && (i.current = performance.now())
  }), [a.useCallback(function() {
    let e = performance.now(),
      a = e - r.current;
    r.current = e, u.current || (n.current -= t.current[s.current], t.current[s.current] = a, n.current += a, c.current < j && (c.current += 1), s.current = (s.current + 1) % j)
  }, []), (e, t) => {
    var r;
    let a = null != (r = c.current) ? r : 1;
    return Math.abs(e * t - n.current / a * a) / t
  }, () => {
    n.current = 0, c.current = 0, t.current.fill(0), r.current = performance.now(), s.current = 0
  }]
}

function y(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    n = a.useRef(Array(j).fill(0)),
    c = a.useRef(performance.now()),
    s = a.useRef(0),
    l = a.useRef(0),
    u = a.useRef(0),
    i = a.useRef(0),
    o = a.useRef(0),
    d = a.useRef(0),
    x = a.useCallback(() => {
      n.current.fill(0), s.current = 0, l.current = 0, i.current = 0, o.current = 0, c.current = performance.now(), u.current = 0
    }, []),
    m = a.useCallback(function() {
      let a = performance.now(),
        x = a - c.current;
      if (c.current = a, t.current && !r) return;
      if (l.current -= n.current[o.current], n.current[o.current] = x, l.current += x, i.current < j && (i.current += 1), o.current = (o.current + 1) % j, x > b) {
        let t = 0 === i.current ? p : l.current / i.current,
          r = Math.min(2 * p, t),
          n = Math.floor(x / (e ? r : p));
        n > 0 && (d.current = performance.now()), s.current += n
      }
      let m = 0 === i.current ? p : l.current / i.current;
      u.current += x / m
    }, [e, t, r]),
    h = 0 === i.current ? 0 : l.current / i.current;
  return {
    currentFPS: 0 === h ? 0 : p / h * 60,
    averageFrameTime: h,
    timeSinceLastDrop: (performance.now() - d.current) / 1e3,
    droppedFramesRef: s,
    bufferFramecountRef: i,
    renderedFrameCount: u,
    frameCheckerEffect: m,
    onResetFrameData: x
  }
}

function k(e) {
  let t = e.dispatcher.getIsSchedulerBackgrounded(),
    r = a.useRef(t);
  r.current = t;
  let n = a.useRef(t ? performance.now() : 0);
  return a.useEffect(() => {
    e.dispatcher.getIsSchedulerBackgrounded() && (n.current = performance.now())
  }), [r, n]
}

function w(e) {
  let {
    socket: t,
    isAverageFrameTime: r
  } = e, [c, s] = k(t), {
    currentFPS: l,
    averageFrameTime: o,
    timeSinceLastDrop: x,
    onResetFrameData: f,
    droppedFramesRef: b,
    renderedFrameCount: j,
    bufferFramecountRef: w,
    frameCheckerEffect: R
  } = y(r, c), [S, O, I] = T(t), [F, C] = v(S, R), E = performance.now() - s.current < g, D = O(o, w.current);
  (0, i.ZP)(() => (F(), () => {
    C()
  }));
  let P = a.useCallback(() => {
    f(), I(), F()
  }, [f, I, F]);
  return <div className={d.panelGroup}>{<u.Text variant={"text-md/normal"} color={"text-muted"}>{"FPS (~3sec):"}{" "}{<u.Text tag={"span"} variant={"text-md/bold"} color={l < 30 ? "text-danger" : l < 45 ? "text-feedback-warning" : "text-primary"}>{l.toFixed(2)}</u.Text>}</u.Text>}{<u.Text variant={"text-md/normal"} color={"text-muted"}>{"Dropped Frames:"}{" "}{<u.Text tag={"span"} variant={"text-md/bold"} color={x < 2 ? "text-danger" : x < 5 ? "text-feedback-warning" : "text-primary"}>{b.current}</u.Text>}{<u.Text tag={"span"} variant={"text-sm/normal"} color={"text-muted"} className={d.secondaryInfoText}>{"(Dropped: "}{(b.current / j.current * 100).toFixed(4)}{"%)"}</u.Text>}{E && <u.ua7 position={"left"} text={"We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background"}>{e => (0, n.jsx)("span", h(m({}, e), {
          children: (0, n.jsx)(u.Text, {
            tag: "span",
            variant: "text-xs/bold",
            color: "text-danger",
            className: d.secondaryInfoText,
            children: "(Backgrounded)"
          })
        }))}</u.ua7>}</u.Text>}{<u.Text variant={"text-md/normal"} color={"text-muted"}>{"Rendered Frames:"}{" "}{<u.Text tag={"span"} variant={"text-md/semibold"} color={"text-secondary"}>{j.current.toFixed(0)}</u.Text>}</u.Text>}{<u.Text variant={"text-md/normal"} color={"text-muted"}>{"Frame Times (~3sec):"}{" "}{<u.Text tag={"span"} variant={"text-md/semibold"} color={o > 1.1 * p ? "text-feedback-warning" : "text-secondary"}>{o.toFixed(2)}{"ms"}</u.Text>}</u.Text>}{<u.ua7 position={"left"} text={"The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)"}>{e => (0, n.jsx)("div", h(m({}, e), {
        children: (0, n.jsxs)(u.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: ["Idle Frame Delta (~3sec):", " ", (0, n.jsxs)(u.Text, {
            tag: "span",
            variant: "text-md/semibold",
            color: D > 1 ? "text-danger" : "text-secondary",
            children: [D.toFixed(2), "ms"]
          }), E && (0, n.jsx)(u.ua7, {
            position: "left",
            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
            children: e => (0, n.jsx)("span", h(m({}, e), {
              children: (0, n.jsx)(u.Text, {
                tag: "span",
                variant: "text-xs/bold",
                color: "text-danger",
                className: d.secondaryInfoText,
                children: "(Backgrounded)"
              })
            }))
          })]
        })
      }))}</u.ua7>}{<div className={d.bottomPanelButton}><u.zxk variant={"primary"} size={"sm"} text={"Reset Frame Data"} onClick={P} /></div>}</div>
}

function R(e) {
  let {
    socket: t,
    isAverageFrameTime: r,
    onToggleAverageFrameTime: c
  } = e, [s, l] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()), i = a.useRef(null);
  a.useEffect(() => (i.current = setInterval(() => {
    l(t.dispatcher.getIsRequestIdleCallbackEnabled())
  }, f), () => {
    null != i.current && clearInterval(i.current)
  }), [t.dispatcher]);
  let o = e => {
    t.dispatcher.toggleRequestIdleCallback(e), l(e)
  };
  return <div className={d.panelGroup}>{<u.ua7 position={"left"} text={"Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count."}>{e => (0, n.jsx)("div", h(m({}, e), {
        children: (0, n.jsx)(u.XZJ, {
          value: r,
          onChange: () => c(!r),
          size: 18,
          type: u.XZJ.Types.INVERTED,
          shape: u.XZJ.Shapes.BOX,
          children: (0, n.jsx)(u.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: "Use Average Frame Time"
          })
        })
      }))}</u.ua7>}{<u.XZJ value={s} onChange={() => o(!s)} size={18} type={u.XZJ.Types.INVERTED} shape={u.XZJ.Shapes.BOX}><u.Text tag={"span"} variant={"text-md/normal"} color={"text-muted"}>{"Enable New Dispatch Scheduler (requestIdleCallback)"}</u.Text></u.XZJ>}</div>
}

function S(e) {
  let {
    socket: t
  } = e, r = t.dispatcher.getDispatchTimings(), [c, l] = a.useState(false);
  return <div className={d.panelGroup}>{<div className={s()(c && d.topPanelToggle)}><u.XZJ value={c} onChange={() => l(e => !e)} size={18} type={u.XZJ.Types.INVERTED} shape={u.XZJ.Shapes.BOX}><u.Text tag={"span"} variant={"text-md/normal"} color={"text-muted"}>{"Show Dispatch Timings"}</u.Text></u.XZJ></div>}{c ? <n.Fragment>{<u.Text variant={"text-md/medium"} color={"text-muted"}>{"Gateway Dispatch Timings:"}</u.Text>}{<table cellPadding={4}>{Object.entries(r).map(e => {
          let [t, [r, a]] = e;
          return (0, n.jsxs)("tr", {
            children: [(0, n.jsx)("td", {
              children: (0, n.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: t
              })
            }), (0, n.jsx)("td", {
              children: (0, n.jsxs)(u.Text, {
                tag: "span",
                variant: "text-xs/bold",
                color: "text-default",
                children: [r.toFixed(2), "ms"]
              })
            }), (0, n.jsx)("td", {
              children: (0, n.jsxs)(u.Text, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["(count: ", a, ")"]
              })
            })]
          }, t)
        })}</table>}</n.Fragment> : null}</div>
}

function O(e) {
  let {
    socket: t
  } = e, r = t.dispatcher.getSchedulerTelemetry(), [c, l] = a.useState(r.isTelemetryEnabled), [i, o] = a.useState(r.isTelemetryEnabled), x = e => {
    o(e), r.toggleTelemetry(e)
  };
  return <div className={d.panelGroup}>{<u.XZJ value={i} onChange={() => x(!i)} size={18} type={u.XZJ.Types.INVERTED} shape={u.XZJ.Shapes.BOX}><u.Text tag={"span"} variant={"text-md/normal"} color={"text-muted"}>{"Enable Dispatch Telemetry"}</u.Text></u.XZJ>}{<div className={s()(c && d.topPanelToggle)}><u.XZJ value={c} onChange={() => {
          l(e => {
            let t = !e;
            return t && x(true), t
          })
        }} size={18} type={u.XZJ.Types.INVERTED} shape={u.XZJ.Shapes.BOX}><u.Text tag={"span"} variant={"text-md/normal"} color={"text-muted"}>{"Show Dispatch Scheduler Telemetry"}</u.Text></u.XZJ></div>}{c ? <n.Fragment>{<u.Text variant={"text-md/medium"} color={"text-muted"}>{"Dispatch Scheduler Telemetry:"}</u.Text>}{<table cellPadding={4}>{Object.entries(r.generateTelemetry()).map(e => {
          let [t, r] = e;
          return (0, n.jsxs)("tr", {
            children: [(0, n.jsx)("td", {
              children: (0, n.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: t
              })
            }), (0, n.jsx)("td", {
              children: (0, n.jsx)(u.Text, {
                tag: "span",
                variant: "text-xs/bold",
                color: "text-default",
                children: r
              })
            })]
          }, t)
        })}</table>}{<div className={d.bottomPanelButton}><u.zxk variant={"primary"} size={"sm"} text={"Reset Scheduler Telemetry"} onClick={() => {
            r.reset()
          }} /></div>}</n.Fragment> : null}</div>
}

function I() {
  let [, e] = Chunk73800.useState({});
  Chunk73800.useEffect(() => {
    let t = setInterval(() => {
      module({})
    }, f);
    return () => {
      clearInterval(exports)
    }
  }, [])
}

function F() {
  let e = (0, Chunk442837.e7)([Chunk38618.Z], () => Chunk38618.Z.getSocket()),
    [t, r] = Chunk73800.useState(false);
  return I(), <div className={s()(Chunk616257.panel, Chunk917356.panel)}><Chunk481060.zJl className={Chunk917356.panel}>{<w socket={module} isAverageFrameTime={exports} />}{<R socket={module} isAverageFrameTime={exports} onToggleAverageFrameTime={require} />}{<S socket={module} />}{<O socket={module} />}</Chunk481060.zJl></div>
}