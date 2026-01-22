/** Chunk was on 24843 **/
/** chunk id: 570336, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk414798 = require("./414798.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e, t, n) {
  let [f, p] = (0, i.yK)([u.A, a.A, l.A], () => {
    let e = u.A.getChannelId(t),
      n = a.A.getChannel(e);
    return [e, null != n && (n.isPrivate() || l.A.can(b.xBc.SEND_MESSAGES, n))]
  }, [t]), A = n === b.BRT.POPOUT;
  return !p || A ? null : (0, r.jsx)(c.Drp, {
    id: "mention",
    label: d.intl.string(d.t.P8tvKG),
    action: function() {
      ! function(e, t) {
        let {
          id: n
        } = e, r = "@".concat(e.name);
        s._.dispatchToLastSubscribed(b.jej.INSERT_TEXT, {
          plainText: r,
          rawText: "<@$".concat(n, ">")
        }), null != t && o.A.startTyping(t)
      }(e, f)
    }
  })
}