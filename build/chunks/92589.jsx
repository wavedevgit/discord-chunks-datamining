/** Chunk was on 45620 **/
/** chunk id: 92589, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk168020 = require("./168020.js"),
  Chunk859788 = require("./859788.js"),
  Chunk388032 = require("./388032.js"),
  Chunk706153 = require("./706153.js");

function u(e) {
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
}
let d = e => {
  let {
    immersiveBannerBlock: t,
    onVisibilityChange: n
  } = e, d = (0, a.O)(e => {
    null == n || n(e)
  }, .33, null != n), p = null != t.textColor ? {
    color: t.textColor
  } : true, g = null != t.body && "" !== t.body, f = null != t.help_center_url && "" !== t.help_center_url;
  return <div ref={d} className={c.immersiveBannerBlock}>{<div className={c.banner}><o.Z bannerStatic={t.bannerAsset.static} bannerAnimated={t.bannerAsset.animated} /></div>}{<div className={c.immersiveBannerContent}><div className={c.immersiveBannerTextContainer}>{null != t.endTime ? <i.R endDate={t.endTime} size={"lg"} /> : null}{<l.X6q variant={"heading-xxl/bold"} className={c.title} color={"header-primary"} style={u({}, p)}>{t.title}</l.X6q>}{g || f ? <l.Text variant={"text-md/medium"} style={u({}, p)}>{g && t.body}{g && f && " "}{f && <l.eee href={t.help_center_url} className={c.learnMoreLink} style={u({}, p)}>{s.intl.string(s.t.O7ADgo)}</l.eee>}</l.Text> : null}</div></div>}</div>
}