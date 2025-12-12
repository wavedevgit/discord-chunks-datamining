/** Chunk was on web.js **/
/** chunk id: 934393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk726542 = require("./726542.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk231757 = require("./231757.jsx"),
  Chunk553795 = require("./553795.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  let {
    platformType: t,
    icon: n,
    onAction: _
  } = e, {
    newestAnalyticsLocation: m
  } = (0, a.ZP)(), {
    themeType: h
  } = (0, c.z)(), g = h === f.l.MODAL_V2;
  if ((0, i.e7)([l.Z], () => null != l.Z.getAccount(null, t))) return null;
  let E = e => {
    e.stopPropagation();
    let n = t === d.ABu.XBOX;
    null == _ || _({
      action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON"
    }), (0, s.Z)({
      platformType: t,
      location: m
    })
  };
  return (0, r.jsx)(u.O1, {
    icon: n,
    text: p.intl.formatToPlainString(p.t.XWSHTb, {
      platform: o.Z.get(t).name
    }),
    fullWidth: !g,
    onClick: E
  })
}