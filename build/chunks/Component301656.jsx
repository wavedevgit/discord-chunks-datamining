/** Chunk was on web.js **/
/** chunk id: 301656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    onBackClick: t
  } = e, n = (0, a.bG)([u.A], () => u.A.getAllUnlockedAchievements()), h = i.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]), m = i.useMemo(() => Object.values(d.l0).filter(c.Vq).filter(e => null == n[e.id]).sort((e, t) => e.rarity - t.rarity), [n]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.DUT, {
      onClick: t,
      className: _.vv,
      children: [(0, r.jsx)(l.A, {
        direction: l.A.Directions.LEFT,
        className: _.Kk
      }), (0, r.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "text-default",
        children: p.intl.string(p.t["13/7kX"])
      })]
    }), (0, r.jsxs)("div", {
      className: _.N1,
      children: [(0, r.jsxs)("div", {
        className: _.if,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-lg/extrabold",
          color: "text-strong",
          children: p.intl.string(p.t["6jI0hd"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: p.intl.string(p.t.GuUItX)
        })]
      }), (0, r.jsx)("div", {
        className: _.nr,
        children: (0, r.jsx)(o.OR, {
          size: "custom",
          color: s.A.unsafe_rawColors.ORANGE_345.css,
          width: 40,
          height: 40
        })
      })]
    }), h.length > 0 && (0, r.jsx)("div", {
      className: _.yF,
      children: (0, r.jsx)("div", {
        className: _.Eh,
        children: h.map(e => {
          let {
            achievementId: t,
            dateUnlocked: n
          } = e;
          return (0, r.jsx)(f.A, {
            achievementId: t,
            dateUnlocked: n
          }, t)
        })
      })
    }), m.length > 0 && (0, r.jsxs)("div", {
      className: _.yF,
      children: [(0, r.jsx)("div", {
        className: _.if,
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/bold",
          color: "text-default",
          children: p.intl.string(p.t.GFyMg1)
        })
      }), (0, r.jsx)("div", {
        className: _.Eh,
        children: m.map(e => (0, r.jsx)(f.A, {
          achievementId: e.id
        }, e.id))
      })]
    }), (0, r.jsx)("div", {
      className: _.yF,
      children: (0, r.jsx)("div", {
        className: _.F3
      })
    })]
  })
}