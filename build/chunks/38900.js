/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  K: () => p,
  Z: () => f
});
var n = r(200651);
r(192379);
var i = r(120356),
  l = r.n(i),
  o = r(800108),
  a = r(697604),
  s = r(615259),
  c = r(864544);
let d = () => 4 * Math.random() + 8,
  u = [d(), d(), d()],
  p = () => (0, n.jsx)("div", {
    className: l()(s.skeleton, c.shopCard),
    children: (0, n.jsxs)("div", {
      className: s.cardBody,
      children: [(0, n.jsx)("div", {
        className: s.cardAvatar
      }), (0, n.jsx)("div", {
        className: s.cardTitle
      }), (0, n.jsx)("div", {
        className: s.cardDescription
      }), (0, n.jsx)("div", {
        className: s.cardSummary
      })]
    })
  }),
  f = () => (0, n.jsx)("div", {
    className: o.skeletons,
    children: u.map(e => (0, n.jsxs)("div", {
      className: o.cardsContainer,
      children: [(0, n.jsx)("div", {
        className: l()(s.skeleton, a.shopBanner),
        children: (0, n.jsx)("div", {
          className: s.bannerBody
        })
      }), Array.from({
        length: e
      }, (e, t) => t).map(e => (0, n.jsx)(p, {}, e))]
    }, e))
  })