/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(442837),
  i = n(348326),
  o = n(570140),
  a = n(710845),
  s = n(314897),
  l = n(115522);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = new a.Z("DatabaseManager"),
  d = !1;
class f extends r.ZP.Store {
  initialize() {
    this.waitFor(s.default), this.carefullySpeculativelyOpen(l.n()), this.handleAuthenticationStoreChanged(), s.default.addChangeListener(() => this.handleAuthenticationStoreChanged())
  }
  databaseName(e) {
    return _(e)
  }
  database(e) {
    if (null != e) {
      var t;
      return null !== (t = this.databases.get(e)) && void 0 !== t ? t : null
    }
    return null
  }
  carefullyOpenDatabase(e) {
    if (this.preventWritingCachesAgainThisSession) return u.verbose("Not opening database because caches have been manually cleared."), null;
    if (null != e && !this.databases.has(e)) {
      let t = h(e);
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
    e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0), this.replaceDisableAllDatabases("DatabaseManager (".concat(e.reason, ")"))
  }
  handleConnectionOpen() {
    let e = s.default.getId(),
      t = this.databases.get(e),
      n = null == t ? void 0 : t.state();
    null == t && n !== i.hi.Open && this.remove(e), this.carefullyOpenDatabase(e)
  }
  handleAuthenticationStoreChanged() {
    let e = s.default.getId(),
      t = this.activeUserId;
    if (e !== t) {
      let n = this.databases.get(t);
      u.verbose("active user changed (now: ".concat(e, ", was: ").concat(t, ", was: ").concat(n, ")")), null == n || n.close(), l.I(e), this.activeUserId = e, this.databases.delete(t)
    }
  }
  async carefullySpeculativelyOpen(e) {
    if (this.preventWritingCachesAgainThisSession) {
      u.verbose("Not opening database because caches have been manually cleared.");
      return
    }
    if (null != e) {
      let t = await m(e);
      null == t || this.databases.has(e) ? (u.verbose("discarding speculative database (".concat(e, " → ").concat(t, ")")), null == t || t.close()) : (u.verbose("added speculative database (".concat(e, " → ").concat(t, ")")), this.databases.set(e, t), this.emitChange())
    }
  }
  constructor() {
    super(o.Z, {
      CLEAR_CACHES: e => this.handleClearCaches(e),
      CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
      CONNECTION_OPEN: () => this.handleConnectionOpen(),
      LOGOUT: () => this.handleAuthenticationStoreChanged()
    }, o.c.Early), c(this, "databases", new Map), c(this, "activeUserId", null), c(this, "preventWritingCachesAgainThisSession", !1)
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

function h(e) {
  if (d) {
    let t = 50,
      n = _(e);
    return u.verbose("synchronously opening ".concat(n)), p(t, () => i.vo.openSyncUnsafe(n, {
      invalidateDisabledHandles: !0
    }))
  }
  return null
}
async function m(e) {
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