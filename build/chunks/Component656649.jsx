/** Chunk was on 67127 **/
/** chunk id: 656649, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KJ: () => d,
  UV: () => s,
  vJ: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk726542 = require("./726542.js"),
  Chunk981631 = require("./981631.js"),
  Chunk734013 = require("./734013.js");

function u(e) {
  return null != e && Object.values(a.ABu).includes(e) ? e : null
}

function s(e) {
  let {
    children: t,
    platformType: n
  } = e, c = l.Z.get(n);
  return (0, r.jsx)("div", {
    className: i.verifyConnectedAccount,
    children: (0, r.jsxs)("div", {
      children: [(0, r.jsx)(d, {
        platform: c
      }), t]
    })
  })
}

function d(e) {
  let {
    platform: t,
    className: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(i.logos, n),
    children: [(0, r.jsx)("div", {
      className: o()(i.logo, i.logoDiscord)
    }), (0, r.jsx)("div", {
      className: i.logosDivider
    }), (0, r.jsx)("div", {
      className: i.logo,
      style: {
        backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")')
      }
    })]
  })
}