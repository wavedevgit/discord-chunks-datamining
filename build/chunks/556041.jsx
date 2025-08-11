/** Chunk was on web.js **/
/** chunk id: 556041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk245315 = require("./245315.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk49791 = require("./49791.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = () => <Chunk600164.Z align={Chunk600164.Z.Align.CENTER} justify={Chunk600164.Z.Justify.CENTER} direction={Chunk600164.Z.Direction.VERTICAL} className={Chunk49791.popout}>{<img alt={""} src={(0, Chunk245315.QA)()} className={Chunk49791.avatar} />}{<Chunk600164.Z align={Chunk600164.Z.Align.CENTER} justify={Chunk600164.Z.Justify.CENTER} className={Chunk49791.nameWrapper}>{<Chunk481060.ua7 text={Chunk388032.intl.string(Chunk388032.t.oMx98P)}>{e => (0, r.jsx)("div", f(u({}, e), {
        className: l.staffBadge
      }))}</Chunk481060.ua7>}{<Chunk481060.X6q className={Chunk49791.header} variant={"heading-md/semibold"}>{Chunk388032.intl.string(Chunk388032.t.xfAlNz)}</Chunk481060.X6q>}</Chunk600164.Z>}{<Chunk481060.Text className={Chunk49791.description} color={"header-secondary"} variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t.BUZ0sr)}</Chunk481060.Text>}{<Chunk481060.Text className={Chunk49791.description} color={"header-secondary"} variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t.w5beJC)}</Chunk481060.Text>}</Chunk600164.Z>