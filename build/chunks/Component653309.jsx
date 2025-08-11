/** Chunk was on web.js **/
/** chunk id: 653309, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => p,
  Z: () => h
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./415506.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk887490 = require("./887490.js"),
  Chunk227473 = require("./227473.js"),
  Chunk112360 = require("./112360.js"),
  Chunk703803 = require("./703803.js");

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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = {
  strong: Chunk227473.bold,
  em: Chunk227473.italics,
  u: Chunk227473.underline,
  s: Chunk227473.strikethrough,
  inlineCode: Chunk227473.inlineCode,
  link: Chunk227473.fakeLink,
  url: Chunk227473.fakeLink,
  autolink: Chunk227473.fakeLink,
  silentPrefix: Chunk227473.fakeLink,
  spoiler: o()(Chunk703803.spoilerContent, Chunk703803.spoilerMarkdownContent, Chunk703803.obscuredTextContent, Chunk227473.spoiler),
  staticRouteLink: Chunk227473.fakeLink,
  syntaxBefore: Chunk227473.syntaxBefore,
  syntaxAfter: Chunk227473.syntaxAfter,
  codeBlockText: Chunk227473.codeBlockText,
  codeBlockSyntax: Chunk227473.codeBlockSyntax,
  codeBlockLang: Chunk227473.codeBlockLang,
  subtext: Chunk227473.subtext
};

function h(e, t) {
  let n, {
      attributes: i,
      children: c,
      leaf: u,
      text: f
    } = t,
    h = false,
    [m] = a.bN.node(e, a.C0.parent(a.bN.findPath(e, f)));
  switch (a.bN.isEditor(m) ? "editor" : m.type) {
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
          if (t in p) return [p[t]];
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
  }), (0, r.jsx)("span", _(d({}, i), {
    className: n,
    spellCheck: h,
    children: c
  }))
}