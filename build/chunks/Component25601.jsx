/** Chunk was on 64271 **/
/** chunk id: 25601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk692547 = require("./692547.js"),
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
      color: n ? i.Z.colors.BACKGROUND_ACCENT.css : i.Z.colors.STATUS_DANGER.css
    })
  })
}