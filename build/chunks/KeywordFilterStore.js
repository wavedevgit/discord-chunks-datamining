/** Chunk was on web.js **/
/** chunk id: 803141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./539854.js");
var Chunk750041 = require("./750041.js"),
  Chunk594174 = require("./594174.js"),
  Chunk131681 = require("./131681.js"),
  Chunk932941 = require("./932941.js"),
  Chunk363072 = require("./363072.js"),
  Chunk526761 = require("./526761.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = null;

function d() {
  let e = (0, Chunk131681.U)() ? [...Chunk932941.pF, ...Chunk932941.wq, ...Chunk932941.$u] : [],
    t = Chunk594174.default.getCurrentUser();
  if (null == exports ? true : exports.isStaff()) {
    let t = require("./932941.js").Bk;
    module.push(...exports)
  }(u = new Chunk363072.B).addWords(module)
}

function f() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
  null == u && (u = new Chunk363072.B), u.addWords(module)
}

function p() {
  d()
}

function _() {
  d()
}

function m(e) {
  let {
    local: t,
    settings: n
  } = e;
  if (!t || n.type !== l.yP.PRELOADED_USER_SETTINGS) returnfalse;
  null != u && u.clear(), d()
}
class h extends Chunk750041.Z {
  loadCache() {
    let e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
    null != module && (u = null != module.keywordTrie ? Chunk363072.B.fromSnapshot(module.keywordTrie) : null)
  }
  takeSnapshot() {
    return {
      version: h.LATEST_SNAPSHOT_VERSION,
      data: {
        keywordTrie: u
      }
    }
  }
  getKeywordTrie() {
    return u
  }
  initializeForKeywordTests() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
    f(module)
  }
  constructor() {
    super({
      CONNECTION_OPEN: p,
      CONNECTION_OPEN_SUPPLEMENTAL: p,
      CACHE_LOADED: () => this.loadCache(),
      OVERLAY_INITIALIZE: _,
      USER_SETTINGS_PROTO_UPDATE: m
    })
  }
}
c(h, "displayName", "KeywordFilterStore"), c(h, "LATEST_SNAPSHOT_VERSION", 2);
let g = new h