/** Chunk was on web.js **/
/** chunk id: 900254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk253932 = require("./253932.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  let {
    legacyUsername: t,
    pendingLegacyUsernameDisabled: n
  } = e, l = s.m$.useSetting(), c = true !== n ? n : l;
  return (0, r.jsx)(i.dOG, {
    label: o.intl.string(o.t["3cWDuO"]),
    description: c ? null : o.intl.formatToPlainString(o.t.aYhclf, {
      username: t
    }),
    checked: !c,
    onChange: e => {
      !e === l ? (0, a._e)() : (0, a.VG)(!e)
    }
  })
}