/** Chunk was on web.js **/
/** chunk id: 273284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk833858 = require("./833858.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  switch (e.type) {
    case i.IIU.STREAMING:
      let t = null != e.details && "" !== e.details ? e.details : e.name;
      return null != t ? a.intl.formatToPlainString(a.t["0wJXSk"], {
        name: t
      }) : null;
    case i.IIU.LISTENING:
      let n = null != e.details && "" !== e.details ? e.details : e.name;
      return null != n ? a.intl.formatToPlainString(a.t.Vnuxub, {
        name: n
      }) : null;
    case i.IIU.WATCHING:
      let o = null != e.details && "" !== e.details ? e.details : e.name;
      return null != o ? a.intl.formatToPlainString(a.t.pW3Ip6, {
        name: o
      }) : null;
    case i.IIU.COMPETING:
      return null != e.name ? a.intl.formatToPlainString(a.t.QQ2wVF, {
        name: e.name
      }) : null;
    case i.IIU.HANG_STATUS:
      return (0, r.O8)(e);
    case i.IIU.CUSTOM_STATUS:
      return null;
    case i.IIU.PLAYING:
    default:
      return null != e.name ? a.intl.formatToPlainString(a.t.lFApm5, {
        game: e.name
      }) : null
  }
}