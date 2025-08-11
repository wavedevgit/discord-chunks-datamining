/** Chunk was on 11912 **/
/** chunk id: 813083, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./314940.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk278074 = require("./278074.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx");
let u = e => {
  let {
    category: t,
    display: r,
    className: u
  } = e, d = (0, o.ZP)();
  if (null == t.unpublishedAt) return null;
  let p = (0, s.OT)(t.unpublishedAt);

  function b(e) {
    return (0, n.jsx)(i.IGR, {
      disableColor: true,
      text: e,
      className: u,
      style: (0, l.wj)(d) ? {
        color: "var(--black-500)",
        backgroundColor: "var(--white-500)"
      } : {
        color: "var(--white-500)",
        backgroundColor: "var(--black-500)"
      }
    })
  }
  return (0, a.EQ)([r, p > 1]).with(["card", true], () => null).with(["banner", true], () => b(c.intl.formatToPlainString(c.t["8gsP5O"], {
    days: p
  }))).with(["modal", true], () => b(c.intl.formatToPlainString(c.t.Io7ozs, {
    days: p
  }))).otherwise(() => b(c.intl.string(c.t.Bc13HB)))
}