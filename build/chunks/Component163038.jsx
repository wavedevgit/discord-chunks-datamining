/** Chunk was on 66866 **/
/** chunk id: 163038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk100604 = require("./100604.js"),
  Chunk39154 = require("./39154.js"),
  Chunk356264 = require("./356264.js"),
  Chunk628238 = require("./628238.js"),
  Chunk739566 = require("./739566.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk930282 = require("./930282.jsx"),
  Chunk464891 = require("./464891.jsx"),
  Chunk507418 = require("./507418.jsx"),
  Chunk348238 = require("./348238.jsx"),
  Chunk38267 = require("./38267.js"),
  Chunk25015 = require("./25015.jsx"),
  Chunk438075 = require("./438075.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk6025 = require("./6025.js"),
  Chunk695346 = require("./695346.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk906467 = require("./906467.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk22665 = require("./22665.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk953278 = require("./953278.js");

function F(e) {
  let {
    message: t,
    snapshot: n,
    index: u
  } = e, p = i.useMemo(() => new d.r(t, n, u), [t, n, u]), f = (0, a.e7)([T.Z, R.default, w.Z, A.Z, N.Z, m.Z], () => p.getForwardInfo(T.Z, R.default, w.Z, A.Z, N.Z, m.Z).footerInfo, [p], o.Z), _ = i.useCallback(() => {
    var e, n;
    let r = T.Z.getChannel(t.channel_id),
      i = N.Z.getGuild(null == r ? true : r.guild_id),
      l = null == (e = t.messageReference) ? true : e.channel_id,
      a = Z.Z.getCurrentlySelectedChannelId(),
      o = S.ZP.getCurrentSidebarChannelId(null == (n = t.messageReference) ? true : n.channel_id),
      s = a === l && o === (null == r ? true : r.id);
    null == r || null == i || s || null == l || (j.Z.openModReportAsSidebar({
      channelId: r.id,
      baseChannelId: l,
      guildId: r.guild_id
    }), (0, x.Kh)(l), L.default.track(M.rMx.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
      moderator_report_id: t.channel_id,
      destination_channel_id: l,
      destination_message_id: t.id
    }))
  }, [t]);
  return null == f ? null : (0, r.jsxs)(c.P3F, {
    className: U.footerContainer,
    onClick: _,
    children: [null != f.originIconUrl ? (0, r.jsx)("img", {
      className: U.originIcon,
      src: f.originIconUrl,
      alt: ""
    }) : null, (0, r.jsx)(l.xv, {
      className: U.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(f.originLabel, "  •  ").concat(f.timestampLabel)
    }), (0, r.jsx)(c.Fbu, {
      size: "xxs",
      color: s.Z.colors.TEXT_LOW_CONTRAST
    })]
  })
}

function B(e) {
  let {
    mergedMessageRecord: t,
    content: n,
    channel: l,
    reportingUserId: a,
    reportedTimestamp: o
  } = e, s = (0, _.JZ)(t.author, l), {
    onClickUsername: c,
    onClickAvatar: u,
    onPopoutRequestClose: d,
    showUsernamePopout: p,
    showAvatarPopout: m
  } = function(e, t) {
    let {
      popouts: n,
      setPopout: r
    } = (0, v.Z)(e.id, k.d$), {
      usernameProfile: l,
      avatarProfile: a
    } = n, o = (0, C.XO)(e, t, l, r);
    return {
      onClickUsername: o,
      onClickAvatar: (0, C.R9)(a, r),
      onPopoutRequestClose: i.useCallback(() => r({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      }), [r]),
      showUsernamePopout: l,
      showAvatarPopout: a
    }
  }(t, l);
  return (0, r.jsx)(g.Z, {
    childrenExecutedCommand: (0, r.jsx)(D.Z, {
      reportingUserId: a,
      guildId: l.guild_id,
      channel: l,
      messageId: t.id,
      reportedTimestamp: o,
      compact: false
    }),
    childrenHeader: (0, r.jsx)(b.ZP, {
      message: t,
      channel: l,
      author: s,
      guildId: l.guild_id,
      hideTimestamp: true,
      onClickUsername: c,
      onClickAvatar: u,
      onPopoutRequestClose: d,
      showUsernamePopout: p,
      showAvatarPopout: m,
      renderPopout: E.Z,
      compact: false,
      displayCompactAvatars: false
    }),
    childrenMessageContent: (0, r.jsx)(h.ZP, {
      message: t,
      content: n,
      compact: false
    }),
    disableInteraction: true,
    compact: false,
    className: U.message,
    author: s
  })
}

function G(e) {
  var t, n, l;
  let {
    message: o,
    snapshot: s,
    index: c
  } = e, [d, m] = i.useState(true);
  i.useEffect(() => {
    var e;
    (null == s || null == (e = s.moderatorReport) ? true : e.reported_user_id) != null && (0, u.PR)(s.moderatorReport.reported_user_id).then(e => {
      m(e)
    }).catch(() => {})
  }, [null == s || null == (t = s.moderatorReport) ? true : t.reported_user_id]);
  let _ = i.useMemo(() => {
      var e;
      let t = (0, p.Z)(o, s);
      return null != d && (null == s || null == (e = s.moderatorReport) ? true : e.reported_user_id) != null ? t.set("author", d) : t
    }, [o, s, d]),
    g = I.RS.useSetting(),
    h = I.NA.useSetting(),
    b = (0, a.e7)([P.Z], () => P.Z.isDeveloper),
    E = (0, f.A)((null != (l = _.editedTimestamp) ? l : _.timestamp).valueOf()),
    {
      content: C,
      hasSpoilerEmbeds: v
    } = (0, O.Z)(_, {
      hideSimpleEmbedContent: g && h,
      isInteracting: false,
      formatInline: false,
      allowList: E,
      allowHeading: E,
      allowLinks: true,
      allowDevLinks: b,
      previewLinkTarget: true
    }),
    x = (0, a.e7)([T.Z], () => T.Z.getChannel(o.channel_id));
  return null == x ? null : (0, r.jsx)("div", {
    className: U.container,
    children: (0, r.jsxs)("div", {
      className: U.content,
      children: [(0, r.jsx)(B, {
        mergedMessageRecord: _,
        content: C,
        channel: x,
        reportingUserId: null == s || null == (n = s.moderatorReport) ? true : n.reporting_user_id,
        reportedTimestamp: o.timestamp
      }), (0, y.Z)({
        channelMessageProps: {
          message: _,
          channel: x,
          compact: false
        },
        hasSpoilerEmbeds: v,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false,
        className: U.nestedAccessories
      }), (0, r.jsx)(F, {
        message: o,
        snapshot: s,
        index: c
      })]
    })
  }, c)
}

function H(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, r.jsx)(G, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}