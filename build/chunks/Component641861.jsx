/** Chunk was on 81985 **/
/** chunk id: 641861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
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
  Chunk943856 = require("./943856.js");

function x(e) {
  let {
    recipientUser: t,
    voiceChannel: n
  } = e, i = (0, y.ZP)(n), s = (0, f.s)(t, "RingToVoiceBanner", n.id), {
    userIsInCall: u,
    isUserRinging: g
  } = (0, o.cj)([p.Z], () => {
    let e = null;
    return s && null != n.id && (e = p.Z.getParticipant(n.id, t.id)), {
      userIsInCall: null != e,
      isUserRinging: null != e && e.type === v.fO.USER && e.ringing
    }
  }), x = (0, o.e7)([b.Z], () => b.Z.getGuild(n.guild_id)), E = null != x ? (0, m.EB)(x, 32, true) : null, S = !s || u && !g;
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
    className: l()(j.themed, j.chatHeaderBar),
    children: [(0, r.jsxs)("div", {
      className: j.chatHeaderBarInfo,
      children: [(0, r.jsx)(h.ZP, {
        className: j.mask,
        mask: h.QS.SQUIRCLE,
        width: 24,
        height: 24,
        children: null == E ? (0, r.jsx)("div", {
          className: l()(j.guildIcon, j.guildIconWithoutImage),
          children: (0, r.jsx)("div", {
            className: j.guildAcronym,
            children: null != x ? (0, m.gM)(x) : null
          })
        }) : (0, r.jsx)("img", {
          alt: null == x ? true : x.name,
          src: E,
          className: j.guildIcon
        })
      }), (0, r.jsx)(c.Text, {
        className: j.chatHeaderBarText,
        variant: "text-md/medium",
        color: "text-default",
        children: O.intl.format(O.t.f2tNxH, {
          username: null == t ? true : t.globalName,
          channelName: (0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: i
          }, n.id)
        })
      })]
    }), (0, r.jsx)(C, {
      channelId: n.id,
      recipientUserId: t.id,
      isUserRinging: g
    })]
  })
}

function C(e) {
  let {
    channelId: t,
    recipientUserId: n,
    isUserRinging: i
  } = e, l = i ? O.intl.string(O.t.ygslb0) : O.intl.string(O.t["3Hv9qQ"]), a = i ? () => u.Z.stopRinging(t, [n]) : () => {
    u.Z.ring(t, [n], "dm_banner"), (0, g.Kh)(t)
  };
  return (0, r.jsx)(s.zxk, {
    variant: i ? "critical-secondary" : "secondary",
    size: "sm",
    text: l,
    iconPosition: "start",
    icon: c.gj8,
    onClick: a
  })
}