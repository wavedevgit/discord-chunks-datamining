/** Chunk was on 71447 **/
/** chunk id: 888987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  let {
    locked: t,
    pinned: n,
    anchorLeft: l
  } = e, A = (0, o.bG)([p.A], () => p.A.getSocket()), O = (0, o.bG)([m.A], () => m.A.isGPUBoosted());
  (0, d.ZX)();
  let E = (0, o.bG)([h.A], () => h.A.getWindow(g.f)),
    [v, b] = (0, d.DQ)(A),
    {
      currentFPS: S,
      averageFrameTime: x,
      timeSinceLastDrop: j,
      onResetFrameData: I,
      droppedFramesRef: N,
      renderedFrameCount: w,
      bufferFramecountRef: T,
      frameCheckerEffect: C
    } = (0, d.Dj)(true, v, true),
    [_, P, D] = (0, d.F5)(A),
    [R, L] = (0, d.km)(_, C, E),
    k = performance.now() - b.current < d.Jc,
    M = P(x, T.current);
  (0, u.Ay)(() => (R(), () => {
    L()
  }));
  let V = r.useCallback(() => {
      I(), D(), R()
    }, [I, D, R]),
    [U, z] = r.useState(true),
    [G, H] = r.useState(true),
    [Y, F] = r.useState(true),
    [K, Z] = r.useState(true),
    [W, B] = r.useState(true);
  return t && !n ? null : (0, i.jsxs)("div", {
    className: a()(y.st, !l && y.Hk),
    children: [(U || !t) && (0, i.jsxs)("div", {
      className: y.PG,
      children: [!t && (0, i.jsx)("div", {
        className: y.On,
        children: (0, i.jsx)(c.dOG, {
          checked: U,
          onChange: e => z(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: y.e0,
        children: ["FPS:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: S < 30 ? "text-feedback-critical" : S < 45 ? "text-feedback-warning" : "text-strong",
          children: S.toFixed(2)
        })]
      })]
    }), (G || !t) && (0, i.jsxs)("div", {
      className: y.PG,
      children: [!t && (0, i.jsx)("div", {
        className: y.On,
        children: (0, i.jsx)(c.dOG, {
          checked: G,
          onChange: e => H(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: y.e0,
        children: ["Frame Times:", " ", (0, i.jsxs)(c.Text, {
          tag: "span",
          variant: "code",
          color: x > 1.1 * d.L6 ? "text-feedback-warning" : "text-strong",
          children: [x.toFixed(2), "ms"]
        })]
      })]
    }), (Y || !t) && (0, i.jsxs)("div", {
      className: y.PG,
      children: [!t && (0, i.jsx)("div", {
        className: y.On,
        children: (0, i.jsx)(c.dOG, {
          checked: Y,
          onChange: e => F(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: y.e0,
        children: ["Dropped Frames:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: j < 2 ? "text-feedback-critical" : j < 5 ? "text-feedback-warning" : "text-strong",
          children: N.current
        }), (0, i.jsxs)(c.Text, {
          tag: "span",
          variant: "code",
          color: "text-subtle",
          className: y.af,
          children: ["(", (N.current / w.current * 100).toFixed(3), "%)"]
        })]
      })]
    }), (K || !t) && (0, i.jsxs)("div", {
      className: y.PG,
      children: [!t && (0, i.jsx)("div", {
        className: y.On,
        children: (0, i.jsx)(c.dOG, {
          checked: K,
          onChange: e => Z(e)
        })
      }), (0, i.jsxs)(c.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: y.e0,
        children: ["Rendered Frames:", " ", (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "code",
          color: "text-strong",
          children: w.current.toFixed(0)
        })]
      })]
    }), (W || !t) && (0, i.jsxs)("div", {
      className: y.PG,
      children: [!t && (0, i.jsx)("div", {
        className: y.On,
        children: (0, i.jsx)(c.dOG, {
          checked: W,
          onChange: e => B(e)
        })
      }), (0, i.jsx)(s.m, {
        position: "left",
        text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
        children: (0, i.jsx)("div", {
          children: (0, i.jsxs)(c.Text, {
            variant: "text-md/normal",
            color: "text-subtle",
            className: y.e0,
            children: ["Idle Frame Delta:", " ", (0, i.jsxs)(c.Text, {
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
      className: y.m8,
      children: (0, i.jsx)(f.A, {
        children: (0, i.jsx)(c.Button, {
          variant: "primary",
          text: "Reset Frame Data",
          onClick: V
        })
      })
    })]
  })
}