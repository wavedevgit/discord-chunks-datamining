/** Chunk was on web.js **/
/** chunk id: 978561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => l
}), require("./896048.js"), require("./733351.js");
var Chunk258363 = require("./258363.js"),
  Chunk392054 = require("./392054.js"),
  Chunk609136 = require("./609136.js"),
  Chunk73510 = require("./73510.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  let {
    option: t,
    content: n,
    guildId: l,
    channelId: c,
    allowEmptyValues: u,
    commandOrigin: d = i.iw.CHAT
  } = e, f = null != n ? (0, r.AA)({
    content: n
  }, "content").trim() : "", p = t.required, _ = "" === f;
  if (null == n) return p ? {
    success: false,
    error: s.intl.string(s.t.JZJQL2)
  } : {
    success: true
  };
  if (_) return u ? {
    success: true
  } : p ? {
    success: false,
    error: s.intl.string(s.t.JZJQL2)
  } : {
    success: false,
    error: (0, o.tE)(t)
  };
  let h = n.length > 1 ? {
      type: "text",
      text: f
    } : n[0],
    m = a.A[t.type](h, t, c, l, d);
  return m.success || null != m.error || (m.error = (0, o.tE)(t)), m
}