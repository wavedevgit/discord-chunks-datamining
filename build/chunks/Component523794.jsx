/** Chunk was on 46398 **/
/** chunk id: 523794, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk146085 = require("./146085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk259442 = require("./259442.js");

function g(t) {
  var i;
  let e, {
      channel: g,
      transitionState: T,
      onClose: S
    } = t,
    C = l.Z.getGuild(g.guild_id),
    O = null != (i = null == C ? true : C.maxStageVideoChannelUsers) ? i : 0,
    f = null != C && C.features.has(_.GuildFeatures.COMMUNITY),
    L = E.intl.string(E.t.pqPQL0),
    m = f ? O < _.TU7 : (null == C ? true : C.premiumTier) !== _.Eu4.TIER_3 && O <= _.eez,
    v = d.Z.can(c.yP, g);
  e = f && (null == C ? true : C.premiumTier) === _.Eu4.TIER_3 ? O <= _.TU7 ? E.intl.string(E.t.tJmOuw) : E.intl.string(E.t["7FHbPG"]) : m ? E.intl.string(E.t["8/uDSF"]) : E.intl.string(E.t["7FHbPG"]);
  let M = () => {
      S(), s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
        guild_id: g.guild_id,
        type: p.cd.VIDEO_STAGE_LIMIT,
        is_moderator: v,
        action: p.T7.DISMISS
      })
    },
    h = u.Z.getMutableParticipants(g.id, o.pV.SPEAKER).filter(t => t.type === o.Ui.VOICE).length,
    x = u.Z.getParticipantCount(g.id, o.pV.AUDIENCE);
  s.default.track(_.rMx.BOOSTING_UPSELL_VIEWED, {
    guild_id: g.guild_id,
    type: p.cd.VIDEO_STAGE_LIMIT,
    is_moderator: v,
    listener_count: h + x
  });
  let G = [];
  return m ? G.push({
    text: E.intl.string(E.t.f3Pet9),
    variant: "secondary",
    onClick: M
  }, {
    text: E.intl.string(E.t.Uj0md3),
    variant: "expressive",
    onClick: () => {
      S(), (0, a.f)({
        guildId: g.guild_id,
        location: {
          section: _.jXE.STAGE_VIDEO_LIMIT
        }
      }), s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
        guild_id: g.guild_id,
        type: p.cd.VIDEO_STAGE_LIMIT,
        is_moderator: v,
        action: p.T7.BOOST
      })
    }
  }) : G.push({
    text: E.intl.string(E.t["NX+WJN"]),
    variant: "primary",
    onClick: M
  }), (0, n.jsx)(r.ExpressiveModal, {
    transitionState: T,
    onClose: S,
    title: L,
    subtitle: e,
    graphic: {
      type: "image",
      src: I
    },
    actions: G
  })
}