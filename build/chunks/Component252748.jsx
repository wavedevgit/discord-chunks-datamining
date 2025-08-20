/** Chunk was on web.js **/
/** chunk id: 252748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
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
  Chunk502762 = require("./502762.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350917 = require("./350917.js");
let h = 4;

function m(e) {
  let {
    widgets: t,
    onClick: n
  } = e, a = (0, i.useMemo)(() => t.map(e => e.games.map(e => e.applicationId)).flat(), [t]), o = (0, s.e7)([u.Z], () => u.Z.canFetchDetectableGames()), [m, E] = (0, i.useState)([]);
  return (0, i.useEffect)(() => {
    if (o) return void c.Z.getDetectableGames();
    E(a.map(e => u.Z.getDetectableGame(e)).filter(e => null != e).map(e => {
      var t;
      return {
        image: null != (t = d.ZP.getApplicationIconURL({
          id: e.id,
          icon: e.icon
        })) ? t : "",
        name: e.name
      }
    }).filter(e => "" !== e.image).slice(0, h))
  }, [a, o]), (0, r.jsx)(f.Z.Overlay, {
    children: (0, r.jsxs)(l.P3F, {
      "aria-label": _.intl.string(_.t.JjiwFx),
      className: p.breadcrumb,
      onClick: n,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: _.intl.string(_.t.JjiwFx)
      }), (0, r.jsx)("div", {
        className: p.icons,
        children: m.map((e, t) => (0, r.jsx)(g, {
          iconUrl: e.image,
          name: e.name,
          displayCount: t === m.length - 1 && a.length > h,
          gameCount: a.length - m.length
        }, t))
      })]
    })
  })
}

function g(e) {
  let {
    iconUrl: t,
    name: n,
    displayCount: i,
    gameCount: a
  } = e;
  return (0, r.jsxs)("div", {
    className: p.icon,
    children: [(0, r.jsx)("img", {
      className: o()({
        [p.displayCount]: i
      }),
      src: t,
      alt: n
    }), i && (0, r.jsxs)(l.Text, {
      className: p.displayCountText,
      variant: "text-xs/medium",
      children: ["+", a]
    })]
  })
}