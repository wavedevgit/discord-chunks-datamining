/** Chunk was on web.js **/
/** chunk id: 273284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk833858 = require("./833858.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  switch (e.type) {
    case i.IIU.STREAMING:
      let t = null != e.details && "" !== e.details ? e.details : e.name;
      return null != t ? o.intl.formatToPlainString(o.t["0wJXSk"], {
        name: t
      }) : null;
    case i.IIU.LISTENING:
      let n = null != e.details && "" !== e.details ? e.details : e.name;
      return null != n ? o.intl.formatToPlainString(o.t.Vnuxub, {
        name: n
      }) : null;
    case i.IIU.WATCHING:
      let a = null != e.details && "" !== e.details ? e.details : e.name;
      return null != a ? o.intl.formatToPlainString(o.t.pW3Ip6, {
        name: a
      }) : null;
    case i.IIU.COMPETING:
      return null != e.name ? o.intl.formatToPlainString(o.t.QQ2wVF, {
        name: e.name
      }) : null;
    case i.IIU.HANG_STATUS:
      return (0, r.O8)(e);
    case i.IIU.CUSTOM_STATUS:
      return null;
    case i.IIU.PLAYING:
    default:
      return null != e.name ? o.intl.formatToPlainString(o.t.lFApm5, {
        game: e.name
      }) : null
  }
}