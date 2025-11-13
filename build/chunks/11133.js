/** Chunk was on web.js **/
/** chunk id: 11133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./35282.js");
var Chunk734959 = require("./734959.js"),
  Chunk657305 = require("./657305.js"),
  Chunk394821 = require("./394821.js"),
  Chunk841784 = require("./841784.js"),
  Chunk503438 = require("./503438.js"),
  Chunk750154 = require("./750154.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = (null == e ? true : e.name) === "" ? null : null == e ? true : e.name,
    d = (null == e ? true : e.details) === "" ? null : null == e ? true : e.details,
    f = (null == e ? true : e.state) === "" ? null : null == e ? true : e.state,
    _ = (null == e ? true : e.type) === c.IIU.STREAMING && null != d ? d : n;
  if ((null == e ? true : e.status_display_type) === r.D.NAME && null != n ? _ = n : (null == e ? true : e.status_display_type) === r.D.STATE && null != f ? _ = f : (null == e ? true : e.status_display_type) === r.D.DETAILS && null != d && (_ = d), (0, o.Z)(e)) {
    let e = (0, i.Z)(n);
    return {
      text: e,
      tooltip: e
    }
  }
  if ((null == e ? true : e.type) === c.IIU.PLAYING && null != _) return {
    text: _,
    tooltip: u.intl.formatToPlainString(u.t.lFApmz, {
      game: _
    })
  };
  if ((0, s.Z)(e) && t && null != f) {
    var p;
    let e = null == (p = f.split("; ")) ? true : p.join(", ");
    return {
      text: e,
      tooltip: u.intl.formatToPlainString(u.t.Vnuxue, {
        name: e
      })
    }
  }
  return (0, l.dS)(e) && null != n ? {
    text: n,
    tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, {
      name: n
    })
  } : (null == e ? true : e.type) === c.IIU.LISTENING && null != _ ? {
    text: _,
    tooltip: u.intl.formatToPlainString(u.t.Vnuxue, {
      name: _
    })
  } : (0, a.Z)(e) && t && null != d ? {
    text: d,
    tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, {
      name: d
    })
  } : (null == e ? true : e.type) === c.IIU.WATCHING && null != _ ? {
    text: _,
    tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, {
      name: _
    })
  } : (null == e ? true : e.type) === c.IIU.COMPETING && null != _ ? {
    text: _,
    tooltip: u.intl.formatToPlainString(u.t.QQ2wVE, {
      name: _
    })
  } : (null == e ? true : e.type) === c.IIU.STREAMING && null != _ ? {
    text: _,
    tooltip: u.intl.formatToPlainString(u.t["0wJXSh"], {
      name: _
    })
  } : {}
}