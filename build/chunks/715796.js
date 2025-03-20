/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  P: () => A
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(594174),
  o = n(981631);

function A(e) {
  let t = (null == e ? void 0 : e.hasFeature(o.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING)) === !0,
    A = (null == e ? void 0 : e.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0,
    c = (0, s.e7)([l.default], () => l.default.getCurrentUser()),
    d = (null == e ? void 0 : e.isOwner(c)) === !0;
  i.useEffect(() => {
    null != e && t && d && (0, a.ZDy)(async () => {
      let {
        default: t
      } = await n.e("710").then(n.bind(n, 32342));
      return n => {
        var i, s;
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
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, n), s = s = {
          guildId: e.id,
          requireTeamSetup: A
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i))
      }
    })
  }, [t, A, e, d])
}