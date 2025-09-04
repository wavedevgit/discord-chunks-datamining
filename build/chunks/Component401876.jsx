/** Chunk was on 82758 **/
/** chunk id: 401876, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk954313 = require("./954313.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk667180 = require("./667180.js");

function o(e) {
  let {
    startDate: t,
    recurrenceRule: r,
    onRecurrenceChange: o
  } = e, d = l.useMemo(() => (0, i.zi)(t, r), [r, t]), u = (0, i.P8)(t), x = e => e.toString(), j = (0, n.jsx)("div", {
    className: c.title,
    children: a.intl.string(a.t["59TVxM"])
  });
  return (0, n.jsx)(s.xJW, {
    title: j,
    required: true,
    children: (0, n.jsx)(s.PhF, {
      placeholder: "gaming",
      options: u,
      select: o,
      serialize: x,
      isSelected: e => null != d && x(e) === x(d)
    })
  })
}