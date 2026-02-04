/** Chunk was on 21738 **/
/** chunk id: 502103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk15073 = require("./15073.js"),
  Chunk954571 = require("./954571.js"),
  Chunk488926 = require("./488926.js"),
  Chunk45780 = require("./45780.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk349828 = require("./349828.js"),
  Chunk124759 = require("./124759.js");

function g(e) {
  var t;
  let g = (0, s.TZ)(e),
    m = f.dR.some(t => (null == e ? true : e.id) !== h.V && c.Ib(t, e)),
    A = (null == e ? true : e.defaultMessageNotifications) === d.orn.ALL_MESSAGES,
    _ = (0, u.G$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (t = null == e ? true : e.id) ? t : d.dJq),
    b = g && (m || A) && !_,
    E = i.useCallback(() => {
      var t;
      (0, u._$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (t = null == e ? true : e.id) ? t : d.dJq, true, p.i.DISMISS)
    }, [e]),
    O = i.useRef(false);
  i.useEffect(() => {
    if (b && !O.current) {
      var t;
      (0, a.mMO)(async () => {
        let {
          default: t
        } = await n.e("42446").then(n.bind(n, 653981));
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
          isDefaultNotificationsAllMessages: A
        }, n))
      }, {
        onCloseCallback: E
      }), o.default.track(d.HAw.DISMISSIBLE_CONTENT_SHOWN, {
        type: l.V[l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
        guild_id: null != (t = null == e ? true : e.id) ? t : d.dJq
      }), O.current = true
    }
  }, [m, e, E, A, b])
}