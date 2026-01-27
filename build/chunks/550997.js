/** Chunk was on web.js **/
/** chunk id: 550997, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.r(exports), require.d(exports, {
  default: () => N,
  renderChangelogMessageMarkup: () => w
}), require("./747238.js"), require("./812715.js");
var Chunk280230 = require("./280230.js"),
  a = require.n(Chunk280230),
  Chunk873879 = require("./873879.js"),
  Chunk683412 = require("./683412.js"),
  Chunk704726 = require("./704726.js"),
  Chunk46054 = require("./46054.js");

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
let _ = a().defaultRules.lheading,
  h = a().defaultRules.heading,
  m = a().defaultRules.link,
  g = a().defaultRules.image,
  E = a().defaultRules.list,
  y = a().defaultRules.blockQuote,
  b = a().defaultRules.paragraph,
  O = /\{(.+?)}/,
  v = /^\$(\w+?)\$/;
r = require("./482644.jsx");
let A = e => {
    let {
      transformUpperCase: t = false
    } = e;
    return (e, n, r) => {
      let i = O.exec(e[1]),
        o = e[1].replace(O, "");
      return t && (o = o.toUpperCase()), {
        className: null != i ? i[1] : null,
        level: "=" === e[2] ? 1 : 2,
        content: a().parseInline(n, o, r)
      }
    }
  },
  I = e => p(d({}, r.baseRules), {
    image: d({}, g, "function" == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image),
    link: d({}, m, "function" == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link),
    list: d({}, E, "function" == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list),
    interpolation: {
      order: l.Ay.order,
      match: e => v.exec(e),
      parse(e, t, n) {
        let r = n.interpolations[e[1]];
        return null == r ? {
          type: "text",
          content: e[0]
        } : {
          type: "interpolation",
          renderer: r
        }
      },
      react: e => e.renderer()
    },
    lheading: d(p(d({}, _), {
      parse: A({
        transformUpperCase: true
      })
    }), "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading),
    heading: d({}, h, "function" == typeof r.customRules.heading ? r.customRules.heading(e) : r.customRules.heading),
    blockQuote: d({}, y, "function" == typeof r.customRules.blockQuote ? r.customRules.blockQuote(e) : r.customRules.blockQuote),
    paragraph: d({}, b, "function" == typeof r.customRules.paragraph ? r.customRules.paragraph(e) : r.customRules.paragraph)
  }),
  S = e => ({
    lheading: d(p(d({}, _), {
      parse: A({
        transformUpperCase: false
      })
    }), "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading)
  }),
  T = e => p(d({}, I(e)), {
    newline: d({}, a().defaultRules.newline),
    text: l.Ay,
    list: o.A,
    subtext: s.A
  });

function C(e) {
  return d({}, I(e))
}
let N = {
  getDefaultRules: C,
  getSpecialRules: e => d({}, I(e), S(e)),
  getMessageRules: e => d({}, T(e))
};

function w(e, t, n) {
  return {
    hasSpoilerEmbeds: false,
    hasBailedAst: false,
    content: c.A.reactParserFor(C(t))(e.content, false, null != n ? {
      changeLog: n
    } : {})
  }
}