/** Chunk was on 78528 **/
/** chunk id: 775946, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk461140 = require("./461140.js");

function a(e) {
  let {
    mentionsCount: t,
    isMentionLowImportance: n
  } = e;
  return (0, r.jsx)("div", {
    className: s.R,
    "aria-hidden": true,
    children: (0, r.jsx)(i.hVq, {
      count: t,
      color: n ? l.A.colors.BACKGROUND_MOD_STRONG.css : l.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css
    })
  })
}