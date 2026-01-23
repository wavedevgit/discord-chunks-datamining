/** Chunk was on 19418 **/
/** chunk id: 434352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk494713 = require("./494713.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    guildFriendsEnabled: t
  } = l.A.useExperiment({
    location: "useFriendsItem"
  }, {
    autoTrackExposure: false
  });
  return t ? (0, i.jsx)(r.Drp, {
    id: "friends",
    label: a.intl.string(a.t.kYxEcH),
    icon: r.$yI,
    action: () => {
      (0, r.mMO)(async () => {
        let {
          default: t
        } = await n.e("42048").then(n.bind(n, 151203));
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