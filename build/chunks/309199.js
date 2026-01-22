/** Chunk was on web.js **/
/** chunk id: 309199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SM: () => d,
  eh: () => c,
  k_: () => u,
  uX: () => s
}), require("./896048.js");
var Chunk661191 = require("./661191.js"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js");

function s(e) {
  let [t, n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.A, a.A];
  return l(o(e).filter(e => {
    let [, r] = e;
    return !t.isMessageRequest(r.id) && !n.isSpam(r.id)
  }))
}

function o(e) {
  return r.default.keys(e).map(t => [t, e[t]])
}

function l(e) {
  return Array.from(e).reduce((e, t) => {
    let [n, r] = t;
    return Object.assign(e, {
      [n]: r
    })
  }, {})
}

function c(e) {
  let [t, n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.A, a.A];
  return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e))
}

function u(e) {
  let [t, n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.A, a.A];
  return t.isMessageRequest(e) || n.isSpam(e)
}

function d() {
  let [e, t] = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [i.A, a.A], n = t.getSpamChannelsCount();
  return e.getMessageRequestsCount() > 0 || n > 0
}