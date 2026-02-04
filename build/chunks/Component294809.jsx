/** Chunk was on 7685 **/
/** chunk id: 294809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => V
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
  Chunk67103 = require("./67103.js"),
  Chunk195435 = require("./195435.jsx"),
  Chunk576420 = require("./576420.js"),
  Chunk336148 = require("./336148.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk783346 = require("./783346.js"),
  Chunk416001 = require("./416001.js"),
  Chunk905777 = require("./905777.js");

function L(e) {
  let {
    isCollapsed: t
  } = e;
  return (0, l.jsx)(T.C, {
    isCollapsed: t,
    size: "md",
    className: U.t4
  })
}

function k(e) {
  e.preventDefault(), e.stopPropagation()
}

function F(e) {
  let {
    channelId: t,
    guildId: n
  } = e, r = function(e) {
    let {
      channelId: t
    } = e;
    return (0, i.yK)([A.A, E.default, d.A, I.A], () => Object.values(A.A.getVoiceStatesForChannel(t)).map(e => E.default.getUser(e.userId)).filter(S.Vq).sort((e, t) => {
      var n, l, r, i;
      return I.A.isFriend(e.id) && !I.A.isFriend(t.id) ? false : !I.A.isFriend(e.id) && I.A.isFriend(t.id) ? 1 : (null != (n = null == (r = d.A.getUserAffinity(t.id)) ? true : r.vcProbability) ? n : 0) - (null != (l = null == (i = d.A.getUserAffinity(e.id)) ? true : i.vcProbability) ? l : 0)
    }), [t])
  }({
    channelId: t
  });
  return 0 === r.length ? null : (0, l.jsx)("div", {
    className: G.X0,
    children: (0, l.jsx)(a.A, {
      users: r,
      guildId: null != n ? n : true,
      maxUsers: Math.min(r.length, 4),
      size: o._3J.SIZE_24,
      disableUserPopout: true,
      "aria-label": P.intl.string(P.t.TxqPQR)
    })
  })
}

function V(e) {
  var t, n, a;
  let d, {
      channelId: I,
      listItemId: E,
      voiceStates: A,
      shouldHighlightIfRecentlyAdded: S,
      isExpanded: T = false,
      onToggleExpanded: U,
      onPrimaryAction: V,
      onContextMenu: H
    } = e,
    Y = (0, i.bG)([h.A], () => h.A.getChannel(I), [I]),
    W = null != (t = (0, u.Ay)(null != Y ? Y : true, true)) ? t : "???",
    z = null != (n = null == Y || null == (a = Y.getGuildId) ? true : a.call(Y)) ? n : null,
    B = (0, i.bG)([g.A], () => {
      var e;
      return null != z && null != (e = g.A.getGuild(z)) ? e : null
    }, [z]),
    K = (0, i.bG)([m.A], () => m.A.getVoiceChannelId() === I, [I]),
    X = (0, i.bG)([f.A], () => {
      var e, t;
      return null != Y && (null != (e = null == (t = Y.isPrivate) ? true : t.call(Y)) && !!e || f.A.can(w.xBc.READ_MESSAGE_HISTORY, Y))
    }, [Y]),
    [Q] = (0, i.bG)([y.Ay], () => null == Y || null == z ? [
      [], 0
    ] : [y.Ay.getVoiceStatesForChannel(Y), y.Ay.getVoiceStateVersion(z)], [Y, z], v.D),
    Z = null != Q && Q.length > 0,
    q = (0, M.A2)(I),
    J = (0, j.X)(Y),
    $ = r.useRef(null),
    ee = r.useCallback(() => {
      let e = $.current;
      null != e && (clearTimeout(e), $.current = null)
    }, []);
  r.useEffect(() => () => {
    ee()
  }, [ee]);
  let et = r.useCallback(e => {
      e.stopPropagation(), null == V || V({
        type: x.c.CONNECT_VOICE_CHANNEL,
        channelId: I,
        guildId: z
      }), T || null == U || U(I)
    }, [I, z, T, V, U]),
    en = r.useCallback(e => {
      e.stopPropagation(), null == V || V({
        type: x.c.DISCONNECT_VOICE_CHANNEL,
        channelId: I
      })
    }, [I, V]),
    el = r.useCallback(() => {
      X && (null == V || V({
        type: x.c.OPEN_TEXT_CHAT_CHANNEL,
        channelId: I,
        guildId: z
      }))
    }, [X, I, z, V]),
    er = r.useCallback(e => {
      if (Z) {
        null == U || U(I);
        return
      }
    }, [I, Z, U]),
    ei = r.useCallback(e => {
      ee(), el()
    }, [ee, el]),
    es = r.useCallback(e => {
      null == H || H({
        type: x.K.VOICE_CHANNEL,
        event: e,
        channel: null != Y ? Y : true,
        guild: B,
        channelId: I
      })
    }, [Y, I, B, H]),
    {
      mentionCount: ea
    } = (0, i.cf)([p.Ay], () => ({
      mentionCount: p.Ay.getMentionCount(I),
      isMentionLowImportance: p.Ay.getIsMentionLowImportance(I),
      unread: p.Ay.hasUnread(I)
    }), [I]),
    eo = (0, o.rdh)(o.LU0.colors.STATUS_POSITIVE),
    eu = (0, o.rdh)(o.LU0.colors.STATUS_DANGER),
    ec = (0, o.rdh)(o.LU0.colors.TEXT_STRONG),
    ed = (0, o.rdh)(o.LU0.colors.TEXT_MUTED),
    eh = K ? eo : ea > 0 ? ec : ed,
    {
      Component: eg,
      events: {
        onMouseEnter: ef,
        onMouseLeave: ep
      }
    } = (0, s.O)(),
    eI = () => {
      let e = K ? P.intl.string(P.t["6vrfgt"]) : P.intl.string(P.t.S0W8Z5),
        t = K ? eu.hex() : eo.hex(),
        n = K ? eg : o._jp;
      return (0, l.jsx)("div", {
        onDoubleClick: k,
        children: (0, l.jsx)(b.S, {
          tooltipText: e,
          onClick: K ? en : et,
          onMouseEnter: ef,
          onMouseLeave: ep,
          children: (0, l.jsx)(n, {
            size: "sm",
            color: t
          })
        })
      })
    };
  return (0, l.jsxs)("div", {
    onDoubleClick: ei,
    children: [(0, l.jsx)(N.D, {
      listItemId: E,
      recentlyAddedTimestampMs: S ? q : null,
      onClick: er,
      onContextMenu: es,
      avatar: null != Y ? (0, l.jsx)(C.A, {
        isTyping: J,
        guild: null != B ? B : true,
        channel: Y,
        size: C.Q.SMALL_32
      }) : null,
      primaryText: (0, l.jsxs)("div", {
        className: R.QV,
        children: [null == (d = (0, c.gU)(Y, B)) ? null : (0, l.jsx)(d, {
          color: eh.hex(),
          size: "xxs",
          className: R.p
        }), (0, l.jsx)(o.Text, {
          className: R.Xh,
          variant: "text-sm/medium",
          color: K ? "status-positive-text" : ea > 0 ? "text-strong" : "text-muted",
          children: W
        })]
      }),
      secondaryText: (null == B ? true : B.name) != null ? (0, l.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: B.name
      }) : null,
      rightActions: e => {
        switch (true) {
          case !Z:
            return e ? (0, l.jsxs)("div", {
              className: G.YT,
              onDoubleClick: k,
              children: [eI(), (0, l.jsx)(_.j, {
                tab: O.x.VOICE,
                targetId: I
              })]
            }) : null;
          case Z:
            return (0, l.jsxs)(l.Fragment, {
              children: [T ? (0, l.jsxs)("div", {
                className: G.YT,
                onDoubleClick: k,
                children: [eI(), (0, l.jsx)(_.j, {
                  tab: O.x.VOICE,
                  targetId: I
                })]
              }) : (0, l.jsx)(F, {
                channelId: I,
                guildId: z
              }), (0, l.jsx)(L, {
                isCollapsed: !T
              })]
            });
          default:
            return null
        }
      }
    }), T && Q.length > 0 ? (0, l.jsx)("div", {
      className: G.Nz,
      children: Q.slice(0, 25).map(e => (0, l.jsx)(D.a, {
        channelId: I,
        guildId: z,
        userId: e.user.id,
        onDoubleClick: k,
        onContextMenu: H
      }, e.user.id))
    }) : null]
  })
}