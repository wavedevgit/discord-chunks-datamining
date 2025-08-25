/** Chunk was on web.js **/
/** chunk id: 252748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./472816.js"), require("./794429.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk77498 = require("./77498.js"),
  Chunk768581 = require("./768581.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350917 = require("./350917.js");
let g = 4;

function E(e) {
  let {
    widgets: t,
    onClick: n
  } = e, o = (0, i.useMemo)(() => t.map(e => e.games.map(e => e.applicationId)).flat(), [t]), E = (0, s.e7)([u.Z], () => u.Z.canFetchDetectableGames()), [y, O] = (0, i.useState)([]), {
    themeType: v
  } = (0, _.z)(), I = v === p.l.SIDEBAR;
  return (0, i.useEffect)(() => {
    if (E) return void c.Z.getDetectableGames();
    O(o.map(e => u.Z.getDetectableGame(e)).filter(e => null != e).map(e => {
      var t;
      return {
        image: null != (t = d.ZP.getApplicationIconURL({
          id: e.id,
          icon: e.icon
        })) ? t : "",
        name: e.name
      }
    }).filter(e => "" !== e.image).slice(0, g))
  }, [o, E]), (0, r.jsx)(f.Z.Overlay, {
    children: (0, r.jsxs)(l.P3F, {
      "aria-label": h.intl.string(h.t.JjiwFx),
      className: a()(m.breadcrumb, {
        [m.mdPadding]: I
      }),
      onClick: n,
      children: [(0, r.jsx)(l.Text, {
        variant: I ? "text-sm/medium" : "text-xs/medium",
        children: h.intl.string(h.t.JjiwFx)
      }), (0, r.jsx)("div", {
        className: m.icons,
        children: y.map((e, t) => (0, r.jsx)(b, {
          iconUrl: e.image,
          name: e.name,
          displayCount: t === y.length - 1 && o.length > g,
          gameCount: o.length - y.length
        }, t))
      })]
    })
  })
}

function b(e) {
  let {
    iconUrl: t,
    name: n,
    displayCount: i,
    gameCount: o
  } = e;
  return (0, r.jsxs)("div", {
    className: m.icon,
    children: [(0, r.jsx)("img", {
      className: a()({
        [m.displayCount]: i
      }),
      src: t,
      alt: n
    }), i && (0, r.jsxs)(l.Text, {
      className: m.displayCountText,
      variant: "text-xs/medium",
      children: ["+", o]
    })]
  })
}