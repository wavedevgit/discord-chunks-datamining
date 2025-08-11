/** Chunk was on web.js **/
/** chunk id: 641861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk26151 = require("./26151.js"),
  Chunk213609 = require("./213609.js"),
  Chunk358221 = require("./358221.js"),
  Chunk985588 = require("./985588.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk933557 = require("./933557.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk249671 = require("./249671.js");

function v(e) {
  let {
    recipientUser: t,
    voiceChannel: n
  } = e, i = (0, E.ZP)(n), l = (0, _.s)(t, "RingToVoiceBanner", n.id), {
    userIsInCall: u,
    isUserRinging: h
  } = (0, s.cj)([f.Z], () => {
    let e = null;
    return l && null != n.id && (e = f.Z.getParticipant(n.id, t.id)), {
      userIsInCall: null != e,
      isUserRinging: null != e && e.type === b.fO.USER && e.ringing
    }
  }), v = (0, s.e7)([g.Z], () => g.Z.getGuild(n.guild_id)), T = null != v ? (0, m.EB)(v, 32, true) : null, S = !l || u && !h;
  return ((0, d.Z)({
    type: a.ImpressionTypes.PAGE,
    name: a.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
    properties: {
      voice_channel_id: null == n ? true : n.id,
      voice_guild_id: null == n ? true : n.guild_id
    }
  }, {
    disableTrack: S
  }, [t.id]), S) ? null : (0, r.jsxs)("div", {
    className: o()(O.themed, O.chatHeaderBar),
    children: [(0, r.jsxs)("div", {
      className: O.chatHeaderBarInfo,
      children: [(0, r.jsx)(p.ZP, {
        className: O.mask,
        mask: p.QS.SQUIRCLE,
        width: 24,
        height: 24,
        children: null == T ? (0, r.jsx)("div", {
          className: o()(O.guildIcon, O.guildIconWithoutImage),
          children: (0, r.jsx)("div", {
            className: O.guildAcronym,
            children: null != v ? (0, m.gM)(v) : null
          })
        }) : (0, r.jsx)("img", {
          alt: null == v ? true : v.name,
          src: T,
          className: O.guildIcon
        })
      }), (0, r.jsx)(c.Text, {
        className: O.chatHeaderBarText,
        variant: "text-md/medium",
        color: "header-secondary",
        children: y.intl.format(y.t.f2tNxM, {
          username: null == t ? true : t.globalName,
          channelName: (0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: i
          }, n.id)
        })
      })]
    }), (0, r.jsx)(I, {
      channelId: n.id,
      recipientUserId: t.id,
      isUserRinging: h
    })]
  })
}

function I(e) {
  let {
    channelId: t,
    recipientUserId: n,
    isUserRinging: i
  } = e, o = i ? "critical-secondary" : "secondary", a = i ? y.intl.string(y.t.ygslb2) : y.intl.string(y.t["3Hv9qa"]), s = i ? () => u.Z.stopRinging(t, [n]) : () => {
    u.Z.ring(t, [n], "dm_banner"), (0, h.Kh)(t)
  };
  return (0, r.jsx)(l.z, {
    variant: o,
    size: "sm",
    text: a,
    iconPosition: "start",
    icon: c.gj8,
    onClick: s
  })
}