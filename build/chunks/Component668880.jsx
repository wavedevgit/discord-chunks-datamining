/** Chunk was on web.js **/
/** chunk id: 668880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk573648 = require("./573648.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk882997 = require("./882997.jsx"),
  Chunk962173 = require("./962173.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx");

function _(e) {
  let {
    platformType: t,
    icon: n,
    onAction: _
  } = e, {
    newestAnalyticsLocation: h
  } = (0, s.Ay)(), {
    themeType: m
  } = (0, c.E)(), g = m === f.d.MODAL_V2;
  if ((0, i.bG)([l.A], () => null != l.A.getAccount(null, t))) return null;
  let E = e => {
    e.stopPropagation();
    let n = t === d.fg2.XBOX;
    null == _ || _({
      action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON"
    }), (0, o.A)({
      platformType: t,
      location: h
    })
  };
  return (0, r.jsx)(u.FD, {
    icon: n,
    text: p.intl.formatToPlainString(p.t.XWSHTb, {
      platform: a.A.get(t).name
    }),
    fullWidth: !g,
    onClick: E
  })
}