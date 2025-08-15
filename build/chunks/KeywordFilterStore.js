/** Chunk was on 25292 **/
/** chunk id: 803141, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk750041 = require("./750041.js"),
  Chunk594174 = require("./594174.js"),
  Chunk131681 = require("./131681.js"),
  Chunk932941 = require("./932941.js"),
  Chunk363072 = require("./363072.js"),
  Chunk526761 = require("./526761.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null;

function g() {
  let e = (0, Chunk131681.U)() ? [...Chunk932941.pF, ...Chunk932941.wq, ...Chunk932941.$u] : [],
    t = Chunk594174.default.getCurrentUser();
  if (null == exports ? true : exports.isStaff()) {
    let t = require("./932941.js").Bk;
    module.push(...exports)
  }(l = new Chunk363072.B).addWords(module)
}

function k() {
  g()
}

function d() {
  g()
}

function f(e) {
  let {
    local: t,
    settings: n
  } = e;
  if (!t || n.type !== s.yP.PRELOADED_USER_SETTINGS) returnfalse;
  null != l && l.clear(), g()
}
class h extends Chunk750041.Z {
  loadCache() {
    let e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
    null != module && (l = null != module.keywordTrie ? Chunk363072.B.fromSnapshot(module.keywordTrie) : null)
  }
  takeSnapshot() {
    return {
      version: h.LATEST_SNAPSHOT_VERSION,
      data: {
        keywordTrie: l
      }
    }
  }
  getKeywordTrie() {
    return l
  }
  initializeForKeywordTests() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
    ! function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
      null == l && (l = new Chunk363072.B), l.addWords(module)
    }(module)
  }
  constructor() {
    super({
      CONNECTION_OPEN: k,
      CONNECTION_OPEN_SUPPLEMENTAL: k,
      CACHE_LOADED: () => this.loadCache(),
      OVERLAY_INITIALIZE: d,
      USER_SETTINGS_PROTO_UPDATE: f
    })
  }
}
u(h, "displayName", "KeywordFilterStore"), u(h, "LATEST_SNAPSHOT_VERSION", 2);
let b = new h