/** Chunk was on 60667 **/
/** chunk id: 99499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx");
let o = e => {
  let {
    onInvite: t,
    disabled: n
  } = e;
  return (0, r.jsx)(l.DUT, {
    onClick: n ? true : t,
    children: (0, r.jsx)(i.m, {
      text: a.intl.string(s.default["U/DzKb"]),
      shouldShow: !n,
      children: (0, r.jsx)(l.Rvf, {
        size: "sm",
        color: n ? l.LU0.colors.ICON_SUBTLE : l.LU0.colors.ICON_STRONG
      })
    })
  })
}