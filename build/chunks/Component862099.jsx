/** Chunk was on 1272 **/
/** chunk id: 862099, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Co: () => Q,
  ZP: () => J,
  bZ: () => K,
  gt: () => B
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk471445 = require("./471445.js"),
  Chunk986332 = require("./986332.js"),
  Chunk662842 = require("./662842.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk922482 = require("./922482.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk192079 = require("./192079.js"),
  Chunk427679 = require("./427679.js"),
  Chunk448206 = require("./448206.js"),
  Chunk496675 = require("./496675.js"),
  Chunk938475 = require("./938475.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk504160 = require("./504160.js"),
  Chunk151864 = require("./151864.js"),
  Chunk835184 = require("./835184.js"),
  Chunk725436 = require("./725436.js"),
  Chunk497656 = require("./497656.js"),
  Chunk79874 = require("./79874.js"),
  Chunk554747 = require("./554747.js"),
  Chunk230900 = require("./230900.js"),
  Chunk854698 = require("./854698.js"),
  Chunk139712 = require("./139712.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk988737 = require("./988737.js");
let B = Chunk473749.memo(function(e) {
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
    className: G.channelNotice,
    children: [(0, i.jsxs)("div", {
      className: s()(G.textBlock, G.singleLine),
      children: [(0, i.jsx)("div", {
        className: G.liveIndicator
      }), (0, i.jsx)(c.Text, {
        color: "text-feedback-positive",
        variant: "text-xs/semibold",
        className: G.liveNowText,
        children: t
      }), null != u && (0, i.jsx)(c.P3F, {
        onClick: u,
        className: G.closeIcon,
        "aria-label": U.intl.string(U.t.cpT0Cq),
        children: (0, i.jsx)(c.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, i.jsx)(c.Heading, {
      color: "header-primary",
      variant: "heading-md/semibold",
      className: G.eventName,
      children: o
    }), (0, i.jsxs)("div", {
      className: s()(G.textBlock, G.singleLine),
      children: [r, (0, i.jsx)(c.Text, {
        color: "none",
        variant: "text-xs/normal",
        className: G.channelName,
        children: n
      }), null != l && null != a && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.Text, {
          className: G.dotDivider,
          color: "none",
          variant: "text-xs/normal",
          children: "•"
        }), a, (0, i.jsx)(c.Text, {
          color: "none",
          variant: "text-xs/normal",
          className: G.details,
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
  } = e, r = (0, o.Wu)([v.ZP], () => v.ZP.getVoiceStatesForChannel(n).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [n]), l = (0, d.KS)(n);
  return (0, i.jsx)(B, {
    onClickCloseIcon: () => (0, N.ji)({
      eventId: null == t ? true : t.id
    }),
    heading: U.intl.string(U.t["X2K3/4"]),
    topic: t.name,
    location: n.name,
    locationIcon: null != l ? (0, i.jsx)(l, {
      size: "xs",
      color: "currentColor",
      className: G.stageIcon
    }) : null,
    children: (0, i.jsx)(Q, {
      channel: n,
      speakers: r,
      voiceType: 1
    })
  })
}

function V(e) {
  let {
    guildEvent: t,
    noticeType: n
  } = e, r = (0, R.DK)(t), l = (0, o.e7)([T.ZP], () => T.ZP.isInterestedInEventRecurrence(t.id, r), [t.id, r]), a = (0, o.e7)([P.Z], () => P.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
  return l || null != a || (0, N._6)(t.id), (0, i.jsx)(c.Button, {
    onClick: function() {
      (0, D.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, N.L_)(t.id), 1e3)), I.default.track(k.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
        guild_id: t.guild_id,
        notice_type: n
      })
    },
    text: U.intl.string(U.t.DlcqlU),
    icon: l ? c.dz2 : c.Dkj,
    variant: l ? "secondary" : "primary",
    size: "sm",
    fullWidth: true
  })
}

function F(e) {
  var t;
  let {
    guildEvent: n,
    noticeType: r
  } = e, a = (0, L.cS)(n), o = null != a ? (0, x.m)(a, true) : null, u = (0, L.nE)(n), p = (0, d.KS)(u), {
    startTime: f,
    endTime: h
  } = (0, Z.ZP)(n), {
    startDateTimeString: g,
    upcomingEvent: m,
    diffMinutes: _
  } = (0, R.ub)(f.toISOString(), null == h ? true : h.toISOString()), b = m ? _ > 0 ? U.intl.formatToPlainString(U.t.PQlCWk, {
    minutes: _
  }) : U.intl.string(U.t.WINqKV) : U.intl.formatToPlainString(U.t.DC6h3G, {
    date: g
  });
  return l.useEffect(() => {
    I.default.track(k.rMx.CHANNEL_NOTICE_VIEWED, {
      notice_type: r,
      guild_id: n.guild_id
    })
  }, [n, r]), (0, i.jsxs)("div", {
    className: G.channelNotice,
    children: [(0, i.jsxs)("div", {
      className: G.textBlock,
      children: [(0, i.jsx)(c.P3F, {
        onClick: () => (0, S.bO)({
          eventId: n.id
        }),
        className: G.eventNameClickable,
        children: (0, i.jsx)(c.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: G.eventName,
          children: n.name
        })
      }), (0, i.jsx)(c.P3F, {
        onClick: () => {
          I.default.track(k.rMx.CHANNEL_NOTICE_CLOSED, {
            notice_type: r,
            guild_id: n.guild_id
          }), (0, N.L_)(n.id)
        },
        className: G.closeIcon,
        "aria-label": U.intl.string(U.t.cpT0Cq),
        children: (0, i.jsx)(c.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, i.jsxs)("div", {
      className: s()(G.textBlock, G.singleLine),
      children: [(0, i.jsx)(c.Que, {
        size: "custom",
        color: "currentColor",
        className: G.stageIcon,
        width: 16,
        height: 16
      }), (0, i.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: G.startTime,
        children: b
      })]
    }), (0, i.jsxs)("div", {
      className: s()(G.textBlock, G.singleLine),
      children: [null != p ? (0, i.jsx)(p, {
        size: "xs",
        color: "currentColor",
        className: G.stageIcon
      }) : (0, i.jsx)(c._tJ, {
        size: "custom",
        color: "currentColor",
        width: 16,
        height: 16,
        className: G.stageIcon
      }), (0, i.jsx)(c.Text, {
        color: "none",
        variant: "text-xs/normal",
        className: G.channelName,
        children: null != (t = null == u ? true : u.name) ? t : o
      })]
    }), (0, i.jsx)(V, {
      guildEvent: n,
      noticeType: r
    })]
  })
}

function z(e) {
  let {
    guildEvent: t
  } = e, n = (0, L.cS)(t);
  return null == n ? null : (0, i.jsx)(B, {
    onClickCloseIcon: () => (0, N.ji)({
      eventId: null == t ? true : t.id
    }),
    heading: U.intl.string(U.t["1+boPi"]),
    topic: t.name,
    location: (0, x.m)(n, true),
    locationIcon: (0, i.jsx)(c._tJ, {
      size: "custom",
      color: "currentColor",
      width: 16,
      height: 16,
      className: G.stageIcon
    }),
    children: (0, i.jsx)(Y, {
      guildEvent: t
    })
  })
}

function Y(e) {
  let {
    guildEvent: t
  } = e, n = l.useCallback(() => {
    (0, S.bO)({
      eventId: t.id
    })
  }, [t]);
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: G.joinButton,
    children: (0, i.jsx)(c.Button, {
      variant: "active",
      size: "sm",
      text: U.intl.string(U.t.z4FcDs),
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
    className: G.joinButton,
    children: (0, i.jsx)(c.Button, {
      variant: "active",
      size: "sm",
      text: n,
      fullWidth: true,
      onClick: () => {
        null != t && null != t.getGuildId() && ((0, g.Cq)(t), (0, h.XU)(t.getGuildId(), t.id))
      }
    })
  })
}

function q(e) {
  let {
    stageInstance: t,
    channel: n
  } = e, r = (0, o.Wu)([m.Z], () => [...new Set(m.Z.getMutableParticipants(n.id, _.pV.SPEAKER).map(e => e.user))], [n.id]), l = (0, o.e7)([m.Z], () => m.Z.getParticipantCount(n.id, _.pV.AUDIENCE), [n.id]), a = U.intl.formatToPlainString(U.t["+v2pN2"], {
    count: "".concat(l)
  });
  return (0, i.jsx)(B, {
    onClickCloseIcon: () => (0, N.ji)({
      stageId: null == t ? true : t.id
    }),
    heading: U.intl.string(U.t["X2K3/4"]),
    location: n.name,
    details: a,
    detailsIcon: (0, i.jsx)(c.VWR, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14,
      className: G.stageIcon
    }),
    locationIcon: (0, i.jsx)(c.ewx, {
      size: "custom",
      color: "currentColor",
      width: 16,
      height: 16,
      className: G.stageIcon
    }),
    topic: t.topic,
    children: (0, i.jsx)(Q, {
      channel: n,
      speakers: r,
      voiceType: 2
    })
  })
}
var K = ((r = {})[r.VOICE = 1] = "VOICE", r[r.STAGE = 2] = "STAGE", r[r.STUDY_ROOM = 3] = "STUDY_ROOM", r);

function Q(e) {
  let {
    channel: t,
    speakers: n,
    voiceType: r
  } = e, a = t.getGuildId(), d = l.useMemo(() => n.slice(0, 3), [n]), p = (0, o.e7)([y.Z], () => y.Z.can(k.Plq.CONNECT, t)), f = (0, O.Z)(t.id), h = U.intl.string(U.t.VJlc0S);
  switch (r) {
    case 1:
      h = U.intl.string(U.t.VJlc0S);
      break;
    case 2:
      h = U.intl.string(U.t.ZYO5OK), (null == f ? true : f.speaker) ? h = U.intl.string(U.t["/cnSFc"]) : null != f && (h = U.intl.string(U.t.btSGOj));
      break;
    case 3:
      h = U.intl.string(U.t.wBoE6L);
      break;
    default:
      (0, C.vE)(r)
  }
  return null == a ? null : (0, i.jsxs)(i.Fragment, {
    children: [d.length > 0 ? (0, i.jsxs)("div", {
      className: s()(G.textBlock, G.singleLine),
      children: [(0, i.jsx)(u.ZP, {
        guildId: a,
        users: d,
        showUserPopout: true,
        size: u.u8.SIZE_16
      }), (0, i.jsx)(c.Text, {
        color: "none",
        variant: "text-xs/normal",
        className: G.userNames,
        children: (0, b.ER)(a, d, null == t ? true : t.id, n.length)
      })]
    }) : null, p && null == f && (0, i.jsx)(W, {
      channel: t,
      label: h
    })]
  })
}
let J = Chunk473749.memo(function(e) {
  let {
    guild: t
  } = e, {
    showRedesignedLiveChannelNotice: n
  } = (0, p.o)(true), r = (0, A.y)(t.id), l = (0, w.k5)(t.id), a = (0, w.Vm)(t.id), s = (0, o.e7)([E.Z], () => E.Z.getStageInstanceByChannel(null == r ? true : r.id), [r]), {
    isStageNoticeHidden: c,
    isEventNoticeHidden: u
  } = (0, o.cj)([j.Z], () => ({
    isStageNoticeHidden: j.Z.isLiveChannelNoticeHidden({
      stageId: null == s ? true : s.id
    }),
    isEventNoticeHidden: j.Z.isLiveChannelNoticeHidden({
      eventId: null == l ? true : l.id
    })
  }), [s, l]), d = null, h = null != s && null != r && !c;
  if (n) return (0, i.jsx)(f.Z, {
    guild: t
  });
  null == l || u ? h && (d = (0, i.jsx)(q, {
    stageInstance: s,
    channel: r
  })) : l.entity_type === M.WX.STAGE_INSTANCE && h ? d = (0, i.jsx)(q, {
    stageInstance: s,
    channel: r
  }) : l.entity_type === M.WX.EXTERNAL ? d = (0, i.jsx)(z, {
    guildEvent: l
  }) : l.entity_type === M.WX.VOICE && null != r && (d = (0, i.jsx)(H, {
    guildEvent: l,
    channel: r
  }));
  let g = t.features.has(k.GuildFeatures.COMMUNITY);
  if (null == d && null != a && !g) {
    let {
      upcomingEvent: e,
      noticeType: t
    } = a;
    d = (0, i.jsx)(F, {
      guildEvent: e,
      noticeType: t
    })
  }
  return d
})