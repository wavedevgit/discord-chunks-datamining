/** Chunk was on web.js **/
/** chunk id: 916771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk46973 = require("./46973.js"),
  Chunk878001 = require("./878001.js"),
  Chunk458725 = require("./458725.js"),
  Chunk386146 = require("./386146.js"),
  Chunk803647 = require("./803647.js"),
  Chunk63063 = require("./63063.js"),
  Chunk112560 = require("./112560.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  switch (null == e ? true : e.type) {
    case a.u.SCREENSHARE_OS_ERROR:
      return f.intl.format(f.t.e9LMur, {
        errorMessage: e.errorMessage
      });
    case a.u.STREAM_FAILED_TO_START:
    default:
      return f.intl.string(f.t.rSlOen)
  }
}

function p(e) {
  var t;
  let {
    stream: n,
    width: p,
    avError: h,
    avErrorContext: m,
    selected: g = false,
    noArt: E = false
  } = e, {
    avErrorUIEnabled: b
  } = (0, s.JN)({
    location: "StreamWarning"
  }), y = _(m), O = null == (t = (0, a.hp)(null != h ? h : a.u.STREAM_FAILED_TO_START)) ? true : t.errorCode;
  return (0, r.jsx)(u.Z, {
    header: y,
    size: (0, u.L)(p),
    noArt: E,
    selected: g,
    description: f.intl.format(f.t.sXsgsL, {
      helpUrl: c.Z.getArticleURL(d.BhN.STREAM_FAILED)
    }),
    errorCodeMessage: b ? f.intl.formatToPlainString(f.t["ejOT9/"], {
      errorCode: O
    }) : true,
    onCTAClick: () => {
      (0, o.w)(i.Yn.STREAM, n.ownerId), (0, l.Z)(n)
    },
    callToAction: f.intl.string(f.t["4EGMWF"])
  })
}