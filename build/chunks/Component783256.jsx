/** Chunk was on web.js **/
/** chunk id: 783256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./446912.js"), require("./896048.js"), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk429913 = require("./429913.js"),
  Chunk760751 = require("./760751.js"),
  Chunk486020 = require("./486020.js"),
  Chunk403362 = require("./403362.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk633075 = require("./633075.js"),
  Chunk289173 = require("./289173.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk856171 = require("./856171.js");
let v = 4;

function A(e) {
  let t = (0, u.A)(e.map(e => e.applicationId));
  return (0, o.cf)([d.A], () => Object.fromEntries(t.filter(p.Vq).map(e => [e.id, d.A.getGameByApplication(e)]).filter(e => {
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
  } = (0, _.NJ)(), I = A(t.filter(e => e instanceof h.R)), T = (0, i.useMemo)(() => [...new Set(t.map(e => {
    if (e instanceof m.Yy) return e.games.map(e => e.applicationId);
    if (e instanceof h.R) {
      var t;
      return null == (t = I[e.applicationId]) ? true : t.id
    }
  }).filter(p.Vq).flat())], [t, I]), C = (0, o.bG)([d.A], () => d.A.canFetchDetectableGames()), [N, R] = (0, i.useState)([]), {
    themeType: w
  } = (0, E.E)(), P = w === y.d.SIDEBAR, D = (0, i.useRef)(false);
  return (0, i.useEffect)(() => {
    C ? c.A.getDetectableGames() : R(T.map(e => d.A.getDetectableGame(e)).filter(e => null != e).map(e => {
      var t;
      return {
        image: null != (t = f.Ay.getApplicationIconURL({
          id: e.id,
          icon: e.icon
        })) ? t : "",
        name: e.name
      }
    }).filter(e => "" !== e.image).slice(0, v))
  }, [T, C]), (0, i.useEffect)(() => {
    0 === N.length || D.current || (u({
      action: "VIEW_GAME_WIDGET_BREADCRUMB"
    }), D.current = true)
  }, [u, N.length]), (0, r.jsx)(l.DUT, {
    "aria-label": b.intl.string(b.t.JjiwFx),
    onClick: () => {
      u({
        action: "PRESS_GAME_WIDGET_BREADCRUMB"
      }), n()
    },
    className: O.QF,
    children: (0, r.jsxs)(g.A.Overlay, {
      className: s()(O.WH, a),
      children: [(0, r.jsx)(l.Text, {
        variant: P ? "text-sm/medium" : "text-xs/medium",
        children: b.intl.string(b.t.JjiwFx)
      }), (0, r.jsx)("div", {
        className: O.Pt,
        children: N.map((e, t) => (0, r.jsx)(S, {
          iconUrl: e.image,
          name: e.name,
          displayCount: t === N.length - 1 && T.length > v,
          gameCount: T.length - N.length
        }, t))
      })]
    })
  })
}

function S(e) {
  let {
    iconUrl: t,
    name: n,
    displayCount: i,
    gameCount: a
  } = e;
  return (0, r.jsxs)("div", {
    className: O.Kk,
    children: [(0, r.jsx)("img", {
      className: s()({
        [O.um]: i
      }),
      src: t,
      alt: n
    }), i && (0, r.jsx)("div", {
      className: O.pp,
      children: (0, r.jsxs)(l.Text, {
        variant: "text-xs/medium",
        className: O.gq,
        children: ["+", a]
      })
    })]
  })
}