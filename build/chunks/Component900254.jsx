/** Chunk was on 2827 **/
/** chunk id: 900254, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk253932 = require("./253932.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    legacyUsername: t,
    pendingLegacyUsernameDisabled: n
  } = e, o = s.m$.useSetting(), c = true !== n ? n : o;
  return (0, r.jsx)(i.dOG, {
    label: a.intl.string(a.t["3cWDuO"]),
    description: c ? null : a.intl.formatToPlainString(a.t.aYhclf, {
      username: t
    }),
    checked: !c,
    onChange: e => {
      !e === o ? (0, l._e)() : (0, l.VG)(!e)
    }
  })
}