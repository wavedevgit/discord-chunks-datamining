/** Chunk was on 49695 **/
/** chunk id: 23874, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk23339 = require("./23339.js"),
  Chunk158954 = require("./158954.js"),
  Chunk975571 = require("./975571.js"),
  Chunk307600 = require("./307600.js"),
  Chunk665171 = require("./665171.js"),
  Chunk800007 = require("./800007.js"),
  Chunk652215 = require("./652215.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  let {
    provider: e,
    onAccept: r
  } = t, d = function(t, e) {
    if (null == t) return {};
    var r, n, l, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(t); l < r.length; l++) n = r[l], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      return o
    }
    if (o = function(t, e) {
        if (null == t) return {};
        var r, n, l = {},
          o = Object.getOwnPropertyNames(t);
        for (n = 0; n < o.length; n++) r = o[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
        return l
      }(t, e), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(t); l < r.length; l++) n = r[l], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
    return o
  }(t, ["provider", "onAccept"]);
  return (0, n.jsx)(o.Modal, {
    title: f.intl.string(u.default.ny8Szd),
    subtitle: f.intl.format(u.default.D3STVx, {
      provider: (0, l.$G)(e),
      providerUrl: () => (0, a.h)({
        href: s.eh[e]
      }),
      helpCenterUrl: i.A.getArticleURL(c.MVz.GAME_SERVER_HOSTING)
    }),
    size: "md",
    actions: [{
      text: f.intl.string(f.t["/g10LC"]),
      onClick: d.onClose,
      variant: "secondary"
    }, {
      text: f.intl.string(u.default.K1xIXf),
      onClick: () => {
        (0, p.Wp)(true, e), null == r || r(), d.onClose()
      },
      variant: "primary"
    }],
    transitionState: d.transitionState,
    onClose: d.onClose
  })
}