/** Chunk was on 45620 **/
/** chunk id: 38900, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => f,
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk128922 = require("./128922.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk55783 = require("./55783.js"),
  Chunk654664 = require("./654664.js"),
  Chunk970217 = require("./970217.js"),
  Chunk670185 = require("./670185.js");
let f = () => (0, Chunk54381.jsx)("div", {
    className: i()(Chunk970217.skeleton, Chunk670185.shopCard),
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk970217.cardBody,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk970217.cardAvatar
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk970217.cardTitle
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk970217.cardDescription
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk970217.cardSummary
      })]
    })
  }),
  g = () => {
    let e = Chunk128922.Z.useConfig({
      location: "ShopSkeleton"
    }).showCardsV2;
    return (0, Chunk54381.jsx)("div", {
      className: Chunk970217.skeletonsContainer,
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
        }, (t, n) => e ? (0, r.jsx)(s.Z, {}, n) : (0, r.jsx)(f, {}, n))]
      }, n))
    })
  }