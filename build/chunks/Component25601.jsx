/** Chunk was on 11788 **/
/** chunk id: 25601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk831209 = require("./831209.js"),
  Chunk481060 = require("./481060.js"),
  Chunk655645 = require("./655645.js");

function a(e) {
  let {
    mentionsCount: t,
    isMentionLowImportance: n
  } = e;
  return (0, r.jsx)("div", {
    className: o.mentionsBadge,
    "aria-hidden": true,
    children: (0, r.jsx)(l.mAB, {
      count: t,
      color: n ? i.Z.BACKGROUND_ACCENT : i.Z.STATUS_DANGER
    })
  })
}