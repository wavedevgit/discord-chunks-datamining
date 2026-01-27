/** Chunk was on web.js **/
/** chunk id: 566903, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./747238.js");
var Chunk599026 = require("./599026.js"),
  Chunk440594 = require("./440594.js"),
  Chunk541806 = require("./541806.js"),
  Chunk765379 = require("./765379.js"),
  Chunk90644 = require("./90644.js"),
  Chunk82149 = require("./82149.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = (null == e ? true : e.name) === "" ? null : null == e ? true : e.name,
    d = (null == e ? true : e.details) === "" ? null : null == e ? true : e.details,
    f = (null == e ? true : e.state) === "" ? null : null == e ? true : e.state,
    p = (null == e ? true : e.type) === c.$pd.STREAMING && null != d ? d : n;
  if ((null == e ? true : e.status_display_type) === r.A.NAME && null != n ? p = n : (null == e ? true : e.status_display_type) === r.A.STATE && null != f ? p = f : (null == e ? true : e.status_display_type) === r.A.DETAILS && null != d && (p = d), (0, o.A)(e)) {
    let e = (0, i.A)(n);
    return {
      text: e,
      tooltip: e
    }
  }
  if ((null == e ? true : e.type) === c.$pd.PLAYING && null != p) return {
    text: p,
    tooltip: u.intl.formatToPlainString(u.t.lFApmz, {
      game: p
    })
  };
  if ((0, s.A)(e) && t && null != f) {
    var _;
    let e = null == (_ = f.split("; ")) ? true : _.join(", ");
    return {
      text: e,
      tooltip: u.intl.formatToPlainString(u.t.Vnuxue, {
        name: e
      })
    }
  }
  return (0, l.Cy)(e) && null != n ? {
    text: n,
    tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, {
      name: n
    })
  } : (null == e ? true : e.type) === c.$pd.LISTENING && null != p ? {
    text: p,
    tooltip: u.intl.formatToPlainString(u.t.Vnuxue, {
      name: p
    })
  } : (0, a.A)(e) && t && null != d ? {
    text: d,
    tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, {
      name: d
    })
  } : (null == e ? true : e.type) === c.$pd.WATCHING && null != p ? {
    text: p,
    tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, {
      name: p
    })
  } : (null == e ? true : e.type) === c.$pd.COMPETING && null != p ? {
    text: p,
    tooltip: u.intl.formatToPlainString(u.t.QQ2wVE, {
      name: p
    })
  } : (null == e ? true : e.type) === c.$pd.STREAMING && null != p ? {
    text: p,
    tooltip: u.intl.formatToPlainString(u.t["0wJXSh"], {
      name: p
    })
  } : {}
}