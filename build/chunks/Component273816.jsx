/** Chunk was on 46290 **/
/** chunk id: 273816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk178821 = require("./178821.jsx"),
  Chunk38618 = require("./38618.js"),
  Chunk522474 = require("./522474.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk610394 = require("./610394.js"),
  Chunk501787 = require("./501787.js"),
  Chunk533449 = require("./533449.js");

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
    [_, S] = (0, u.m8)(b),
    {
      currentFPS: I,
      averageFrameTime: x,
      timeSinceLastDrop: j,
      onResetFrameData: C,
      droppedFramesRef: N,
      renderedFrameCount: Z,
      bufferFramecountRef: w,
      frameCheckerEffect: P
    } = (0, u.d6)(true, _, true),
    [T, k, A] = (0, u.ZF)(b),
    [D, R] = (0, u.Y5)(T, P, E),
    L = performance.now() - S.current < u.MC,
    M = k(x, w.current);
  (0, c.ZP)(() => (D(), () => {
    R()
  }));
  let z = r.useCallback(() => {
      C(), A(), D()
    }, [C, A, D]),
    [U, V] = r.useState(true),
    [W, G] = r.useState(true),
    [F, B] = r.useState(true),
    [H, Y] = r.useState(true),
    [Q, K] = r.useState(true);
  return t && !n ? null : (0, i.jsxs)("div", {
    className: l()(g.panelGroup, !o && g.rightAligned),
    children: [(U || !t) && (0, i.jsxs)("div", {
      className: g.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: g.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          size: 16,
          value: U,
          onChange: (e, t) => V(t)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: g.measurementText,
        children: ["FPS:", " ", (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: I < 30 ? "text-danger" : I < 45 ? "text-feedback-warning" : "text-primary",
          children: I.toFixed(2)
        })]
      })]
    }), (W || !t) && (0, i.jsxs)("div", {
      className: g.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: g.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          size: 16,
          value: W,
          onChange: (e, t) => G(t)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: g.measurementText,
        children: ["Frame Times:", " ", (0, i.jsxs)(s.Text, {
          tag: "span",
          variant: "code",
          color: x > 1.1 * u.tO ? "text-feedback-warning" : "text-primary",
          children: [x.toFixed(2), "ms"]
        })]
      })]
    }), (F || !t) && (0, i.jsxs)("div", {
      className: g.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: g.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          size: 16,
          value: F,
          onChange: (e, t) => B(t)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: g.measurementText,
        children: ["Dropped Frames:", " ", (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: j < 2 ? "text-danger" : j < 5 ? "text-feedback-warning" : "text-primary",
          children: N.current
        }), (0, i.jsxs)(s.Text, {
          tag: "span",
          variant: "code",
          color: "text-secondary",
          className: g.secondaryInfoText,
          children: ["(", (N.current / Z.current * 100).toFixed(3), "%)"]
        })]
      })]
    }), (H || !t) && (0, i.jsxs)("div", {
      className: g.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: g.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          size: 16,
          value: H,
          onChange: (e, t) => Y(t)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: g.measurementText,
        children: ["Rendered Frames:", " ", (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: "text-primary",
          children: Z.current.toFixed(0)
        })]
      })]
    }), (Q || !t) && (0, i.jsxs)("div", {
      className: g.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: g.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          size: 16,
          value: Q,
          onChange: (e, t) => K(t)
        })
      }), (0, i.jsx)(s.ua7, {
        position: "left",
        text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
        children: e => (0, i.jsx)("div", O(y({}, e), {
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
        }))
      })]
    }), L && (0, i.jsx)(s.ua7, {
      position: "left",
      text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
      children: e => (0, i.jsx)("span", O(y({}, e), {
        children: (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: "text-danger",
          children: "(Main App Backgrounded)"
        })
      }))
    }), v && (0, i.jsx)(s.Text, {
      tag: "span",
      variant: "code",
      color: "text-feedback-positive",
      children: "(Using GPU Priority - Realtime)"
    }), !t && (0, i.jsx)("div", {
      className: g.bottomPanelButton,
      children: (0, i.jsx)(f.Z, {
        children: (0, i.jsx)(s.zxk, {
          variant: "primary",
          text: "Reset Frame Data",
          onClick: z
        })
      })
    })]
  })
}