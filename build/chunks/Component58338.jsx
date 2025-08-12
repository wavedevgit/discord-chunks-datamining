/** Chunk was on 33213 **/
/** chunk id: 58338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk113449 = require("./113449.js"),
  Chunk748756 = require("./748756.js"),
  Chunk686660 = require("./686660.js"),
  Chunk122074 = require("./122074.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let t = (0, d.ng)(e, true),
    E = (0, d.U)();
  return (0, i.jsxs)(s.sNh, {
    id: "notification",
    label: (0, i.jsxs)(i.Fragment, {
      children: [E, O.intl.string(O.t.HcoRu7)]
    }),
    action: () => {
      (0, s.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("5863"), n.e("28965")]).then(n.bind(n, 751212));
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
            guildId: e
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
      })
    },
    children: [function(e) {
      let [t, n] = r.useState(false), [d, E] = r.useState(false), h = (0, l.e7)([g.ZP], () => g.ZP.getGuildUnreadSetting(e)), y = (0, l.e7)([g.ZP], () => g.ZP.getMessageNotifications(e)), j = d ? u.s8.CUSTOM : (0, u.gs)(h, y), _ = t => {
        E(false);
        let n = {
          message_notifications: t
        };
        t === p.bL.ALL_MESSAGES && h !== f.i.ALL_MESSAGES && (n.flags = (0, a.Q4)(g.ZP.getGuildFlags(e), S.vc.UNREADS_ALL_MESSAGES)), o.Z.updateGuildNotificationSettings(e, n, b.UE.notifications(t))
      }, N = t => {
        E(false);
        let n = g.ZP.getGuildFlags(e);
        o.Z.updateGuildNotificationSettings(e, {
          flags: (0, a.Q4)(n, t === f.i.ALL_MESSAGES ? S.vc.UNREADS_ALL_MESSAGES : S.vc.UNREADS_ONLY_MENTIONS)
        }, b.UE.unreads(t))
      };
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(s.kSQ, {
          children: [(0, i.jsx)(s.k5B, {
            id: "everything",
            group: "notification-preset",
            checked: j === u.s8.ALL_MESSAGES,
            label: O.intl.string(O.t.hZrr6u),
            action: () => ((0, c.V)(e, u.s8.ALL_MESSAGES), E(false))
          }), (0, i.jsx)(s.k5B, {
            id: "essentials",
            group: "notification-preset",
            checked: j === u.s8.MENTIONS,
            label: O.intl.string(O.t.y59NJi),
            action: () => ((0, c.V)(e, u.s8.MENTIONS), E(false))
          }), (0, i.jsx)(s.k5B, {
            id: "nothing",
            group: "notification-preset",
            checked: j === u.s8.NOTHING,
            label: O.intl.string(O.t["pGn/bG"]),
            action: () => ((0, c.V)(e, u.s8.NOTHING), E(false))
          }), (0, i.jsx)(s.k5B, {
            id: "custom",
            group: "notification-preset",
            checked: j === u.s8.CUSTOM,
            action: () => (n(true), E(true)),
            label: O.intl.string(O.t["32yow8"])
          })]
        }), (j === u.s8.CUSTOM || t) && (0, i.jsxs)(s.kSQ, {
          children: [(0, i.jsxs)(s.sNh, {
            id: "unread_setting",
            label: "Unread Badges",
            children: [(0, i.jsx)(s.k5B, {
              id: "unread_setting_all_messages",
              group: "unread_setting",
              checked: h === f.i.ALL_MESSAGES,
              label: O.intl.string(O.t["HVah//"]),
              action: () => N(f.i.ALL_MESSAGES)
            }), (0, i.jsx)(s.k5B, {
              id: "unread_setting_mention_only",
              group: "unread_setting",
              checked: h === f.i.ONLY_MENTIONS,
              label: O.intl.string(O.t["tu+ZWF"]),
              action: () => N(f.i.ONLY_MENTIONS),
              disabled: h !== f.i.ONLY_MENTIONS && y === p.bL.ALL_MESSAGES,
              subtext: h !== f.i.ONLY_MENTIONS && y === p.bL.ALL_MESSAGES ? O.intl.string(O.t.eP8yWV) : true
            })]
          }, "unread_setting"), (0, i.jsxs)(s.sNh, {
            id: "push_settings",
            label: O.intl.string(O.t.HcoRu7),
            children: [(0, i.jsx)(s.k5B, {
              group: "notification-preset",
              id: "push_settings_everything",
              label: O.intl.string(O.t["HVah//"]),
              checked: y === p.bL.ALL_MESSAGES,
              action: () => _(p.bL.ALL_MESSAGES),
              subtext: h !== f.i.ALL_MESSAGES && y !== p.bL.ALL_MESSAGES ? O.intl.string(O.t.idXSbG) : true
            }), (0, i.jsx)(s.k5B, {
              group: "notification-preset",
              id: "push_settings_everything_mention",
              checked: y === p.bL.ONLY_MENTIONS,
              label: O.intl.string(O.t["tu+ZWF"]),
              action: () => _(p.bL.ONLY_MENTIONS)
            }), (0, i.jsx)(s.k5B, {
              group: "notification-preset",
              id: "push_settings_everything_nothing",
              label: O.intl.string(O.t.X4wWUl),
              checked: y === p.bL.NO_MESSAGES,
              action: () => _(p.bL.NO_MESSAGES)
            })]
          }, "push_settings")]
        })]
      })
    }(e), null != t && (0, i.jsx)(s.kSQ, {
      children: t
    }), function(e) {
      let t = (0, l.cj)([g.ZP], () => ({
          highligths: g.ZP.getNotifyHighlights(e),
          mobilePush: g.ZP.isMobilePushEnabled(e),
          suppressRoles: g.ZP.isSuppressRolesEnabled(e),
          suppressEveryone: g.ZP.isSuppressEveryoneEnabled(e),
          muteScheduledEvents: g.ZP.isMuteScheduledEventsEnabled(e)
        })),
        n = o.Z.updateGuildNotificationSettings;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(s.kSQ, {
          children: [(0, i.jsx)(s.S89, {
            id: "mention",
            checked: t.suppressEveryone,
            label: O.intl.format(O.t.OWiWAg, {}),
            action: () => n(e, {
              suppress_everyone: !t.suppressEveryone
            }, b.UE.suppressEveryone(!t.suppressEveryone))
          }), (0, i.jsx)(s.S89, {
            id: "roles",
            checked: t.suppressRoles,
            label: O.intl.string(O.t["O/QdoK"]),
            action: () => n(e, {
              suppress_roles: !t.suppressRoles
            }, b.UE.suppressRoles(!t.suppressRoles))
          }), (0, i.jsx)(s.S89, {
            id: "hightlight",
            label: O.intl.string(O.t.gPuteH),
            checked: t.highligths === p.gLR.ENABLED,
            action: () => n(e, {
              notify_highlights: t.highligths === p.gLR.ENABLED ? p.gLR.DISABLED : p.gLR.ENABLED
            }, b.UE.highlights(t.highligths !== p.gLR.ENABLED))
          })]
        }), (0, i.jsxs)(s.kSQ, {
          children: [(0, i.jsx)(s.S89, {
            id: "event",
            checked: t.muteScheduledEvents,
            label: O.intl.string(O.t.ONG3Y2),
            action: () => n(e, {
              mute_scheduled_events: !t.muteScheduledEvents
            }, b.UE.mutedEvents(!t.muteScheduledEvents))
          }), (0, i.jsx)(s.S89, {
            id: "mobile_push",
            checked: t.mobilePush,
            label: O.intl.string(O.t["h1DL6+"]),
            action: () => n(e, {
              mobile_push: !t.mobilePush
            }, b.UE.mobilePush(!t.mobilePush))
          })]
        })]
      })
    }(e)]
  })
}