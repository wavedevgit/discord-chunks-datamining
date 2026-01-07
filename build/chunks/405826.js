/** Chunk was on web.js **/
/** chunk id: 405826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => v
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk623279 = require("./623279.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk374470 = require("./374470.js"),
  Chunk579806 = require("./579806.js"),
  Chunk710845 = require("./710845.js"),
  Chunk706454 = require("./706454.js"),
  Chunk823379 = require("./823379.js"),
  Chunk598105 = require("./598105.js"),
  Chunk643413 = require("./643413.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 250,
  m = new Chunk710845.Z("Spellchecker"),
  h = null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.spellCheck;

function g(e) {
  var t;
  e = null != (t = f.Z[e]) ? t : e;
  let n = (0, r.parse)(e.replace(/[_-]/g, "-"));
  if (null == n || null == n.langtag.language || null == n.langtag.region) return void m.error("".concat(e, " is not a valid locale."));
  let {
    language: i,
    region: a
  } = n.langtag;
  return "".concat(i.language.toLowerCase(), "-").concat(a.toUpperCase())
}
class E {
  get enabled() {
    return this._enabled
  }
  set enabled(e) {
    this._enabled = e
  }
  setLearnedWords(e) {
    h.setLearnedWords(e)
  }
  setLocale(e) {
    var t;
    null == (t = h.setLocale(e)) || t.then(t => {
      m.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
    })
  }
  setAppLocale(e) {
    this.regionPreference = e.split("-")[1]
  }
  detectLanguage(e) {
    this.enabled && this.languageDetector.process(e)
  }
  getAvailableLanguages(e) {
    let t = {};
    return e.forEach(e => {
      var n;
      let [r] = e.split("-");
      t[r] = null != (n = t[r]) ? n : e
    }), t
  }
  isMisspelled(e, t) {
    return "" !== this.misspelledWord && e === this.misspelledWord
  }
  getCorrectionsForMisspelling(e, t) {
    return this.isMisspelled(e, t) ? this.corrections : []
  }
  replaceMisspelling(e) {
    h.replaceMisspelling(e)
  }
  constructor(e) {
    p(this, "languageDetector", true), p(this, "regionPreference", true), p(this, "_enabled", true), p(this, "misspelledWord", ""), p(this, "corrections", []);
    let [t, n] = c.default.locale.split("-");
    this.regionPreference = n;
    let r = this.getAvailableLanguages(e);
    this.languageDetector = new d.Z(t, n => {
      let i = "".concat(n, "-").concat(this.regionPreference);
      if (false !== e.indexOf(i)) this.setLocale(i);
      else {
        var a;
        let e = null != (a = r[n]) ? a : f.Z[t];
        null != e && this.setLocale(e)
      }
    }), h.on("spellcheck-result", (e, t) => {
      this.misspelledWord = null != e ? e : "", this.corrections = null != t ? t : []
    })
  }
}
let b = a().debounce((e, t) => {
  let n = O(t);
  null != n && e.detectLanguage(n)
}, _);

function y(e) {
  null != document.body && document.body.addEventListener("beforeinput", t => b(e, t.target), true)
}

function O(e) {
  return null == e ? null : (0, o.kK)(e, HTMLInputElement) || (0, o.kK)(e, HTMLTextAreaElement) ? e.value : (0, o.kK)(e) && e.hasAttribute("contenteditable") ? e.textContent : true
}
async function v() {
  var e;
  let t = new E((null != (e = await h.getAvailableDictionaries()) ? e : []).map(g).filter(u.lm));
  return y(t), t
}