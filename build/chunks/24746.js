/** Chunk was on 37697 **/
n.d(t, {
  Z: () => b
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(120356),
  l = n.n(a),
  o = n(477660),
  s = n.n(o),
  c = n(481060),
  d = n(241209),
  u = n(547563),
  p = n(388032),
  m = n(242847);
let h = s().parserFor(u.Z),
  g = s().reactFor(s().ruleOutput(u.Z, "react"));

function _(e) {
  let {
    description: t,
    supportsMarkdown: n
  } = e, [a, o] = i.useState(!1), s = i.useRef(null);
  i.useEffect(() => {
    if (null == s.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      o((null !== (n = null === (e = s.current) || void 0 === e ? void 0 : e.scrollHeight) && void 0 !== n ? n : 0) - (null !== (r = null === (t = s.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== r ? r : 0) > 1)
    });
    return e.observe(s.current), () => e.disconnect()
  }, []);
  let [u, p] = i.useState(!1), _ = i.useCallback(() => {
    p(e => !e)
  }, []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: s,
      className: l()({
        [m.descriptionClamp]: !u,
        [m.descriptionClampSafari]: !u && "Safari" === platform.name
      }),
      children: n ? (0, r.jsx)(d.Z, {
        className: m.detailedDescription,
        parser: h,
        output: g,
        state: {
          allowLinks: !0
        },
        children: t
      }) : (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        children: t
      })
    }), a || u ? (0, r.jsx)(f, {
      isShowingMore: u,
      onToggle: _
    }) : null]
  })
}

function f(e) {
  let {
    onToggle: t,
    isShowingMore: n
  } = e, a = i.useMemo(() => (0, r.jsxs)("div", {
    className: m.showMoreContent,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/semibold",
      color: "interactive-normal",
      children: n ? p.NW.string(p.t["vtfc4+"]) : p.NW.string(p.t.ZDRyur)
    }), n ? (0, r.jsx)(c.u04, {
      size: "md",
      color: "currentColor",
      className: m.showMoreButtonIcon
    }) : (0, r.jsx)(c.CJ0, {
      size: "md",
      color: "currentColor",
      className: m.showMoreButtonIcon
    })]
  }), [n]);
  return (0, r.jsxs)(c.P3F, {
    className: m.showMoreButton,
    onClick: t,
    children: [(0, r.jsx)("div", {
      className: m.divider
    }), a, (0, r.jsx)("div", {
      className: m.divider
    })]
  })
}
let b = function(e) {
  var t, n;
  let {
    application: a
  } = e, l = null === (t = a.directory_entry) || void 0 === t ? void 0 : t.detailed_description, o = null === (n = a.directory_entry) || void 0 === n ? void 0 : n.short_description, s = i.useMemo(() => null != l && l.length > 0 ? (0, r.jsx)(_, {
    description: l,
    supportsMarkdown: !0
  }) : null != o && o.length > 0 ? (0, r.jsx)(_, {
    description: o,
    supportsMarkdown: !1
  }) : null, [l, o]);
  return null == s ? null : (0, r.jsxs)("div", {
    className: m.overviewContainer,
    children: [(0, r.jsx)(c.X6q, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: p.NW.string(p.t.txraKS)
    }), s]
  })
}