/** Chunk was on 1272 **/
/** chunk id: 596957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./415506.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk529103 = require("./529103.js"),
  Chunk194359 = require("./194359.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk795448 = require("./795448.js"),
  Chunk699516 = require("./699516.js"),
  Chunk974042 = require("./974042.js"),
  Chunk451478 = require("./451478.js"),
  Chunk701861 = require("./701861.jsx"),
  Chunk437314 = require("./437314.jsx"),
  Chunk696577 = require("./696577.jsx"),
  Chunk163417 = require("./163417.jsx"),
  Chunk830880 = require("./830880.jsx"),
  Chunk492347 = require("./492347.jsx"),
  Chunk42575 = require("./42575.jsx"),
  Chunk617015 = require("./617015.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk983703 = require("./983703.js");

function P(e) {
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

function j(e, t) {
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
}
let x = [];

function A() {
  Chunk529103.Z.transitionToSection(Chunk981631.pJs.ADD_FRIEND, {
    explicit: true
  })
}

function Z() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("36312").then(require.bind(require, 153932));
    return t => (0, r.jsx)(e, P({}, t))
  })
}

function w(e) {
  let {
    section: t,
    showSpamCta: n
  } = e, l = i.useMemo(() => n ? Z : t !== S.pJs.PENDING ? A : true, [n, t]);
  return (0, r.jsx)("div", {
    className: N.emptyStateContainer,
    children: (0, r.jsx)(b.Z, {
      type: t,
      onClick: l
    }, t)
  })
}
let L = function(e) {
  let {
    titleId: t
  } = e, {
    analyticsLocations: n
  } = (0, d.ZP)(u.Z.FRIENDS_LIST), {
    rows: s,
    section: A
  } = (0, l.cj)([h.ZP], () => h.ZP.getState()), L = (0, l.e7)([g.Z], () => g.Z.isFocused()), {
    relationshipCount: R,
    hasBlockedOrIgnored: D
  } = (0, l.cj)([m.Z], () => ({
    relationshipCount: m.Z.getRelationshipCount(),
    hasBlockedOrIgnored: m.Z.getBlockedOrIgnoredIDs().length > 0
  })), [M, k] = i.useState(() => {
    let e = {};
    for (let t of Object.values(S.pJs)) e[t] = "";
    return e
  }), U = i.useCallback(e => {
    let {
      key: t
    } = e, n = function(e, t) {
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
    }(e, ["key"]);
    switch (A) {
      case S.pJs.PENDING:
        return (0, r.jsx)(E.Z, j(P({}, n), {
          isFocused: L
        }), t);
      case S.pJs.SUGGESTIONS:
        return (0, r.jsx)(v.Z, j(P({}, n), {
          isFocused: L
        }), t);
      case S.pJs.ONLINE:
      case S.pJs.ALL:
      default:
        return (0, r.jsx)(_.Z, j(P({}, n), {
          isFocused: L
        }), t)
    }
  }, [L, A]), G = i.useCallback(e => {
    k(j(P({}, M), {
      [A]: e
    }))
  }, [M, A]), B = i.useCallback(() => {
    k(j(P({}, M), {
      [A]: ""
    }))
  }, [M, A]), H = i.useMemo(() => A === S.pJs.PENDING && (s.filter(S.pJs.SPAM).length > 0 || s.filter(S.pJs.PENDING_IGNORED).length > 0), [s, A]), V = i.useMemo(() => s.filter(A, M[A]), [s, M, A]), F = A === S.pJs.PENDING, z = i.useMemo(() => {
    if (!F) return x;
    let e = [];
    return V.forEach(t => {
      let {
        applicationId: n
      } = t;
      null != n && e.push(n)
    }), e
  }, [F, V]);
  (0, p.Z)(z, F);
  let Y = i.useMemo(() => {
      if (A !== S.pJs.PENDING) return [V];
      {
        let e = [],
          t = [];
        return V.forEach(n => {
          n.type === S.OGo.PENDING_INCOMING ? e.push(n) : n.type === S.OGo.PENDING_OUTGOING && t.push(n)
        }), [e, t]
      }
    }, [V, A]),
    W = i.useMemo(() => V.filter(e => e.type === S.OGo.PENDING_INCOMING).length, [V]),
    q = A === S.pJs.PENDING && W > 0 && W >= C.yf,
    K = i.useCallback(e => {
      e.stopPropagation(), o.Z.confirmClearPendingRelationships(W)
    }, [W]),
    Q = i.useCallback(e => {
      let n = function(e, t, n) {
        switch (e) {
          case S.pJs.ONLINE:
            return T.intl.formatToPlainString(T.t.BagU2U, {
              online: t.toString()
            });
          case S.pJs.PENDING:
            if (0 === n) return T.intl.formatToPlainString(T.t["g+3FIa"], {
              count: t.toString()
            });
            if (1 === n) return T.intl.formatToPlainString(T.t.npJsRl, {
              count: t.toString()
            });
            throw Error("Unexpected pending friend requests section index: ".concat(n));
          case S.pJs.SUGGESTIONS:
            return T.intl.formatToPlainString(T.t["DYMZ/p"], {
              count: t.toString()
            });
          default:
            return T.intl.formatToPlainString(T.t.rHRrhC, {
              count: t.toString()
            })
        }
      }(A, Y[e].length, e);
      return A === S.pJs.PENDING && 0 === e ? (0, r.jsxs)("div", {
        className: N.sectionTitle,
        children: [(0, r.jsx)(y.Z, {
          id: t,
          title: n
        }), q && (0, r.jsx)("div", {
          className: N.clearButton,
          children: (0, r.jsx)(a.Avr, {
            text: T.intl.string(T.t.O8k7O4),
            onClick: K,
            "aria-label": T.intl.string(T.t.O8k7O4),
            textVariant: "text-sm/medium"
          })
        })]
      }, n) : (0, r.jsx)("div", {
        className: N.sectionTitle,
        children: (0, r.jsx)(y.Z, {
          id: t,
          title: n
        })
      }, n)
    }, [Y, A, t, q, K]);
  if (i.useEffect(() => {
      A === S.pJs.ALL && (0, f.d$)()
    }, [A]), 0 === V.length && "" === M[A]) return (0, r.jsx)(w, {
    section: A,
    showSpamCta: H
  });
  let J = "" !== M[A],
    X = 0 === V.length && J;
  return (0, r.jsx)(d.Gt, {
    value: n,
    children: (0, r.jsxs)(c.Z, {
      section: S.jXE.FRIENDS_LIST,
      children: [D && (0, r.jsx)(I.R, {}), (0, r.jsx)("div", {
        className: N.searchBar,
        children: (0, r.jsx)(a.E1j, {
          query: M[A],
          onChange: G,
          onClear: B
        })
      }), (0, r.jsx)(O.Z, {
        rows: Y,
        renderRow: U,
        renderSection: Q,
        sectionFilter: A,
        isVirtualizedList: R >= C.nG,
        hasSearchQuery: J,
        footer: H && !X ? (0, r.jsx)("div", {
          className: N.viewSpamButton,
          children: (0, r.jsx)(a.Avr, {
            text: T.intl.string(T.t.R40bU2),
            onClick: Z,
            textVariant: "text-xs/medium",
            variant: "secondary"
          })
        }) : null
      }), X && (0, r.jsx)("div", {
        className: N.emptyStateContainer,
        children: (0, r.jsx)(b.Z, {
          type: b.j.SECTION_NO_RESULTS
        }, A)
      })]
    })
  })
}