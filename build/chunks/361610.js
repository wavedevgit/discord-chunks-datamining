/** Chunk was on web.js **/
/** chunk id: 361610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cf: () => s,
  Ey: () => c,
  G9: () => l,
  NE: () => o,
  NJ: () => u,
  un: () => a
}), require("./321073.js");
var Chunk73153 = require("./73153.js"),
  Chunk36124 = require("./36124.js");

function a(e, t) {
  r.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
    guildId: e,
    userIds: t
  })
}

function o(e, t) {
  r.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
    guildId: e,
    userIds: t
  })
}

function s(e) {
  r.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
    guildId: e
  })
}

function l(e) {
  r.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
    guildId: e
  })
}

function c(e, t, n) {
  r.h.dispatch({
    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
    guildId: e,
    channelId: t,
    ranges: n
  })
}

function u(e) {
  let {
    guildId: t,
    channelId: n,
    y: r,
    height: a,
    rowHeight: o
  } = e;

  function s(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(e / o)) + t)
  }
  let l = [];

  function u(e) {
    let t = e + (i.JM - 1);
    return l.push([e, t]), t + 1
  }
  let d = s(.5 * a),
    f = s(r, -d),
    p = s(r + a, d);
  for (f > 0 && (f = Math.max(u(0), f)), f = Math.floor(f / i.JM) * i.JM; f <= p;) f = u(f);
  c(t, n, l)
}