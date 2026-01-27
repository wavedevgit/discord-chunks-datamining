/** Chunk was on web.js **/
/** chunk id: 315064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => p
}), require("./896048.js"), require("./638769.js"), require("./747238.js"), require("./65821.js");
var Chunk143236 = require("./143236.js"),
  Chunk424899 = require("./424899.js"),
  a = require.n(Chunk424899),
  Chunk175259 = require("./175259.js"),
  Chunk463303 = require("./463303.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.g.IntlMessageFormat = a(), require("./718931.js"), require("./653802.js"), require("./361715.js"), require("./377815.js"), require("./144645.js"), require("./396547.js"), require("./329096.js"), require("./96149.js"), require("./161700.js"), require("./920890.js"), require("./117635.js"), require("./222425.js"), require("./342881.js"), require("./298566.js"), require("./801272.js"), require("./274306.js"), require("./320207.js"), require("./427980.js"), require("./425636.js"), require("./925835.js"), require("./744661.js"), require("./570309.js"), require("./15300.js"), require("./914614.js"), require("./162752.js"), require("./570885.js"), require("./29274.js"), require("./525919.js"), delete require.g.IntlMessageFormat, "u" < typeof Intl && require("./426586.js");
let c = "en-US";
class u {
  getMessages() {
    return this._parsedMessages
  }
  constructor(e) {
    l(this, "_context", {
      messages: {},
      defaultMessages: {},
      locale: c
    }), l(this, "_parsedMessages", {}), l(this, "_getParsedMessages", true), this._getParsedMessages = e
  }
}
class d extends u {
  refresh(e) {
    this._context = e, this._refresh(e, this._parsedMessages)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, l(this, "_refresh", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      return Object.keys(e.defaultMessages).forEach(r => {
        Object.defineProperty(n, r, {
          configurable: true,
          get: () => (delete n[r], n[r] = t._getParsedMessages(e, r, t._refresh))
        })
      }), n
    })
  }
}
class f extends u {
  refresh(e) {
    Object.assign(this._context, e), Object.keys(this._parsedMessages).forEach(e => {
      delete this._parsedMessages[e]
    })
  }
  constructor(e) {
    var t;
    super(e), t = this, l(this, "_createProxy", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : t._context;
      return new Proxy({}, {
        get: (n, r) => n[r] || (n[r] = t._getParsedMessages(e, r, t._createProxy))
      })
    }), this._parsedMessages = this._createProxy(this._context)
  }
}
class p extends Chunk143236.EventEmitter {
  updateMessagesForExperiment(e, t) {
    let n = this._fetchMessages(e);
    n instanceof Promise ? n.then(n => {
      this._applyMessagesForLocale(t(n), e)
    }) : this._applyMessagesForLocale(t(n), e)
  }
  setLocale(e) {
    if (this._chosenLocale === e) return;
    this._requestedLocale = e;
    let t = this._chosenLocale;
    this._chosenLocale = e, this.loadPromise = this._loadMessagesForLocale(e), this.emit("locale", this._chosenLocale, t)
  }
  setUpdateRules(e) {
    (0, s.Zs)(e)
  }
  getLanguages() {
    return this._languages
  }
  getAvailableLocales() {
    return this._languages.filter(e => {
      let {
        enabled: t
      } = e;
      return t
    }).map(e => {
      var t;
      let {
        code: n,
        name: r
      } = e;
      return {
        value: n,
        name: r,
        localizedName: null != (t = this.Messages[n]) ? t : r
      }
    }).sort((e, t) => {
      let {
        name: n
      } = e, {
        name: r
      } = t;
      return (n = n.toLowerCase()) < (r = r.toLowerCase()) ? false : +(n > r)
    })
  }
  getLocale() {
    return this._chosenLocale
  }
  getLocaleInfo() {
    return this._languages.find(e => e.code === this._chosenLocale)
  }
  getDefaultLocale() {
    var e, t, n;
    let r = null != (e = (0, o.c)()) ? e : c,
      i = this._languages.filter(e => {
        let {
          enabled: t
        } = e;
        return t
      }).map(e => {
        let {
          code: t
        } = e;
        return t
      });
    if (i.includes(r)) return r;
    let a = r.split("-");
    return i.includes(a[0]) ? a[0] : "zh" === a[0] && a.length > 1 && "Hant" === a[1] ? null != (n = i.find(e => "zh-TW" === e)) ? n : c : null != (t = i.find(e => e.split("-")[0] === a[0])) ? t : c
  }
  _loadMessagesForLocale(e) {
    let t = this._fetchMessages(e);
    return t instanceof Promise ? t.then(t => this._applyMessagesForLocale(t, e)) : (this._applyMessagesForLocale(t, e), Promise.resolve())
  }
  _applyMessagesForLocale(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : this._findMessages(c);
    this._requestedLocale === t && (this._provider.refresh({
      messages: e,
      defaultMessages: n,
      locale: t
    }), this.resolveLanguageLoaded())
  }
  _findMessages(e) {
    let t = this._fetchMessages(e);
    if (t instanceof Promise) throw Error("Messages are still loading.");
    return t
  }
  _fetchMessages(e) {
    let t = e === c ? () => {
      throw Error("Error Loading ".concat(c))
    } : () => (console.warn("Unsupported Locale", e), false === e.indexOf("-")) ? this._fetchMessages(c) : this._fetchMessages(e.split("-")[0]);
    try {
      let n = this._getMessages(e);
      return n instanceof Promise ? n.catch(t) : n
    } catch (e) {
      return t()
    }
  }
  constructor({
    initialLocale: e,
    getMessages: t,
    getLanguages: r
  }) {
    super(), l(this, "Messages", true), l(this, "loadPromise", Promise.resolve()), l(this, "initialLanguageLoad", true), l(this, "resolveLanguageLoaded", () => {}), l(this, "_languages", []), l(this, "_provider", true), l(this, "_chosenLocale", ""), l(this, "_requestedLocale", true), l(this, "_getMessages", true), l(this, "_getParsedMessages", (e, t, n) => {
      let {
        messages: r,
        defaultMessages: i,
        locale: a
      } = e, o = r[t] || i[t];
      if ("object" == typeof o) return n({
        messages: o,
        defaultMessages: i[t],
        locale: a
      });
      try {
        return (0, s.I4)(o, a)
      } catch (e) {
        if (console.warn("Failed parsing intl key '".concat(String(t), "' in locale '").concat(a, "' defaulting to English"), e), "string" == typeof(o = i[t])) return (0, s.I4)(o, a)
      }
      return ""
    }), l(this, "_handleNewListener", e => {
      "locale" === e && this.emit(e, this._chosenLocale)
    }), this.initialLanguageLoad = new Promise((e, t) => {
      this.resolveLanguageLoaded = e
    }), Intl.__addLocaleData && Intl.__addLocaleData(n(217671)), this._languages = r(), this._provider = null != window.Proxy ? new f(this._getParsedMessages) : new d(this._getParsedMessages), this.Messages = this._provider.getMessages(), this._getMessages = t;
    try {
      new Intl.NumberFormat(e, {}), this.setLocale(e || this.getDefaultLocale())
    } catch (e) {
      this.setLocale(this.getDefaultLocale())
    }
    this.on("newListener", this._handleNewListener)
  }
}