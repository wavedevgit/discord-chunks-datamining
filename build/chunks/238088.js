/** Chunk was on 37979 **/
l.d(t, {
  default: () => m
}), l(539854);
var n = l(255367),
  r = l(73800),
  a = l(442837),
  i = l(82659),
  u = l(481060),
  s = l(471445),
  o = l(313201),
  c = l(592125),
  h = l(944486),
  f = l(585483),
  d = l(833103),
  g = l(607802),
  p = l(981631),
  C = l(388032),
  b = l(325507);

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function S(e) {
  let {
    label: t,
    sublabel: l,
    textPlaceholder: r,
    value: a,
    onChange: i,
    options: s,
    filter: o,
    closeOnSelect: c,
    containerClassName: h,
    onSearchChange: f,
    renderOptionPrefix: d,
    renderOptionSuffix: g
  } = e;
  return (0, n.jsxs)("div", {
    className: h,
    children: [(0, n.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "text-primary",
      className: b.label,
      children: t
    }), (0, n.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: b.sublabel,
      children: l
    }), (0, n.jsx)(u.VcW, {
      multi: !0,
      options: s,
      placeholder: r,
      value: a,
      onChange: i,
      onSearchChange: f,
      closeOnSelect: c,
      filter: o,
      renderOptionPrefix: d,
      renderOptionSuffix: g
    })]
  })
}

function m(e) {
  let {
    transitionState: t,
    onClose: l,
    searchContext: m
  } = e, y = (0, o.Dt)(), v = r.useMemo(() => (0, g.s5)(m), [m]), k = (0, a.e7)([c.Z, h.Z], () => {
    let e = c.Z.getChannel(h.Z.getChannelId());
    return null != e ? (0, g.nl)(e) : "general"
  }), {
    options: E,
    query: j,
    setQuery: F,
    setQueryString: O,
    handleClearFilter: _,
    getApplyQueryString: R
  } = (0, d.HJ)(m, p.dCx.FILTER_FROM), {
    options: T,
    query: Z,
    setQuery: P,
    setQueryString: I,
    handleClearFilter: N,
    getApplyQueryString: M
  } = (0, d.HJ)(m, p.dCx.FILTER_MENTIONS), Q = (0, d.Zc)(v), L = (0, g.R6)(m), {
    options: q,
    query: A,
    setQuery: H,
    handleClearFilter: w,
    getApplyQueryString: U
  } = (0, d.Z2)(m), {
    options: z,
    query: J,
    setQuery: K,
    setQueryString: B,
    handleClearFilter: D,
    getApplyQueryString: W
  } = (0, d.ur)(m), Y = r.useCallback(e => {
    if (null == e) return;
    let t = c.Z.getChannel(e.value);
    if (null == t) return;
    let l = (0, s.KS)(t);
    return null != l ? (0, n.jsx)(l, {
      size: "xs",
      color: "currentColor"
    }) : null
  }, []), V = r.useMemo(() => j.length + Z.length + J.length + A.length, [j, Z, J, A]), G = r.useCallback(() => {
    if (0 === V) return void l();
    let e = R(p.dCx.FILTER_FROM),
      t = M(p.dCx.FILTER_MENTIONS),
      n = U(p.dCx.FILTER_HAS),
      r = W(p.dCx.FILTER_IN),
      a = [];
    null != e && a.push(e), null != t && a.push(t), null != n && a.push(n), null != r && a.push(r);
    let i = a.join(" ");
    f.S.dispatch(p.CkL.SET_SEARCH_QUERY, {
      query: i,
      anchor: 0,
      focus: 0,
      performSearch: !0
    }), l()
  }, [R, U, W, M, V, l]), X = r.useCallback(() => {
    _(), N(), w(), D(), f.S.dispatch(p.CkL.SET_SEARCH_QUERY, {
      query: "",
      anchor: 0,
      focus: 0,
      performSearch: !1
    })
  }, [_, w, D, N]);
  return (0, n.jsxs)(i.Modal, {
    transitionState: t,
    onClose: l,
    "aria-labelledby": y,
    title: C.intl.string(C.t.F8a0W1),
    actions: [{
      variant: "secondary",
      text: C.intl.string(C.t["ETE/oK"]),
      onClick: l
    }, {
      variant: "primary",
      text: C.intl.string(C.t.qDzapq),
      onClick: G
    }],
    actionBarInput: (0, n.jsx)(u.P3F, {
      onClick: X,
      className: b.clearFilters,
      children: (0, n.jsxs)(u.Text, {
        variant: "text-sm/medium",
        color: V > 0 ? "text-brand" : "text-tertiary",
        children: [C.intl.string(C.t.YfwFu7), " ", V > 0 && "(".concat(V, ")")]
      })
    }),
    children: [(0, n.jsx)(S, x({
      label: C.intl.string(C.t.Qz6eOT),
      sublabel: C.intl.string(C.t["2JyXnJ"]),
      textPlaceholder: C.intl.string(C.t.V4WMj4),
      value: j,
      onChange: F,
      onSearchChange: O,
      options: E
    }, Q)), L && (0, n.jsx)(S, {
      label: C.intl.string(C.t["kLrM/v"]),
      sublabel: C.intl.string(C.t.x8cC09),
      textPlaceholder: C.intl.formatToPlainString(C.t.K4l509, {
        channelName: k
      }),
      value: J,
      onChange: K,
      onSearchChange: B,
      options: z,
      containerClassName: b.filterSection,
      filter: !1,
      closeOnSelect: !1,
      renderOptionPrefix: Y
    }), (0, n.jsx)(S, x({
      label: C.intl.string(C.t.HEBnRU),
      sublabel: C.intl.string(C.t.PdfTqa),
      textPlaceholder: C.intl.string(C.t.zka3aG),
      value: Z,
      onChange: P,
      onSearchChange: I,
      options: T,
      containerClassName: b.filterSection
    }, Q)), (0, n.jsx)(S, {
      label: C.intl.string(C.t["892qg4"]),
      sublabel: C.intl.string(C.t["Oa//IC"]),
      textPlaceholder: C.intl.string(C.t.tROvHB),
      value: A,
      onChange: H,
      options: q,
      containerClassName: b.filterSection,
      filter: !0,
      closeOnSelect: !1
    })]
  })
}