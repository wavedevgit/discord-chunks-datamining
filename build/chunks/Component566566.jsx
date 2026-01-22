/** Chunk was on web.js **/
/** chunk id: 566566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk205693 = require("./205693.js"),
  Chunk827343 = require("./827343.js"),
  Chunk37965 = require("./37965.js"),
  Chunk487329 = require("./487329.js"),
  Chunk975571 = require("./975571.js"),
  Chunk200749 = require("./200749.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let Chunk745652 = require("./745652.js");

function p(e) {
  var t;
  let {
    userId: n,
    width: p,
    avError: _,
    selected: h = false,
    noArt: m = false
  } = e, g = null == (t = (0, o.B1)(_)) ? true : t.errorCode;

  function E() {
    (0, s.W)(i.x.DEFAULT, n), a.A.setDisableLocalVideo(n, u.bb8.DISABLED, i.x.DEFAULT, false), setTimeout(() => {
      a.A.setDisableLocalVideo(n, u.bb8.MANUAL_ENABLED, i.x.DEFAULT, false)
    }, 1e3)
  }
  return (0, r.jsx)(c.A, {
    artURL: f,
    header: d.intl.string(d.t["z+mxvo"]),
    size: (0, c.J)(p),
    noArt: m,
    selected: h,
    description: d.intl.format(d.t.d486Wm, {
      helpUrl: l.A.getArticleURL(u.MVz.VOICE_VIDEO_TROUBLESHOOTING)
    }),
    errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, {
      errorCode: g
    }),
    onCTAClick: E,
    callToAction: d.intl.string(d.t["hxmQ/e"])
  })
}