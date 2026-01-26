/** Chunk was on 97887 **/
/** chunk id: 750448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
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
let m = "app-download-item",
  b = "add-server-item";

function A() {
  returnfalse
}

function y(e) {
  var t;
  let n = o.default.getMutableGuildStates();
  return e === f.sFm.SERVER_DISCOVERY_BADGE && !d.A.hasViewed(f.sFm.SERVER_DISCOVERY_BADGE) || e !== m && e !== b && (null == (t = n[null != e ? e : "null"]) ? true : t.highImportanceMentionCount) > 0
}
let _ = (0, Chunk583613.L_)((e, t, n) => ["null", ...t, ...e, b, f.sFm.E3_SERVER_DISCOVERY_BADGE, m]),
  O = Chunk64700.forwardRef(function(e, t) {
    var n, l;
    let d = (0, i.yK)([u.Ay, c.A, o.default], () => _(u.Ay.getGuildFolders(), c.A.getUnreadPrivateChannelIds(), o.default.getStoreChangeSentinel())),
      h = (0, i.bG)([p.A], () => p.A.isFocused()),
      f = (0, i.bG)([a.A], () => a.A.getExpandedFolders());
    return (0, r.jsx)(s.A, (n = function(e) {
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
      textUnread: g.intl.string(g.t.y2b7CA),
      textMention: g.intl.string(g.t.y2b7CA),
      isMentioned: y,
      animate: h,
      expandedFolders: f
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