/** Chunk was on 46398 **/
/** chunk id: 523794, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk667202 = require("./667202.jsx"),
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

function p(t) {
  var i;
  let e, {
      channel: p,
      transitionState: T,
      onClose: S
    } = t,
    C = l.Z.getGuild(p.guild_id),
    O = null != (i = null == C ? true : C.maxStageVideoChannelUsers) ? i : 0,
    f = null != C && C.features.has(_.oNc.COMMUNITY),
    L = E.intl.string(E.t.pqPQLy),
    m = f ? O < _.TU7 : (null == C ? true : C.premiumTier) !== _.Eu4.TIER_3 && O <= _.eez,
    D = d.Z.can(o.yP, p);
  e = f && (null == C ? true : C.premiumTier) === _.Eu4.TIER_3 ? O <= _.TU7 ? E.intl.string(E.t.tJmOu7) : E.intl.string(E.t["7FHbPD"]) : m ? E.intl.string(E.t["8/uDSE"]) : E.intl.string(E.t["7FHbPD"]);
  let h = () => {
      S(), s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
        guild_id: p.guild_id,
        type: I.cd.VIDEO_STAGE_LIMIT,
        is_moderator: D,
        action: I.T7.DISMISS
      })
    },
    v = u.Z.getMutableParticipants(p.id, c.pV.SPEAKER).filter(t => t.type === c.Ui.VOICE).length,
    M = u.Z.getParticipantCount(p.id, c.pV.AUDIENCE);
  s.default.track(_.rMx.BOOSTING_UPSELL_VIEWED, {
    guild_id: p.guild_id,
    type: I.cd.VIDEO_STAGE_LIMIT,
    is_moderator: D,
    listener_count: v + M
  });
  let P = [];
  return m ? P.push({
    text: E.intl.string(E.t.f3Pet7),
    variant: "secondary",
    onClick: h
  }, {
    text: E.intl.string(E.t.Uj0md3),
    variant: "expressive",
    onClick: () => {
      S(), (0, a.f)({
        guildId: p.guild_id,
        location: {
          section: _.jXE.STAGE_VIDEO_LIMIT
        }
      }), s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
        guild_id: p.guild_id,
        type: I.cd.VIDEO_STAGE_LIMIT,
        is_moderator: D,
        action: I.T7.BOOST
      })
    }
  }) : P.push({
    text: E.intl.string(E.t["NX+WJC"]),
    variant: "primary",
    onClick: h
  }), (0, n.jsx)(r.I, {
    transitionState: T,
    onClose: S,
    title: L,
    subtitle: e,
    graphic: {
      type: "image",
      src: g
    },
    actions: P
  })
}