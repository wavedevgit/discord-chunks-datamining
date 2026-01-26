/** Chunk was on 39048 **/
/** chunk id: 541285, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => w
}), require("./65821.js"), require("./896048.js"), require("./867070.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk386849 = require("./386849.js"),
  Chunk942234 = require("./942234.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk558393 = require("./558393.js"),
  Chunk488926 = require("./488926.js"),
  Chunk636042 = require("./636042.js"),
  Chunk526855 = require("./526855.jsx"),
  Chunk785312 = require("./785312.js"),
  Chunk316506 = require("./316506.jsx"),
  Chunk631103 = require("./631103.jsx"),
  Chunk927573 = require("./927573.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk276317 = require("./276317.js"),
  Chunk261223 = require("./261223.js");

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

function C(e) {
  let {
    guild: t,
    role: n,
    locked: l
  } = e, s = (0, o.bG)([p.default], () => p.default.getCurrentUser()), u = i.useMemo(() => b.cc({
    user: s,
    context: t
  }), [s, t]), g = i.useMemo(() => ({
    [n.id]: T(I({}, n), {
      permissions: b.x3
    })
  }), [n]), m = i.useMemo(() => b.cc({
    user: s,
    context: t,
    roles: g
  }), [s, t, g]), f = !a.aI(u, m);
  return (0, r.jsx)(c.m, {
    text: f ? E.intl.string(E.t["IQ/6Sg"]) : null,
    position: "top",
    children: (0, r.jsx)("div", {
      className: N.FS,
      children: (0, r.jsx)(d.QWc, {
        variant: "primary",
        textVariant: "text-sm/semibold",
        onClick: () => (0, x.Y_)(n.id),
        disabled: a.aI(n.permissions, b.x3) || f || l,
        text: E.intl.string(E.t["UYq7+O"])
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
  } = e, {
    enabled: s
  } = u.A.useExperiment({
    location: "PermissionsList",
    guildId: t.id
  });
  if (0 === i.length) return (0, r.jsxs)("div", {
    className: N.pb,
    children: [(0, r.jsx)(j.A, {
      className: N.wV
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: E.intl.string(E.t.DEBGqA)
    })]
  });

  function o(e) {
    return m.A.can(e, t) ? !m.A.can(e, t, null, {
      [n.id]: T(I({}, n), {
        permissions: a.TF(n.permissions, e)
      })
    }) && E.intl.string(E.t["K+D+GF"]) : E.intl.string(E.t.nOtPMM)
  }
  return (0, r.jsxs)("div", {
    className: N.eZ,
    children: [(0, r.jsx)(C, {
      guild: t,
      role: n,
      locked: l
    }), i.map((e, i) => (0, r.jsx)(g.A, {
      className: N.p2,
      spec: e,
      permissions: n.permissions,
      locked: l,
      onChange: (e, t) => {
        if ("string" == typeof t) throw Error("Unexpected string `allow`");
        (0, x.Ul)(n.id, e, t)
      },
      permissionRender: o,
      hasBypassSlowmodePermission: s,
      guildId: t.id
    }, i))]
  })
}

function w(e) {
  let {
    guild: t,
    role: n,
    locked: l,
    setSelectedSection: a,
    initialSearchQuery: o
  } = e, [c, u] = i.useState(null != o ? o : ""), g = i.useMemo(() => h.A.generateGuildPermissionSpec(t), [t]).map(e => T(I({}, e), {
    permissions: e.permissions.filter(e => {
      let t = c.trimStart().toLowerCase();
      return e.title.toLowerCase().includes(t) || null != e.description && e.description.toString().toLowerCase().includes(t)
    })
  })).filter(e => e.permissions.length > 0), {
    headerHeight: m,
    headerRef: p
  } = (0, _.A)(0), {
    scrolledToTop: b,
    handleScroll: x
  } = (0, O.u)(), j = i.useRef(false);
  return i.useEffect(() => {
    j.current || "" === c.trimStart() || (f.default.track(A.HAw.SEARCH_STARTED, {
      search_type: "Permissions"
    }), j.current = true)
  }, [c]), (0, r.jsx)(d.GtU, {
    className: N.XG,
    style: {
      scrollPaddingTop: m
    },
    onScroll: x,
    children: (0, r.jsxs)("div", {
      className: S.Q,
      children: [(0, r.jsxs)("div", {
        className: s()(S.wx, S.ln, {
          [S.l6]: !b
        }),
        ref: p,
        children: [(0, r.jsx)(O.A, {
          guild: t,
          role: n,
          selectedSection: y.T$.PERMISSIONS,
          setSelectedSection: a
        }), (0, r.jsx)("div", {
          className: N.U9,
          children: (0, r.jsx)(v.A, {
            role: n
          })
        }), (0, r.jsx)("div", {
          className: N.MT,
          children: (0, r.jsx)(d.IWV, {
            query: c,
            onChange: u,
            onClear: () => u(""),
            placeholder: E.intl.string(E.t.OLJAk3),
            "aria-label": E.intl.string(E.t.OLJAk3)
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