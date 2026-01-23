/** Chunk was on 47841 **/
/** chunk id: 833448, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  T: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk260509 = require("./260509.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let t = (null == e ? true : e.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING)) === true,
    d = (null == e ? true : e.features.has(c.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === true,
    u = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
    g = null != e && (0, a.bM)(e, u);
  i.useEffect(() => {
    null != e && t && g && (0, s.mMO)(async () => {
      let {
        default: t
      } = await n.e("47175").then(n.bind(n, 75834));
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