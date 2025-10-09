/** Chunk was on 35755 **/
/** chunk id: 783685, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk827498 = require("./827498.js"),
  Chunk915346 = require("./915346.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    botUserId: t,
    applicationId: n,
    analyticsLocations: d
  } = e, [p, m] = l.useState(false), f = l.useRef(null), h = l.useCallback(async () => {
    a.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
      application_id: n,
      button_action: o._y.OPEN_APP_DM
    }), m(true);
    try {
      await (0, s.W)({
        appId: n,
        botId: t,
        analyticsLocations: d
      })
    } catch (e) {}
    clearTimeout(f.current), m(false)
  }, [t, n, d]);
  return (0, i.jsx)(r.Button, {
    type: "submit",
    size: "md",
    variant: "secondary",
    loading: p,
    onClick: h,
    "aria-label": u.intl.string(u.t.AUM8hY),
    text: u.intl.string(u.t.AUM8hY)
  })
}