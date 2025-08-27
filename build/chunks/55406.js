/** Chunk was on web.js **/
/** chunk id: 55406, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.r(exports), require.d(exports, {
  default: () => N,
  renderChangelogMessageMarkup: () => R
}), require("./35282.js"), require("./704826.js");
var Chunk159635 = require("./159635.js"),
  a = require.n(Chunk159635),
  Chunk800927 = require("./800927.js"),
  Chunk945884 = require("./945884.js"),
  Chunk594199 = require("./594199.js"),
  Chunk454585 = require("./454585.js");

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
let p = a().defaultRules.lheading,
  h = a().defaultRules.heading,
  m = a().defaultRules.link,
  g = a().defaultRules.image,
  E = a().defaultRules.list,
  b = a().defaultRules.blockQuote,
  y = a().defaultRules.paragraph,
  O = /\{(.+?)}/,
  v = /^\$(\w+?)\$/;
r = require("./235375.jsx");
let I = e => {
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
  T = e => _(d({}, r.baseRules), {
    image: d({}, g, "function" == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image),
    link: d({}, m, "function" == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link),
    list: d({}, E, "function" == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list),
    interpolation: {
      order: l.ZP.order,
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
    lheading: d(_(d({}, p), {
      parse: I({
        transformUpperCase: true
      })
    }), "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading),
    heading: d({}, h, "function" == typeof r.customRules.heading ? r.customRules.heading(e) : r.customRules.heading),
    blockQuote: d({}, b, "function" == typeof r.customRules.blockQuote ? r.customRules.blockQuote(e) : r.customRules.blockQuote),
    paragraph: d({}, y, "function" == typeof r.customRules.paragraph ? r.customRules.paragraph(e) : r.customRules.paragraph)
  }),
  S = e => ({
    lheading: d(_(d({}, p), {
      parse: I({
        transformUpperCase: false
      })
    }), "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading)
  }),
  A = e => _(d({}, T(e)), {
    newline: d({}, a().defaultRules.newline),
    text: l.ZP,
    list: o.Z,
    subtext: s.Z
  });

function C(e) {
  return d({}, T(e))
}
let N = {
  getDefaultRules: C,
  getSpecialRules: e => d({}, T(e), S(e)),
  getMessageRules: e => d({}, A(e))
};

function R(e, t, n) {
  return {
    hasSpoilerEmbeds: false,
    content: c.Z.reactParserFor(C(t))(e.content, false, null != n ? {
      changeLog: n
    } : {})
  }
}