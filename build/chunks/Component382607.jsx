/** Chunk was on web.js **/
/** chunk id: 382607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk500049 = require("./500049.js"),
  Chunk522305 = require("./522305.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    botUserId: t,
    applicationId: n,
    analyticsLocations: d
  } = e, [f, p] = i.useState(false), _ = i.useRef(null), h = i.useCallback(async () => {
    s.default.track(c.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
      application_id: n,
      button_action: o.F5.OPEN_APP_DM
    }), p(true);
    try {
      await (0, l.Q)({
        appId: n,
        botId: t,
        analyticsLocations: d
      })
    } catch (e) {}
    clearTimeout(_.current), p(false)
  }, [t, n, d]);
  return (0, r.jsx)(a.Button, {
    type: "submit",
    size: "md",
    variant: "secondary",
    loading: f,
    onClick: h,
    "aria-label": u.intl.string(u.t.AUM8hY),
    text: u.intl.string(u.t.AUM8hY)
  })
}