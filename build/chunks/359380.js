/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
}), n(47120), n(653041), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(214715),
  l = n(18100),
  o = n(308083),
  A = n(388032),
  c = n(154662);
let d = e => {
  let {
    title: t,
    icon: n,
    availableTraits: l,
    selectedTraits: A,
    onUpdateTraits: d
  } = e, u = i.useCallback(e => {
    let t = new Set(A);
    t.delete(e), d(t)
  }, [d, A]), g = i.useCallback(e => {
    if (A.size === o.c4) return;
    let t = new Set(A);
    t.add(e), d(t)
  }, [d, A]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Text, {
      className: c.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, r.jsx)("div", {
      className: c.utilityTraits,
      children: l.map(e => {
        let t = A.has(e);
        return (0, r.jsx)(a.Z, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          icon: n,
          text: e,
          selected: t,
          onClick: t ? u : g
        }, e)
      })
    })]
  })
};

function u(e) {
  let {
    guildId: t,
    onUpdateTraits: n,
    progress: a,
    availableTraits: u,
    hidePreview: g = !1
  } = e, f = i.useMemo(() => {
    let e = [];
    return o.gh.forEach(t => e.push({
      value: t,
      label: t
    })), e
  }, []), m = i.useMemo(() => {
    var e;
    return null !== (e = null != u ? u : null == a ? void 0 : a.interests) && void 0 !== e ? e : new Set
  }, [u, null == a ? void 0 : a.interests]), p = i.useMemo(() => Array.from(m), [m]), h = i.useMemo(() => p.filter(e => o.gh.has(e)), [p]), C = i.useCallback(e => {
    n(new Set([...p.filter(e => !o.gh.has(e)), ...e]))
  }, [n, p]), b = i.useMemo(() => p.filter(e => o.WZ.has(e) || o.gh.has(e)), [p]), v = i.useCallback(e => {
    let t = new Set(m);
    t.delete(e), n(t)
  }, [n, m]);
  return (0, r.jsxs)("div", {
    className: c.content,
    children: [(0, r.jsxs)("div", {
      className: c.mainPanelContainer,
      children: [(0, r.jsx)(d, {
        title: A.NW.string(A.t.SXqVqq),
        icon: s.tBG,
        availableTraits: o.jK,
        selectedTraits: m,
        onUpdateTraits: n
      }), (0, r.jsx)(d, {
        title: A.NW.string(A.t["7uZoaG"]),
        icon: s.tBG,
        availableTraits: o.CT,
        selectedTraits: m,
        onUpdateTraits: n
      }), (0, r.jsx)(s.Text, {
        className: c.interestsCategoryTitle,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: A.NW.string(A.t.rU5dUV)
      }), (0, r.jsx)("div", {
        className: c.languageSelect,
        children: (0, r.jsx)(s.VcW, {
          wrapperClassName: c.input,
          options: f,
          value: h,
          onChange: C,
          placeholder: A.NW.string(A.t.GA91en),
          multi: !0
        })
      })]
    }), (0, r.jsx)("div", {
      className: c.fixedWidthSidebar,
      children: null != a && p.length > 0 && !g && (0, r.jsx)(l.Z, {
        guildId: t,
        progress: a,
        traitsToHighlight: b,
        maskDescription: !0,
        onTraitClick: v
      })
    })]
  })
}
let g = e => {
  let {
    guildId: t,
    title: n,
    description: i,
    onUpdateTraits: a,
    progress: l,
    traits: o,
    optional: d = !1,
    hidePreview: g = !1
  } = e;
  return (0, r.jsxs)("div", {
    className: c.slideContent,
    children: [d && (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: c.optionalTag,
      children: A.NW.string(A.t["vWEL6+"])
    }), (0, r.jsx)(s.X6q, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: n
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: i
    }), (0, r.jsx)(u, {
      guildId: t,
      onUpdateTraits: a,
      progress: l,
      availableTraits: o,
      hidePreview: g
    })]
  })
}