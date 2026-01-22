/** Chunk was on 81881 **/
/** chunk id: 950198, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Jq: () => u,
  mP: () => d,
  mw: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk573648 = require("./573648.js"),
  Chunk652215 = require("./652215.js"),
  Chunk955964 = require("./955964.js");

function c(e) {
  return null != e && Object.values(s.fg2).includes(e) ? e : null
}

function d(e) {
  let {
    children: t,
    platformType: n
  } = e, r = i.A.get(n);
  return (0, a.jsx)("div", {
    className: o.uX,
    children: (0, a.jsxs)("div", {
      children: [(0, a.jsx)(u, {
        platform: r
      }), t]
    })
  })
}

function u(e) {
  let {
    platform: t,
    className: n
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(o.ry, n),
    children: [(0, a.jsx)("div", {
      className: l()(o.wm, o.Sn)
    }), (0, a.jsx)("div", {
      className: o.mM
    }), (0, a.jsx)("div", {
      className: o.wm,
      style: {
        backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")')
      }
    })]
  })
}