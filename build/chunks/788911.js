/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(984981);
let s = e => {
  let {
    message: t,
    className: n,
    noResultsImageURL: i,
    forceLightTheme: s,
    suggestions: l
  } = e, c = null != i ? {
    backgroundImage: "url(".concat(i, ")")
  } : {};
  return (0, r.jsx)("div", {
    className: o()({
      [a.forceLightTheme]: s
    }, n),
    children: (0, r.jsxs)("div", {
      className: a.wrapper,
      children: [(0, r.jsx)("div", {
        className: a.sadImage,
        style: c
      }), (0, r.jsx)("div", {
        children: t
      }), l]
    })
  })
}