/** Chunk was on 92922 **/
/** chunk id: 178821, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  MC: () => b,
  Y5: () => T,
  ZF: () => k,
  ZP: () => C,
  d6: () => y,
  m8: () => w,
  nU: () => S,
  tO: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk38618 = require("./38618.js"),
  Chunk756746 = require("./756746.js"),
  Chunk866403 = require("./866403.js");

function h(e) {
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

function p(e, t) {
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
let f = 1e3 / 60,
  g = 1e3 / 30,
  b = 5e3,
  j = 1e3 / 60 * 3,
  v = Math.ceil(3e3 / (1e3 / 60));

function T(e, t) {
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

function k(e) {
  let t = a.useRef(Array(v).fill(0)),
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
    r.current = e, u.current || (n.current -= t.current[s.current], t.current[s.current] = a, n.current += a, c.current < v && (c.current += 1), s.current = (s.current + 1) % v)
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
    n = a.useRef(Array(v).fill(0)),
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
      if (l.current -= n.current[o.current], n.current[o.current] = x, l.current += x, i.current < v && (i.current += 1), o.current = (o.current + 1) % v, x > j) {
        let t = 0 === i.current ? f : l.current / i.current,
          r = Math.min(2 * f, t),
          n = Math.floor(x / (e ? r : f));
        n > 0 && (d.current = performance.now()), s.current += n
      }
      let m = 0 === i.current ? f : l.current / i.current;
      u.current += x / m
    }, [e, t, r]),
    h = 0 === i.current ? 0 : l.current / i.current;
  return {
    currentFPS: 0 === h ? 0 : f / h * 60,
    averageFrameTime: h,
    timeSinceLastDrop: (performance.now() - d.current) / 1e3,
    droppedFramesRef: s,
    bufferFramecountRef: i,
    renderedFrameCount: u,
    frameCheckerEffect: m,
    onResetFrameData: x
  }
}

function w(e) {
  let t = e.dispatcher.getIsSchedulerBackgrounded(),
    r = a.useRef(t);
  r.current = t;
  let n = a.useRef(t ? performance.now() : 0);
  return a.useEffect(() => {
    e.dispatcher.getIsSchedulerBackgrounded() && (n.current = performance.now())
  }), [r, n]
}

function R(e) {
  let {
    socket: t,
    isAverageFrameTime: r
  } = e, [c, s] = w(t), {
    currentFPS: l,
    averageFrameTime: u,
    timeSinceLastDrop: d,
    onResetFrameData: m,
    droppedFramesRef: g,
    renderedFrameCount: j,
    bufferFramecountRef: v,
    frameCheckerEffect: R
  } = y(r, c), [O, I, F] = k(t), [S, C] = T(O, R), E = performance.now() - s.current < b, D = I(u, v.current);
  (0, o.ZP)(() => (S(), () => {
    C()
  }));
  let P = a.useCallback(() => {
    m(), F(), S()
  }, [m, F, S]);
  return (0, n.jsxs)("div", {
    className: x.panelGroup,
    children: [(0, n.jsxs)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["FPS (~3sec):", " ", (0, n.jsx)(i.Text, {
        tag: "span",
        variant: "text-md/bold",
        color: l < 30 ? "text-danger" : l < 45 ? "text-feedback-warning" : "text-primary",
        children: l.toFixed(2)
      })]
    }), (0, n.jsxs)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["Dropped Frames:", " ", (0, n.jsx)(i.Text, {
        tag: "span",
        variant: "text-md/bold",
        color: d < 2 ? "text-danger" : d < 5 ? "text-feedback-warning" : "text-primary",
        children: g.current
      }), (0, n.jsxs)(i.Text, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-muted",
        className: x.secondaryInfoText,
        children: ["(Dropped: ", (g.current / j.current * 100).toFixed(4), "%)"]
      }), E && (0, n.jsx)(i.ua7, {
        position: "left",
        text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
        children: e => (0, n.jsx)("span", p(h({}, e), {
          children: (0, n.jsx)(i.Text, {
            tag: "span",
            variant: "text-xs/bold",
            color: "text-danger",
            className: x.secondaryInfoText,
            children: "(Backgrounded)"
          })
        }))
      })]
    }), (0, n.jsxs)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["Rendered Frames:", " ", (0, n.jsx)(i.Text, {
        tag: "span",
        variant: "text-md/semibold",
        color: "text-secondary",
        children: j.current.toFixed(0)
      })]
    }), (0, n.jsxs)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["Frame Times (~3sec):", " ", (0, n.jsxs)(i.Text, {
        tag: "span",
        variant: "text-md/semibold",
        color: u > 1.1 * f ? "text-feedback-warning" : "text-secondary",
        children: [u.toFixed(2), "ms"]
      })]
    }), (0, n.jsx)(i.ua7, {
      position: "left",
      text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
      children: e => (0, n.jsx)("div", p(h({}, e), {
        children: (0, n.jsxs)(i.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: ["Idle Frame Delta (~3sec):", " ", (0, n.jsxs)(i.Text, {
            tag: "span",
            variant: "text-md/semibold",
            color: D > 1 ? "text-danger" : "text-secondary",
            children: [D.toFixed(2), "ms"]
          }), E && (0, n.jsx)(i.ua7, {
            position: "left",
            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
            children: e => (0, n.jsx)("span", p(h({}, e), {
              children: (0, n.jsx)(i.Text, {
                tag: "span",
                variant: "text-xs/bold",
                color: "text-danger",
                className: x.secondaryInfoText,
                children: "(Backgrounded)"
              })
            }))
          })]
        })
      }))
    }), (0, n.jsx)("div", {
      className: x.bottomPanelButton,
      children: (0, n.jsx)(i.zxk, {
        variant: "primary",
        size: "sm",
        text: "Reset Frame Data",
        onClick: P
      })
    })]
  })
}

function O(e) {
  let {
    socket: t,
    isAverageFrameTime: r,
    onToggleAverageFrameTime: c
  } = e, [s, l] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()), o = a.useRef(null);
  return a.useEffect(() => (o.current = setInterval(() => {
    l(t.dispatcher.getIsRequestIdleCallbackEnabled())
  }, g), () => {
    null != o.current && clearInterval(o.current)
  }), [t.dispatcher]), (0, n.jsxs)("div", {
    className: x.panelGroup,
    children: [(0, n.jsx)(i.ua7, {
      position: "left",
      text: "Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.",
      children: e => (0, n.jsx)("div", p(h({}, e), {
        children: (0, n.jsx)(u.$q, {
          value: r,
          onChange: () => c(!r),
          size: 18,
          type: u.M0.INVERTED,
          shape: u.zV.BOX,
          children: (0, n.jsx)(i.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: "Use Average Frame Time"
          })
        })
      }))
    }), (0, n.jsx)(u.$q, {
      value: s,
      onChange: () => {
        var e;
        return e = !s, void(t.dispatcher.toggleRequestIdleCallback(e), l(e))
      },
      size: 18,
      type: u.M0.INVERTED,
      shape: u.zV.BOX,
      children: (0, n.jsx)(i.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: "Enable New Dispatch Scheduler (requestIdleCallback)"
      })
    })]
  })
}

function I(e) {
  let {
    socket: t
  } = e, r = t.dispatcher.getDispatchTimings(), [c, l] = a.useState(false);
  return (0, n.jsxs)("div", {
    className: x.panelGroup,
    children: [(0, n.jsx)("div", {
      className: s()(c && x.topPanelToggle),
      children: (0, n.jsx)(u.$q, {
        value: c,
        onChange: () => l(e => !e),
        size: 18,
        type: u.M0.INVERTED,
        shape: u.zV.BOX,
        children: (0, n.jsx)(i.Text, {
          tag: "span",
          variant: "text-md/normal",
          color: "text-muted",
          children: "Show Dispatch Timings"
        })
      })
    }), c ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: "Gateway Dispatch Timings:"
      }), (0, n.jsx)("table", {
        cellPadding: 4,
        children: Object.entries(r).map(e => {
          let [t, [r, a]] = e;
          return (0, n.jsxs)("tr", {
            children: [(0, n.jsx)("td", {
              children: (0, n.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: t
              })
            }), (0, n.jsx)("td", {
              children: (0, n.jsxs)(i.Text, {
                tag: "span",
                variant: "text-xs/bold",
                color: "text-default",
                children: [r.toFixed(2), "ms"]
              })
            }), (0, n.jsx)("td", {
              children: (0, n.jsxs)(i.Text, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["(count: ", a, ")"]
              })
            })]
          }, t)
        })
      })]
    }) : null]
  })
}

function F(e) {
  let {
    socket: t
  } = e, r = t.dispatcher.getSchedulerTelemetry(), [c, l] = a.useState(r.isTelemetryEnabled), [o, d] = a.useState(r.isTelemetryEnabled), m = e => {
    d(e), r.toggleTelemetry(e)
  };
  return (0, n.jsxs)("div", {
    className: x.panelGroup,
    children: [(0, n.jsx)(u.$q, {
      value: o,
      onChange: () => m(!o),
      size: 18,
      type: u.M0.INVERTED,
      shape: u.zV.BOX,
      children: (0, n.jsx)(i.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: "Enable Dispatch Telemetry"
      })
    }), (0, n.jsx)("div", {
      className: s()(c && x.topPanelToggle),
      children: (0, n.jsx)(u.$q, {
        value: c,
        onChange: () => {
          l(e => {
            let t = !e;
            return t && m(true), t
          })
        },
        size: 18,
        type: u.M0.INVERTED,
        shape: u.zV.BOX,
        children: (0, n.jsx)(i.Text, {
          tag: "span",
          variant: "text-md/normal",
          color: "text-muted",
          children: "Show Dispatch Scheduler Telemetry"
        })
      })
    }), c ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: "Dispatch Scheduler Telemetry:"
      }), (0, n.jsx)("table", {
        cellPadding: 4,
        children: Object.entries(r.generateTelemetry()).map(e => {
          let [t, r] = e;
          return (0, n.jsxs)("tr", {
            children: [(0, n.jsx)("td", {
              children: (0, n.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: t
              })
            }), (0, n.jsx)("td", {
              children: (0, n.jsx)(i.Text, {
                tag: "span",
                variant: "text-xs/bold",
                color: "text-default",
                children: r
              })
            })]
          }, t)
        })
      }), (0, n.jsx)("div", {
        className: x.bottomPanelButton,
        children: (0, n.jsx)(i.zxk, {
          variant: "primary",
          size: "sm",
          text: "Reset Scheduler Telemetry",
          onClick: () => {
            r.reset()
          }
        })
      })]
    }) : null]
  })
}

function S() {
  let [, e] = Chunk647438.useState({});
  Chunk647438.useEffect(() => {
    let t = setInterval(() => {
      module({})
    }, g);
    return () => {
      clearInterval(exports)
    }
  }, [])
}

function C() {
  let e = (0, Chunk442837.e7)([Chunk38618.Z], () => Chunk38618.Z.getSocket()),
    [t, r] = Chunk647438.useState(false);
  return S(), (0, Chunk951288.jsx)("div", {
    className: s()(Chunk866403.panel, Chunk756746.panel),
    children: (0, Chunk951288.jsxs)(Chunk481060.zJl, {
      className: Chunk756746.panel,
      children: [(0, Chunk951288.jsx)(R, {
        socket: module,
        isAverageFrameTime: exports
      }), (0, Chunk951288.jsx)(O, {
        socket: module,
        isAverageFrameTime: exports,
        onToggleAverageFrameTime: require
      }), (0, Chunk951288.jsx)(I, {
        socket: module
      }), (0, Chunk951288.jsx)(F, {
        socket: module
      })]
    })
  })
}