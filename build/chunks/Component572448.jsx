/** Chunk was on 67564 **/
/** chunk id: 572448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk901517 = require("./901517.js"),
  Chunk397244 = require("./397244.js"),
  Chunk714114 = require("./714114.js"),
  Chunk729551 = require("./729551.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk915089 = require("./915089.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk290863 = require("./290863.js"),
  Chunk222823 = require("./222823.js"),
  Chunk287809 = require("./287809.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk386590 = require("./386590.js");
let P = {
  top: 8,
  bottom: 8,
  left: false,
  right: false
};

function w(e) {
  let {
    channelState: t,
    toggle: n,
    getNumUnreadChannels: l
  } = e;
  return (0, r.jsx)(c.m_, {
    text: N.intl.string(N.t.iTcuma),
    children: (0, r.jsx)(u.DUT, {
      className: i()(T.cS, {
        [T.yZ]: null == t ? true : t.collapsed
      }),
      onClick: function() {
        var e;
        null != t && null != n && (n(t), (0, g.zV)(I.HAw.INBOX_CHANNEL_COLLAPSED, {
          channel_id: t.channelId,
          guild_id: t.guildId,
          num_unread_channels_remaining: null != (e = null == l ? true : l()) ? e : 0,
          is_now_collapsed: !t.collapsed
        }))
      },
      children: (0, r.jsx)(S.A, {
        width: 16,
        height: 16
      })
    })
  })
}

function R(e) {
  var t, n;
  let {
    channel: l,
    children: a,
    gotoChannel: o,
    mentionCount: c,
    channelState: d,
    toggleCollapsed: p,
    showCollapseButton: h = false,
    getNumUnreadChannels: f
  } = e, g = (0, s.rm)("recents-header-".concat(l.id, "-").concat((0, y.GV)())), m = h && !l.isNSFW() && null != d && "nsfw" !== d.type;
  return (0, r.jsx)(u.vN3, {
    offset: P,
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
      className: i()(T.ZO, {
        [T.b4]: m
      })
    }, g), n = n = {
      tabIndex: 0,
      "data-recents-channel": l.id,
      onKeyDown: function(e) {
        null != p && null != d && ("ArrowRight" === e.key && d.collapsed || "ArrowLeft" === e.key && !d.collapsed) && (null == p || p(d))
      },
      children: [m && null != d ? (0, r.jsx)(w, {
        channelState: d,
        toggle: p,
        getNumUnreadChannels: f
      }) : null, (0, r.jsx)(D, {
        channel: l,
        gotoChannel: o
      }), (0, r.jsx)(k, {
        channel: l,
        gotoChannel: o,
        mentionCount: c
      }), a]
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

function D(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e;
  return t.isPrivate() ? (0, r.jsx)(M, {
    channel: t,
    gotoChannel: n
  }) : (0, r.jsx)(L, {
    channel: t,
    gotoChannel: n
  })
}

function M(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, l = (0, a.bG)([C.default], () => t.isDM() ? C.default.getUser(t.getRecipientId()) : null), i = null == l ? (0, m.Y)(t) : l.getAvatarURL(true, 40);
  return (0, r.jsx)(u.DUT, {
    onClick: n,
    tabIndex: false,
    children: (0, r.jsx)("img", {
      className: T.ro,
      src: i,
      alt: "",
      "aria-hidden": true
    })
  })
}

function L(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, l = (0, a.bG)([v.A], () => v.A.getGuild(t.guild_id));
  return null == l ? null : (0, r.jsx)(_.A, {
    "aria-hidden": true,
    className: T.$f,
    guild: l,
    size: _.A.Sizes.MEDIUM,
    active: true,
    onClick: n,
    tabIndex: false
  })
}

function k(e) {
  let {
    channel: t,
    gotoChannel: n,
    mentionCount: l
  } = e, s = (0, a.bG)([v.A], () => v.A.getGuild(t.guild_id)), c = (0, a.bG)([j.A], () => j.A.getChannel(t.parent_id)), d = (0, a.bG)([E.Ay], () => E.Ay.getIsMentionLowImportance(t.id)), p = (0, A.gU)(t, s), h = (0, b.Ay)(t, false), f = null == c ? null == s ? true : s.name : "".concat(null == s ? true : s.name, " › ").concat(c.name), g = t.isMultiUserDM() ? N.intl.formatToPlainString(N.t.CxSA5N, {
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, r.jsx)(G, {
    channel: t
  }) : (0, r.jsx)(u.DUT, {
    className: i()(T.W$, T.J5),
    onClick: n,
    children: f
  });
  return (0, r.jsxs)("div", {
    className: T.yP,
    children: [(0, r.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: T.un,
      children: (0, r.jsxs)(u.DUT, {
        className: T.HA,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == p ? null : (0, r.jsx)(p, {
          className: t.isForumLikeChannel() ? T.dj : true,
          width: 18,
          height: 18,
          size: "custom",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          className: T.je,
          children: h
        }), null != l && l > 0 ? (0, r.jsx)("div", {
          className: T.qS,
          children: (0, r.jsx)(u.hVq, {
            count: l,
            color: d ? o.A.colors.BACKGROUND_MOD_STRONG.css : o.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css
          })
        }) : null]
      })
    }), (0, r.jsx)(u.Text, {
      color: "text-default",
      variant: "text-xs/normal",
      className: T.PL,
      children: g
    })]
  })
}

function G(e) {
  let {
    channel: t
  } = e, {
    user: n,
    status: l,
    activities: i,
    applicationStream: s
  } = (0, a.cf)([C.default, x.A, O.A], () => {
    let e = C.default.getUser(t.getRecipientId());
    return {
      user: e,
      status: null != e ? x.A.getStatus(e.id) : null,
      activities: null != e ? x.A.getActivities(e.id) : null,
      applicationStream: null != e ? O.A.getAnyStreamForUser(e.id) : null
    }
  }), {
    voiceActivityStatusEnabled: o
  } = (0, d.G)({
    location: "RecentsChannelHeader"
  }), {
    voiceChannel: c
  } = (0, h.A)({
    userId: null == n ? true : n.id
  }), u = o ? c : true;
  return (0, p.A)({
    activities: i,
    status: l,
    applicationStream: s,
    voiceChannel: u
  }) ? (0, r.jsx)(f.A, {
    user: n,
    activities: i,
    applicationStream: s,
    voiceChannel: u,
    hideTooltip: true
  }) : null
}