/** Chunk was on web.js **/
/** chunk id: 892880, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => m
}), require("./539854.js"), require("./388685.js");
var Chunk31775 = require("./31775.js"),
  a = require.n(Chunk31775),
  Chunk749210 = require("./749210.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx");
let f = new(a())({
  maxAge: +Chunk70956.Z.Millis.MINUTE
});

function p(e, t, n) {
  null != r && clearTimeout(r), r = setTimeout(() => {
    let r = [],
      i = e => {
        r.push(e.id)
      };
    if (null == e) r.push(...s.Z.getGuildIds());
    else if (Array.isArray(e)) e.forEach(e => {
      let t = s.Z.getGuild(e);
      null != t && i(t)
    });
    else {
      let t = s.Z.getGuild(e);
      null != t && i(t)
    }
    r.length > 0 && o.Z.requestMembers(r, t.toLocaleLowerCase(), n)
  }, 200)
}

function _(e, t) {
  let n = "".concat(null != e ? e : "", ":").concat(t),
    r = f.get(n);
  if (null != r) return r;
  f.set(n, true)
}
let m = {
  getGuildNameSuggestion: function(e) {
    let t = l.default.getCurrentUser(),
      n = u.oY(t);
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