/** Chunk was on web.js **/
/** chunk id: 359232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk911969 = require("./911969.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  return null == e ? 0 : e.type === o.re.STRING_SELECT ? e.values.length : e.selectedOptions.length
}
let l = (e, t, n) => {
    let {
      minValues: r,
      maxValues: i,
      required: o
    } = e, l = s(t);
    return 0 === l ? ("modal" === n ? o : 0 !== r) ? a.intl.string(a.t.eJEUvD) : null : l < r ? a.intl.formatToPlainString(a.t.Jmwzdx, {
      count: r
    }) : l > i ? a.intl.formatToPlainString(a.t.LDvfRP, {
      count: i
    }) : null
  },
  c = (e, t) => {
    let {
      minLength: n,
      maxLength: r,
      required: i
    } = e;
    return null == t || 0 === t.value.length ? i ? a.intl.string(a.t.eJEUvD) : null : t.value.length < n || t.value.length > r ? a.intl.formatToPlainString(a.t.ONSqYd, {
      min: n,
      max: r
    }) : null
  },
  u = (e, t) => {
    var n;
    let {
      minValues: r,
      maxValues: i,
      required: o
    } = e, s = null != (n = null == t ? true : t.uploadIds.length) ? n : 0;
    return 0 === s ? o ? a.intl.string(a.t.eJEUvD) : null : s < r ? a.intl.formatToPlainString(a.t.pmAt62, {
      minValues: r
    }) : s > i ? a.intl.formatToPlainString(a.t.dy6viJ, {
      maxValues: i
    }) : null
  };

function d(e, t, n) {
  switch (null != t && i()(t.type === e.type, "component type matches state"), e.type) {
    case o.re.BUTTON:
      return null;
    case o.re.STRING_SELECT:
    case o.re.USER_SELECT:
    case o.re.ROLE_SELECT:
    case o.re.MENTIONABLE_SELECT:
    case o.re.CHANNEL_SELECT:
      return l(e, t, n);
    case o.re.TEXT_INPUT:
      return c(e, t);
    case o.re.FILE_UPLOAD:
      return u(e, t);
    default:
      i()(false, "missing validator for this component")
  }
}