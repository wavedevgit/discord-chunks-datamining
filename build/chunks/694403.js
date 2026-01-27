/** Chunk was on web.js **/
/** chunk id: 694403, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => R,
  W1: () => w
}), require("./896048.js"), require("./747238.js"), require("./65821.js"), require("./457529.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./733351.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk635377 = require("./635377.js"),
  o = require.n(Chunk635377);
require("./228785.js");
var Chunk280230 = require("./280230.js"),
  l = require.n(Chunk280230),
  Chunk833291 = require("./833291.js"),
  Chunk403362 = require("./403362.js"),
  Chunk998218 = require("./998218.js"),
  Chunk182490 = require("./182490.js"),
  Chunk417964 = require("./417964.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = new(o())({
  max: 50
});

function y(e) {
  let t = e,
    n = E.get(t);
  if (null != n) return n;
  let r = (0, p.Fd)(e),
    i = (0, p.El)(r),
    a = {
      whitespaceSanitized: r,
      fullySanitized: i
    };
  return E.set(t, a), a
}
let b = ["http:", "https:", "discord:", "tel:", "sms:", "mailto:"],
  O = [Chunk182490.D.TEXT, Chunk182490.D.UNDERLINE, Chunk182490.D.STRONG, Chunk182490.D.ITALICS, Chunk182490.D.STRIKETHROUGH, Chunk182490.D.INLINE_CODE, Chunk182490.D.SPOILER, Chunk182490.D.LINE_BREAK, Chunk182490.D.TIMESTAMP],
  v = [...O, Chunk182490.D.EMOJI, Chunk182490.D.CUSTOM_EMOJI],
  A = [Chunk182490.D.LIST, Chunk182490.D.HEADING, Chunk182490.D.BLOCK_QUOTE, Chunk182490.D.SUBTEXT],
  I = [Chunk182490.D.TEXT],
  S = [Chunk182490.D.UNDERLINE, Chunk182490.D.STRONG, Chunk182490.D.ITALICS, Chunk182490.D.STRIKETHROUGH, Chunk182490.D.INLINE_CODE, Chunk182490.D.SPOILER, Chunk182490.D.LINE_BREAK, Chunk182490.D.TIMESTAMP, Chunk182490.D.EMOJI, Chunk182490.D.CUSTOM_EMOJI, Chunk182490.D.LIST, Chunk182490.D.HEADING, Chunk182490.D.BLOCK_QUOTE, Chunk182490.D.SUBTEXT];

function T(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
  for (let r of (Array.isArray(e) || (e = [e]), e)) {
    if (true === r || !t.includes(r.type)) return null;
    if (r.type === f.D.INLINE_CODE) {
      let e = [...t, ...n];
      if (null == T(r.validationChildContent, e)) return null
    }
    if (Array.isArray(r.content) && null == T(r.content, t)) return null
  }
  return e
}

function C(e) {
  let t = "";
  for (let n of e) switch (n.type) {
    case f.D.TEXT:
    case f.D.INLINE_CODE:
      t += n.content;
      break;
    case f.D.CUSTOM_EMOJI:
      t += n.name;
      break;
    case f.D.EMOJI:
      t += n.surrogate;
      break;
    case f.D.LINE_BREAK:
      t += "\n";
      break;
    case f.D.STRONG:
    case f.D.ITALICS:
    case f.D.UNDERLINE:
    case f.D.STRIKETHROUGH:
    case f.D.SPOILER:
      t += C(n.content);
      break;
    case f.D.TIMESTAMP:
      t += "<timestamp>";
      break;
    case f.D.BLOCK_QUOTE:
    case f.D.LIST:
    case f.D.HEADING:
    case f.D.SUBTEXT:
      t += "<".concat(n.type, "Content>");
      break;
    default:
      (0, u.xb)(n.type)
  }
  return t
}

function N(e) {
  if ((0, c.rL)(e) || y(e).whitespaceSanitized !== e) returntrue;
  let t = d.A.toURLSafe(e);
  if (null == t) returntrue;
  if ("http:" !== t.protocol && "https:" !== t.protocol) returnfalse;
  let n = e.split("/");
  return n.length < 3 || "" !== n[1] || d.A.safeDecodeURIComponent(n[2]) !== n[2]
}

function w(e) {
  try {
    var t;
    if (N(e)) throw Error("Rejected due to suspicious characters in URL: " + JSON.stringify(e));
    let n = new URL(e),
      r = null != (t = n.protocol) ? t : "";
    if (!b.includes(r.toLowerCase())) throw Error("Provided protocol is not allowed: " + r);
    if (("http:" === r || "https:" === r) && (null == n.hostname || 0 === n.hostname.length)) throw Error("no hostname");
    let i = (0, p.nK)(n);
    n.username = "", n.password = "";
    let a = (0, p.nK)(n);
    return {
      target: i,
      displayTarget: a
    }
  } catch (e) {
    return null
  }
}
let R = g(h({}, l().defaultRules.link), {
  match: (e, t, n) => t.allowLinks ? l().defaultRules.link.match(e, t, n) : null,
  parse(e, t, n) {
    let [r, a, o, s] = e, u = () => ({
      type: f.D.TEXT,
      content: r
    });
    if (N(o)) return u();
    let d = y(o),
      p = y(a),
      _ = y(null != s ? s : ""),
      m = d.whitespaceSanitized,
      E = p.fullySanitized,
      b = _.fullySanitized,
      R = E.trim();
    if (0 === m.trim().length || 0 === R.length) return u();
    let P = w(l().unescapeUrl(o)),
      D = null == P,
      L = (0, c.Ay)(a).length > 0 || (0, c.Ay)(s).length > 0;
    if (D || L) return u();
    let x = g(h({}, n), {
        allowEscape: false,
        parseInlineCodeChildContent: true
      }),
      M = n.allowEmojiLinks ? v : O,
      j = [...M, ...A],
      k = [...I, ...S],
      U = T(t(E, x), j, [f.D.EMOJI]),
      G = T(t(b, x), k);
    if (null == U || null == G || 0 === C(U).trim().length) return u();
    let F = i().pick(t.rules, M),
      V = l().parserFor(F)(p.whitespaceSanitized, x),
      B = _.whitespaceSanitized,
      {
        target: H
      } = P;
    return {
      content: V,
      target: H,
      title: B
    }
  }
})