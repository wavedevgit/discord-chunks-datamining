/** Chunk was on 24358 **/
/** chunk id: 218035, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  Z: () => S,
  c: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk729052 = require("./729052.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(t) {
  let i = arguments.length > 1 && true !== arguments[1] && arguments[1];
  switch (t.type) {
    case c.d4z.GUILD_VOICE:
      return i ? [{
        setting: c.bL.NULL,
        label: null != t.parent_id ? u.intl.string(u.t.wlrV1c) : u.intl.string(u.t["1Wn2M4"])
      }, {
        setting: c.bL.ALL_MESSAGES,
        label: u.intl.string(u.t["9sGJkt"])
      }, {
        setting: c.bL.ONLY_MENTIONS,
        label: u.intl.format(u.t.cpcXvW, {})
      }, {
        setting: c.bL.NO_MESSAGES,
        label: u.intl.string(u.t.CtVGyQ)
      }] : null;
    case c.d4z.GUILD_STAGE_VOICE:
      return [{
        setting: c.bL.NULL,
        label: null != t.parent_id ? u.intl.string(u.t.wlrV1c) : u.intl.string(u.t["1Wn2M4"])
      }, {
        setting: c.bL.ONLY_MENTIONS,
        label: u.intl.string(u.t["BENn/6"])
      }, {
        setting: c.bL.NO_MESSAGES,
        label: u.intl.string(u.t.CtVGyQ)
      }];
    default:
      return [{
        setting: c.bL.NULL,
        label: null != t.parent_id ? u.intl.string(u.t.wlrV1c) : u.intl.string(u.t["1Wn2M4"])
      }, {
        setting: c.bL.ALL_MESSAGES,
        label: u.intl.string(u.t["n/bTaY"])
      }, {
        setting: c.bL.ONLY_MENTIONS,
        label: u.intl.format(u.t.L2hmYy, {})
      }, {
        setting: c.bL.NO_MESSAGES,
        label: u.intl.string(u.t.CtVGyQ)
      }]
  }
}

function _(t) {
  let i = t.getGuildId(),
    e = t.id,
    _ = (0, l.e7)([d.ZP], () => {
      let e = c.bL.NULL;
      return null != t.parent_id && (e = d.ZP.getChannelMessageNotifications(i, t.parent_id)), e !== c.bL.NULL ? e : d.ZP.getMessageNotifications(i)
    }, [i, t.parent_id]),
    S = (0, l.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(t)),
    L = (0, l.e7)([d.ZP], () => d.ZP.getChannelOverrides(i)[e], [i, e]),
    N = null == L ? c.bL.NULL : L.message_notifications,
    E = (0, r.p2)(t),
    f = g(t, E);
  return null == f ? null : (0, n.jsxs)(n.Fragment, {
    children: [t.isForumLikeChannel() ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(s.S89, {
        id: "new-forum-threads-created",
        label: u.intl.string(u.t.Rkgjph),
        checked: S,
        action: () => a.Z.setForumThreadsCreated(t, !S)
      }), (0, n.jsx)(s.Clw, {})]
    }) : null, f.map(l => {
      let {
        setting: r,
        label: d
      } = l;
      return (0, n.jsx)(s.k5B, {
        group: "channel-notifications",
        id: "".concat(r),
        label: d,
        subtext: r === c.bL.NULL ? function(t, i) {
          let e = arguments.length > 2 && true !== arguments[2] && arguments[2];
          switch (t) {
            case c.bL.ALL_MESSAGES:
              return i.type === c.d4z.GUILD_VOICE && e ? u.intl.string(u.t["9sGJkt"]) : u.intl.string(u.t["n/bTaY"]);
            case c.bL.ONLY_MENTIONS:
              return u.intl.format(u.t.L2hmYy, {});
            case c.bL.NO_MESSAGES:
              return u.intl.string(u.t.CtVGyQ);
            case c.bL.NULL:
            default:
              return
          }
        }(_, t, E) : true,
        action: () => {
          null != i && a.Z.updateChannelOverrideSettings(i, e, {
            message_notifications: r
          }, o.UE.notifications(r))
        },
        checked: r === N
      }, r)
    })]
  })
}

function S(t) {
  var i, e;
  let a = _(t),
    o = (0, l.e7)([d.ZP], () => d.ZP.resolvedMessageNotifications(t), [t]),
    S = (0, l.e7)([d.ZP], () => d.ZP.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
    L = null == S ? c.bL.NULL : S.message_notifications,
    N = (0, r.p2)(t),
    E = L === c.bL.NULL && t.isGuildStageVoice() ? u.intl.format(u.t.L2hmYy, {}) : null == (e = g(t, N)) || null == (i = e.find(t => {
      let {
        setting: i
      } = t;
      return i === o
    })) ? true : i.label;
  return null != a ? (0, n.jsx)(s.sNh, {
    id: "channel-notifications",
    label: u.intl.string(u.t.h850Ss),
    subtext: E,
    children: a
  }) : null
}