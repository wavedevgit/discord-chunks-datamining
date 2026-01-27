/** Chunk was on web.js **/
/** chunk id: 448290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h,
  C: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk414798 = require("./414798.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk203982 = require("./203982.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function _(e, t) {
  let {
    id: n
  } = e, r = "@".concat(d.Ay.getUserTag(e, {
    decoration: "never"
  })), i = "<@".concat(n, ">");
  u._.dispatchToLastSubscribed(f.jej.INSERT_TEXT, {
    plainText: r,
    rawText: i
  }), null != t && o.A.startTyping(t)
}

function h(e, t, n) {
  let [o, u] = (0, i.yK)([c.A, s.A, l.A], () => {
    let e = c.A.getChannelId(t),
      n = s.A.getChannel(e);
    return [e, null != n && (n.isMultiUserDM() || l.A.can(f.xBc.SEND_MESSAGES, n))]
  }, [t]), d = n === f.BRT.POPOUT;
  if (!u || d) return null;

  function h() {
    _(e, o)
  }
  return (0, r.jsx)(a.Drp, {
    id: "mention",
    label: p.intl.string(p.t.P8tvKG),
    action: h
  })
}