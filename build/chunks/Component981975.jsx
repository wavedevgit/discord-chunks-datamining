/** Chunk was on 22988 **/
/** chunk id: 981975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./539854.js"), require("./472816.js"), require("./794429.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk275759 = require("./275759.js"),
  Chunk313201 = require("./313201.js"),
  Chunk63063 = require("./63063.js"),
  Chunk243730 = require("./243730.js"),
  Chunk764260 = require("./764260.js"),
  Chunk946724 = require("./946724.js"),
  Chunk95242 = require("./95242.js"),
  Chunk530198 = require("./530198.jsx"),
  Chunk420966 = require("./420966.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk419353 = require("./419353.js"),
  Chunk877248 = require("./877248.js");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let S = (0, Chunk313201.hQ)();

function T(e, t) {
  return t !== m.O1.AND ? Object.values(o().groupBy(e, e => "".concat(e.connectionType, ":").concat(e.applicationId))) : 0 === e.length ? [] : [
    [...e]
  ]
}

function P(e) {
  let {
    handleAddVerificationClicked: t,
    locked: n
  } = e;
  return (0, r.jsxs)("div", {
    className: N.headerNoConfigContainer,
    children: [(0, r.jsx)(d.X6q, {
      className: N.headerHeading,
      variant: "eyebrow",
      children: C.intl.string(C.t.nMir29)
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      className: N.headerNoConfigSubtitle,
      children: C.intl.format(C.t.q5f7tL, {
        helpdeskArticleUrl: p.Z.getArticleURL(O.BhN.CONNECTION_DETAILS_ADMIN)
      })
    }), (0, r.jsx)(d.zxk, {
      disabled: n,
      onClick: t,
      text: C.intl.string(C.t["OSvW5+"]),
      fullWidth: true,
      variant: "primary"
    })]
  })
}

function w(e) {
  let {
    guild: t,
    role: n,
    locked: l,
    setSelectedSection: s,
    integrations: o
  } = e, {
    headerHeight: g,
    headerRef: w
  } = (0, x.Z)(0), {
    scrolledToTop: R,
    handleScroll: Z
  } = (0, v.V)(), D = (0, c.e7)([h.Z], () => {
    var e;
    return null == (e = h.Z.getRoleMemberCount(t.id)) ? true : e[n.id]
  }, [n.id, t.id]), A = (0, c.Wu)([b.Z], () => {
    var e;
    return null != (e = b.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) ? e : []
  }), k = A.length > 1 ? m.O1.OR : m.O1.AND, L = i.useMemo(() => k === m.O1.OR ? A.flat() : null != A && A.length > 0 ? A[0] : [], [k, A]), M = i.useMemo(() => new Set(L.map(e => e.connectionType)), [L]);

  function G(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : true,
      r = [...L];
    r.push({
      connectionType: e,
      connectionMetadataField: true,
      applicationId: t,
      operator: true,
      value: true
    }), (0, f.d_)(n.id, T(r, k))
  }

  function U() {
    u.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: e => G(e),
      excludedPlatformTypes: M,
      integrations: o,
      onCompleteApplication: e => G(y.Kt, e)
    })
  }
  let B = null;
  if (0 === L.length) B = (0, r.jsx)(P, {
    handleAddVerificationClicked: U,
    locked: l
  });
  else if (L.length > 0) {
    var F;
    let e = null;
    L.length < 10 && (e = (0, r.jsx)(d.zxk, {
      disabled: l,
      onClick: U,
      text: C.intl.string(C.t["OSvW5+"]),
      icon: d.oFk,
      fullWidth: true,
      variant: "secondary"
    })), B = (0, r.jsxs)(r.Fragment, {
      children: [(F = () => (0, f.d_)(n.id, []), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: N.headerTitleContainer,
          children: [(0, r.jsx)("div", {
            className: N.headerTitleTextContainer,
            children: (0, r.jsx)(d.X6q, {
              variant: "eyebrow",
              children: C.intl.string(C.t.nMir29)
            })
          }), (0, r.jsx)(d.Avr, {
            variant: "critical",
            onClick: F,
            disabled: l,
            text: C.intl.string(C.t.ntW1cX),
            textVariant: "text-sm/semibold"
          })]
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: C.intl.format(C.t.q5f7tL, {
            helpdeskArticleUrl: p.Z.getArticleURL(O.BhN.CONNECTION_DETAILS_ADMIN)
          })
        })]
      })), function(e, t, n, i, l) {
        let a = T(i, m.O1.OR);
        return (0, r.jsx)(d.xJW, {
          className: N.operatorContainer,
          title: C.intl.string(C.t.Xs7PHR),
          children: (0, r.jsx)(d.FXm, {
            options: [{
              name: C.intl.string(C.t["W3iY5+"]),
              value: m.O1.OR
            }, {
              name: C.intl.string(C.t.gHXS9P),
              value: m.O1.AND
            }],
            onChange: e => l(i, e.value),
            value: n,
            disabled: e || a.length < 2,
            "aria-labelledby": S
          })
        })
      }(l, n.id, k, L, (e, t) => (0, f.d_)(n.id, T(e, t))), function(e, t, n, i, l) {
        function a(n, r) {
          let i = [];
          for (let t of e) i.push(E({}, t));
          if (null == n) {
            let t = e[r];
            null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? i = i.filter(e => null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId) : i.splice(r, 1)
          } else false === r ? i.push(n) : r >= 0 && (i[r] = n);
          t(i)
        }
        let s = new Map;
        for (let t of (e.forEach((e, t) => {
            let n = "".concat(e.connectionType, ":").concat(e.applicationId);
            if (s.has(n)) {
              let r = s.get(n);
              null == r || r.push({
                index: t,
                configuration: e
              })
            } else s.set(n, [{
              index: t,
              configuration: e
            }])
          }), s.values())) {
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
            }(E({}, t[0].configuration), {
              connectionMetadataField: true,
              operator: true,
              value: true
            }),
            r = e.push(n);
          t.push({
            index: r - 1,
            configuration: n
          })
        }
        return (0, r.jsx)("div", {
          className: N.configurationsContainer,
          children: Array.from(s.values()).map(e => (0, r.jsx)(j.Z, {
            configurationItems: e,
            onConfigurationChange: a,
            locked: n,
            integrations: l
          }, e[0].configuration.connectionType + ":" + e[0].index))
        })
      }(L, e => (0, f.d_)(n.id, T(e, k)), l, n.id, o), e]
    })
  }
  return (0, r.jsx)(d.yWw, {
    className: N.scroller,
    style: {
      scrollPaddingTop: g
    },
    onScroll: Z,
    children: (0, r.jsxs)("div", {
      className: I.contentWidth,
      children: [(0, r.jsx)("div", {
        className: a()(I.header, I.stickyHeader, {
          [I.stickyHeaderElevated]: !R
        }),
        ref: w,
        children: (0, r.jsx)(v.Z, {
          guild: t,
          role: n,
          selectedSection: _.ZI.VERIFICATIONS,
          setSelectedSection: s
        })
      }), (null != D ? D : 0) > 0 ? (0, r.jsxs)("div", {
        className: N.warningContainer,
        children: [(0, r.jsx)(d.Mgn, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: N.warningIcon
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: C.intl.string(C.t["2aFeeX"])
        })]
      }) : null, B]
    })
  })
}