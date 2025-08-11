/** Chunk was on web.js **/
/** chunk id: 355888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk629935 = require("./629935.js"),
  Chunk436952 = require("./436952.js"),
  Chunk461762 = require("./461762.js");

function l(e) {
  let t = (0, r.wj)((0, i.ZP)()),
    n = (0, s.Z)(e);
  if (!a.qM.useExperiment({
      location: "chat_wallpaper_color_mix"
    }).enabled || null == n) return;
  let l = {},
    c = n.primary_color;
  if (null != c) {
    var u, d;
    let e = null != (u = n.token_mix_amount) ? u : 100;
    l = (0, o.W4)({
      enabled: true,
      primaryColor: c,
      secondaryColor: null != (d = n.secondary_color) ? d : c,
      isDarkTheme: t,
      baseMixAmount: e,
      textMixAmount: e
    })
  }
  return null != n.link_color && Object.assign(l, {
    "--mention-foreground": n.link_color,
    "--text-link": n.link_color,
    "--text-link-low-saturation": n.link_color
  }), l
}