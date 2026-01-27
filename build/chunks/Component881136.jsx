/** Chunk was on 54469 **/
/** chunk id: 881136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk568873 = require("./568873.jsx"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g() {
  return [{
    setting: u.orn.ALL_MESSAGES,
    label: d.intl.string(d.t["n/bTaY"])
  }, {
    setting: u.orn.ONLY_MENTIONS,
    label: d.intl.format(d.t.L2hmYy, {})
  }, {
    setting: u.orn.NO_MESSAGES,
    label: d.intl.string(d.t.CtVGyQ)
  }]
}

function p(e) {
  var t, p;
  let b = function(e) {
      let {
        suppressEveryone: t,
        suppressRoles: n,
        mobilePush: p,
        messageNotifications: b,
        notifyHighlights: A
      } = (0, r.cf)([o.Ay], () => ({
        suppressEveryone: o.Ay.isSuppressEveryoneEnabled(e.id),
        suppressRoles: o.Ay.isSuppressRolesEnabled(e.id),
        mobilePush: o.Ay.isMobilePushEnabled(e.id),
        messageNotifications: o.Ay.getMessageNotifications(e.id),
        notifyHighlights: o.Ay.getNotifyHighlights(e.id)
      }), [e.id]), h = A === u.guM.DISABLED, y = (0, a.A)(e.id);

      function O(t, n) {
        l.A.updateGuildNotificationSettings(e.id, t, n)
      }
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.rXV, {
          children: g().map(e => {
            let {
              setting: t,
              label: n
            } = e;
            return (0, i.jsx)(s.iDA, {
              group: "guild-notifications",
              id: "".concat(t),
              label: n,
              action: () => O({
                message_notifications: t
              }, c.G_.notifications(t)),
              checked: t === b
            }, t)
          })
        }), (0, i.jsxs)(s.rXV, {
          children: [(0, i.jsx)(s.sLh, {
            id: "suppress-everyone",
            label: d.intl.format(d.t.OWiWAp, {}),
            action: () => O({
              suppress_everyone: !t
            }, c.G_.suppressEveryone(!t)),
            checked: t
          }), (0, i.jsx)(s.sLh, {
            id: "suppress-roles",
            label: d.intl.string(d.t["O/QdoD"]),
            action: () => O({
              suppress_roles: !n
            }, c.G_.suppressRoles(!n)),
            checked: n
          }), (0, i.jsx)(s.sLh, {
            id: "suppress-highlights",
            label: d.intl.string(d.t.gPuteJ),
            action: () => {
              O({
                notify_highlights: h ? u.guM.ENABLED : u.guM.DISABLED
              }, c.G_.highlights(h))
            },
            checked: h
          }), y]
        }), (0, i.jsx)(s.rXV, {
          children: (0, i.jsx)(s.sLh, {
            id: "mobile-push",
            label: d.intl.string(d.t.h1DL66),
            action: () => O({
              mobile_push: !p
            }, c.G_.mobilePush(!p)),
            checked: p
          })
        })]
      })
    }(e),
    A = (0, r.bG)([o.Ay], () => o.Ay.getMessageNotifications(e.id), [e.id]),
    h = null == (p = g()) || null == (t = p.find(e => {
      let {
        setting: t
      } = e;
      return t === A
    })) ? true : t.label;
  return null != b ? (0, i.jsx)(s.Drp, {
    id: "guild-notifications",
    label: d.intl.string(d.t.h850Ss),
    subtext: h,
    action: () => (0, s.mMO)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("64992"), n.e("90432")]).then(n.bind(n, 401539));
      return n => {
        var r, s;
        return (0, i.jsx)(t, (r = function(e) {
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
        }({}, n), s = s = {
          guildId: e.id
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
        }), r))
      }
    }),
    children: b
  }) : null
}