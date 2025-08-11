/** Chunk was on web.js **/
/** chunk id: 717114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk923928 = require("./923928.js"),
  Chunk468026 = require("./468026.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
let g = () => {
  let [e, t] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []), n = (0, Chunk442837.e7)([Chunk19780.Z], () => Chunk19780.Z.isConnected(), []), h = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode() === Chunk981631.pM4.PUSH_TO_TALK, []), g = null != exports && exports.elevated && require && h && module, E = Chunk73800.useRef(null);

  function b() {
    null !== E.current && ((0, Chunk481060.Mr3)(E.current), E.current = null)
  }
  return Chunk73800.useEffect(() => (g ? E.current = (0, Chunk481060.h7j)(e => (0, r.jsx)(l.default, m({
    title: p.intl.string(p.t.eotlXF),
    body: p.intl.formatToPlainString(p.t.Lw6KXV, {
      game: null == t ? true : t.name
    }),
    secondaryConfirmText: p.intl.string(p.t["5E9SBw"]),
    onConfirmSecondary: () => s.Z.clearPTTAdminWarning(),
    onConfirm: () => window.open(f.Z.getArticleURL(_.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank"),
    confirmText: p.intl.string(p.t.psXQHB)
  }, e))) : b(), () => {
    b()
  }), [exports, g]), null
}