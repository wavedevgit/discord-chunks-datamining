/** Chunk was on web.js **/
/** chunk id: 926294, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk450433 = require("./450433.js");

function l(e) {
  let {
    className: t
  } = e, [n] = i.useState(() => Math.floor(60 * Math.random()) + 20), [a] = i.useState(() => Math.floor(60 * Math.random()) + 20), [l] = i.useState(() => Math.floor(1600 * Math.random()) / 1e3);
  return (0, r.jsx)("div", {
    className: o()(t, s.placeholderCard),
    style: {
      animationDelay: "".concat(l, "s")
    },
    children: (0, r.jsxs)("div", {
      className: s.details,
      children: [(0, r.jsx)("div", {
        className: s.titleContainer,
        children: (0, r.jsx)("div", {
          className: s.placeholderTitle,
          style: {
            width: "".concat(n, "%")
          }
        })
      }), (0, r.jsx)("div", {
        className: s.descriptionContainer,
        children: (0, r.jsx)("div", {
          className: s.placeholderDescription,
          style: {
            width: "".concat(a, "%")
          }
        })
      })]
    })
  })
}