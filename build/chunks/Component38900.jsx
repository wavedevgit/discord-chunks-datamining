/** Chunk was on 45620 **/
/** chunk id: 38900, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => g,
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk128922 = require("./128922.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk638758 = require("./638758.js"),
  Chunk887353 = require("./887353.js"),
  Chunk198501 = require("./198501.js"),
  Chunk300179 = require("./300179.js");
let g = () => (0, Chunk951288.jsx)("div", {
    className: i()(Chunk198501.skeleton, Chunk300179.shopCard),
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
  p = () => {
    let e = Chunk128922.Z.useConfig({
      location: "ShopSkeleton"
    }).showCardsV2;
    return (0, Chunk951288.jsx)("div", {
      className: Chunk198501.skeletonsContainer,
      children: Array.from({
        length: 3
      }).map((t, n) => (0, r.jsxs)("div", {
        className: c.cardsContainer,
        children: [e ? (0, r.jsx)("div", {
          className: i()(o.catalogBanner, u.bannerSkeletonV2)
        }) : (0, r.jsx)("div", {
          className: i()(u.skeleton, u.bannerSkeleton, o.catalogBanner),
          children: (0, r.jsx)("div", {
            className: u.bannerBody
          })
        }), Array.from({
          length: 12
        }, (t, n) => e ? (0, r.jsx)(a.Z, {}, n) : (0, r.jsx)(g, {}, n))]
      }, n))
    })
  }