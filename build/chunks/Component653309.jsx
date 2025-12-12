/** Chunk was on web.js **/
/** chunk id: 653309, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => _,
  Z: () => m
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk887490 = require("./887490.js"),
  Chunk12888 = require("./12888.js"),
  Chunk953782 = require("./953782.js"),
  Chunk3954 = require("./3954.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = {
  strong: Chunk12888.bold,
  em: Chunk12888.italics,
  u: Chunk12888.underline,
  s: Chunk12888.strikethrough,
  inlineCode: Chunk12888.inlineCode,
  link: Chunk12888.fakeLink,
  url: Chunk12888.fakeLink,
  autolink: Chunk12888.fakeLink,
  silentPrefix: Chunk12888.fakeLink,
  spoiler: o()(Chunk3954.spoilerContent, Chunk3954.spoilerMarkdownContent, Chunk3954.obscuredTextContent, Chunk12888.spoiler),
  staticRouteLink: Chunk12888.fakeLink,
  syntaxBefore: Chunk12888.syntaxBefore,
  syntaxAfter: Chunk12888.syntaxAfter,
  codeBlockText: Chunk12888.codeBlockText,
  codeBlockSyntax: Chunk12888.codeBlockSyntax,
  codeBlockLang: Chunk12888.codeBlockLang,
  subtext: Chunk12888.subtext,
  mentionSuggestion: Chunk953782.mentionSuggestion,
  mentionSuggestionSimpleColorVariant: Chunk953782.mentionSuggestionSimpleColorVariant
};

function m(e, t) {
  let n, {
      attributes: i,
      children: c,
      leaf: u,
      text: f
    } = t,
    m = false,
    [h] = a.bN.node(e, a.C0.parent(a.bN.findPath(e, f)));
  switch (a.bN.isEditor(h) ? "editor" : h.type) {
    case "line":
    case "blockQuote": {
      m = true;
      let e = Object.entries(u).filter(e => {
        let [t] = e;
        return "text" !== t
      }).flatMap(e => {
        let [t, n] = e;
        if ("hljsTypes" === t) return n;
        if (true === n) {
          if (("codeBlockLang" === t || "codeBlockSyntax" === t) && (m = false), t.startsWith("before_") || t.startsWith("after_")) return [s[t]];
          if (t in _) return [_[t]];
          throw Error("Slate: Unknown decoration attribute: ".concat(t))
        }
      }).filter(e => null != e).join(" ");
      n = o()(e, {
        [s.syntaxOverride]: "||" === u.text || "\\" === u.text
      })
    }
  }
  return n = o()(n, {
    [l.emptyText]: "" === f.text
  }), (0, r.jsx)("span", p(d({}, i), {
    className: n,
    spellCheck: m,
    children: c
  }))
}