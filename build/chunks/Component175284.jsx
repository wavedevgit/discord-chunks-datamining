/** Chunk was on 39048 **/
/** chunk id: 175284, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk975571 = require("./975571.js"),
  Chunk50249 = require("./50249.jsx"),
  Chunk305053 = require("./305053.jsx"),
  Chunk512031 = require("./512031.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk107550 = require("./107550.js");

function h(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: l,
    setEditRoleId: s,
    query: o,
    setQuery: c,
    setHeaderHeight: d
  } = e, m = i.useRef(null);
  i.useEffect(() => {
    var e, t;
    d(null != (e = null == (t = m.current) ? true : t.offsetHeight) ? e : g.p4)
  }, [d]);
  let h = i.useCallback(() => {
    s(n.id)
  }, [s, n.id]);
  return (0, r.jsxs)("div", {
    ref: m,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: p.intl.string(p.t["LPJmL/"])
    }), (0, r.jsx)(a.Text, {
      className: f.h_,
      color: "text-default",
      variant: "text-sm/normal",
      children: p.intl.string(p.t["1ydhVp"])
    }), (0, r.jsx)(u.A, {
      guild: t
    }), (0, r.jsx)(b, {
      guild: t,
      everyoneRole: n,
      filteredRoles: l,
      query: o,
      setQuery: c,
      onEveryoneRoleClick: h
    })]
  })
}

function b(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: i,
    query: l,
    setQuery: o,
    onEveryoneRoleClick: u
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.A, {
      role: n,
      onClick: u
    }), (0, r.jsx)(x, {
      guild: t,
      query: l,
      setQuery: o
    }), (0, r.jsx)(a.Text, {
      className: f.BK,
      color: "text-default",
      variant: "text-sm/normal",
      children: p.intl.format(p.t.xkC3Yf, {
        articleURL: c.A.getArticleURL(m.MVz.PERMISSIONS_TUTORIAL)
      })
    }), (0, r.jsx)("div", {
      className: f.kA,
      children: (0, r.jsxs)("div", {
        className: f.qd,
        children: [(0, r.jsx)("div", {
          className: f._M
        }), (0, r.jsx)(a.Text, {
          className: s()(f.jA, f.N5),
          variant: "text-sm/normal",
          children: p.intl.format(p.t["38N3Vz"], {
            numRoles: String(i.length)
          })
        }), (0, r.jsx)(a.Text, {
          className: s()(f.jA, f.Hp),
          variant: "text-sm/normal",
          children: p.intl.string(p.t["9Oq93m"])
        }), (0, r.jsx)("div", {
          className: f.DE
        })]
      })
    })]
  })
}

function x(e) {
  let {
    guild: t,
    query: n,
    setQuery: l
  } = e, [s, c] = i.useState(false), d = i.useCallback(e => {
    l(e)
  }, [l]), u = i.useCallback(() => {
    l("")
  }, [l]), g = async () => {
    c(true), await o.A.createRole(t.id), c(false)
  };
  return (0, r.jsx)("div", {
    className: f.__invalid_rolesList,
    children: (0, r.jsxs)("div", {
      className: f.MT,
      children: [(0, r.jsx)(a.IWV, {
        query: n,
        onChange: d,
        onClear: u,
        placeholder: p.intl.string(p.t.Sojqsr),
        "aria-label": p.intl.string(p.t.Sojqsr)
      }), (0, r.jsx)(a.Button, {
        size: "sm",
        onClick: g,
        loading: s,
        text: p.intl.string(p.t.JZZjQK)
      })]
    })
  })
}