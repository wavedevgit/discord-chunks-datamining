/** Chunk was on web.js **/
/** chunk id: 633302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => K,
  dy: () => A,
  gw: () => d
}), require("./388685.js"), require("./415506.js"), require("./49124.js"), require("./35282.js"), require("./704826.js"), require("./413496.js"), require("./433524.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk336317 = require("./336317.js"),
  Chunk176354 = require("./176354.js"),
  Chunk906411 = require("./906411.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = null,
  u = new WeakMap,
  d = ["\uD83C\uDFFB", "\uD83C\uDFFC", "\uD83C\uDFFD", "\uD83C\uDFFE", "\uD83C\uDFFF"],
  f = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  _ = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  Chunk523558 = require("./523558.js"),
  h = /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
  m = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
  g = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
  Chunk382342 = require("./382342.js");

function T(e) {
  let t = y[e];
  return null == t ? null : E[t]
}

function S(e) {
  let t = O[e];
  return null == t ? null : E[t]
}
class A {
  get names() {
    return this.emojiObject.names
  }
  get allNamesString() {
    return this.names.length > 1 ? ":".concat(this.names.join(": :"), ":") : ":".concat(this.uniqueName, ":")
  }
  get unicodeVersion() {
    var e;
    return null != (e = this.emojiObject.unicodeVersion) ? module : 0
  }
  get hasDiversity() {
    return this.emojiObject.hasDiversity
  }
  get hasMultiDiversity() {
    return this.emojiObject.hasMultiDiversity
  }
  get hasDiversityParent() {
    return this.emojiObject.hasDiversityParent
  }
  get hasMultiDiversityParent() {
    return this.emojiObject.hasMultiDiversityParent
  }
  get managed() {
    returntrue
  }
  get animated() {
    returnfalse
  }
  get defaultDiversityChild() {
    if (this.hasDiversity && null != c) {
      let e = N(c);
      return this.diversityChildren[module]
    }
    return null
  }
  get url() {
    let e = this.defaultDiversityChild;
    return null != module ? Chunk176354.ZP.getURL(module.surrogates) : Chunk176354.ZP.getURL(this.surrogates)
  }
  get name() {
    if (this.hasDiversity && null != c) {
      var e;
      return "".concat(this.uniqueName, "::").concat(null == (e = S(c)) ? true : module.names[0])
    }
    return this.uniqueName
  }
  get optionallyDiverseSequence() {
    let e = this.defaultDiversityChild;
    return null != module ? module.surrogates : this.surrogates
  }
  forEachDiversity(e) {
    null != this.diversityChildren && i().each(this.diversityChildren, e)
  }
  forEachName(e) {
    i().each(this.names, e)
  }
  constructor(e) {
    if (l(this, "emojiObject", true), l(this, "type", true), l(this, "uniqueName", true), l(this, "surrogates", true), l(this, "diversityChildren", true), l(this, "originalName", true), l(this, "id", true), l(this, "guildId", true), l(this, "index", true), l(this, "useSpriteSheet", true), this.emojiObject = e, this.type = s.B.UNICODE, this.uniqueName = e.names[0], this.surrogates = e.surrogates, this.useSpriteSheet = null != e.spriteIndex, this.index = e.spriteIndex, this.diversityChildren = {}, null != e.diversityChildren)
      for (let t of e.diversityChildren) {
        let e = E[t];
        if (null != e.diversity) {
          let t = e.diversity.join("-");
          this.diversityChildren[t] = new A(e)
        }
      }
  }
}

function C(e) {
  let t = u.get(e);
  if (null != t) return t;
  let n = new A(e);
  return u.set(e, n), n
}

function N(e) {
  let t = a.Z.convert.toCodePoint(e);
  return null != t ? t : ""
}

function R(e) {
  c = null != e && "" !== e ? e : null
}

function P() {
  return c
}

function D() {
  return Object.keys(b)
}

function w(e) {
  let t = T(e);
  return null != t ? C(t) : null
}
let x = new Map;

function L(e) {
  let t = x.get(e);
  if (null == t) {
    let n = b[e];
    t = o.ZP.filterUnsupportedEmojis(E.slice(n[0], n[1])).map(C), x.set(e, t)
  }
  return t
}

function M(e) {
  return m.test(e)
}

function k(e) {
  return e.replace(_, (e, t) => H(t, e))
}

function j(e) {
  var t;
  let n = null == (t = S(e)) ? true : t.names[0];
  return null != n ? {
    type: "emoji",
    surrogate: e,
    emojiName: ":".concat(n, ":")
  } : {
    type: "text",
    text: e
  }
}
let U = String.fromCodePoint(917631),
  G = String.fromCodePoint(127988),
  B = RegExp("^[\\u{E0061}-\\u{E007A}]$", "u");

function Z(e, t) {
  var n;
  if (true !== t && !M(e)) return [{
    type: "text",
    text: e
  }];
  let r = "",
    i = [],
    a = null != (n = e.match(g)) ? n : [];
  for (let e = 0; e < a.length; e++) {
    let t = a[e];
    if (null != r && "" !== r)
      if (t === U) t = r + t, r = "";
      else if (B.test(t)) {
      r += t;
      continue
    } else i.push(j(r)), r = "";
    else if (t === G) {
      r = t;
      continue
    }
    let n = j(t);
    if (i.length > 0) {
      let e = i[i.length - 1];
      if ("text" === n.type && "text" === e.type) {
        e.text += n.text;
        continue
      }
    }
    i.push(n)
  }
  return null != r && "" !== r && i.push(j(r)), i
}

function F(e) {
  return Z(e).map(e => "text" === e.type ? e.text : e.emojiName).join("")
}

function V(e) {
  if (!M(e)) return null;
  let t = Z(e, true).map(e => "text" === e.type ? e.text : e.emojiName).join("");
  return t === e ? null : t
}

function H(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "";
  return null != (n = null == (t = T(e)) ? true : t.surrogates) ? n : r
}

function Y(e) {
  var t, n;
  let r = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "",
    a = null != (n = null == (t = S(e)) ? true : t.names[0]) ? n : i;
  return r ? ":".concat(a, ":") : a
}

function W(e) {
  return w(Y(d.reduce((e, t) => e.replace(t, ""), e), false))
}
let K = {
  getDefaultDiversitySurrogate: P,
  setDefaultDiversitySurrogate: R,
  getCategories: D,
  getByName: w,
  getByCategory: L,
  contentHasUnicodeOrEmoji: M,
  translateInlineEmojiToSurrogates: k,
  maybeTranslateSurrogatesToInlineEmoji: V,
  findInlineEmojisFromSurrogates: Z,
  translateSurrogatesToInlineEmoji: F,
  convertNameToSurrogate: H,
  convertSurrogateToName: Y,
  convertShortcutToName: function e(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "",
      r = n;
    return Object.prototype.hasOwnProperty.call(p, e) && (r = p[e]), t ? ":".concat(r, ":") : r
  },
  convertSurrogateToBase: W,
  forEach: e => {
    for (let t of E) t.hasDiversityParent || t.hasMultiDiversityParent || e(C(t))
  },
  numDiversitySprites: v,
  numNonDiversitySprites: I,
  EMOJI_NAME_RE: f,
  EMOJI_NAME_AND_DIVERSITY_RE: _,
  EMOJI_SHORTCUT_RE: h,
  hasSurrogates: function e(e) {
    return i().toArray(e).some(e => null != O[e])
  }
}