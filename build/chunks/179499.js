/** Chunk was on web.js **/
/** chunk id: 179499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk871109 = require("./871109.js"),
  Chunk666171 = require("./666171.js"),
  Chunk960427 = require("./960427.jsx"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  var t, n;
  let {
    guildId: i,
    productId: f
  } = e, p = (0, s.bG)([l.A], () => l.A.getGuildProduct(f)), {
    isLoading: _,
    downloadAttachment: h
  } = (0, c.A)(i, f), m = r.useCallback(() => {
    var e, t;
    let n = null == p || null == (t = p.attachments) || null == (e = t[0]) ? true : e.id;
    a()(null != n, "No attachment"), h(n)
  }, [h, null == p ? true : p.attachments]), g = r.useCallback(() => u.A.open({
    guildId: i,
    productId: f
  }), [i, f]);
  return (null != (t = null == p || null == (n = p.attachments) ? true : n.length) ? t : 0) > 1 ? {
    variant: "primary",
    text: d.intl.string(d.t.UyuiUE),
    icon: o.KS6,
    iconPosition: "end",
    onClick: g
  } : {
    variant: "primary",
    text: d.intl.string(d.t.t9bE9b),
    icon: o.s3U,
    iconPosition: "end",
    loading: _,
    onClick: m
  }
}