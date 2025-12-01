/** Chunk was on web.js **/
/** chunk id: 398327, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk241601 = require("./241601.js"),
  Chunk601993 = require("./601993.js");

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
  Chunk433517.K.set(u, {
    enabled: d,
    learnedWords: f
  })
}
class _ extends(r = Chunk442837.ZP.Store) {
  initialize() {
    let e = Chunk433517.K.get(u);
    null != module && (d = module.enabled, f = new Set(module.learnedWords), (0, Chunk601993.gL)(d), (0, Chunk601993.fG)(f)), (0, Chunk241601.Ql)(Chunk601993._2)
  }
  isEnabled() {
    return d
  }
  hasLearnedWord(e) {
    return f.has(e.toLocaleLowerCase())
  }
}
c(_, "displayName", "SpellcheckStore");
let m = new _(Chunk570140.Z, {
  SPELLCHECK_TOGGLE() {
    d = !d, (0, Chunk601993.gL)(d), p()
  },
  SPELLCHECK_LEARN_WORD(e) {
    let {
      word: t
    } = e;
    f.add(t.toLocaleLowerCase()), (0, l.fG)(f), p()
  },
  SPELLCHECK_UNLEARN_WORD(e) {
    let {
      word: t
    } = e;
    f.delete(t.toLocaleLowerCase()), (0, l.fG)(f), p()
  }
})