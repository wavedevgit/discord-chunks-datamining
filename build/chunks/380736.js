/** Chunk was on 12416 **/
n.d(t, {
  QR: () => O,
  Yj: () => x,
  ZP: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(642128),
  s = n(442837),
  c = n(481060),
  u = n(13245),
  d = n(145597),
  f = n(809357),
  m = n(691891),
  p = n(44359),
  h = n(333031),
  b = n(610394),
  v = n(693091),
  g = n(981631),
  y = n(388032),
  E = n(563797);

function O(e, t, n) {
  return (0, r.jsx)(S, {
    keybind: e,
    message: t,
    messageWithoutKeybind: n
  })
}

function S(e) {
  let {
    keybind: t,
    message: n,
    messageWithoutKeybind: i
  } = e;
  return (0, f.o)() ? y.NW.format(n, {
    keybind: t,
    keybindHook: e => (0, r.jsx)(p.Z, {
      keybind: t
    }, t.join("+"))
  }) : i
}

function j(e) {
  e.currentTarget.scrollTo(0, 0)
}
let x = i.memo(function(e) {
  let {
    maxBodyLines: t,
    expand: n = !1,
    onNotificationShow: l,
    onDismissClick: u,
    onConfirmClick: f,
    onCancelClick: p,
    onNotificationClick: h,
    hint: v,
    cancelText: O,
    confirmText: S,
    icon: x,
    body: Z,
    title: C,
    renderFooter: w,
    contentOpacity: P,
    status: N,
    containerRef: I,
    className: _,
    wrapperClassName: R
  } = e, [T, A] = i.useState(!1), D = n || T || N === g._1z.FOCUSED, k = (0, s.e7)([b.ZP], () => b.ZP.isInputLocked((0, d.getPID)()));
  i.useEffect(() => {
    null == l || l()
  }, [l]);
  let M = i.useCallback(e => {
      e.stopPropagation(), null == u || u(e)
    }, [u]),
    L = i.useCallback(e => {
      e.stopPropagation(), null == f || f(e)
    }, [f]),
    W = i.useCallback(e => {
      e.stopPropagation(), null == p || p(e)
    }, [p]),
    F = i.useCallback(() => {
      A(!0)
    }, []),
    U = i.useCallback(() => {
      A(!1)
    }, []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: o()(E.overflowWrapper, R),
      onScroll: j,
      children: (0, r.jsx)(c.P3F, {
        innerRef: I,
        ignoreKeyPress: !0,
        onMouseOver: F,
        onMouseLeave: U,
        onClick: h,
        className: o()(E.container, {
          [E.clickable]: null != h
        }, _),
        children: function() {
          let e = null == w ? void 0 : w(D, k);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(a.animated.div, {
              className: E.iconAndDetails,
              style: {
                opacity: P
              },
              children: [null == x ? null : "string" == typeof x ? (0, r.jsx)(c.qEK, {
                src: x,
                size: c.EFr.SIZE_40,
                className: E.avatar,
                "aria-hidden": !0
              }) : (0, r.jsx)("div", {
                className: E.avatar,
                children: x
              }), (0, r.jsxs)("div", {
                className: E.details,
                children: [(0, r.jsx)(c.Text, {
                  color: "interactive-normal",
                  variant: "text-sm/semibold",
                  lineClamp: 2,
                  children: C
                }), null != Z ? (0, r.jsx)(c.Text, {
                  color: "interactive-normal",
                  variant: "text-sm/normal",
                  lineClamp: null != t ? t * (D ? 2 : 1) : void 0,
                  children: Z
                }) : null, function() {
                  let e = "function" == typeof v ? v(D, k) : v;
                  return null != v ? (0, r.jsx)(c.Text, {
                    className: E.hint,
                    color: "text-muted",
                    variant: "text-xxs/medium",
                    children: e
                  }) : null
                }(), null == f && null == p ? null : (0, r.jsxs)("div", {
                  className: E.buttonContainer,
                  children: [null != f ? (0, r.jsx)(c.zxk, {
                    className: E.button,
                    size: c.zxk.Sizes.SMALL,
                    color: c.zxk.Colors.GREEN,
                    onClick: L,
                    children: null != S ? S : y.NW.string(y.t.BddRzc)
                  }) : null, null != p ? (0, r.jsx)(c.zxk, {
                    className: E.button,
                    size: c.zxk.Sizes.SMALL,
                    look: c.zxk.Looks.OUTLINED,
                    color: c.zxk.Colors.PRIMARY,
                    onClick: W,
                    children: null != O ? O : y.NW.string(y.t["ETE/oK"])
                  }) : null]
                })]
              })]
            }), null != e && (0, r.jsx)(c.P3F, {
              className: E.footer,
              ignoreKeyPress: !0,
              onClick: e => e.stopPropagation(),
              children: e
            })]
          })
        }()
      })
    }), (0, r.jsx)(m.Z, {
      className: E.dismissButton,
      onDismiss: M,
      "aria-label": y.NW.string(y.t.LnEgqa)
    })]
  })
});

