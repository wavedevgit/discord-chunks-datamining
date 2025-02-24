/** Chunk was on web.js **/
"use strict";
n.d(t, {
  ZP: () => W,
  dy: () => T,
  gw: () => E
}), n(411104), n(26686), n(47120), n(757143), n(301563), n(653041), n(474991), n(398202);
var r = n(392711),
  i = n.n(r),
  o = n(336317),
  a = n(176354),
  s = n(906411);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = null,
  u = {},
  d = {},
  f = {},
  p = {},
  _ = [],
  h = 0,
  m = 0,
  g = {
    "1f3fb": 0,
    "1f3fc": 1,
    "1f3fd": 2,
    "1f3fe": 3,
    "1f3ff": 4
  },
  E = ["\uD83C\uDFFB", "\uD83C\uDFFC", "\uD83C\uDFFD", "\uD83C\uDFFE", "\uD83C\uDFFF"],
  v = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  b = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  y = n(523558),
  O = /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
  S = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
  I = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
for (let e = 0; e < E.length; e++) {
  let t = E[e];
  f["skin-tone-".concat(e + 1)] = t, p[t] = "skin-tone-".concat(e + 1)
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
    return null !== (e = this.emojiObject.unicodeVersion) && void 0 !== e ? e : 0
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
    return !0
  }
  get animated() {
    return !1
  }
  get defaultDiversityChild() {
    if (this.hasDiversity && null != c) {
      let e = A(c);
      return this.diversityChildren[e]
    }
    return null
  }
  get url() {
    let e = this.defaultDiversityChild;
    return null != e ? a.ZP.getURL(e.surrogates) : a.ZP.getURL(this.surrogates)
  }
  get name() {
    return this.hasDiversity && null != c ? "".concat(this.uniqueName, "::").concat(p[c]) : this.uniqueName
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
  setSpriteSheetIndex(e) {
    this.index = e, this.useSpriteSheet = !0
  }
  constructor(e) {
    if (l(this, "emojiObject", void 0), l(this, "type", void 0), l(this, "uniqueName", void 0), l(this, "surrogates", void 0), l(this, "diversityChildren", void 0), l(this, "originalName", void 0), l(this, "id", void 0), l(this, "guildId", void 0), l(this, "index", void 0), l(this, "useSpriteSheet", void 0), this.emojiObject = e, this.type = s.B.UNICODE, this.uniqueName = e.names[0], this.surrogates = e.surrogates, this.diversityChildren = {}, null != e.diversityChildren) {
      for (let t of e.diversityChildren)
        if (null != t.diversity) {
          let e = t.diversity.join("-");
          this.diversityChildren[e] = new T(t)
        }
    }
  }
}
let N = n(5420);
for (let e in N) {
  let t = N[e].map(e => {
    let t = new T(e),
      n = t.surrogates,
      r = t.uniqueName;
    if (t.setSpriteSheetIndex(t.hasDiversity ? h++ : m++), p[n] = r, 0 > n.indexOf("‍")) {
      let e = n.replace("️", "");
      e !== n && (p[e] = r)
    }
    for (let e of t.names) d[e] = t, f[e] = n;
    let i = t.diversityChildren;
    for (let t in i) {
      let n = i[t],
        r = n.surrogates;
      for (let e of n.names) d[e] = n, f[e] = r;
      if (!e.hasMultiDiversity) {
        let t = g[n.emojiObject.diversity[0]];
        for (let i of e.names) {
          let e = "".concat(i, "::skin-tone-").concat(t + 1);
          f[e] = r, d[e] = n
        }
      }
      p[r] = n.uniqueName
    }
    return _.push(t), t
  });
  u[e] = a.ZP.filterUnsupportedEmojis(t)
}

function A(e) {
  let t = o.Z.convert.toCodePoint(e);
  return null != t ? t : ""
}

function C(e) {
  c = null != e && "" !== e ? e : null
}

function R() {
  return c
}

function P() {
  return Object.keys(u)
}

function w(e) {
  return Object.prototype.hasOwnProperty.call(d, e) ? d[e] : null
}

function D(e) {
  return u[e]
}

function x(e) {
  return S.test(e)
}

function L(e) {
  return e.replace(b, (e, t) => F(t, e))
}

function M(e) {
  let t = p[e];
  return null != t ? {
    type: "emoji",
    surrogate: e,
    emojiName: ":".concat(t, ":")
  } : {
    type: "text",
    text: e
  }
}
let k = String.fromCodePoint(917631),
  j = String.fromCodePoint(127988),
  U = RegExp("^[\\u{E0061}-\\u{E007A}]$", "u");

function G(e, t) {
  var n;
  if (!0 !== t && !x(e)) return [{
    type: "text",
    text: e
  }];
  let r = "",
    i = [],
    o = null !== (n = e.match(I)) && void 0 !== n ? n : [];
  for (let e = 0; e < o.length; e++) {
    let t = o[e];
    if (null != r && "" !== r) {
      if (t === k) t = r + t, r = "";
      else if (U.test(t)) {
        r += t;
        continue
      } else i.push(M(r)), r = ""
    } else if (t === j) {
      r = t;
      continue
    }
    let n = M(t);
    if (i.length > 0) {
      let e = i[i.length - 1];
      if ("text" === n.type && "text" === e.type) {
        e.text += n.text;
        continue
      }
    }
    i.push(n)
  }
  return null != r && "" !== r && i.push(M(r)), i
}

function B(e) {
  return G(e).map(e => "text" === e.type ? e.text : e.emojiName).join("")
}

function Z(e) {
  if (!x(e)) return null;
  let t = G(e, !0).map(e => "text" === e.type ? e.text : e.emojiName).join("");
  return t === e ? null : t
}

function F(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return Object.prototype.hasOwnProperty.call(f, e) ? f[e] : t
}

function V(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    r = n;
  return Object.prototype.hasOwnProperty.call(p, e) && (r = p[e]), t ? ":".concat(r, ":") : r
}

function H(e) {
  return w(V(E.reduce((e, t) => e.replace(t, ""), e), !1))
}
let W = {
  getDefaultDiversitySurrogate: R,
  setDefaultDiversitySurrogate: C,
  getCategories: P,
  getByName: w,
  getByCategory: D,
  contentHasUnicodeOrEmoji: x,
  translateInlineEmojiToSurrogates: L,
  maybeTranslateSurrogatesToInlineEmoji: Z,
  findInlineEmojisFromSurrogates: G,
  translateSurrogatesToInlineEmoji: B,
  convertNameToSurrogate: F,
  convertSurrogateToName: V,
  convertShortcutToName: function e(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      r = n;
    return Object.prototype.hasOwnProperty.call(y, e) && (r = y[e]), t ? ":".concat(r, ":") : r
  },
  convertSurrogateToBase: H,
  forEach: e => i().each(_, e),
  all: () => _,
  numDiversitySprites: h,
  numNonDiversitySprites: m,
  EMOJI_NAME_RE: v,
  EMOJI_NAME_AND_DIVERSITY_RE: b,
  EMOJI_SHORTCUT_RE: O,
  hasSurrogates: function e(e) {
    return i().toArray(e).some(e => null != p[e])
  }
}