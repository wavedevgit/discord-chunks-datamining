/** Chunk was on web.js **/
/** chunk id: 473598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => E
});
var Chunk280230 = require("./280230.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let {
  newline: l,
  paragraph: c,
  url: u,
  link: d,
  strong: f,
  u: p,
  br: _,
  em: h,
  image: m,
  text: g
} = Chunk280230.defaultRules, E = {
  newline: l,
  paragraph: c,
  url: u,
  link: o(a({}, d), {
    parse(e, t, n) {
      let r = d.parse(e, t, n);
      return r.context = n.context, r
    }
  }),
  strong: f,
  u: p,
  br: _,
  em: h,
  image: m,
  hook: {
    order: g.order,
    match: (0, Chunk280230.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
    parse(e, t, n) {
      let {
        context: r
      } = n;
      return {
        render: r[e[2]],
        content: t(e[1], n)
      }
    },
    react: (e, t, n) => e.render(t(e.content, n), n.key)
  },
  noparse: {
    order: g.order,
    match: (0, Chunk280230.inlineRegex)(/^!!(\d+?)!!/),
    parse(e, t, n) {
      let {
        unsafeContext: r
      } = n, i = r[e[1]];
      return "string" != typeof i && (i = null != i ? i.toString() : ""), {
        type: "text",
        content: i
      }
    },
    react: e => e.content
  },
  text: g
}