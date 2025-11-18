/** Chunk was on 71919 **/
/** chunk id: 656649, original params: e,s,n (module,exports,require) **/
require.d(exports, {
  KJ: () => u,
  UV: () => d,
  vJ: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  t = require.n(Chunk120356),
  Chunk726542 = require("./726542.js"),
  Chunk981631 = require("./981631.js"),
  Chunk655860 = require("./655860.js");

function c(e) {
  return null != e && Object.values(i.ABu).includes(e) ? e : null
}

function d(e) {
  let {
    children: s,
    platformType: n
  } = e, r = a.Z.get(n);
  return (0, l.jsx)("div", {
    className: o.verifyConnectedAccount,
    children: (0, l.jsxs)("div", {
      children: [(0, l.jsx)(u, {
        platform: r
      }), s]
    })
  })
}

function u(e) {
  let {
    platform: s,
    className: n
  } = e;
  return (0, l.jsxs)("div", {
    className: t()(o.logos, n),
    children: [(0, l.jsx)("div", {
      className: t()(o.logo, o.logoDiscord)
    }), (0, l.jsx)("div", {
      className: o.logosDivider
    }), (0, l.jsx)("div", {
      className: o.logo,
      style: {
        backgroundImage: 'url("'.concat(s.icon.whiteSVG, '")')
      }
    })]
  })
}