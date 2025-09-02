/** Chunk was on 46290 **/
/** chunk id: 273816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk533449 = require("./533449.js");

function O(e) {
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

function b(e, t) {
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
    anchorLeft: o
  } = e, v = (0, a.e7)([p.Z], () => p.Z.getSocket()), E = (0, a.e7)([m.ZP], () => m.ZP.isGPUBoosted());
  (0, d.nU)();
  let _ = (0, a.e7)([f.Z], () => f.Z.getWindow(g.$J)),
    [S, I] = (0, d.m8)(v),
    {
      currentFPS: x,
      averageFrameTime: j,
      timeSinceLastDrop: C,
      onResetFrameData: N,
      droppedFramesRef: Z,
      renderedFrameCount: w,
      bufferFramecountRef: P,
      frameCheckerEffect: T
    } = (0, d.d6)(true, S, true),
    [k, A, D] = (0, d.ZF)(v),
    [R, L] = (0, d.Y5)(k, T, _),
    M = performance.now() - I.current < d.MC,
    z = A(j, P.current);
  (0, u.ZP)(() => (R(), () => {
    L()
  }));
  let U = r.useCallback(() => {
      N(), D(), R()
    }, [N, D, R]),
    [V, W] = r.useState(true),
    [G, F] = r.useState(true),
    [B, H] = r.useState(true),
    [Y, Q] = r.useState(true),
    [K, X] = r.useState(true);
  return t && !n ? null : (0, i.jsxs)("div", {
    className: l()(y.panelGroup, !o && y.rightAligned),
    children: [(V || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(s.$q, {
          size: 16,
          value: V,
          onChange: (e, t) => W(t)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.measurementText,
        children: ["FPS:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: x < 30 ? "text-danger" : x < 45 ? "text-feedback-warning" : "text-primary",
          children: x.toFixed(2)
        })]
      })]
    }), (G || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(s.$q, {
          size: 16,
          value: G,
          onChange: (e, t) => F(t)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.measurementText,
        children: ["Frame Times:", " ", (0, i.jsxs)(c.Text, {
          tag: "span",
          variant: "code",
          color: j > 1.1 * d.tO ? "text-feedback-warning" : "text-primary",
          children: [j.toFixed(2), "ms"]
        })]
      })]
    }), (B || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(s.$q, {
          size: 16,
          value: B,
          onChange: (e, t) => H(t)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.measurementText,
        children: ["Dropped Frames:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: C < 2 ? "text-danger" : C < 5 ? "text-feedback-warning" : "text-primary",
          children: Z.current
        }), (0, i.jsxs)(c.Text, {
          tag: "span",
          variant: "code",
          color: "text-secondary",
          className: y.secondaryInfoText,
          children: ["(", (Z.current / w.current * 100).toFixed(3), "%)"]
        })]
      })]
    }), (Y || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(s.$q, {
          size: 16,
          value: Y,
          onChange: (e, t) => Q(t)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.measurementText,
        children: ["Rendered Frames:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: "text-primary",
          children: w.current.toFixed(0)
        })]
      })]
    }), (K || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(s.$q, {
          size: 16,
          value: K,
          onChange: (e, t) => X(t)
        })
      }), (0, i.jsx)(c.ua7, {
        position: "left",
        text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
        children: e => (0, i.jsx)("div", b(O({}, e), {
          children: (0, i.jsxs)(c.Text, {
            variant: "text-md/normal",
            color: "text-secondary",
            className: y.measurementText,
            children: ["Idle Frame Delta:", " ", (0, i.jsxs)(c.Text, {
              tag: "span",
              variant: "code",
              color: z > 1 ? "text-danger" : "text-primary",
              children: [z.toFixed(2), "ms"]
            })]
          })
        }))
      })]
    }), M && (0, i.jsx)(c.ua7, {
      position: "left",
      text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
      children: e => (0, i.jsx)("span", b(O({}, e), {
        children: (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: "text-danger",
          children: "(Main App Backgrounded)"
        })
      }))
    }), E && (0, i.jsx)(c.Text, {
      tag: "span",
      variant: "code",
      color: "text-feedback-positive",
      children: "(Using GPU Priority - Realtime)"
    }), !t && (0, i.jsx)("div", {
      className: y.bottomPanelButton,
      children: (0, i.jsx)(h.Z, {
        children: (0, i.jsx)(c.zxk, {
          variant: "primary",
          text: "Reset Frame Data",
          onClick: U
        })
      })
    })]
  })
}