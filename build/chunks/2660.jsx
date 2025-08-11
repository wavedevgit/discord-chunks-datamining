/** Chunk was on web.js **/
/** chunk id: 2660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk204418 = require("./204418.js"),
  Chunk594174 = require("./594174.js"),
  Chunk113434 = require("./113434.js"),
  Chunk182294 = require("./182294.js"),
  Chunk723781 = require("./723781.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let _ = e => {
    let {
      questConfig: t,
      fallback: n,
      isFocused: d
    } = e, f = (0, i.e7)([s.default], () => s.default.getCurrentUser()), {
      avatarDecoration: _,
      isFetching: p
    } = (0, l.DU)(t);
    return p ? <div className={u.questsCollectibleReward}><o.$jN /></div> : null == f || null == _ ? n : <div className={u.questsCollectibleReward}><a.Z avatarSize={c.EF.SIZE_56} user={f} guildId={null} avatarDecorationOverride={_} animateOnHover={!d} /></div>
  },
  p = e => <_{...f({}, e)} />