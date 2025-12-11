/** Chunk was on 51235 **/
/** chunk id: 324081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk468363 = require("./468363.js"),
  Chunk326255 = require("./326255.js"),
  Chunk956221 = require("./956221.js"),
  Chunk771173 = require("./771173.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk313201 = require("./313201.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397131 = require("./397131.js");
let w = {
  top: 8,
  bottom: 8,
  left: false,
  right: false
};

function T(e) {
  let {
    channelState: t,
    toggle: n,
    getNumUnreadChannels: i
  } = e;
  return (0, r.jsx)(c.u, {
    text: N.intl.string(N.t.iTcuma),
    children: (0, r.jsx)(u.P3F, {
      className: l()(Z.collapseButton, {
        [Z.collapsed]: null == t ? true : t.collapsed
      }),
      onClick: function() {
        var e;
        null != t && null != n && (n(t), (0, g.yw)(P.rMx.INBOX_CHANNEL_COLLAPSED, {
          channel_id: t.channelId,
          guild_id: t.guildId,
          num_unread_channels_remaining: null != (e = null == i ? true : i()) ? e : 0,
          is_now_collapsed: !t.collapsed
        }))
      },
      children: (0, r.jsx)(_.Z, {
        width: 16,
        height: 16
      })
    })
  })
}

function A(e) {
  var t, n;
  let {
    channel: i,
    children: o,
    gotoChannel: s,
    mentionCount: c,
    channelState: d,
    toggleCollapsed: f,
    showCollapseButton: h = false,
    getNumUnreadChannels: p
  } = e, g = (0, a.JA)("recents-header-".concat(i.id, "-").concat((0, O.Dt)())), b = h && !i.isNSFW() && null != d && "nsfw" !== d.type;
  return (0, r.jsx)(u.tEY, {
    offset: w,
    children: (0, r.jsxs)("div", (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      className: l()(Z.channelHeader, {
        [Z.showCollapseButton]: b
      })
    }, g), n = n = {
      tabIndex: 0,
      "data-recents-channel": i.id,
      onKeyDown: function(e) {
        null != f && null != d && ("ArrowRight" === e.key && d.collapsed || "ArrowLeft" === e.key && !d.collapsed) && (null == f || f(d))
      },
      children: [b && null != d ? (0, r.jsx)(T, {
        channelState: d,
        toggle: f,
        getNumUnreadChannels: p
      }) : null, (0, r.jsx)(R, {
        channel: i,
        gotoChannel: s
      }), (0, r.jsx)(L, {
        channel: i,
        gotoChannel: s,
        mentionCount: c
      }), o]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}

function R(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e;
  return t.isPrivate() ? (0, r.jsx)(D, {
    channel: t,
    gotoChannel: n
  }) : (0, r.jsx)(M, {
    channel: t,
    gotoChannel: n
  })
}

function D(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, i = (0, o.e7)([I.default], () => t.isDM() ? I.default.getUser(t.getRecipientId()) : null), l = null == i ? (0, b.x)(t) : i.getAvatarURL(true, 40);
  return (0, r.jsx)(u.P3F, {
    onClick: n,
    tabIndex: false,
    children: (0, r.jsx)("img", {
      className: Z.dmIcon,
      src: l,
      alt: "",
      "aria-hidden": true
    })
  })
}

function M(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, i = (0, o.e7)([x.Z], () => x.Z.getGuild(t.guild_id));
  return null == i ? null : (0, r.jsx)(v.Z, {
    "aria-hidden": true,
    className: Z.guildIcon,
    guild: i,
    size: v.Z.Sizes.MEDIUM,
    active: true,
    onClick: n,
    tabIndex: false
  })
}

function L(e) {
  let {
    channel: t,
    gotoChannel: n,
    mentionCount: i
  } = e, a = (0, o.e7)([x.Z], () => x.Z.getGuild(t.guild_id)), c = (0, o.e7)([C.Z], () => C.Z.getChannel(t.parent_id)), d = (0, o.e7)([S.ZP], () => S.ZP.getIsMentionLowImportance(t.id)), f = (0, y.KS)(t, a), h = (0, m.ZP)(t, false), p = null == c ? null == a ? true : a.name : "".concat(null == a ? true : a.name, " › ").concat(c.name), g = t.isMultiUserDM() ? N.intl.formatToPlainString(N.t.CxSA5N, {
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, r.jsx)(k, {
    channel: t
  }) : (0, r.jsx)(u.P3F, {
    className: l()(Z.subtext, Z.guildName),
    onClick: n,
    children: p
  });
  return (0, r.jsxs)("div", {
    className: Z.channelNameSection,
    children: [(0, r.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: Z.channelNameHeader,
      children: (0, r.jsxs)(u.P3F, {
        className: Z.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == f ? null : (0, r.jsx)(f, {
          className: t.isForumLikeChannel() ? Z.forumIcon : true,
          width: 18,
          height: 18,
          size: "custom",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          className: Z.channelNameSpan,
          children: h
        }), null != i && i > 0 ? (0, r.jsx)("div", {
          className: Z.badge,
          children: (0, r.jsx)(u.mAB, {
            count: i,
            color: d ? s.Z.colors.BACKGROUND_ACCENT.css : s.Z.colors.STATUS_DANGER.css
          })
        }) : null]
      })
    }), (0, r.jsx)(u.Text, {
      color: "text-default",
      variant: "text-xs/normal",
      className: Z.subtextContainer,
      children: g
    })]
  })
}

function k(e) {
  let {
    channel: t
  } = e, {
    user: n,
    status: i,
    activities: l,
    applicationStream: a
  } = (0, o.cj)([I.default, E.Z, j.Z], () => {
    let e = I.default.getUser(t.getRecipientId());
    return {
      user: e,
      status: null != e ? E.Z.getStatus(e.id) : null,
      activities: null != e ? E.Z.getActivities(e.id) : null,
      applicationStream: null != e ? j.Z.getAnyStreamForUser(e.id) : null
    }
  }), {
    voiceActivityStatusEnabled: s
  } = (0, d.U)({
    location: "RecentsChannelHeader"
  }), {
    voiceChannel: c
  } = (0, h.Z)({
    userId: null == n ? true : n.id
  }), u = s ? c : true;
  return (0, f.Z)({
    activities: l,
    status: i,
    applicationStream: a,
    voiceChannel: u
  }) ? (0, r.jsx)(p.Z, {
    location: "RecentsChannelHeader",
    user: n,
    activities: l,
    applicationStream: a,
    voiceChannel: u,
    hideTooltip: true
  }) : null
}