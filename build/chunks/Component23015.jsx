/** Chunk was on web.js **/
/** chunk id: 23015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk758199 = require("./758199.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk368176 = require("./368176.js"),
  Chunk371991 = require("./371991.jsx"),
  Chunk829820 = require("./829820.js"),
  Chunk276852 = require("./276852.js"),
  Chunk691731 = require("./691731.js"),
  Chunk967249 = require("./967249.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk837262 = require("./837262.js");

function h(e) {
  var t, n, h, g;
  let {
    application: E,
    message: b,
    header: y,
    presenceActivity: O,
    hideParty: v,
    partyStatusElement: S,
    currentUserPresenceActivity: I,
    onClickContent: T,
    onView: C,
    guildId: A
  } = e, {
    enabled: N
  } = l.Q.useConfig({
    location: "rich_presence_spotify_invite"
  }), P = (0, f.g)(I, O), R = (0, u.Lz)(O, b.author, "Invite Embed"), D = i.useMemo(() => {
    let e = [];
    if (!P) {
      var t;
      e.push({
        label: null != (t = R.label) ? t : _.intl.string(_.t.VJlc0S),
        trackingArea: s.j_.SYNC,
        onClick: () => {
          R.onClick()
        },
        disabled: R.disabled,
        disabledReason: R.disabled ? R.tooltip : true
      })
    }
    return e
  }, [P, R]), w = null != O && null != O.details && null != O.state ? _.intl.formatToPlainString(_.t.JCvHtx, {
    track: O.details,
    artist: O.state
  }) : E.name, x = null != (h = null == O || null == (t = O.timestamps) ? true : t.start) ? h : null == O ? true : O.created_at, L = i.useMemo(() => {
    var e;
    return null != x ? (0, r.jsxs)("div", {
      className: m.timestampContainer,
      children: [(0, r.jsx)(a.RZG, {
        size: "xxs",
        color: N ? a.TVs.colors.ICON_FEEDBACK_POSITIVE : "currentColor"
      }), (0, r.jsx)(c.x3, {
        entry: {
          start: x,
          end: null == O || null == (e = O.timestamps) ? true : e.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null
  }, [x, null == O || null == (n = O.timestamps) ? true : n.end, N]), j = i.useMemo(() => (0, r.jsxs)("div", {
    className: m.info,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      className: m.tagline,
      color: "none",
      lineClamp: 1,
      children: L
    }), v ? null : S]
  }), [L, v, S]);
  return (0, r.jsx)(o.W, {
    header: y,
    title: w,
    iconSrc: null != (g = (0, d.Z)(O, E.id)) ? g : true,
    info: j,
    actions: D,
    onClickContent: T,
    trackingConfig: {
      id: E.id,
      linkType: p.U.RICH_PRESENCE_INVITE,
      onView: C,
      referrerId: b.author.id,
      guildId: A,
      channelId: b.channel_id,
      messageId: b.id
    }
  })
}