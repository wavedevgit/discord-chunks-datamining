/** Chunk was on 50751 **/
/** chunk id: 273816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk178821 = require("./178821.jsx"),
  Chunk38618 = require("./38618.js"),
  Chunk522474 = require("./522474.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk76623 = require("./76623.js"),
  Chunk501787 = require("./501787.js"),
  Chunk596385 = require("./596385.js");

function O(e) {
  let {
    locked: t,
    pinned: n,
    anchorLeft: l
  } = e, O = (0, a.e7)([h.Z], () => h.Z.getSocket()), E = (0, a.e7)([m.Z], () => m.Z.isGPUBoosted());
  (0, d.nU)();
  let v = (0, a.e7)([p.Z], () => p.Z.getWindow(g.$J)),
    [b, S] = (0, d.m8)(O),
    {
      currentFPS: x,
      averageFrameTime: j,
      timeSinceLastDrop: I,
      onResetFrameData: Z,
      droppedFramesRef: C,
      renderedFrameCount: N,
      bufferFramecountRef: w,
      frameCheckerEffect: T
    } = (0, d.d6)(true, b, true),
    [_, P, A] = (0, d.ZF)(O),
    [D, R] = (0, d.Y5)(_, T, v),
    k = performance.now() - S.current < d.MC,
    L = P(j, w.current);
  (0, c.ZP)(() => (D(), () => {
    R()
  }));
  let M = r.useCallback(() => {
      Z(), A(), D()
    }, [Z, A, D]),
    [V, z] = r.useState(true),
    [U, W] = r.useState(true),
    [G, F] = r.useState(true),
    [H, Y] = r.useState(true),
    [B, Q] = r.useState(true);
  return t && !n ? null : (0, i.jsxs)("div", {
    className: o()(y.panelGroup, !l && y.rightAligned),
    children: [(V || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(u.rsf, {
          checked: V,
          onChange: e => z(e)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: y.measurementText,
        children: ["FPS:", " ", (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: x < 30 ? "text-feedback-critical" : x < 45 ? "text-feedback-warning" : "text-strong",
          children: x.toFixed(2)
        })]
      })]
    }), (U || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(u.rsf, {
          checked: U,
          onChange: e => W(e)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: y.measurementText,
        children: ["Frame Times:", " ", (0, i.jsxs)(u.Text, {
          tag: "span",
          variant: "code",
          color: j > 1.1 * d.tO ? "text-feedback-warning" : "text-strong",
          children: [j.toFixed(2), "ms"]
        })]
      })]
    }), (G || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(u.rsf, {
          checked: G,
          onChange: e => F(e)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: y.measurementText,
        children: ["Dropped Frames:", " ", (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: I < 2 ? "text-feedback-critical" : I < 5 ? "text-feedback-warning" : "text-strong",
          children: C.current
        }), (0, i.jsxs)(u.Text, {
          tag: "span",
          variant: "code",
          color: "text-subtle",
          className: y.secondaryInfoText,
          children: ["(", (C.current / N.current * 100).toFixed(3), "%)"]
        })]
      })]
    }), (H || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(u.rsf, {
          checked: H,
          onChange: e => Y(e)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: y.measurementText,
        children: ["Rendered Frames:", " ", (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: "text-strong",
          children: N.current.toFixed(0)
        })]
      })]
    }), (B || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(u.rsf, {
          checked: B,
          onChange: e => Q(e)
        })
      }), (0, i.jsx)(s.u, {
        position: "left",
        text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
        children: (0, i.jsx)("div", {
          children: (0, i.jsxs)(u.Text, {
            variant: "text-md/normal",
            color: "text-subtle",
            className: y.measurementText,
            children: ["Idle Frame Delta:", " ", (0, i.jsxs)(u.Text, {
              tag: "span",
              variant: "code",
              color: L > 1 ? "text-feedback-critical" : "text-strong",
              children: [L.toFixed(2), "ms"]
            })]
          })
        })
      })]
    }), k && (0, i.jsx)(s.u, {
      position: "left",
      text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
      children: (0, i.jsx)("span", {
        children: (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: "text-feedback-critical",
          children: "(Main App Backgrounded)"
        })
      })
    }), E && (0, i.jsx)(u.Text, {
      tag: "span",
      variant: "code",
      color: "text-feedback-positive",
      children: "(Using GPU Priority - Realtime)"
    }), !t && (0, i.jsx)("div", {
      className: y.bottomPanelButton,
      children: (0, i.jsx)(f.Z, {
        children: (0, i.jsx)(u.Button, {
          variant: "primary",
          text: "Reset Frame Data",
          onClick: M
        })
      })
    })]
  })
}