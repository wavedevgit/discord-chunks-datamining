/** Chunk was on 60667 **/
/** chunk id: 301656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk532197 = require("./532197.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk874486 = require("./874486.js"),
  Chunk927018 = require("./927018.js"),
  Chunk508971 = require("./508971.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk872722 = require("./872722.js");

function g(e) {
  let {
    onBackClick: t
  } = e, n = (0, l.bG)([d.A], () => d.A.getAllUnlockedAchievements()), g = i.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]), A = i.useMemo(() => Object.values(u.l0).filter(c.Vq).filter(e => null == n[e.id]).sort((e, t) => e.rarity - t.rarity), [n]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.DUT, {
      onClick: t,
      className: m.vv,
      children: [(0, r.jsx)(o.A, {
        direction: o.A.Directions.LEFT,
        className: m.Kk
      }), (0, r.jsx)(a.Text, {
        variant: "text-lg/normal",
        color: "text-default",
        children: p.intl.string(p.t["13/7kX"])
      })]
    }), (0, r.jsxs)("div", {
      className: m.N1,
      children: [(0, r.jsxs)("div", {
        className: m.if,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-lg/extrabold",
          color: "text-strong",
          children: p.intl.string(p.t["6jI0hd"])
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: p.intl.string(p.t.GuUItX)
        })]
      }), (0, r.jsx)("div", {
        className: m.nr,
        children: (0, r.jsx)(a.OR, {
          size: "custom",
          color: s.A.unsafe_rawColors.ORANGE_345.css,
          width: 40,
          height: 40
        })
      })]
    }), g.length > 0 && (0, r.jsx)("div", {
      className: m.yF,
      children: (0, r.jsx)("div", {
        className: m.Eh,
        children: g.map(e => {
          let {
            achievementId: t,
            dateUnlocked: n
          } = e;
          return (0, r.jsx)(_.A, {
            achievementId: t,
            dateUnlocked: n
          }, t)
        })
      })
    }), A.length > 0 && (0, r.jsxs)("div", {
      className: m.yF,
      children: [(0, r.jsx)("div", {
        className: m.if,
        children: (0, r.jsx)(a.Text, {
          variant: "text-md/bold",
          color: "text-default",
          children: p.intl.string(p.t.GFyMg1)
        })
      }), (0, r.jsx)("div", {
        className: m.Eh,
        children: A.map(e => (0, r.jsx)(_.A, {
          achievementId: e.id
        }, e.id))
      })]
    }), (0, r.jsx)("div", {
      className: m.yF,
      children: (0, r.jsx)("div", {
        className: m.F3
      })
    })]
  })
}