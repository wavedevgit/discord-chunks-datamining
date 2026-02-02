/** Chunk was on 39048 **/
/** chunk id: 614164, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js"), require("./321073.js"), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk370480 = require("./370480.js"),
  Chunk975571 = require("./975571.js"),
  Chunk642133 = require("./642133.js"),
  Chunk636042 = require("./636042.js"),
  Chunk396816 = require("./396816.js"),
  Chunk785312 = require("./785312.js"),
  Chunk158720 = require("./158720.jsx"),
  Chunk316506 = require("./316506.jsx"),
  Chunk927573 = require("./927573.js"),
  Chunk652215 = require("./652215.js"),
  Chunk783419 = require("./783419.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk750730 = require("./750730.js"),
  Chunk261223 = require("./261223.js");

function N(e) {
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

function S(e, t) {
  return t !== g.jO.AND ? Object.values(o().groupBy(e, e => "".concat(e.connectionType, ":").concat(e.applicationId))) : 0 === e.length ? [] : [
    [...e]
  ]
}

function I(e) {
  let {
    handleAddVerificationClicked: t,
    locked: n
  } = e;
  return (0, r.jsxs)("div", {
    className: A.Gq,
    children: [(0, r.jsx)(d.Heading, {
      className: A.gg,
      variant: "eyebrow",
      children: y.intl.string(y.t.nMir27)
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      className: A.$L,
      children: y.intl.format(y.t.q5f7tK, {
        helpdeskArticleUrl: m.A.getArticleURL(O.MVz.CONNECTION_DETAILS_ADMIN)
      })
    }), (0, r.jsx)(d.Button, {
      disabled: n,
      onClick: t,
      text: y.intl.string(y.t["OSvW5+"]),
      fullWidth: true,
      variant: "primary"
    })]
  })
}

function C(e) {
  let {
    guild: t,
    role: n,
    locked: l,
    setSelectedSection: a,
    integrations: o
  } = e, {
    headerHeight: C,
    headerRef: T
  } = (0, b.A)(0), {
    scrolledToTop: P,
    handleScroll: w
  } = (0, j.u)(), R = (0, c.bG)([p.A], () => {
    var e;
    return null == (e = p.A.getRoleMemberCount(t.id)) ? true : e[n.id]
  }, [n.id, t.id]), D = (0, c.yK)([h.A], () => {
    var e;
    return null != (e = h.A.getEditedRoleConnectionConfigurationsMap().get(n.id)) ? e : []
  }), G = D.length > 1 ? g.jO.OR : g.jO.AND, L = i.useMemo(() => G === g.jO.OR ? D.flat() : null != D && D.length > 0 ? D[0] : [], [G, D]), k = i.useMemo(() => new Set(L.map(e => e.connectionType)), [L]);

  function M(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : true,
      r = [...L];
    r.push({
      connectionType: e,
      connectionMetadataField: true,
      applicationId: t,
      operator: true,
      value: true
    }), (0, f.pn)(n.id, S(r, G))
  }

  function U() {
    u.h.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: e => M(e),
      excludedPlatformTypes: k,
      integrations: o,
      onCompleteApplication: e => M(v.zR, e)
    })
  }
  let B = null;
  if (0 === L.length) B = (0, r.jsx)(I, {
    handleAddVerificationClicked: U,
    locked: l
  });
  else if (L.length > 0) {
    var F, H;
    let e, t = null;
    L.length < 10 && (t = (0, r.jsx)(d.Button, {
      disabled: l,
      onClick: U,
      text: y.intl.string(y.t["OSvW5+"]),
      icon: d.U1e,
      fullWidth: true,
      variant: "secondary"
    })), B = (0, r.jsxs)(r.Fragment, {
      children: [(F = () => (0, f.pn)(n.id, []), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: A.$$,
          children: [(0, r.jsx)("div", {
            className: A.Ir,
            children: (0, r.jsx)(d.Heading, {
              variant: "eyebrow",
              children: y.intl.string(y.t.nMir27)
            })
          }), (0, r.jsx)(d.QWc, {
            variant: "critical",
            onClick: F,
            disabled: l,
            text: y.intl.string(y.t.ntW1cc),
            textVariant: "text-sm/semibold"
          })]
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: y.intl.format(y.t.q5f7tK, {
            helpdeskArticleUrl: m.A.getArticleURL(O.MVz.CONNECTION_DETAILS_ADMIN)
          })
        })]
      })), (n.id, H = (e, t) => (0, f.pn)(n.id, S(e, t)), e = S(L, g.jO.OR), (0, r.jsx)(d.z6M, {
        label: y.intl.string(y.t.Xs7PHX),
        options: [{
          name: y.intl.string(y.t.W3iY58),
          value: g.jO.OR
        }, {
          name: y.intl.string(y.t.gHXS9A),
          value: g.jO.AND
        }],
        onChange: e => H(L, e),
        value: G,
        disabled: l || e.length < 2
      })), function(e, t, n, i, l) {
        function s(n, r) {
          let i = [];
          for (let t of e) i.push(N({}, t));
          if (null == n) {
            let t = e[r];
            null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? i = i.filter(e => null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId) : i.splice(r, 1)
          } else false === r ? i.push(n) : r >= 0 && (i[r] = n);
          t(i)
        }
        let a = new Map;
        for (let t of (e.forEach((e, t) => {
            let n = "".concat(e.connectionType, ":").concat(e.applicationId);
            if (a.has(n)) {
              let r = a.get(n);
              null == r || r.push({
                index: t,
                configuration: e
              })
            } else a.set(n, [{
              index: t,
              configuration: e
            }])
          }), a.values())) {
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
            }(N({}, t[0].configuration), {
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
          className: A.rr,
          children: Array.from(a.values()).map(e => (0, r.jsx)(x.A, {
            configurationItems: e,
            onConfigurationChange: s,
            locked: n,
            integrations: l
          }, e[0].configuration.connectionType + ":" + e[0].index))
        })
      }(L, e => (0, f.pn)(n.id, S(e, G)), l, n.id, o), t]
    })
  }
  return (0, r.jsx)(d.GtU, {
    className: A.XG,
    style: {
      scrollPaddingTop: C
    },
    onScroll: w,
    children: (0, r.jsxs)("div", {
      className: E.Q,
      children: [(0, r.jsx)("div", {
        className: s()(E.wx, E.ln, {
          [E.l6]: !P
        }),
        ref: T,
        children: (0, r.jsx)(j.A, {
          guild: t,
          role: n,
          selectedSection: _.T$.VERIFICATIONS,
          setSelectedSection: a
        })
      }), (null != R ? R : 0) > 0 ? (0, r.jsxs)("div", {
        className: A.UW,
        children: [(0, r.jsx)(d.EpV, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: A.QW
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: y.intl.string(y.t["2aFeef"])
        })]
      }) : null, B]
    })
  })
}