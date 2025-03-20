/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => C
}), n(47120), n(566702);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(392711),
  o = n(481060),
  A = n(442837),
  c = n(314897),
  d = n(353093),
  u = n(214715),
  g = n(18100),
  f = n(308083),
  m = n(388032),
  p = n(843747),
  h = n(154662);
let C = e => {
  let {
    guildId: t,
    handleUpdate: n,
    progress: s,
    error: C
  } = e, {
    interests: b
  } = s, [v, x] = i.useState(""), [N, j] = i.useState(0), E = (0, A.e7)([c.default], () => c.default.getId()), I = i.useMemo(() => (0, l.chunk)((0, d.XV)(f.i6, E), 9), [E]), O = [...I[N], ...I[(N + 1) % I.length]], y = i.useMemo(() => Array.from(b), [b]), w = i.useMemo(() => y.filter(e => !f.WZ.has(e) && !f.gh.has(e)), [y]), P = e => {
    let t = new Set(b);
    t.delete(e), n({
      interests: t
    })
  }, B = i.useCallback(e => {
    if (b.size === f.c4) return;
    let t = null != e ? e : v.trim();
    if (0 === t.length) return;
    let r = new Set(b);
    r.add(t), n({
      interests: r
    }), x("")
  }, [n, v, b]), D = i.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), B()
    }
  }, [B]), T = i.useCallback(() => {
    j(e => (e + 1) % I.length)
  }, [j, I]);
  return (0, r.jsxs)("div", {
    className: h.slideContent,
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: m.NW.string(m.t.V69HzM)
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: m.NW.format(m.t["BAK+ND"], {})
    }), null != C && (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: h.errorText,
      children: C
    }), (0, r.jsxs)("div", {
      className: h.content,
      children: [(0, r.jsxs)("div", {
        className: h.mainPanelContainer,
        children: [(0, r.jsxs)("div", {
          className: h.inputContainer,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            className: h.contentLabel,
            children: m.NW.string(m.t.qMh4Oj)
          }), (0, r.jsx)(o.oil, {
            autoFocus: !0,
            inputClassName: h.input,
            value: v,
            onKeyDown: D,
            onChange: x,
            placeholder: m.NW.string(m.t.axCpsL),
            maxLength: f.Sq,
            disabled: b.size === f.c4
          }), v.length > 0 && (0, r.jsx)(o.P3F, {
            onClick: () => B(v.trim()),
            className: a()(h.plusIcon, h.clickable),
            children: (0, r.jsx)(o.qJs, {
              size: "md",
              color: "currentColor",
              className: h.icon
            })
          }), v.length > 0 && (0, r.jsx)(o.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: h.enterToSearchText,
            children: m.NW.string(m.t.ZGkhJS)
          })]
        }), (0, r.jsx)(o.Text, {
          className: h.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: m.NW.string(m.t.P793o6)
        }), (0, r.jsx)(o.Epb, {
          items: O,
          renderItem: e => (0, r.jsx)(u.Z, {
            variant: "text-xs/semibold",
            color: "interactive-normal",
            text: e,
            selected: b.has(e),
            onClick: b.has(e) ? P : B
          }, e),
          maxLines: 2,
          className: h.interestsCategory,
          itemGapPx: 8,
          renderOverflow: () => null
        }), (0, r.jsx)("div", {
          children: (0, r.jsxs)(o.zxk, {
            color: o.Ttl.PRIMARY,
            onClick: T,
            className: p.rerollButton,
            innerClassName: p.innerRerollButton,
            children: [(0, r.jsx)(o.$2U, {
              size: "sm",
              color: "currentColor"
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/semibold",
              color: "none",
              children: m.NW.string(m.t.ldYCQ0)
            })]
          })
        })]
      }), (0, r.jsx)("div", {
        className: h.fixedWidthSidebar,
        children: y.length > 0 && (0, r.jsx)(g.Z, {
          guildId: t,
          progress: s,
          traitsToHighlight: w,
          maskDescription: !0,
          onTraitClick: P
        })
      })]
    })]
  })
}