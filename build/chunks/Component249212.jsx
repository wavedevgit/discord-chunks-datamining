/** Chunk was on web.js **/
/** chunk id: 249212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk46973 = require("./46973.js"),
  Chunk846027 = require("./846027.js"),
  Chunk878001 = require("./878001.js"),
  Chunk458725 = require("./458725.js"),
  Chunk386146 = require("./386146.js"),
  Chunk63063 = require("./63063.js"),
  Chunk112560 = require("./112560.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let Chunk66737 = require("./66737.js");

function p(e) {
  var t;
  let {
    userId: n,
    width: p,
    avError: h,
    selected: m = false,
    noArt: g = false
  } = e, {
    avErrorUIEnabled: E
  } = (0, l.JN)({
    location: "UserVideoFailed"
  }), b = null == (t = (0, s.hp)(h)) ? true : t.errorCode;

  function y() {
    (0, o.w)(i.Yn.DEFAULT, n), a.Z.setDisableLocalVideo(n, d.ZUi.DISABLED, i.Yn.DEFAULT, false), setTimeout(() => {
      a.Z.setDisableLocalVideo(n, d.ZUi.MANUAL_ENABLED, i.Yn.DEFAULT, false)
    }, 1e3)
  }
  return (0, r.jsx)(u.Z, {
    artURL: _,
    header: f.intl.string(f.t["z+mxvr"]),
    size: (0, u.L)(p),
    noArt: g,
    selected: m,
    description: f.intl.format(f.t.d486Wl, {
      helpUrl: c.Z.getArticleURL(d.BhN.VOICE_VIDEO_TROUBLESHOOTING)
    }),
    errorCodeMessage: E ? f.intl.formatToPlainString(f.t["ejOT9/"], {
      errorCode: b
    }) : true,
    onCTAClick: y,
    callToAction: f.intl.string(f.t["hxmQ/f"])
  })
}