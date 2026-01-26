/** Chunk was on 97887 **/
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
  } = e, A = (0, f.A)(), [y, _] = r.useState(false), [O, j] = r.useState(false), [v, x] = r.useState(false), [E, C] = r.useState(false), [S, I] = r.useState(false), N = y || O || v, T = r.useCallback(async e => {
    if (!N) {
      _(true);
      try {
        await (0, p.RK)(e), C(true), null == n || n()
      } catch (t) {
        let e = new s.LG(t);
        null == b || b(e)
      } finally {
        _(false)
      }
    }
  }, [N, n, b]), P = r.useCallback(async e => {
    if (!N) {
      j(true);
      try {
        await (0, p.UK)(e), I(true), null == l || l()
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
      for (let e of t) await (0, p.ST)(e);
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
      x(true);
      try {
        await (0, c.A)(t.id, t.getAvatarURL(true, 80), {
          withMutualGuilds: true,
          withMutualFriendsCount: true
        })
      } catch (e) {} finally {
        x(false)
      }
    }
    let n = async () => {
      var n;
      let r = null != t ? null == (n = o.A.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
      d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
        action: g.LD.ACCEPT_CONFIRMATION_PROMPT,
        channel_id: e,
        mutual_guild_ids: null != r ? r : [],
        other_user_id: null == t ? true : t.id
      }), await T(e)
    };
    (0, h.o)({
      channelId: e,
      onConfirm: n,
      onCancel: () => {
        var n;
        let r = null != t ? null == (n = o.A.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
        d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
          action: g.LD.DISMISS_CONFIRMATION_PROMPT,
          channel_id: e,
          mutual_guild_ids: null != r ? r : [],
          other_user_id: null == t ? true : t.id
        })
      }
    })
  }, [T, N, t]), D = r.useCallback((e, t, n) => {
    let r = (r, l) => {
        l && u.WY.updateSetting(r), r && null != t && (0, a.tJ)(t), T(e.id), d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
          action: g.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id,
          is_dont_show_again_checked: l,
          non_spam_retraining_opt_in: r
        }), null != n && n()
      },
      l = u.WY.getSetting();
    null == l ? (0, h.v)({
      channel: e,
      onConfirm: r,
      onCancel: () => {
        d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
          action: g.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
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
    isRejectLoading: O,
    isUserProfileLoading: v,
    isOptimisticAccepted: E,
    isOptimisticRejected: S
  }
}