/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => D
}), n(47120), n(653041), n(86693), n(536091);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(392711),
  o = n.n(l),
  A = n(442837),
  c = n(481060),
  d = n(570140),
  u = n(275759),
  g = n(313201),
  f = n(63063),
  m = n(243730),
  p = n(764260),
  h = n(946724),
  C = n(95242),
  b = n(530198),
  v = n(420966),
  x = n(203377),
  N = n(981631),
  j = n(856651),
  E = n(388032),
  I = n(85177),
  O = n(104978);

function y(e) {
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
}
let w = (0, g.hQ)();

function P(e, t) {
  return t !== u.O1.AND ? Object.values(o().groupBy(e, e => "".concat(e.connectionType, ":").concat(e.applicationId))) : 0 === e.length ? [] : [
    [...e]
  ]
}

function B(e) {
  let {
    handleAddVerificationClicked: t,
    locked: n
  } = e;
  return (0, r.jsxs)("div", {
    className: I.headerNoConfigContainer,
    children: [(0, r.jsx)(c.X6q, {
      className: I.headerHeading,
      variant: "eyebrow",
      children: E.NW.string(E.t.nMir29)
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: E.NW.format(E.t.q5f7tL, {
        helpdeskArticleUrl: f.Z.getArticleURL(N.BhN.CONNECTION_DETAILS_ADMIN)
      })
    }), (0, r.jsx)(c.zxk, {
      disabled: n,
      className: I.addVerificationButton,
      size: c.zxk.Sizes.MEDIUM,
      look: c.zxk.Looks.FILLED,
      color: c.zxk.Colors.BRAND,
      onClick: t,
      children: E.NW.string(E.t["OSvW5+"])
    })]
  })
}

