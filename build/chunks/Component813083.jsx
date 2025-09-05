/** Chunk was on web.js **/
/** chunk id: 813083, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f,
  k: () => d
}), require("./314940.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk685816 = require("./685816.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  d = function(e) {
    return e.BANNER = "banner", e.MODAL = "modal", e.CARD = "card", e
  }({});
let f = e => {
  let {
    category: t,
    display: n,
    className: d,
    shopBlockType: f
  } = e, _ = (0, l.ZP)();
  if (null == t.unpublishedAt) return null;
  let p = (0, c.OT)(t.unpublishedAt);

  function h(e) {
    return (0, r.jsx)(s.IGR, {
      disableColor: true,
      text: e,
      className: d,
      style: (0, o.wj)(_) ? {
        color: "var(--black-500)",
        backgroundColor: "var(--white-500)"
      } : {
        color: "var(--white-500)",
        backgroundColor: "var(--black-500)"
      }
    })
  }
  return (0, i.EQ)([n, p > 1]).with(["card", true], () => null != f && f === a.z.HERO ? h(u.intl.formatToPlainString(u.t.Io7ozs, {
    days: p
  })) : null).with(["banner", true], () => h(u.intl.formatToPlainString(u.t["8gsP5O"], {
    days: p
  }))).with(["modal", true], () => h(u.intl.formatToPlainString(u.t.Io7ozs, {
    days: p
  }))).otherwise(() => h(u.intl.string(u.t.Bc13HB)))
}