/** Chunk was on web.js **/
/** chunk id: 202107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk69882 = require("./69882.js");

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
    let e = Chunk271383.ZP.getCommunicationDisabledUserMap();
    Object.keys(module).forEach(t => {
      let n = t,
        r = (0, o.O5)(n),
        i = (0, o.V6)(n),
        a = e[n];
      (0, s.J)(a) || m(r, i)
    })
  },
  m = (e, t) => {
    var n, i, l, u, f, p;
    let _ = o.ZP.getMember(e, t),
      m = a.default.getUser(t);
    if (null == _ || null == m || (0, s.b)(_)) return;
    let h = d(c({}, _), {
      guildId: e,
      nick: null != (n = _.nick) ? n : m.username,
      avatar: null != (i = _.avatar) ? i : true,
      avatarDecoration: null != _.avatarDecoration ? c({}, _.avatarDecoration) : true,
      premiumSince: null != (l = _.premiumSince) ? l : true,
      isPending: null != (u = _.isPending) && u,
      user: d(c({}, m), {
        email: null != (f = m.email) ? f : true,
        phone: null != (p = m.phone) ? p : true
      }),
      communicationDisabledUntil: null
    });
    r.Z.dispatch(c({
      type: "GUILD_MEMBER_UPDATE"
    }, h))
  };
class h extends Chunk147913.Z {
  _initialize() {
    p = setInterval(() => _(), f)
  }
  _terminate() {
    clearInterval(p)
  }
  constructor(...e) {
    super(...e), l(this, "clearGuildMemberTimeout", m)
  }
}
let g = new h