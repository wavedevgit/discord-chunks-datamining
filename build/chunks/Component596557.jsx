/** Chunk was on 1272 **/
/** chunk id: 596557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785697 = require("./785697.js"),
  Chunk626135 = require("./626135.js"),
  Chunk700785 = require("./700785.js"),
  Chunk645041 = require("./645041.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk647086 = require("./647086.js"),
  Chunk135899 = require("./135899.js");

function h(e) {
  var t;
  let h = (0, o.SE)(e),
    m = g.$X.some(t => (null == e ? true : e.id) !== f._ && c.oz(t, e)),
    b = (null == e ? true : e.defaultMessageNotifications) === d.bL.ALL_MESSAGES,
    E = (0, u.FT)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (t = null == e ? true : e.id) ? t : d.lds),
    _ = h && (m || b) && !E,
    O = i.useCallback(() => {
      var t;
      (0, u.Qd)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (t = null == e ? true : e.id) ? t : d.lds, true, p.L.DISMISS)
    }, [e]),
    v = i.useRef(false);
  i.useEffect(() => {
    if (_ && !v.current) {
      var t;
      (0, a.ZDy)(async () => {
        let {
          default: t
        } = await n.e("54597").then(n.bind(n, 29022));
        return n => (0, r.jsx)(t, function(e) {
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
          guild: e,
          canEveryoneModerate: m,
          isDefaultNotificationsAllMessages: b
        }, n))
      }, {
        onCloseCallback: O
      }), s.default.track(d.rMx.DISMISSIBLE_CONTENT_SHOWN, {
        type: l.C[l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
        guild_id: null != (t = null == e ? true : e.id) ? t : d.lds
      }), v.current = true
    }
  }, [m, e, O, b, _])
}