/** Chunk was on 31978 **/
/** chunk id: 55406, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
require.r(exports), require.d(exports, {
  default: () => w,
  renderChangelogMessageMarkup: () => C
}), require("./35282.js"), require("./704826.js");
var Chunk159635 = require("./159635.js"),
  o = require.n(Chunk159635),
  Chunk800927 = require("./800927.js"),
  Chunk945884 = require("./945884.js"),
  Chunk594199 = require("./594199.js"),
  Chunk454585 = require("./454585.js");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = o().defaultRules.lheading,
  m = o().defaultRules.heading,
  g = o().defaultRules.link,
  f = o().defaultRules.image,
  b = o().defaultRules.list,
  h = o().defaultRules.blockQuote,
  y = o().defaultRules.paragraph,
  O = /\{(.+?)}/,
  v = /^\$(\w+?)\$/;
r = require("./235375.jsx");
let j = e => {
    let {
      transformUpperCase: t = false
    } = e;
    return (e, n, r) => {
      let l = O.exec(e[1]),
        i = e[1].replace(O, "");
      return t && (i = i.toUpperCase()), {
        className: null != l ? l[1] : null,
        level: "=" === e[2] ? 1 : 2,
        content: o().parseInline(n, i, r)
      }
    }
  },
  P = e => d(u({}, r.baseRules), {
    image: u({}, f, "function" == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image),
    link: u({}, g, "function" == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link),
    list: u({}, b, "function" == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list),
    interpolation: {
      order: s.ZP.order,
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
    lheading: u(d(u({}, p), {
      parse: j({
        transformUpperCase: true
      })
    }), "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading),
    heading: u({}, m, "function" == typeof r.customRules.heading ? r.customRules.heading(e) : r.customRules.heading),
    blockQuote: u({}, h, "function" == typeof r.customRules.blockQuote ? r.customRules.blockQuote(e) : r.customRules.blockQuote),
    paragraph: u({}, y, "function" == typeof r.customRules.paragraph ? r.customRules.paragraph(e) : r.customRules.paragraph)
  });

function x(e) {
  return u({}, P(e))
}
let w = {
  getDefaultRules: x,
  getSpecialRules: e => u({}, P(e), {
    lheading: u(d(u({}, p), {
      parse: j({
        transformUpperCase: false
      })
    }), "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading)
  }),
  getMessageRules: e => u({}, d(u({}, P(e)), {
    newline: u({}, o().defaultRules.newline),
    text: s.ZP,
    list: i.Z,
    subtext: a.Z
  }))
};

function C(e, t, n) {
  return {
    hasSpoilerEmbeds: false,
    content: c.Z.reactParserFor(x(t))(e.content, false, null != n ? {
      changeLog: n
    } : {})
  }
}