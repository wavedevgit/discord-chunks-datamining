/** Chunk was on web.js **/
/** chunk id: 267128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B,
  f: () => G
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk407477 = require("./407477.js"),
  Chunk387188 = require("./387188.jsx"),
  Chunk978003 = require("./978003.js"),
  Chunk39154 = require("./39154.js"),
  Chunk245216 = require("./245216.jsx"),
  Chunk79390 = require("./79390.js"),
  Chunk869765 = require("./869765.js"),
  Chunk403132 = require("./403132.js"),
  Chunk378233 = require("./378233.js"),
  Chunk768581 = require("./768581.js"),
  Chunk55935 = require("./55935.js"),
  Chunk823379 = require("./823379.js"),
  Chunk453687 = require("./453687.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk123145 = require("./123145.jsx"),
  Chunk223021 = require("./223021.js"),
  Chunk217702 = require("./217702.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk724913 = require("./724913.js"),
  Chunk430864 = require("./430864.js");

function x(e) {
  let {
    width: t = 12,
    height: n = 8,
    color: i = "currentColor",
    className: o,
    foreground: a
  } = e;
  return (0, r.jsx)("svg", {
    className: o,
    width: t,
    height: n,
    viewBox: "0 0 12 8",
    children: (0, r.jsx)("path", {
      d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
      className: a,
      fill: i
    })
  })
}

function L(e) {
  let {
    width: t = 18,
    height: n = 18,
    className: i,
    foreground: o
  } = e;
  return (0, r.jsx)("svg", {
    className: i,
    width: t,
    height: n,
    viewBox: "0 0 18 18",
    children: (0, r.jsx)("path", {
      fill: "#3ba55c",
      d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
      className: o
    })
  })
}

function j(e, t, n, i, o, s) {
  return (0, r.jsx)("img", {
    alt: "",
    src: (null == t ? true : t.guildMemberAvatar) != null && null != n ? (0, O.JM)({
      guildId: n,
      userId: e.id,
      avatar: t.guildMemberAvatar
    }) : e.getAvatarURL(n, 16),
    onClick: i,
    onContextMenu: o,
    className: a()({
      [w.replyAvatar]: true,
      [w.clickable]: null != i
    }),
    ref: s
  })
}

function M(e, t, n) {
  let {
    referencedMessage: o,
    channel: a,
    compact: s,
    isReplyAuthorBlocked: l,
    repliedAuthor: f,
    showAvatarPopout: _,
    onClickAvatar: p,
    onContextMenu: h,
    onPopoutRequestClose: m
  } = e, {
    analyticsLocations: g
  } = (0, d.ZP)(u.Z.AVATAR), b = i.useRef(null);
  if (s || o.state !== E.Y.LOADED || l) return n === R.uaV.CONTEXT_MENU_COMMAND ? (0, r.jsx)("div", {
    className: w.replyChatIconContainer,
    children: (0, r.jsx)(c.kBi, {
      size: "xs"
    })
  }) : (0, r.jsx)("div", {
    className: w.replyBadge,
    children: (0, r.jsx)(x, {
      className: w.replyIcon
    })
  });
  if (o.message.type === R.uaV.USER_JOIN || o.message.type === R.uaV.ROLE_SUBSCRIPTION_PURCHASE || o.message.type === R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || o.message.type === R.uaV.GUILD_GAMING_STATS_PROMPT) return (0, r.jsx)(L, {
    className: w.userJoinSystemMessageIcon
  });
  if (o.message.type === R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, r.jsx)(c.Prq, {
    size: "md",
    color: "currentColor",
    className: w.ticketIcon
  });
  if (o.message.type === R.uaV.POLL_RESULT) return (0, r.jsx)(c.QDj, {
    className: w.repliedTextContentLeadingIcon,
    width: N.WW,
    height: N.WW,
    size: "custom"
  });
  let y = () => j(o.message.author, f, a.guild_id, p, h, b);
  return null != t && null != _ ? (0, r.jsx)(d.Gt, {
    value: g,
    children: (0, r.jsx)(c.yRy, {
      targetElementRef: b,
      renderPopout: t,
      shouldShow: _,
      position: "right",
      onRequestClose: m,
      children: y
    })
  }) : (0, r.jsx)(d.Gt, {
    value: g,
    children: y()
  })
}

function k(e, t) {
  let {
    baseMessage: n,
    channel: i,
    referencedMessage: o,
    showUsernamePopout: a,
    onClickUsername: s,
    onContextMenu: l,
    onPopoutRequestClose: c
  } = e, u = (null == o ? true : o.state) === E.Y.LOADED ? o.message : true;
  return null == u || u.type === R.uaV.USER_JOIN || u.type === R.uaV.ROLE_SUBSCRIPTION_PURCHASE || u.type === R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || u.type === R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || u.type === R.uaV.GUILD_GAMING_STATS_PROMPT || u.type === R.uaV.POLL_RESULT ? null : (0, r.jsx)(A.Z, {
    message: u,
    channel: i,
    compact: true,
    withMentionPrefix: (0, b.Z)(n, u),
    showPopout: a,
    renderPopout: t,
    onClick: s,
    onContextMenu: l,
    onPopoutRequestClose: c,
    isRepliedMessage: true
  })
}

function U(e, t, n) {
  let {
    content: i,
    referencedMessage: o,
    isReplyAuthorBlocked: s,
    isReplyAuthorIgnored: l,
    onClickReply: u
  } = e, d = o.state !== E.Y.DELETED ? u : true;
  switch (o.state) {
    case E.Y.LOADED: {
      let {
        contentPlaceholder: e,
        renderedContent: u,
        trailingIcon: f,
        leadingIcon: _
      } = G(o.message, i, s, l, w.repliedTextContent, {
        trailingIconClass: w.repliedTextContentTrailingIcon,
        leadingIconClass: w.repliedTextContentLeadingIcon,
        iconSize: N.WW
      });
      return (0, r.jsxs)(r.Fragment, {
        children: [_, (0, r.jsx)(c.P3F, {
          className: a()(w.repliedTextPreview, w.clickable, {
            [w.repliedMessageClickableSpineHovered]: t
          }),
          onClick: d,
          onMouseEnter: n,
          onMouseLeave: n,
          children: (0, r.jsx)(c.nuw, {
            children: null != u ? u : (0, r.jsx)("span", {
              className: w.repliedTextPlaceholder,
              children: e
            })
          })
        }), f]
      })
    }
    case E.Y.NOT_LOADED:
      return (0, r.jsx)(c.P3F, {
        className: a()(w.repliedTextPreview, w.clickable),
        onClick: d,
        children: (0, r.jsx)("span", {
          className: w.repliedTextPlaceholder,
          children: P.intl.string(P.t["1i+hMj"])
        })
      });
    case E.Y.DELETED:
      return (0, r.jsx)("div", {
        className: w.repliedTextPreview,
        children: (0, r.jsx)("span", {
          className: w.repliedTextPlaceholder,
          children: P.intl.string(P.t.mE3KJC)
        })
      });
    default:
      (0, I.vE)(o)
  }
}

function G(e, t, n, i, o, s) {
  let l, u, d, f, E = (0, h.Z)(e),
    {
      trailingIconClass: b,
      leadingIconClass: O,
      iconSize: v
    } = s,
    I = null == t || "" === t || Array.isArray(t) && 0 === t.length,
    T = (0, y.cv)(E).length > 0,
    A = null != E.interaction,
    C = E.hasFlag(R.iLy.IS_VOICE_MESSAGE),
    N = E.isPoll(),
    x = E.type === R.uaV.POLL_RESULT;
  if ((0, p.Z)(e) && (f = (0, r.jsx)(m.Z, {
      size: "custom",
      className: O,
      width: v,
      height: v
    })), n) l = P.intl.string(P.t.XAkOo6);
  else if (i) l = P.intl.string(P.t.G7p6v7);
  else if (E.type === R.uaV.CHANNEL_PINNED_MESSAGE) l = P.intl.string(P.t.sCfDDg);
  else if (E.type === R.uaV.EMOJI_ADDED) u = (0, r.jsx)(_.Zh, {
    message: E,
    rendered: t
  });
  else if (I)
    if (N) {
      var L, j;
      u = (0, r.jsx)("div", {
        className: a()(w.repliedTextContent, D.markup),
        children: null == E || null == (j = E.poll) || null == (L = j.question) ? true : L.text
      })
    } else x ? l = (0, g.N4)(E) : T ? l = P.intl.string(P.t.kHdYCQ) : A ? l = P.intl.string(P.t["E+6SSU"]) : C ? l = P.intl.string(P.t["XC3A5+"]) : E.hasFlag(R.iLy.IS_COMPONENTS_V2) ? l = P.intl.string(P.t.Xxat6e) : (l = P.intl.string(P.t["6hGo0d"]), d = (0, r.jsx)(c.XBm, {
      size: "custom",
      color: "currentColor",
      className: b,
      width: v,
      height: v
    }));
  else u = (0, r.jsx)(S.ZP, {
    message: E,
    content: t,
    className: o,
    compact: true
  });
  return T ? d = (0, r.jsx)(c.B7q, {
    size: "custom",
    color: "currentColor",
    className: b,
    width: v,
    height: v
  }) : A ? d = (0, r.jsx)(c.SsZ, {
    size: "custom",
    color: "currentColor",
    className: b,
    width: v,
    height: v
  }) : C ? d = (0, r.jsx)(c.S6n, {
    size: "custom",
    color: "currentColor",
    className: b,
    width: 19 / 24 * v,
    height: v
  }) : (E.attachments.length > 0 || E.embeds.length > 0) && !x && (d = (0, r.jsx)(c.XBm, {
    size: "custom",
    color: "currentColor",
    className: b,
    width: v,
    height: v
  })), {
    contentPlaceholder: l,
    renderedContent: u,
    trailingIcon: d,
    leadingIcon: f
  }
}

function B(e) {
  let t, {
      repliedAuthor: n,
      baseAuthor: o,
      baseMessage: s,
      referencedMessage: u,
      renderPopout: d,
      isReplySpineClickable: _,
      showReplySpine: p
    } = e,
    {
      canShowReactionsOnMessageHover: h
    } = f.ZP.useExperiment({
      location: "RepliedMessage"
    }, {
      autoTrackExposure: false
    }),
    [m, g] = i.useState(false),
    b = i.useMemo(() => null != d && u.state === E.Y.LOADED ? e => d(e, u.message) : true, [u, d]),
    y = i.useCallback(() => g(e => !e), []),
    O = M(e, b, s.type),
    I = k(e, b),
    S = U(e, m, y),
    A = i.useMemo(() => e.compact ? (0, C.Z)((0, v.vc)(l()(), "LT")) : null, [e.compact]);
  null != n && null != o && (t = P.intl.formatToPlainString(P.t.RhbQ2N, {
    author: null == o ? true : o.nick,
    repliedAuthor: null == n ? true : n.nick
  }));
  let N = s.type === R.uaV.CONTEXT_MENU_COMMAND;
  return (0, r.jsxs)("div", {
    id: (0, T.Gq)(s),
    className: a()(w.repliedMessage, A, N ? w.contextCommandMessage : {
      [w.messageSpine]: !h || !_ && p
    }),
    "aria-label": t,
    children: [h && _ && p && (0, r.jsx)(c.P3F, {
      tag: "div",
      "aria-label": P.intl.string(P.t.dpjpOj),
      className: a()(w.repliedMessageClickableSpine, {
        [w.repliedMessageContentHovered]: m
      }),
      onClick: e.onClickReply,
      onMouseEnter: y,
      onMouseLeave: y
    }), O, I, S]
  })
}