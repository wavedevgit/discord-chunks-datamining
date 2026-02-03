/** Chunk was on 61344 **/
/** chunk id: 471271, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => A
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

function A(e) {
  let {
    user: t,
    onAcceptSuccess: n,
    onRejectSuccess: r,
    onError: A
  } = e, b = (0, f.A)(), [_, y] = l.useState(false), [v, E] = l.useState(false), [O, C] = l.useState(false), [S, x] = l.useState(false), [j, I] = l.useState(false), T = _ || v || O, N = l.useCallback(async e => {
    if (!T) {
      y(true);
      try {
        await (0, h.RK)(e), x(true), null == n || n()
      } catch (t) {
        let e = new a.LG(t);
        null == A || A(e)
      } finally {
        y(false)
      }
    }
  }, [T, n, A]), P = l.useCallback(async e => {
    if (!T) {
      E(true);
      try {
        await (0, h.UK)(e), I(true), null == r || r()
      } catch (t) {
        let e = new a.LG(t);
        null == A || A(e)
      } finally {
        E(false)
      }
    }
  }, [T, r, A]), w = l.useCallback(async e => {
    if (T) return;
    E(true);
    let t = i()(e, 50);
    try {
      for (let e of t) await (0, h.ST)(e);
      I(true), null == r || r()
    } catch (t) {
      let e = new a.LG(t);
      null == A || A(e)
    } finally {
      E(false)
    }
  }, [T, r, A]), R = l.useCallback(async e => {
    if (T) return;
    if (null != t && null == o.A.getMutualGuilds(t.id)) {
      C(true);
      try {
        await (0, c.A)(t.id, t.getAvatarURL(true, 80), {
          withMutualGuilds: true,
          withMutualFriendsCount: true
        })
      } catch (e) {} finally {
        C(false)
      }
    }
    let n = async () => {
      var n;
      let l = null != t ? null == (n = o.A.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
      d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
        action: m.LD.ACCEPT_CONFIRMATION_PROMPT,
        channel_id: e,
        mutual_guild_ids: null != l ? l : [],
        other_user_id: null == t ? true : t.id
      }), await N(e)
    };
    (0, p.o)({
      channelId: e,
      onConfirm: n,
      onCancel: () => {
        var n;
        let l = null != t ? null == (n = o.A.getMutualGuilds(t.id)) ? true : n.map(e => e.guild.id) : [];
        d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
          action: m.LD.DISMISS_CONFIRMATION_PROMPT,
          channel_id: e,
          mutual_guild_ids: null != l ? l : [],
          other_user_id: null == t ? true : t.id
        })
      }
    })
  }, [N, T, t]), D = l.useCallback((e, t, n) => {
    let l = (l, r) => {
        r && u.WY.updateSetting(l), l && null != t && (0, s.tJ)(t), N(e.id), d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
          action: m.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id,
          is_dont_show_again_checked: r,
          non_spam_retraining_opt_in: l
        }), null != n && n()
      },
      r = u.WY.getSetting();
    null == r ? (0, p.v)({
      channel: e,
      onConfirm: l,
      onCancel: () => {
        d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
          action: m.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id
        })
      }
    }) : l(r)
  }, [N]);
  return {
    acceptMessageRequest: b ? R : N,
    rejectMessageRequest: P,
    rejectAll: w,
    markAsNotSpam: D,
    isAcceptLoading: _,
    isRejectLoading: v,
    isUserProfileLoading: O,
    isOptimisticAccepted: S,
    isOptimisticRejected: j
  }
}