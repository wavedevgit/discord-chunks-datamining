/** Chunk was on 47841 **/
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

function T(e) {
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
  } = e, s = (0, c.bG)([b.default], () => b.default.getCurrentUser()), u = i.useMemo(() => x.cc({
    user: s,
    context: t
  }), [s, t]), f = i.useMemo(() => ({
    [n.id]: I(T({}, n), {
      permissions: x.x3
    })
  }), [n]), g = i.useMemo(() => x.cc({
    user: s,
    context: t,
    roles: f
  }), [s, t, f]), m = !a.aI(u, g);
  return (0, r.jsx)(o.m, {
    text: m ? N.intl.string(N.t["IQ/6Sg"]) : null,
    position: "top",
    children: (0, r.jsx)("div", {
      className: _.FS,
      children: (0, r.jsx)(d.QWc, {
        variant: "primary",
        textVariant: "text-sm/semibold",
        onClick: () => (0, h.Y_)(n.id),
        disabled: a.aI(n.permissions, x.x3) || m || l,
        text: N.intl.string(N.t["UYq7+O"])
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
    className: _.pb,
    children: [(0, r.jsx)(j.A, {
      className: _.wV
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: N.intl.string(N.t.DEBGqA)
    })]
  });

  function c(e) {
    return g.A.can(e, t) ? !g.A.can(e, t, null, {
      [n.id]: I(T({}, n), {
        permissions: a.TF(n.permissions, e)
      })
    }) && N.intl.string(N.t["K+D+GF"]) : N.intl.string(N.t.nOtPMM)
  }
  return (0, r.jsxs)("div", {
    className: _.eZ,
    children: [(0, r.jsx)(C, {
      guild: t,
      role: n,
      locked: l
    }), i.map((e, i) => (0, r.jsx)(f.A, {
      className: _.p2,
      spec: e,
      permissions: n.permissions,
      locked: l,
      onChange: (e, t) => {
        if ("string" == typeof t) throw Error("Unexpected string `allow`");
        (0, h.Ul)(n.id, e, t)
      },
      permissionRender: c,
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
    initialSearchQuery: c
  } = e, [o, u] = i.useState(null != c ? c : ""), f = i.useMemo(() => p.A.generateGuildPermissionSpec(t), [t]).map(e => I(T({}, e), {
    permissions: e.permissions.filter(e => {
      let t = o.trimStart().toLowerCase();
      return e.title.toLowerCase().includes(t) || null != e.description && e.description.toString().toLowerCase().includes(t)
    })
  })).filter(e => e.permissions.length > 0), {
    headerHeight: g,
    headerRef: b
  } = (0, O.A)(0), {
    scrolledToTop: x,
    handleScroll: h
  } = (0, y.u)(), j = i.useRef(false);
  return i.useEffect(() => {
    j.current || "" === o.trimStart() || (m.default.track(E.HAw.SEARCH_STARTED, {
      search_type: "Permissions"
    }), j.current = true)
  }, [o]), (0, r.jsx)(d.GtU, {
    className: _.XG,
    style: {
      scrollPaddingTop: g
    },
    onScroll: h,
    children: (0, r.jsxs)("div", {
      className: S.Q,
      children: [(0, r.jsxs)("div", {
        className: s()(S.wx, S.ln, {
          [S.l6]: !x
        }),
        ref: b,
        children: [(0, r.jsx)(y.A, {
          guild: t,
          role: n,
          selectedSection: A.T$.PERMISSIONS,
          setSelectedSection: a
        }), (0, r.jsx)("div", {
          className: _.U9,
          children: (0, r.jsx)(v.A, {
            role: n
          })
        }), (0, r.jsx)("div", {
          className: _.MT,
          children: (0, r.jsx)(d.IWV, {
            query: o,
            onChange: u,
            onClear: () => u(""),
            placeholder: N.intl.string(N.t.OLJAk3),
            "aria-label": N.intl.string(N.t.OLJAk3)
          })
        })]
      }), (0, r.jsx)(P, {
        guild: t,
        role: n,
        specs: f,
        locked: l
      })]
    })
  })
}