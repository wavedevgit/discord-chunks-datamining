/** Chunk was on web.js **/
/** chunk id: 566898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M9: () => O,
  Pb: () => y,
  XX: () => E,
  ZP: () => v,
  ZT: () => h,
  iv: () => b,
  pk: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk881448 = require("./881448.js");

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

function f(e) {
  return "".concat(e / 16, "rem")
}

function _() {
  return Array(s().random(3, 8)).fill(null).map(() => s().random(30, 80))
}

function p() {
  return <div className={Chunk881448.avatar} style={{
      opacity: .08
    }} />
}

function h(e) {
  let {
    width: t,
    height: n,
    opacity: i,
    className: a
  } = e, l = {
    width: f(t),
    opacity: null != i ? i : s().random(.02, .08)
  };
  return null != n && (l.height = f(n)), <div className={o()(a, {
      [c.blob]: true
    })} style={l} />
}

function m(e) {
  let t, {
      groupStart: n = false,
      compact: i = false,
      attachmentSpecs: a,
      usernameWidth: u,
      usernameOpacity: f,
      className: m,
      style: g
    } = e,
    E = i ? 50 : s().random(40, 50);
  return !i && n ? t = <r.Fragment>{<p />}{<l.H className={c.header}><h width={u} opacity={f} className={c.__invalid_username} /></l.H>}</r.Fragment> : i && (t = <r.Fragment>{i && <h width={E} className={o()({
        [c.compactTimestamp]: true,
        [c.hidden]: !n
      })} />}{<l.H className={c.header}><h width={u} opacity={f} /></l.H>}</r.Fragment>), <div aria-hidden={true} className={o()(m, {
      [c.wrapper]: true,
      [c.compact]: i,
      [c.cozy]: !i
    })} style={g}>{<div className={c.contents}>{t}{<div className={c.content}>{_().map((e, t) => (0, r.jsx)(h, {
          width: e,
          opacity: .06
        }, t))}</div>}</div>}{null != a && <div className={c.attachmentContainer}><div className={c.attachment} style={d({
          opacity: .03
        }, a)} /></div>}</div>
}
let g = 44,
  E = 22,
  b = 26,
  y = 26,
  O = 6;

function v(e) {
  let {
    messages: t,
    groupSpacing: n = 0,
    compact: i = false,
    attachmentSpecs: o,
    className: a
  } = e, l = null != o ? o.last ? t - 1 : s().random(0, t - 1) : false, c = s().random(80, 120), u = s().random(.1, .2);
  return <r.Fragment>{Array(t).fill(null).map((e, t) => (0, r.jsx)(m, {
      compact: i,
      className: a,
      usernameWidth: c,
      usernameOpacity: u,
      groupStart: 0 === t,
      attachmentSpecs: t === l ? o : true,
      style: 0 === t ? {
        marginTop: f(n)
      } : true
    }, t))}</r.Fragment>
}