/** Chunk was on 50751 **/
/** chunk id: 273816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function E(e) {
  let {
    locked: t,
    pinned: n,
    anchorLeft: l
  } = e, E = (0, a.e7)([d.Z], () => d.Z.getSocket()), v = (0, a.e7)([f.ZP], () => f.ZP.isGPUBoosted());
  (0, c.nU)();
  let b = (0, a.e7)([p.Z], () => p.Z.getWindow(m.$J)),
    [S, x] = (0, c.m8)(E),
    {
      currentFPS: j,
      averageFrameTime: I,
      timeSinceLastDrop: C,
      onResetFrameData: Z,
      droppedFramesRef: w,
      renderedFrameCount: N,
      bufferFramecountRef: T,
      frameCheckerEffect: _
    } = (0, c.d6)(true, S, true),
    [P, D, A] = (0, c.ZF)(E),
    [R, k] = (0, c.Y5)(P, _, b),
    L = performance.now() - x.current < c.MC,
    M = D(I, T.current);
  (0, u.ZP)(() => (R(), () => {
    k()
  }));
  let V = r.useCallback(() => {
      Z(), A(), R()
    }, [Z, A, R]),
    [z, U] = r.useState(true),
    [W, G] = r.useState(true),
    [F, H] = r.useState(true),
    [B, Y] = r.useState(true),
    [Q, X] = r.useState(true);
  return t && !n ? null : (0, i.jsxs)("div", {
    className: o()(g.panelGroup, !l && g.rightAligned),
    children: [(z || !t) && (0, i.jsxs)("div", {
      className: g.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: g.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          checked: z,
          onChange: e => U(e)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: g.measurementText,
        children: ["FPS:", " ", (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: j < 30 ? "text-danger" : j < 45 ? "text-feedback-warning" : "text-primary",
          children: j.toFixed(2)
        })]
      })]
    }), (W || !t) && (0, i.jsxs)("div", {
      className: g.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: g.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          checked: W,
          onChange: e => G(e)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: g.measurementText,
        children: ["Frame Times:", " ", (0, i.jsxs)(s.Text, {
          tag: "span",
          variant: "code",
          color: I > 1.1 * c.tO ? "text-feedback-warning" : "text-primary",
          children: [I.toFixed(2), "ms"]
        })]
      })]
    }), (F || !t) && (0, i.jsxs)("div", {
      className: g.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: g.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          checked: F,
          onChange: e => H(e)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: g.measurementText,
        children: ["Dropped Frames:", " ", (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: C < 2 ? "text-danger" : C < 5 ? "text-feedback-warning" : "text-primary",
          children: w.current
        }), (0, i.jsxs)(s.Text, {
          tag: "span",
          variant: "code",
          color: "text-secondary",
          className: g.secondaryInfoText,
          children: ["(", (w.current / N.current * 100).toFixed(3), "%)"]
        })]
      })]
    }), (B || !t) && (0, i.jsxs)("div", {
      className: g.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: g.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          checked: B,
          onChange: e => Y(e)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: g.measurementText,
        children: ["Rendered Frames:", " ", (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: "text-primary",
          children: N.current.toFixed(0)
        })]
      })]
    }), (Q || !t) && (0, i.jsxs)("div", {
      className: g.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: g.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          checked: Q,
          onChange: e => X(e)
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
      children: (0, i.jsx)(h.Z, {
        children: (0, i.jsx)(s.zxk, {
          variant: "primary",
          text: "Reset Frame Data",
          onClick: V
        })
      })
    })]
  })
}