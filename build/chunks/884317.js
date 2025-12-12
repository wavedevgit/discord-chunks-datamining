/** Chunk was on web.js **/
/** chunk id: 884317, original params: e,t,n (module,exports,re quire) **/
"use strict";
e = require.nmd(module);
var r = this && this.__awaiter || function(e, t, n, r) {
  function i(e) {
    return e instanceof n ? e : new n(function(t) {
      t(e)
    })
  }
  return new(n || (n = Promise))(function(n, o) {
    function a(e) {
      try {
        l(r.next(e))
      } catch (e) {
        o(e)
      }
    }

    function s(e) {
      try {
        l(r.throw(e))
      } catch (e) {
        o(e)
      }
    }

    function l(e) {
      e.done ? n(e.value) : i(e.value).then(a, s)
    }
    l((r = r.apply(e, t || [])).next())
  })
};
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.MessageLoader = true, exports.loadAllMessagesInLocale = s, exports.waitForAllDefaultIntlMessagesLoaded = l, exports.createLoader = c;
let Chunk868072 = require("./868072.js");
class o {
  constructor(t, n) {
    if (this.messages = {}, this.localeImportMap = t, this.supportedLocales = Object.keys(t), this.defaultLocale = n, this._localeLoadingPromises = {}, this._parseCache = {}, this._subscribers = new Set, this.fallbackMessage = new i.InternalIntlMessage([], this.defaultLocale), e.hot)
      for (let [n, i] of Object.entries(t)) e.hot.accept(i, () => r(this, true, true, function*() {
        yield this._loadLocale(n), this._parseCache = {}
      }))
  }
  withDebugValues(e, t) {
    this._debugKeyMap = e, this._localeFileMap = t
  }
  fallbackWith(e) {
    let t = this;
    for (; null != t;)
      if ((t = t._parentLoader) === this) throw Error("Setting `fallbackWith` on MessageLoader created a circular chain that would never resolve");
    this.fallbackLoader = e, e._parentLoader = this
  }
  get(e, t) {
    var n;
    let r = this.getMessageValue(e, t);
    if (null != r) return r;
    if (this.isLocaleLoading(t) && !this.isLocaleLoaded(this.defaultLocale)) return this.fallbackMessage;
    let i = this.getMessageValue(e, this.defaultLocale);
    if (null != i) return i;
    let o = null == (n = this.fallbackLoader) ? true : n.get(e, t);
    if (null != o) return o;
    let a = null != this._debugKeyMap ? `"${this._debugKeyMap[e]}" (${e})` : e,
      s = null != this._localeFileMap ? `${t} (${this._localeFileMap[t]})` : t,
      l = null != this._localeFileMap ? `${this.defaultLocale} (${this._localeFileMap[this.defaultLocale]})` : this.defaultLocale;
    return console.warn(`Requested message ${a} does not have a value in the requested locale ${s} nor the default locale ${l}`), this.fallbackMessage
  }
  getMessageValue(e, t) {
    var n, r, o;
    let a = null == (n = this._parseCache[t]) ? true : n[e];
    if (a) return a;
    if (null == this.messages[t]) {
      this.supportedLocales.includes(t) && this._loadLocale(t);
      return
    }
    let s = this.messages[t][e];
    if (null != s) {
      let n = new i.InternalIntlMessage(s, t);
      return (null != (r = (o = this._parseCache)[t]) ? r : o[t] = {})[e] = n, n
    }
  }
  _loadLocale(e) {
    return r(this, true, true, function*() {
      var t, n, r, i;
      if (null != this.messages[e]) return;
      if ((null == (t = this._localeLoadingPromises[e]) ? true : t.current) != null) return void(yield null == (n = this._localeLoadingPromises[e]) ? true : n.current);
      if (null == this.localeImportMap[e])
        if (!this.supportedLocales.includes(e)) return;
        else throw Error(`Requested to load locale ${e}, which should be supported, but no source for translation data was provided.`);
      let o = this.localeImportMap[e](),
        a = null != (i = null == (r = this._localeLoadingPromises[e]) ? true : r.initialized) && i;
      this._localeLoadingPromises[e] = {
        initialized: a,
        current: o
      }, this.messages[e] = (yield o).default, this._localeLoadingPromises[e] = {
        initialized: true,
        current: true
      }, this.emitChange()
    })
  }
  emitChange() {
    for (let e of this._subscribers.values()) module()
  }
  onChange(e) {
    return this._subscribers.add(e), () => this._subscribers.delete(e)
  }
  isLocaleLoading(e) {
    var t;
    return (null == (t = this._localeLoadingPromises[e]) ? true : t.current) != null
  }
  isLocaleLoaded(e, t = false) {
    let n = this._localeLoadingPromises[e];
    return null != n && false != n.initialized && (!t || null == n.current)
  }
  waitForLocaleLoaded(e) {
    return r(this, arguments, true, function*(e, t = false) {
      let n = this._localeLoadingPromises[e];
      if (null == n) return this._loadLocale(e);
      (!n.initialized || t) && (yield n.current)
    })
  }
  waitForDefaultLocale() {
    return r(this, arguments, true, function*(e = false) {
      return this.waitForLocaleLoaded(this.defaultLocale, e)
    })
  }
}
exports.MessageLoader = o;
let a = [];

function s(e) {
  return r(this, true, true, function*() {
    yield Promise.all(a.map(t => t._loadLocale(e)))
  })
}

function l() {
  return r(this, true, true, function*() {
    yield Promise.all(a.map(e => e.waitForDefaultLocale()))
  })
}

function c(e, t) {
  let n = new o(e, t);
  return a.push(n), n
}