/** Chunk was on web.js **/
/** chunk id: 481300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk991621 = require("./991621.js"),
  Chunk629710 = require("./629710.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  let l = (0, a.rb)(e),
    u = null != t && (0, a.g4)({
      type: o.l.GenericMedia,
      media: t
    }, l);
  if (null == t || !u) return null;
  let d = () => {
    (0, i.ZDy)(async () => {
      let {
        default: i
      } = await n(788679);
      return n => <i{...c({
        channelId: e.channel_id,
        messageId: e.id,
        mediaItemUrl: t.url
      }, n)} />
    })
  };
  return <i.sNh id={"report-image-false-positive"} label={s.intl.string(s.t.ZH7P2t)} action={d} icon={i.fFY} />
}