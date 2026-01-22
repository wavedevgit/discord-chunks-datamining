/** Chunk was on 21738 **/
/** chunk id: 289357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $i: () => X,
  Ay: () => Z,
  Qv: () => B,
  SY: () => Q
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk713654 = require("./713654.js"),
  Chunk83241 = require("./83241.js"),
  Chunk214884 = require("./214884.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk323443 = require("./323443.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk110618 = require("./110618.js"),
  Chunk446600 = require("./446600.js"),
  Chunk964175 = require("./964175.js"),
  Chunk576705 = require("./576705.js"),
  Chunk607567 = require("./607567.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk707592 = require("./707592.jsx"),
  Chunk698441 = require("./698441.js"),
  Chunk935159 = require("./935159.js"),
  Chunk473019 = require("./473019.js"),
  Chunk11550 = require("./11550.js"),
  Chunk435328 = require("./435328.js"),
  Chunk539446 = require("./539446.js"),
  Chunk563312 = require("./563312.js"),
  Chunk508654 = require("./508654.js"),
  Chunk9448 = require("./9448.js"),
  Chunk974930 = require("./974930.js"),
  Chunk666394 = require("./666394.jsx"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk177865 = require("./177865.js");
let B = Chunk64700.memo(function(e) {
  let {
    heading: t,
    location: n,
    locationIcon: r,
    details: l,
    detailsIcon: a,
    topic: o,
    onClickCloseIcon: u,
    children: d
  } = e;
  return (0, i.jsxs)("div", {
    className: V.kX,
    children: [(0, i.jsxs)("div", {
      className: s()(V.fI, V.pF),
      children: [(0, i.jsx)("div", {
        className: V.Ok
      }), (0, i.jsx)(c.Text, {
        color: "text-feedback-positive",
        variant: "text-xs/semibold",
        className: V.U4,
        children: t
      }), null != u && (0, i.jsx)(c.DUT, {
        onClick: u,
        className: V.ut,
        "aria-label": G.intl.string(G.t.cpT0Cq),
        children: (0, i.jsx)(c.PGe, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, i.jsx)(c.Heading, {
      color: "text-strong",
      variant: "heading-md/semibold",
      className: V.eq,
      children: o
    }), (0, i.jsxs)("div", {
      className: s()(V.fI, V.pF),
      children: [r, (0, i.jsx)(c.Text, {
        color: "none",
        variant: "text-xs/normal",
        className: V.HA,
        children: n
      }), null != l && null != a && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.Text, {
          className: V.hY,
          color: "none",
          variant: "text-xs/normal",
          children: "•"
        }), a, (0, i.jsx)(c.Text, {
          color: "none",
          variant: "text-xs/normal",
          className: V.zH,
          children: l
        })]
      })]
    }), d]
  })
});

function H(e) {
  let {
    guildEvent: t,
    channel: n
  } = e, r = (0, o.yK)([y.Ay], () => y.Ay.getVoiceStatesForChannel(n).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [n]), l = (0, d.gU)(n);
  return (0, i.jsx)(B, {
    onClickCloseIcon: () => (0, N.iF)({
      eventId: null == t ? true : t.id
    }),
    heading: G.intl.string(G.t["X2K3/4"]),
    topic: t.name,
    location: n.name,
    locationIcon: null != l ? (0, i.jsx)(l, {
      size: "xs",
      color: "currentColor",
      className: V.uE
    }) : null,
    children: (0, i.jsx)(X, {
      channel: n,
      speakers: r,
      voiceType: 1
    })
  })
}

function F(e) {
  let {
    guildEvent: t,
    noticeType: n
  } = e, r = (0, D.G3)(t), l = (0, o.bG)([C.Ay], () => C.Ay.isInterestedInEventRecurrence(t.id, r), [t.id, r]), a = (0, o.bG)([j.A], () => j.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
  return l || null != a || (0, N.pE)(t.id), (0, i.jsx)(c.Button, {
    onClick: function() {
      (0, M.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, N.Lx)(t.id), 1e3)), I.default.track(U.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
        guild_id: t.guild_id,
        notice_type: n
      })
    },
    text: G.intl.string(G.t.DlcqlU),
    icon: l ? c.A9s : c.XFE,
    variant: l ? "secondary" : "primary",
    size: "sm",
    fullWidth: true
  })
}

function Y(e) {
  var t;
  let {
    guildEvent: n,
    noticeType: r
  } = e, a = (0, R.oF)(n), o = null != a ? (0, x.l)(a, true) : null, u = (0, R.WN)(n), p = (0, d.gU)(u), {
    startTime: f,
    endTime: h
  } = (0, w.Ay)(n), {
    startDateTimeString: A,
    upcomingEvent: g,
    diffMinutes: m
  } = (0, D.CC)(f.toISOString(), null == h ? true : h.toISOString()), b = g ? m > 0 ? G.intl.formatToPlainString(G.t.PQlCWk, {
    minutes: m
  }) : G.intl.string(G.t.WINqKV) : G.intl.formatToPlainString(G.t.DC6h3G, {
    date: A
  });
  return l.useEffect(() => {
    I.default.track(U.HAw.CHANNEL_NOTICE_VIEWED, {
      notice_type: r,
      guild_id: n.guild_id
    })
  }, [n, r]), (0, i.jsxs)("div", {
    className: V.kX,
    children: [(0, i.jsxs)("div", {
      className: V.fI,
      children: [(0, i.jsx)(c.DUT, {
        onClick: () => (0, S.uR)({
          eventId: n.id
        }),
        className: V.oP,
        children: (0, i.jsx)(c.Text, {
          color: "text-strong",
          variant: "text-md/semibold",
          className: V.eq,
          children: n.name
        })
      }), (0, i.jsx)(c.DUT, {
        onClick: () => {
          I.default.track(U.HAw.CHANNEL_NOTICE_CLOSED, {
            notice_type: r,
            guild_id: n.guild_id
          }), (0, N.Lx)(n.id)
        },
        className: V.ut,
        "aria-label": G.intl.string(G.t.cpT0Cq),
        children: (0, i.jsx)(c.PGe, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, i.jsxs)("div", {
      className: s()(V.fI, V.pF),
      children: [(0, i.jsx)(c.CTc, {
        size: "custom",
        color: "currentColor",
        className: V.uE,
        width: 16,
        height: 16
      }), (0, i.jsx)(c.Text, {
        color: "text-default",
        variant: "text-xs/normal",
        className: V.Sv,
        children: b
      })]
    }), (0, i.jsxs)("div", {
      className: s()(V.fI, V.pF),
      children: [null != p ? (0, i.jsx)(p, {
        size: "xs",
        color: "currentColor",
        className: V.uE
      }) : (0, i.jsx)(c.BT6, {
        size: "custom",
        color: "currentColor",
        width: 16,
        height: 16,
        className: V.uE
      }), (0, i.jsx)(c.Text, {
        color: "none",
        variant: "text-xs/normal",
        className: V.HA,
        children: null != (t = null == u ? true : u.name) ? t : o
      })]
    }), (0, i.jsx)(F, {
      guildEvent: n,
      noticeType: r
    })]
  })
}

function K(e) {
  let {
    guildEvent: t
  } = e, n = (0, R.oF)(t);
  return null == n ? null : (0, i.jsx)(B, {
    onClickCloseIcon: () => (0, N.iF)({
      eventId: null == t ? true : t.id
    }),
    heading: G.intl.string(G.t["1+boPi"]),
    topic: t.name,
    location: (0, x.l)(n, true),
    locationIcon: (0, i.jsx)(c.BT6, {
      size: "custom",
      color: "currentColor",
      width: 16,
      height: 16,
      className: V.uE
    }),
    children: (0, i.jsx)(z, {
      guildEvent: t
    })
  })
}

function z(e) {
  let {
    guildEvent: t
  } = e, n = l.useCallback(() => {
    (0, S.uR)({
      eventId: t.id
    })
  }, [t]);
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: V.PD,
    children: (0, i.jsx)(c.Button, {
      variant: "active",
      size: "sm",
      text: G.intl.string(G.t.z4FcDs),
      fullWidth: true,
      onClick: n
    })
  })
}

function W(e) {
  let {
    channel: t,
    label: n
  } = e;
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: V.PD,
    children: (0, i.jsx)(c.Button, {
      variant: "active",
      size: "sm",
      text: n,
      fullWidth: true,
      onClick: () => {
        null != t && null != t.getGuildId() && ((0, A.av)(t), (0, h.uh)(t.getGuildId(), t.id))
      }
    })
  })
}

function q(e) {
  let {
    stageInstance: t,
    channel: n
  } = e, r = (0, o.yK)([g.A], () => [...new Set(g.A.getMutableParticipants(n.id, m.ip.SPEAKER).map(e => e.user))], [n.id]), l = (0, o.bG)([g.A], () => g.A.getParticipantCount(n.id, m.ip.AUDIENCE), [n.id]), a = G.intl.formatToPlainString(G.t["+v2pN2"], {
    count: "".concat(l)
  });
  return (0, i.jsx)(B, {
    onClickCloseIcon: () => (0, N.iF)({
      stageId: null == t ? true : t.id
    }),
    heading: G.intl.string(G.t["X2K3/4"]),
    location: n.name,
    details: a,
    detailsIcon: (0, i.jsx)(c.LoC, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14,
      className: V.uE
    }),
    locationIcon: (0, i.jsx)(c.qux, {
      size: "custom",
      color: "currentColor",
      width: 16,
      height: 16,
      className: V.uE
    }),
    topic: t.topic,
    children: (0, i.jsx)(X, {
      channel: n,
      speakers: r,
      voiceType: 2
    })
  })
}
var Q = ((r = {})[r.VOICE = 1] = "VOICE", r[r.STAGE = 2] = "STAGE", r[r.STUDY_ROOM = 3] = "STUDY_ROOM", r);

function X(e) {
  let {
    channel: t,
    speakers: n,
    voiceType: r
  } = e, a = t.getGuildId(), d = l.useMemo(() => n.slice(0, 3), [n]), p = (0, o.bG)([O.A], () => O.A.can(U.xBc.CONNECT, t)), f = (0, E.A)(t.id), h = G.intl.string(G.t.VJlc0S);
  switch (r) {
    case 1:
      h = G.intl.string(G.t.VJlc0S);
      break;
    case 2:
      h = G.intl.string(G.t.ZYO5OK), (null == f ? true : f.speaker) ? h = G.intl.string(G.t["/cnSFc"]) : null != f && (h = G.intl.string(G.t.btSGOj));
      break;
    case 3:
      h = G.intl.string(G.t.wBoE6L);
      break;
    default:
      (0, v.xb)(r)
  }
  return null == a ? null : (0, i.jsxs)(i.Fragment, {
    children: [d.length > 0 ? (0, i.jsxs)("div", {
      className: s()(V.fI, V.pF),
      children: [(0, i.jsx)(u.Ay, {
        guildId: a,
        users: d,
        showUserPopout: true,
        size: u.DN.SIZE_16
      }), (0, i.jsx)(c.Text, {
        color: "none",
        variant: "text-xs/normal",
        className: V.c8,
        children: (0, b.c)(a, d, null == t ? true : t.id, n.length)
      })]
    }) : null, p && null == f && (0, i.jsx)(W, {
      channel: t,
      label: h
    })]
  })
}
let Z = Chunk64700.memo(function(e) {
  let {
    guild: t
  } = e, {
    showRedesignedLiveChannelNotice: n
  } = (0, p.P)(true), r = (0, P.V)(t.id), l = (0, L.BP)(t.id), a = (0, L.WG)(t.id), s = (0, o.bG)([_.A], () => _.A.getStageInstanceByChannel(null == r ? true : r.id), [r]), {
    isStageNoticeHidden: c,
    isEventNoticeHidden: u
  } = (0, o.cf)([T.A], () => ({
    isStageNoticeHidden: T.A.isLiveChannelNoticeHidden({
      stageId: null == s ? true : s.id
    }),
    isEventNoticeHidden: T.A.isLiveChannelNoticeHidden({
      eventId: null == l ? true : l.id
    })
  }), [s, l]), d = null, h = null != s && null != r && !c;
  if (n) return (0, i.jsx)(f.A, {
    guild: t
  });
  null == l || u ? h && (d = (0, i.jsx)(q, {
    stageInstance: s,
    channel: r
  })) : l.entity_type === k.Ps.STAGE_INSTANCE && h ? d = (0, i.jsx)(q, {
    stageInstance: s,
    channel: r
  }) : l.entity_type === k.Ps.EXTERNAL ? d = (0, i.jsx)(K, {
    guildEvent: l
  }) : l.entity_type === k.Ps.VOICE && null != r && (d = (0, i.jsx)(H, {
    guildEvent: l,
    channel: r
  }));
  let A = t.features.has(U.GuildFeatures.COMMUNITY);
  if (null == d && null != a && !A) {
    let {
      upcomingEvent: e,
      noticeType: t
    } = a;
    d = (0, i.jsx)(Y, {
      guildEvent: e,
      noticeType: t
    })
  }
  return d
})