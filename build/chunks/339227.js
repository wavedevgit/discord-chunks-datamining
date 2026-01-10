/** Chunk was on web.js **/
/** chunk id: 339227, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => Z
}), require("./388685.js"), require("./415506.js"), require("./35282.js"), require("./704826.js"), require("./539854.js"), require("./49124.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk31775 = require("./31775.js"),
  o = require.n(Chunk31775),
  Chunk159635 = require("./159635.js"),
  Chunk25209 = require("./25209.js"),
  Chunk710845 = require("./710845.js"),
  Chunk772096 = require("./772096.js"),
  Chunk428595 = require("./428595.js"),
  Chunk594199 = require("./594199.js"),
  Chunk364458 = require("./364458.js"),
  Chunk70956 = require("./70956.js"),
  Chunk364964 = require("./364964.js"),
  Chunk510255 = require("./510255.js"),
  Chunk40786 = require("./40786.js"),
  Chunk362092 = require("./362092.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = new Chunk710845.Z("MarkdownToSlate"),
  I = {
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
    gameMention: {
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
    mailto: {
      type: "inlineStyle",
      before: "<",
      after: ">"
    },
    tel: {
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
    timestampMentionInput: {
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
  T = new Set(["*", "_", "\\"]),
  C = {},
  A = {};
for (let e in Chunk428595.Z.RULES) {
  if (!(module in I)) throw Error("Slate: Unknown markdown rule: ".concat(module, ".  If you have just added a new markdown rule ") + "then you probably need to add it to this file so that the rich chat box understands it.");
  let t = I[module];
  "skip" !== exports.type && (C[module] = N(Chunk428595.Z.RULES[module])), "skip" !== exports.type && "inlineObject" !== exports.type && (A[module] = N("text" === module ? Chunk594199.ZP : Chunk428595.Z.RULES[module]))
}

function N(e) {
  i()(null != e.parse, "Slate: rule must have a parse function");
  let t = e.parse;
  return v(y({}, e), {
    parse(e, n, r) {
      let i = t.call(this, e, n, r);
      return i instanceof Array || (i.originalMatch = e), i
    }
  })
}

function P(e) {
  return {
    type: "autolink",
    content: e[1],
    originalMatch: e
  }
}
let R = {
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
      } : P(e)
    },
    mailto: {
      parse: P
    },
    tel: {
      parse: P
    },
    codeBlockSyntax: {
      order: Chunk159635.defaultRules.inlineCode.order - .1,
      match: e => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
      parse: e => null != e[2] && "" !== e[2] && m.default.isKnownLanguage(e[2]) ? [{
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
  w = /(-# +)/,
  D = (0, Chunk364458.Z)([C, R]),
  x = (0, Chunk364458.Z)([A, R]),
  L = Chunk25209._p(D),
  j = Chunk25209._p(x),
  M = {
    max: 1 / 0,
    maxAge: +Chunk70956.Z.Millis.MINUTE,
    updateAgeOnGet: true
  },
  k = new(o())(M),
  U = new(o())(M);

function G(e, t, n) {
  let r = [],
    i = {
      returnMentionIds: true,
      disableAutoBlockNewlines: true,
      guildId: t,
      isSlate: true,
      allowGameMentions: true,
      allowTimeMentionInput: true
    },
    a = n ? j : L,
    o = n ? U : k,
    s = o.get(e);
  if (null != s) return s;
  let l = e.replace(/\r\n/g, " \n").replace(/[\r\f]/g, " ").replace(/\t/g, " ") + "\n\n",
    c = {
      originalMatch: {
        index: 0,
        0: ""
      },
      type: "paragraph",
      content: a(l, true, i)
    };
  B(r, l, c, 0, []);
  let u = F(r);
  return o.set(e, u), u
}

function Z(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = E.r(e);
  if (i.push(e.length), 1 === i.length && n) return [];
  let a = 0,
    o = n,
    s = [];
  for (let n of i) {
    if (o) s.push({
      text: e.substring(a, n),
      start: a,
      attributes: ["codeBlockText"],
      data: true
    });
    else {
      let o = n === i[i.length - 2] ? e.substring(n + 3) : "";
      n += 3 + (null != o.match(E.Q) ? o : "").length;
      let l = e.substring(a, n);
      "" !== l && G(l, t, r).forEach(e => {
        s.push(v(y({}, e), {
          start: e.start + a
        }))
      })
    }
    o = !o, a = n
  }
  return s
}

function F(e) {
  if (0 === (e = e.filter(e => e.text.length > 0)).length) return e;
  let t = [e[0]];
  for (let n = 1; n < e.length; n++) {
    let r = t[t.length - 1],
      i = r.start + r.text.length,
      a = e[n];
    a.start === i && null == r.data && null == a.data && r.attributes.join("-") === a.attributes.join("-") ? r.text += a.text : t.push(a)
  }
  return t
}

function B(e, t, n, r, a) {
  let {
    content: o,
    type: s,
    originalMatch: l
  } = n;
  switch (i()(null != l, "Slate: originalMatch must be set " + JSON.stringify(n, true, 2)), s) {
    case "newline":
    case "br":
    case "paragraph":
    case "text":
    case "emoticon":
      return H(e, t, o || "", r, a);
    case "emoji":
    case "customEmoji": {
      let i = t.substring(r);
      if (i.startsWith(l[0]) || (r = q(e, t, r, t.length), i = t.substring(r)), i.startsWith(l[0])) return W({
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
      return W({
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
        text: a,
        id: o
      } = n;
      if (null != a) return i()(a === l[0], "Slate: text mentions must exactly match the regex match"), W({
        result: e,
        sourceText: t,
        text: a,
        originalStart: r,
        attributes: ["textMention"],
        data: {
          text: a
        }
      });
      return W({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: {
          id: o
        }
      })
    }
    case "gameMention": {
      let {
        applicationId: i
      } = n;
      return W({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: {
          id: i
        }
      })
    }
    case "staticRouteLink":
      let {
        id: c, itemId: u
      } = n;
      return W({
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
      let d = h.Z.getConfig({
        location: "flattenMarkdown"
      }).enabled;
      if (g.Z.getCurrentConfig({
          location: "c70cbb_1"
        }, {
          autoTrackExposure: false
        }).enabled || d) return W({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: n
      });
      return H(e, t, l[0], r, a);
    case "timestampMentionInput":
      if (h.Z.getConfig({
          location: "flattenMarkdown-input"
        }).enabled) return W({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: n
      });
      return H(e, t, l[0], r, a);
    case "em":
    case "autolink":
    case "mailto":
    case "tel":
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
      r = K(t, r);
      let {
        before: n,
        after: i
      } = V(t, s, r, l);
      return r = Y(e, t, n, r, "syntaxBefore"), a.push(s), r = H(e, t, null != o ? o : "", r, a), a.pop(), r = Y(e, t, i, r, "syntaxAfter"), K(t, r)
    }
    default:
      throw Error("Slate: Unknown rule type: ".concat(s))
  }
}

function V(e, t, n, r) {
  if ("inlineCode" === t) return {
    before: r[1],
    after: r[1]
  };
  if ("em" === t && "_" === e.substring(n, n + 1)) return {
    before: "_",
    after: "_"
  };
  if ("subtext" === t) return {
    before: w.exec(r.input)[1],
    after: ""
  };
  let i = I["link" === t ? "url" : t];
  if ("inlineStyle" === i.type) return i;
  throw Error("Slate: rule must be an inlineStyle")
}

function H(e, t, n, r, i) {
  return "string" == typeof n ? r = W({
    result: e,
    sourceText: t,
    text: n,
    originalStart: r,
    attributes: i,
    data: null
  }) : (n instanceof Array || (n = [n]), n.forEach(n => {
    r = B(e, t, n, r, i)
  })), K(t, r)
}

function Y(e, t, n, r, i) {
  if (n.length > 0) {
    let a = t.indexOf(n, r);
    if (false === a) return z('Slate: Unable to find syntax characters "'.concat(n, '" at position ').concat(r), n, r);
    let o = t.substring(r, a + n.length);
    e.push({
      text: o,
      attributes: [i],
      start: r,
      data: null
    }), r = a + n.length
  }
  return r
}

function W(e) {
  let {
    result: t,
    sourceText: n,
    text: r,
    originalStart: i,
    attributes: a,
    data: o
  } = e, s = K(n, i);
  for (;
    "\n" === r.charAt(0) || " " === r.charAt(0);) r = r.substring(1);
  let l = n.indexOf(r, s);
  if (l !== s ? s = i = q(t, n, s, l) : "\\" === r && "\\" === n.charAt(l + 1) && (l++, i = ++s), l !== s) return z("Slate: Unable to find content in source text at start position ".concat(s, " for text position ").concat(l), r, i);
  let c = s + r.length,
    u = n.substring(i, c);
  return t.push({
    text: u,
    attributes: a.slice(),
    start: i,
    data: o
  }), c
}

function K(e, t) {
  for (;
    "\n" === e.charAt(t) || " " === e.charAt(t);) t++;
  return t
}

function z(e, t, n) {
  if (t.split("").some(e => T.has(e))) return S.error(e), n;
  throw Error(e)
}

function q(e, t, n, r) {
  for (; n < r;)
    if (T.has(t[n])) n = Y(e, t, t[n], n, "syntaxBefore"), n = K(t, n);
    else break;
  return n
}