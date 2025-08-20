/** Chunk was on web.js **/
/** chunk id: 359232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk911969 = require("./911969.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  return null == e ? 0 : e.type === a.re.STRING_SELECT ? e.values.length : e.selectedOptions.length
}
let l = (e, t, n) => {
    let {
      minValues: r,
      maxValues: i,
      required: a
    } = e, l = s(t);
    return 0 === l ? ("modal" === n ? a : 0 !== r) ? o.intl.string(o.t.eJEUvL) : null : l < r ? o.intl.formatToPlainString(o.t.Jmwzd3, {
      count: r
    }) : l > i ? o.intl.formatToPlainString(o.t.LDvfRE, {
      count: i
    }) : null
  },
  c = (e, t) => {
    let {
      minLength: n,
      maxLength: r,
      required: i
    } = e;
    return null == t || 0 === t.value.length ? i ? o.intl.string(o.t.eJEUvL) : null : t.value.length < n || t.value.length > r ? o.intl.formatToPlainString(o.t.ONSqYW, {
      min: n,
      max: r
    }) : null
  };

function u(e, t, n) {
  switch (null != t && i()(t.type === e.type, "component type matches state"), e.type) {
    case a.re.BUTTON:
      return null;
    case a.re.STRING_SELECT:
    case a.re.USER_SELECT:
    case a.re.ROLE_SELECT:
    case a.re.MENTIONABLE_SELECT:
    case a.re.CHANNEL_SELECT:
      return l(e, t, n);
    case a.re.TEXT_INPUT:
      return c(e, t);
    default:
      i()(false, "missing validator for this component")
  }
}