/** Chunk was on web.js **/
/** chunk id: 261875, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk348326 = require("./348326.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk115522 = require("./115522.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Chunk710845.Z("DatabaseManager"),
  d = false;
class f extends Chunk442837.ZP.Store {
  initialize() {
    this.waitFor(Chunk314897.default), this.carefullySpeculativelyOpen(Chunk115522.n()), this.handleAuthenticationStoreChanged(), Chunk314897.default.addChangeListener(() => this.handleAuthenticationStoreChanged())
  }
  databaseName(e) {
    return _(e)
  }
  database(e) {
    if (null != e) {
      var t;
      return null != (t = this.databases.get(e)) ? t : null
    }
    return null
  }
  carefullyOpenDatabase(e) {
    if (this.preventWritingCachesAgainThisSession) return u.verbose("Not opening database because caches have been manually cleared."), null;
    if (null != e && !this.databases.has(e)) {
      let t = m(e);
      u.verbose("added database (".concat(e, " → ").concat(t, ")")), this.databases.set(e, t), this.emitChange()
    }
    return this.database(e)
  }
  replaceDisableAllDatabases(e) {
    for (let t of (u.info("disabling and nulling all databases (reason: ".concat(e, ")")), this.databases.keys())) {
      let n = this.databases.get(t);
      null == n || n.disable(e), null == n || n.close(), this.databases.set(t, null)
    }
    this.emitChange()
  }
  remove(e) {
    let t = this.databases.get(e);
    u.log("removing database (user: ".concat(e, ", database: ").concat(t, ")")), null == t || t.close(), this.databases.delete(e), this.emitChange()
  }
  handleClearCaches(e) {
    e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = true), this.replaceDisableAllDatabases("DatabaseManager (".concat(e.reason, ")"))
  }
  handleConnectionOpen() {
    let e = Chunk314897.default.getId(),
      t = this.databases.get(module),
      n = null == exports ? true : exports.state();
    null == exports && require !== Chunk348326.hi.Open && this.remove(module), this.carefullyOpenDatabase(module)
  }
  handleAuthenticationStoreChanged() {
    let e = Chunk314897.default.getId(),
      t = this.activeUserId;
    if (module !== exports) {
      let n = this.databases.get(exports);
      u.verbose("active user changed (now: ".concat(module, ", was: ").concat(exports, ", was: ").concat(require, ")")), null == require || require.close(), Chunk115522.I(module), this.activeUserId = module, this.databases.delete(exports)
    }
  }
  async carefullySpeculativelyOpen(e) {
    if (this.preventWritingCachesAgainThisSession) return void u.verbose("Not opening database because caches have been manually cleared.");
    if (null != e) {
      let t = await h(e);
      null == t || this.databases.has(e) ? (u.verbose("discarding speculative database (".concat(e, " → ").concat(t, ")")), null == t || t.close()) : (u.verbose("added speculative database (".concat(e, " → ").concat(t, ")")), this.databases.set(e, t), this.emitChange())
    }
  }
  constructor() {
    super(Chunk570140.Z, {
      CLEAR_CACHES: e => this.handleClearCaches(e),
      CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
      CONNECTION_OPEN: () => this.handleConnectionOpen(),
      LOGOUT: () => this.handleAuthenticationStoreChanged()
    }, Chunk570140.c.Early), c(this, "databases", new Map), c(this, "activeUserId", null), c(this, "preventWritingCachesAgainThisSession", false)
  }
}

function p(e, t) {
  for (let n = 0; n < e; n++) try {
    return t()
  } catch (e) {
    u.error("tryUntil ".concat(n), e)
  }
  return null
}

function _(e) {
  return "@account.".concat(e)
}

function m(e) {
  if (d) {
    let t = 50,
      n = _(e);
    return u.verbose("synchronously opening ".concat(n)), p(t, () => i.vo.openSyncUnsafe(n, {
      invalidateDisabledHandles: true
    }))
  }
  return null
}
async function h(e) {
  if (d) {
    let t = _(e);
    u.verbose("speculatively opening ".concat(t));
    try {
      return await i.vo.open(t)
    } catch (e) {
      u.warn("couldn't speculatively open database.", e)
    }
  }
  return null
}
let g = new f