function Z(e) {
  let {
    springs: {
      opacity: t,
      scale: n,
      transform: i,
      height: l
    },
    index: o,
    children: s,
    locked: c
  } = e;
  return (0, r.jsx)(a.animated.div, {
    className: E.animationWrapper,
    style: {
      pointerEvents: c && 0 !== o ? "none" : "auto",
      zIndex: Math.max(5 - o, 0),
      opacity: t,
      transform: i.to(e => "translate3d(0, ".concat(e, "px, 0)")),
      scale: n.to([0, 1], [.7, 1]),
      height: l
    },
    children: s
  })
}

function C(e) {
  var t, n;
  let {
    notification: l,
    index: o,
    locked: a,
    transitionState: s,
    cleanUp: c
  } = e, {
    id: d,
    props: {
      onNotificationShow: f,
      onDismissClick: m,
      onNotificationClick: p,
      onConfirmClick: b,
      onCancelClick: g,
      renderFooter: y
    }
  } = l, O = i.useCallback(() => {
    f(d)
  }, [f, d]), S = i.useCallback(e => {
    u.Z.updateNotificationStatus(d), null == m || m(e, d)
  }, [d, m]), j = i.useCallback(e => {
    null == p || p(e, d)
  }, [p, d]), C = i.useCallback(e => {
    null == b || b(e, d)
  }, [b, d]), w = i.useCallback(e => {
    null == g || g(e, d)
  }, [g, d]), P = i.useCallback((e, t) => null == y ? void 0 : y(e, d, t), [y, d]), {
    props: {
      onNotificationShow: N,
      onDismissClick: I,
      renderFooter: _,
      onNotificationClick: R,
      onConfirmClick: T,
      onCancelClick: A
    },
    status: D
  } = l, k = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(l.props, ["onNotificationShow", "onDismissClick", "renderFooter", "onNotificationClick", "onConfirmClick", "onCancelClick"]), {
    ref: M,
    springs: L
  } = (0, v.X4)(l.id, s, c);
  return (0, r.jsx)(Z, {
    transitionState: s,
    springs: L,
    index: o,
    locked: a,
    children: (0, r.jsx)(h.Z, {
      observe: 0 === o,
      className: E.clickZone,
      children: (0, r.jsx)(x, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({}, k), n = n = {
        title: "function" == typeof k.title ? k.title(S) : k.title,
        containerRef: M,
        notificationId: l.id,
        onNotificationShow: 0 === o ? O : void 0,
        onDismissClick: S,
        onNotificationClick: null != p ? j : void 0,
        onConfirmClick: null != b ? C : void 0,
        onCancelClick: null != g ? w : void 0,
        renderFooter: P,
        expand: !1,
        index: o,
        locked: a,
        status: D,
        contentOpacity: L.contentOpacity
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    })
  })
}