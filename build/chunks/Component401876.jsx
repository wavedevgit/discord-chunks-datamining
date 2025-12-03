/** Chunk was on 27919 **/
/** chunk id: 401876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk854698 = require("./854698.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    startDate: t,
    recurrenceRule: n,
    onRecurrenceChange: s
  } = e, d = r.useMemo(() => (0, a.zi)(t, n), [n, t]), c = (0, a.P8)(t), o = e => e.toString();
  return (0, l.jsx)(i.PhF, {
    label: u.intl.string(u.t["59TVxL"]),
    required: true,
    placeholder: "gaming",
    options: c,
    select: s,
    serialize: o,
    isSelected: e => null != d && o(e) === o(d)
  })
}