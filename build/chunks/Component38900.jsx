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
  Chunk955210 = require("./955210.js"),
  Chunk737937 = require("./737937.js"),
  Chunk524718 = require("./524718.js"),
  Chunk726773 = require("./726773.js");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()],
  p = () => (0, Chunk255367.jsx)("div", {
    className: a()(Chunk524718.skeleton, Chunk726773.shopCard),
    children: (0, Chunk255367.jsxs)("div", {
      className: Chunk524718.cardBody,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk524718.cardAvatar
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk524718.cardTitle
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk524718.cardDescription
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk524718.cardSummary
      })]
    })
  }),
  g = () => (0, Chunk255367.jsx)("div", {
    className: Chunk955210.skeletons,
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