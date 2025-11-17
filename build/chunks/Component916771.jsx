/** Chunk was on web.js **/
/** chunk id: 916771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk46973 = require("./46973.js"),
  Chunk878001 = require("./878001.js"),
  Chunk458725 = require("./458725.js"),
  Chunk803647 = require("./803647.js"),
  Chunk63063 = require("./63063.js"),
  Chunk112560 = require("./112560.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  switch (null == e ? true : e.type) {
    case o.u.SCREENSHARE_OS_ERROR:
      return d.intl.format(d.t.e9LMuh, {
        errorMessage: e.errorMessage
      });
    case o.u.STREAM_FAILED_TO_START:
    default:
      return d.intl.string(d.t.rSlOep)
  }
}

function _(e) {
  var t;
  let {
    stream: n,
    width: _,
    avError: p,
    avErrorContext: h,
    selected: m = false,
    noArt: g = false
  } = e, E = f(h), b = null == (t = (0, o.hp)(null != p ? p : o.u.STREAM_FAILED_TO_START)) ? true : t.errorCode;
  return (0, r.jsx)(c.Z, {
    header: E,
    size: (0, c.L)(_),
    noArt: g,
    selected: m,
    description: d.intl.format(d.t.sXsgsP, {
      helpUrl: l.Z.getArticleURL(u.BhN.STREAM_FAILED)
    }),
    errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, {
      errorCode: b
    }),
    onCTAClick: () => {
      (0, a.w)(i.Yn.STREAM, n.ownerId), (0, s.Z)(n)
    },
    callToAction: d.intl.string(d.t["4EGMWL"])
  })
}