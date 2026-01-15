/** Chunk was on web.js **/
/** chunk id: 653309, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => _,
  Z: () => h
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk887490 = require("./887490.js"),
  Chunk884878 = require("./884878.js"),
  Chunk299477 = require("./299477.js"),
  Chunk468830 = require("./468830.js");

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
  strong: Chunk884878.bold,
  em: Chunk884878.italics,
  u: Chunk884878.underline,
  s: Chunk884878.strikethrough,
  inlineCode: Chunk884878.inlineCode,
  link: Chunk884878.fakeLink,
  url: Chunk884878.fakeLink,
  autolink: Chunk884878.fakeLink,
  silentPrefix: Chunk884878.fakeLink,
  spoiler: a()(Chunk468830.spoilerContent, Chunk468830.spoilerMarkdownContent, Chunk468830.obscuredTextContent, Chunk884878.spoiler),
  staticRouteLink: Chunk884878.fakeLink,
  syntaxBefore: Chunk884878.syntaxBefore,
  syntaxAfter: Chunk884878.syntaxAfter,
  codeBlockText: Chunk884878.codeBlockText,
  codeBlockSyntax: Chunk884878.codeBlockSyntax,
  codeBlockLang: Chunk884878.codeBlockLang,
  subtext: Chunk884878.subtext,
  mentionSuggestion: Chunk299477.mentionSuggestion,
  mentionSuggestionSimpleColorVariant: Chunk299477.mentionSuggestionSimpleColorVariant
};

function h(e, t) {
  let n, {
      attributes: i,
      children: c,
      leaf: u,
      text: f
    } = t,
    h = false,
    [m] = o.bN.node(e, o.C0.parent(o.bN.findPath(e, f)));
  switch (o.bN.isEditor(m) ? "editor" : m.type) {
    case "line":
    case "blockQuote": {
      h = true;
      let e = Object.entries(u).filter(e => {
        let [t] = e;
        return "text" !== t
      }).flatMap(e => {
        let [t, n] = e;
        if ("hljsTypes" === t) return n;
        if (true === n) {
          if (("codeBlockLang" === t || "codeBlockSyntax" === t) && (h = false), t.startsWith("before_") || t.startsWith("after_")) return [s[t]];
          if (t in _) return [_[t]];
          throw Error("Slate: Unknown decoration attribute: ".concat(t))
        }
      }).filter(e => null != e).join(" ");
      n = a()(e, {
        [s.syntaxOverride]: "||" === u.text || "\\" === u.text
      })
    }
  }
  return n = a()(n, {
    [l.emptyText]: "" === f.text
  }), (0, r.jsx)("span", p(d({}, i), {
    className: n,
    spellCheck: h,
    children: c
  }))
}