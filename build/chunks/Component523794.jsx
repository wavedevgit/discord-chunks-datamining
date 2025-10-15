/** Chunk was on 46398 **/
/** chunk id: 523794, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    f = null != C && C.features.has(_.oNc.COMMUNITY),
    L = p.intl.string(p.t.pqPQLy),
    m = f ? O < _.TU7 : (null == C ? true : C.premiumTier) !== _.Eu4.TIER_3 && O <= _.eez,
    v = d.Z.can(c.yP, g);
  e = f && (null == C ? true : C.premiumTier) === _.Eu4.TIER_3 ? O <= _.TU7 ? p.intl.string(p.t.tJmOu7) : p.intl.string(p.t["7FHbPD"]) : m ? p.intl.string(p.t["8/uDSE"]) : p.intl.string(p.t["7FHbPD"]);
  let D = () => {
      S(), s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
        guild_id: g.guild_id,
        type: E.cd.VIDEO_STAGE_LIMIT,
        is_moderator: v,
        action: E.T7.DISMISS
      })
    },
    M = u.Z.getMutableParticipants(g.id, o.pV.SPEAKER).filter(t => t.type === o.Ui.VOICE).length,
    h = u.Z.getParticipantCount(g.id, o.pV.AUDIENCE);
  s.default.track(_.rMx.BOOSTING_UPSELL_VIEWED, {
    guild_id: g.guild_id,
    type: E.cd.VIDEO_STAGE_LIMIT,
    is_moderator: v,
    listener_count: M + h
  });
  let x = [];
  return m ? x.push({
    text: p.intl.string(p.t.f3Pet7),
    variant: "secondary",
    onClick: D
  }, {
    text: p.intl.string(p.t.Uj0md3),
    variant: "expressive",
    onClick: () => {
      S(), (0, a.f)({
        guildId: g.guild_id,
        location: {
          section: _.jXE.STAGE_VIDEO_LIMIT
        }
      }), s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
        guild_id: g.guild_id,
        type: E.cd.VIDEO_STAGE_LIMIT,
        is_moderator: v,
        action: E.T7.BOOST
      })
    }
  }) : x.push({
    text: p.intl.string(p.t["NX+WJC"]),
    variant: "primary",
    onClick: D
  }), (0, n.jsx)(r.ExpressiveModal, {
    transitionState: T,
    onClose: S,
    title: L,
    subtitle: e,
    graphic: {
      type: "image",
      src: I
    },
    actions: x
  })
}