function D(e) {
  let {
    guild: t,
    role: n,
    locked: s,
    setSelectedSection: l,
    integrations: o
  } = e, {
    headerHeight: g,
    headerRef: D
  } = (0, C.Z)(0), {
    scrolledToTop: T,
    handleScroll: S
  } = (0, v.V)(), L = (0, A.e7)([m.Z], () => {
    var e;
    return null === (e = m.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[n.id]
  }, [n.id, t.id]), R = (0, A.Wu)([h.Z], () => {
    var e;
    return null !== (e = h.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) && void 0 !== e ? e : []
  }), Q = R.length > 1 ? u.O1.OR : u.O1.AND, W = i.useMemo(() => Q === u.O1.OR ? R.flat() : null != R && R.length > 0 ? R[0] : [], [Q, R]), Z = i.useMemo(() => new Set(W.map(e => e.connectionType)), [W]);

  function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
      r = [...W];
    r.push({
      connectionType: e,
      connectionMetadataField: void 0,
      applicationId: t,
      operator: void 0,
      value: void 0
    }), (0, p.d_)(n.id, P(r, Q))
  }

  function M() {
    d.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: e => k(e),
      excludedPlatformTypes: Z,
      integrations: o,
      onCompleteApplication: e => k(j.Kt, e)
    })
  }
  let _ = null;
  if (0 === W.length) _ = (0, r.jsx)(B, {
    handleAddVerificationClicked: M,
    locked: s
  });
  else if (W.length > 0) {
    var G;
    let e = null;
    W.length < 10 && (e = (0, r.jsx)(c.zxk, {
      className: a()(I.addVerificationButton, I.addVerificationButtonAppend),
      size: c.zxk.Sizes.LARGE,
      look: c.zxk.Looks.BLANK,
      color: c.zxk.Colors.LINK,
      onClick: M,
      disabled: s,
      children: (0, r.jsxs)("div", {
        className: I.addVerificationButtonAppendTextContainer,
        children: [(0, r.jsx)(c.oFk, {
          size: "xs",
          color: "currentColor"
        }), E.NW.string(E.t["OSvW5+"])]
      })
    })), _ = (0, r.jsxs)(r.Fragment, {
      children: [(G = () => (0, p.d_)(n.id, []), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: I.headerTitleContainer,
          children: [(0, r.jsx)("div", {
            className: I.headerTitleTextContainer,
            children: (0, r.jsx)(c.X6q, {
              variant: "eyebrow",
              children: E.NW.string(E.t.nMir29)
            })
          }), (0, r.jsx)(c.zxk, {
            className: I.headerTitleButton,
            size: c.zxk.Sizes.TINY,
            look: c.zxk.Looks.LINK,
            color: c.zxk.Colors.LINK,
            onClick: G,
            disabled: s,
            children: E.NW.string(E.t.ntW1cX)
          })]
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: E.NW.format(E.t.q5f7tL, {
            helpdeskArticleUrl: f.Z.getArticleURL(N.BhN.CONNECTION_DETAILS_ADMIN)
          })
        })]
      })), function(e, t, n, i, s) {
        let a = P(i, u.O1.OR);
        return (0, r.jsx)(c.xJW, {
          className: I.operatorContainer,
          title: E.NW.string(E.t.Xs7PHR),
          children: (0, r.jsx)(c.FXm, {
            options: [{
              name: E.NW.string(E.t["W3iY5+"]),
              value: u.O1.OR
            }, {
              name: E.NW.string(E.t.gHXS9P),
              value: u.O1.AND
            }],
            onChange: e => s(i, e.value),
            value: n,
            disabled: e || a.length < 2,
            "aria-labelledby": w
          })
        })
      }(s, n.id, Q, W, (e, t) => (0, p.d_)(n.id, P(e, t))), function(e, t, n, i, s) {
        function a(n, r) {
          let i = [];
          for (let t of e) i.push(y({}, t));
          if (null == n) {
            let t = e[r];
            null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? i = i.filter(e => null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId) : i.splice(r, 1)
          } else - 1 === r ? i.push(n) : r >= 0 && (i[r] = n);
          t(i)
        }
        let l = new Map;
        for (let t of (e.forEach((e, t) => {
            let n = "".concat(e.connectionType, ":").concat(e.applicationId);
            if (l.has(n)) {
              let r = l.get(n);
              null == r || r.push({
                index: t,
                configuration: e
              })
            } else l.set(n, [{
              index: t,
              configuration: e
            }])
          }), l.values())) {
          if (t.some(e => {
              let {
                configuration: t
              } = e;
              return null == t.connectionMetadataField && null == t.operator && null == t.value
            })) continue;
          let n = function(e, t) {
              return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }), e
            }(y({}, t[0].configuration), {
              connectionMetadataField: void 0,
              operator: void 0,
              value: void 0
            }),
            r = e.push(n);
          t.push({
            index: r - 1,
            configuration: n
          })
        }
        return (0, r.jsx)("div", {
          className: I.configurationsContainer,
          children: Array.from(l.values()).map(e => (0, r.jsx)(b.Z, {
            configurationItems: e,
            onConfigurationChange: a,
            locked: n,
            integrations: s
          }, e[0].configuration.connectionType + ":" + e[0].index))
        })
      }(W, e => (0, p.d_)(n.id, P(e, Q)), s, n.id, o), e]
    })
  }
  return (0, r.jsx)(c.yWw, {
    className: I.scroller,
    style: {
      scrollPaddingTop: g
    },
    onScroll: S,
    children: (0, r.jsxs)("div", {
      className: O.contentWidth,
      children: [(0, r.jsx)("div", {
        className: a()(O.header, O.stickyHeader, {
          [O.stickyHeaderElevated]: !T
        }),
        ref: D,
        children: (0, r.jsx)(v.Z, {
          guild: t,
          role: n,
          selectedSection: x.ZI.VERIFICATIONS,
          setSelectedSection: l
        })
      }), (null != L ? L : 0) > 0 ? (0, r.jsxs)("div", {
        className: I.warningContainer,
        children: [(0, r.jsx)(c.P4T, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: I.warningIcon
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: E.NW.string(E.t["2aFeeX"])
        })]
      }) : null, _]
    })
  })
}