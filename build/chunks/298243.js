/** Chunk was on web.js **/
/** chunk id: 298243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk240864 = require("./240864.js"),
  Chunk406877 = require("./406877.js"),
  Chunk613810 = require("./613810.jsx"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  var t, n;
  let {
    guildId: i,
    productId: f
  } = e, p = (0, a.e7)([l.Z], () => l.Z.getGuildProduct(f)), {
    isLoading: _,
    downloadAttachment: m
  } = (0, c.Z)(i, f), h = r.useCallback(() => {
    var e, t;
    let n = null == p || null == (t = p.attachments) || null == (e = t[0]) ? true : e.id;
    o()(null != n, "No attachment"), m(n)
  }, [m, null == p ? true : p.attachments]), g = r.useCallback(() => u.Z.open({
    guildId: i,
    productId: f
  }), [i, f]);
  return (null != (n = null == p || null == (t = p.attachments) ? true : t.length) ? n : 0) > 1 ? {
    variant: "primary",
    text: d.intl.string(d.t.UyuiUE),
    icon: s.d4D,
    iconPosition: "end",
    onClick: g
  } : {
    variant: "primary",
    text: d.intl.string(d.t.t9bE9b),
    icon: s._8t,
    iconPosition: "end",
    loading: _,
    onClick: h
  }
}