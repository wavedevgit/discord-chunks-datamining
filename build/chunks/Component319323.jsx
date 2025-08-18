/** Chunk was on 91173 **/
/** chunk id: 319323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk283836 = require("./283836.js"),
  Chunk728345 = require("./728345.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, {
    data: i
  } = (0, a.IX)(t);
  return null == i ? null : (0, r.jsx)(u, {
    app: i,
    guildId: n
  })
}

function u(e) {
  let {
    app: t,
    guildId: a
  } = e;
  (0, o.q)(t.id);
  let c = i.useCallback(() => {
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("77803"), n.e("18992")]).then(n.bind(n, 7225));
      return n => (0, r.jsx)(e, function(e) {
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
        appId: t.id,
        guildId: a
      }, n))
    })
  }, [t, a]);
  return (0, r.jsx)(l.zxk, {
    size: "sm",
    onClick: c,
    icon: l.QJP,
    text: s.intl.format(s.t.XDRjs7, {
      appName: t.name
    })
  })
}