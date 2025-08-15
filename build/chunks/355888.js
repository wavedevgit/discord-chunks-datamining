/** Chunk was on 86357 **/
/** chunk id: 355888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk629935 = require("./629935.js"),
  Chunk436952 = require("./436952.js"),
  Chunk461762 = require("./461762.js");

function s(e) {
  let t = (0, r.wj)((0, i.ZP)()),
    n = (0, o.Z)(e);
  if (!a.qM.useExperiment({
      location: "chat_wallpaper_color_mix"
    }).enabled || null == n) return;
  let s = {},
    c = n.primary_color;
  if (null != c) {
    var u, d;
    let e = null != (u = n.token_mix_amount) ? u : 100;
    s = (0, l.W4)({
      enabled: true,
      primaryColor: c,
      secondaryColor: null != (d = n.secondary_color) ? d : c,
      isDarkTheme: t,
      baseMixAmount: e,
      textMixAmount: e
    })
  }
  return null != n.link_color && Object.assign(s, {
    "--mention-foreground": n.link_color,
    "--text-link": n.link_color,
    "--text-link-low-saturation": n.link_color
  }), s
}