/** Chunk was on 46638 **/
/** chunk id: 541066, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk744993 = require("./744993.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  var {
    provider: e,
    onAccept: n
  } = t, s = function(t, e) {
    if (null == t) return {};
    var n, r, o = function(t, e) {
      if (null == t) return {};
      var n, r, o = {},
        i = Object.keys(t);
      for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
      return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
    }
    return o
  }(t, ["provider", "onAccept"]);
  return (0, r.jsx)(o.Modal, {
    title: a.intl.string(l.default.bnsSPj),
    subtitle: a.intl.format(l.default.MaWfLi, {
      provider: e,
      providerUrl: "https://google.com/terms-of-service"
    }),
    size: "md",
    actions: [{
      text: a.intl.string(a.t["/g10LC"]),
      onClick: s.onClose,
      variant: "secondary"
    }, {
      text: a.intl.string(l.default.IfMFoK),
      onClick: () => {
        (0, i.g$)(true, e), null == n || n(), s.onClose()
      },
      variant: "primary"
    }],
    transitionState: s.transitionState,
    onClose: s.onClose
  })
}