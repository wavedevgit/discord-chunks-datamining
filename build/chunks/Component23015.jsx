/** Chunk was on web.js **/
/** chunk id: 23015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
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
  Chunk927997 = require("./927997.js");

function m(e) {
  var t, n, m, h;
  let {
    application: g,
    message: E,
    header: b,
    presenceActivity: y,
    hideParty: O,
    partyStatusElement: v,
    currentUserPresenceActivity: S,
    onClickContent: I,
    onView: T,
    guildId: C
  } = e, A = (0, d.g)(S, y), N = (0, c.Lz)(y, E.author, "Invite Embed"), P = i.useMemo(() => {
    let e = [];
    if (!A) {
      var t;
      e.push({
        label: null != (t = N.label) ? t : p.intl.string(p.t.VJlc0S),
        trackingArea: s.j_.SYNC,
        onClick: () => {
          N.onClick()
        },
        disabled: N.disabled,
        disabledReason: N.disabled ? N.tooltip : true
      })
    }
    return e
  }, [A, N]), R = null != y && null != y.details && null != y.state ? p.intl.formatToPlainString(p.t.JCvHtx, {
    track: y.details,
    artist: y.state
  }) : g.name, w = null != (m = null == y || null == (t = y.timestamps) ? true : t.start) ? m : null == y ? true : y.created_at, D = i.useMemo(() => {
    var e;
    return null != w ? (0, r.jsxs)("div", {
      className: _.timestampContainer,
      children: [(0, r.jsx)(a.RZG, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(l.x3, {
        entry: {
          start: w,
          end: null == y || null == (e = y.timestamps) ? true : e.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null
  }, [w, null == y || null == (n = y.timestamps) ? true : n.end]), x = i.useMemo(() => (0, r.jsxs)("div", {
    className: _.info,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      className: _.tagline,
      color: "none",
      lineClamp: 1,
      children: D
    }), O ? null : v]
  }), [D, O, v]);
  return (0, r.jsx)(o.W, {
    header: b,
    title: R,
    iconSrc: null != (h = (0, u.Z)(y, g.id)) ? h : true,
    info: x,
    actions: P,
    onClickContent: I,
    trackingConfig: {
      id: g.id,
      linkType: f.U.RICH_PRESENCE_INVITE,
      onView: T,
      referrerId: E.author.id,
      guildId: C,
      channelId: E.channel_id,
      messageId: E.id
    }
  })
}