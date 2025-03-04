/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  K: () => p,
  Z: () => f
});
var n = r(200651);
r(192379);
var l = r(120356),
  i = r.n(l),
  o = r(577852),
  s = r(134442),
  a = r(219574),
  c = r(661252);
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()],
  p = () => (0, n.jsx)("div", {
    className: i()(a.skeleton, c.shopCard),
    children: (0, n.jsxs)("div", {
      className: a.cardBody,
      children: [(0, n.jsx)("div", {
        className: a.cardAvatar
      }), (0, n.jsx)("div", {
        className: a.cardTitle
      }), (0, n.jsx)("div", {
        className: a.cardDescription
      }), (0, n.jsx)("div", {
        className: a.cardSummary
      })]
    })
  }),
  f = () => (0, n.jsx)("div", {
    className: o.skeletons,
    children: d.map(e => (0, n.jsxs)("div", {
      className: o.cardsContainer,
      children: [(0, n.jsx)("div", {
        className: i()(a.skeleton, s.shopBanner),
        children: (0, n.jsx)("div", {
          className: a.bannerBody
        })
      }), Array.from({
        length: e
      }, (e, t) => t).map(e => (0, n.jsx)(p, {}, e))]
    }, e))
  })