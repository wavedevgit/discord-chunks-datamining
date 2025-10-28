/** Chunk was on web.js **/
/** chunk id: 163038, original params: e,t,n (module,exports,re quire) **/
"use strict";
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

function B(e) {
  let {
    message: t,
    snapshot: n,
    index: u
  } = e, f = i.useMemo(() => new d.r(t, n, u), [t, n, u]), p = (0, o.e7)([N.Z, x.default, D.Z, w.Z, P.Z, _.Z], () => f.getForwardInfo(N.Z, x.default, D.Z, w.Z, P.Z, _.Z).footerInfo, [f], s.Z), h = i.useCallback(() => {
    var e, n;
    let r = N.Z.getChannel(t.channel_id),
      i = P.Z.getGuild(null == r ? true : r.guild_id),
      a = null == (e = t.messageReference) ? true : e.channel_id,
      o = L.Z.getCurrentlySelectedChannelId(),
      s = C.ZP.getCurrentSidebarChannelId(null == (n = t.messageReference) ? true : n.channel_id),
      l = o === a && s === (null == r ? true : r.id);
    null == r || null == i || l || null == a || (S.Z.openModReportAsSidebar({
      channelId: r.id,
      baseChannelId: a,
      guildId: r.guild_id
    }), (0, T.Kh)(a), M.default.track(j.rMx.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
      moderator_report_id: t.channel_id,
      destination_channel_id: a,
      destination_message_id: t.id
    }))
  }, [t]);
  return null == p ? null : (0, r.jsxs)(c.P3F, {
    className: G.footerContainer,
    onClick: h,
    children: [null != p.originIconUrl ? (0, r.jsx)("img", {
      className: G.originIcon,
      src: p.originIconUrl,
      alt: ""
    }) : null, (0, r.jsx)(a.xvT, {
      className: G.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(p.originLabel, "  •  ").concat(p.timestampLabel)
    }), (0, r.jsx)(c.Fbu, {
      size: "xxs",
      color: l.Z.colors.TEXT_LOW_CONTRAST
    })]
  })
}

function Z(e, t) {
  let {
    popouts: n,
    setPopout: r
  } = (0, O.Z)(e.id, U.d$), {
    usernameProfile: a,
    avatarProfile: o
  } = n, s = (0, y.XO)(e, t, a, r);
  return {
    onClickUsername: s,
    onClickAvatar: (0, y.R9)(o, r),
    onPopoutRequestClose: i.useCallback(() => r({
      usernameProfile: false,
      avatarProfile: false,
      referencedUsernameProfile: false
    }), [r]),
    showUsernamePopout: a,
    showAvatarPopout: o
  }
}

function F(e) {
  let {
    mergedMessageRecord: t,
    content: n,
    channel: i,
    reportingUserId: a,
    reportedTimestamp: o
  } = e, s = (0, h.JZ)(t.author, i), {
    onClickUsername: l,
    onClickAvatar: c,
    onPopoutRequestClose: u,
    showUsernamePopout: d,
    showAvatarPopout: f
  } = Z(t, i);
  return (0, r.jsx)(m.Z, {
    childrenExecutedCommand: (0, r.jsx)(k.Z, {
      reportingUserId: a,
      guildId: i.guild_id,
      channel: i,
      messageId: t.id,
      reportedTimestamp: o,
      compact: false
    }),
    childrenHeader: (0, r.jsx)(E.ZP, {
      message: t,
      channel: i,
      author: s,
      guildId: i.guild_id,
      hideTimestamp: true,
      onClickUsername: l,
      onClickAvatar: c,
      onPopoutRequestClose: u,
      showUsernamePopout: d,
      showAvatarPopout: f,
      renderPopout: b.Z,
      compact: false,
      displayCompactAvatars: false
    }),
    childrenMessageContent: (0, r.jsx)(g.ZP, {
      message: t,
      content: n,
      compact: false
    }),
    disableInteraction: true,
    compact: false,
    className: G.message,
    author: s
  })
}

function V(e) {
  var t, n, a;
  let {
    message: s,
    snapshot: l,
    index: c
  } = e, [d, _] = i.useState(true);
  i.useEffect(() => {
    var e;
    (null == l || null == (e = l.moderatorReport) ? true : e.reported_user_id) != null && (0, u.PR)(l.moderatorReport.reported_user_id).then(e => {
      _(e)
    }).catch(() => {})
  }, [null == l || null == (t = l.moderatorReport) ? true : t.reported_user_id]);
  let h = i.useMemo(() => {
      var e;
      let t = (0, f.Z)(s, l);
      return null != d && (null == l || null == (e = l.moderatorReport) ? true : e.reported_user_id) != null ? t.set("author", d) : t
    }, [s, l, d]),
    m = A.RS.useSetting(),
    g = A.NA.useSetting(),
    E = m && g,
    b = (0, o.e7)([R.Z], () => R.Z.isDeveloper),
    y = (0, p.A)((null != (a = h.editedTimestamp) ? a : h.timestamp).valueOf()),
    {
      content: O,
      hasSpoilerEmbeds: T
    } = (0, v.Z)(h, {
      hideSimpleEmbedContent: E,
      isInteracting: false,
      formatInline: false,
      allowList: y,
      allowHeading: y,
      allowLinks: true,
      allowDevLinks: b,
      previewLinkTarget: true
    }),
    S = (0, o.e7)([N.Z], () => N.Z.getChannel(s.channel_id));
  return null == S ? null : (0, r.jsx)("div", {
    className: G.container,
    children: (0, r.jsxs)("div", {
      className: G.content,
      children: [(0, r.jsx)(F, {
        mergedMessageRecord: h,
        content: O,
        channel: S,
        reportingUserId: null == l || null == (n = l.moderatorReport) ? true : n.reporting_user_id,
        reportedTimestamp: s.timestamp
      }), (0, I.Z)({
        channelMessageProps: {
          message: h,
          channel: S,
          compact: false
        },
        hasSpoilerEmbeds: T,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false,
        className: G.nestedAccessories
      }), (0, r.jsx)(B, {
        message: s,
        snapshot: l,
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
    children: t.messageSnapshots.map((e, n) => (0, r.jsx)(V, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}