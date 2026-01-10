/** Chunk was on 81985 **/
/** chunk id: 25601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616891 = require("./616891.js");

function o(e) {
  let {
    mentionsCount: t,
    isMentionLowImportance: n
  } = e;
  return (0, r.jsx)("div", {
    className: a.mentionsBadge,
    "aria-hidden": true,
    children: (0, r.jsx)(l.mAB, {
      count: t,
      color: n ? i.Z.colors.BACKGROUND_ACCENT.css : i.Z.colors.STATUS_DANGER.css
    })
  })
}