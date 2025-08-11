/** Chunk was on 33213 **/
/** chunk id: 993356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk778123 = require("./778123.jsx"),
  Chunk122074 = require("./122074.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b() {
  return [{
    setting: Chunk981631.bL.ALL_MESSAGES,
    label: Chunk388032.intl.string(Chunk388032.t["n/bTaW"])
  }, {
    setting: Chunk981631.bL.ONLY_MENTIONS,
    label: Chunk388032.intl.format(Chunk388032.t.L2hmY2, {})
  }, {
    setting: Chunk981631.bL.NO_MESSAGES,
    label: Chunk388032.intl.string(Chunk388032.t.CtVGyc)
  }]
}

function p(e) {
  var t, p;
  let f = function(e) {
      let {
        suppressEveryone: t,
        suppressRoles: n,
        mobilePush: p,
        messageNotifications: f,
        notifyHighlights: S
      } = (0, r.cj)([c.ZP], () => ({
        suppressEveryone: c.ZP.isSuppressEveryoneEnabled(e.id),
        suppressRoles: c.ZP.isSuppressRolesEnabled(e.id),
        mobilePush: c.ZP.isMobilePushEnabled(e.id),
        messageNotifications: c.ZP.getMessageNotifications(e.id),
        notifyHighlights: c.ZP.getNotifyHighlights(e.id)
      }), [e.id]), O = S === d.gLR.DISABLED, E = (0, o.Z)(e.id);

      function h(t, n) {
        s.Z.updateGuildNotificationSettings(e.id, t, n)
      }
      let y = (0, a.ng)(e.id, true);
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.kSQ, {
          children: b().map(e => {
            let {
              setting: t,
              label: n
            } = e;
            return (0, i.jsx)(l.k5B, {
              group: "guild-notifications",
              id: "".concat(t),
              label: n,
              action: () => h({
                message_notifications: t
              }, u.UE.notifications(t)),
              checked: t === f
            }, t)
          })
        }), null != y && (0, i.jsx)(l.kSQ, {
          children: y
        }), (0, i.jsxs)(l.kSQ, {
          children: [(0, i.jsx)(l.S89, {
            id: "suppress-everyone",
            label: g.intl.format(g.t.OWiWAg, {}),
            action: () => h({
              suppress_everyone: !t
            }, u.UE.suppressEveryone(!t)),
            checked: t
          }), (0, i.jsx)(l.S89, {
            id: "suppress-roles",
            label: g.intl.string(g.t["O/QdoK"]),
            action: () => h({
              suppress_roles: !n
            }, u.UE.suppressRoles(!n)),
            checked: n
          }), (0, i.jsx)(l.S89, {
            id: "suppress-highlights",
            label: g.intl.string(g.t.gPuteH),
            action: () => {
              h({
                notify_highlights: O ? d.gLR.ENABLED : d.gLR.DISABLED
              }, u.UE.highlights(O))
            },
            checked: O
          }), E]
        }), (0, i.jsx)(l.kSQ, {
          children: (0, i.jsx)(l.S89, {
            id: "mobile-push",
            label: g.intl.string(g.t["h1DL6+"]),
            action: () => h({
              mobile_push: !p
            }, u.UE.mobilePush(!p)),
            checked: p
          })
        })]
      })
    }(e),
    S = (0, r.e7)([c.ZP], () => c.ZP.getMessageNotifications(e.id), [e.id]),
    O = null == (p = b()) || null == (t = p.find(e => {
      let {
        setting: t
      } = e;
      return t === S
    })) ? true : t.label,
    E = (0, a.U)();
  return null != f ? (0, i.jsx)(l.sNh, {
    id: "guild-notifications",
    label: (0, i.jsxs)(i.Fragment, {
      children: [E, g.intl.string(g.t.h850Sk)]
    }),
    subtext: O,
    action: () => (0, l.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("5863"), n.e("52337")]).then(n.bind(n, 751212));
      return n => {
        var r, l;
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
        }({}, n), l = l = {
          guildId: e.id
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }
    }),
    children: f
  }) : null
}