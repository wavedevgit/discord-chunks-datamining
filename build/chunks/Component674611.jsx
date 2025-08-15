/** Chunk was on 66866 **/
/** chunk id: 674611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk468706 = require("./468706.jsx"),
  Chunk774863 = require("./774863.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    messageId: t,
    channelId: n
  } = e, u = (0, l.e7)([s.Z], () => s.Z.canSubmitFpReport(t)), d = i.useCallback(() => {
    (0, o.e)(n, t)
  }, [n, t]);
  return (0, r.jsx)(a.zxk, {
    variant: "secondary",
    text: c.intl.string(c.t["4q1ElZ"]),
    onClick: d,
    disabled: !u
  })
}