/** Chunk was on 71447 **/
/** chunk id: 888987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk706712 = require("./706712.jsx"),
  Chunk142120 = require("./142120.js"),
  Chunk87001 = require("./87001.js"),
  Chunk302614 = require("./302614.jsx"),
  Chunk321090 = require("./321090.js"),
  Chunk392164 = require("./392164.js"),
  Chunk621720 = require("./621720.js");

function y(e) {
  let {
    locked: t,
    pinned: n,
    anchorLeft: l
  } = e, y = (0, o.bG)([h.A], () => h.A.getSocket()), O = (0, o.bG)([g.A], () => g.A.isGPUBoosted());
  (0, d.ZX)();
  let v = (0, o.bG)([p.A], () => p.A.getWindow(m.f)),
    [b, E] = (0, d.DQ)(y),
    {
      currentFPS: _,
      averageFrameTime: S,
      timeSinceLastDrop: x,
      onResetFrameData: I,
      droppedFramesRef: j,
      renderedFrameCount: C,
      bufferFramecountRef: T,
      frameCheckerEffect: w
    } = (0, d.Dj)(true, b, true),
    [N, P, D] = (0, d.F5)(y),
    [R, L] = (0, d.km)(N, w, v),
    k = performance.now() - E.current < d.Jc,
    M = P(S, T.current);
  (0, c.Ay)(() => (R(), () => {
    L()
  }));
  let z = r.useCallback(() => {
      I(), D(), R()
    }, [I, D, R]),
    [V, U] = r.useState(true),
    [G, H] = r.useState(true),
    [Y, F] = r.useState(true),
    [W, K] = r.useState(true),
    [Z, B] = r.useState(true);
  return t && !n ? null : (0, i.jsxs)("div", {
    className: a()(A.st, !l && A.Hk),
    children: [(V || !t) && (0, i.jsxs)("div", {
      className: A.PG,
      children: [!t && (0, i.jsx)("div", {
        className: A.On,
        children: (0, i.jsx)(u.dOG, {
          checked: V,
          onChange: e => U(e)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: A.e0,
        children: ["FPS:", " ", (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: _ < 30 ? "text-feedback-critical" : _ < 45 ? "text-feedback-warning" : "text-strong",
          children: _.toFixed(2)
        })]
      })]
    }), (G || !t) && (0, i.jsxs)("div", {
      className: A.PG,
      children: [!t && (0, i.jsx)("div", {
        className: A.On,
        children: (0, i.jsx)(u.dOG, {
          checked: G,
          onChange: e => H(e)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: A.e0,
        children: ["Frame Times:", " ", (0, i.jsxs)(u.Text, {
          tag: "span",
          variant: "code",
          color: S > 1.1 * d.L6 ? "text-feedback-warning" : "text-strong",
          children: [S.toFixed(2), "ms"]
        })]
      })]
    }), (Y || !t) && (0, i.jsxs)("div", {
      className: A.PG,
      children: [!t && (0, i.jsx)("div", {
        className: A.On,
        children: (0, i.jsx)(u.dOG, {
          checked: Y,
          onChange: e => F(e)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: A.e0,
        children: ["Dropped Frames:", " ", (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: x < 2 ? "text-feedback-critical" : x < 5 ? "text-feedback-warning" : "text-strong",
          children: j.current
        }), (0, i.jsxs)(u.Text, {
          tag: "span",
          variant: "code",
          color: "text-subtle",
          className: A.af,
          children: ["(", (j.current / C.current * 100).toFixed(3), "%)"]
        })]
      })]
    }), (W || !t) && (0, i.jsxs)("div", {
      className: A.PG,
      children: [!t && (0, i.jsx)("div", {
        className: A.On,
        children: (0, i.jsx)(u.dOG, {
          checked: W,
          onChange: e => K(e)
        })
      }), (0, i.jsxs)(u.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: A.e0,
        children: ["Rendered Frames:", " ", (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "code",
          color: "text-strong",
          children: C.current.toFixed(0)
        })]
      })]
    }), (Z || !t) && (0, i.jsxs)("div", {
      className: A.PG,
      children: [!t && (0, i.jsx)("div", {
        className: A.On,
        children: (0, i.jsx)(u.dOG, {
          checked: Z,
          onChange: e => B(e)
        })
      }), (0, i.jsx)(s.m, {
        position: "left",
        text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
        children: (0, i.jsx)("div", {
          children: (0, i.jsxs)(u.Text, {
            variant: "text-md/normal",
            color: "text-subtle",
            className: A.e0,
            children: ["Idle Frame Delta:", " ", (0, i.jsxs)(u.Text, {
              tag: "span",
              variant: "code",
              color: M > 1 ? "text-feedback-critical" : "text-strong",
              children: [M.toFixed(2), "ms"]
            })]
          })
        })
      })]
    }), k && (0, i.jsx)(s.m, {
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
    }), O && (0, i.jsx)(u.Text, {
      tag: "span",
      variant: "code",
      color: "text-feedback-positive",
      children: "(Using GPU Priority - Realtime)"
    }), !t && (0, i.jsx)("div", {
      className: A.m8,
      children: (0, i.jsx)(f.A, {
        children: (0, i.jsx)(u.Button, {
          variant: "primary",
          text: "Reset Frame Data",
          onClick: z
        })
      })
    })]
  })
}