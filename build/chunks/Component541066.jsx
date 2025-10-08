/** Chunk was on 46638 **/
/** chunk id: 541066, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk468194 = require("./468194.js"),
  Chunk793030 = require("./793030.js"),
  Chunk49012 = require("./49012.js"),
  Chunk744993 = require("./744993.js"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
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
    title: u.intl.string(c.default.bnsSPj),
    subtitle: u.intl.format(c.default.MaWfLi, {
      provider: (0, i.De)(e),
      providerUrl: () => (0, l.q)({
        href: a.Q_[e]
      }),
      helpCenterUrl: "https://support.discord.com/hc/en-us/articles/35370817986839/"
    }),
    size: "md",
    actions: [{
      text: u.intl.string(u.t["/g10LC"]),
      onClick: p.onClose,
      variant: "secondary"
    }, {
      text: u.intl.string(c.default.IfMFoK),
      onClick: () => {
        (0, s.g$)(true, e), null == r || r(), p.onClose()
      },
      variant: "primary"
    }],
    transitionState: p.transitionState,
    onClose: p.onClose
  })
}