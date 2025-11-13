/** Chunk was on 50751 **/
/** chunk id: 273816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk533449 = require("./533449.js");

function O(e) {
  let {
    locked: t,
    pinned: n,
    anchorLeft: l
  } = e, O = (0, a.e7)([h.Z], () => h.Z.getSocket()), v = (0, a.e7)([m.Z], () => m.Z.isGPUBoosted());
  (0, d.nU)();
  let E = (0, a.e7)([p.Z], () => p.Z.getWindow(g.$J)),
    [b, _] = (0, d.m8)(O),
    {
      currentFPS: S,
      averageFrameTime: x,
      timeSinceLastDrop: I,
      onResetFrameData: C,
      droppedFramesRef: j,
      renderedFrameCount: N,
      bufferFramecountRef: Z,
      frameCheckerEffect: w
    } = (0, d.d6)(true, b, true),
    [T, P, A] = (0, d.ZF)(O),
    [D, k] = (0, d.Y5)(T, w, E),
    R = performance.now() - _.current < d.MC,
    L = P(x, Z.current);
  (0, u.ZP)(() => (D(), () => {
    k()
  }));
  let M = r.useCallback(() => {
      C(), A(), D()
    }, [C, A, D]),
    [z, V] = r.useState(true),
    [U, W] = r.useState(true),
    [G, F] = r.useState(true),
    [B, H] = r.useState(true),
    [Y, Q] = r.useState(true);
  return t && !n ? null : (0, i.jsxs)("div", {
    className: o()(y.panelGroup, !l && y.rightAligned),
    children: [(z || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(c.rsf, {
          checked: z,
          onChange: e => V(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.measurementText,
        children: ["FPS:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: S < 30 ? "text-danger" : S < 45 ? "text-feedback-warning" : "text-primary",
          children: S.toFixed(2)
        })]
      })]
    }), (U || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(c.rsf, {
          checked: U,
          onChange: e => W(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.measurementText,
        children: ["Frame Times:", " ", (0, i.jsxs)(c.Text, {
          tag: "span",
          variant: "code",
          color: x > 1.1 * d.tO ? "text-feedback-warning" : "text-primary",
          children: [x.toFixed(2), "ms"]
        })]
      })]
    }), (G || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(c.rsf, {
          checked: G,
          onChange: e => F(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.measurementText,
        children: ["Dropped Frames:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: I < 2 ? "text-danger" : I < 5 ? "text-feedback-warning" : "text-primary",
          children: j.current
        }), (0, i.jsxs)(c.Text, {
          tag: "span",
          variant: "code",
          color: "text-secondary",
          className: y.secondaryInfoText,
          children: ["(", (j.current / N.current * 100).toFixed(3), "%)"]
        })]
      })]
    }), (B || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(c.rsf, {
          checked: B,
          onChange: e => H(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.measurementText,
        children: ["Rendered Frames:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: "text-primary",
          children: N.current.toFixed(0)
        })]
      })]
    }), (Y || !t) && (0, i.jsxs)("div", {
      className: y.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: y.measurementCheckbox,
        children: (0, i.jsx)(c.rsf, {
          checked: Y,
          onChange: e => Q(e)
        })
      }), (0, i.jsx)(s.u, {
        position: "left",
        text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
        children: (0, i.jsx)("div", {
          children: (0, i.jsxs)(c.Text, {
            variant: "text-md/normal",
            color: "text-secondary",
            className: y.measurementText,
            children: ["Idle Frame Delta:", " ", (0, i.jsxs)(c.Text, {
              tag: "span",
              variant: "code",
              color: L > 1 ? "text-danger" : "text-primary",
              children: [L.toFixed(2), "ms"]
            })]
          })
        })
      })]
    }), R && (0, i.jsx)(s.u, {
      position: "left",
      text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
      children: (0, i.jsx)("span", {
        children: (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: "text-danger",
          children: "(Main App Backgrounded)"
        })
      })
    }), v && (0, i.jsx)(c.Text, {
      tag: "span",
      variant: "code",
      color: "text-feedback-positive",
      children: "(Using GPU Priority - Realtime)"
    }), !t && (0, i.jsx)("div", {
      className: y.bottomPanelButton,
      children: (0, i.jsx)(f.Z, {
        children: (0, i.jsx)(c.Button, {
          variant: "primary",
          text: "Reset Frame Data",
          onClick: M
        })
      })
    })]
  })
}