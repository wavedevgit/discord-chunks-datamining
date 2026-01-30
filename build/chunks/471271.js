/** Chunk was on 1113 **/
/** chunk id: 471271, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => b
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk424266 = require("./424266.js"),
  i = require.n(Chunk424266),
  Chunk198982 = require("./198982.js"),
  Chunk928658 = require("./928658.js"),
  Chunk622543 = require("./622543.js"),
  Chunk576622 = require("./576622.js"),
  Chunk253932 = require("./253932.js"),
  Chunk954571 = require("./954571.js"),
  Chunk966107 = require("./966107.js"),
  Chunk570658 = require("./570658.jsx"),
  Chunk209079 = require("./209079.js"),
  Chunk687599 = require("./687599.js"),
  Chunk652215 = require("./652215.js");

function b(e) {
  let {
    user: t,
    onAcceptSuccess: n,
    onRejectSuccess: l,
    onError: b
  } = e, A = (0, g.A)(), [y, O] = r.useState(false), [_, j] = r.useState(false), [x, v] = r.useState(false), [E, C] = r.useState(false), [S, I] = r.useState(false), N = y || _ || x, T = r.useCallback(async e => {
    if (!N) {
      O(true);
      try {
        await (0, h.RK)(e), C(true), null == n || n()
      } catch (t) {
        let e = new s.LG(t);
        null == b || b(e)
      } finally {
        O(false)
      }
    }
  }, [N, n, b]), P = r.useCallback(async e => {
    if (!N) {
      j(true);
      try {
        await (0, h.UK)(e), I(true), null == l || l()
      } catch (t) {
        let e = new s.LG(t);
        null == b || b(e)
      } finally {
        j(false)
      }
    }
  }, [N, l, b]), w = r.useCallback(async e => {
    if (N) return;
    j(true);
    let t = i()(e, 50);
    try {
      for (let e of t) await (0, h.ST)(e);
      I(true), null == l || l()
    } catch (t) {
      let e = new s.LG(t);
      null == b || b(e)
    } finally {
      j(false)
    }
  }, [N, l, b]), R = r.useCallback(async e => {
    if (N) return;
    if (null != t && null == o.A.getMutualGuilds(t.id)) {
      v(true);
      try {
        await (0, c.A)(t.id, t.getAvatarURL(true, 80), {
          withMutualGuilds: true,
          withMutualFriendsCount: true
        })
      } catch (e) {} finally {
        v(false)
      }
    }
    let n = async () => {
      var n;
      let r = null != t ? null == (n = o.A.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
      d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
        action: f.LD.ACCEPT_CONFIRMATION_PROMPT,
        channel_id: e,
        mutual_guild_ids: null != r ? r : [],
        other_user_id: null == t ? true : t.id
      }), await T(e)
    };
    (0, p.o)({
      channelId: e,
      onConfirm: n,
      onCancel: () => {
        var n;
        let r = null != t ? null == (n = o.A.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
        d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
          action: f.LD.DISMISS_CONFIRMATION_PROMPT,
          channel_id: e,
          mutual_guild_ids: null != r ? r : [],
          other_user_id: null == t ? true : t.id
        })
      }
    })
  }, [T, N, t]), D = r.useCallback((e, t, n) => {
    let r = (r, l) => {
        l && u.WY.updateSetting(r), r && null != t && (0, a.tJ)(t), T(e.id), d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
          action: f.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id,
          is_dont_show_again_checked: l,
          non_spam_retraining_opt_in: r
        }), null != n && n()
      },
      l = u.WY.getSetting();
    null == l ? (0, p.v)({
      channel: e,
      onConfirm: r,
      onCancel: () => {
        d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
          action: f.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id
        })
      }
    }) : r(l)
  }, [T]);
  return {
    acceptMessageRequest: A ? R : T,
    rejectMessageRequest: P,
    rejectAll: w,
    markAsNotSpam: D,
    isAcceptLoading: y,
    isRejectLoading: _,
    isUserProfileLoading: x,
    isOptimisticAccepted: E,
    isOptimisticRejected: S
  }
}