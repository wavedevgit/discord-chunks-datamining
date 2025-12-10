/** Chunk was on 7891 **/
/** chunk id: 486622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => b
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
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
    onRejectSuccess: r,
    onError: b
  } = e, C = (0, f.Z)(), [y, v] = i.useState(false), [_, O] = i.useState(false), [x, E] = i.useState(false), [j, S] = i.useState(false), [P, I] = i.useState(false), Z = y || _ || x, T = i.useCallback(async e => {
    if (!Z) {
      v(true);
      try {
        await (0, p.e4)(e), S(true), null == n || n()
      } catch (t) {
        let e = new a.Hx(t);
        null == b || b(e)
      } finally {
        v(false)
      }
    }
  }, [Z, n, b]), N = i.useCallback(async e => {
    if (!Z) {
      O(true);
      try {
        await (0, p.gN)(e), I(true), null == r || r()
      } catch (t) {
        let e = new a.Hx(t);
        null == b || b(e)
      } finally {
        O(false)
      }
    }
  }, [Z, r, b]), A = i.useCallback(async e => {
    if (Z) return;
    O(true);
    let t = l()(e, m.t$);
    try {
      for (let e of t) await (0, p.r_)(e);
      I(true), null == r || r()
    } catch (t) {
      let e = new a.Hx(t);
      null == b || b(e)
    } finally {
      O(false)
    }
  }, [Z, r, b]), w = i.useCallback(async e => {
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
      let i = null != t ? null == (n = s.Z.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
      d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
        action: m.cl.ACCEPT_CONFIRMATION_PROMPT,
        channel_id: e,
        mutual_guild_ids: null != i ? i : [],
        other_user_id: null == t ? true : t.id
      }), await T(e)
    };
    (0, h.H)({
      channelId: e,
      onConfirm: n,
      onCancel: () => {
        var n;
        let i = null != t ? null == (n = s.Z.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
          action: m.cl.DISMISS_CONFIRMATION_PROMPT,
          channel_id: e,
          mutual_guild_ids: null != i ? i : [],
          other_user_id: null == t ? true : t.id
        })
      }
    })
  }, [T, Z, t]), M = i.useCallback((e, t, n) => {
    let i = (i, r) => {
        r && u.kJ.updateSetting(i), i && null != t && (0, o.zd)(t), T(e.id), d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
          action: m.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id,
          is_dont_show_again_checked: r,
          non_spam_retraining_opt_in: i
        }), null != n && n()
      },
      r = u.kJ.getSetting();
    null == r ? (0, h.V)({
      channel: e,
      onConfirm: i,
      onCancel: () => {
        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
          action: m.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id
        })
      }
    }) : i(r)
  }, [T]);
  return {
    acceptMessageRequest: C ? w : T,
    rejectMessageRequest: N,
    rejectAll: A,
    markAsNotSpam: M,
    isAcceptLoading: y,
    isRejectLoading: _,
    isUserProfileLoading: x,
    isOptimisticAccepted: j,
    isOptimisticRejected: P
  }
}