/** Chunk was on 384 **/
/** chunk id: 322816, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => Z
}), require("./415506.js"), require("./388685.js"), require("./539338.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk409513 = require("./409513.js"),
  Chunk722252 = require("./722252.jsx"),
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

function S(e) {
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

function T(e, t) {
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

function P(e) {
  let {
    guild: t,
    role: n,
    locked: l
  } = e, a = (0, o.e7)([p.default], () => p.default.getCurrentUser()), d = i.useMemo(() => b.uB({
    user: a,
    context: t
  }), [a, t]), g = i.useMemo(() => ({
    [n.id]: T(S({}, n), {
      permissions: b.Hn
    })
  }), [n]), m = i.useMemo(() => b.uB({
    user: a,
    context: t,
    roles: g
  }), [a, t, g]), f = !s.fS(d, m);
  return (0, r.jsx)(c.u, {
    text: f ? N.intl.string(N.t["IQ/6Sg"]) : null,
    position: "top",
    children: (0, r.jsx)("div", {
      className: E.clearButtonWrapper,
      children: (0, r.jsx)(u.Avr, {
        variant: "primary",
        textVariant: "text-sm/semibold",
        onClick: () => (0, x.TY)(n.id),
        disabled: s.fS(n.permissions, b.Hn) || f || l,
        text: N.intl.string(N.t["UYq7+O"])
      })
    })
  })
}

function w(e) {
  let {
    guild: t,
    role: n,
    specs: i,
    locked: l
  } = e, {
    enabled: a
  } = d.Z.useExperiment({
    location: "PermissionsList",
    guildId: t.id
  });
  if (0 === i.length) return (0, r.jsxs)("div", {
    className: E.noResultsContainer,
    children: [(0, r.jsx)(j.Z, {
      className: E.noResults
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: N.intl.string(N.t.DEBGqA)
    })]
  });

  function o(e) {
    return m.Z.can(e, t) ? !m.Z.can(e, t, null, {
      [n.id]: T(S({}, n), {
        permissions: s.Od(n.permissions, e)
      })
    }) && N.intl.string(N.t["K+D+GF"]) : N.intl.string(N.t.nOtPMM)
  }
  return (0, r.jsxs)("div", {
    className: E.permissionsWrapper,
    children: [(0, r.jsx)(P, {
      guild: t,
      role: n,
      locked: l
    }), i.map((e, t) => (0, r.jsx)(g.Z, {
      className: E.permissionsForm,
      spec: e,
      permissions: n.permissions,
      locked: l,
      onChange: (e, t) => {
        if ("string" == typeof t) throw Error("Unexpected string `allow`");
        (0, x.lO)(n.id, e, t)
      },
      permissionRender: o,
      hasBypassSlowmodePermission: a
    }, t))]
  })
}

function Z(e) {
  let {
    guild: t,
    role: n,
    locked: l,
    setSelectedSection: s,
    initialSearchQuery: o
  } = e, [c, d] = i.useState(null != o ? o : ""), g = i.useMemo(() => h.Z.generateGuildPermissionSpec(t), [t]).map(e => T(S({}, e), {
    permissions: e.permissions.filter(e => {
      let t = c.trimStart().toLowerCase();
      return e.title.toLowerCase().includes(t) || null != e.description && e.description.toString().toLowerCase().includes(t)
    })
  })).filter(e => e.permissions.length > 0), {
    headerHeight: m,
    headerRef: p
  } = (0, _.Z)(0), {
    scrolledToTop: b,
    handleScroll: x
  } = (0, v.V)(), j = i.useRef(false);
  return i.useEffect(() => {
    j.current || "" === c.trimStart() || (f.default.track(y.rMx.SEARCH_STARTED, {
      search_type: "Permissions"
    }), j.current = true)
  }, [c]), (0, r.jsx)(u.yWw, {
    className: E.scroller,
    style: {
      scrollPaddingTop: m
    },
    onScroll: x,
    children: (0, r.jsxs)("div", {
      className: I.contentWidth,
      children: [(0, r.jsxs)("div", {
        className: a()(I.header, I.stickyHeader, {
          [I.stickyHeaderElevated]: !b
        }),
        ref: p,
        children: [(0, r.jsx)(v.Z, {
          guild: t,
          role: n,
          selectedSection: C.ZI.PERMISSIONS,
          setSelectedSection: s
        }), (0, r.jsx)("div", {
          className: E.noticeContainer,
          children: (0, r.jsx)(O.Z, {
            role: n
          })
        }), (0, r.jsx)("div", {
          className: E.searchContainer,
          children: (0, r.jsx)(u.E1j, {
            query: c,
            onChange: d,
            onClear: () => d(""),
            placeholder: N.intl.string(N.t.OLJAk3),
            "aria-label": N.intl.string(N.t.OLJAk3)
          })
        })]
      }), (0, r.jsx)(w, {
        guild: t,
        role: n,
        specs: g,
        locked: l
      })]
    })
  })
}