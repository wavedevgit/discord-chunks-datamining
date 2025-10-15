/** Chunk was on 6954 **/
/** chunk id: 261149, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk468194 = require("./468194.js"),
  Chunk793030 = require("./793030.js"),
  Chunk49012 = require("./49012.js"),
  Chunk905551 = require("./905551.js"),
  Chunk619733 = require("./619733.js"),
  Chunk470658 = require("./470658.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  var {
    provider: e,
    onAccept: r
  } = t, p = function(t, e) {
    if (null == t) return {};
    var r, n, i = function(t, e) {
      if (null == t) return {};
      var r, n, i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (n = 0; n < o.length; n++) r = o[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
    }
    return i
  }(t, ["provider", "onAccept"]);
  return (0, n.jsx)(o.Modal, {
    title: u.intl.string(c.default.ny8Szd),
    subtitle: u.intl.format(c.default.D3STVx, {
      provider: (0, i.De)(e),
      providerUrl: () => (0, l.q)({
        href: a.nd[e]
      }),
      helpCenterUrl: "https://support.discord.com/hc/en-us/articles/35370817986839/"
    }),
    size: "md",
    actions: [{
      text: u.intl.string(u.t["/g10LC"]),
      onClick: p.onClose,
      variant: "secondary"
    }, {
      text: u.intl.string(c.default.K1xIXf),
      onClick: () => {
        (0, s.WY)(true, e), null == r || r(), p.onClose()
      },
      variant: "primary"
    }],
    transitionState: p.transitionState,
    onClose: p.onClose
  })
}