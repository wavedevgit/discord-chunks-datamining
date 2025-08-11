/** Chunk was on web.js **/
/** chunk id: 486622, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => g
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk707019 = require("./707019.js"),
  o = require.n(Chunk707019),
  Chunk881052 = require("./881052.js"),
  Chunk726521 = require("./726521.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823162 = require("./823162.js"),
  Chunk268699 = require("./268699.jsx"),
  Chunk9389 = require("./9389.js"),
  Chunk687683 = require("./687683.js"),
  Chunk981631 = require("./981631.js");

function g(e) {
  let {
    user: t,
    onAcceptSuccess: n,
    onRejectSuccess: i,
    onError: g
  } = e, E = (0, p.Z)(), [b, y] = r.useState(false), [O, v] = r.useState(false), [I, T] = r.useState(false), [S, A] = r.useState(false), [N, C] = r.useState(false), R = b || O || I, P = r.useCallback(async e => {
    if (!R) {
      y(true);
      try {
        await (0, f.e4)(e), A(true), null == n || n()
      } catch (t) {
        let e = new a.Hx(t);
        null == g || g(e)
      } finally {
        y(false)
      }
    }
  }, [R, n, g]), w = r.useCallback(async e => {
    if (!R) {
      v(true);
      try {
        await (0, f.gN)(e), C(true), null == i || i()
      } catch (t) {
        let e = new a.Hx(t);
        null == g || g(e)
      } finally {
        v(false)
      }
    }
  }, [R, i, g]), D = r.useCallback(async e => {
    if (R) return;
    v(true);
    let t = o()(e, h.t$);
    try {
      for (let e of t) await (0, f.r_)(e);
      C(true), null == i || i()
    } catch (t) {
      let e = new a.Hx(t);
      null == g || g(e)
    } finally {
      v(false)
    }
  }, [R, i, g]), L = r.useCallback(async e => {
    if (R) return;
    if (null != t && null == l.Z.getMutualGuilds(t.id)) {
      T(true);
      try {
        await (0, c.Z)(t.id, t.getAvatarURL(true, 80), {
          withMutualGuilds: true,
          withMutualFriendsCount: true
        })
      } catch (e) {} finally {
        T(false)
      }
    }
    let n = () => {
        var n;
        let r = null != t ? null == (n = l.Z.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
        d.default.track(m.rMx.MESSAGE_REQUEST_ACTION, {
          action: h.cl.DISMISS_CONFIRMATION_PROMPT,
          channel_id: e,
          mutual_guild_ids: null != r ? r : [],
          other_user_id: null == t ? true : t.id
        })
      },
      r = async () => {
        var n;
        let r = null != t ? null == (n = l.Z.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
        d.default.track(m.rMx.MESSAGE_REQUEST_ACTION, {
          action: h.cl.ACCEPT_CONFIRMATION_PROMPT,
          channel_id: e,
          mutual_guild_ids: null != r ? r : [],
          other_user_id: null == t ? true : t.id
        }), await P(e)
      };
    (0, _.H)({
      channelId: e,
      onConfirm: r,
      onCancel: n
    })
  }, [P, R, t]), x = r.useCallback((e, t, n) => {
    let r = (r, i) => {
        i && u.kJ.updateSetting(r), r && null != t && (0, s.zd)(t), P(e.id), d.default.track(m.rMx.MESSAGE_REQUEST_ACTION, {
          action: h.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id,
          is_dont_show_again_checked: i,
          non_spam_retraining_opt_in: r
        }), null != n && n()
      },
      i = () => {
        d.default.track(m.rMx.MESSAGE_REQUEST_ACTION, {
          action: h.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id
        })
      },
      o = u.kJ.getSetting();
    null == o ? (0, _.V)({
      channel: e,
      onConfirm: r,
      onCancel: i
    }) : r(o)
  }, [P]);
  return {
    acceptMessageRequest: E ? L : P,
    rejectMessageRequest: w,
    rejectAll: D,
    markAsNotSpam: x,
    isAcceptLoading: b,
    isRejectLoading: O,
    isUserProfileLoading: I,
    isOptimisticAccepted: S,
    isOptimisticRejected: N
  }
}