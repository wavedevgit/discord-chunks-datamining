/** Chunk was on web.js **/
/** chunk id: 543388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk965935 = require("./965935.js");

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

function p(e) {
  let {
    application: t,
    timestamp: n
  } = e;
  return <r.Fragment>{<s.Z size={s.Z.Sizes.LARGE} game={t} />}{<div className={c.textContainer}>{<a.Text className={c.timestamp} variant={"text-xs/medium"} color={"text-muted"}>{o()(n).format("LLLL")}</a.Text>}{<a.Text variant={"text-md/normal"} color={"interactive-active"}>{l.intl.format(l.t.J3s8JC, {
          applicationName: t.name
        })}</a.Text>}</div>}</r.Fragment>
}

function h(e) {
  let {
    application: t,
    timestamp: n,
    children: i
  } = e;
  return <a.ua7 hideOnClick={true} position={"top"} aria-label={l.intl.string(l.t["5nMcv7"])} tooltipClassName={c.gameMessageTooltip} tooltipContentClassName={c.gameMessageTooltipContent} text={(0, r.jsx)(p, {
      application: t,
      timestamp: n
    })}>{e => (0, r.jsx)(a.P3F, _(d({
      tag: "span"
    }, e), {
      children: i
    }))}</a.ua7>
}

function m(e) {
  let {
    application: t,
    timestamp: n,
    compact: i,
    children: o
  } = e;
  return <h application={t} timestamp={n}>{i ? null : <a.iWm className={c.gameIcon} size={"custom"} width={14} height={14} />}{o}</h>
}