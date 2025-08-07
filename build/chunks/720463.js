/** Chunk was on 82081 **/
r.d(t, {
  E: () => P,
  WrappedBalanceWidgetEarnedOrbsCoachmarkModal: () => T
});
var n = r(255367),
  a = r(73800),
  o = r(120356),
  i = r.n(o),
  c = r(442837),
  s = r(481060),
  l = r(607070),
  b = r(70097),
  d = r(751648),
  u = r(790542),
  p = r(317257),
  m = r(970815),
  f = r(543936),
  h = r(622562),
  g = r(937860),
  _ = r(335346),
  O = r(981631),
  j = r(388032),
  x = r(806539),
  v = r(293401),
  y = r(447489),
  C = r(484885);
let k = () => {
    let e = (0, c.e7)([l.Z], () => l.Z.useReducedMotion);
    return (0, n.jsx)("div", {
      className: v.centerContent,
      children: e ? (0, n.jsx)("img", {
        src: y.Z,
        className: v.orbAsset,
        alt: "Orb"
      }) : (0, n.jsxs)(b.Z, {
        autoPlay: !0,
        loop: !0,
        className: v.orbAsset,
        children: [(0, n.jsx)("source", {
          src: C.Z,
          type: "video/webm"
        }), (0, n.jsx)("img", {
          src: y.Z,
          className: v.orbAsset,
          alt: "Orb"
        })]
      })
    })
  },
  P = e => {
    let {
      descriptionText: t = j.intl.string(j.t["6If1Cw"]),
      onClose: r = () => {}
    } = e;
    return (0, n.jsxs)("div", {
      className: i()(v.container, x.baseCardOutline),
      children: [(0, n.jsx)(g.s, {
        onClick: r
      }), (0, n.jsx)(_.V, {
        rightOffset: 20,
        invertTail: !0,
        tailSpineClassName: v.coachmarkTailSpine,
        tailTargetInnerClassName: v.coachmarkTailTargetInner
      }), (0, n.jsx)(k, {}), (0, n.jsx)("div", {
        className: v.contentContainer,
        children: (0, n.jsxs)("div", {
          className: v.textContainer,
          children: [(0, n.jsx)(s.X6q, {
            variant: "heading-md/bold",
            color: "header-primary",
            className: v.coachmarkTitle,
            children: j.intl.string(j.t["D/nzVl"])
          }), (0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            className: v.coachmarkDescription,
            children: t
          })]
        })
      })]
    })
  };

function w(e) {
  var {
    backgroundElementRef: t,
    onClickPill: r,
    onClose: o,
    onCloseCallback: i
  } = e;
  ! function(e, t) {
    if (null != e) {
      var r, n, a = function(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
      }
    }
  }(e, ["backgroundElementRef", "onClickPill", "onClose", "onCloseCallback"]);
  let {
    balance: c
  } = (0, u.A)(), s = a.useCallback(async () => {
    await (0, d.j2)(), await o(), i()
  }, [o, i]), l = a.useCallback(async () => {
    await s(), r()
  }, [r, s]);
  return (0, n.jsxs)(h.E9, {
    className: v.coachmarkModalContainer,
    backgroundElementRef: t,
    onGetBoundingRect: O.dG4,
    getOffsetsRelativeToElement: () => ({
      top: 0,
      right: 0
    }),
    minimumOffsets: {
      right: 12
    },
    fallbackAbsoluteOffsets: {
      top: 84,
      right: 32
    },
    children: [(0, n.jsx)(m.A4, {
      isInModalOverlay: !0,
      onClick: l,
      balance: c,
      balanceWidgetMode: p.b.DEFAULT
    }), (0, n.jsx)(P, {
      onClose: s
    })]
  })
}

function T(e) {
  return (0, n.jsx)(f.x, {
    errorSource: "ORBS_EARNED_ORBS_COACHMARK_MODAL",
    children: (0, n.jsx)(w, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n
        })
      }
      return e
    }({}, e))
  })
}