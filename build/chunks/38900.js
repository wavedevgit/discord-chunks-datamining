/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  K: () => g,
  Z: () => h
});
var r = n(200651);
n(192379);
var l = n(120356),
  a = n.n(l),
  s = n(577852),
  o = n(134442),
  i = n(219574),
  d = n(661252);
let c = () => 4 * Math.random() + 8,
  u = [c(), c(), c()],
  g = () => (0, r.jsx)("div", {
    className: a()(i.skeleton, d.shopCard),
    children: (0, r.jsxs)("div", {
      className: i.cardBody,
      children: [(0, r.jsx)("div", {
        className: i.cardAvatar
      }), (0, r.jsx)("div", {
        className: i.cardTitle
      }), (0, r.jsx)("div", {
        className: i.cardDescription
      }), (0, r.jsx)("div", {
        className: i.cardSummary
      })]
    })
  }),
  h = () => (0, r.jsx)("div", {
    className: s.skeletons,
    children: u.map(e => (0, r.jsxs)("div", {
      className: s.cardsContainer,
      children: [(0, r.jsx)("div", {
        className: a()(i.skeleton, o.shopBanner),
        children: (0, r.jsx)("div", {
          className: i.bannerBody
        })
      }), Array.from({
        length: e
      }, (e, t) => t).map(e => (0, r.jsx)(g, {}, e))]
    }, e))
  })