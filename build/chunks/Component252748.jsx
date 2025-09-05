/** Chunk was on web.js **/
/** chunk id: 252748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  Chunk785717 = require("./785717.jsx"),
  Chunk836197 = require("./836197.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350917 = require("./350917.js");
let b = 4;

function y(e) {
  let {
    widgets: t,
    onClick: n
  } = e, {
    trackUserProfileAction: a
  } = (0, f.KZ)(), o = (0, i.useMemo)(() => [...new Set(t.map(e => (0, _.W)(e) ? e.games.map(e => e.applicationId) : []).flat())], [t]), y = (0, s.e7)([u.Z], () => u.Z.canFetchDetectableGames()), [v, I] = (0, i.useState)([]), {
    themeType: T
  } = (0, h.z)(), S = T === m.l.SIDEBAR;
  return (0, i.useEffect)(() => {
    if (y) return void c.Z.getDetectableGames();
    I(o.map(e => u.Z.getDetectableGame(e)).filter(e => null != e).map(e => {
      var t;
      return {
        image: null != (t = d.ZP.getApplicationIconURL({
          id: e.id,
          icon: e.icon
        })) ? t : "",
        name: e.name
      }
    }).filter(e => "" !== e.image).slice(0, b))
  }, [o, y]), (0, r.jsx)(l.P3F, {
    "aria-label": g.intl.string(g.t.JjiwFx),
    onClick: () => {
      a({
        action: "PRESS_GAME_WIDGET_BREADCRUMB"
      }), n()
    },
    className: E.breadcrumb,
    children: (0, r.jsxs)(p.Z.Overlay, {
      className: E.innerContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: S ? "text-sm/medium" : "text-xs/medium",
        children: g.intl.string(g.t.JjiwFx)
      }), (0, r.jsx)("div", {
        className: E.icons,
        children: v.map((e, t) => (0, r.jsx)(O, {
          iconUrl: e.image,
          name: e.name,
          displayCount: t === v.length - 1 && o.length > b,
          gameCount: o.length - v.length
        }, t))
      })]
    })
  })
}

function O(e) {
  let {
    iconUrl: t,
    name: n,
    displayCount: i,
    gameCount: a
  } = e;
  return (0, r.jsxs)("div", {
    className: E.icon,
    children: [(0, r.jsx)("img", {
      className: o()({
        [E.displayCount]: i
      }),
      src: t,
      alt: n
    }), i && (0, r.jsx)("div", {
      className: E.displayCountText,
      children: (0, r.jsxs)(l.Text, {
        variant: "text-xs/medium",
        className: E.displayCountTextColor,
        children: ["+", a]
      })
    })]
  })
}