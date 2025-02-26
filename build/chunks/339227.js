/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Q: () => k
}), n(47120), n(411104), n(301563), n(757143), n(653041), n(26686);
var r = n(512722),
  i = n.n(r),
  o = n(31775),
  a = n.n(o),
  s = n(477660),
  l = n(25209),
  c = n(710845),
  u = n(772096),
  d = n(428595),
  f = n(594199),
  _ = n(364458),
  p = n(70956),
  h = n(40786),
  g = n(362092);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = {
    link: {
      type: "skip"
    },
    highlight: {
      type: "skip"
    },
    blockQuote: {
      type: "skip"
    },
    codeBlock: {
      type: "skip"
    },
    list: {
      type: "skip"
    },
    heading: {
      type: "skip"
    },
    channelOrMessageUrl: {
      type: "skip"
    },
    mediaPostLink: {
      type: "skip"
    },
    attachmentLink: {
      type: "skip"
    },
    shopLink: {
      type: "skip"
    },
    newline: {
      type: "verbatim"
    },
    br: {
      type: "verbatim"
    },
    paragraph: {
      type: "verbatim"
    },
    text: {
      type: "verbatim"
    },
    emoticon: {
      type: "verbatim"
    },
    mention: {
      type: "inlineObject"
    },
    roleMention: {
      type: "inlineObject"
    },
    commandMention: {
      type: "inlineObject"
    },
    channelMention: {
      type: "inlineObject"
    },
    silentPrefix: {
      type: "inlineStyle",
      before: "@silent",
      after: " "
    },
    emoji: {
      type: "inlineObject"
    },
    customEmoji: {
      type: "inlineObject"
    },
    looseEm: {
      type: "inlineStyle",
      before: "*",
      after: " *"
    },
    autolink: {
      type: "inlineStyle",
      before: "<",
      after: ">"
    },
    strong: {
      type: "inlineStyle",
      before: "**",
      after: "**"
    },
    u: {
      type: "inlineStyle",
      before: "__",
      after: "__"
    },
    s: {
      type: "inlineStyle",
      before: "~~",
      after: "~~"
    },
    escape: {
      type: "inlineStyle",
      before: "\\",
      after: ""
    },
    staticRouteLink: {
      type: "inlineStyle",
      before: "<id:",
      after: ">"
    },
    soundboard: {
      type: "inlineStyle",
      before: "<sound:",
      after: ">"
    },
    spoiler: {
      type: "inlineStyle",
      before: "||",
      after: "||"
    },
    url: {
      type: "inlineStyle",
      before: "",
      after: ""
    },
    codeBlockText: {
      type: "inlineStyle",
      before: "",
      after: ""
    },
    codeBlockSyntax: {
      type: "inlineStyle",
      before: "",
      after: ""
    },
    codeBlockLang: {
      type: "inlineStyle",
      before: "",
      after: ""
    },
    timestamp: {
      type: "inlineObject"
    },
    em: {
      type: "inlineStyle",
      before: "*",
      after: "*"
    },
    inlineCode: {
      type: "inlineStyle",
      before: "`",
      after: "`"
    },
    subtext: {
      type: "inlineStyle",
      before: "-# ",
      after: ""
    }
  },
  O = new Set(["*", "_", "\\"]),
  S = {},
  I = {};
for (let e in d.Z.RULES) {
  if (!(e in y)) throw Error("Slate: Unknown markdown rule: ".concat(e, ".  If you have just added a new markdown rule ") + "then you probably need to add it to this file so that the rich chat box understands it.");
  let t = y[e];
  "skip" !== t.type && (S[e] = T(d.Z.RULES[e])), "skip" !== t.type && "inlineObject" !== t.type && (I[e] = T("text" === e ? f.ZP : d.Z.RULES[e]))
}

