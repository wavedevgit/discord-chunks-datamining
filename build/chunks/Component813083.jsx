/** Chunk was on 45620 **/
/** chunk id: 813083, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p,
  k: () => d
}), require("./314940.js");
var n, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  d = ((n = {}).BANNER = "banner", n.MODAL = "modal", n.CARD = "card", n);
let p = e => {
  let {
    category: t,
    display: r,
    className: n
  } = e, d = (0, s.ZP)();
  if (null == t.unpublishedAt) return null;
  let p = (0, c.OT)(t.unpublishedAt);

  function g(e) {
    return (0, l.jsx)(o.IGR, {
      disableColor: true,
      text: e,
      className: n,
      style: (0, i.wj)(d) ? {
        color: "var(--black-500)",
        backgroundColor: "var(--white-500)"
      } : {
        color: "var(--white-500)",
        backgroundColor: "var(--black-500)"
      }
    })
  }
  return (0, a.EQ)([r, p > 1]).with(["card", true], () => null).with(["banner", true], () => g(u.intl.formatToPlainString(u.t["8gsP5O"], {
    days: p
  }))).with(["modal", true], () => g(u.intl.formatToPlainString(u.t.Io7ozs, {
    days: p
  }))).otherwise(() => g(u.intl.string(u.t.Bc13HB)))
}