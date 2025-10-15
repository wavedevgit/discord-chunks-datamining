/** Chunk was on web.js **/
/** chunk id: 11133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./35282.js");
var Chunk734959 = require("./734959.js"),
  Chunk835834 = require("./835834.js"),
  Chunk657305 = require("./657305.js"),
  Chunk394821 = require("./394821.js"),
  Chunk841784 = require("./841784.js"),
  Chunk503438 = require("./503438.js"),
  Chunk750154 = require("./750154.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = (null == e ? true : e.name) === "" ? null : null == e ? true : e.name,
    f = (null == e ? true : e.details) === "" ? null : null == e ? true : e.details,
    _ = (null == e ? true : e.state) === "" ? null : null == e ? true : e.state,
    p = (0, i.R)("getActivityStatusText"),
    h = (null == e ? true : e.type) === u.IIU.STREAMING && null != f ? f : n;
  if ((null == e ? true : e.status_display_type) === r.D.NAME && null != n ? h = n : (null == e ? true : e.status_display_type) === r.D.STATE && null != _ ? h = _ : (null == e ? true : e.status_display_type) === r.D.DETAILS && null != f && (h = f), (0, s.Z)(e)) {
    let e = (0, a.Z)(n);
    return {
      text: e,
      tooltip: e
    }
  }
  if ((null == e ? true : e.type) === u.IIU.PLAYING && null != h) return {
    text: p ? h : d.intl.format(d.t.lFApm5, {
      game: h
    }),
    tooltip: d.intl.formatToPlainString(d.t.lFApm5, {
      game: h
    })
  };
  if ((0, l.Z)(e) && t && null != _) {
    var m;
    let e = null == (m = _.split("; ")) ? true : m.join(", ");
    return {
      text: p ? e : d.intl.format(d.t.Vnuxub, {
        name: e
      }),
      tooltip: d.intl.formatToPlainString(d.t.Vnuxub, {
        name: e
      })
    }
  }
  return (0, c.dS)(e) && null != n ? {
    text: p ? n : d.intl.format(d.t.pW3Ip6, {
      name: n
    }),
    tooltip: d.intl.formatToPlainString(d.t.pW3Ip6, {
      name: n
    })
  } : (null == e ? true : e.type) === u.IIU.LISTENING && null != h ? {
    text: p ? h : d.intl.format(d.t.Vnuxub, {
      name: h
    }),
    tooltip: d.intl.formatToPlainString(d.t.Vnuxub, {
      name: h
    })
  } : (0, o.Z)(e) && t && null != f ? {
    text: p ? f : d.intl.format(d.t.pW3Ip6, {
      name: f
    }),
    tooltip: d.intl.formatToPlainString(d.t.pW3Ip6, {
      name: f
    })
  } : (null == e ? true : e.type) === u.IIU.WATCHING && null != h ? {
    text: p ? h : d.intl.format(d.t.pW3Ip6, {
      name: h
    }),
    tooltip: d.intl.formatToPlainString(d.t.pW3Ip6, {
      name: h
    })
  } : (null == e ? true : e.type) === u.IIU.COMPETING && null != h ? {
    text: p ? h : d.intl.format(d.t.QQ2wVF, {
      name: h
    }),
    tooltip: d.intl.formatToPlainString(d.t.QQ2wVF, {
      name: h
    })
  } : (null == e ? true : e.type) === u.IIU.STREAMING && null != h ? {
    text: p ? h : d.intl.format(d.t["0wJXSk"], {
      name: h
    }),
    tooltip: d.intl.formatToPlainString(d.t["0wJXSk"], {
      name: h
    })
  } : {}
}