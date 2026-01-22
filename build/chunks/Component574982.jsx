/** Chunk was on web.js **/
/** chunk id: 574982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function d() {
  let e = (0, i.bG)([l.A], () => l.A.getEnableSilenceWarning());
  return (0, r.jsx)(o.x, {
    setting: c.H.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
    children: (0, r.jsx)(a.dOG, {
      label: u.intl.string(u.t.jtiiCw),
      checked: e,
      onChange: e => s.A.setSilenceWarning(e)
    })
  })
}