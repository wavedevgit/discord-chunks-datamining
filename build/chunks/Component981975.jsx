/** Chunk was on 64982 **/
/** chunk id: 981975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./539854.js"), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk275759 = require("./275759.js"),
  Chunk63063 = require("./63063.js"),
  Chunk243730 = require("./243730.js"),
  Chunk84058 = require("./84058.js"),
  Chunk103576 = require("./103576.js"),
  Chunk95242 = require("./95242.js"),
  Chunk530198 = require("./530198.jsx"),
  Chunk420966 = require("./420966.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk144563 = require("./144563.js"),
  Chunk21321 = require("./21321.js");

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

function I(e, t) {
  return t !== g.O1.AND ? Object.values(o().groupBy(e, e => "".concat(e.connectionType, ":").concat(e.applicationId))) : 0 === e.length ? [] : [
    [...e]
  ]
}

function S(e) {
  let {
    handleAddVerificationClicked: t,
    locked: n
  } = e;
  return (0, r.jsxs)("div", {
    className: y.headerNoConfigContainer,
    children: [(0, r.jsx)(d.Heading, {
      className: y.headerHeading,
      variant: "eyebrow",
      children: C.intl.string(C.t.nMir27)
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      className: y.headerNoConfigSubtitle,
      children: C.intl.format(C.t.q5f7tK, {
        helpdeskArticleUrl: m.Z.getArticleURL(v.BhN.CONNECTION_DETAILS_ADMIN)
      })
    }), (0, r.jsx)(d.Button, {
      disabled: n,
      onClick: t,
      text: C.intl.string(C.t["OSvW5+"]),
      fullWidth: true,
      variant: "primary"
    })]
  })
}

function T(e) {
  let {
    guild: t,
    role: n,
    locked: l,
    setSelectedSection: s,
    integrations: o
  } = e, {
    headerHeight: T,
    headerRef: P
  } = (0, b.Z)(0), {
    scrolledToTop: w,
    handleScroll: Z
  } = (0, j.V)(), R = (0, c.e7)([p.Z], () => {
    var e;
    return null == (e = p.Z.getRoleMemberCount(t.id)) ? true : e[n.id]
  }, [n.id, t.id]), D = (0, c.Wu)([h.Z], () => {
    var e;
    return null != (e = h.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) ? e : []
  }), A = D.length > 1 ? g.O1.OR : g.O1.AND, L = i.useMemo(() => A === g.O1.OR ? D.flat() : null != D && D.length > 0 ? D[0] : [], [A, D]), k = i.useMemo(() => new Set(L.map(e => e.connectionType)), [L]);

  function G(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : true,
      r = [...L];
    r.push({
      connectionType: e,
      connectionMetadataField: true,
      applicationId: t,
      operator: true,
      value: true
    }), (0, f.d_)(n.id, I(r, A))
  }

  function M() {
    u.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: e => G(e),
      excludedPlatformTypes: k,
      integrations: o,
      onCompleteApplication: e => G(O.Kt, e)
    })
  }
  let U = null;
  if (0 === L.length) U = (0, r.jsx)(S, {
    handleAddVerificationClicked: M,
    locked: l
  });
  else if (L.length > 0) {
    var B;
    let e = null;
    L.length < 10 && (e = (0, r.jsx)(d.Button, {
      disabled: l,
      onClick: M,
      text: C.intl.string(C.t["OSvW5+"]),
      icon: d.oFk,
      fullWidth: true,
      variant: "secondary"
    })), U = (0, r.jsxs)(r.Fragment, {
      children: [(B = () => (0, f.d_)(n.id, []), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: y.headerTitleContainer,
          children: [(0, r.jsx)("div", {
            className: y.headerTitleTextContainer,
            children: (0, r.jsx)(d.Heading, {
              variant: "eyebrow",
              children: C.intl.string(C.t.nMir27)
            })
          }), (0, r.jsx)(d.Avr, {
            variant: "critical",
            onClick: B,
            disabled: l,
            text: C.intl.string(C.t.ntW1cc),
            textVariant: "text-sm/semibold"
          })]
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: C.intl.format(C.t.q5f7tK, {
            helpdeskArticleUrl: m.Z.getArticleURL(v.BhN.CONNECTION_DETAILS_ADMIN)
          })
        })]
      })), function(e, t, n, i, l) {
        let a = I(i, g.O1.OR);
        return (0, r.jsx)(d.FXm, {
          label: C.intl.string(C.t.Xs7PHX),
          options: [{
            name: C.intl.string(C.t.W3iY58),
            value: g.O1.OR
          }, {
            name: C.intl.string(C.t.gHXS9A),
            value: g.O1.AND
          }],
          onChange: e => l(i, e),
          value: n,
          disabled: e || a.length < 2
        })
      }(l, n.id, A, L, (e, t) => (0, f.d_)(n.id, I(e, t))), function(e, t, n, i, l) {
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
          className: y.configurationsContainer,
          children: Array.from(s.values()).map(e => (0, r.jsx)(x.Z, {
            configurationItems: e,
            onConfigurationChange: a,
            locked: n,
            integrations: l
          }, e[0].configuration.connectionType + ":" + e[0].index))
        })
      }(L, e => (0, f.d_)(n.id, I(e, A)), l, n.id, o), e]
    })
  }
  return (0, r.jsx)(d.yWw, {
    className: y.scroller,
    style: {
      scrollPaddingTop: T
    },
    onScroll: Z,
    children: (0, r.jsxs)("div", {
      className: N.contentWidth,
      children: [(0, r.jsx)("div", {
        className: a()(N.header, N.stickyHeader, {
          [N.stickyHeaderElevated]: !w
        }),
        ref: P,
        children: (0, r.jsx)(j.Z, {
          guild: t,
          role: n,
          selectedSection: _.ZI.VERIFICATIONS,
          setSelectedSection: s
        })
      }), (null != R ? R : 0) > 0 ? (0, r.jsxs)("div", {
        className: y.warningContainer,
        children: [(0, r.jsx)(d.Mgn, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: y.warningIcon
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: C.intl.string(C.t["2aFeef"])
        })]
      }) : null, U]
    })
  })
}