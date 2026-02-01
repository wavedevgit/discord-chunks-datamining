/** Chunk was on web.js **/
/** chunk id: 7584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => z,
  W$: () => d,
  zT: () => T
}), require("./896048.js"), require("./65821.js"), require("./457529.js"), require("./747238.js"), require("./812715.js"), require("./591487.js"), require("./727858.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk838677 = require("./838677.js"),
  Chunk690521 = require("./690521.js"),
  Chunk770335 = require("./770335.js");

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
  p = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  Chunk132565 = require("./132565.js"),
  h = /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
  m = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
  g = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
  {
    emojis: E,
    emojisByCategory: y,
    nameToEmoji: b,
    surrogateToEmoji: O,
    numDiversitySprites: v,
    numNonDiversitySprites: A
  } = require("./13474.js");

function I(e) {
  let t = b[e];
  return null == t ? null : E[t]
}

function S(e) {
  let t = O[e];
  return null == t ? null : E[t]
}
class T {
  get names() {
    return this.emojiObject.names
  }
  get allNamesString() {
    return this.names.length > 1 ? ":".concat(this.names.join(": :"), ":") : ":".concat(this.uniqueName, ":")
  }
  get unicodeVersion() {
    var e;
    return null != (e = this.emojiObject.unicodeVersion) ? e : 0
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
      return this.diversityChildren[e]
    }
    return null
  }
  get url() {
    let e = this.defaultDiversityChild;
    return null != e ? o.Ay.getURL(e.surrogates) : o.Ay.getURL(this.surrogates)
  }
  get name() {
    if (this.hasDiversity && null != c) {
      var e;
      return "".concat(this.uniqueName, "::").concat(null == (e = S(c)) ? true : e.names[0])
    }
    return this.uniqueName
  }
  get optionallyDiverseSequence() {
    let e = this.defaultDiversityChild;
    return null != e ? e.surrogates : this.surrogates
  }
  forEachDiversity(e) {
    null != this.diversityChildren && i().each(this.diversityChildren, e)
  }
  forEachName(e) {
    i().each(this.names, e)
  }
  constructor(e) {
    if (l(this, "emojiObject", true), l(this, "type", true), l(this, "uniqueName", true), l(this, "surrogates", true), l(this, "diversityChildren", true), l(this, "originalName", true), l(this, "id", true), l(this, "guildId", true), l(this, "index", true), l(this, "useSpriteSheet", true), this.emojiObject = e, this.type = s.i.UNICODE, this.uniqueName = e.names[0], this.surrogates = e.surrogates, this.useSpriteSheet = null != e.spriteIndex, this.index = e.spriteIndex, this.diversityChildren = {}, null != e.diversityChildren)
      for (const t of e.diversityChildren) {
        const e = E[t];
        if (null != e.diversity) {
          const t = e.diversity.join("-");
          this.diversityChildren[t] = new T(e)
        }
      }
  }
}

function C(e) {
  let t = u.get(e);
  if (null != t) return t;
  let n = new T(e);
  return u.set(e, n), n
}

function N(e) {
  let t = a.A.convert.toCodePoint(e);
  return null != t ? t : ""
}

function w(e) {
  c = null != e && "" !== e ? e : null
}

function R() {
  return c
}

function P() {
  return Object.keys(y)
}

function D(e) {
  let t = I(e);
  return null != t ? C(t) : null
}
let L = new Map;

function x(e) {
  let t = L.get(e);
  if (null == t) {
    let n = y[e];
    t = o.Ay.filterUnsupportedEmojis(E.slice(n[0], n[1])).map(C), L.set(e, t)
  }
  return t
}

function M(e) {
  return m.test(e)
}

function j(e) {
  return e.replace(p, (e, t) => Y(t, e))
}

function k(e) {
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
  V = RegExp("^[\\u{E0061}-\\u{E007A}]$", "u");

function F(e, t) {
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
      else if (V.test(t)) {
      r += t;
      continue
    } else i.push(k(r)), r = "";
    else if (t === G) {
      r = t;
      continue
    }
    let n = k(t);
    if (i.length > 0) {
      let e = i[i.length - 1];
      if ("text" === n.type && "text" === e.type) {
        e.text += n.text;
        continue
      }
    }
    i.push(n)
  }
  return null != r && "" !== r && i.push(k(r)), i
}

function B(e) {
  return F(e).map(e => "text" === e.type ? e.text : e.emojiName).join("")
}

function H(e) {
  if (!M(e)) return null;
  let t = F(e, true).map(e => "text" === e.type ? e.text : e.emojiName).join("");
  return t === e ? null : t
}

function Y(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "";
  return null != (t = null == (n = I(e)) ? true : n.surrogates) ? t : r
}

function W(e) {
  var t, n;
  let r = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "",
    a = null != (t = null == (n = S(e)) ? true : n.names[0]) ? t : i;
  return r ? ":".concat(a, ":") : a
}

function K(e) {
  return D(W(d.reduce((e, t) => e.replace(t, ""), e), false))
}
let z = {
  getDefaultDiversitySurrogate: R,
  setDefaultDiversitySurrogate: w,
  getCategories: P,
  getByName: D,
  getByCategory: x,
  contentHasUnicodeOrEmoji: M,
  translateInlineEmojiToSurrogates: j,
  maybeTranslateSurrogatesToInlineEmoji: H,
  findInlineEmojisFromSurrogates: F,
  translateSurrogatesToInlineEmoji: B,
  convertNameToSurrogate: Y,
  convertSurrogateToName: W,
  convertShortcutToName: function e(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "",
      r = n;
    return Object.prototype.hasOwnProperty.call(_, e) && (r = _[e]), t ? ":".concat(r, ":") : r
  },
  convertSurrogateToBase: K,
  forEach: e => {
    for (let t of E) t.hasDiversityParent || t.hasMultiDiversityParent || e(C(t))
  },
  numDiversitySprites: v,
  numNonDiversitySprites: A,
  EMOJI_NAME_RE: f,
  EMOJI_NAME_AND_DIVERSITY_RE: p,
  EMOJI_SHORTCUT_RE: h,
  hasSurrogates: function e(e) {
    return i().toArray(e).some(e => null != O[e])
  }
}