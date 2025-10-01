/** Chunk was on 50751 **/
/** chunk id: 273816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk178821 = require("./178821.jsx"),
  Chunk38618 = require("./38618.js"),
  Chunk522474 = require("./522474.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk610394 = require("./610394.js"),
  Chunk501787 = require("./501787.js"),
  Chunk580259 = require("./580259.js");

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

function E(e, t) {
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

function v(e) {
  let {
    locked: t,
    pinned: n,
    anchorLeft: l
  } = e, v = (0, a.e7)([p.Z], () => p.Z.getSocket()), b = (0, a.e7)([m.ZP], () => m.ZP.isGPUBoosted());
  (0, d.nU)();
  let S = (0, a.e7)([h.Z], () => h.Z.getWindow(g.$J)),
    [x, j] = (0, d.m8)(v),
    {
      currentFPS: I,
      averageFrameTime: C,
      timeSinceLastDrop: Z,
      onResetFrameData: w,
      droppedFramesRef: N,
      renderedFrameCount: T,
      bufferFramecountRef: _,
      frameCheckerEffect: P
    } = (0, d.d6)(true, x, true),
    [D, A, R] = (0, d.ZF)(v),
    [k, L] = (0, d.Y5)(D, P, S),
    M = performance.now() - j.current < d.MC,
    V = A(C, _.current);
  (0, c.ZP)(() => (k(), () => {
    L()
  }));
  let z = r.useCallback(() => {
      w(), R(), k()
    }, [w, R, k]),
    [U, W] = r.useState(true),
    [G, H] = r.useState(true),
    [F, Y] = r.useState(true),
    [B, Q] = r.useState(true),
    [K, X] = r.useState(true);
  return t && !n ? null : (0, i.jsxs)("div", {
    className: o()(O.panelGroup, !l && O.rightAligned),
    children: [(U || !t) && (0, i.jsxs)("div", {
      className: O.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: O.measurementCheckbox,
        children: (0, i.jsx)(s.$q, {
          size: 16,
          value: U,
          onChange: (e, t) => W(t)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: O.measurementText,
        children: ["FPS:", " ", (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: I < 30 ? "text-danger" : I < 45 ? "text-feedback-warning" : "text-primary",
          children: I.toFixed(2)
        })]
      })]
    }), (G || !t) && (0, i.jsxs)("div", {
      className: O.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: O.measurementCheckbox,
        children: (0, i.jsx)(s.$q, {
          size: 16,
          value: G,
          onChange: (e, t) => H(t)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: O.measurementText,
        children: ["Frame Times:", " ", (0, i.jsxs)(u.Text, {
          tag: "span",
          variant: "code",
          color: C > 1.1 * d.tO ? "text-feedback-warning" : "text-primary",
          children: [C.toFixed(2), "ms"]
        })]
      })]
    }), (F || !t) && (0, i.jsxs)("div", {
      className: O.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: O.measurementCheckbox,
        children: (0, i.jsx)(s.$q, {
          size: 16,
          value: F,
          onChange: (e, t) => Y(t)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: O.measurementText,
        children: ["Dropped Frames:", " ", (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: Z < 2 ? "text-danger" : Z < 5 ? "text-feedback-warning" : "text-primary",
          children: N.current
        }), (0, i.jsxs)(u.Text, {
          tag: "span",
          variant: "code",
          color: "text-secondary",
          className: O.secondaryInfoText,
          children: ["(", (N.current / T.current * 100).toFixed(3), "%)"]
        })]
      })]
    }), (B || !t) && (0, i.jsxs)("div", {
      className: O.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: O.measurementCheckbox,
        children: (0, i.jsx)(s.$q, {
          size: 16,
          value: B,
          onChange: (e, t) => Q(t)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: O.measurementText,
        children: ["Rendered Frames:", " ", (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: "text-primary",
          children: T.current.toFixed(0)
        })]
      })]
    }), (K || !t) && (0, i.jsxs)("div", {
      className: O.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: O.measurementCheckbox,
        children: (0, i.jsx)(s.$q, {
          size: 16,
          value: K,
          onChange: (e, t) => X(t)
        })
      }), (0, i.jsx)(u.ua7, {
        position: "left",
        text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
        children: e => (0, i.jsx)("div", E(y({}, e), {
          children: (0, i.jsxs)(u.Text, {
            variant: "text-md/normal",
            color: "text-secondary",
            className: O.measurementText,
            children: ["Idle Frame Delta:", " ", (0, i.jsxs)(u.Text, {
              tag: "span",
              variant: "code",
              color: V > 1 ? "text-danger" : "text-primary",
              children: [V.toFixed(2), "ms"]
            })]
          })
        }))
      })]
    }), M && (0, i.jsx)(u.ua7, {
      position: "left",
      text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
      children: e => (0, i.jsx)("span", E(y({}, e), {
        children: (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: "text-danger",
          children: "(Main App Backgrounded)"
        })
      }))
    }), b && (0, i.jsx)(u.Text, {
      tag: "span",
      variant: "code",
      color: "text-feedback-positive",
      children: "(Using GPU Priority - Realtime)"
    }), !t && (0, i.jsx)("div", {
      className: O.bottomPanelButton,
      children: (0, i.jsx)(f.Z, {
        children: (0, i.jsx)(u.zxk, {
          variant: "primary",
          text: "Reset Frame Data",
          onClick: z
        })
      })
    })]
  })
}