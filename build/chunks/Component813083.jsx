/** Chunk was on web.js **/
/** chunk id: 813083, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  k: () => u
}), require("./314940.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  u = function(e) {
    return e.BANNER = "banner", e.MODAL = "modal", e.CARD = "card", e
  }({});
let d = e => {
  let {
    category: t,
    display: n,
    className: u
  } = e, d = (0, s.ZP)();
  if (null == t.unpublishedAt) return null;
  let f = (0, l.OT)(t.unpublishedAt);

  function _(e) {
    return (0, r.jsx)(a.IGR, {
      disableColor: true,
      text: e,
      className: u,
      style: (0, o.wj)(d) ? {
        color: "var(--black-500)",
        backgroundColor: "var(--white-500)"
      } : {
        color: "var(--white-500)",
        backgroundColor: "var(--black-500)"
      }
    })
  }
  return (0, i.EQ)([n, f > 1]).with(["card", true], () => null).with(["banner", true], () => _(c.intl.formatToPlainString(c.t["8gsP5O"], {
    days: f
  }))).with(["modal", true], () => _(c.intl.formatToPlainString(c.t.Io7ozs, {
    days: f
  }))).otherwise(() => _(c.intl.string(c.t.Bc13HB)))
}