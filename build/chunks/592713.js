/** Chunk was on web.js **/
/** chunk id: 592713, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk316031 = require("./316031.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = 1e4,
  p = null,
  _ = () => {
    let e = a.Ay.getCommunicationDisabledUserMap();
    Object.keys(e).forEach(t => {
      let n = t,
        r = (0, a.DL)(n),
        i = (0, a.vg)(n),
        s = e[n];
      (0, o.n)(s) || h(r, i)
    })
  },
  h = (e, t) => {
    var n, i, l, u, f, p;
    let _ = a.Ay.getMember(e, t),
      h = s.default.getUser(t);
    if (null == _ || null == h || (0, o.Z)(_)) return;
    let m = d(c({}, _), {
      guildId: e,
      nick: null != (n = _.nick) ? n : h.username,
      avatar: null != (i = _.avatar) ? i : true,
      avatarDecoration: null != _.avatarDecoration ? c({}, _.avatarDecoration) : true,
      premiumSince: null != (l = _.premiumSince) ? l : true,
      isPending: null != (u = _.isPending) && u,
      user: d(c({}, h), {
        email: null != (f = h.email) ? f : true,
        phone: null != (p = h.phone) ? p : true
      }),
      communicationDisabledUntil: null
    });
    r.h.dispatch(c({
      type: "GUILD_MEMBER_UPDATE"
    }, m))
  };
class m extends Chunk439372.A {
  _initialize() {
    p = setInterval(() => _(), f)
  }
  _terminate() {
    clearInterval(p)
  }
  constructor(...e) {
    super(...e), l(this, "clearGuildMemberTimeout", h)
  }
}
let g = new m