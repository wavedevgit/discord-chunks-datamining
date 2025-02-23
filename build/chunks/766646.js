/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  n: () => s
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(815909);

function s(e) {
  let {
    id: t,
    tag: n = "span",
    showOnFocus: i,
    children: s
  } = e;
  return (0, r.jsx)(n, {
    id: t,
    className: o()({
      [a.hiddenVisually]: !i,
      [a.showOnFocus]: i
    }),
    children: s
  })
}