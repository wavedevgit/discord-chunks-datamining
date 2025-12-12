/** Chunk was on web.js **/
/** chunk id: 546090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx");
let l = e => {
  let {
    onInvite: t,
    disabled: n
  } = e;
  return (0, r.jsx)(a.P3F, {
    onClick: n ? true : t,
    children: (0, r.jsx)(i.u, {
      text: s.intl.string(o.default["U/DzKb"]),
      shouldShow: !n,
      children: (0, r.jsx)(a.oLu, {
        size: "sm",
        color: n ? a.TVs.colors.ICON_SUBTLE : a.TVs.colors.ICON_STRONG
      })
    })
  })
}