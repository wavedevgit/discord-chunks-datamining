/** Chunk was on web.js **/
/** chunk id: 996308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Le: () => p,
  Ng: () => u,
  QZ: () => f,
  Zf: () => d,
  tN: () => _
}), require("./65821.js");
var Chunk129014 = require("./129014.js"),
  Chunk636401 = require("./636401.js"),
  Chunk474951 = require("./474951.js"),
  Chunk728458 = require("./728458.js"),
  Chunk92277 = require("./92277.js"),
  Chunk652215 = require("./652215.js"),
  Chunk613057 = require("./613057.js");

function u() {
  r.default.connect()
}

function d() {
  r.default.disconnect()
}

function f(e, t) {
  if (!__OVERLAY__) throw new i.A({
    errorCode: l.Lw6.UNKNOWN_ERROR
  }, "called from wrong app context");
  r.default.subscribe(l.ZE4.OVERLAY, {
    token: t
  }, t => e((0, o.$)(t)))
}

function p(e, t) {
  if (__OVERLAY__) throw new i.A({
    errorCode: l.Lw6.UNKNOWN_ERROR
  }, "called from wrong app context");
  a.A.setCommandHandler(l.e$_.OVERLAY, {
    scope: c.LQ,
    handler(n) {
      let {
        args: r
      } = n;
      if (!t(r.token)) throw new i.A({
        errorCode: l.Lw6.INVALID_TOKEN
      }, "Invalid RPC auth token provided");
      e((0, o.$)(r))
    }
  }), a.A.setEventHandler(l.ZE4.OVERLAY, {
    scope: c.LQ,
    handler(e) {
      let {
        args: n
      } = e;
      if (!t(n.token)) throw new i.A({
        errorCode: l.Lw6.INVALID_TOKEN
      }, "Invalid RPC auth token provided")
    }
  })
}

function _(e) {
  if (__OVERLAY__) return r.default.request(l.e$_.OVERLAY, (0, o.g)(e));
  try {
    return a.A.dispatchToSubscriptions(l.ZE4.OVERLAY, {}, (0, o.g)(e)), Promise.resolve()
  } catch (i) {
    let t = e.type,
      n = [];
    t === l.kGV.DISPATCH && (n = e.payloads.map(e => e.type));
    let r = Error("Error dispatching overlay RPC: ".concat(i.message));
    throw i.stack && (r.stack = i.stack), s.A.captureException(r, {
      tags: {
        source: "legacy-overlay"
      },
      extra: {
        eventType: t,
        payloadTypes: n
      }
    }), r
  }
}