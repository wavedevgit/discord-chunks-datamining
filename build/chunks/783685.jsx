/** Chunk was on web.js **/
/** chunk id: 783685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk626135 = require("./626135.js"),
  Chunk827498 = require("./827498.js"),
  Chunk915346 = require("./915346.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    botUserId: t,
    applicationId: n,
    buttonSize: d,
    analyticsLocations: f
  } = e, [_, p] = i.useState(false), h = i.useRef(null), m = i.useCallback(async () => {
    a.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
      application_id: n,
      button_action: s._y.OPEN_APP_DM
    }), p(true);
    try {
      await (0, l.W)({
        appId: n,
        botId: t,
        analyticsLocations: f
      })
    } catch (e) {}
    clearTimeout(h.current), p(false)
  }, [t, n, f]);
  return <o.zx type={"submit"} size={d} color={o.zx.Colors.PRIMARY} submitting={_} onClick={m} aria-label={u.intl.string(u.t.AUM8hY)}>{u.intl.string(u.t.AUM8hY)}</o.zx>
}