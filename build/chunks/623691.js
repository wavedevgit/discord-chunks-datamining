/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(749210),
  c = n(63063),
  A = n(714939),
  d = n(494831),
  u = n(981631),
  g = n(388032),
  f = n(785441);

function m(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: s,
    setEditRoleId: a,
    query: o,
    setQuery: c,
    setHeaderHeight: A
  } = e, u = i.useRef(null);
  i.useEffect(() => {
    var e, t;
    A(null !== (t = null === (e = u.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : d.Cl)
  }, [A]);
  let m = i.useCallback(() => {
    a(n.id)
  }, [a, n.id]);
  return (0, r.jsxs)("div", {
    ref: u,
    children: [(0, r.jsx)(l.vwX, {
      tag: l.RB0.H1,
      children: g.NW.string(g.t.LPJmLy)
    }), (0, r.jsx)(l.Text, {
      className: f.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: g.NW.string(g.t["1ydhVl"])
    }), (0, r.jsx)(p, {
      guild: t,
      everyoneRole: n,
      filteredRoles: s,
      query: o,
      setQuery: c,
      onEveryoneRoleClick: m
    })]
  })
}

function p(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: i,
    query: s,
    setQuery: o,
    onEveryoneRoleClick: d
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A.Z, {
      role: n,
      onClick: d
    }), (0, r.jsx)(h, {
      guild: t,
      query: s,
      setQuery: o
    }), (0, r.jsx)(l.Text, {
      className: f.helpText,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: g.NW.format(g.t.xkC3YW, {
        articleURL: c.Z.getArticleURL(u.BhN.PERMISSIONS_TUTORIAL)
      })
    }), (0, r.jsx)("div", {
      className: f.rolesTable,
      children: (0, r.jsxs)("div", {
        className: f.tableHeader,
        children: [(0, r.jsx)("div", {
          className: f.dragSpacing
        }), (0, r.jsx)(l.Text, {
          className: a()(f.tableTitle, f.roleNameSpacing),
          variant: "text-sm/normal",
          children: g.NW.format(g.t["38N3V1"], {
            numRoles: String(i.length)
          })
        }), (0, r.jsx)(l.Text, {
          className: a()(f.tableTitle, f.memberSpacing),
          variant: "text-sm/normal",
          children: g.NW.string(g.t["9Oq93t"])
        }), (0, r.jsx)("div", {
          className: f.buttonsSpacing
        })]
      })
    })]
  })
}

function h(e) {
  let {
    guild: t,
    query: n,
    setQuery: s
  } = e, [a, c] = i.useState(!1), A = i.useCallback(e => {
    s(e)
  }, [s]), d = i.useCallback(() => {
    s("")
  }, [s]), u = async () => {
    c(!0), await o.Z.createRole(t.id), c(!1)
  };
  return (0, r.jsx)("div", {
    className: f.__invalid_rolesList,
    children: (0, r.jsxs)("div", {
      className: f.searchContainer,
      children: [(0, r.jsx)(l.E1j, {
        size: l.E1j.Sizes.MEDIUM,
        query: n,
        onChange: A,
        onClear: d,
        placeholder: g.NW.string(g.t.Sojqsr),
        "aria-label": g.NW.string(g.t.Sojqsr)
      }), (0, r.jsx)(l.zxk, {
        className: f.createButton,
        size: l.zxk.Sizes.SMALL,
        onClick: u,
        submitting: a,
        children: g.NW.string(g.t.JZZjQE)
      })]
    })
  })
}