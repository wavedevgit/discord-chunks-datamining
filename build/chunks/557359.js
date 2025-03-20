/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  A: () => h
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(793030),
  o = n(442837),
  A = n(481060),
  c = n(296991),
  d = n(999382),
  u = n(217472),
  g = n(651390),
  f = n(981631),
  m = n(388032),
  p = n(924533);

function h(e) {
  let {
    requireTerms: t,
    rules: n
  } = e, s = (0, o.e7)([d.Z], () => d.Z.getProps().guild), h = null == s ? void 0 : s.id, C = i.useCallback(e => {
    if (null == h || null == n) return null;
    u.Z.setPendingInviteRules(h, e, [...n])
  }, [h, n]), b = i.useCallback(e => {
    if (null == h) return null;
    u.Z.setPendingInviteRules(h, t, e)
  }, [h, t]);
  if (null == s) return null;
  if (null == n) return (0, r.jsx)(A.$jN, {});
  let v = !s.hasFeature(f.oNc.CLAN);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: p.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: p.headerText,
        children: [(0, r.jsx)(l.X6, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: m.NW.string(m.t.d21uOj)
        }), (0, r.jsx)(l.xv, {
          tag: "p",
          variant: "text-sm/medium",
          color: "text-secondary",
          className: p.bodyText,
          children: m.NW.string(m.t.SzpUBA)
        })]
      }), v && (0, r.jsx)(A.rsf, {
        onChange: C,
        checked: t
      })]
    }), t && (0, r.jsx)(g.c, {
      guildId: s.id
    }), (0, r.jsx)("div", {
      className: a()(p.rules, {
        [p.disabled]: !t
      }),
      children: (0, r.jsxs)("div", {
        inert: t ? void 0 : "",
        children: [(0, r.jsx)(l.X6, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: p.rulesHeader,
          children: m.NW.string(m.t.XcAzbm)
        }), (0, r.jsx)(c.k, {
          guild: s,
          rules: n,
          setRules: b
        })]
      })
    })]
  })
}