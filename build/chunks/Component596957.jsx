/** Chunk was on 1272 **/
/** chunk id: 596957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./415506.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk494720 = require("./494720.js");

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

function x(e, t) {
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
let A = [];

function Z() {
  Chunk529103.Z.transitionToSection(Chunk981631.pJs.ADD_FRIEND, {
    explicit: true
  })
}

function w() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("36312").then(require.bind(require, 153932));
    return t => (0, r.jsx)(e, P({}, t))
  })
}

function L(e) {
  let {
    section: t,
    showSpamCta: n
  } = e, l = i.useMemo(() => n ? w : t !== T.pJs.PENDING ? Z : true, [n, t]);
  return (0, r.jsx)("div", {
    className: j.emptyStateContainer,
    children: (0, r.jsx)(O.Z, {
      type: t,
      onClick: l
    }, t)
  })
}
let R = function(e) {
  let {
    titleId: t
  } = e, {
    analyticsLocations: n
  } = (0, p.ZP)(d.Z.FRIENDS_LIST), {
    rows: s,
    section: Z
  } = (0, l.cj)([m.ZP], () => m.ZP.getState()), R = (0, l.e7)([b.Z], () => b.Z.isFocused()), {
    relationshipCount: D,
    hasBlockedOrIgnored: k
  } = (0, l.cj)([g.Z], () => ({
    relationshipCount: g.Z.getRelationshipCount(),
    hasBlockedOrIgnored: g.Z.getBlockedOrIgnoredIDs().length > 0
  })), [M, U] = i.useState(() => {
    let e = {};
    for (let t of Object.values(T.pJs)) e[t] = "";
    return e
  }), G = i.useCallback(e => {
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
    switch (Z) {
      case T.pJs.PENDING:
        return (0, r.jsx)(E.Z, x(P({}, n), {
          isFocused: R
        }), t);
      case T.pJs.SUGGESTIONS:
        return (0, r.jsx)(C.Z, x(P({}, n), {
          isFocused: R
        }), t);
      case T.pJs.ONLINE:
      case T.pJs.ALL:
      default:
        return (0, r.jsx)(_.Z, x(P({}, n), {
          isFocused: R
        }), t)
    }
  }, [R, Z]), B = i.useCallback(e => {
    U(x(P({}, M), {
      [Z]: e
    }))
  }, [M, Z]), V = i.useCallback(() => {
    U(x(P({}, M), {
      [Z]: ""
    }))
  }, [M, Z]), H = i.useMemo(() => Z === T.pJs.PENDING && (s.filter(T.pJs.SPAM).length > 0 || s.filter(T.pJs.PENDING_IGNORED).length > 0), [s, Z]), F = i.useMemo(() => s.filter(Z, M[Z]), [s, M, Z]), z = Z === T.pJs.PENDING, W = i.useMemo(() => {
    if (!z) return A;
    let e = [];
    return F.forEach(t => {
      let {
        applicationId: n
      } = t;
      null != n && e.push(n)
    }), e
  }, [z, F]);
  (0, f.Z)(W, z);
  let Y = i.useMemo(() => {
      if (Z !== T.pJs.PENDING) return [F];
      {
        let e = [],
          t = [];
        return F.forEach(n => {
          n.type === T.OGo.PENDING_INCOMING ? e.push(n) : n.type === T.OGo.PENDING_OUTGOING && t.push(n)
        }), [e, t]
      }
    }, [F, Z]),
    K = i.useMemo(() => F.filter(e => e.type === T.OGo.PENDING_INCOMING).length, [F]),
    q = Z === T.pJs.PENDING && K > 0 && K >= S.yf,
    Q = i.useCallback(e => {
      e.stopPropagation(), c.Z.confirmClearPendingRelationships(K)
    }, [K]),
    X = i.useCallback(e => {
      let n = function(e, t, n) {
        switch (e) {
          case T.pJs.ONLINE:
            return N.intl.formatToPlainString(N.t.BagU2d, {
              online: t.toString()
            });
          case T.pJs.PENDING:
            if (0 === n) return N.intl.formatToPlainString(N.t["g+3FIS"], {
              count: t.toString()
            });
            if (1 === n) return N.intl.formatToPlainString(N.t.npJsRk, {
              count: t.toString()
            });
            throw Error("Unexpected pending friend requests section index: ".concat(n));
          case T.pJs.SUGGESTIONS:
            return N.intl.formatToPlainString(N.t["DYMZ/v"], {
              count: t.toString()
            });
          default:
            return N.intl.formatToPlainString(N.t.rHRrhI, {
              count: t.toString()
            })
        }
      }(Z, Y[e].length, e);
      return Z === T.pJs.PENDING && 0 === e ? (0, r.jsxs)("div", {
        className: j.sectionTitle,
        children: [(0, r.jsx)(I.Z, {
          id: t,
          title: n
        }), q && (0, r.jsx)(a.zx, {
          look: a.iL.LINK,
          color: a.Tt.LINK,
          className: j.clearButton,
          size: a.zx.Sizes.TINY,
          onClick: Q,
          "aria-label": N.intl.string(N.t.O8k7Oz),
          children: N.intl.string(N.t.O8k7Oz)
        })]
      }, n) : (0, r.jsx)("div", {
        className: j.sectionTitle,
        children: (0, r.jsx)(I.Z, {
          id: t,
          title: n
        })
      }, n)
    }, [Y, Z, t, q, Q]);
  if (i.useEffect(() => {
      Z === T.pJs.ALL && (0, h.d$)()
    }, [Z]), 0 === F.length && "" === M[Z]) return (0, r.jsx)(L, {
    section: Z,
    showSpamCta: H
  });
  let J = "" !== M[Z],
    $ = 0 === F.length && J;
  return (0, r.jsx)(p.Gt, {
    value: n,
    children: (0, r.jsxs)(u.Z, {
      section: T.jXE.FRIENDS_LIST,
      children: [k && (0, r.jsx)(v.R, {}), (0, r.jsx)("div", {
        className: j.searchBar,
        children: (0, r.jsx)(o.E1j, {
          query: M[Z],
          onChange: B,
          onClear: V
        })
      }), (0, r.jsx)(y.Z, {
        rows: Y,
        renderRow: G,
        renderSection: X,
        sectionFilter: Z,
        isVirtualizedList: D >= S.nG,
        hasSearchQuery: J,
        footer: H && !$ ? (0, r.jsx)(a.zx, {
          look: a.zx.Looks.LINK,
          color: j.viewSpamButtonColor,
          className: j.viewSpamButton,
          onClick: w,
          size: a.Ph.TINY,
          children: (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            children: N.intl.string(N.t.R40bU1)
          })
        }) : null
      }), $ && (0, r.jsx)("div", {
        className: j.emptyStateContainer,
        children: (0, r.jsx)(O.Z, {
          type: O.j.SECTION_NO_RESULTS
        }, Z)
      })]
    })
  })
}