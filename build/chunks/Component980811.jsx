/** Chunk was on 69283 **/
/** chunk id: 980811, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => d
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk493773 = require("./493773.js"),
  Chunk989373 = require("./989373.jsx"),
  Chunk522474 = require("./522474.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk922588 = require("./922588.jsx");

function d(e) {
  let {
    windowKey: t,
    channelId: n,
    guildId: d
  } = e, _ = a.useRef(null), [m, f] = a.useState(false);
  return ((0, i.ZP)(() => {
    let e = o.Z.getWindow(t);
    null != e && (0, l.waitForCSSLoad)(e, _).finally(() => {
      f(true)
    })
  }), (0, i.zq)(() => {
    clearInterval(_.current)
  }), m && (0, u.vP)()) ? (0, r.jsx)(c.Z, {
    withTitleBar: true,
    windowKey: t,
    title: "Shuffle Names",
    children: (0, r.jsx)(s.Z, {
      channelId: n,
      guildId: d
    })
  }) : null
}