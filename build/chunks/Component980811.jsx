/** Chunk was on 69283 **/
/** chunk id: 980811, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => s
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk493773 = require("./493773.js"),
  Chunk989373 = require("./989373.jsx"),
  Chunk522474 = require("./522474.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk922588 = require("./922588.jsx");

function s(e) {
  let {
    windowKey: t,
    channelId: n,
    guildId: s
  } = e, d = a.useRef(null), [_, m] = a.useState(false);
  return ((0, i.ZP)(() => {
    let e = o.Z.getWindow(t);
    null != e && (0, l.waitForCSSLoad)(e, d).finally(() => {
      m(true)
    })
  }), (0, i.zq)(() => {
    clearInterval(d.current)
  }), _) ? (0, r.jsx)(c.Z, {
    withTitleBar: true,
    windowKey: t,
    title: "Shuffle Names",
    children: (0, r.jsx)(u.Z, {
      channelId: n,
      guildId: s
    })
  }) : null
}