/** Chunk was on 50751 **/
/** chunk id: 273816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function y(e) {
  let {
    locked: t,
    pinned: n,
    anchorLeft: a
  } = e, y = (0, o.e7)([f.Z], () => f.Z.getSocket()), O = (0, o.e7)([m.Z], () => m.Z.isGPUBoosted());
  (0, d.nU)();
  let v = (0, o.e7)([h.Z], () => h.Z.getWindow(g.$J)),
    [E, S] = (0, d.m8)(y),
    {
      currentFPS: x,
      averageFrameTime: I,
      timeSinceLastDrop: C,
      onResetFrameData: j,
      droppedFramesRef: _,
      renderedFrameCount: Z,
      bufferFramecountRef: N,
      frameCheckerEffect: w
    } = (0, d.d6)(true, E, true),
    [T, P, A] = (0, d.ZF)(y),
    [k, D] = (0, d.Y5)(T, w, v),
    R = performance.now() - S.current < d.MC,
    L = P(I, N.current);
  (0, u.ZP)(() => (k(), () => {
    D()
  }));
  let M = r.useCallback(() => {
      j(), A(), k()
    }, [j, A, k]),
    [z, V] = r.useState(true),
    [U, W] = r.useState(true),
    [G, F] = r.useState(true),
    [H, B] = r.useState(true),
    [Y, Q] = r.useState(true);
  return t && !n ? null : (0, i.jsxs)("div", {
    className: l()(b.panelGroup, !a && b.rightAligned),
    children: [(z || !t) && (0, i.jsxs)("div", {
      className: b.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: b.measurementCheckbox,
        children: (0, i.jsx)(c.rsf, {
          checked: z,
          onChange: e => V(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: b.measurementText,
        children: ["FPS:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: x < 30 ? "text-feedback-critical" : x < 45 ? "text-feedback-warning" : "text-strong",
          children: x.toFixed(2)
        })]
      })]
    }), (U || !t) && (0, i.jsxs)("div", {
      className: b.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: b.measurementCheckbox,
        children: (0, i.jsx)(c.rsf, {
          checked: U,
          onChange: e => W(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: b.measurementText,
        children: ["Frame Times:", " ", (0, i.jsxs)(c.Text, {
          tag: "span",
          variant: "code",
          color: I > 1.1 * d.tO ? "text-feedback-warning" : "text-strong",
          children: [I.toFixed(2), "ms"]
        })]
      })]
    }), (G || !t) && (0, i.jsxs)("div", {
      className: b.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: b.measurementCheckbox,
        children: (0, i.jsx)(c.rsf, {
          checked: G,
          onChange: e => F(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: b.measurementText,
        children: ["Dropped Frames:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: C < 2 ? "text-feedback-critical" : C < 5 ? "text-feedback-warning" : "text-strong",
          children: _.current
        }), (0, i.jsxs)(c.Text, {
          tag: "span",
          variant: "code",
          color: "text-subtle",
          className: b.secondaryInfoText,
          children: ["(", (_.current / Z.current * 100).toFixed(3), "%)"]
        })]
      })]
    }), (H || !t) && (0, i.jsxs)("div", {
      className: b.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: b.measurementCheckbox,
        children: (0, i.jsx)(c.rsf, {
          checked: H,
          onChange: e => B(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: b.measurementText,
        children: ["Rendered Frames:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: "text-strong",
          children: Z.current.toFixed(0)
        })]
      })]
    }), (Y || !t) && (0, i.jsxs)("div", {
      className: b.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: b.measurementCheckbox,
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
            color: "text-subtle",
            className: b.measurementText,
            children: ["Idle Frame Delta:", " ", (0, i.jsxs)(c.Text, {
              tag: "span",
              variant: "code",
              color: L > 1 ? "text-feedback-critical" : "text-strong",
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
          color: "text-feedback-critical",
          children: "(Main App Backgrounded)"
        })
      })
    }), O && (0, i.jsx)(c.Text, {
      tag: "span",
      variant: "code",
      color: "text-feedback-positive",
      children: "(Using GPU Priority - Realtime)"
    }), !t && (0, i.jsx)("div", {
      className: b.bottomPanelButton,
      children: (0, i.jsx)(p.Z, {
        children: (0, i.jsx)(c.Button, {
          variant: "primary",
          text: "Reset Frame Data",
          onClick: M
        })
      })
    })]
  })
}