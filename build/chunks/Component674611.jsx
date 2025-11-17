/** Chunk was on web.js **/
/** chunk id: 674611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk468706 = require("./468706.jsx"),
  Chunk774863 = require("./774863.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    messageId: t,
    channelId: n
  } = e, u = (0, a.e7)([l.Z], () => l.Z.canSubmitFpReport(t)), d = i.useCallback(() => {
    (0, s.e)(n, t)
  }, [n, t]);
  return (0, r.jsx)(o.Button, {
    variant: "secondary",
    text: c.intl.string(c.t["4q1Elf"]),
    onClick: d,
    disabled: !u
  })
}