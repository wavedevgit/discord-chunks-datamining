/** Chunk was on web.js **/
/** chunk id: 915750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B5: () => L,
  PI: () => R,
  WD: () => k,
  aM: () => U,
  ui: () => G
}), require("./388685.js"), require("./953529.js"), require("./49124.js"), require("./642613.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk516796 = require("./516796.js"),
  Chunk186102 = require("./186102.js"),
  Chunk113544 = require("./113544.js"),
  Chunk797614 = require("./797614.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk768581 = require("./768581.js"),
  Chunk358085 = require("./358085.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk198535 = require("./198535.js"),
  Chunk535584 = require("./535584.js"),
  Chunk862657 = require("./862657.js"),
  Chunk981631 = require("./981631.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
let C = 100,
  N = 60,
  P = 1,
  R = .5,
  D = new Set;

function w(e, t) {
  return "".concat(e, "_").concat(t)
}
class x {
  getId() {
    return this.id
  }
  getQuestContentPosition() {
    return this.questContentPosition
  }
  getBrandSafetyContext() {
    var e;
    let t = (0, Chunk862657.VB)(this.questContent),
      n = (0, Chunk862657.uN)(this.questContent),
      r = (0, Chunk113544.z5)(),
      i = (0, Chunk113544.QW)();
    if (!(null == require ? true : require.is_campaign_ias_enabled) || !exports || true === Chunk54381 || true === Chunk473749) return null;
    let a = () => {
        let e = Chunk54381(),
          t = Chunk430824.Z.getGuilds();
        return module.map(e => {
          var n;
          let r = t[e];
          if (true === r) return null;
          let i = {
            id: r.id,
            name: r.name
          };
          null !== r.description && (i.description = r.description);
          let a = null !== r.icon && null != (n = g.ZP.getGuildIconURL({
            id: r.id,
            icon: r.icon,
            size: 44,
            canAnimate: true
          })) ? n : null;
          return null !== a && (i.icon_url = a), i
        }).filter(e => null !== e)
      },
      o = Chunk914010.Z.getGuildId(),
      s = null != Chunk286379 ? Chunk430824.Z.getGuild(Chunk286379) : null,
      l = () => null == Chunk442837 ? [] : Chunk473749().map(e => {
        let t = _.Z.getChannel(e);
        if (true === t) return null;
        let n = {
          id: t.id,
          name: t.name
        };
        return t.topic.length > 0 && (n.channel_topic = t.topic), n
      }).filter(e => null !== e),
      c = {
        guilds: Chunk772848(),
        channels: Chunk493773()
      };
    null != Chunk286379 && (Chunk110924.selected_guild_id = Chunk286379);
    let u = (null == Chunk442837 ? true : Chunk442837.banner) !== null && (null == Chunk442837 ? true : Chunk442837.banner) !== true && null != (e = Chunk768581.ZP.getGuildBannerURL({
      id: Chunk442837.id,
      banner: Chunk442837.banner
    }, true)) ? module : null;
    return null !== Chunk516796 && (Chunk110924.selected_guild_banner_url = Chunk516796), Chunk110924.guilds.length > C && (Chunk110924.guilds = Chunk110924.guilds.slice(0, C), Chunk110924.truncated = true), Chunk110924.channels.length > C && (Chunk110924.channels = Chunk110924.channels.slice(0, C), Chunk110924.truncated = true), {
      brand_safety_context: JSON.stringify(Chunk110924)
    }
  }
  constructor({
    questOrQuests: e,
    questContent: t,
    triggeredByStatusChange: n,
    trackGuildAndChannelMetadata: r,
    questContentPosition: i,
    questContentRowIndex: s,
    minViewTimeSeconds: l = P,
    isQuestEnrollmentBlocked: c,
    sourceQuestContent: f
  }) {
    var _ = this;
    T(this, "id", true), T(this, "quests", true), T(this, "questContent", true), T(this, "triggeredByStatusChange", true), T(this, "trackGuildAndChannelMetadata", true), T(this, "questContentPosition", true), T(this, "questContentRowIndex", true), T(this, "sourceQuestContent", true), T(this, "heartbeatTimeoutId", true), T(this, "lastBeatTime", true), T(this, "minViewTimeReachedTimeoutId", true), T(this, "minViewTimeSeconds", true), T(this, "minViewportPercentage", true), T(this, "isQuestEnrollmentBlocked", true), T(this, "isRunning", false), T(this, "onMinViewTimeReached", () => {
      this.quests.forEach(e => {
        (0, v.T)().info("".concat(e.config.messages.questName, " Quest viewed for at least ").concat(this.minViewTimeSeconds, "s at ").concat((0, b._b)(this.questContent)), {
          impressionId: this.id
        });
        let t = false,
          n = (0, S.Zp)(this.questContent);
        if (null != n) {
          let r = w(e.id, n);
          (t = !D.has(r) && (0, S.VB)(this.questContent)) && D.add(r)
        }
        let r = (0, S.jY)(this.questContent),
          i = (0, S.R_)(this.questContent);
        (0, u.S)((0, b._b)(this.questContent)).then(n => {
          (0, b.dA)({
            questId: e.id,
            event: I.rMx.QUEST_CONTENT_VIEWED,
            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
            properties: A({
              min_view_time_seconds: this.minViewTimeSeconds,
              min_viewport_percentage: this.minViewportPercentage,
              triggered_by_status_change: this.triggeredByStatusChange,
              apple_advertising_id: null != n && (0, E.isIOS)() ? n.advertisingId : null,
              android_advertising_id: null != n && (0, E.isAndroid)() ? n.advertisingId : null,
              metadata_raw: null != r ? r : null,
              metadata_sealed: null != i ? i : null
            }, (0, d.Z)(), this.commonProperties(e), this.getBrandSafetyContext()),
            shouldExtendSession: t,
            sourceQuestContent: this.sourceQuestContent
          })
        })
      })
    }), T(this, "beat", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      _.quests.forEach(t => {
        if (null != _.lastBeatTime) {
          let n = Math.round(Date.now() - _.lastBeatTime);
          (0, v.T)().info("".concat(t.config.messages.questName, " Quest impression ").concat(e ? "terminal " : "", "heartbeat: ").concat(n, "ms since last heartbeat"), {
            impressionId: _.id
          }), (0, b.dA)({
            questId: t.id,
            event: I.rMx.QUEST_CONTENT_VIEW_TIME,
            properties: A({
              is_termination_beat: e,
              viewed_time_ms: n,
              triggered_by_status_change: _.triggeredByStatusChange
            }, _.commonProperties(t)),
            trackGuildAndChannelMetadata: _.trackGuildAndChannelMetadata,
            sourceQuestContent: _.sourceQuestContent
          })
        }
      }), _.lastBeatTime = Date.now()
    }), T(this, "commonProperties", e => A({
      impression_id: this.id,
      is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
      quest_status: (0, b.uk)(e)
    }, (0, b.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex))), T(this, "clone", e => {
      let {
        triggeredByStatusChange: t
      } = e;
      return this.stop(), new x({
        questContent: this.questContent,
        questOrQuests: this.quests,
        questContentRowIndex: this.questContentRowIndex,
        questContentPosition: this.questContentPosition,
        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
        triggeredByStatusChange: t,
        isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
        sourceQuestContent: this.sourceQuestContent
      })
    }), T(this, "start", () => {
      this.stop(false), this.lastBeatTime = Date.now(), this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1e3 * N), this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1e3 * this.minViewTimeSeconds);
      let e = (0, S.jY)(this.questContent),
        t = (0, S.R_)(this.questContent);
      this.quests.forEach(n => {
        (0, v.T)().info("".concat(n.config.messages.questName, " Quest became visible at ").concat((0, b._b)(this.questContent)), {
          impressionId: this.id
        }), (0, b.dA)({
          questId: n.id,
          event: I.rMx.QUEST_CONTENT_LOADED,
          properties: A({
            triggered_by_status_change: this.triggeredByStatusChange,
            metadata_raw: null != e ? e : null,
            metadata_sealed: null != t ? t : null
          }, this.commonProperties(n)),
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
          sourceQuestContent: this.sourceQuestContent
        })
      }), (0, O.a)("QuestImpressionTracker") && p.Z.increment({
        name: o.V.QUEST_CONTENT_IMPRESSION,
        tags: ["quest_content:".concat((0, b._b)(this.questContent))]
      }), this.isRunning = true
    }), T(this, "stop", function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
      e && _.beat(true), _.lastBeatTime = true, clearInterval(_.heartbeatTimeoutId), clearTimeout(_.minViewTimeReachedTimeoutId), _.isRunning = false
    }), this.id = (0, a.Z)(), this.questContent = t, this.questContentPosition = i, this.minViewTimeSeconds = l, this.minViewportPercentage = R, this.quests = Array.isArray(e) ? e : [e], this.trackGuildAndChannelMetadata = r, this.triggeredByStatusChange = n, this.questContentRowIndex = s, this.isQuestEnrollmentBlocked = c, this.sourceQuestContent = f
  }
}
let L = (e, t) => {
    let n = Array.isArray(e) ? e.sort().map(e => e.id).join("_") : e.id;
    return "".concat(n, "_").concat(t)
  },
  j = e => {
    let t = Array.isArray(e) ? null : (0, b.uk)(e),
      n = (0, c.Z)(t);
    return t !== n
  },
  M = Chunk473749.createContext(true);

function k() {
  let e = Chunk473749.useContext(M);
  return null == module ? true : module.current
}

function U() {
  var e;
  return null == (e = k()) ? true : module.getId()
}

function G(e) {
  let {
    visible: t,
    visibleChanged: n,
    focused: a,
    reference: o,
    focusedChanged: c,
    sourceQuestContent: u
  } = e, d = j(e.questOrQuests), f = i.useRef(null), p = (0, s.e7)([y.Z], () => null != y.Z.questEnrollmentBlockedUntil, []);
  return (0, l.ZP)(() => () => {
    null != f.current && f.current.stop()
  }), i.useEffect(() => {
    let r = a && t,
      i = (n || c || d) && r,
      o = (n || c) && !r || d;
    (i || o) && null != f.current && f.current.stop(), i && (f.current = new x({
      questOrQuests: e.questOrQuests,
      questContent: e.questContent,
      questContentPosition: e.questContentPosition,
      questContentRowIndex: e.questContentRowIndex,
      triggeredByStatusChange: d,
      trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
      minViewTimeSeconds: e.minViewTimeSeconds,
      isQuestEnrollmentBlocked: p,
      sourceQuestContent: u
    }), f.current.start())
  }, [a, t, c, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, d, e.minViewTimeSeconds, p, u]), (0, r.jsx)(M.Provider, {
    value: f,
    children: e.children(o, f)
  })
}