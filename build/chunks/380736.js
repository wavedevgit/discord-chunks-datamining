/** Chunk was on 12416 **/
n.d(t, {
  Y: () => E,
  Z: () => x
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
  f = n(691891),
  m = n(333031),
  p = n(610394),
  h = n(693091),
  v = n(981631),
  b = n(388032),
  g = n(563797);

function y(e) {
  e.currentTarget.scrollTo(0, 0)
}
let E = i.memo(function(e) {
  let {
    maxBodyLines: t,
    expand: n = !1,
    onNotificationShow: l,
    onDismissClick: u,
    onConfirmClick: m,
    onCancelClick: h,
    onNotificationClick: E,
    hint: O,
    cancelText: S,
    confirmText: x,
    icon: j,
    body: C,
    title: Z,
    renderFooter: w,
    contentOpacity: P,
    status: N,
    containerRef: I,
    className: _,
    wrapperClassName: R
  } = e, [T, A] = i.useState(!1), D = n || T || N === v._1z.FOCUSED, k = (0, s.e7)([p.ZP], () => p.ZP.isInputLocked((0, d.getPID)()));
  i.useEffect(() => {
    null == l || l()
  }, [l]);
  let M = i.useCallback(e => {
      e.stopPropagation(), null == u || u(e)
    }, [u]),
    L = i.useCallback(e => {
      e.stopPropagation(), null == m || m(e)
    }, [m]),
    W = i.useCallback(e => {
      e.stopPropagation(), null == h || h(e)
    }, [h]),
    F = i.useCallback(() => {
      A(!0)
    }, []),
    U = i.useCallback(() => {
      A(!1)
    }, []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: o()(g.overflowWrapper, R),
      onScroll: y,
      children: (0, r.jsx)(c.P3F, {
        innerRef: I,
        ignoreKeyPress: !0,
        onMouseOver: F,
        onMouseLeave: U,
        onClick: E,
        className: o()(g.container, {
          [g.clickable]: null != E
        }, _),
        children: function() {
          let e = null == w ? void 0 : w(D, k);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(a.animated.div, {
              className: g.iconAndDetails,
              style: {
                opacity: P
              },
              children: [null == j ? null : "string" == typeof j ? (0, r.jsx)(c.qEK, {
                src: j,
                size: c.EFr.SIZE_40,
                className: g.avatar,
                "aria-hidden": !0
              }) : (0, r.jsx)("div", {
                className: g.avatar,
                children: j
              }), (0, r.jsxs)("div", {
                className: g.details,
                children: [(0, r.jsx)(c.Text, {
                  color: "interactive-normal",
                  variant: "text-sm/semibold",
                  lineClamp: 2,
                  children: Z
                }), null != C ? (0, r.jsx)(c.Text, {
                  color: "interactive-normal",
                  variant: "text-sm/normal",
                  lineClamp: null != t ? t * (D ? 2 : 1) : void 0,
                  children: C
                }) : null, function() {
                  let e = "function" == typeof O ? O(D, k) : O;
                  return null != O ? (0, r.jsx)(c.Text, {
                    className: g.hint,
                    color: "text-muted",
                    variant: "text-xxs/medium",
                    children: e
                  }) : null
                }(), null == m && null == h ? null : (0, r.jsxs)("div", {
                  className: g.buttonContainer,
                  children: [null != m ? (0, r.jsx)(c.zxk, {
                    className: g.button,
                    size: c.zxk.Sizes.SMALL,
                    color: c.zxk.Colors.GREEN,
                    onClick: L,
                    children: null != x ? x : b.NW.string(b.t.BddRzc)
                  }) : null, null != h ? (0, r.jsx)(c.zxk, {
                    className: g.button,
                    size: c.zxk.Sizes.SMALL,
                    look: c.zxk.Looks.OUTLINED,
                    color: c.zxk.Colors.PRIMARY,
                    onClick: W,
                    children: null != S ? S : b.NW.string(b.t["ETE/oK"])
                  }) : null]
                })]
              })]
            }), null != e && (0, r.jsx)(c.P3F, {
              className: g.footer,
              ignoreKeyPress: !0,
              onClick: e => e.stopPropagation(),
              children: e
            })]
          })
        }()
      })
    }), (0, r.jsx)(f.Z, {
      className: g.dismissButton,
      onDismiss: M,
      "aria-label": b.NW.string(b.t.LnEgqa)
    })]
  })
});

function O(e) {
  let {
    springs: {
      opacity: t,
      scale: n,
      transform: i,
      height: l
    },
    index: s,
    children: c,
    locked: u,
    animationWrapperClassName: d
  } = e;
  return (0, r.jsx)(a.animated.div, {
    className: o()(g.animationWrapper, d),
    style: {
      pointerEvents: u && 0 !== s ? "none" : "auto",
      zIndex: Math.max(5 - s, 0),
      opacity: t,
      transform: i.to(e => "translate3d(0, ".concat(e, "px, 0)")),
      scale: n.to([0, 1], [.7, 1]),
      height: l,
      maxWidth: 0 === s ? void 0 : "100%"
    },
    children: c
  })
}

function S(e) {
  let {
    observe: t,
    children: n
  } = e;
  return t ? (0, r.jsx)(m.Z, {
    className: g.clickZone,
    children: n
  }) : n
}

function x(e) {
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
      onConfirmClick: v,
      onCancelClick: b,
      renderFooter: g,
      animationWrapperClassName: y
    }
  } = l, x = i.useCallback(() => {
    f(d)
  }, [f, d]), j = i.useCallback(e => {
    u.Z.updateNotificationStatus(d), null == m || m(e, d)
  }, [d, m]), C = i.useCallback(e => {
    null == p || p(e, d)
  }, [p, d]), Z = i.useCallback(e => {
    null == v || v(e, d)
  }, [v, d]), w = i.useCallback(e => {
    null == b || b(e, d)
  }, [b, d]), P = i.useCallback((e, t) => null == g ? void 0 : g(e, d, t), [g, d]), {
    props: {
      onNotificationShow: N,
      onDismissClick: I,
      renderFooter: _,
      onNotificationClick: R,
      onConfirmClick: T,
      onCancelClick: A,
      disableClickableRegions: D = !1
    },
    status: k
  } = l, M = function(e, t) {
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
  }(l.props, ["onNotificationShow", "onDismissClick", "renderFooter", "onNotificationClick", "onConfirmClick", "onCancelClick", "disableClickableRegions"]), {
    ref: L,
    springs: W
  } = (0, h.X4)(l.id, s, c);
  return (0, r.jsx)(O, {
    transitionState: s,
    springs: W,
    index: o,
    locked: a,
    animationWrapperClassName: y,
    children: (0, r.jsx)(S, {
      observe: 0 === o && !D,
      children: (0, r.jsx)(E, (t = function(e) {
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
      }({}, M), n = n = {
        title: "function" == typeof M.title ? M.title(j) : M.title,
        containerRef: L,
        notificationId: l.id,
        onNotificationShow: 0 === o ? x : void 0,
        onDismissClick: j,
        onNotificationClick: null != p ? C : void 0,
        onConfirmClick: null != v ? Z : void 0,
        onCancelClick: null != b ? w : void 0,
        renderFooter: P,
        expand: !1,
        index: o,
        locked: a,
        status: k,
        contentOpacity: W.contentOpacity
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