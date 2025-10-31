/** Chunk was on 48502 **/
/** chunk id: 813083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  k: () => p
}), require("./314940.js");
var r, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk685816 = require("./685816.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  p = ((r = {}).BANNER = "banner", r.MODAL = "modal", r.CARD = "card", r);
let f = e => {
  let {
    category: t,
    display: n,
    className: r,
    shopBlockType: p
  } = e, f = (0, c.ZP)();
  if (null == t.unpublishedAt) return null;
  let b = (0, u.OT)(t.unpublishedAt);

  function y(e) {
    return (0, l.jsx)(s.IGR, {
      disableColor: true,
      text: e,
      className: r,
      style: (0, o.wj)(f) ? {
        color: "var(--black-500)",
        backgroundColor: "var(--white-500)"
      } : {
        color: "var(--white-500)",
        backgroundColor: "var(--black-500)"
      }
    })
  }
  return (0, i.EQ)([n, b > 1]).with(["card", true], () => null != p && (p === a.z.HERO || p === a.z.FEED) ? y(d.intl.formatToPlainString(d.t.Io7ozn, {
    days: b
  })) : null).with(["banner", true], () => y(d.intl.formatToPlainString(d.t["8gsP5M"], {
    days: b
  }))).with(["modal", true], () => y(d.intl.formatToPlainString(d.t.Io7ozn, {
    days: b
  }))).otherwise(() => y(d.intl.string(d.t.Bc13HF)))
}