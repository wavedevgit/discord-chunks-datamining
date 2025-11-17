/** Chunk was on web.js **/
/** chunk id: 249212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk46973 = require("./46973.js"),
  Chunk846027 = require("./846027.js"),
  Chunk878001 = require("./878001.js"),
  Chunk458725 = require("./458725.js"),
  Chunk63063 = require("./63063.js"),
  Chunk112560 = require("./112560.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let Chunk66737 = require("./66737.js");

function _(e) {
  var t;
  let {
    userId: n,
    width: _,
    avError: p,
    selected: h = false,
    noArt: m = false
  } = e, g = null == (t = (0, s.hp)(p)) ? true : t.errorCode;

  function E() {
    (0, o.w)(i.Yn.DEFAULT, n), a.Z.setDisableLocalVideo(n, u.ZUi.DISABLED, i.Yn.DEFAULT, false), setTimeout(() => {
      a.Z.setDisableLocalVideo(n, u.ZUi.MANUAL_ENABLED, i.Yn.DEFAULT, false)
    }, 1e3)
  }
  return (0, r.jsx)(c.Z, {
    artURL: f,
    header: d.intl.string(d.t["z+mxvo"]),
    size: (0, c.L)(_),
    noArt: m,
    selected: h,
    description: d.intl.format(d.t.d486Wm, {
      helpUrl: l.Z.getArticleURL(u.BhN.VOICE_VIDEO_TROUBLESHOOTING)
    }),
    errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, {
      errorCode: g
    }),
    onCTAClick: E,
    callToAction: d.intl.string(d.t["hxmQ/e"])
  })
}