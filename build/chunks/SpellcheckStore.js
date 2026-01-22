/** Chunk was on web.js **/
/** chunk id: 638128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk11057 = require("./11057.js"),
  Chunk454235 = require("./454235.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = "SpellcheckStore",
  d = true,
  f = new Set;

function p() {
  a.w.set(u, {
    enabled: d,
    learnedWords: f
  })
}
class _ extends(r = Chunk311907.Ay.Store) {
  initialize() {
    let e = a.w.get(u);
    null != e && (d = e.enabled, f = new Set(e.learnedWords), (0, l.kv)(d), (0, l.d1)(f)), (0, o.I)(l.Av)
  }
  isEnabled() {
    return d
  }
  hasLearnedWord(e) {
    return f.has(e.toLocaleLowerCase())
  }
}
c(_, "displayName", "SpellcheckStore");
let h = new _(Chunk73153.h, {
  SPELLCHECK_TOGGLE() {
    d = !d, (0, l.kv)(d), p()
  },
  SPELLCHECK_LEARN_WORD(e) {
    let {
      word: t
    } = e;
    f.add(t.toLocaleLowerCase()), (0, l.d1)(f), p()
  },
  SPELLCHECK_UNLEARN_WORD(e) {
    let {
      word: t
    } = e;
    f.delete(t.toLocaleLowerCase()), (0, l.d1)(f), p()
  }
})