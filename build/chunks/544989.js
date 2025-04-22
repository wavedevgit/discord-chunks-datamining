/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => l
});
var r = n(200651);
n(192379);
var i = n(120356),
  a = n.n(i),
  o = n(228168),
  s = n(405751);

function l(e) {
  let {
    themeType: t,
    children: n
  } = e;
  return (0, r.jsx)("div", {
    className: a()(s.wrapper, {
      [s.biteSize]: t === o.lY.POPOUT,
      [s.fullSize]: t === o.lY.MODAL,
      [s.panel]: t === o.lY.SIDEBAR
    }),
    children: n
  })
}