function T(e) {
  i()(null != e.parse, "Slate: rule must have a parse function");
  let t = e.parse;
  return b(E({}, e), {
    parse(e, n, r) {
      let i = t.call(this, e, n, r);
      return i instanceof Array || (i.originalMatch = e), i
    }
  })
}
let N = {
    url: {
      parse: e => null == (0, u.yw)(e[1]) ? {
        type: "text",
        content: e[0],
        originalMatch: e
      } : {
        type: "link",
        content: e[1],
        originalMatch: e
      }
    },
    autolink: {
      parse: e => null == (0, u.yw)(e[1]) ? {
        type: "text",
        content: e[0],
        originalMatch: e
      } : {
        type: "autolink",
        content: e[1],
        originalMatch: e
      }
    },
    codeBlockSyntax: {
      order: s.defaultRules.inlineCode.order - .1,
      match: e => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
      parse: e => null != e[2] && "" !== e[2] && g.i6(e[2]) ? [{
        type: "codeBlockSyntax",
        content: e[1],
        originalMatch: e
      }, {
        type: "codeBlockLang",
        content: e[2],
        originalMatch: e
      }] : {
        type: "codeBlockSyntax",
        content: e[0],
        originalMatch: e
      }
    }
  },
  A = /(-# +)/,
  C = (0, _.Z)([S, N]),
  R = (0, _.Z)([I, N]),
  P = l._p(C),
  D = l._p(R),
  w = {
    max: 1 / 0,
    maxAge: +p.Z.Millis.MINUTE,
    updateAgeOnGet: !0
  },
  L = new(a())(w),
  x = new(a())(w);

function M(e, t, n) {
  let r = [],
    i = {
      returnMentionIds: !0,
      disableAutoBlockNewlines: !0,
      guildId: t
    },
    o = n ? D : P,
    a = n ? x : L,
    s = a.get(e);
  if (null != s) return s;
  let l = e.replace(/\r\n/g, " \n").replace(/[\r\f]/g, " ").replace(/\t/g, " ") + "\n\n",
    c = {
      originalMatch: {
        index: 0,
        0: ""
      },
      type: "paragraph",
      content: o(l, !0, i)
    };
  U(r, l, c, 0, []);
  let u = j(r);
  return a.set(e, u), u
}

function k(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = g.rN(e);
  if (i.push(e.length), 1 === i.length && n) return [];
  let o = 0,
    a = n,
    s = [];
  for (let n of i) {
    if (a) s.push({
      text: e.substring(o, n),
      start: o,
      attributes: ["codeBlockText"],
      data: void 0
    });
    else {
      let a = n === i[i.length - 2] ? e.substring(n + 3) : "";
      n += 3 + (null != a.match(g.Q2) ? a : "").length;
      let l = e.substring(o, n);
      "" !== l && M(l, t, r).forEach(e => {
        s.push(b(E({}, e), {
          start: e.start + o
        }))
      })
    }
    a = !a, o = n
  }
  return s
}

function j(e) {
  if (0 === (e = e.filter(e => e.text.length > 0)).length) return e;
  let t = [e[0]];
  for (let n = 1; n < e.length; n++) {
    let r = t[t.length - 1],
      i = r.start + r.text.length,
      o = e[n];
    o.start === i && null == r.data && null == o.data && r.attributes.join("-") === o.attributes.join("-") ? r.text += o.text : t.push(o)
  }
  return t
}

function U(e, t, n, r, o) {
  let {
    content: a,
    type: s,
    originalMatch: l
  } = n;
  switch (i()(null != l, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), s) {
    case "newline":
    case "br":
    case "paragraph":
    case "text":
    case "emoticon":
      return B(e, t, a || "", r, o);
    case "emoji":
    case "customEmoji": {
      let i = t.substring(r);
      if (i.startsWith(l[0]) || (r = H(e, t, r, t.length), i = t.substring(r)), i.startsWith(l[0])) return F({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: n
      });
      throw Error("Slate: Unable to find emoji: ".concat(l[0], " in ").concat(t, " at ").concat(r))
    }
    case "soundboard":
      return F({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: {
          guildId: n.guildId,
          soundId: n.soundId
        }
      });
    case "mention":
    case "roleMention":
    case "channelMention":
    case "commandMention":
    case "silentPrefix":
    case "channel": {
      let {
        text: o,
        id: a
      } = n;
      if (null != o) return i()(o === l[0], "Slate: text mentions must exactly match the regex match"), F({
        result: e,
        sourceText: t,
        text: o,
        originalStart: r,
        attributes: ["textMention"],
        data: {
          text: o
        }
      });
      return F({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: {
          id: a
        }
      })
    }
    case "staticRouteLink":
      let {
        id: c, itemId: u
      } = n;
      return F({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: {
          id: c,
          itemId: u
        }
      });
    case "timestamp":
      if (h.Z.getCurrentConfig({
          location: "c70cbb_1"
        }, {
          autoTrackExposure: !1
        }).enabled) return F({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: n
      });
      return B(e, t, l[0], r, o);
    case "em":
    case "autolink":
    case "strong":
    case "u":
    case "s":
    case "escape":
    case "inlineCode":
    case "codeBlockSyntax":
    case "codeBlockLang":
    case "spoiler":
    case "url":
    case "link":
    case "subtext": {
      r = Z(t, r);
      let {
        before: n,
        after: i
      } = G(t, s, r, l);
      return r = V(e, t, n, r, "syntaxBefore"), o.push(s), r = B(e, t, null != a ? a : "", r, o), o.pop(), r = V(e, t, i, r, "syntaxAfter"), Z(t, r)
    }
    default:
      throw Error("Slate: Unknown rule type: ".concat(s))
  }
}

function G(e, t, n, r) {
  if ("inlineCode" === t) return {
    before: r[1],
    after: r[1]
  };
  if ("em" === t && "_" === e.substring(n, n + 1)) return {
    before: "_",
    after: "_"
  };
  if ("subtext" === t) return {
    before: A.exec(r.input)[1],
    after: ""
  };
  let i = y["link" === t ? "url" : t];
  if ("inlineStyle" === i.type) return i;
  throw Error("Slate: rule must be an inlineStyle")
}

function B(e, t, n, r, i) {
  return "string" == typeof n ? r = F({
    result: e,
    sourceText: t,
    text: n,
    originalStart: r,
    attributes: i,
    data: null
  }) : (n instanceof Array || (n = [n]), n.forEach(n => {
    r = U(e, t, n, r, i)
  })), Z(t, r)
}

function V(e, t, n, r, o) {
  if (n.length > 0) {
    let a = t.indexOf(n, r),
      s = t.substring(r, a + n.length);
    i()(a >= 0, "Slate: Unable to find syntax characters"), e.push({
      text: s,
      attributes: [o],
      start: r,
      data: null
    }), r = a + n.length
  }
  return r
}

function F(e) {
  let {
    result: t,
    sourceText: n,
    text: r,
    originalStart: i,
    attributes: o,
    data: a
  } = e, s = Z(n, i);
  for (;
    "\n" === r.charAt(0) || " " === r.charAt(0);) r = r.substring(1);
  let l = n.indexOf(r, s);
  if (l !== s ? s = i = H(t, n, s, l) : "\\" === r && "\\" === n.charAt(l + 1) && (l++, i = ++s), l !== s) throw new c.Z("MarkdownToSlate").error(JSON.stringify({
    sourceText: n,
    searchText: r,
    searchStartsAt: n.substring(s),
    startPos: s
  })), Error("Slate: Unable to find content in source text!");
  let u = s + r.length,
    d = n.substring(i, u);
  return t.push({
    text: d,
    attributes: o.slice(),
    start: i,
    data: a
  }), u
}

function Z(e, t) {
  for (;
    "\n" === e.charAt(t) || " " === e.charAt(t);) t++;
  return t
}

function H(e, t, n, r) {
  for (; n < r;)
    if (O.has(t[n])) n = V(e, t, t[n], n, "syntaxBefore"), n = Z(t, n);
    else break;
  return n
}