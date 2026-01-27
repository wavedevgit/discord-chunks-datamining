/** Chunk was on web.js **/
/** chunk id: 768088, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk205693 = require("./205693.js"),
  Chunk37965 = require("./37965.js"),
  Chunk709710 = require("./709710.js"),
  Chunk338771 = require("./338771.js"),
  Chunk975571 = require("./975571.js"),
  Chunk200749 = require("./200749.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  switch (null == e ? true : e.type) {
    case o.iy.SCREENSHARE_OS_ERROR:
      return d.intl.format(d.t.e9LMuh, {
        errorMessage: e.errorMessage
      });
    case o.iy.STREAM_FAILED_TO_START:
    default:
      return d.intl.string(d.t.rSlOep)
  }
}

function p(e) {
  var t;
  let {
    stream: n,
    width: p,
    avError: _,
    avErrorContext: h,
    selected: m = false,
    noArt: g = false
  } = e, E = f(h), y = null == (t = (0, o.B1)(null != _ ? _ : o.iy.STREAM_FAILED_TO_START)) ? true : t.errorCode;
  return (0, r.jsx)(c.A, {
    header: E,
    size: (0, c.J)(p),
    noArt: g,
    selected: m,
    description: d.intl.format(d.t.sXsgsP, {
      helpUrl: l.A.getArticleURL(u.MVz.STREAM_FAILED)
    }),
    errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, {
      errorCode: y
    }),
    onCTAClick: () => {
      (0, a.W)(i.x.STREAM, n.ownerId), (0, s.A)(n)
    },
    callToAction: d.intl.string(d.t["4EGMWL"])
  })
}