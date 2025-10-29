/** Chunk was on web.js **/
/** chunk id: 787895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk273352 = require("./273352.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk923928 = require("./923928.js"),
  Chunk594190 = require("./594190.js"),
  Chunk865066 = require("./865066.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E() {
  let [e, t] = (0, Chunk442837.Wu)([Chunk594190.ZP], () => [Chunk594190.ZP.canShowAdminWarning, Chunk594190.ZP.getVisibleGame()], []), n = (0, Chunk442837.e7)([Chunk19780.Z], () => Chunk19780.Z.isConnected(), []), m = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode() === Chunk981631.pM4.PUSH_TO_TALK, []), E = null != exports && exports.elevated && require && m && module, b = Chunk647438.useRef(null);
  return Chunk647438.useEffect(() => {
    if (!(0, Chunk865066.s2)(Chunk594190.ZP)) return E ? b.current = (0, Chunk481060.h7j)(e => (0, r.jsx)(o.default, g({
      title: h.intl.string(h.t.eotlXE),
      body: h.intl.formatToPlainString(h.t.Lw6KXV, {
        game: null == t ? true : t.name
      }),
      secondaryConfirmText: h.intl.string(h.t["5E9SB9"]),
      onConfirmSecondary: () => l.Z.clearPTTAdminWarning(),
      onConfirm: () => window.open(_.Z.getArticleURL(p.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank"),
      confirmText: h.intl.string(h.t.psXQHP)
    }, e))) : module(), () => {
      module()
    };

    function e() {
      null !== b.current && ((0, Chunk481060.Mr3)(b.current), b.current = null)
    }
  }, [exports, E]), null
}