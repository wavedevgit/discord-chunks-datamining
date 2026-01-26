/** Chunk was on 1636 **/
/** chunk id: 649455, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk953584 = require("./953584.js"),
  Chunk168820 = require("./168820.js"),
  Chunk77350 = require("./77350.js");

function d(e, t) {
  var n;
  let d = null != (n = null == e ? true : e.url) ? n : "",
    u = (0, l.bG)([o.Ay], () => o.Ay.isVideoStatsEnabled(d)),
    g = i.useCallback(() => {
      "" !== d && (0, o.FM)(d)
    }, [d]);
  if (null == e || !(0, s.XB)(e.contentType) || (null == t ? true : t.shouldHideMediaOptions) === true) return null;
  let {
    enableVideoStatsForNerds: p
  } = (0, c.G)({
    location: "useVideoStatsMenuItem"
  });
  return p ? (0, r.jsx)(a.sLh, {
    id: "video-stats-for-nerds",
    label: "Stats for Nerds",
    leadingAccessory: {
      type: "icon",
      icon: a.mir
    },
    checked: u,
    action: g
  }) : null
}