/** Chunk was on 13873 **/
/** chunk id: 486622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => b
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk707019 = require("./707019.js"),
  l = require.n(Chunk707019),
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

function b(e) {
  let {
    user: t,
    onAcceptSuccess: n,
    onRejectSuccess: i,
    onError: b
  } = e, _ = (0, h.Z)(), [y, C] = r.useState(false), [v, O] = r.useState(false), [x, E] = r.useState(false), [j, S] = r.useState(false), [P, I] = r.useState(false), Z = y || v || x, T = r.useCallback(async e => {
    if (!Z) {
      C(true);
      try {
        await (0, p.e4)(e), S(true), null == n || n()
      } catch (t) {
        let e = new a.Hx(t);
        null == b || b(e)
      } finally {
        C(false)
      }
    }
  }, [Z, n, b]), N = r.useCallback(async e => {
    if (!Z) {
      O(true);
      try {
        await (0, p.gN)(e), I(true), null == i || i()
      } catch (t) {
        let e = new a.Hx(t);
        null == b || b(e)
      } finally {
        O(false)
      }
    }
  }, [Z, i, b]), A = r.useCallback(async e => {
    if (Z) return;
    O(true);
    let t = l()(e, m.t$);
    try {
      for (let e of t) await (0, p.r_)(e);
      I(true), null == i || i()
    } catch (t) {
      let e = new a.Hx(t);
      null == b || b(e)
    } finally {
      O(false)
    }
  }, [Z, i, b]), w = r.useCallback(async e => {
    if (Z) return;
    if (null != t && null == s.Z.getMutualGuilds(t.id)) {
      E(true);
      try {
        await (0, c.Z)(t.id, t.getAvatarURL(true, 80), {
          withMutualGuilds: true,
          withMutualFriendsCount: true
        })
      } catch (e) {} finally {
        E(false)
      }
    }
    let n = async () => {
      var n;
      let r = null != t ? null == (n = s.Z.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
      d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
        action: m.cl.ACCEPT_CONFIRMATION_PROMPT,
        channel_id: e,
        mutual_guild_ids: null != r ? r : [],
        other_user_id: null == t ? true : t.id
      }), await T(e)
    };
    (0, f.H)({
      channelId: e,
      onConfirm: n,
      onCancel: () => {
        var n;
        let r = null != t ? null == (n = s.Z.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
          action: m.cl.DISMISS_CONFIRMATION_PROMPT,
          channel_id: e,
          mutual_guild_ids: null != r ? r : [],
          other_user_id: null == t ? true : t.id
        })
      }
    })
  }, [T, Z, t]), M = r.useCallback((e, t, n) => {
    let r = (r, i) => {
        i && u.kJ.updateSetting(r), r && null != t && (0, o.zd)(t), T(e.id), d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
          action: m.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id,
          is_dont_show_again_checked: i,
          non_spam_retraining_opt_in: r
        }), null != n && n()
      },
      i = u.kJ.getSetting();
    null == i ? (0, f.V)({
      channel: e,
      onConfirm: r,
      onCancel: () => {
        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
          action: m.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id
        })
      }
    }) : r(i)
  }, [T]);
  return {
    acceptMessageRequest: _ ? w : T,
    rejectMessageRequest: N,
    rejectAll: A,
    markAsNotSpam: M,
    isAcceptLoading: y,
    isRejectLoading: v,
    isUserProfileLoading: x,
    isOptimisticAccepted: j,
    isOptimisticRejected: P
  }
}