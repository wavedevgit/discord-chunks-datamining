/** Chunk was on 71447 **/
/** chunk id: 294809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => F
}), require("./638769.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk377802 = require("./377802.jsx"),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk21119 = require("./21119.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk996439 = require("./996439.js"),
  Chunk914853 = require("./914853.js"),
  Chunk676923 = require("./676923.jsx"),
  Chunk1404 = require("./1404.jsx"),
  Chunk483392 = require("./483392.jsx"),
  Chunk578093 = require("./578093.jsx"),
  Chunk912156 = require("./912156.jsx"),
  Chunk472204 = require("./472204.js"),
  Chunk195435 = require("./195435.jsx"),
  Chunk576420 = require("./576420.js"),
  Chunk876891 = require("./876891.jsx"),
  Chunk336148 = require("./336148.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk783346 = require("./783346.js"),
  Chunk416001 = require("./416001.js"),
  Chunk905777 = require("./905777.js");

function G(e) {
  let {
    isCollapsed: t
  } = e;
  return (0, i.jsx)(I.C, {
    isCollapsed: t,
    size: "md",
    className: L.t4
  })
}

function V(e) {
  e.preventDefault(), e.stopPropagation()
}

function z(e) {
  let {
    channelId: t,
    guildId: n
  } = e, r = function(e) {
    let {
      channelId: t
    } = e;
    return (0, l.yK)([v.A, A.default, d.A, m.A], () => Object.values(v.A.getVoiceStatesForChannel(t)).map(e => A.default.getUser(e.userId)).filter(E.Vq).sort((e, t) => {
      var n, i, r, l;
      return m.A.isFriend(e.id) && !m.A.isFriend(t.id) ? false : !m.A.isFriend(e.id) && m.A.isFriend(t.id) ? 1 : (null != (n = null == (r = d.A.getUserAffinity(t.id)) ? true : r.vcProbability) ? n : 0) - (null != (i = null == (l = d.A.getUserAffinity(e.id)) ? true : l.vcProbability) ? i : 0)
    }), [t])
  }({
    channelId: t
  });
  return 0 === r.length ? null : (0, i.jsx)("div", {
    className: U.X0,
    children: (0, i.jsx)(s.A, {
      users: r,
      guildId: null != n ? n : true,
      maxUsers: Math.min(r.length, 4),
      size: o._3J.SIZE_24,
      disableUserPopout: true,
      "aria-label": k.intl.string(k.t.TxqPQR)
    })
  })
}

function F(e) {
  var t, n, s;
  let d, {
      channelId: m,
      listItemId: A,
      voiceStates: v,
      shouldHighlightIfRecentlyAdded: E,
      isExpanded: I = false,
      onToggleExpanded: L
    } = e,
    F = (0, l.bG)([h.A], () => h.A.getChannel(m), [m]),
    H = null != (t = (0, u.Ay)(null != F ? F : true, true)) ? t : "???",
    Y = null != (n = null == F || null == (s = F.getGuildId) ? true : s.call(F)) ? n : null,
    W = (0, l.bG)([p.A], () => {
      var e;
      return null != Y && null != (e = p.A.getGuild(Y)) ? e : null
    }, [Y]),
    K = (0, l.bG)([y.A], () => y.A.getVoiceChannelId() === m, [m]),
    B = (0, l.bG)([f.A], () => {
      var e, t;
      return null != F && (null != (e = null == (t = F.isPrivate) ? true : t.call(F)) && !!e || f.A.can(R.xBc.READ_MESSAGE_HISTORY, F))
    }, [F]),
    [Z] = (0, l.bG)([b.Ay], () => null == F || null == Y ? [
      [], 0
    ] : [b.Ay.getVoiceStatesForChannel(F), b.Ay.getVoiceStateVersion(Y)], [F, Y], O.D),
    X = null != Z && Z.length > 0,
    J = (0, w.A2)(m),
    Q = (0, D.X)(F),
    q = r.useRef(null),
    $ = r.useCallback(() => {
      let e = q.current;
      null != e && (clearTimeout(e), q.current = null)
    }, []);
  r.useEffect(() => () => {
    $()
  }, [$]);
  let ee = (0, C.CD)({
      channelId: m,
      isExpanded: I,
      onToggleExpanded: L
    }),
    et = (0, C.Wn)(),
    en = (0, C.j7)({
      channelId: m,
      guildId: Y,
      shouldStopEvent: true
    }),
    ei = r.useCallback(e => {
      B && en(e)
    }, [B, en]),
    er = r.useCallback(e => {
      if (X) {
        null == L || L(m);
        return
      }
    }, [m, X, L]),
    el = r.useCallback(e => {
      $(), ei(e)
    }, [$, ei]),
    ea = (0, P.sZ)({
      channel: F,
      guild: W
    }),
    {
      mentionCount: es
    } = (0, l.cf)([g.Ay], () => ({
      mentionCount: g.Ay.getMentionCount(m),
      isMentionLowImportance: g.Ay.getIsMentionLowImportance(m),
      unread: g.Ay.hasUnread(m)
    }), [m]),
    eo = (0, o.rdh)(o.LU0.colors.STATUS_POSITIVE),
    eu = (0, o.rdh)(o.LU0.colors.STATUS_DANGER),
    ec = (0, o.rdh)(o.LU0.colors.TEXT_STRONG),
    ed = (0, o.rdh)(o.LU0.colors.TEXT_MUTED),
    eh = K ? eo : es > 0 ? ec : ed,
    {
      Component: ep,
      events: {
        onMouseEnter: ef,
        onMouseLeave: eg
      }
    } = (0, a.O)(),
    em = () => {
      let e = K ? k.intl.string(k.t["6vrfgt"]) : k.intl.string(k.t.S0W8Z5),
        t = K ? eu.hex() : eo.hex(),
        n = K ? ep : o._jp;
      return (0, i.jsx)("div", {
        onDoubleClick: V,
        children: (0, i.jsx)(_.S, {
          tooltipText: e,
          onClick: K ? et : ee,
          onMouseEnter: ef,
          onMouseLeave: eg,
          children: (0, i.jsx)(n, {
            size: "sm",
            color: t
          })
        })
      })
    };
  return (0, i.jsxs)("div", {
    onDoubleClick: el,
    children: [(0, i.jsx)(S.D, {
      listItemId: A,
      recentlyAddedTimestampMs: E ? J : null,
      onClick: er,
      onContextMenu: ea,
      avatar: null != F ? (0, i.jsx)(T.A, {
        isTyping: Q,
        guild: null != W ? W : true,
        channel: F,
        size: T.Q.SMALL_32
      }) : null,
      primaryText: (0, i.jsxs)("div", {
        className: M.QV,
        children: [null == (d = (0, c.gU)(F, W)) ? null : (0, i.jsx)(d, {
          color: eh.hex(),
          size: "xxs",
          className: M.p
        }), (0, i.jsx)(o.Text, {
          className: M.Xh,
          variant: "text-sm/medium",
          color: K ? "status-positive-text" : es > 0 ? "text-strong" : "text-muted",
          children: H
        })]
      }),
      secondaryText: (null == W ? true : W.name) != null ? (0, i.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: W.name
      }) : null,
      rightActions: e => {
        switch (true) {
          case !X:
            return e ? (0, i.jsxs)("div", {
              className: U.YT,
              onDoubleClick: V,
              children: [em(), (0, i.jsx)(j.j, {
                tab: x.x.VOICE,
                targetId: m
              })]
            }) : null;
          case X:
            return (0, i.jsxs)(i.Fragment, {
              children: [I ? (0, i.jsxs)("div", {
                className: U.YT,
                onDoubleClick: V,
                children: [em(), (0, i.jsx)(j.j, {
                  tab: x.x.VOICE,
                  targetId: m
                })]
              }) : (0, i.jsx)(z, {
                channelId: m,
                guildId: Y
              }), (0, i.jsx)(G, {
                isCollapsed: !I
              })]
            });
          default:
            return null
        }
      }
    }), I && Z.length > 0 ? (0, i.jsx)("div", {
      className: U.Nz,
      children: Z.slice(0, 25).map(e => (0, i.jsx)(N.a, {
        channelId: m,
        guildId: Y,
        userId: e.user.id,
        onDoubleClick: V
      }, e.user.id))
    }) : null]
  })
}