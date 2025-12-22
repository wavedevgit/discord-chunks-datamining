/** Chunk was on web.js **/
/** chunk id: 691807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk282793 = require("./282793.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787411 = require("./787411.js");
let _ = e => {
  let {
    alwaysWhite: t = false
  } = e, n = (0, c.Fg)(), i = (0, s.ap)(n);
  return (0, r.jsx)(o.u, {
    text: f.intl.formatToPlainString(d.default["5xN/C1"], {
      premiumGroupProductName: (0, u.sO)()
    }),
    children: (0, r.jsx)("div", {
      className: a()(p.guildBoostUnavailableNotice, {
        [p.lightTheme]: !t && i
      }),
      children: (0, r.jsx)(l.Text, {
        variant: "eyebrow",
        color: t ? "always-white" : true,
        className: p.guildBoostUnavailableNoticeText,
        children: f.intl.string(f.t["5nrJDO"])
      })
    })
  })
}