/** Chunk was on web.js **/
/** chunk id: 509716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => l
}), require("./388685.js"), require("./781311.js");
var Chunk456007 = require("./456007.js"),
  Chunk895924 = require("./895924.js"),
  Chunk351133 = require("./351133.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    option: t,
    content: n,
    guildId: l,
    channelId: c,
    allowEmptyValues: u,
    commandOrigin: d = i.bB.CHAT
  } = e, f = null != n ? (0, r.KF)({
    content: n
  }, "content").trim() : "", _ = t.required, p = "" === f;
  if (null == n) return _ ? {
    success: false,
    error: s.intl.string(s.t.JZJQLy)
  } : {
    success: true
  };
  if (p) return u ? {
    success: true
  } : _ ? {
    success: false,
    error: s.intl.string(s.t.JZJQLy)
  } : {
    success: false,
    error: (0, a.al)(t)
  };
  let h = n.length > 1 ? {
      type: "text",
      text: f
    } : n[0],
    m = o.Z[t.type](h, t, c, l, d);
  return m.success || null != m.error || (m.error = (0, a.al)(t)), m
}