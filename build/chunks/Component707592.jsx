/** Chunk was on web.js **/
/** chunk id: 707592, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Py: () => _,
  Ul: () => p,
  uR: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js"),
  Chunk686956 = require("./686956.js"),
  Chunk652215 = require("./652215.js"),
  Chunk231723 = require("./231723.js");

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

function f(e) {
  let {
    eventId: t,
    recurrenceId: a
  } = e;
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("51354"), n.e("77986")]).then(n.bind(n, 324584));
    return n => (0, r.jsx)(e, c({
      guildScheduledEventId: t,
      initialRecurrenceId: a
    }, n))
  })
}
async function p(e, t) {
  let {
    guild_id: n
  } = e;
  await a.A.transitionToGuildSync(n, t), f({
    eventId: e.id,
    event: e
  })
}

function _(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.e("34526").then(n.bind(n, 521549));
    return n => (0, r.jsx)(t, d(c({}, n), {
      channel: e
    }))
  }, {
    contextKey: t === s.BRT.POPOUT ? o.KX : o.SY
  })
}