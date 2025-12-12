/** Chunk was on web.js **/
/** chunk id: 381129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk957730 = require("./957730.js"),
  Chunk439170 = require("./439170.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let c = new RegExp(/@(:?everyone|here)/),
  u = 30;

function d(e, t) {
  let n = 0;
  if (t.isThread()) {
    var r;
    return null != (r = t.memberCount) ? r : 0
  }
  return o.ZP.getProps(t.getGuildId(), t.id).groups.forEach(t => {
    ("@everyone" === e || t.id !== l.Skl.OFFLINE) && (n += t.count)
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
    return i()(n, "isGuildChannel with null guildId"), d(e, t) > u && s.Z.can(l.Plq.MENTION_EVERYONE, t)
  },
  everyoneMemberCount: d,
  extractEveryoneRole: function(e, t) {
    for (let n of a.ZP.parsePreprocessor(t, e)) {
      let e = f(n);
      if (null != e) return e
    }
    return null
  }
}