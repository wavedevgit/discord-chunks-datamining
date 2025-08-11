/** Chunk was on 89298 **/
/** chunk id: 810632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk74299 = require("./74299.js"),
  Chunk562224 = require("./562224.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk145597 = require("./145597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, t) {
  let g = (0, o.e7)([d.Z], () => d.Z.getVoiceChannelId()),
    y = (0, o.e7)([c.Z], () => c.Z.getChannel(g), [g]),
    O = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
    b = null == y ? true : y.getGuildId(),
    v = (0, o.e7)([u.Z], () => (0, a.Z)(u.Z));
  return r.useCallback(async () => {
    if (!v || null == g) return;
    let [r] = await (0, s.Z)(e);
    if (!r) {
      if (null == O) return void(0, l.showToast)((0, l.createToast)(m.intl.string(m.t.OKnWyc), l.ToastType.FAILURE));
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("46746"), n.e("74304")]).then(n.bind(n, 60594));
        return t => {
          var n, r;
          return (0, i.jsx)(e, (n = function(e) {
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
          }({}, t), r = r = {
            sourcePID: (0, f.getPID)(),
            selectSource: false,
            guildId: b,
            analyticsLocation: h.Sbl.UNLOCKED_OVERLAY
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n))
        }
      }, {
        contextKey: null != t ? (0, l.VnL)(t) : true
      })
    }
  }, [v, b, g, t, e, O])
}