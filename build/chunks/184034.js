/** Chunk was on web.js **/
/** chunk id: 184034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => F
}), require("./896048.js"), require("./65821.js"), require("./747238.js"), require("./812715.js"), require("./321073.js"), require("./457529.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk635377 = require("./635377.js"),
  o = require.n(Chunk635377),
  Chunk280230 = require("./280230.js"),
  Chunk436857 = require("./436857.js"),
  Chunk626584 = require("./626584.js"),
  Chunk694403 = require("./694403.js"),
  Chunk542664 = require("./542664.js"),
  Chunk704726 = require("./704726.js"),
  Chunk551965 = require("./551965.js"),
  Chunk927813 = require("./927813.js"),
  Chunk752238 = require("./752238.js"),
  Chunk857157 = require("./857157.js"),
  Chunk900090 = require("./900090.js"),
  Chunk144667 = require("./144667.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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
let A = new Chunk626584.A("MarkdownToSlate"),
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
  S = new Set(["*", "_", "\\"]),
  T = {},
  C = {};
for (let e in Chunk542664.A.RULES) {
  if (!(module in I)) throw Error("Slate: Unknown markdown rule: ".concat(module, ".  If you have just added a new markdown rule ") + "then you probably need to add it to this file so that the rich chat box understands it.");
  let t = I[module];
  "skip" !== exports.type && (T[module] = N(Chunk542664.A.RULES[module])), "skip" !== exports.type && "inlineObject" !== exports.type && (C[module] = N("text" === module ? Chunk704726.Ay : Chunk542664.A.RULES[module]))
}

function N(e) {
  i()(null != e.parse, "Slate: rule must have a parse function");
  let t = e.parse;
  return v(b({}, e), {
    parse(e, n, r) {
      let i = t.call(this, e, n, r);
      return i instanceof Array || (i.originalMatch = e), i
    }
  })
}

function w(e) {
  return {
    type: "autolink",
    content: e[1],
    originalMatch: e
  }
}
let R = {
    url: {
      parse: e => null == (0, u.W1)(e[1]) ? {
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
      parse: e => null == (0, u.W1)(e[1]) ? {
        type: "text",
        content: e[0],
        originalMatch: e
      } : w(e)
    },
    mailto: {
      parse: w
    },
    tel: {
      parse: w
    },
    codeBlockSyntax: {
      order: Chunk280230.defaultRules.inlineCode.order - .1,
      match: e => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
      parse: e => null != e[2] && "" !== e[2] && h.default.isKnownLanguage(e[2]) ? [{
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
  P = /(-# +)/,
  D = (0, Chunk551965.A)([T, R]),
  L = (0, Chunk551965.A)([C, R]),
  x = Chunk436857.X(D),
  M = Chunk436857.X(L),
  j = {
    max: 1 / 0,
    maxAge: +Chunk927813.A.Millis.MINUTE,
    updateAgeOnGet: true
  },
  k = new(o())(j),
  U = new(o())(j);

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
    a = n ? M : x,
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
  let u = V(r);
  return o.set(e, u), u
}

function F(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = E.H(e);
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
      n += 3 + (null != o.match(E.b) ? o : "").length;
      let l = e.substring(a, n);
      "" !== l && G(l, t, r).forEach(e => {
        s.push(v(b({}, e), {
          start: e.start + a
        }))
      })
    }
    o = !o, a = n
  }
  return s
}

function V(e) {
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
      return Y(e, t, o || "", r, a);
    case "emoji":
    case "customEmoji": {
      let i = t.substring(r);
      if (i.startsWith(l[0]) || (r = Z(e, t, r, t.length), i = t.substring(r)), i.startsWith(l[0])) return K({
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
      return K({
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
      if (null != a) return i()(a === l[0], "Slate: text mentions must exactly match the regex match"), K({
        result: e,
        sourceText: t,
        text: a,
        originalStart: r,
        attributes: ["textMention"],
        data: {
          text: a
        }
      });
      return K({
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
      return K({
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
      return K({
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
      let d = m.A.getConfig({
        location: "flattenMarkdown"
      }).enabled;
      if (g.A.getCurrentConfig({
          location: "c70cbb_1"
        }, {
          autoTrackExposure: false
        }).enabled || d) return K({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: n
      });
      return Y(e, t, l[0], r, a);
    case "timestampMentionInput":
      if (m.A.getConfig({
          location: "flattenMarkdown-input"
        }).enabled) return K({
        result: e,
        sourceText: t,
        text: l[0],
        originalStart: r,
        attributes: [s],
        data: n
      });
      return Y(e, t, l[0], r, a);
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
      r = z(t, r);
      let {
        before: n,
        after: i
      } = H(t, s, r, l);
      return r = W(e, t, n, r, "syntaxBefore"), a.push(s), r = Y(e, t, null != o ? o : "", r, a), a.pop(), r = W(e, t, i, r, "syntaxAfter"), z(t, r)
    }
    default:
      throw Error("Slate: Unknown rule type: ".concat(s))
  }
}

function H(e, t, n, r) {
  if ("inlineCode" === t) return {
    before: r[1],
    after: r[1]
  };
  if ("em" === t && "_" === e.substring(n, n + 1)) return {
    before: "_",
    after: "_"
  };
  if ("subtext" === t) return {
    before: P.exec(r.input)[1],
    after: ""
  };
  let i = I["link" === t ? "url" : t];
  if ("inlineStyle" === i.type) return i;
  throw Error("Slate: rule must be an inlineStyle")
}

function Y(e, t, n, r, i) {
  return "string" == typeof n ? r = K({
    result: e,
    sourceText: t,
    text: n,
    originalStart: r,
    attributes: i,
    data: null
  }) : (n instanceof Array || (n = [n]), n.forEach(n => {
    r = B(e, t, n, r, i)
  })), z(t, r)
}

function W(e, t, n, r, i) {
  if (n.length > 0) {
    let a = t.indexOf(n, r);
    if (false === a) return q('Slate: Unable to find syntax characters "'.concat(n, '" at position ').concat(r), n, r);
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

function K(e) {
  let {
    result: t,
    sourceText: n,
    text: r,
    originalStart: i,
    attributes: a,
    data: o
  } = e, s = z(n, i);
  for (;
    "\n" === r.charAt(0) || " " === r.charAt(0);) r = r.substring(1);
  let l = n.indexOf(r, s);
  if (l !== s ? s = i = Z(t, n, s, l) : "\\" === r && "\\" === n.charAt(l + 1) && (l++, i = ++s), l !== s) return q("Slate: Unable to find content in source text at start position ".concat(s, " for text position ").concat(l), r, i);
  let c = s + r.length,
    u = n.substring(i, c);
  return t.push({
    text: u,
    attributes: a.slice(),
    start: i,
    data: o
  }), c
}

function z(e, t) {
  for (;
    "\n" === e.charAt(t) || " " === e.charAt(t);) t++;
  return t
}

function q(e, t, n) {
  if (t.split("").some(e => S.has(e))) return A.error(e), n;
  throw Error(e)
}

function Z(e, t, n, r) {
  for (; n < r;)
    if (S.has(t[n])) n = W(e, t, t[n], n, "syntaxBefore"), n = z(t, n);
    else break;
  return n
}