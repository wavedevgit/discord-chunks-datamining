/** Chunk was on 45620 **/
/** chunk id: 38900, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => p,
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk484920 = require("./484920.js"),
  Chunk544348 = require("./544348.js"),
  Chunk556559 = require("./556559.js"),
  Chunk33588 = require("./33588.js");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()],
  p = () => (0, Chunk255367.jsx)("div", {
    className: a()(Chunk556559.skeleton, Chunk33588.shopCard),
    children: (0, Chunk255367.jsxs)("div", {
      className: Chunk556559.cardBody,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk556559.cardAvatar
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk556559.cardTitle
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk556559.cardDescription
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk556559.cardSummary
      })]
    })
  }),
  g = () => (0, Chunk255367.jsx)("div", {
    className: Chunk484920.skeletons,
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