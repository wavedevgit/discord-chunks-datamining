/** Chunk was on web.js **/
/** chunk id: 549527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Y
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

function V(e) {
  let {
    message: t,
    snapshot: n,
    index: u
  } = e, f = i.useMemo(() => new d.j(t, n, u), [t, n, u]), _ = (0, s.bG)([N.A, L.default, D.A, P.A, w.A, p.A], () => f.getForwardInfo(N.A, L.default, D.A, P.A, w.A, p.A).footerInfo, [f], o.A), h = i.useCallback(() => {
    var e, n;
    let r = N.A.getChannel(t.channel_id),
      i = w.A.getGuild(null == r ? true : r.guild_id),
      a = null == (e = t.messageReference) ? true : e.channel_id,
      s = x.A.getCurrentlySelectedChannelId(),
      o = C.Ay.getCurrentSidebarChannelId(null == (n = t.messageReference) ? true : n.channel_id),
      l = s === a && o === (null == r ? true : r.id);
    null == r || null == i || l || null == a || (I.A.openModReportAsSidebar({
      channelId: r.id,
      baseChannelId: a,
      guildId: r.guild_id
    }), (0, S.iN)(a), j.default.track(k.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
      moderator_report_id: t.channel_id,
      destination_channel_id: a,
      destination_message_id: t.id
    }))
  }, [t]);
  return null == _ ? null : (0, r.jsxs)(c.DUT, {
    className: G.xQ,
    onClick: h,
    "aria-label": _.accessibilityLabel,
    children: [null != _.originIconUrl ? (0, r.jsx)("img", {
      className: G.yl,
      src: _.originIconUrl,
      alt: ""
    }) : null, (0, r.jsx)(a.EYj, {
      className: G.PJ,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(_.originLabel, "  •  ").concat(_.timestampLabel)
    }), (0, r.jsx)(c._BQ, {
      size: "xxs",
      color: l.A.colors.TEXT_MUTED
    })]
  })
}

function F(e, t) {
  let {
    popouts: n,
    setPopout: r
  } = (0, O.A)(e.id, U.Fd), {
    usernameProfile: a,
    avatarProfile: s
  } = n, o = (0, y.m)(e, t, a, r);
  return {
    onClickUsername: o,
    onClickAvatar: (0, y.Jo)(s, r),
    onPopoutRequestClose: i.useCallback(() => r({
      usernameProfile: false,
      avatarProfile: false,
      referencedUsernameProfile: false
    }), [r]),
    showUsernamePopout: a,
    showAvatarPopout: s
  }
}

function B(e) {
  let {
    mergedMessageRecord: t,
    content: n,
    channel: i,
    reportingUserId: a,
    reportedTimestamp: s
  } = e, o = (0, h.m2)(t.author, i), {
    onClickUsername: l,
    onClickAvatar: c,
    onPopoutRequestClose: u,
    showUsernamePopout: d,
    showAvatarPopout: f
  } = F(t, i);
  return (0, r.jsx)(m.A, {
    childrenExecutedCommand: (0, r.jsx)(M.A, {
      reportingUserId: a,
      guildId: i.guild_id,
      channel: i,
      messageId: t.id,
      reportedTimestamp: s,
      compact: false
    }),
    childrenHeader: (0, r.jsx)(E.Ay, {
      message: t,
      channel: i,
      author: o,
      guildId: i.guild_id,
      hideTimestamp: true,
      onClickUsername: l,
      onClickAvatar: c,
      onPopoutRequestClose: u,
      showUsernamePopout: d,
      showAvatarPopout: f,
      renderPopout: b.A,
      compact: false,
      displayCompactAvatars: false
    }),
    childrenMessageContent: (0, r.jsx)(g.Ay, {
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
  var t, n, a;
  let {
    message: o,
    snapshot: l,
    index: c
  } = e, [d, p] = i.useState(true);
  i.useEffect(() => {
    var e;
    (null == l || null == (e = l.moderatorReport) ? true : e.reported_user_id) != null && (0, u.wz)(l.moderatorReport.reported_user_id).then(e => {
      p(e)
    }).catch(() => {})
  }, [null == l || null == (n = l.moderatorReport) ? true : n.reported_user_id]);
  let h = i.useMemo(() => {
      var e;
      let t = (0, f.A)(o, l);
      return null != d && (null == l || null == (e = l.moderatorReport) ? true : e.reported_user_id) != null ? t.set("author", d) : t
    }, [o, l, d]),
    m = T.hD.useSetting(),
    g = T.rs.useSetting(),
    E = m && g,
    b = (0, s.bG)([R.A], () => R.A.isDeveloper),
    y = (0, _.S)((null != (t = h.editedTimestamp) ? t : h.timestamp).valueOf()),
    {
      content: O,
      hasSpoilerEmbeds: S,
      hasBailedAst: I
    } = (0, A.A)(h, {
      hideSimpleEmbedContent: E,
      isInteracting: false,
      formatInline: false,
      allowList: y,
      allowHeading: y,
      allowLinks: true,
      allowDevLinks: b,
      previewLinkTarget: true
    }),
    C = (0, s.bG)([N.A], () => N.A.getChannel(o.channel_id));
  return null == C ? null : (0, r.jsx)("div", {
    className: G.kL,
    children: (0, r.jsxs)("div", {
      className: G.Qs,
      children: [(0, r.jsx)(B, {
        mergedMessageRecord: h,
        content: O,
        channel: C,
        reportingUserId: null == l || null == (a = l.moderatorReport) ? true : a.reporting_user_id,
        reportedTimestamp: o.timestamp
      }), (0, v.A)({
        channelMessageProps: {
          message: h,
          channel: C,
          compact: false
        },
        hasSpoilerEmbeds: S,
        hasBailedAst: I,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false,
        className: G.Mf
      }), (0, r.jsx)(V, {
        message: o,
        snapshot: l,
        index: c
      })]
    })
  }, c)
}

function Y(e) {
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