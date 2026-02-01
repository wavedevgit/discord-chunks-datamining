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
  Chunk435371 = require("./435371.js"),
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
    return (0, l.yK)([b.A, v.default, h.A, y.A], () => Object.values(b.A.getVoiceStatesForChannel(t)).map(e => v.default.getUser(e.userId)).filter(O.Vq).sort((e, t) => {
      var n, i, r, l;
      return y.A.isFriend(e.id) && !y.A.isFriend(t.id) ? false : !y.A.isFriend(e.id) && y.A.isFriend(t.id) ? 1 : (null != (n = null == (r = h.A.getUserAffinity(t.id)) ? true : r.vcProbability) ? n : 0) - (null != (i = null == (l = h.A.getUserAffinity(e.id)) ? true : l.vcProbability) ? i : 0)
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
      size: u._3J.SIZE_24,
      disableUserPopout: true,
      "aria-label": k.intl.string(k.t.TxqPQR)
    })
  })
}

function F(e) {
  var t, n, s;
  let h, {
      channelId: y,
      listItemId: v,
      voiceStates: b,
      shouldHighlightIfRecentlyAdded: O,
      isExpanded: I = false,
      onToggleExpanded: L
    } = e,
    F = (0, l.bG)([p.A], () => p.A.getChannel(y), [y]),
    H = null != (t = (0, c.Ay)(null != F ? F : true, true)) ? t : "???",
    Y = null != (n = null == F || null == (s = F.getGuildId) ? true : s.call(F)) ? n : null,
    K = (0, l.bG)([f.A], () => {
      var e;
      return null != Y && null != (e = f.A.getGuild(Y)) ? e : null
    }, [Y]),
    W = (0, l.bG)([A.A], () => A.A.getVoiceChannelId() === y, [y]),
    B = (0, l.bG)([g.A], () => {
      var e, t;
      return null != F && (null != (e = null == (t = F.isPrivate) ? true : t.call(F)) && !!e || g.A.can(R.xBc.READ_MESSAGE_HISTORY, F))
    }, [F]),
    [Z] = (0, l.bG)([E.Ay], () => null == F || null == Y ? [
      [], 0
    ] : [E.Ay.getVoiceStatesForChannel(F), E.Ay.getVoiceStateVersion(Y)], [F, Y], x.D),
    X = null != Z && Z.length > 0,
    J = (0, w.A2)(y),
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
      channelId: y,
      isExpanded: I,
      onToggleExpanded: L
    }),
    et = (0, C.Wn)(),
    en = (0, C.j7)({
      channelId: y,
      guildId: Y,
      shouldStopEvent: true
    }),
    ei = r.useCallback(e => {
      B && en(e)
    }, [B, en]),
    er = r.useCallback(e => {
      if (X) {
        null == L || L(y);
        return
      }
    }, [y, X, L]),
    el = r.useCallback(e => {
      $(), ei(e)
    }, [$, ei]),
    ea = (0, P.sZ)({
      channel: F,
      guild: K
    }),
    {
      mentionCount: es
    } = (0, l.cf)([m.Ay], () => ({
      mentionCount: m.Ay.getMentionCount(y),
      isMentionLowImportance: m.Ay.getIsMentionLowImportance(y),
      unread: m.Ay.hasUnread(y)
    }), [y]),
    eo = (0, u.rdh)(u.LU0.colors.STATUS_POSITIVE),
    eu = (0, u.rdh)(u.LU0.colors.STATUS_DANGER),
    ec = (0, u.rdh)(u.LU0.colors.TEXT_STRONG),
    ed = (0, u.rdh)(u.LU0.colors.TEXT_MUTED),
    eh = W ? eo : es > 0 ? ec : ed,
    {
      Component: ep,
      events: {
        onMouseEnter: ef,
        onMouseLeave: eg
      }
    } = (0, a.O)(),
    em = () => {
      let e = W ? k.intl.string(k.t["6vrfgt"]) : k.intl.string(k.t.S0W8Z5),
        t = W ? eu.hex() : eo.hex(),
        n = W ? ep : u._jp;
      return (0, i.jsx)(o.m_, {
        text: e,
        "aria-label": e,
        children: (0, i.jsx)("div", {
          onDoubleClick: V,
          onMouseEnter: ef,
          onMouseLeave: eg,
          children: (0, i.jsx)(u.K0, {
            icon: () => (0, i.jsx)(n, {
              size: "sm",
              color: t
            }),
            size: "sm",
            "aria-label": e,
            variant: "icon-only",
            onClick: W ? et : ee
          })
        })
      })
    };
  return (0, i.jsxs)("div", {
    onDoubleClick: el,
    children: [(0, i.jsx)(S.D, {
      listItemId: v,
      recentlyAddedTimestampMs: O ? J : null,
      onClick: er,
      onContextMenu: ea,
      avatar: null != F ? (0, i.jsx)(T.A, {
        isTyping: Q,
        guild: null != K ? K : true,
        channel: F,
        size: T.Q.SMALL_32
      }) : null,
      primaryText: (0, i.jsxs)("div", {
        className: M.QV,
        children: [null == (h = (0, d.gU)(F, K)) ? null : (0, i.jsx)(h, {
          color: eh.hex(),
          size: "xxs",
          className: M.p
        }), (0, i.jsx)(u.Text, {
          className: M.Xh,
          variant: "text-sm/medium",
          color: W ? "status-positive-text" : es > 0 ? "text-strong" : "text-muted",
          children: H
        })]
      }),
      secondaryText: (null == K ? true : K.name) != null ? (0, i.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: K.name
      }) : null,
      rightActions: e => {
        switch (true) {
          case !X:
            return e ? (0, i.jsxs)("div", {
              className: U.YT,
              onDoubleClick: V,
              children: [em(), (0, i.jsx)(j.j, {
                tab: _.x.VOICE,
                targetId: y
              })]
            }) : null;
          case X:
            return (0, i.jsxs)(i.Fragment, {
              children: [I ? (0, i.jsxs)("div", {
                className: U.YT,
                onDoubleClick: V,
                children: [em(), (0, i.jsx)(j.j, {
                  tab: _.x.VOICE,
                  targetId: y
                })]
              }) : (0, i.jsx)(z, {
                channelId: y,
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
        channelId: y,
        guildId: Y,
        userId: e.user.id,
        onDoubleClick: V
      }, e.user.id))
    }) : null]
  })
}