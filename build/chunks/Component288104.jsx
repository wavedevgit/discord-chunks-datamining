/** Chunk was on 21420 **/
/** chunk id: 288104, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  A: () => S,
  b: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk718194 = require("./718194.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(t) {
  let i = arguments.length > 1 && true !== arguments[1] && arguments[1];
  switch (t.type) {
    case g.rbe.GUILD_VOICE:
      return i ? [{
        setting: g.orn.NULL,
        label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"])
      }, {
        setting: g.orn.ALL_MESSAGES,
        label: c.intl.string(c.t["9sGJkt"])
      }, {
        setting: g.orn.ONLY_MENTIONS,
        label: c.intl.format(c.t.cpcXvW, {})
      }, {
        setting: g.orn.NO_MESSAGES,
        label: c.intl.string(c.t.CtVGyQ)
      }] : null;
    case g.rbe.GUILD_STAGE_VOICE:
      return [{
        setting: g.orn.NULL,
        label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"])
      }, {
        setting: g.orn.ONLY_MENTIONS,
        label: c.intl.string(c.t["BENn/6"])
      }, {
        setting: g.orn.NO_MESSAGES,
        label: c.intl.string(c.t.CtVGyQ)
      }];
    default:
      return [{
        setting: g.orn.NULL,
        label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"])
      }, {
        setting: g.orn.ALL_MESSAGES,
        label: c.intl.string(c.t["n/bTaY"])
      }, {
        setting: g.orn.ONLY_MENTIONS,
        label: c.intl.format(c.t.L2hmYy, {})
      }, {
        setting: g.orn.NO_MESSAGES,
        label: c.intl.string(c.t.CtVGyQ)
      }]
  }
}

function _(t) {
  let i = t.getGuildId(),
    n = t.id,
    _ = (0, r.bG)([o.Ay], () => {
      let n = g.orn.NULL;
      return null != t.parent_id && (n = o.Ay.getChannelMessageNotifications(i, t.parent_id)), n !== g.orn.NULL ? n : o.Ay.getMessageNotifications(i)
    }, [i, t.parent_id]),
    S = (0, r.bG)([o.Ay], () => o.Ay.getNewForumThreadsCreated(t)),
    A = (0, r.bG)([o.Ay], () => o.Ay.getChannelOverrides(i)[n], [i, n]),
    N = null == A ? g.orn.NULL : A.message_notifications,
    E = (0, a.YK)(t),
    h = u(t, E);
  return null == h ? null : (0, e.jsxs)(e.Fragment, {
    children: [t.isForumLikeChannel() ? (0, e.jsxs)(e.Fragment, {
      children: [(0, e.jsx)(l.sLh, {
        id: "new-forum-threads-created",
        label: c.intl.string(c.t.Rkgjph),
        checked: S,
        action: () => s.A.setForumThreadsCreated(t, !S)
      }), (0, e.jsx)(l.bXX, {})]
    }) : null, h.map(r => {
      let {
        setting: a,
        label: o
      } = r;
      return null != o && (0, e.jsx)(l.iDA, {
        group: "channel-notifications",
        id: "".concat(a),
        label: o,
        subtext: a === g.orn.NULL ? function(t, i) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          switch (t) {
            case g.orn.ALL_MESSAGES:
              return i.type === g.rbe.GUILD_VOICE && n ? c.intl.string(c.t["9sGJkt"]) : c.intl.string(c.t["n/bTaY"]);
            case g.orn.ONLY_MENTIONS:
              return c.intl.format(c.t.L2hmYy, {});
            case g.orn.NO_MESSAGES:
              return c.intl.string(c.t.CtVGyQ);
            case g.orn.NULL:
            default:
              return
          }
        }(_, t, E) : true,
        action: () => {
          null != i && s.A.updateChannelOverrideSettings(i, n, {
            message_notifications: a
          }, d.G_.notifications(a))
        },
        checked: a === N
      }, a)
    })]
  })
}

function S(t) {
  var i, n;
  let s = _(t),
    d = (0, r.bG)([o.Ay], () => o.Ay.resolvedMessageNotifications(t), [t]),
    S = (0, r.bG)([o.Ay], () => o.Ay.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
    A = null == S ? g.orn.NULL : S.message_notifications,
    N = (0, a.YK)(t),
    E = A === g.orn.NULL && t.isGuildStageVoice() ? c.intl.format(c.t.L2hmYy, {}) : null == (n = u(t, N)) || null == (i = n.find(t => {
      let {
        setting: i
      } = t;
      return i === d
    })) ? true : i.label;
  return null != s ? (0, e.jsx)(l.Drp, {
    id: "channel-notifications",
    label: c.intl.string(c.t.h850Ss),
    subtext: E,
    children: s
  }) : null
}