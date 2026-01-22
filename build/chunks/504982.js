/** Chunk was on 21738 **/
/** chunk id: 504982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk954571 = require("./954571.js"),
  Chunk237774 = require("./237774.js"),
  Chunk862927 = require("./862927.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  var t, n, s;
  let {
    tab_opened: o,
    source: c
  } = e, u = (0, l.A)();
  r.default.track(a.HAw.FRIENDS_LIST_VIEWED, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    tab_opened: o,
    source: c
  }, u)), (0, i.k)(a.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
    tab_opened: null != o ? o : "tabless",
    num_friends: null != (t = u.num_friends) ? t : 0,
    now_playing_visible: null != (n = u.now_playing_visible) && n,
    now_playing_num_cards: null != (s = u.now_playing_num_cards) ? s : 0
  })
}