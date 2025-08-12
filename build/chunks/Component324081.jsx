/** Chunk was on 26628 **/
/** chunk id: 324081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk468363 = require("./468363.js"),
  Chunk326255 = require("./326255.js"),
  Chunk956221 = require("./956221.js"),
  Chunk771173 = require("./771173.jsx"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk377171 = require("./377171.js"),
  Chunk313201 = require("./313201.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk606675 = require("./606675.js");
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
    gotoChannel: s,
    mentionCount: c,
    channelState: u,
    toggleCollapsed: d
  } = e, h = (0, o.JA)("recents-header-".concat(i.id, "-").concat((0, b.Dt)()));
  return (0, r.jsx)(a.tEY, {
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
      className: x.channelHeader
    }, h), n = n = {
      tabIndex: 0,
      "data-recents-channel": i.id,
      onKeyDown: function(e) {
        null != d && null != u && ("ArrowRight" === e.key && u.collapsed || "ArrowLeft" === e.key && !u.collapsed) && (null == d || d(u))
      },
      children: [(0, r.jsx)(N, {
        channel: i,
        gotoChannel: s
      }), (0, r.jsx)(T, {
        channel: i,
        gotoChannel: s,
        mentionCount: c
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
  return t.isPrivate() ? (0, r.jsx)(w, {
    channel: t,
    gotoChannel: n
  }) : (0, r.jsx)(Z, {
    channel: t,
    gotoChannel: n
  })
}

function w(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, i = (0, s.e7)([E.default], () => t.isDM() ? E.default.getUser(t.getRecipientId()) : null), l = null == i ? (0, p.x)(t) : i.getAvatarURL(true, 40);
  return (0, r.jsx)(a.P3F, {
    onClick: n,
    tabIndex: false,
    children: (0, r.jsx)("img", {
      className: x.dmIcon,
      src: l,
      alt: "",
      "aria-hidden": true
    })
  })
}

function Z(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, i = (0, s.e7)([C.Z], () => C.Z.getGuild(t.guild_id));
  return null == i ? null : (0, r.jsx)(O.Z, {
    "aria-hidden": true,
    className: x.guildIcon,
    guild: i,
    size: O.Z.Sizes.MEDIUM,
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
  } = e, o = (0, s.e7)([C.Z], () => C.Z.getGuild(t.guild_id)), c = (0, s.e7)([y.Z], () => y.Z.getChannel(t.parent_id)), u = (0, s.e7)([j.ZP], () => j.ZP.getIsMentionLowImportance(t.id)), d = (0, g.KS)(t, o), h = (0, f.ZP)(t, false), p = null == c ? null == o ? true : o.name : "".concat(null == o ? true : o.name, " › ").concat(c.name), b = t.isMultiUserDM() ? S.intl.formatToPlainString(S.t.CxSA5O, {
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, r.jsx)(A, {
    channel: t
  }) : (0, r.jsx)(a.P3F, {
    className: l()(x.subtext, x.guildName),
    onClick: n,
    children: p
  });
  return (0, r.jsxs)("div", {
    className: x.channelNameSection,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-md/semibold",
      className: x.channelNameHeader,
      children: (0, r.jsxs)(a.P3F, {
        className: x.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == d ? null : (0, r.jsx)(d, {
          className: t.isForumLikeChannel() ? x.forumIcon : true,
          width: 18,
          height: 18,
          size: "custom",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          className: x.channelNameSpan,
          children: h
        }), null != i && i > 0 ? (0, r.jsx)("div", {
          className: x.badge,
          children: (0, r.jsx)(a.mAB, {
            count: i,
            color: u ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER
          })
        }) : null]
      })
    }), (0, r.jsx)(a.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: x.subtextContainer,
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
  } = (0, s.cj)([E.default, v.Z, _.Z], () => {
    let e = E.default.getUser(t.getRecipientId());
    return {
      user: e,
      status: null != e ? v.Z.getStatus(e.id) : null,
      activities: null != e ? v.Z.getActivities(e.id) : null,
      applicationStream: null != e ? _.Z.getAnyStreamForUser(e.id) : null
    }
  }), {
    voiceActivityStatusEnabled: a
  } = (0, c.U)({
    location: "RecentsChannelHeader"
  }), {
    voiceChannel: p
  } = (0, d.Z)({
    userId: null == n ? true : n.id
  }), f = a ? p : true;
  return (0, u.Z)({
    activities: l,
    status: i,
    applicationStream: o,
    voiceChannel: f
  }) ? (0, r.jsx)(h.Z, {
    location: "RecentsChannelHeader",
    user: n,
    activities: l,
    applicationStream: o,
    voiceChannel: f,
    hideTooltip: true
  }) : null
}