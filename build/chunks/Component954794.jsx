/** Chunk was on web.js **/
/** chunk id: 954794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk768762 = require("./768762.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk882029 = require("./882029.js"),
  Chunk955204 = require("./955204.js"),
  Chunk248998 = require("./248998.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk599710 = require("./599710.js");

function h(e) {
  let {
    onBackClick: t
  } = e, n = (0, a.e7)([u.Z], () => u.Z.getAllUnlockedAchievements()), h = i.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]), m = i.useMemo(() => Object.values(d.LG).filter(c.lm).filter(e => null == n[e.id]).sort((e, t) => e.rarity - t.rarity), [n]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.P3F, {
      onClick: t,
      className: p.backContainer,
      children: [(0, r.jsx)(l.Z, {
        direction: l.Z.Directions.LEFT,
        className: p.icon
      }), (0, r.jsx)(s.Text, {
        variant: "text-lg/normal",
        color: "text-default",
        children: _.intl.string(_.t["13/7kX"])
      })]
    }), (0, r.jsxs)("div", {
      className: p.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: p.headerTextContainer,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          children: _.intl.string(_.t["6jI0hd"])
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: _.intl.string(_.t.GuUItX)
        })]
      }), (0, r.jsx)("div", {
        className: p.headerIcon,
        children: (0, r.jsx)(s.rm8, {
          size: "custom",
          color: o.Z.unsafe_rawColors.ORANGE_345.css,
          width: 40,
          height: 40
        })
      })]
    }), h.length > 0 && (0, r.jsx)("div", {
      className: p.divider,
      children: (0, r.jsx)("div", {
        className: p.achievementGrid,
        children: h.map(e => {
          let {
            achievementId: t,
            dateUnlocked: n
          } = e;
          return (0, r.jsx)(f.Z, {
            achievementId: t,
            dateUnlocked: n
          }, t)
        })
      })
    }), m.length > 0 && (0, r.jsxs)("div", {
      className: p.divider,
      children: [(0, r.jsx)("div", {
        className: p.headerTextContainer,
        children: (0, r.jsx)(s.Text, {
          variant: "text-md/bold",
          color: "header-secondary",
          children: _.intl.string(_.t.GFyMg1)
        })
      }), (0, r.jsx)("div", {
        className: p.achievementGrid,
        children: m.map(e => (0, r.jsx)(f.Z, {
          achievementId: e.id
        }, e.id))
      })]
    }), (0, r.jsx)("div", {
      className: p.divider,
      children: (0, r.jsx)("div", {
        className: p.bottomPadding
      })
    })]
  })
}