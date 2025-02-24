/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => h
}), n(47120);
var r, i = n(442837),
  o = n(433517),
  a = n(570140),
  s = n(241601),
  l = n(601993);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = "SpellcheckStore",
  d = !0,
  f = new Set;

function p() {
  o.K.set(u, {
    enabled: d,
    learnedWords: f
  })
}
class _ extends(r = i.ZP.Store) {
  initialize() {
    let e = o.K.get(u);
    null != e && (d = e.enabled, f = new Set(e.learnedWords), (0, l.gL)(d), (0, l.fG)(f)), (0, s.Ql)(l._2)
  }
  isEnabled() {
    return d
  }
  hasLearnedWord(e) {
    return f.has(e.toLocaleLowerCase())
  }
}
c(_, "displayName", "SpellcheckStore");
let h = new _(a.Z, {
  SPELLCHECK_TOGGLE() {
    d = !d, (0, l.gL)(d), p()
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