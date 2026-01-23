/** Chunk was on web.js **/
/** chunk id: 243166, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk612630 = require("./612630.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk90460 = require("./90460.js");

function p(e) {
  let {
    userId: t,
    isVisible: n,
    onOpenProfile: i
  } = e, {
    note: p
  } = (0, c.A)(t), _ = null != p && "" !== p, h = _ ? o.ueQ : o.i2Q, m = _ ? d.intl.string(d.t["gs+qcM"]) : d.intl.string(d.t["1ZZtts"]), g = _ ? p : d.intl.string(d.t["1ZZtts"]), {
    trackUserProfileAction: E
  } = (0, l.NJ)(), y = () => {
    E({
      action: "PRESS_ADD_NOTE"
    }), null == i || i({
      tabSection: u.RP.USER_INFO,
      scrollTarget: u.bk.NOTE
    })
  };
  return (0, r.jsx)(s.m_, {
    asContainer: true,
    text: g,
    children: (0, r.jsx)(o.DUT, {
      "aria-label": m,
      onClick: y,
      className: a()(f.x, n && f.R),
      children: (0, r.jsx)(h, {
        size: "xs",
        color: "currentColor"
      })
    })
  })
}