/** Chunk was on 64271 **/
/** chunk id: 324081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk468363 = require("./468363.js"),
  Chunk326255 = require("./326255.js"),
  Chunk956221 = require("./956221.js"),
  Chunk771173 = require("./771173.jsx"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk888097 = require("./888097.js");
let I = {
  top: 8,
  bottom: 8,
  left: false,
  right: false
};

function P(e) {
  var t, n;
  let {
    channel: i,
    children: l,
    gotoChannel: a,
    mentionCount: s,
    channelState: u,
    toggleCollapsed: d
  } = e, f = (0, o.JA)("recents-header-".concat(i.id, "-").concat((0, b.Dt)()));
  return (0, r.jsx)(c.tEY, {
    offset: I,
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
      className: S.channelHeader
    }, f), n = n = {
      tabIndex: 0,
      "data-recents-channel": i.id,
      onKeyDown: function(e) {
        null != d && null != u && ("ArrowRight" === e.key && u.collapsed || "ArrowLeft" === e.key && !u.collapsed) && (null == d || d(u))
      },
      children: [(0, r.jsx)(N, {
        channel: i,
        gotoChannel: a
      }), (0, r.jsx)(T, {
        channel: i,
        gotoChannel: a,
        mentionCount: s
      }), l]
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

function N(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e;
  return t.isPrivate() ? (0, r.jsx)(Z, {
    channel: t,
    gotoChannel: n
  }) : (0, r.jsx)(w, {
    channel: t,
    gotoChannel: n
  })
}

function Z(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, i = (0, a.e7)([C.default], () => t.isDM() ? C.default.getUser(t.getRecipientId()) : null), l = null == i ? (0, h.x)(t) : i.getAvatarURL(true, 40);
  return (0, r.jsx)(c.P3F, {
    onClick: n,
    tabIndex: false,
    children: (0, r.jsx)("img", {
      className: S.dmIcon,
      src: l,
      alt: "",
      "aria-hidden": true
    })
  })
}

function w(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, i = (0, a.e7)([v.Z], () => v.Z.getGuild(t.guild_id));
  return null == i ? null : (0, r.jsx)(_.Z, {
    "aria-hidden": true,
    className: S.guildIcon,
    guild: i,
    size: _.Z.Sizes.MEDIUM,
    active: true,
    onClick: n,
    tabIndex: false
  })
}

function T(e) {
  let {
    channel: t,
    gotoChannel: n,
    mentionCount: i
  } = e, o = (0, a.e7)([v.Z], () => v.Z.getGuild(t.guild_id)), u = (0, a.e7)([O.Z], () => O.Z.getChannel(t.parent_id)), d = (0, a.e7)([x.ZP], () => x.ZP.getIsMentionLowImportance(t.id)), f = (0, m.KS)(t, o), p = (0, g.ZP)(t, false), h = null == u ? null == o ? true : o.name : "".concat(null == o ? true : o.name, " › ").concat(u.name), b = t.isMultiUserDM() ? E.intl.formatToPlainString(E.t.CxSA5N, {
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, r.jsx)(A, {
    channel: t
  }) : (0, r.jsx)(c.P3F, {
    className: l()(S.subtext, S.guildName),
    onClick: n,
    children: h
  });
  return (0, r.jsxs)("div", {
    className: S.channelNameSection,
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      className: S.channelNameHeader,
      children: (0, r.jsxs)(c.P3F, {
        className: S.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == f ? null : (0, r.jsx)(f, {
          className: t.isForumLikeChannel() ? S.forumIcon : true,
          width: 18,
          height: 18,
          size: "custom",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          className: S.channelNameSpan,
          children: p
        }), null != i && i > 0 ? (0, r.jsx)("div", {
          className: S.badge,
          children: (0, r.jsx)(c.mAB, {
            count: i,
            color: d ? s.Z.colors.BACKGROUND_ACCENT.css : s.Z.colors.STATUS_DANGER.css
          })
        }) : null]
      })
    }), (0, r.jsx)(c.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: S.subtextContainer,
      children: b
    })]
  })
}

function A(e) {
  let {
    channel: t
  } = e, {
    user: n,
    status: i,
    activities: l,
    applicationStream: o
  } = (0, a.cj)([C.default, j.Z, y.Z], () => {
    let e = C.default.getUser(t.getRecipientId());
    return {
      user: e,
      status: null != e ? j.Z.getStatus(e.id) : null,
      activities: null != e ? j.Z.getActivities(e.id) : null,
      applicationStream: null != e ? y.Z.getAnyStreamForUser(e.id) : null
    }
  }), {
    voiceActivityStatusEnabled: s
  } = (0, u.U)({
    location: "RecentsChannelHeader"
  }), {
    voiceChannel: c
  } = (0, f.Z)({
    userId: null == n ? true : n.id
  }), h = s ? c : true;
  return (0, d.Z)({
    activities: l,
    status: i,
    applicationStream: o,
    voiceChannel: h
  }) ? (0, r.jsx)(p.Z, {
    location: "RecentsChannelHeader",
    user: n,
    activities: l,
    applicationStream: o,
    voiceChannel: h,
    hideTooltip: true
  }) : null
}