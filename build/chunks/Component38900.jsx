/** Chunk was on 45620 **/
/** chunk id: 38900, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => p,
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk887353 = require("./887353.js"),
  Chunk923732 = require("./923732.js"),
  Chunk198501 = require("./198501.js"),
  Chunk300179 = require("./300179.js");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()],
  p = () => (0, Chunk951288.jsx)("div", {
    className: a()(Chunk198501.skeleton, Chunk300179.shopCard),
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk198501.cardBody,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk198501.cardAvatar
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk198501.cardTitle
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk198501.cardDescription
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk198501.cardSummary
      })]
    })
  }),
  g = () => (0, Chunk951288.jsx)("div", {
    className: Chunk887353.skeletons,
    children: d.map(e => (0, n.jsxs)("div", {
      className: i.cardsContainer,
      children: [(0, n.jsx)("div", {
        className: a()(s.skeleton, o.shopBanner),
        children: (0, n.jsx)("div", {
          className: s.bannerBody
        })
      }), Array.from({
        length: e
      }, (e, t) => t).map(e => (0, n.jsx)(p, {}, e))]
    }, e))
  })