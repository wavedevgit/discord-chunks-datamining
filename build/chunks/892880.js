/** Chunk was on web.js **/
"use strict";
let r;
n.d(t, {
  Z: () => m
}), n(653041);
var i = n(392711),
  o = n.n(i),
  a = n(31775),
  s = n.n(a),
  l = n(749210),
  c = n(430824),
  u = n(594174),
  d = n(70956),
  f = n(51144),
  _ = n(388032);
let p = new(s())({
  maxAge: +d.Z.Millis.MINUTE
});

function h(e, t, n) {
  null != r && clearTimeout(r), r = setTimeout(() => {
    let r = [],
      i = e => {
        r.push(e.id)
      };
    if (null == e) o().forEach(c.Z.getGuilds(), i);
    else if (Array.isArray(e)) e.forEach(e => {
      let t = c.Z.getGuild(e);
      null != t && i(t)
    });
    else {
      let t = c.Z.getGuild(e);
      null != t && i(t)
    }
    r.length > 0 && l.Z.requestMembers(r, t.toLocaleLowerCase(), n)
  }, 200)
}

function g(e, t) {
  let n = "".concat(null != e ? e : "", ":").concat(t),
    r = p.get(n);
  if (null != r) return r;
  p.set(n, !0)
}
let m = {
  getGuildNameSuggestion: function(e) {
    let t = u.default.getCurrentUser(),
      n = f.oY(t);
    return null == n || 0 === n.length ? "" : _.NW.formatToPlainString(_.t.Y6Qfjo, {
      username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
    })
  },
  requestMembers(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
      r = Array.isArray(e),
      i = [],
      o = !1;
    r ? e.forEach(e => {
      null == g(e, t) && i.push(e)
    }) : null == g(e, t) && (o = !0), i.length > 0 && r ? h(i, t, n) : o && h(e, t, n)
  }
}