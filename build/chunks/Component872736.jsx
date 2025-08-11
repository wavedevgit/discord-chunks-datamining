/** Chunk was on 75708 **/
/** chunk id: 872736, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk695346 = require("./695346.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    legacyUsername: t,
    pendingLegacyUsernameDisabled: n
  } = e, o = a.R_.useSetting(), c = true !== n ? n : o;
  return (0, i.jsx)(r.j7V, {
    hideBorder: true,
    value: !c,
    onChange: e => {
      !e === o ? (0, s.iR)() : (0, s.e1)(!e)
    },
    note: c ? null : l.intl.formatToPlainString(l.t.aYhclZ, {
      username: t
    }),
    children: l.intl.string(l.t["3cWDuL"])
  })
}