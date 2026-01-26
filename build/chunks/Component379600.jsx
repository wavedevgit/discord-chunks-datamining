/** Chunk was on 97887 **/
/** chunk id: 379600, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
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

function j(e) {
  let {
    recipientUser: t,
    voiceChannel: n
  } = e, l = (0, A.Ay)(n), o = (0, h.o)(t, "RingToVoiceBanner", n.id), {
    userIsInCall: u,
    isUserRinging: g
  } = (0, a.cf)([p.A], () => {
    let e = null;
    return o && null != n.id && (e = p.A.getParticipant(n.id, t.id)), {
      userIsInCall: null != e,
      isUserRinging: null != e && e.type === y.lp.USER && e.ringing
    }
  }), j = (0, a.bG)([b.A], () => b.A.getGuild(n.guild_id)), x = null != j ? (0, m.Iv)(j, 32, true) : null, E = !o || u && !g;
  return ((0, d.A)({
    type: s.ImpressionTypes.PAGE,
    name: s.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
    properties: {
      voice_channel_id: null == n ? true : n.id,
      voice_guild_id: null == n ? true : n.guild_id
    }
  }, {
    disableTrack: E
  }, [t.id]), E) ? null : (0, r.jsxs)("div", {
    className: i()(O.Sp, O.JD),
    children: [(0, r.jsxs)("div", {
      className: O.hP,
      children: [(0, r.jsx)(f.Ay, {
        className: O.dK,
        mask: f.hW.SQUIRCLE,
        width: 24,
        height: 24,
        children: null == x ? (0, r.jsx)("div", {
          className: i()(O.$f, O.Gc),
          children: (0, r.jsx)("div", {
            className: O.Hj,
            children: null != j ? (0, m.Rb)(j) : null
          })
        }) : (0, r.jsx)("img", {
          alt: null == j ? true : j.name,
          src: x,
          className: O.$f
        })
      }), (0, r.jsx)(c.Text, {
        className: O.E5,
        variant: "text-md/medium",
        color: "text-default",
        children: _.intl.format(_.t.f2tNxH, {
          username: null == t ? true : t.globalName,
          channelName: (0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: l
          }, n.id)
        })
      })]
    }), (0, r.jsx)(v, {
      channelId: n.id,
      recipientUserId: t.id,
      isUserRinging: g
    })]
  })
}

function v(e) {
  let {
    channelId: t,
    recipientUserId: n,
    isUserRinging: l
  } = e, i = l ? _.intl.string(_.t.ygslb0) : _.intl.string(_.t["3Hv9qQ"]), s = l ? () => u.A.stopRinging(t, [n]) : () => {
    u.A.ring(t, [n], "dm_banner"), (0, g.iN)(t)
  };
  return (0, r.jsx)(o.$nd, {
    variant: l ? "critical-secondary" : "secondary",
    size: "sm",
    text: i,
    iconPosition: "start",
    icon: c.HKD,
    onClick: s
  })
}