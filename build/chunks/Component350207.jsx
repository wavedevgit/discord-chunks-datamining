/** Chunk was on web.js **/
/** chunk id: 350207, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./467055.js"), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk835473 = require("./835473.js"),
  Chunk77498 = require("./77498.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350917 = require("./350917.js");
let v = 4;

function S(e) {
  let t = (0, u.Z)(e.map(e => e.applicationId));
  return (0, s.cj)([d.Z], () => Object.fromEntries(t.filter(p.lm).map(e => [e.id, d.Z.getGameByApplication(e)]).filter(e => {
    let [t, n] = e;
    return null != n
  })))
}

function I(e) {
  let {
    widgets: t = [],
    onClick: n,
    className: a
  } = e, {
    trackUserProfileAction: u
  } = (0, _.KZ)(), I = S(t.filter(e => e instanceof m.q)), C = (0, i.useMemo)(() => [...new Set(t.map(e => {
    if (e instanceof h.zy) return e.games.map(e => e.applicationId);
    if (e instanceof m.q) {
      var t;
      return null == (t = I[e.applicationId]) ? true : t.id
    }
  }).filter(p.lm).flat())], [t, I]), A = (0, s.e7)([d.Z], () => d.Z.canFetchDetectableGames()), [N, P] = (0, i.useState)([]), {
    themeType: R
  } = (0, E.z)(), D = R === b.l.SIDEBAR, w = (0, i.useRef)(false);
  return (0, i.useEffect)(() => {
    if (A) return void c.Z.getDetectableGames();
    P(C.map(e => d.Z.getDetectableGame(e)).filter(e => null != e).map(e => {
      var t;
      return {
        image: null != (t = f.ZP.getApplicationIconURL({
          id: e.id,
          icon: e.icon
        })) ? t : "",
        name: e.name
      }
    }).filter(e => "" !== e.image).slice(0, v))
  }, [C, A]), (0, i.useEffect)(() => {
    0 !== N.length && (w.current || (u({
      action: "VIEW_GAME_WIDGET_BREADCRUMB"
    }), w.current = true))
  }, [u, N.length]), (0, r.jsx)(l.P3F, {
    "aria-label": y.intl.string(y.t.JjiwFx),
    onClick: () => {
      u({
        action: "PRESS_GAME_WIDGET_BREADCRUMB"
      }), n()
    },
    className: O.breadcrumb,
    children: (0, r.jsxs)(g.Z.Overlay, {
      className: o()(O.innerContainer, a),
      children: [(0, r.jsx)(l.Text, {
        variant: D ? "text-sm/medium" : "text-xs/medium",
        children: y.intl.string(y.t.JjiwFx)
      }), (0, r.jsx)("div", {
        className: O.icons,
        children: N.map((e, t) => (0, r.jsx)(T, {
          iconUrl: e.image,
          name: e.name,
          displayCount: t === N.length - 1 && C.length > v,
          gameCount: C.length - N.length
        }, t))
      })]
    })
  })
}

function T(e) {
  let {
    iconUrl: t,
    name: n,
    displayCount: i,
    gameCount: a
  } = e;
  return (0, r.jsxs)("div", {
    className: O.icon,
    children: [(0, r.jsx)("img", {
      className: o()({
        [O.displayCount]: i
      }),
      src: t,
      alt: n
    }), i && (0, r.jsx)("div", {
      className: O.displayCountText,
      children: (0, r.jsxs)(l.Text, {
        variant: "text-xs/medium",
        className: O.displayCountTextColor,
        children: ["+", a]
      })
    })]
  })
}