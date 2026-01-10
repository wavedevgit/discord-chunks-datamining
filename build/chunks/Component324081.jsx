/** Chunk was on 81985 **/
/** chunk id: 324081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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
  Chunk747017 = require("./747017.jsx"),
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
let T = {
  top: 8,
  bottom: 8,
  left: false,
  right: false
};

function A(e) {
  let {
    channelState: t,
    toggle: n,
    getNumUnreadChannels: i
  } = e;
  return (0, r.jsx)(c.u, {
    text: Z.intl.string(Z.t.iTcuma),
    children: (0, r.jsx)(u.P3F, {
      className: l()(N.collapseButton, {
        [N.collapsed]: null == t ? true : t.collapsed
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
      children: (0, r.jsx)(I.Z, {
        width: 16,
        height: 16
      })
    })
  })
}

function w(e) {
  var t, n;
  let {
    channel: i,
    children: o,
    gotoChannel: s,
    mentionCount: c,
    channelState: d,
    toggleCollapsed: p,
    showCollapseButton: f = false,
    getNumUnreadChannels: h
  } = e, g = (0, a.JA)("recents-header-".concat(i.id, "-").concat((0, v.Dt)())), m = f && !i.isNSFW() && null != d && "nsfw" !== d.type;
  return (0, r.jsx)(u.tEY, {
    offset: T,
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
      className: l()(N.channelHeader, {
        [N.showCollapseButton]: m
      })
    }, g), n = n = {
      tabIndex: 0,
      "data-recents-channel": i.id,
      onKeyDown: function(e) {
        null != p && null != d && ("ArrowRight" === e.key && d.collapsed || "ArrowLeft" === e.key && !d.collapsed) && (null == p || p(d))
      },
      children: [m && null != d ? (0, r.jsx)(A, {
        channelState: d,
        toggle: p,
        getNumUnreadChannels: h
      }) : null, (0, r.jsx)(R, {
        channel: i,
        gotoChannel: s
      }), (0, r.jsx)(k, {
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
  } = e, i = (0, o.e7)([_.default], () => t.isDM() ? _.default.getUser(t.getRecipientId()) : null), l = null == i ? (0, m.x)(t) : i.getAvatarURL(true, 40);
  return (0, r.jsx)(u.P3F, {
    onClick: n,
    tabIndex: false,
    children: (0, r.jsx)("img", {
      className: N.dmIcon,
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
  } = e, i = (0, o.e7)([C.Z], () => C.Z.getGuild(t.guild_id));
  return null == i ? null : (0, r.jsx)(O.Z, {
    "aria-hidden": true,
    className: N.guildIcon,
    guild: i,
    size: O.Z.Sizes.MEDIUM,
    active: true,
    onClick: n,
    tabIndex: false
  })
}

function k(e) {
  let {
    channel: t,
    gotoChannel: n,
    mentionCount: i
  } = e, a = (0, o.e7)([C.Z], () => C.Z.getGuild(t.guild_id)), c = (0, o.e7)([x.Z], () => x.Z.getChannel(t.parent_id)), d = (0, o.e7)([S.ZP], () => S.ZP.getIsMentionLowImportance(t.id)), p = (0, y.KS)(t, a), f = (0, b.ZP)(t, false), h = null == c ? null == a ? true : a.name : "".concat(null == a ? true : a.name, " › ").concat(c.name), g = t.isMultiUserDM() ? Z.intl.formatToPlainString(Z.t.CxSA5N, {
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, r.jsx)(L, {
    channel: t
  }) : (0, r.jsx)(u.P3F, {
    className: l()(N.subtext, N.guildName),
    onClick: n,
    children: h
  });
  return (0, r.jsxs)("div", {
    className: N.channelNameSection,
    children: [(0, r.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: N.channelNameHeader,
      children: (0, r.jsxs)(u.P3F, {
        className: N.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == p ? null : (0, r.jsx)(p, {
          className: t.isForumLikeChannel() ? N.forumIcon : true,
          width: 18,
          height: 18,
          size: "custom",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          className: N.channelNameSpan,
          children: f
        }), null != i && i > 0 ? (0, r.jsx)("div", {
          className: N.badge,
          children: (0, r.jsx)(u.mAB, {
            count: i,
            color: d ? s.Z.colors.BACKGROUND_ACCENT.css : s.Z.colors.STATUS_DANGER.css
          })
        }) : null]
      })
    }), (0, r.jsx)(u.Text, {
      color: "text-default",
      variant: "text-xs/normal",
      className: N.subtextContainer,
      children: g
    })]
  })
}

function L(e) {
  let {
    channel: t
  } = e, {
    user: n,
    status: i,
    activities: l,
    applicationStream: a
  } = (0, o.cj)([_.default, E.Z, j.Z], () => {
    let e = _.default.getUser(t.getRecipientId());
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
  } = (0, f.Z)({
    userId: null == n ? true : n.id
  }), u = s ? c : true;
  return (0, p.Z)({
    activities: l,
    status: i,
    applicationStream: a,
    voiceChannel: u
  }) ? (0, r.jsx)(h.Z, {
    user: n,
    activities: l,
    applicationStream: a,
    voiceChannel: u,
    hideTooltip: true
  }) : null
}