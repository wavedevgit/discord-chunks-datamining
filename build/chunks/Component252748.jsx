/** Chunk was on web.js **/
/** chunk id: 252748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./472816.js"), require("./794429.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk77498 = require("./77498.js"),
  Chunk768581 = require("./768581.js"),
  Chunk836197 = require("./836197.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk987364 = require("./987364.js");
let E = 4;

function b(e) {
  let {
    widgets: t,
    onClick: n
  } = e, a = (0, i.useMemo)(() => [...new Set(t.map(e => (0, f.W)(e) ? e.games.map(e => e.applicationId) : []).flat())], [t]), o = (0, s.e7)([u.Z], () => u.Z.canFetchDetectableGames()), [b, O] = (0, i.useState)([]), {
    themeType: v
  } = (0, p.z)(), I = v === h.l.SIDEBAR;
  return (0, i.useEffect)(() => {
    if (o) return void c.Z.getDetectableGames();
    O(a.map(e => u.Z.getDetectableGame(e)).filter(e => null != e).map(e => {
      var t;
      return {
        image: null != (t = d.ZP.getApplicationIconURL({
          id: e.id,
          icon: e.icon
        })) ? t : "",
        name: e.name
      }
    }).filter(e => "" !== e.image).slice(0, E))
  }, [a, o]), (0, r.jsx)(l.P3F, {
    "aria-label": m.intl.string(m.t.JjiwFx),
    onClick: n,
    className: g.breadcrumb,
    children: (0, r.jsxs)(_.Z.Overlay, {
      className: g.innerContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: I ? "text-sm/medium" : "text-xs/medium",
        children: m.intl.string(m.t.JjiwFx)
      }), (0, r.jsx)("div", {
        className: g.icons,
        children: b.map((e, t) => (0, r.jsx)(y, {
          iconUrl: e.image,
          name: e.name,
          displayCount: t === b.length - 1 && a.length > E,
          gameCount: a.length - b.length
        }, t))
      })]
    })
  })
}

function y(e) {
  let {
    iconUrl: t,
    name: n,
    displayCount: i,
    gameCount: a
  } = e;
  return (0, r.jsxs)("div", {
    className: g.icon,
    children: [(0, r.jsx)("img", {
      className: o()({
        [g.displayCount]: i
      }),
      src: t,
      alt: n
    }), i && (0, r.jsx)("div", {
      className: g.displayCountText,
      children: (0, r.jsxs)(l.Text, {
        variant: "text-xs/medium",
        className: g.displayCountTextColor,
        children: ["+", a]
      })
    })]
  })
}