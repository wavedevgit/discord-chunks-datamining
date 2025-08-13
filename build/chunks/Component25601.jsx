/** Chunk was on 41753 **/
/** chunk id: 25601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk831209 = require("./831209.js"),
  Chunk481060 = require("./481060.js"),
  Chunk386227 = require("./386227.js");

function s(e) {
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