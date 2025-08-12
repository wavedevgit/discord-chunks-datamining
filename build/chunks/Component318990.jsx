/** Chunk was on 94136 **/
/** chunk id: 318990, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk357355 = require("./357355.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk275041 = require("./275041.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk357355.Z], () => Chunk357355.Z.affinities.slice(0, 3)),
    t = module[0],
    {
      avatarSrc: i,
      eventHandlers: d
    } = (0, Chunk518950.Z)({
      userId: null == exports ? true : exports.id,
      size: Chunk481060.EFr.SIZE_24,
      animateOnHover: true
    }),
    m = e => null != e.globalName ? e.globalName : e.username,
    C = Chunk73800.useMemo(() => module.length >= 2 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.c7ETJC, {
      username: m(module[0])
    }) : 1 === module.length ? Chunk388032.intl.formatToPlainString(Chunk388032.t.dpjXPD, {
      username: m(module[0])
    }) : "", [module]);
  return 0 === module.length ? null : (0, Chunk255367.jsxs)("div", {
    className: Chunk275041.container,
    children: [(0, Chunk255367.jsx)(Chunk481060.qEK, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
          return Object.getOwnPropertyDescriptor(i, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = i[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      className: Chunk275041.__invalid_icon,
      src: require,
      "aria-label": exports.username,
      size: Chunk481060.EFr.SIZE_24
    }, d)), (0, Chunk255367.jsx)(Chunk481060.Text, {
      className: Chunk275041.text,
      variant: "text-sm/normal",
      color: "always-white",
      children: C
    })]
  })
}