/** Chunk was on 6954 **/
/** chunk id: 261149, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk468194 = require("./468194.js"),
  Chunk793030 = require("./793030.js"),
  Chunk63063 = require("./63063.js"),
  Chunk49012 = require("./49012.js"),
  Chunk905551 = require("./905551.js"),
  Chunk619733 = require("./619733.js"),
  Chunk981631 = require("./981631.js"),
  Chunk613275 = require("./613275.js"),
  Chunk388032 = require("./388032.jsx");

function f(t) {
  var {
    provider: e,
    onAccept: n
  } = t, f = function(t, e) {
    if (null == t) return {};
    var n, r, i = function(t, e) {
      if (null == t) return {};
      var n, r, i = {},
        l = Object.keys(t);
      for (r = 0; r < l.length; r++) n = l[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      for (r = 0; r < l.length; r++) n = l[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
    }
    return i
  }(t, ["provider", "onAccept"]);
  return (0, r.jsx)(l.Modal, {
    title: p.intl.string(d.default.ny8Szd),
    subtitle: p.intl.format(d.default.D3STVx, {
      provider: (0, i.De)(e),
      providerUrl: () => (0, a.q)({
        href: u.nd[e]
      }),
      helpCenterUrl: o.Z.getEnglishArticleURL(c.BhN.GAME_SERVER_HOSTING)
    }),
    size: "md",
    actions: [{
      text: p.intl.string(p.t["/g10LC"]),
      onClick: f.onClose,
      variant: "secondary"
    }, {
      text: p.intl.string(d.default.K1xIXf),
      onClick: () => {
        (0, s.WY)(true, e), null == n || n(), f.onClose()
      },
      variant: "primary"
    }],
    transitionState: f.transitionState,
    onClose: f.onClose
  })
}