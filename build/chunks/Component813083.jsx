/** Chunk was on 204 **/
/** chunk id: 813083, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  k: () => p
}), require("./314940.js");
var n, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk685816 = require("./685816.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  p = ((n = {}).BANNER = "banner", n.MODAL = "modal", n.CARD = "card", n);
let f = e => {
  let {
    category: t,
    display: r,
    className: n,
    shopBlockType: p
  } = e, f = (0, c.ZP)();
  if (null == t.unpublishedAt) return null;
  let b = (0, u.OT)(t.unpublishedAt);

  function h(e) {
    return (0, l.jsx)(s.IGR, {
      disableColor: true,
      text: e,
      className: n,
      style: (0, o.wj)(f) ? {
        color: "var(--black-500)",
        backgroundColor: "var(--white-500)"
      } : {
        color: "var(--white-500)",
        backgroundColor: "var(--black-500)"
      }
    })
  }
  return (0, i.EQ)([r, b > 1]).with(["card", true], () => null != p && p === a.z.HERO ? h(d.intl.formatToPlainString(d.t.Io7ozs, {
    days: b
  })) : null).with(["banner", true], () => h(d.intl.formatToPlainString(d.t["8gsP5O"], {
    days: b
  }))).with(["modal", true], () => h(d.intl.formatToPlainString(d.t.Io7ozs, {
    days: b
  }))).otherwise(() => h(d.intl.string(d.t.Bc13HB)))
}