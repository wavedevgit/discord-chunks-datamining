/** Chunk was on 40184 **/
/** chunk id: 641861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  let {
    recipientUser: t,
    voiceChannel: n
  } = e, r = (0, y.ZP)(n), s = (0, f.s)(t, "RingToVoiceBanner", n.id), {
    userIsInCall: u,
    isUserRinging: m
  } = (0, o.cj)([p.Z], () => {
    let e = null;
    return s && null != n.id && (e = p.Z.getParticipant(n.id, t.id)), {
      userIsInCall: null != e,
      isUserRinging: null != e && e.type === C.fO.USER && e.ringing
    }
  }), O = (0, o.e7)([b.Z], () => b.Z.getGuild(n.guild_id)), j = null != O ? (0, g.EB)(O, 32, true) : null, S = !s || u && !m;
  return ((0, d.Z)({
    type: a.ImpressionTypes.PAGE,
    name: a.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
    properties: {
      voice_channel_id: null == n ? true : n.id,
      voice_guild_id: null == n ? true : n.guild_id
    }
  }, {
    disableTrack: S
  }, [t.id]), S) ? null : (0, i.jsxs)("div", {
    className: l()(x.themed, x.chatHeaderBar),
    children: [(0, i.jsxs)("div", {
      className: x.chatHeaderBarInfo,
      children: [(0, i.jsx)(h.ZP, {
        className: x.mask,
        mask: h.QS.SQUIRCLE,
        width: 24,
        height: 24,
        children: null == j ? (0, i.jsx)("div", {
          className: l()(x.guildIcon, x.guildIconWithoutImage),
          children: (0, i.jsx)("div", {
            className: x.guildAcronym,
            children: null != O ? (0, g.gM)(O) : null
          })
        }) : (0, i.jsx)("img", {
          alt: null == O ? true : O.name,
          src: j,
          className: x.guildIcon
        })
      }), (0, i.jsx)(c.Text, {
        className: x.chatHeaderBarText,
        variant: "text-md/medium",
        color: "text-default",
        children: v.intl.format(v.t.f2tNxH, {
          username: null == t ? true : t.globalName,
          channelName: (0, i.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: r
          }, n.id)
        })
      })]
    }), (0, i.jsx)(E, {
      channelId: n.id,
      recipientUserId: t.id,
      isUserRinging: m
    })]
  })
}

function E(e) {
  let {
    channelId: t,
    recipientUserId: n,
    isUserRinging: r
  } = e, l = r ? v.intl.string(v.t.ygslb0) : v.intl.string(v.t["3Hv9qQ"]), a = r ? () => u.Z.stopRinging(t, [n]) : () => {
    u.Z.ring(t, [n], "dm_banner"), (0, m.Kh)(t)
  };
  return (0, i.jsx)(s.zxk, {
    variant: r ? "critical-secondary" : "secondary",
    size: "sm",
    text: l,
    iconPosition: "start",
    icon: c.gj8,
    onClick: a
  })
}