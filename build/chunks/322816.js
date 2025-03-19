/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  ZP: () => B
}), n(411104), n(47120), n(595690), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(149765),
  o = n(442837),
  c = n(481060),
  A = n(144991),
  d = n(496675),
  u = n(594174),
  g = n(626135),
  f = n(233608),
  m = n(700785),
  p = n(764260),
  h = n(631969),
  C = n(95242),
  b = n(420966),
  v = n(275296),
  x = n(203377),
  N = n(981631),
  j = n(388032),
  E = n(80749),
  I = n(104978);

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function y(e, t) {
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

function w(e) {
  let {
    guild: t,
    role: n,
    locked: s
  } = e, a = (0, o.e7)([u.default], () => u.default.getCurrentUser()), A = i.useMemo(() => m.uB({
    user: a,
    context: t
  }), [a, t]), d = i.useMemo(() => ({
    [n.id]: y(O({}, n), {
      permissions: m.Hn
    })
  }), [n]), g = i.useMemo(() => m.uB({
    user: a,
    context: t,
    roles: d
  }), [a, t, d]), f = !l.fS(A, g);
  return (0, r.jsx)("div", {
    className: E.clearButtonWrapper,
    children: (0, r.jsx)(c.ua7, {
      text: f ? j.NW.string(j.t["IQ/6Sk"]) : null,
      position: "top",
      color: c.ua7.Colors.RED,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: i
        } = e;
        return (0, r.jsx)(c.zxk, {
          className: E.clearButton,
          size: c.zxk.Sizes.TINY,
          look: c.zxk.Looks.LINK,
          color: c.zxk.Colors.LINK,
          onClick: () => (0, p.TY)(n.id),
          onMouseEnter: t,
          onMouseLeave: i,
          disabled: l.fS(n.permissions, m.Hn) || f || s,
          children: j.NW.string(j.t["UYq7+P"])
        })
      }
    })
  })
}

function P(e) {
  let {
    guild: t,
    role: n,
    specs: i,
    locked: s
  } = e;
  if (0 === i.length) return (0, r.jsxs)("div", {
    className: E.noResultsContainer,
    children: [(0, r.jsx)(h.Z, {
      className: E.noResults
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: j.NW.string(j.t.DEBGqK)
    })]
  });

  function a(e) {
    return d.Z.can(e, t) ? !d.Z.can(e, t, null, {
      [n.id]: y(O({}, n), {
        permissions: l.Od(n.permissions, e)
      })
    }) && j.NW.string(j.t["K+D+GB"]) : j.NW.string(j.t.nOtPMD)
  }
  return (0, r.jsxs)("div", {
    className: E.permissionsWrapper,
    children: [(0, r.jsx)(w, {
      guild: t,
      role: n,
      locked: s
    }), i.map((e, t) => (0, r.jsx)(A.Z, {
      className: E.permissionsForm,
      spec: e,
      permissions: n.permissions,
      locked: s,
      onChange: (e, t) => {
        if ("string" == typeof t) throw Error("Unexpected string `allow`");
        (0, p.lO)(n.id, e, t)
      },
      permissionRender: a
    }, t))]
  })
}

function B(e) {
  let {
    guild: t,
    role: n,
    locked: s,
    setSelectedSection: l,
    initialSearchQuery: o
  } = e, [A, d] = i.useState(null != o ? o : ""), u = i.useMemo(() => f.Z.generateGuildPermissionSpec(t), [t]).map(e => y(O({}, e), {
    permissions: e.permissions.filter(e => {
      let t = A.trimStart().toLowerCase();
      return e.title.toLowerCase().includes(t) || null != e.description && e.description.toString().toLowerCase().includes(t)
    })
  })).filter(e => e.permissions.length > 0), {
    headerHeight: m,
    headerRef: p
  } = (0, C.Z)(0), {
    scrolledToTop: h,
    handleScroll: w
  } = (0, b.V)(), B = i.useRef(!1);
  return i.useEffect(() => {
    !B.current && "" !== A.trimStart() && (g.default.track(N.rMx.SEARCH_STARTED, {
      search_type: "Permissions"
    }), B.current = !0)
  }, [A]), (0, r.jsx)(c.yWw, {
    className: E.scroller,
    style: {
      scrollPaddingTop: m
    },
    onScroll: w,
    children: (0, r.jsxs)("div", {
      className: I.contentWidth,
      children: [(0, r.jsxs)("div", {
        className: a()(I.header, I.stickyHeader, {
          [I.stickyHeaderElevated]: !h
        }),
        ref: p,
        children: [(0, r.jsx)(b.Z, {
          guild: t,
          role: n,
          selectedSection: x.ZI.PERMISSIONS,
          setSelectedSection: l
        }), (0, r.jsx)("div", {
          className: E.noticeContainer,
          children: (0, r.jsx)(v.Z, {
            role: n
          })
        }), (0, r.jsx)("div", {
          className: E.searchContainer,
          children: (0, r.jsx)(c.E1j, {
            size: c.E1j.Sizes.MEDIUM,
            query: A,
            onChange: d,
            onClear: () => d(""),
            placeholder: j.NW.string(j.t.OLJAk5),
            "aria-label": j.NW.string(j.t.OLJAk5)
          })
        })]
      }), (0, r.jsx)(P, {
        guild: t,
        role: n,
        specs: u,
        locked: s
      })]
    })
  })
}