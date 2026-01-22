/** Chunk was on 86317 **/
/** chunk id: 280871, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk974930 = require("./974930.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    startDate: t,
    recurrenceRule: n,
    onRecurrenceChange: c
  } = e, o = r.useMemo(() => (0, a.z7)(t, n), [n, t]), u = (0, a.Xx)(t);
  return (0, l.jsx)(i.l6P, {
    label: s.intl.string(s.t["59TVxL"]),
    required: true,
    placeholder: "gaming",
    options: u,
    onSelectionChange: c,
    value: o,
    selectionMode: "single",
    fullWidth: true
  })
}