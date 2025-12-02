/** Chunk was on 384 **/
/** chunk id: 715796, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  P: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk601964 = require("./601964.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let t = (null == e ? true : e.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING)) === true,
    d = (null == e ? true : e.features.has(c.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === true,
    u = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
    g = null != e && (0, s.eM)(e, u);
  i.useEffect(() => {
    null != e && t && g && (0, a.ZDy)(async () => {
      let {
        default: t
      } = await n.e("710").then(n.bind(n, 32342));
      return n => {
        var i, l;
        return (0, r.jsx)(t, (i = function(e) {
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
        }({}, n), l = l = {
          guildId: e.id,
          requireTeamSetup: d
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    })
  }, [t, d, e, g])
}