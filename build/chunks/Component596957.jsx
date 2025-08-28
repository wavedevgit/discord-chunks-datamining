/** Chunk was on 1272 **/
/** chunk id: 596957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./415506.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function A(e) {
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

function Z(e, t) {
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
let w = [];

function L() {
  Chunk529103.Z.transitionToSection(Chunk981631.pJs.ADD_FRIEND, {
    explicit: true
  })
}

function R() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("36312").then(require.bind(require, 153932));
    return t => (0, r.jsx)(e, A({}, t))
  })
}

function D(e) {
  let {
    section: t,
    showSpamCta: n
  } = e, l = i.useMemo(() => n ? R : t !== P.pJs.PENDING ? L : true, [n, t]);
  return (0, r.jsx)("div", {
    className: x.emptyStateContainer,
    children: (0, r.jsx)(y.Z, {
      type: t,
      onClick: l
    }, t)
  })
}
let k = function(e) {
  let {
    titleId: t
  } = e, {
    analyticsLocations: n
  } = (0, h.ZP)(f.Z.FRIENDS_LIST), {
    rows: l,
    section: u
  } = (0, o.cj)([_.ZP], () => _.ZP.getState()), L = (0, o.e7)([O.Z], () => O.Z.isFocused()), {
    relationshipCount: k,
    hasBlockedOrIgnored: M
  } = (0, o.cj)([b.Z], () => ({
    relationshipCount: b.Z.getRelationshipCount(),
    hasBlockedOrIgnored: b.Z.getBlockedOrIgnoredIDs().length > 0
  })), [U, G] = i.useState(() => {
    let e = {};
    for (let t of Object.values(P.pJs)) e[t] = "";
    return e
  }), B = i.useCallback(e => {
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
    switch (u) {
      case P.pJs.PENDING:
        return (0, r.jsx)(v.Z, Z(A({}, n), {
          isFocused: L
        }), t);
      case P.pJs.SUGGESTIONS:
        return (0, r.jsx)(N.Z, Z(A({}, n), {
          isFocused: L
        }), t);
      case P.pJs.ONLINE:
      case P.pJs.ALL:
      default:
        return (0, r.jsx)(E.Z, Z(A({}, n), {
          isFocused: L
        }), t)
    }
  }, [L, u]), V = i.useCallback(e => {
    G(Z(A({}, U), {
      [u]: e
    }))
  }, [U, u]), H = i.useCallback(() => {
    G(Z(A({}, U), {
      [u]: ""
    }))
  }, [U, u]), F = i.useMemo(() => u === P.pJs.PENDING && (l.filter(P.pJs.SPAM).length > 0 || l.filter(P.pJs.PENDING_IGNORED).length > 0), [l, u]), z = i.useMemo(() => l.filter(u, U[u]), [l, U, u]), W = u === P.pJs.PENDING, Y = i.useMemo(() => {
    if (!W) return w;
    let e = [];
    return z.forEach(t => {
      let {
        applicationId: n
      } = t;
      null != n && e.push(n)
    }), e
  }, [W, z]);
  (0, g.Z)(Y, W);
  let K = i.useMemo(() => {
      if (u !== P.pJs.PENDING) return [z];
      {
        let e = [],
          t = [];
        return z.forEach(n => {
          n.type === P.OGo.PENDING_INCOMING ? e.push(n) : n.type === P.OGo.PENDING_OUTGOING && t.push(n)
        }), [e, t]
      }
    }, [z, u]),
    q = i.useMemo(() => z.filter(e => e.type === P.OGo.PENDING_INCOMING).length, [z]),
    Q = u === P.pJs.PENDING && q > 0 && q >= T.yf,
    X = i.useCallback(e => {
      e.stopPropagation(), d.Z.confirmClearPendingRelationships(q)
    }, [q]),
    J = i.useCallback(e => {
      let n = function(e, t, n) {
        switch (e) {
          case P.pJs.ONLINE:
            return j.intl.formatToPlainString(j.t.BagU2d, {
              online: t.toString()
            });
          case P.pJs.PENDING:
            if (0 === n) return j.intl.formatToPlainString(j.t["g+3FIS"], {
              count: t.toString()
            });
            if (1 === n) return j.intl.formatToPlainString(j.t.npJsRk, {
              count: t.toString()
            });
            throw Error("Unexpected pending friend requests section index: ".concat(n));
          case P.pJs.SUGGESTIONS:
            return j.intl.formatToPlainString(j.t["DYMZ/v"], {
              count: t.toString()
            });
          default:
            return j.intl.formatToPlainString(j.t.rHRrhI, {
              count: t.toString()
            })
        }
      }(u, K[e].length, e);
      return u === P.pJs.PENDING && 0 === e ? (0, r.jsxs)("div", {
        className: x.sectionTitle,
        children: [(0, r.jsx)(S.Z, {
          id: t,
          title: n
        }), Q && (0, r.jsx)(s.zx, {
          look: s.iL.LINK,
          color: s.Tt.LINK,
          className: x.clearButton,
          size: s.zx.Sizes.TINY,
          onClick: X,
          "aria-label": j.intl.string(j.t.O8k7Oz),
          children: j.intl.string(j.t.O8k7Oz)
        })]
      }, n) : (0, r.jsx)("div", {
        className: x.sectionTitle,
        children: (0, r.jsx)(S.Z, {
          id: t,
          title: n
        })
      }, n)
    }, [K, u, t, Q, X]);
  if (i.useEffect(() => {
      u === P.pJs.ALL && (0, m.d$)()
    }, [u]), 0 === z.length && "" === U[u]) return (0, r.jsx)(D, {
    section: u,
    showSpamCta: F
  });
  let $ = "" !== U[u],
    ee = 0 === z.length && $;
  return (0, r.jsx)(h.Gt, {
    value: n,
    children: (0, r.jsxs)(p.Z, {
      section: P.jXE.FRIENDS_LIST,
      children: [M && (0, r.jsx)(C.R, {}), (0, r.jsx)(c.E1j, {
        className: a()(x.searchBar, ee ? x.searchEmptyState : null),
        query: U[u],
        onChange: V,
        onClear: H
      }), (0, r.jsx)(I.Z, {
        rows: K,
        renderRow: B,
        renderSection: J,
        sectionFilter: u,
        isVirtualizedList: k >= T.nG,
        hasSearchQuery: $,
        footer: F && !ee ? (0, r.jsx)(s.zx, {
          look: s.zx.Looks.LINK,
          color: x.viewSpamButtonColor,
          className: x.viewSpamButton,
          onClick: R,
          size: s.Ph.TINY,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: j.intl.string(j.t.R40bU1)
          })
        }) : null
      }), ee && (0, r.jsx)("div", {
        className: x.emptyStateContainer,
        children: (0, r.jsx)(y.Z, {
          type: y.j.SECTION_NO_RESULTS
        }, u)
      })]
    })
  })
}