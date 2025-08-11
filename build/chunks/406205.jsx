/** Chunk was on 5863 **/
/** chunk id: 406205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk113449 = require("./113449.js"),
  Chunk748756 = require("./748756.js"),
  Chunk732760 = require("./732760.js"),
  Chunk686660 = require("./686660.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77851 = require("./77851.js"),
  Chunk650455 = require("./650455.js");

function b(e) {
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
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = () => [{
  value: Chunk686660.s8.ALL_MESSAGES,
  name: Chunk388032.intl.string(Chunk388032.t.hZrr6u)
}, {
  value: Chunk686660.s8.MENTIONS,
  name: Chunk388032.intl.string(Chunk388032.t.y59NJi)
}, {
  value: Chunk686660.s8.NOTHING,
  name: Chunk388032.intl.string(Chunk388032.t["pGn/bG"])
}, {
  value: Chunk686660.s8.CUSTOM,
  name: Chunk388032.intl.string(Chunk388032.t["32yow8"])
}];

function E(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([c.ZP], () => c.ZP.getGuildFlags(t)), l = (0, a.e7)([c.ZP], () => {
    let e = c.ZP.getGuildUnreadSetting(t),
      n = c.ZP.getMessageNotifications(t);
    return e === v.i.UNSET ? n === p.bL.ALL_MESSAGES ? v.i.ALL_MESSAGES : v.i.ONLY_MENTIONS : e
  }), r = (0, a.e7)([c.ZP], () => c.ZP.getMessageNotifications(t)), [f, E] = (0, s.useState)(false), L = f ? x.s8.CUSTOM : (0, x.gs)(l, r), T = e => {
    if (e === x.s8.CUSTOM) return void E(true);
    E(false), (0, g.V)(t, e)
  };
  return <div>{<div className={N.segmentedControlsContainer}><o.sY7 value={L} options={O()} onChange={e => {
          let {
            value: t
          } = e;
          return T(t)
        }} className={N.segmentedControl} look={"pill"} /></div>}{<div className={N.presetSeparator} />}{<div className={N.customPresetsContainer}>{<div className={N.grid}>{<Z unreadSetting={l} />}{<_ notificationSetting={r} />}</div>}{<div className={N.grid}>{<div>{<o.Text variant={"text-sm/semibold"} color={"header-primary"}>{S.intl.string(S.t.Tqd1AQ)}</o.Text>}{<o.Text variant={"text-xs/medium"} color={"text-muted"}>{S.intl.string(S.t.RpQgm5)}</o.Text>}</div>}{<div>{<o.Text variant={"text-sm/semibold"} color={"header-primary"}>{S.intl.string(S.t["1m22ZG"])}</o.Text>}{<o.Text variant={"text-xs/medium"} color={"text-muted"}>{S.intl.string(S.t["4bP2ZW"])}</o.Text>}</div>}</div>}{<div className={N.grid}>{<o.q4e value={l} className={N.input} onChange={e => {
            E(false), d.Z.updateGuildNotificationSettings(t, {
              flags: (0, h.Q4)(n, e === v.i.ALL_MESSAGES ? j.vc.UNREADS_ALL_MESSAGES : j.vc.UNREADS_ONLY_MENTIONS)
            }, u.UE.unreads(e))
          }} options={(0, m.y)({
            notificationSetting: r
          })} renderOptionLabel={e => {
            let t = e.disabled && e.value === v.i.ONLY_MENTIONS && l !== v.i.ONLY_MENTIONS;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  color: e.disabled ? "text-muted" : true,
                  children: e.label
                })
              }), t && (0, i.jsx)(o.ua7, {
                text: S.intl.string(S.t.eP8yWV),
                children: e => (0, i.jsx)(o.t6m, C(b({
                  size: "custom"
                }, e), {
                  width: 20,
                  height: 20,
                  className: N.muted
                }))
              })]
            })
          }} />}{<o.q4e className={N.input} value={r} onChange={e => {
            E(false);
            let n = {
              message_notifications: e
            };
            e === p.bL.ALL_MESSAGES && l !== v.i.ALL_MESSAGES && (n.flags = (0, h.Q4)(c.ZP.getGuildFlags(t), j.vc.UNREADS_ALL_MESSAGES)), d.Z.updateGuildNotificationSettings(t, n, u.UE.notifications(e))
          }} options={(0, m.d)({
            notificationSetting: r
          })} renderOptionLabel={e => {
            let t = e.value === p.bL.ALL_MESSAGES && l !== v.i.ALL_MESSAGES && r !== p.bL.ALL_MESSAGES;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: e.label
              }), t && (0, i.jsx)(o.ua7, {
                text: S.intl.string(S.t.idXSbG),
                children: e => (0, i.jsx)(o.d3s, C(b({
                  size: "custom"
                }, e), {
                  width: 20,
                  height: 20,
                  className: N.muted
                }))
              })]
            })
          }} />}</div>}</div>}</div>
}

function Z(e) {
  let {
    unreadSetting: t
  } = e, n = [{
    badged: true,
    unread: true,
    muted: false,
    name: S.intl.string(S.t.EjLobG)
  }, {
    badged: false,
    unread: true,
    muted: true,
    name: S.intl.string(S.t.Wgpwpq)
  }, {
    badged: false,
    unread: false,
    muted: true,
    name: S.intl.string(S.t.g9VImp)
  }];
  return t === v.i.ALL_MESSAGES && (n[1].muted = false), <div className={N.channeList}>{n.map(e => (0, i.jsxs)("div", {
      className: N.channelListChannel,
      children: [(0, i.jsxs)("div", {
        className: N.channelListChannelName,
        children: [(0, i.jsx)("div", {
          className: r()(N.unread, {
            [N.hidden]: !e.unread,
            [N.unreadMuted]: e.muted
          })
        }), (0, i.jsx)(o.VL1, {
          size: "xxs",
          color: "currentColor",
          className: r()(N.channelListChannelIcon, {
            [N.muted]: e.muted
          })
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: e.muted ? "text-muted" : true,
          children: e.name
        })]
      }), (0, i.jsx)("div", {
        className: r()(N.badge, {
          [N.hidden]: !e.badged
        }),
        children: (0, i.jsx)(o.mAB, {
          count: 1
        })
      })]
    }, e.name))}</div>
}

function _(e) {
  return <div className={N.mockMessage}>{e.notificationSetting === p.bL.NO_MESSAGES && <div className={N.mockMessageDisabled} />}{<div><img className={N.mockMessageAvatar} src={f} alt={""} /></div>}{<div>{<o.Text variant={"text-xs/medium"}>{S.intl.string(S.t.qSq0tL)}</o.Text>}{e.notificationSetting === p.bL.ALL_MESSAGES && <o.Text variant={"text-xs/normal"} color={"text-muted"}>{S.intl.string(S.t.WYyzIy)}</o.Text>}{e.notificationSetting !== p.bL.ALL_MESSAGES && <i.Fragment>{<o.Text variant={"text-xs/normal"} color={"text-link"} tag={"span"}>{"@Roka"}{" "}</o.Text>}{<o.Text variant={"text-xs/normal"} color={"text-muted"} tag={"span"}>{S.intl.string(S.t.WYyzIy)}</o.Text>}</i.Fragment>}</div>}</div>
}