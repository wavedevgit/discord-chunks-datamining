/** Chunk was on 99764 **/
/** chunk id: 807582, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk158638 = require("./158638.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk721641 = require("./721641.js");
let f = e => {
  let t, n, i, {
      guildFeature: f,
      guild: p,
      className: u,
      hideTooltip: m = false,
      tooltipPosition: b = "left",
      onClick: v
    } = e,
    g = p.features.has(f),
    h = (0, c.AR)(p.id, "GuildSettingsBoostPerks"),
    y = (0, l._p)(f);
  return !g && f === s.oNc.VANITY_URL && h ? null : (g ? (null != y && (i = d.intl.string(d.t.hUgjyM)), t = <r.Fragment>{<a.$Eu color={a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK} className={_.unlockedIcon} />}{<a.X6q variant={"eyebrow"} className={_.description}>{d.intl.string(d.t["0O+87u"])}</a.X6q>}</r.Fragment>) : (null != y && (i = d.intl.string(d.t.L2wYYm)), t = <r.Fragment>{<a.$Eu color={"currentColor"} className={_.icon} />}{<a.X6q variant={"eyebrow"} className={_.description}>{null != y && (0, l.e9)(y)}</a.X6q>}</r.Fragment>), n = m || null == i ? <div className={o()(_.availabilityIndicator, u)}>{t}</div> : <a.ua7 position={b} text={i}>{e => {
      var n, i;
      return (0, r.jsx)("div", (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e), i = i = {
        className: o()(_.availabilityIndicator, u),
        children: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }}</a.ua7>, null == v || g) ? n : <a.P3F onClick={v} className={_.clickable}>{n}</a.P3F>
}