/** Chunk was on 37874 **/
n.d(t, {
  Z: () => O
}), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(442837),
  s = n(481060),
  c = n(493773),
  u = n(178821),
  d = n(38618),
  p = n(522474),
  f = n(333031),
  h = n(610394),
  g = n(501787),
  _ = n(233531);

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function v(e, t) {
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

function O(e) {
  let {
    locked: t,
    pinned: n,
    anchorLeft: o
  } = e, O = (0, a.e7)([d.Z], () => d.Z.getSocket()), b = (0, a.e7)([h.ZP], () => h.ZP.isGPUBoosted());
  (0, u.nU)();
  let y = (0, a.e7)([p.Z], () => p.Z.getWindow(g.$J)),
    [E, x] = (0, u.m8)(O),
    {
      currentFPS: S,
      averageFrameTime: I,
      timeSinceLastDrop: C,
      onResetFrameData: j,
      droppedFramesRef: w,
      renderedFrameCount: Z,
      bufferFramecountRef: N,
      frameCheckerEffect: P
    } = (0, u.d6)(!0, E, !0),
    [T, k, A] = (0, u.ZF)(O),
    [D, L] = (0, u.Y5)(T, P, y),
    R = performance.now() - x.current < u.MC,
    W = k(I, N.current);
  (0, c.ZP)(() => (D(), () => {
    L()
  }));
  let M = r.useCallback(() => {
      j(), A(), D()
    }, [j, A, D]),
    [z, V] = r.useState(!0),
    [U, F] = r.useState(!0),
    [B, G] = r.useState(!0),
    [H, Y] = r.useState(!0),
    [Q, K] = r.useState(!0);
  return t && !n ? null : (0, i.jsxs)("div", {
    className: l()(_.panelGroup, !o && _.rightAligned),
    children: [(z || !t) && (0, i.jsxs)("div", {
      className: _.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: _.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          size: 16,
          value: z,
          onChange: (e, t) => V(t)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: _.measurementText,
        children: ["FPS:", " ", (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: S < 30 ? "text-danger" : S < 45 ? "text-warning" : "text-primary",
          children: S.toFixed(2)
        })]
      })]
    }), (U || !t) && (0, i.jsxs)("div", {
      className: _.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: _.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          size: 16,
          value: U,
          onChange: (e, t) => F(t)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: _.measurementText,
        children: ["Frame Times:", " ", (0, i.jsxs)(s.Text, {
          tag: "span",
          variant: "code",
          color: I > 1.1 * u.tO ? "text-warning" : "text-primary",
          children: [I.toFixed(2), "ms"]
        })]
      })]
    }), (B || !t) && (0, i.jsxs)("div", {
      className: _.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: _.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          size: 16,
          value: B,
          onChange: (e, t) => G(t)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: _.measurementText,
        children: ["Dropped Frames:", " ", (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: C < 2 ? "text-danger" : C < 5 ? "text-warning" : "text-primary",
          children: w.current
        }), (0, i.jsxs)(s.Text, {
          tag: "span",
          variant: "code",
          color: "text-secondary",
          className: _.secondaryInfoText,
          children: ["(", (w.current / Z.current * 100).toFixed(3), "%)"]
        })]
      })]
    }), (H || !t) && (0, i.jsxs)("div", {
      className: _.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: _.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          size: 16,
          value: H,
          onChange: (e, t) => Y(t)
        })
      }), (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: _.measurementText,
        children: ["Rendered Frames:", " ", (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: "text-primary",
          children: Z.current.toFixed(0)
        })]
      })]
    }), (Q || !t) && (0, i.jsxs)("div", {
      className: _.measurement,
      children: [!t && (0, i.jsx)("div", {
        className: _.measurementCheckbox,
        children: (0, i.jsx)(s.XZJ, {
          size: 16,
          value: Q,
          onChange: (e, t) => K(t)
        })
      }), (0, i.jsx)(s.ua7, {
        position: "left",
        text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
        children: e => (0, i.jsx)("div", v(m({}, e), {
          children: (0, i.jsxs)(s.Text, {
            variant: "text-md/normal",
            color: "text-secondary",
            className: _.measurementText,
            children: ["Idle Frame Delta:", " ", (0, i.jsxs)(s.Text, {
              tag: "span",
              variant: "code",
              color: W > 1 ? "text-danger" : "text-primary",
              children: [W.toFixed(2), "ms"]
            })]
          })
        }))
      })]
    }), R && (0, i.jsx)(s.ua7, {
      position: "left",
      text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
      children: e => (0, i.jsx)("span", v(m({}, e), {
        children: (0, i.jsx)(s.Text, {
          tag: "span",
          variant: "code",
          color: "text-danger",
          children: "(Main App Backgrounded)"
        })
      }))
    }), b && (0, i.jsx)(s.Text, {
      tag: "span",
      variant: "code",
      color: "text-positive",
      children: "(Using GPU Priority - Realtime)"
    }), !t && (0, i.jsx)("div", {
      className: _.bottomPanelButton,
      children: (0, i.jsx)(f.Z, {
        children: (0, i.jsx)(s.zxk, {
          onClick: M,
          children: "Reset Frame Data"
        })
      })
    })]
  })
}