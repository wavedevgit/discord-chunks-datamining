/** Chunk was on web.js **/
/** chunk id: 76522, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk451909 = require("./451909.js"),
  Chunk963307 = require("./963307.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");
let c = new RegExp(/@(:?everyone|here)/),
  u = 30;

function d(e, t) {
  let n = 0;
  if (t.isThread()) {
    var r;
    return null != (r = t.memberCount) ? r : 0
  }
  return o.Ay.getProps(t.getGuildId(), t.id).groups.forEach(t => {
    ("@everyone" === e || t.id !== l.clD.OFFLINE) && (n += t.count)
  }), n
}

function f(e) {
  if ("string" == typeof e.content) {
    var t;
    if ("inlineCode" === e.type || "codeBlock" === e.type) return null;
    let n = null == (t = e.content) ? true : t.match(c);
    if (null != n) {
      let [e] = n;
      return e
    }
  } else if (Array.isArray(e.content))
    for (let t of e.content) {
      let e = f(t);
      if (null != e) return e
    }
  return null
}
let p = {
  shouldShowEveryoneGuard: function(e, t) {
    let n = t.getGuildId();
    return i()(n, "isGuildChannel with null guildId"), d(e, t) > u && s.A.can(l.xBc.MENTION_EVERYONE, t)
  },
  everyoneMemberCount: d,
  extractEveryoneRole: function(e, t) {
    for (let n of a.Ay.parsePreprocessor(t, e)) {
      let e = f(n);
      if (null != e) return e
    }
    return null
  }
}