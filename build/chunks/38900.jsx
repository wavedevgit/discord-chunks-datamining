/** Chunk was on 45620 **/
/** chunk id: 38900, original params: e,t,n (module,exports,require) **/
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
  p = () => <div className={a()(Chunk556559.skeleton, Chunk33588.shopCard)}><div className={Chunk556559.cardBody}>{<div className={Chunk556559.cardAvatar} />}{<div className={Chunk556559.cardTitle} />}{<div className={Chunk556559.cardDescription} />}{<div className={Chunk556559.cardSummary} />}</div></div>,
  g = () => <div className={Chunk484920.skeletons}>{d.map(e => (0, r.jsxs)("div", {
      className: i.cardsContainer,
      children: [(0, r.jsx)("div", {
        className: a()(s.skeleton, o.shopBanner),
        children: (0, r.jsx)("div", {
          className: s.bannerBody
        })
      }), Array.from({
        length: e
      }, (e, t) => t).map(e => (0, r.jsx)(p, {}, e))]
    }, e))}</div>