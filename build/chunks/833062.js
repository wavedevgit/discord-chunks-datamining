/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(200651),
  i = n(925329),
  o = n(38219);

function a(e) {
  let {
    application: t,
    useComma: n = !1
  } = e;
  return (0, r.jsxs)("div", {
    className: o.applicationNameWrapper,
    children: [(0, r.jsx)(i.Z, {
      className: o.applicationIcon,
      game: t,
      size: i.Z.Sizes.XSMALL
    }), (0, r.jsx)("strong", {
      children: "".concat(t.name).concat(n ? ", " : "")
    })]
  })
}