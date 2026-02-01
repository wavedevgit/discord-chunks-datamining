/** Chunk was on 61344 **/
/** chunk id: 379600, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk387755 = require("./387755.js"),
  Chunk139286 = require("./139286.js"),
  Chunk313961 = require("./313961.js"),
  Chunk325909 = require("./325909.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk47167 = require("./47167.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk287278 = require("./287278.js");

function E(e) {
  let {
    recipientUser: t,
    voiceChannel: n
  } = e, r = (0, b.Ay)(n), o = (0, p.o)(t, "RingToVoiceBanner", n.id), {
    userIsInCall: u,
    isUserRinging: m
  } = (0, s.cf)([h.A], () => {
    let e = null;
    return o && null != n.id && (e = h.A.getParticipant(n.id, t.id)), {
      userIsInCall: null != e,
      isUserRinging: null != e && e.type === _.lp.USER && e.ringing
    }
  }), E = (0, s.bG)([A.A], () => A.A.getGuild(n.guild_id)), C = null != E ? (0, g.Iv)(E, 32, true) : null, x = !o || u && !m;
  return ((0, d.A)({
    type: a.ImpressionTypes.PAGE,
    name: a.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
    properties: {
      voice_channel_id: null == n ? true : n.id,
      voice_guild_id: null == n ? true : n.guild_id
    }
  }, {
    disableTrack: x
  }, [t.id]), x) ? null : (0, l.jsxs)("div", {
    className: i()(v.Sp, v.JD),
    children: [(0, l.jsxs)("div", {
      className: v.hP,
      children: [(0, l.jsx)(f.Ay, {
        className: v.dK,
        mask: f.hW.SQUIRCLE,
        width: 24,
        height: 24,
        children: null == C ? (0, l.jsx)("div", {
          className: i()(v.$f, v.Gc),
          children: (0, l.jsx)("div", {
            className: v.Hj,
            children: null != E ? (0, g.Rb)(E) : null
          })
        }) : (0, l.jsx)("img", {
          alt: null == E ? true : E.name,
          src: C,
          className: v.$f
        })
      }), (0, l.jsx)(c.Text, {
        className: v.E5,
        variant: "text-md/medium",
        color: "text-default",
        children: y.intl.format(y.t.f2tNxH, {
          username: null == t ? true : t.globalName,
          channelName: (0, l.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: r
          }, n.id)
        })
      })]
    }), (0, l.jsx)(O, {
      channelId: n.id,
      recipientUserId: t.id,
      isUserRinging: m
    })]
  })
}

function O(e) {
  let {
    channelId: t,
    recipientUserId: n,
    isUserRinging: r
  } = e, i = r ? y.intl.string(y.t.ygslb0) : y.intl.string(y.t["3Hv9qQ"]), a = r ? () => u.A.stopRinging(t, [n]) : () => {
    u.A.ring(t, [n], "dm_banner"), (0, m.iN)(t)
  };
  return (0, l.jsx)(o.$nd, {
    variant: r ? "critical-secondary" : "secondary",
    size: "sm",
    text: i,
    iconPosition: "start",
    icon: c.HKD,
    onClick: a
  })
}