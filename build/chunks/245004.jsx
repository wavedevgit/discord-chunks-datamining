/** Chunk was on web.js **/
/** chunk id: 245004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  xm: () => d
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js"), require("./399606.js");
var Chunk481060 = require("./481060.js");
require("./607070.js");
var Chunk388032 = require("./388032.js");
require("./93841.js");
var Chunk501867 = require("./501867.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = u(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function d(e) {
  let {
    heading: t,
    description: n,
    label: s,
    isEnabled: l
  } = e;
  return <r.Fragment>{<i.X6q className={a.topPerksCardHeading} variant={"heading-lg/extrabold"}>{t}</i.X6q>}{<i.Text className={a.topPerksCardDescription} variant={"text-sm/normal"}>{n}</i.Text>}{<div className={a.labelsContainer}>{null != s && <div className={a.topPerksCardLabelContainer}>{<i.$Eu size={"sm"} color={i.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK} />}{<i.Text variant={"text-sm/semibold"}>{s}</i.Text>}</div>}{l && <div className={a.topPerksCardLabelContainer}>{<i.owK size={"custom"} height={14} width={14} color={"currentColor"} />}{<i.Text variant={"text-sm/semibold"} color={"currentColor"}>{o.intl.string(o.t.pCMkDQ)}</i.Text>}</div>}</div>}</r.Fragment>
}
require("./567949.js"), require("./552781.js"), require("./952567.js"), require("./807159.js")