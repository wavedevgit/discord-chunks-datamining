/** Chunk was on web.js **/
/** chunk id: 15274, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P3: () => p,
  bO: () => f,
  lC: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk952265 = require("./952265.js"),
  Chunk749210 = require("./749210.js"),
  Chunk981631 = require("./981631.js"),
  Chunk602091 = require("./602091.js");

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
  (0, i.ZD)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("4096"), n.e("25046")]).then(n.bind(n, 697849));
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
  await a.Z.transitionToGuildSync(n, t), f({
    eventId: e.id,
    event: e
  })
}

function _(e, t) {
  (0, i.ZD)(async () => {
    let {
      default: t
    } = await n.e("21395").then(n.bind(n, 312757));
    return n => (0, r.jsx)(t, d(c({}, n), {
      channel: e
    }))
  }, {
    contextKey: t === o.IlC.POPOUT ? s.u1 : s.z1
  })
}