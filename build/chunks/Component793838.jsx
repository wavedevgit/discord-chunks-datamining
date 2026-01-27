/** Chunk was on web.js **/
/** chunk id: 793838, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk833349 = require("./833349.js"),
  Chunk626584 = require("./626584.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    user: t,
    activity: n,
    onAction: d
  } = e, {
    themeType: f
  } = (0, o.E)(), p = f === c.d.MODAL_V2;
  if (!(0, i.A)(n, l.jUm.INSTANCE)) return null;
  let _ = e => {
    e.stopPropagation(), null == d || d({
      action: "PRESS_NOTIFY_BUTTON"
    }), new a.A("UserActivityActions").log("notify", t.id, n)
  };
  return (0, r.jsx)(s.FD, {
    text: u.intl.string(u.t.vwl1PK),
    fullWidth: !p,
    onClick: _
  })
}