/** Chunk was on 45141 **/
/** chunk id: 887904, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk557239 = require("./557239.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    guildFriendsEnabled: t
  } = a.Z.useExperiment({
    location: "useFriendsItem"
  }, {
    autoTrackExposure: false
  });
  return t ? (0, i.jsx)(r.sNh, {
    id: "friends",
    label: l.intl.string(l.t.kYxEcH),
    icon: r.iFz,
    action: () => {
      (0, r.ZDy)(async () => {
        let {
          default: t
        } = await n.e("62635").then(n.bind(n, 564232));
        return n => (0, i.jsx)(t, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          guild: e
        }, n))
      })
    }
  }) : null
}