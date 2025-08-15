/** Chunk was on web.js **/
/** chunk id: 934393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk726542 = require("./726542.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk231757 = require("./231757.jsx"),
  Chunk553795 = require("./553795.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    platformType: t,
    icon: n,
    onAction: h
  } = e, {
    newestAnalyticsLocation: m
  } = (0, s.ZP)(), {
    themeType: g
  } = (0, u.z)();
  if ((0, i.e7)([c.Z], () => null != c.Z.getAccount(null, t))) return null;
  let E = e => {
    e.stopPropagation();
    let n = t === f.ABu.XBOX;
    null == h || h({
      action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON"
    }), (0, l.Z)({
      platformType: t,
      location: m
    })
  };
  return g === _.l.MODAL_V2 ? (0, r.jsx)(d.tG, {
    icon: n,
    text: p.intl.formatToPlainString(p.t.XWSHTU, {
      platform: o.Z.get(t).name
    }),
    size: a.Ph.TINY,
    themeColor: "secondary",
    onClick: E
  }) : (0, r.jsx)(d.tG, {
    icon: n,
    text: p.intl.formatToPlainString(p.t.XWSHTU, {
      platform: o.Z.get(t).name
    }),
    size: a.Ph.SMALL,
    themeColor: "secondary",
    fullWidth: true,
    onClick: E
  })
}