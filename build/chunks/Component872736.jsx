/** Chunk was on web.js **/
/** chunk id: 872736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk695346 = require("./695346.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    legacyUsername: t,
    pendingLegacyUsernameDisabled: n
  } = e, l = o.R_.useSetting(), c = true !== n ? n : l;
  return (0, r.jsx)(i.rsf, {
    label: s.intl.string(s.t["3cWDuO"]),
    description: c ? null : s.intl.formatToPlainString(s.t.aYhclf, {
      username: t
    }),
    checked: !c,
    onChange: e => {
      !e === l ? (0, a.iR)() : (0, a.e1)(!e)
    }
  })
}