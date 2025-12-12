/** Chunk was on web.js **/
/** chunk id: 825409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => p,
  q: () => c
}), require("./388685.js"), require("./642613.js"), require("./35282.js"), require("./415506.js");
var Chunk836560 = require("./836560.js"),
  Chunk400053 = require("./400053.js"),
  o = require.n(Chunk400053),
  Chunk142494 = require("./142494.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.g.IntlMessageFormat = o(), require("./770801.js"), require("./177486.js"), require("./144062.js"), require("./750854.js"), require("./198823.js"), require("./551576.js"), require("./682422.js"), require("./760388.js"), require("./725589.js"), require("./338770.js"), require("./99783.js"), require("./740635.js"), require("./523332.js"), require("./307163.js"), require("./636681.js"), require("./209012.js"), require("./651811.js"), require("./740191.js"), require("./407837.js"), require("./372097.js"), require("./894996.js"), require("./829028.js"), require("./750879.js"), require("./952874.js"), require("./185851.js"), require("./962066.js"), require("./519708.js"), require("./180583.js"), delete require.g.IntlMessageFormat, "undefined" == typeof Intl && require("./211604.js");
let l = "en-US";

function c() {
  let e;
  return null != (e = (Array.isArray(navigator.languages) ? navigator.languages[0] : null) || navigator.language || navigator.browserLanguage || navigator.userLanguage) ? module : ""
}
class u {
  getMessages() {
    return this._parsedMessages
  }
  constructor(e) {
    s(this, "_context", {
      messages: {},
      defaultMessages: {},
      locale: l
    }), s(this, "_parsedMessages", {}), s(this, "_getParsedMessages", true), this._getParsedMessages = e
  }
}
class d extends u {
  refresh(e) {
    this._context = e, this._refresh(e, this._parsedMessages)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, s(this, "_refresh", function(e) {
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
    super(e), t = this, s(this, "_createProxy", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : t._context;
      return new Proxy({}, {
        get: (n, r) => n[r] || (n[r] = t._getParsedMessages(e, r, t._createProxy))
      })
    }), this._parsedMessages = this._createProxy(this._context)
  }
}
class p extends Chunk836560.EventEmitter {
  updateMessagesForExperiment(e, t) {
    let n = this._fetchMessages(e);
    if (n instanceof Promise) return void n.then(n => {
      this._applyMessagesForLocale(t(n), e)
    });
    this._applyMessagesForLocale(t(n), e)
  }
  setLocale(e) {
    if (this._chosenLocale === e) return;
    this._requestedLocale = e;
    let t = this._chosenLocale;
    this._chosenLocale = e, this.loadPromise = this._loadMessagesForLocale(e), this.emit("locale", this._chosenLocale, t)
  }
  setUpdateRules(e) {
    (0, a.yR)(e)
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
    let r = null != (e = c()) ? module : l,
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
    if (Chunk400053.includes(Chunk836560)) return Chunk836560;
    let o = Chunk836560.split("-");
    return Chunk400053.includes(o[0]) ? o[0] : "zh" === o[0] && o.length > 1 && "Hant" === o[1] ? null != (t = Chunk400053.find(e => "zh-TW" === e)) ? exports : l : null != (n = Chunk400053.find(e => e.split("-")[0] === o[0])) ? require : l
  }
  _loadMessagesForLocale(e) {
    let t = this._fetchMessages(e);
    return t instanceof Promise ? t.then(t => this._applyMessagesForLocale(t, e)) : (this._applyMessagesForLocale(t, e), Promise.resolve())
  }
  _applyMessagesForLocale(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : this._findMessages(l);
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
    let t = e === l ? () => {
      throw Error("Error Loading ".concat(l))
    } : () => (console.warn("Unsupported Locale", e), false === e.indexOf("-")) ? this._fetchMessages(l) : this._fetchMessages(e.split("-")[0]);
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
    super(), s(this, "Messages", true), s(this, "loadPromise", Promise.resolve()), s(this, "initialLanguageLoad", true), s(this, "resolveLanguageLoaded", () => {}), s(this, "_languages", []), s(this, "_provider", true), s(this, "_chosenLocale", ""), s(this, "_requestedLocale", true), s(this, "_getMessages", true), s(this, "_getParsedMessages", (e, t, n) => {
      let {
        messages: r,
        defaultMessages: i,
        locale: o
      } = e, s = r[t] || i[t];
      if ("object" == typeof s) return n({
        messages: s,
        defaultMessages: i[t],
        locale: o
      });
      try {
        return (0, a.FC)(s, o)
      } catch (e) {
        if (console.warn("Failed parsing intl key '".concat(String(t), "' in locale '").concat(o, "' defaulting to English"), e), "string" == typeof(s = i[t])) return (0, a.FC)(s, o)
      }
      return ""
    }), s(this, "_handleNewListener", e => {
      "locale" === e && this.emit(e, this._chosenLocale)
    }), this.initialLanguageLoad = new Promise((e, t) => {
      this.resolveLanguageLoaded = e
    }), Intl.__addLocaleData && Intl.__addLocaleData(n(201688)), this._languages = r(), this._provider = null != window.Proxy ? new f(this._getParsedMessages) : new d(this._getParsedMessages), this.Messages = this._provider.getMessages(), this._getMessages = t;
    try {
      new Intl.NumberFormat(e, {}), this.setLocale(e || this.getDefaultLocale())
    } catch (e) {
      this.setLocale(this.getDefaultLocale())
    }
    this.on("newListener", this._handleNewListener)
  }
}