/** Chunk was on 21900 **/
/** chunk id: 172231, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk509536 = require("./509536.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk233993 = require("./233993.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk98209 = require("./98209.js");

function E(t) {
  var i;
  let e, {
      channel: E,
      transitionState: T,
      onClose: S
    } = t,
    C = r.A.getGuild(E.guild_id),
    A = null != (i = null == C ? true : C.maxStageVideoChannelUsers) ? i : 0,
    O = null != C && C.features.has(_.GuildFeatures.COMMUNITY),
    L = I.intl.string(I.t.pqPQL0),
    m = O ? A < _.p2C : (null == C ? true : C.premiumTier) !== _.TVA.TIER_3 && A <= _.nyz,
    v = d.A.can(p.QY, E);
  e = O && (null == C ? true : C.premiumTier) === _.TVA.TIER_3 ? A <= _.p2C ? I.intl.string(I.t.tJmOuw) : I.intl.string(I.t["7FHbPG"]) : m ? I.intl.string(I.t["8/uDSF"]) : I.intl.string(I.t["7FHbPG"]);
  let h = () => {
      S(), s.default.track(_.HAw.BOOSTING_UPSELL_CLICKED, {
        guild_id: E.guild_id,
        type: c.e.VIDEO_STAGE_LIMIT,
        is_moderator: v,
        action: c.pd.DISMISS
      })
    },
    G = u.A.getMutableParticipants(E.id, o.ip.SPEAKER).filter(t => t.type === o.wY.VOICE).length,
    f = u.A.getParticipantCount(E.id, o.ip.AUDIENCE);
  s.default.track(_.HAw.BOOSTING_UPSELL_VIEWED, {
    guild_id: E.guild_id,
    type: c.e.VIDEO_STAGE_LIMIT,
    is_moderator: v,
    listener_count: G + f
  });
  let k = [];
  return m ? k.push({
    text: I.intl.string(I.t.f3Pet9),
    variant: "secondary",
    onClick: h
  }, {
    text: I.intl.string(I.t.Uj0md3),
    variant: "expressive",
    onClick: () => {
      S(), (0, l.K)({
        guildId: E.guild_id,
        location: {
          section: _.JJy.STAGE_VIDEO_LIMIT
        }
      }), s.default.track(_.HAw.BOOSTING_UPSELL_CLICKED, {
        guild_id: E.guild_id,
        type: c.e.VIDEO_STAGE_LIMIT,
        is_moderator: v,
        action: c.pd.BOOST
      })
    }
  }) : k.push({
    text: I.intl.string(I.t["NX+WJN"]),
    variant: "primary",
    onClick: h
  }), (0, n.jsx)(a.ExpressiveModal, {
    transitionState: T,
    onClose: S,
    title: L,
    subtitle: e,
    graphic: {
      type: "image",
      src: g
    },
    actions: k
  })
}