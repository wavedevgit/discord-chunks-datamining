/** Chunk was on 19418 **/
/** chunk id: 434352, original params: e,n,t (module,exports,require) **/
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
    guildFriendsEnabled: n
  } = l.A.useExperiment({
    location: "useFriendsItem"
  }, {
    autoTrackExposure: false
  });
  return n ? (0, i.jsx)(r.Drp, {
    id: "friends",
    label: a.intl.string(a.t.kYxEcH),
    icon: r.$yI,
    leadingAccessory: {
      type: "icon",
      icon: r.$yI
    },
    action: () => {
      (0, r.mMO)(async () => {
        let {
          default: n
        } = await t.e("42048").then(t.bind(t, 151203));
        return t => (0, i.jsx)(n, function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              i = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.forEach(function(n) {
              var i;
              i = t[n], n in e ? Object.defineProperty(e, n, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = i
            })
          }
          return e
        }({
          guild: e
        }, t))
      })
    }
  }) : null
}