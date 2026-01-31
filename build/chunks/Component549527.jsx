/** Chunk was on 64935 **/
/** chunk id: 549527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => V
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803306 = require("./803306.js"),
  Chunk862804 = require("./862804.js"),
  Chunk387408 = require("./387408.js"),
  Chunk958340 = require("./958340.js"),
  Chunk384231 = require("./384231.js"),
  Chunk763754 = require("./763754.js"),
  Chunk491182 = require("./491182.jsx"),
  Chunk291812 = require("./291812.jsx"),
  Chunk643204 = require("./643204.jsx"),
  Chunk535421 = require("./535421.jsx"),
  Chunk112758 = require("./112758.jsx"),
  Chunk754459 = require("./754459.js"),
  Chunk538355 = require("./538355.jsx"),
  Chunk699352 = require("./699352.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk138298 = require("./138298.js"),
  Chunk253932 = require("./253932.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk540999 = require("./540999.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk709634 = require("./709634.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk618231 = require("./618231.js");

function B(e) {
  let {
    message: t,
    snapshot: n,
    index: u
  } = e, p = i.useMemo(() => new d.j(t, n, u), [t, n, u]), f = (0, a.bG)([S.A, D.default, w.A, P.A, N.A, m.A], () => p.getForwardInfo(S.A, D.default, w.A, P.A, N.A, m.A).footerInfo, [p], s.A), g = i.useCallback(() => {
    var e, n;
    let r = S.A.getChannel(t.channel_id),
      i = N.A.getGuild(null == r ? true : r.guild_id),
      l = null == (e = t.messageReference) ? true : e.channel_id,
      a = R.A.getCurrentlySelectedChannelId(),
      s = I.Ay.getCurrentSidebarChannelId(null == (n = t.messageReference) ? true : n.channel_id),
      o = a === l && s === (null == r ? true : r.id);
    null == r || null == i || o || null == l || (j.A.openModReportAsSidebar({
      channelId: r.id,
      baseChannelId: l,
      guildId: r.guild_id
    }), (0, E.iN)(l), L.default.track(k.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
      moderator_report_id: t.channel_id,
      destination_channel_id: l,
      destination_message_id: t.id
    }))
  }, [t]);
  return null == f ? null : (0, r.jsxs)(c.DUT, {
    className: G.xQ,
    onClick: g,
    "aria-label": f.accessibilityLabel,
    children: [null != f.originIconUrl ? (0, r.jsx)("img", {
      className: G.yl,
      src: f.originIconUrl,
      alt: ""
    }) : null, (0, r.jsx)(l.EYj, {
      className: G.PJ,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(f.originLabel, "  •  ").concat(f.timestampLabel)
    }), (0, r.jsx)(c._BQ, {
      size: "xxs",
      color: o.A.colors.TEXT_MUTED
    })]
  })
}

function F(e) {
  let {
    mergedMessageRecord: t,
    content: n,
    channel: l,
    reportingUserId: a,
    reportedTimestamp: s
  } = e, o = (0, g.m2)(t.author, l), {
    onClickUsername: c,
    onClickAvatar: u,
    onPopoutRequestClose: d,
    showUsernamePopout: p,
    showAvatarPopout: m
  } = function(e, t) {
    let {
      popouts: n,
      setPopout: r
    } = (0, v.A)(e.id, U.Fd), {
      usernameProfile: l,
      avatarProfile: a
    } = n, s = (0, A.m)(e, t, l, r);
    return {
      onClickUsername: s,
      onClickAvatar: (0, A.Jo)(a, r),
      onPopoutRequestClose: i.useCallback(() => r({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      }), [r]),
      showUsernamePopout: l,
      showAvatarPopout: a
    }
  }(t, l);
  return (0, r.jsx)(_.A, {
    childrenExecutedCommand: (0, r.jsx)(M.A, {
      reportingUserId: a,
      guildId: l.guild_id,
      channel: l,
      messageId: t.id,
      reportedTimestamp: s,
      compact: false
    }),
    childrenHeader: (0, r.jsx)(b.Ay, {
      message: t,
      channel: l,
      author: o,
      guildId: l.guild_id,
      hideTimestamp: true,
      onClickUsername: c,
      onClickAvatar: u,
      onPopoutRequestClose: d,
      showUsernamePopout: p,
      showAvatarPopout: m,
      renderPopout: y.A,
      compact: false,
      displayCompactAvatars: false
    }),
    childrenMessageContent: (0, r.jsx)(h.Ay, {
      message: t,
      content: n,
      compact: false
    }),
    disableInteraction: true,
    compact: false,
    className: G.iU,
    author: o
  })
}

function H(e) {
  var t, n, l;
  let {
    message: s,
    snapshot: o,
    index: c
  } = e, [d, m] = i.useState(true);
  i.useEffect(() => {
    var e;
    (null == o || null == (e = o.moderatorReport) ? true : e.reported_user_id) != null && (0, u.wz)(o.moderatorReport.reported_user_id).then(e => {
      m(e)
    }).catch(() => {})
  }, [null == o || null == (n = o.moderatorReport) ? true : n.reported_user_id]);
  let g = i.useMemo(() => {
      var e;
      let t = (0, p.A)(s, o);
      return null != d && (null == o || null == (e = o.moderatorReport) ? true : e.reported_user_id) != null ? t.set("author", d) : t
    }, [s, o, d]),
    _ = C.hD.useSetting(),
    h = C.rs.useSetting(),
    b = (0, a.bG)([T.A], () => T.A.isDeveloper),
    y = (0, f.S)((null != (t = g.editedTimestamp) ? t : g.timestamp).valueOf()),
    {
      content: A,
      hasSpoilerEmbeds: v,
      hasBailedAst: E
    } = (0, O.A)(g, {
      hideSimpleEmbedContent: _ && h,
      isInteracting: false,
      formatInline: false,
      allowList: y,
      allowHeading: y,
      allowLinks: true,
      allowDevLinks: b,
      previewLinkTarget: true
    }),
    j = (0, a.bG)([S.A], () => S.A.getChannel(s.channel_id));
  return null == j ? null : (0, r.jsx)("div", {
    className: G.kL,
    children: (0, r.jsxs)("div", {
      className: G.Qs,
      children: [(0, r.jsx)(F, {
        mergedMessageRecord: g,
        content: A,
        channel: j,
        reportingUserId: null == o || null == (l = o.moderatorReport) ? true : l.reporting_user_id,
        reportedTimestamp: s.timestamp
      }), (0, x.A)({
        channelMessageProps: {
          message: g,
          channel: j,
          compact: false
        },
        hasSpoilerEmbeds: v,
        hasBailedAst: E,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false,
        className: G.Mf
      }), (0, r.jsx)(B, {
        message: s,
        snapshot: o,
        index: c
      })]
    })
  }, c)
}

function V(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, r.jsx)(H, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}