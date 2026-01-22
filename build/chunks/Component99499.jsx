/** Chunk was on web.js **/
/** chunk id: 99499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx");
let l = e => {
  let {
    onInvite: t,
    disabled: n
  } = e;
  return (0, r.jsx)(a.DUT, {
    onClick: n ? true : t,
    children: (0, r.jsx)(i.m, {
      text: o.intl.string(s.default["U/DzKb"]),
      shouldShow: !n,
      children: (0, r.jsx)(a.Rvf, {
        size: "sm",
        color: n ? a.LU0.colors.ICON_SUBTLE : a.LU0.colors.ICON_STRONG
      })
    })
  })
}