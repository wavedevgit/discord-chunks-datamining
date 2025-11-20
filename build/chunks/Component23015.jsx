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
  Chunk371991 = require("./371991.jsx"),
  Chunk829820 = require("./829820.js"),
  Chunk276852 = require("./276852.js"),
  Chunk691731 = require("./691731.js"),
  Chunk967249 = require("./967249.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk837262 = require("./837262.js");

function h(e) {
  var t, n, h, m;
  let {
    application: g,
    message: E,
    header: b,
    presenceActivity: y,
    hideParty: O,
    partyStatusElement: v,
    currentUserPresenceActivity: I,
    onClickContent: T,
    onView: S,
    guildId: A
  } = e, C = (0, d.g)(I, y), N = (0, c.Lz)(y, E.author, "Invite Embed"), R = i.useMemo(() => {
    let e = [];
    if (!C) {
      var t;
      e.push({
        label: null != (t = N.label) ? t : _.intl.string(_.t.VJlc0S),
        trackingArea: s.j_.SYNC,
        onClick: () => {
          N.onClick()
        },
        disabled: N.disabled,
        disabledReason: N.disabled ? N.tooltip : true
      })
    }
    return e
  }, [C, N]), P = null != y && null != y.details && null != y.state ? _.intl.formatToPlainString(_.t.JCvHtx, {
    track: y.details,
    artist: y.state
  }) : g.name, D = null != (h = null == y || null == (t = y.timestamps) ? true : t.start) ? h : null == y ? true : y.created_at, w = i.useMemo(() => {
    var e;
    return null != D ? (0, r.jsxs)("div", {
      className: p.timestampContainer,
      children: [(0, r.jsx)(a.RZG, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(l.x3, {
        entry: {
          start: D,
          end: null == y || null == (e = y.timestamps) ? true : e.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null
  }, [D, null == y || null == (n = y.timestamps) ? true : n.end]), L = i.useMemo(() => (0, r.jsxs)("div", {
    className: p.info,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      className: p.tagline,
      color: "none",
      lineClamp: 1,
      children: w
    }), O ? null : v]
  }), [w, O, v]);
  return (0, r.jsx)(o.W, {
    header: b,
    title: P,
    iconSrc: null != (m = (0, u.Z)(y, g.id)) ? m : true,
    info: L,
    actions: R,
    onClickContent: T,
    trackingConfig: {
      id: g.id,
      linkType: f.U.RICH_PRESENCE_INVITE,
      onView: S,
      referrerId: E.author.id,
      guildId: A,
      channelId: E.channel_id,
      messageId: E.id
    }
  })
}