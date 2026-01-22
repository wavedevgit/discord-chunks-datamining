/** Chunk was on 47841 **/
/** chunk id: 545567, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk803306 = require("./803306.js"),
  Chunk141468 = require("./141468.js"),
  Chunk963852 = require("./963852.js"),
  Chunk427157 = require("./427157.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk144273 = require("./144273.js");

function u(e) {
  return r.useMemo(() => {
    var t, n;
    let r = (0, l.rh)((t = function(e) {
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
      }({}, (0, s.Ay)({
        channelId: "1337",
        content: e
      })), n = n = {
        state: c.cmJ.SENT,
        id: "31337"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)),
      u = new a.A({
        id: "313337",
        username: o.intl.string(o.t.cqpybK),
        discriminator: "0000",
        bot: false
      });
    r.author = u;
    let f = i.nj(u);
    return null != f && (r.author = f, r.author.getAvatarURL = () => d.A), r
  }, [e])
}