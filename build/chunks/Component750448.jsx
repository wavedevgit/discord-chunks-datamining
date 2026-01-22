/** Chunk was on 97492 **/
/** chunk id: 750448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk173860 = require("./173860.jsx"),
  Chunk383394 = require("./383394.js"),
  Chunk458294 = require("./458294.js"),
  Chunk131677 = require("./131677.js"),
  Chunk711014 = require("./711014.js"),
  Chunk871697 = require("./871697.js"),
  Chunk531685 = require("./531685.js"),
  Chunk583613 = require("./583613.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let g = "app-download-item",
  m = "add-server-item";

function A() {
  returnfalse
}

function y(e) {
  var t;
  let n = o.default.getMutableGuildStates();
  return e === h.sFm.SERVER_DISCOVERY_BADGE && !d.A.hasViewed(h.sFm.SERVER_DISCOVERY_BADGE) || e !== g && e !== m && (null == (t = n[null != e ? e : "null"]) ? true : t.highImportanceMentionCount) > 0
}
let O = (0, Chunk583613.L_)((e, t, n) => ["null", ...t, ...e, m, h.sFm.E3_SERVER_DISCOVERY_BADGE, g]),
  j = Chunk64700.forwardRef(function(e, t) {
    var n, l;
    let d = (0, i.yK)([u.Ay, c.A, o.default], () => O(u.Ay.getGuildFolders(), c.A.getUnreadPrivateChannelIds(), o.default.getStoreChangeSentinel())),
      p = (0, i.bG)([f.A], () => f.A.isFocused()),
      h = (0, i.bG)([s.A], () => s.A.getExpandedFolders());
    return (0, r.jsx)(a.A, (n = function(e) {
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
    }({}, e), l = l = {
      ref: t,
      items: d,
      isUnread: A,
      textUnread: b.intl.string(b.t.y2b7CA),
      textMention: b.intl.string(b.t.y2b7CA),
      isMentioned: y,
      animate: p,
      expandedFolders: h
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
    }), n))
  })