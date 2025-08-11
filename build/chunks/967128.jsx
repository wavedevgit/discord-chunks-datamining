/** Chunk was on web.js **/
/** chunk id: 967128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kq: () => m,
  Ot: () => g,
  ZP: () => b,
  jz: () => E
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk534091 = require("./534091.js"),
  Chunk981631 = require("./981631.js"),
  Chunk191052 = require("./191052.js");

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

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    locked: t = false,
    channelType: n
  } = e, i = n === l.d4z.GUILD_VOICE || n === l.d4z.GUILD_STAGE_VOICE ? a.kBi : t ? a.W4G : a.VL1;
  return <div className={o()(c.emptyChannelIcon, c.emptyChannelIconComponent)}><i color={a.TVs.colors.WHITE} size={"custom"} width={42} height={42} /></div>
}

function g(e) {
  let {
    children: t,
    className: n
  } = e;
  return <a.X6q aria-hidden={"true"} className={o()(n, c.header)} variant={"heading-xxl/extrabold"}>{t}</a.X6q>
}

function E(e) {
  let {
    children: t,
    className: n
  } = e;
  return <a.Text variant={"text-md/normal"} color={"none"} className={o()(c.description, n)}>{t}</a.Text>
}
let b = function(e) {
  var {
    className: t,
    channelId: n,
    children: i
  } = e, a = p(e, ["className", "channelId", "children"]);
  return <div{..._(d({
    className: o()(t, c.container),
    id: (0, s.p)(n, n)
  }, a), {
    children: i
  })} />
}