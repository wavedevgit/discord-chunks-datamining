/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => O
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(399606),
  a = n(780384),
  l = n(481060),
  o = n(210887),
  A = n(430824),
  c = n(999382),
  d = n(8426),
  u = n(969632),
  g = n(998164),
  f = n(340189),
  m = n(507317),
  p = n(399614),
  h = n(387960),
  C = n(806742),
  b = n(388032),
  v = n(668813),
  x = n(91716),
  N = n(470264),
  j = n(710043),
  E = n(847950);

function I(e) {
  let {
    guild: t,
    saveOnClose: n
  } = e, [A, c] = i.useState("new"), I = i.useMemo(() => [{
    value: "new",
    name: b.NW.string(b.t["4e5u3t"])
  }, {
    value: "existing",
    name: b.NW.string(b.t.cmkOsb)
  }], []), O = (0, s.e7)([o.Z], () => o.Z.theme);
  i.useEffect(() => () => {
    let e = u.Z.getSettings();
    (0, d.oo)(t.id, e)
  }, [n, t.id]);
  let y = i.useMemo(() => (0, a.ap)(O) ? "existing" === A ? N : E : "existing" === A ? x : j, [A, O]);
  return (0, r.jsxs)("div", {
    className: v.page,
    children: [(0, r.jsxs)("div", {
      className: v.leftColumn,
      children: [(0, r.jsx)(l.X6q, {
        className: v.header,
        variant: "heading-lg/extrabold",
        children: b.NW.string(b.t.tbUZVl)
      }), (0, r.jsx)("div", {
        className: v.descriptionSection,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: b.NW.string(b.t.DvHCq6)
        })
      }), (0, r.jsx)("div", {
        className: v.section,
        children: (0, r.jsx)(C.Z, {
          guildId: t.id
        })
      }), (0, r.jsx)("div", {
        className: v.sectionSeparator
      }), (0, r.jsx)(l.X6q, {
        className: v.header,
        variant: "heading-lg/extrabold",
        children: b.NW.string(b.t["roY/ws"])
      }), (0, r.jsx)("div", {
        className: v.descriptionSection,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: b.NW.format(b.t["/lWYYW"], {})
        })
      }), (0, r.jsx)("div", {
        className: v.section,
        children: (0, r.jsx)(f.Z, {})
      }), (0, r.jsx)(g.Z, {
        guildId: t.id
      }), (0, r.jsx)("div", {
        className: v.sectionSeparator
      }), (0, r.jsx)(l.X6q, {
        className: v.header,
        variant: "heading-lg/extrabold",
        children: b.NW.string(b.t.hEjHyM)
      }), (0, r.jsxs)("div", {
        className: v.descriptionSection,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: b.NW.string(b.t.YnvKVF)
        }), (0, r.jsxs)("ul", {
          className: v.bulletList,
          children: [(0, r.jsx)("li", {
            children: (0, r.jsx)(l.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: b.NW.string(b.t["6jEvRU"])
            })
          }), (0, r.jsx)("li", {
            children: (0, r.jsx)(l.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: b.NW.string(b.t["Fq+UsL"])
            })
          }), (0, r.jsx)("li", {
            children: (0, r.jsx)(l.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: b.NW.string(b.t.LeEPoK)
            })
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: v.section,
        children: [(0, r.jsx)(h.Z, {
          guildId: t.id
        }), (0, r.jsx)(p.Z, {
          guildId: t.id
        })]
      }), (0, r.jsx)("div", {
        className: v.sectionSeparator
      }), (0, r.jsx)(m.Z, {
        guild: t
      })]
    }), (0, r.jsxs)("div", {
      className: v.rightColumn,
      children: [(0, r.jsx)("div", {
        className: v.centeredSection,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: b.NW.string(b.t.EVV6ub)
        })
      }), (0, r.jsx)("img", {
        className: v.previewImage,
        src: y,
        alt: b.NW.string(b.t.ST4UOz)
      }), (0, r.jsx)(l.sY7, {
        options: I,
        value: A,
        onChange: e => c(e.value),
        look: "pill"
      })]
    })]
  })
}

function O(e) {
  let {
    saveOnClose: t
  } = e, n = (0, s.e7)([c.Z, A.Z], () => {
    let e = c.Z.getGuildId();
    return A.Z.getGuild(e)
  });
  return null == n ? null : (0, r.jsx)(I, {
    guild: n,
    saveOnClose: t
  })
}