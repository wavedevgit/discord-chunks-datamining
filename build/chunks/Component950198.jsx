/** Chunk was on 81881 **/
/** chunk id: 950198, original params: e,t,r (module,exports,require) **/
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
  return null != e && Object.values(i.fg2).includes(e) ? e : null
}

function d(e) {
  let {
    children: t,
    platformType: r
  } = e, a = o.A.get(r);
  return (0, n.jsx)("div", {
    className: s.uX,
    children: (0, n.jsxs)("div", {
      children: [(0, n.jsx)(u, {
        platform: a
      }), t]
    })
  })
}

function u(e) {
  let {
    platform: t,
    className: r
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(s.ry, r),
    children: [(0, n.jsx)("div", {
      className: l()(s.wm, s.Sn)
    }), (0, n.jsx)("div", {
      className: s.mM
    }), (0, n.jsx)("div", {
      className: s.wm,
      style: {
        backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")')
      }
    })]
  })
}