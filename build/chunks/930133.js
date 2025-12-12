/** Chunk was on web.js **/
/** chunk id: 930133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./49124.js"), require("./388685.js");
var Chunk433517 = require("./433517.js"),
  Chunk710845 = require("./710845.js"),
  Chunk915486 = require("./915486.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s {
  isValidCachedProto(e) {
    return null != e && "object" == typeof e && !Array.isArray(e)
  }
  buildParsedCacheKey(e, t) {
    return "".concat(this.name, ":parsed:").concat(e, ":").concat(t)
  }
  buildProtoToSaveCacheKey(e, t, n) {
    return "".concat(this.name, ":protoToSave:").concat(e, ":").concat(t, ":v").concat(n)
  }
  readFromStorage(e, t) {
    let n = r.K.getRaw(e);
    if (null == n) return null;
    try {
      return JSON.parse(n, a.RH)
    } catch (n) {
      return this.logger.warn("".concat(this.name, ": ").concat(t), {
        cacheKey: e,
        error: n
      }), null
    }
  }
  writeWithCleanup(e, t, n, i, o) {
    let s = e.get(t);
    if (null != s && s !== n) try {
      r.K.remove(s)
    } catch (e) {}
    e.set(t, n);
    try {
      r.K.setRaw(n, JSON.stringify(i, a.h7))
    } catch (e) {
      this.logger.warn("".concat(this.name, ": ").concat(o), {
        type: t,
        cacheKey: n,
        error: e
      })
    }
  }
  readParsedProto(e, t) {
    if ("" === t) return null;
    let n = this.buildParsedCacheKey(e, t),
      r = this.readFromStorage(n, "failed to parse cached proto");
    return this.isValidCachedProto(r) ? (this.currentParsedCacheKeys.set(e, n), r) : (this.logger.verbose("".concat(this.name, ": cache miss for parsed proto"), {
      type: e,
      b64: t
    }), null)
  }
  writeParsedProto(e, t, n) {
    if ("" === t) return;
    let r = this.buildParsedCacheKey(e, t);
    this.writeWithCleanup(this.currentParsedCacheKeys, e, r, n, "failed to cache parsed proto")
  }
  readProtoToSave(e, t, n) {
    let r = this.buildProtoToSaveCacheKey(e, t, n),
      i = this.readFromStorage(r, "failed to parse cached protoToSave");
    return this.isValidCachedProto(i) ? (this.currentProtoToSaveCacheKeys.set(e, r), i) : (this.logger.verbose("".concat(this.name, ": cache miss for protoToSave"), {
      type: e,
      b64: t,
      version: n
    }), null)
  }
  writeProtoToSave(e, t, n, r) {
    let i = this.buildProtoToSaveCacheKey(e, t, n);
    this.writeWithCleanup(this.currentProtoToSaveCacheKeys, e, i, r, "failed to cache protoToSave")
  }
  constructor(e) {
    o(this, "name", true), o(this, "logger", true), o(this, "currentParsedCacheKeys", new Map), o(this, "currentProtoToSaveCacheKeys", new Map), this.name = e, this.logger = new i.Z(e)
  }
}
let l = s