/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => p
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(430824),
  A = n(900681),
  d = n(214715),
  u = n(308083),
  g = n(388032),
  f = n(969233);

function m(e) {
  let {
    trait: t,
    selected: n,
    onClick: s
  } = e, [l, o] = i.useState(!1), c = i.useCallback(() => o(!0), []), A = i.useCallback(() => o(!1), []);
  return (0, r.jsx)(d.Z, {
    variant: "text-xs/semibold",
    color: l ? "text-muted" : "interactive-active",
    className: a()(f.trait, {
      [f.strikethrough]: l
    }),
    text: t,
    selected: n,
    onMouseEnter: n ? c : void 0,
    onMouseLeave: n ? A : void 0,
    onClick: n ? s : void 0
  }, t)
}

function p(e) {
  var t;
  let {
    guildId: n,
    progress: s,
    traitsToHighlight: d,
    maskDescription: p,
    maskTraits: h,
    onTraitClick: C
  } = e, b = (0, l.e7)([c.Z], () => c.Z.getGuild(n)), {
    interests: v,
    description: x,
    playstyle: N,
    wildcardDescriptors: j,
    brandPrimaryColor: E
  } = s, I = (0, o.dQu)(o.TVs.colors.TEXT_BRAND), O = Array.from(v), y = i.useMemo(() => null != d ? new Set(d) : new Set, [d]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: a()(f.description, p ? f.descriptionBorderMask : void 0),
      children: [(0, r.jsx)("div", {
        className: p ? f.descriptionMask : void 0
      }), (0, r.jsx)(o.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        lineClamp: 1,
        children: null == b ? void 0 : b.name
      }), (0, r.jsxs)("div", {
        className: f.clanInfoRow,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xxs/normal",
          className: f.clanInfoItem,
          children: (0, r.jsx)("span", {
            role: "img",
            "aria-label": g.NW.string(g.t.eMSBIC),
            children: "\uD83C\uDFAE"
          })
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          className: f.clanInfoItem,
          children: null !== (t = (0, u.mv)(N)) && void 0 !== t ? t : g.NW.string(g.t.JijC4O)
        }), null != b && (0, r.jsx)(A.c, {
          wildcardDescriptors: j,
          primaryColor: null != E ? E : I.hex()
        })]
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: f.descriptionText,
        children: (null == x ? void 0 : x.length) > 0 ? x : g.NW.string(g.t["/pfXKi"])
      })]
    }), (0, r.jsxs)("div", {
      className: a()(f.tagsContainer, h ? f.traitsBorderMask : void 0),
      children: [(0, r.jsx)("div", {
        className: h ? f.traitsMask : void 0
      }), (0, r.jsxs)("div", {
        className: f.tagsCount,
        children: [(0, r.jsx)(o.DgT, {
          size: "xxs",
          className: f.tags
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: g.NW.format(g.t["3vJqtr"], {
            n: O.length
          })
        })]
      }), (0, r.jsx)("div", {
        className: f.traits,
        children: O.map(e => (0, r.jsx)(m, {
          trait: e,
          selected: y.has(e),
          onClick: C
        }, e))
      })]
    })]
  })
}