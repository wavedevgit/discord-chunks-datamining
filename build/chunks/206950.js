/** Chunk was on 9536 **/
/** chunk id: 206950, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  F: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk232567 = require("./232567.js"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk598077 = require("./598077.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk950899 = require("./950899.js");

function u(e) {
  return r.useMemo(() => {
    var t, n;
    let r = (0, l.e5)((t = function(e) {
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
      }({}, (0, a.ZP)({
        channelId: "1337",
        content: e
      })), n = n = {
        state: o.yb.SENT,
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
      u = new s.Z({
        id: "313337",
        username: c.intl.string(c.t.cqpybK),
        discriminator: "0000",
        bot: false
      });
    r.author = u;
    let g = i.$k(u);
    return null != g && (r.author = g, r.author.getAvatarURL = () => d.Z), r
  }, [e])
}