/** Chunk was on web.js **/
/** chunk id: 490029, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $j: () => u,
  Ty: () => f,
  lW: () => _,
  sr: () => p,
  zP: () => d
}), require("./415506.js");
var Chunk536285 = require("./536285.js"),
  Chunk996106 = require("./996106.js"),
  Chunk812967 = require("./812967.js"),
  Chunk960048 = require("./960048.js"),
  Chunk511405 = require("./511405.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js");

function u() {
  Chunk536285.default.connect()
}

function d() {
  Chunk536285.default.disconnect()
}

function f(e, t) {
  if (!__OVERLAY__) throw new i.Z({
    errorCode: l.lTL.UNKNOWN_ERROR
  }, "called from wrong app context");
  r.default.subscribe(l.zMe.OVERLAY, {
    token: t
  }, t => e((0, s.H)(t)))
}

function p(e, t) {
  if (__OVERLAY__) throw new i.Z({
    errorCode: l.lTL.UNKNOWN_ERROR
  }, "called from wrong app context");
  o.Z.setCommandHandler(l.Etm.OVERLAY, {
    scope: c.cE,
    handler(n) {
      let {
        args: r
      } = n;
      if (!t(r.token)) throw new i.Z({
        errorCode: l.lTL.INVALID_TOKEN
      }, "Invalid RPC auth token provided");
      e((0, s.H)(r))
    }
  }), o.Z.setEventHandler(l.zMe.OVERLAY, {
    scope: c.cE,
    handler(e) {
      let {
        args: n
      } = e;
      if (!t(n.token)) throw new i.Z({
        errorCode: l.lTL.INVALID_TOKEN
      }, "Invalid RPC auth token provided")
    }
  })
}

function _(e) {
  if (__OVERLAY__) return r.default.request(l.Etm.OVERLAY, (0, s.G)(e));
  try {
    return o.Z.dispatchToSubscriptions(l.zMe.OVERLAY, {}, (0, s.G)(e)), Promise.resolve()
  } catch (i) {
    let t = e.type,
      n = [];
    t === l.BmY.DISPATCH && (n = e.payloads.map(e => e.type));
    let r = Error("Error dispatching overlay RPC: ".concat(i.message));
    throw i.stack && (r.stack = i.stack), a.Z.captureException(r, {
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