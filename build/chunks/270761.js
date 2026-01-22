/** Chunk was on web.js **/
/** chunk id: 270761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk155718 = require("./155718.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  return null == e ? 0 : e.type === a.I5.STRING_SELECT ? e.values.length : e.selectedOptions.length
}
let l = (e, t, n) => {
    let {
      minValues: r,
      maxValues: i,
      required: a
    } = e, l = o(t);
    return 0 === l ? ("modal" === n ? a : 0 !== r) ? s.intl.string(s.t.eJEUvD) : null : l < r ? s.intl.formatToPlainString(s.t.Jmwzdx, {
      count: r
    }) : l > i ? s.intl.formatToPlainString(s.t.LDvfRP, {
      count: i
    }) : null
  },
  c = (e, t) => {
    let {
      minLength: n,
      maxLength: r,
      required: i
    } = e;
    return null == t || 0 === t.value.length ? i ? s.intl.string(s.t.eJEUvD) : null : t.value.length < n || t.value.length > r ? s.intl.formatToPlainString(s.t.ONSqYd, {
      min: n,
      max: r
    }) : null
  },
  u = (e, t) => {
    var n;
    let {
      minValues: r,
      maxValues: i,
      required: a
    } = e, o = null != (n = null == t ? true : t.uploadIds.length) ? n : 0;
    return 0 === o ? a ? s.intl.string(s.t.eJEUvD) : null : o < r ? s.intl.formatToPlainString(s.t.pmAt62, {
      minValues: r
    }) : o > i ? s.intl.formatToPlainString(s.t.dy6viJ, {
      maxValues: i
    }) : null
  },
  d = (e, t) => {
    let {
      required: n
    } = e;
    return null == t || null == t.value ? n ? s.intl.string(s.t.eJEUvD) : null : null
  },
  f = (e, t) => {
    var n;
    let {
      minValues: r,
      maxValues: i,
      required: a
    } = e, o = null != (n = null == t ? true : t.values.length) ? n : 0;
    return 0 === o ? a ? s.intl.string(s.t.eJEUvD) : null : o < r ? s.intl.formatToPlainString(s.t.Jmwzdx, {
      count: r
    }) : o > i ? s.intl.formatToPlainString(s.t.LDvfRP, {
      count: i
    }) : null
  };

function p(e, t, n) {
  switch (null != t && i()(t.type === e.type, "component type matches state"), e.type) {
    case a.I5.BUTTON:
      return null;
    case a.I5.STRING_SELECT:
    case a.I5.USER_SELECT:
    case a.I5.ROLE_SELECT:
    case a.I5.MENTIONABLE_SELECT:
    case a.I5.CHANNEL_SELECT:
      return l(e, t, n);
    case a.I5.TEXT_INPUT:
      return c(e, t);
    case a.I5.FILE_UPLOAD:
      return u(e, t);
    case a.I5.RADIO_GROUP:
      return d(e, t);
    case a.I5.CHECKBOX_GROUP:
      return f(e, t);
    case a.I5.CHECKBOX:
      return null;
    default:
      i()(false, "missing validator for this component")
  }
}