/** Chunk was on web.js **/
/** chunk id: 695184, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => h
}), require("./321073.js"), require("./896048.js");
var Chunk635377 = require("./635377.js"),
  a = require.n(Chunk635377),
  Chunk686956 = require("./686956.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx");
let f = new(a())({
  maxAge: +Chunk927813.A.Millis.MINUTE
});

function p(e, t, n) {
  null != r && clearTimeout(r), r = setTimeout(() => {
    let r = [],
      i = e => {
        r.push(e.id)
      };
    if (null == e) r.push(...o.A.getGuildIds());
    else if (Array.isArray(e)) e.forEach(e => {
      let t = o.A.getGuild(e);
      null != t && i(t)
    });
    else {
      let t = o.A.getGuild(e);
      null != t && i(t)
    }
    r.length > 0 && s.A.requestMembers(r, t.toLocaleLowerCase(), n)
  }, 200)
}

function _(e, t) {
  let n = "".concat(null != e ? e : "", ":").concat(t),
    r = f.get(n);
  if (null != r) return r;
  f.set(n, true)
}
let h = {
  getGuildNameSuggestion: function(e) {
    let t = l.default.getCurrentUser(),
      n = u.mG(t);
    return null == n || 0 === n.length ? "" : d.intl.formatToPlainString(d.t.Y6Qfju, {
      username: (null == e ? true : e.truncateUsername) ? n.slice(0, 20) : n
    })
  },
  requestMembers(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 10,
      r = Array.isArray(e),
      i = [],
      a = false;
    r ? e.forEach(e => {
      null == _(e, t) && i.push(e)
    }) : null == _(e, t) && (a = true), i.length > 0 && r ? p(i, t, n) : a && p(e, t, n)
  }
}