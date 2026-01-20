/** Chunk was on 68294 **/
/** chunk id: 218035, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  c: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    case u.d4z.GUILD_VOICE:
      return e ? [{
        setting: u.bL.NULL,
        label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"])
      }, {
        setting: u.bL.ALL_MESSAGES,
        label: c.intl.string(c.t["9sGJkt"])
      }, {
        setting: u.bL.ONLY_MENTIONS,
        label: c.intl.format(c.t.cpcXvW, {})
      }, {
        setting: u.bL.NO_MESSAGES,
        label: c.intl.string(c.t.CtVGyQ)
      }] : null;
    case u.d4z.GUILD_STAGE_VOICE:
      return [{
        setting: u.bL.NULL,
        label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"])
      }, {
        setting: u.bL.ONLY_MENTIONS,
        label: c.intl.string(c.t["BENn/6"])
      }, {
        setting: u.bL.NO_MESSAGES,
        label: c.intl.string(c.t.CtVGyQ)
      }];
    default:
      return [{
        setting: u.bL.NULL,
        label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"])
      }, {
        setting: u.bL.ALL_MESSAGES,
        label: c.intl.string(c.t["n/bTaY"])
      }, {
        setting: u.bL.ONLY_MENTIONS,
        label: c.intl.format(c.t.L2hmYy, {})
      }, {
        setting: u.bL.NO_MESSAGES,
        label: c.intl.string(c.t.CtVGyQ)
      }]
  }
}

function _(t) {
  let e = t.getGuildId(),
    n = t.id,
    _ = (0, l.e7)([o.ZP], () => {
      let n = u.bL.NULL;
      return null != t.parent_id && (n = o.ZP.getChannelMessageNotifications(e, t.parent_id)), n !== u.bL.NULL ? n : o.ZP.getMessageNotifications(e)
    }, [e, t.parent_id]),
    f = (0, l.e7)([o.ZP], () => o.ZP.getNewForumThreadsCreated(t)),
    S = (0, l.e7)([o.ZP], () => o.ZP.getChannelOverrides(e)[n], [e, n]),
    E = null == S ? u.bL.NULL : S.message_notifications,
    h = (0, r.p2)(t),
    N = g(t, h);
  return null == N ? null : (0, i.jsxs)(i.Fragment, {
    children: [t.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.S89, {
        id: "new-forum-threads-created",
        label: c.intl.string(c.t.Rkgjph),
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
        subtext: r === u.bL.NULL ? function(t, e) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          switch (t) {
            case u.bL.ALL_MESSAGES:
              return e.type === u.d4z.GUILD_VOICE && n ? c.intl.string(c.t["9sGJkt"]) : c.intl.string(c.t["n/bTaY"]);
            case u.bL.ONLY_MENTIONS:
              return c.intl.format(c.t.L2hmYy, {});
            case u.bL.NO_MESSAGES:
              return c.intl.string(c.t.CtVGyQ);
            case u.bL.NULL:
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
    S = null == f ? u.bL.NULL : f.message_notifications,
    E = (0, r.p2)(t),
    h = S === u.bL.NULL && t.isGuildStageVoice() ? c.intl.format(c.t.L2hmYy, {}) : null == (n = g(t, E)) || null == (e = n.find(t => {
      let {
        setting: e
      } = t;
      return e === d
    })) ? true : e.label;
  return null != s ? (0, i.jsx)(a.sNh, {
    id: "channel-notifications",
    label: c.intl.string(c.t.h850Ss),
    subtext: h,
    children: s
  }) : null
}