/** Chunk was on 64982 **/
/** chunk id: 322816, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => w
}), require("./415506.js"), require("./388685.js"), require("./539338.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk144991 = require("./144991.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk233608 = require("./233608.js"),
  Chunk700785 = require("./700785.js"),
  Chunk84058 = require("./84058.js"),
  Chunk631969 = require("./631969.jsx"),
  Chunk95242 = require("./95242.js"),
  Chunk420966 = require("./420966.jsx"),
  Chunk275296 = require("./275296.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561646 = require("./561646.js"),
  Chunk21321 = require("./21321.js");

function I(e) {
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

function T(e) {
  let {
    guild: t,
    role: n,
    locked: l
  } = e, s = (0, o.e7)([m.default], () => m.default.getCurrentUser()), u = i.useMemo(() => h.uB({
    user: s,
    context: t
  }), [s, t]), g = i.useMemo(() => ({
    [n.id]: S(I({}, n), {
      permissions: h.Hn
    })
  }), [n]), p = i.useMemo(() => h.uB({
    user: s,
    context: t,
    roles: g
  }), [s, t, g]), f = !a.fS(u, p);
  return (0, r.jsx)(c.u, {
    text: f ? y.intl.string(y.t["IQ/6Sk"]) : null,
    position: "top",
    children: (0, r.jsx)("div", {
      className: N.clearButtonWrapper,
      children: (0, r.jsx)(d.Avr, {
        variant: "primary",
        textVariant: "text-sm/semibold",
        onClick: () => (0, x.TY)(n.id),
        disabled: a.fS(n.permissions, h.Hn) || f || l,
        text: y.intl.string(y.t["UYq7+P"])
      })
    })
  })
}

function P(e) {
  let {
    guild: t,
    role: n,
    specs: i,
    locked: l
  } = e;
  if (0 === i.length) return (0, r.jsxs)("div", {
    className: N.noResultsContainer,
    children: [(0, r.jsx)(b.Z, {
      className: N.noResults
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: y.intl.string(y.t.DEBGqK)
    })]
  });

  function s(e) {
    return g.Z.can(e, t) ? !g.Z.can(e, t, null, {
      [n.id]: S(I({}, n), {
        permissions: a.Od(n.permissions, e)
      })
    }) && y.intl.string(y.t["K+D+GB"]) : y.intl.string(y.t.nOtPMD)
  }
  return (0, r.jsxs)("div", {
    className: N.permissionsWrapper,
    children: [(0, r.jsx)(T, {
      guild: t,
      role: n,
      locked: l
    }), i.map((e, t) => (0, r.jsx)(u.Z, {
      className: N.permissionsForm,
      spec: e,
      permissions: n.permissions,
      locked: l,
      onChange: (e, t) => {
        if ("string" == typeof t) throw Error("Unexpected string `allow`");
        (0, x.lO)(n.id, e, t)
      },
      permissionRender: s
    }, t))]
  })
}

function w(e) {
  let {
    guild: t,
    role: n,
    locked: l,
    setSelectedSection: a,
    initialSearchQuery: o
  } = e, [c, u] = i.useState(null != o ? o : ""), g = i.useMemo(() => f.Z.generateGuildPermissionSpec(t), [t]).map(e => S(I({}, e), {
    permissions: e.permissions.filter(e => {
      let t = c.trimStart().toLowerCase();
      return e.title.toLowerCase().includes(t) || null != e.description && e.description.toString().toLowerCase().includes(t)
    })
  })).filter(e => e.permissions.length > 0), {
    headerHeight: m,
    headerRef: h
  } = (0, j.Z)(0), {
    scrolledToTop: x,
    handleScroll: b
  } = (0, _.V)(), T = i.useRef(false);
  return i.useEffect(() => {
    T.current || "" === c.trimStart() || (p.default.track(O.rMx.SEARCH_STARTED, {
      search_type: "Permissions"
    }), T.current = true)
  }, [c]), (0, r.jsx)(d.yWw, {
    className: N.scroller,
    style: {
      scrollPaddingTop: m
    },
    onScroll: b,
    children: (0, r.jsxs)("div", {
      className: E.contentWidth,
      children: [(0, r.jsxs)("div", {
        className: s()(E.header, E.stickyHeader, {
          [E.stickyHeaderElevated]: !x
        }),
        ref: h,
        children: [(0, r.jsx)(_.Z, {
          guild: t,
          role: n,
          selectedSection: C.ZI.PERMISSIONS,
          setSelectedSection: a
        }), (0, r.jsx)("div", {
          className: N.noticeContainer,
          children: (0, r.jsx)(v.Z, {
            role: n
          })
        }), (0, r.jsx)("div", {
          className: N.searchContainer,
          children: (0, r.jsx)(d.E1j, {
            query: c,
            onChange: u,
            onClear: () => u(""),
            placeholder: y.intl.string(y.t.OLJAk5),
            "aria-label": y.intl.string(y.t.OLJAk5)
          })
        })]
      }), (0, r.jsx)(P, {
        guild: t,
        role: n,
        specs: g,
        locked: l
      })]
    })
  })
}