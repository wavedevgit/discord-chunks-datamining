/** Chunk was on 20501 **/
/** chunk id: 954794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk768762 = require("./768762.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk882029 = require("./882029.js"),
  Chunk955204 = require("./955204.js"),
  Chunk248998 = require("./248998.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk756828 = require("./756828.js");

function h(e) {
  let {
    onBackClick: t
  } = e, n = (0, s.e7)([d.Z], () => d.Z.getAllUnlockedAchievements()), h = r.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]), f = r.useMemo(() => Object.values(u.LG).filter(c.lm).filter(e => null == n[e.id]).sort((e, t) => e.rarity - t.rarity), [n]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.hjN, {
      children: (0, i.jsxs)(l.P3F, {
        onClick: t,
        className: g.backContainer,
        children: [(0, i.jsx)(o.Z, {
          direction: o.Z.Directions.LEFT,
          className: g.icon
        }), (0, i.jsx)(l.Text, {
          variant: "text-lg/normal",
          color: "text-default",
          children: p.intl.string(p.t["13/7kZ"])
        })]
      })
    }), (0, i.jsxs)("div", {
      className: g.headerContainer,
      children: [(0, i.jsxs)("div", {
        className: g.headerTextContainer,
        children: [(0, i.jsx)(l.X6q, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          children: p.intl.string(p.t["6jI0hY"])
        }), (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: p.intl.string(p.t.GuUItb)
        })]
      }), (0, i.jsx)("div", {
        className: g.headerIcon,
        children: (0, i.jsx)(l.rm8, {
          size: "custom",
          color: a.Z.unsafe_rawColors.ORANGE_345.css,
          width: 40,
          height: 40
        })
      })]
    }), h.length > 0 && (0, i.jsx)(l.hjN, {
      className: g.divider,
      children: (0, i.jsx)("div", {
        className: g.achievementGrid,
        children: h.map(e => {
          let {
            achievementId: t,
            dateUnlocked: n
          } = e;
          return (0, i.jsx)(m.Z, {
            achievementId: t,
            dateUnlocked: n
          }, t)
        })
      })
    }), f.length > 0 && (0, i.jsxs)(l.hjN, {
      className: g.divider,
      children: [(0, i.jsx)("div", {
        className: g.headerTextContainer,
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/bold",
          color: "header-secondary",
          children: p.intl.string(p.t.GFyMg4)
        })
      }), (0, i.jsx)("div", {
        className: g.achievementGrid,
        children: f.map(e => (0, i.jsx)(m.Z, {
          achievementId: e.id
        }, e.id))
      })]
    }), (0, i.jsx)(l.hjN, {
      className: g.divider,
      children: (0, i.jsx)("div", {
        className: g.bottomPadding
      })
    })]
  })
}