/** Chunk was on 9536 **/
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
  Chunk183950 = require("./183950.js"),
  Chunk536673 = require("./536673.js");

function _(e) {
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
  } = e, a = (0, o.e7)([m.default], () => m.default.getCurrentUser()), u = i.useMemo(() => h.uB({
    user: a,
    context: t
  }), [a, t]), g = i.useMemo(() => ({
    [n.id]: T(_({}, n), {
      permissions: h.Hn
    })
  }), [n]), f = i.useMemo(() => h.uB({
    user: a,
    context: t,
    roles: g
  }), [a, t, g]), b = !s.fS(u, f);
  return (0, r.jsx)(c.u, {
    text: b ? E.intl.string(E.t["IQ/6Sg"]) : null,
    position: "top",
    children: (0, r.jsx)("div", {
      className: I.clearButtonWrapper,
      children: (0, r.jsx)(d.Avr, {
        variant: "primary",
        textVariant: "text-sm/semibold",
        onClick: () => (0, x.TY)(n.id),
        disabled: s.fS(n.permissions, h.Hn) || b || l,
        text: E.intl.string(E.t["UYq7+O"])
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
  } = u.Z.useExperiment({
    location: "PermissionsList",
    guildId: t.id
  });
  if (0 === i.length) return (0, r.jsxs)("div", {
    className: I.noResultsContainer,
    children: [(0, r.jsx)(j.Z, {
      className: I.noResults
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: E.intl.string(E.t.DEBGqA)
    })]
  });

  function o(e) {
    return f.Z.can(e, t) ? !f.Z.can(e, t, null, {
      [n.id]: T(_({}, n), {
        permissions: s.Od(n.permissions, e)
      })
    }) && E.intl.string(E.t["K+D+GF"]) : E.intl.string(E.t.nOtPMM)
  }
  return (0, r.jsxs)("div", {
    className: I.permissionsWrapper,
    children: [(0, r.jsx)(P, {
      guild: t,
      role: n,
      locked: l
    }), i.map((e, i) => (0, r.jsx)(g.Z, {
      className: I.permissionsForm,
      spec: e,
      permissions: n.permissions,
      locked: l,
      onChange: (e, t) => {
        if ("string" == typeof t) throw Error("Unexpected string `allow`");
        (0, x.lO)(n.id, e, t)
      },
      permissionRender: o,
      hasBypassSlowmodePermission: a,
      guildId: t.id
    }, i))]
  })
}

function Z(e) {
  let {
    guild: t,
    role: n,
    locked: l,
    setSelectedSection: s,
    initialSearchQuery: o
  } = e, [c, u] = i.useState(null != o ? o : ""), g = i.useMemo(() => p.Z.generateGuildPermissionSpec(t), [t]).map(e => T(_({}, e), {
    permissions: e.permissions.filter(e => {
      let t = c.trimStart().toLowerCase();
      return e.title.toLowerCase().includes(t) || null != e.description && e.description.toString().toLowerCase().includes(t)
    })
  })).filter(e => e.permissions.length > 0), {
    headerHeight: f,
    headerRef: m
  } = (0, v.Z)(0), {
    scrolledToTop: h,
    handleScroll: x
  } = (0, O.V)(), j = i.useRef(false);
  return i.useEffect(() => {
    j.current || "" === c.trimStart() || (b.default.track(N.rMx.SEARCH_STARTED, {
      search_type: "Permissions"
    }), j.current = true)
  }, [c]), (0, r.jsx)(d.yWw, {
    className: I.scroller,
    style: {
      scrollPaddingTop: f
    },
    onScroll: x,
    children: (0, r.jsxs)("div", {
      className: S.contentWidth,
      children: [(0, r.jsxs)("div", {
        className: a()(S.header, S.stickyHeader, {
          [S.stickyHeaderElevated]: !h
        }),
        ref: m,
        children: [(0, r.jsx)(O.Z, {
          guild: t,
          role: n,
          selectedSection: C.ZI.PERMISSIONS,
          setSelectedSection: s
        }), (0, r.jsx)("div", {
          className: I.noticeContainer,
          children: (0, r.jsx)(y.Z, {
            role: n
          })
        }), (0, r.jsx)("div", {
          className: I.searchContainer,
          children: (0, r.jsx)(d.E1j, {
            query: c,
            onChange: u,
            onClear: () => u(""),
            placeholder: E.intl.string(E.t.OLJAk3),
            "aria-label": E.intl.string(E.t.OLJAk3)
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