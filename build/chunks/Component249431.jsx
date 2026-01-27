/** Chunk was on web.js **/
/** chunk id: 249431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h,
  Y: () => _
}), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk711371 = require("./711371.js"),
  Chunk675841 = require("./675841.js"),
  Chunk562650 = require("./562650.js"),
  Chunk388963 = require("./388963.js");

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
  strong: Chunk675841.bold,
  em: Chunk675841.italics,
  u: Chunk675841.underline,
  s: Chunk675841.strikethrough,
  inlineCode: Chunk675841.inlineCode,
  link: Chunk675841.fakeLink,
  url: Chunk675841.fakeLink,
  autolink: Chunk675841.fakeLink,
  silentPrefix: Chunk675841.fakeLink,
  spoiler: a()(Chunk388963.ur, Chunk388963.F0, Chunk388963.kx, Chunk675841.spoiler),
  staticRouteLink: Chunk675841.fakeLink,
  syntaxBefore: Chunk675841.syntaxBefore,
  syntaxAfter: Chunk675841.syntaxAfter,
  codeBlockText: Chunk675841.codeBlockText,
  codeBlockSyntax: Chunk675841.codeBlockSyntax,
  codeBlockLang: Chunk675841.codeBlockLang,
  subtext: Chunk675841.subtext,
  mentionSuggestion: Chunk562650.Z2,
  mentionSuggestionSimpleColorVariant: Chunk562650.xD
};

function h(e, t) {
  let n, {
      attributes: i,
      children: c,
      leaf: u,
      text: f
    } = t,
    h = false,
    [m] = o.VW.node(e, o.PW.parent(o.VW.findPath(e, f)));
  switch (o.VW.isEditor(m) ? "editor" : m.type) {
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
    [l.BI]: "" === f.text
  }), (0, r.jsx)("span", p(d({}, i), {
    className: n,
    spellCheck: h,
    children: c
  }))
}