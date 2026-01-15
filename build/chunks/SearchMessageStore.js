/** Chunk was on web.js **/
/** chunk id: 735020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk786761 = require("./786761.js"),
  Chunk247206 = require("./247206.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {};

function u(e) {
  return "".concat(e.channel_id, ":").concat(e.id)
}

function d(e) {
  let {
    data: t
  } = e;
  c = {}, t.forEach(e => {
    let {
      messages: t
    } = e;
    t.forEach(e => {
      e.forEach(e => {
        c[u(e)] = (0, o.e5)(e)
      })
    })
  })
}

function f(e) {
  let {
    message: t
  } = e;
  if (null == t.id || null == t.channel_id) returnfalse;
  let n = u(t),
    r = c[n];
  return null != r && (c[n] = (0, o.wi)(r, {
    attachments: t.attachments,
    embeds: t.embeds
  }), true)
}

function p(e) {
  let {
    messageId: t,
    channelId: n
  } = e, r = u({
    id: t,
    channel_id: n
  }), i = c[r];
  null != i && (c[r] = (0, s.Cm)(i))
}

function _() {
  m()
}

function h() {
  m()
}

function m() {
  c = {}
}
class g extends(r = Chunk442837.ZP.Store) {
  getMessage(e, t) {
    return c[u({
      id: e,
      channel_id: t
    })]
  }
}
l(g, "displayName", "SearchMessageStore");
let E = new g(Chunk570140.Z, {
  SEARCH_MESSAGES_SUCCESS: d,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: d,
  MESSAGE_UPDATE: f,
  LOGOUT: _,
  CONNECTION_OPEN: h,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: p
})