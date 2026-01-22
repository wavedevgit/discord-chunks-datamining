/** Chunk was on web.js **/
/** chunk id: 718116, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => y
}), require("./896048.js");
var i, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk824953 = require("./824953.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {},
  f = {};

function p(e, t) {
  return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function _(e) {
  return null != d[e] || (d[e] = {}), d[e]
}

function h(e) {
  let {
    guildId: t,
    channelId: n,
    webhooks: i,
    error: a
  } = e;
  if (null == i) return void(null != a ? (r = a, delete f[p(t, n)]) : null != n && null != d[t] && (r = null, c.A.fetchForChannel(t, n)));
  r = null;
  let o = [];
  null != n && (o = s()(_(t)).values().filter(e => e.channel_id !== n).value());
  let l = d[t] = {};
  o.concat(i).forEach(e => l[e.id] = e), delete f[p(t, n)]
}

function m(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  f[p(t, n)] = true
}

function g(e) {
  let {
    guildId: t,
    webhook: n
  } = e;
  _(t)[n.id] = n
}

function E(e) {
  let {
    guildId: t,
    webhookId: n
  } = e;
  delete _(t)[n]
}
class b extends(i = Chunk311907.Ay.Store) {
  isFetching(e, t) {
    return null != f[p(e, t)]
  }
  getWebhooksForGuild(e) {
    return s().values(_(e))
  }
  getWebhooksForChannel(e, t) {
    return s()(_(e)).values().filter(e => e.channel_id === t).value()
  }
  get error() {
    return r
  }
}
u(b, "displayName", "WebhooksStore");
let y = new b(Chunk73153.h, {
  WEBHOOKS_UPDATE: h,
  WEBHOOKS_FETCHING: m,
  WEBHOOK_CREATE: g,
  WEBHOOK_UPDATE: g,
  WEBHOOK_DELETE: E
})