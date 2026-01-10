/** Chunk was on 81985 **/
/** chunk id: 843343, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk486472 = require("./486472.js"),
  Chunk430824 = require("./430824.js"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk943207 = require("./943207.js");

function h() {
  var e, t;
  let n = (0, l.e7)([o.Z, s.Z], () => o.Z.unavailableGuilds.filter(e => null == s.Z.getGuild(e)).length),
    h = (0, i.Ie)("unavailable-guilds-button");
  return n <= 0 ? null : (0, r.jsx)(c.H, {
    children: (0, r.jsx)(u.Z, {
      text: p.intl.format(p.t["TnH05/"], {
        count: n
      }),
      children: (0, r.jsx)(a.eee, (e = function(e) {
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
        href: d.yX.STATUS,
        target: "_blank",
        className: f.guildsError,
        "aria-label": p.intl.formatToPlainString(p.t["MEpX+2"], {
          count: n
        })
      }, h), t = t = {
        children: (0, r.jsx)(a.Mgn, {
          color: "currentColor",
          "aria-hidden": true
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e))
    })
  })
}