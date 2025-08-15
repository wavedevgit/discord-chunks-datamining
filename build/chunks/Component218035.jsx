/** Chunk was on 68294 **/
/** chunk id: 218035, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  c: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk729052 = require("./729052.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(t) {
  let e = arguments.length > 1 && true !== arguments[1] && arguments[1];
  switch (t.type) {
    case c.d4z.GUILD_VOICE:
      return e ? [{
        setting: c.bL.NULL,
        label: null != t.parent_id ? u.intl.string(u.t.wlrV1d) : u.intl.string(u.t["1Wn2Mz"])
      }, {
        setting: c.bL.ALL_MESSAGES,
        label: u.intl.string(u.t["9sGJkp"])
      }, {
        setting: c.bL.ONLY_MENTIONS,
        label: u.intl.format(u.t.cpcXvb, {})
      }, {
        setting: c.bL.NO_MESSAGES,
        label: u.intl.string(u.t.CtVGyc)
      }] : null;
    case c.d4z.GUILD_STAGE_VOICE:
      return [{
        setting: c.bL.NULL,
        label: null != t.parent_id ? u.intl.string(u.t.wlrV1d) : u.intl.string(u.t["1Wn2Mz"])
      }, {
        setting: c.bL.ONLY_MENTIONS,
        label: u.intl.string(u.t["BENn//"])
      }, {
        setting: c.bL.NO_MESSAGES,
        label: u.intl.string(u.t.CtVGyc)
      }];
    default:
      return [{
        setting: c.bL.NULL,
        label: null != t.parent_id ? u.intl.string(u.t.wlrV1d) : u.intl.string(u.t["1Wn2Mz"])
      }, {
        setting: c.bL.ALL_MESSAGES,
        label: u.intl.string(u.t["n/bTaW"])
      }, {
        setting: c.bL.ONLY_MENTIONS,
        label: u.intl.format(u.t.L2hmY2, {})
      }, {
        setting: c.bL.NO_MESSAGES,
        label: u.intl.string(u.t.CtVGyc)
      }]
  }
}

function _(t) {
  let e = t.getGuildId(),
    n = t.id,
    _ = (0, l.e7)([o.ZP], () => {
      let n = c.bL.NULL;
      return null != t.parent_id && (n = o.ZP.getChannelMessageNotifications(e, t.parent_id)), n !== c.bL.NULL ? n : o.ZP.getMessageNotifications(e)
    }, [e, t.parent_id]),
    f = (0, l.e7)([o.ZP], () => o.ZP.getNewForumThreadsCreated(t)),
    S = (0, l.e7)([o.ZP], () => o.ZP.getChannelOverrides(e)[n], [e, n]),
    E = null == S ? c.bL.NULL : S.message_notifications,
    h = (0, r.p2)(t),
    N = g(t, h);
  return null == N ? null : (0, i.jsxs)(i.Fragment, {
    children: [t.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.S89, {
        id: "new-forum-threads-created",
        label: u.intl.string(u.t.Rkgjpq),
        checked: f,
        action: () => s.Z.setForumThreadsCreated(t, !f)
      }), (0, i.jsx)(a.Clw, {})]
    }) : null, N.map(l => {
      let {
        setting: r,
        label: o
      } = l;
      return (0, i.jsx)(a.k5B, {
        group: "channel-notifications",
        id: "".concat(r),
        label: o,
        subtext: r === c.bL.NULL ? function(t, e) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          switch (t) {
            case c.bL.ALL_MESSAGES:
              return e.type === c.d4z.GUILD_VOICE && n ? u.intl.string(u.t["9sGJkp"]) : u.intl.string(u.t["n/bTaW"]);
            case c.bL.ONLY_MENTIONS:
              return u.intl.format(u.t.L2hmY2, {});
            case c.bL.NO_MESSAGES:
              return u.intl.string(u.t.CtVGyc);
            case c.bL.NULL:
            default:
              return
          }
        }(_, t, h) : true,
        action: () => {
          null != e && s.Z.updateChannelOverrideSettings(e, n, {
            message_notifications: r
          }, d.UE.notifications(r))
        },
        checked: r === E
      }, r)
    })]
  })
}

function f(t) {
  var e, n;
  let s = _(t),
    d = (0, l.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(t), [t]),
    f = (0, l.e7)([o.ZP], () => o.ZP.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
    S = null == f ? c.bL.NULL : f.message_notifications,
    E = (0, r.p2)(t),
    h = S === c.bL.NULL && t.isGuildStageVoice() ? u.intl.format(u.t.L2hmY2, {}) : null == (n = g(t, E)) || null == (e = n.find(t => {
      let {
        setting: e
      } = t;
      return e === d
    })) ? true : e.label;
  return null != s ? (0, i.jsx)(a.sNh, {
    id: "channel-notifications",
    label: u.intl.string(u.t.h850Sk),
    subtext: h,
    children: s
  }) : null
}