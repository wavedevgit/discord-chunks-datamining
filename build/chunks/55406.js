/** Chunk was on 87048 **/
"use strict";
let r;
n.r(t), n.d(t, {
  default: () => S,
  renderChangelogMessageMarkup: () => E
}), n(35282), n(704826);
var o = n(159635),
  i = n.n(o),
  a = n(800927),
  l = n(945884),
  s = n(594199),
  c = n(454585);

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function u(e, t) {
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
let p = i().defaultRules.lheading,
  m = i().defaultRules.heading,
  b = i().defaultRules.link,
  _ = i().defaultRules.image,
  g = i().defaultRules.list,
  h = i().defaultRules.blockQuote,
  f = i().defaultRules.paragraph,
  y = /\{(.+?)}/,
  O = /^\$(\w+?)\$/;
r = n(235375);
let x = e => {
    let {
      transformUpperCase: t = !1
    } = e;
    return (e, n, r) => {
      let o = y.exec(e[1]),
        a = e[1].replace(y, "");
      return t && (a = a.toUpperCase()), {
        className: null != o ? o[1] : null,
        level: "=" === e[2] ? 1 : 2,
        content: i().parseInline(n, a, r)
      }
    }
  },
  k = e => u(d({}, r.baseRules), {
    image: d({}, _, "function" == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image),
    link: d({}, b, "function" == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link),
    list: d({}, g, "function" == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list),
    interpolation: {
      order: s.ZP.order,
      match: e => O.exec(e),
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
    lheading: d(u(d({}, p), {
      parse: x({
        transformUpperCase: !0
      })
    }), "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading),
    heading: d({}, m, "function" == typeof r.customRules.heading ? r.customRules.heading(e) : r.customRules.heading),
    blockQuote: d({}, h, "function" == typeof r.customRules.blockQuote ? r.customRules.blockQuote(e) : r.customRules.blockQuote),
    paragraph: d({}, f, "function" == typeof r.customRules.paragraph ? r.customRules.paragraph(e) : r.customRules.paragraph)
  }),
  j = e => ({
    lheading: d(u(d({}, p), {
      parse: x({
        transformUpperCase: !1
      })
    }), "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading)
  }),
  C = e => u(d({}, k(e)), {
    newline: d({}, i().defaultRules.newline),
    text: s.ZP,
    list: a.Z,
    subtext: l.Z
  });

function v(e) {
  return d({}, k(e))
}
let S = {
  getDefaultRules: v,
  getSpecialRules: e => d({}, k(e), j(e)),
  getMessageRules: e => d({}, C(e))
};

function E(e, t, n) {
  return {
    hasSpoilerEmbeds: !1,
    content: c.Z.reactParserFor(v(t))(e.content, !1, null != n ? {
      changeLog: n
    } : {})
  }
}