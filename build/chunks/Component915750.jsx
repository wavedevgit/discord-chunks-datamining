/** Chunk was on web.js **/
/** chunk id: 915750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B5: () => M,
  PI: () => w,
  WD: () => U,
  aM: () => G,
  ui: () => B
}), require("./388685.js"), require("./953529.js"), require("./49124.js"), require("./642613.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk509212 = require("./509212.js"),
  Chunk569984 = require("./569984.js"),
  Chunk811399 = require("./811399.js"),
  Chunk882198 = require("./882198.js"),
  Chunk5881 = require("./5881.js"),
  Chunk981631 = require("./981631.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}
let N = 100,
  R = 60,
  P = 1,
  w = .5,
  D = new Set;

function x(e, t) {
  return "".concat(e, "_").concat(t)
}
class L {
  getId() {
    return this.id
  }
  getQuestContentPosition() {
    return this.questContentPosition
  }
  getBrandSafetyContext() {
    var e;
    let t = (0, Chunk811399.d)(this.questContent),
      n = (0, Chunk509212.VB)(this.questContent),
      r = (0, Chunk509212.uN)(this.questContent),
      i = (0, Chunk113544.z5)(),
      a = (0, Chunk113544.QW)();
    if (!exports || !(null == Chunk951288 ? true : Chunk951288.is_campaign_ias_enabled) || !require || true === Chunk647438 || true === Chunk772848) return null;
    let o = () => {
        let e = Chunk647438(),
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
      s = Chunk914010.Z.getGuildId(),
      l = null != Chunk442837 ? Chunk430824.Z.getGuild(Chunk442837) : null,
      c = () => null == Chunk493773 ? [] : Chunk772848().map(e => {
        let t = p.Z.getChannel(e);
        if (true === t) return null;
        let n = {
          id: t.id,
          name: t.name
        };
        return t.topic.length > 0 && (n.channel_topic = t.topic), n
      }).filter(e => null !== e),
      u = {
        guilds: Chunk286379(),
        channels: Chunk110924()
      };
    null != Chunk442837 && (Chunk516796.selected_guild_id = Chunk442837);
    let d = (null == Chunk493773 ? true : Chunk493773.banner) !== null && (null == Chunk493773 ? true : Chunk493773.banner) !== true && null != (e = Chunk768581.ZP.getGuildBannerURL({
      id: Chunk493773.id,
      banner: Chunk493773.banner
    }, true)) ? module : null;
    return null !== Chunk186102 && (Chunk516796.selected_guild_banner_url = Chunk186102), Chunk516796.guilds.length > N && (Chunk516796.guilds = Chunk516796.guilds.slice(0, N), Chunk516796.truncated = true), Chunk516796.channels.length > N && (Chunk516796.channels = Chunk516796.channels.slice(0, N), Chunk516796.truncated = true), {
      brand_safety_context: JSON.stringify(Chunk516796)
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
    var p = this;
    A(this, "id", true), A(this, "quests", true), A(this, "questContent", true), A(this, "triggeredByStatusChange", true), A(this, "trackGuildAndChannelMetadata", true), A(this, "questContentPosition", true), A(this, "questContentRowIndex", true), A(this, "sourceQuestContent", true), A(this, "heartbeatTimeoutId", true), A(this, "lastBeatTime", true), A(this, "minViewTimeReachedTimeoutId", true), A(this, "minViewTimeSeconds", true), A(this, "minViewportPercentage", true), A(this, "isQuestEnrollmentBlocked", true), A(this, "isRunning", false), A(this, "onMinViewTimeReached", () => {
      this.quests.forEach(e => {
        (0, T.T)().info("".concat(e.config.messages.questName, " Quest viewed for at least ").concat(this.minViewTimeSeconds, "s at ").concat((0, b._b)(this.questContent)), {
          impressionId: this.id
        });
        let t = false,
          n = (0, y.Zp)(this.questContent);
        if (null != n) {
          let r = x(e.id, n);
          (t = !D.has(r) && (0, y.VB)(this.questContent)) && D.add(r)
        }
        let r = (0, y.jY)(this.questContent);
        (0, u.S)((0, b._b)(this.questContent)).then(n => {
          (0, b.dA)({
            questId: e.id,
            event: S.rMx.QUEST_CONTENT_VIEWED,
            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
            properties: C({
              min_view_time_seconds: this.minViewTimeSeconds,
              min_viewport_percentage: this.minViewportPercentage,
              triggered_by_status_change: this.triggeredByStatusChange,
              apple_advertising_id: null != n && (0, E.isIOS)() ? n.advertisingId : null,
              android_advertising_id: null != n && (0, E.isAndroid)() ? n.advertisingId : null,
              metadata_raw: null != r ? r : null
            }, (0, d.Z)(), this.commonProperties(e), this.getBrandSafetyContext()),
            shouldExtendSession: t,
            sourceQuestContent: this.sourceQuestContent
          })
        })
      })
    }), A(this, "beat", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      p.quests.forEach(t => {
        if (null != p.lastBeatTime) {
          let n = Math.round(Date.now() - p.lastBeatTime);
          (0, T.T)().info("".concat(t.config.messages.questName, " Quest impression ").concat(e ? "terminal " : "", "heartbeat: ").concat(n, "ms since last heartbeat"), {
            impressionId: p.id
          }), (0, b.dA)({
            questId: t.id,
            event: S.rMx.QUEST_CONTENT_VIEW_TIME,
            properties: C({
              is_termination_beat: e,
              viewed_time_ms: n,
              triggered_by_status_change: p.triggeredByStatusChange
            }, p.commonProperties(t)),
            trackGuildAndChannelMetadata: p.trackGuildAndChannelMetadata,
            sourceQuestContent: p.sourceQuestContent
          })
        }
      }), p.lastBeatTime = Date.now()
    }), A(this, "commonProperties", e => C({
      impression_id: this.id,
      is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
      quest_status: (0, b.uk)(e)
    }, (0, b.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex))), A(this, "clone", e => {
      let {
        triggeredByStatusChange: t
      } = e;
      return this.stop(), new L({
        questContent: this.questContent,
        questOrQuests: this.quests,
        questContentRowIndex: this.questContentRowIndex,
        questContentPosition: this.questContentPosition,
        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
        triggeredByStatusChange: t,
        isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
        sourceQuestContent: this.sourceQuestContent
      })
    }), A(this, "start", () => {
      this.stop(false), this.lastBeatTime = Date.now(), this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1e3 * R), this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1e3 * this.minViewTimeSeconds);
      let e = (0, y.jY)(this.questContent);
      this.quests.forEach(t => {
        (0, T.T)().info("".concat(t.config.messages.questName, " Quest became visible at ").concat((0, b._b)(this.questContent)), {
          impressionId: this.id
        }), (0, b.dA)({
          questId: t.id,
          event: S.rMx.QUEST_CONTENT_LOADED,
          properties: C({
            triggered_by_status_change: this.triggeredByStatusChange,
            metadata_raw: null != e ? e : null
          }, this.commonProperties(t)),
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
          sourceQuestContent: this.sourceQuestContent
        })
      }), (0, I.a)("QuestImpressionTracker") && _.Z.increment({
        name: o.V.QUEST_CONTENT_IMPRESSION,
        tags: ["quest_content:".concat((0, b._b)(this.questContent))]
      }), this.isRunning = true
    }), A(this, "stop", function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
      e && p.beat(true), p.lastBeatTime = true, clearInterval(p.heartbeatTimeoutId), clearTimeout(p.minViewTimeReachedTimeoutId), p.isRunning = false
    }), this.id = (0, a.Z)(), this.questContent = t, this.questContentPosition = i, this.minViewTimeSeconds = l, this.minViewportPercentage = w, this.quests = Array.isArray(e) ? e : [e], this.trackGuildAndChannelMetadata = r, this.triggeredByStatusChange = n, this.questContentRowIndex = s, this.isQuestEnrollmentBlocked = c, this.sourceQuestContent = f
  }
}
let M = (e, t) => {
    let n = Array.isArray(e) ? e.sort().map(e => e.id).join("_") : e.id;
    return "".concat(n, "_").concat(t)
  },
  k = e => {
    let t = Array.isArray(e) ? null : (0, b.uk)(e),
      n = (0, c.Z)(t);
    return t !== n
  },
  j = Chunk647438.createContext(true);

function U() {
  let e = Chunk647438.useContext(j);
  return null == module ? true : module.current
}

function G() {
  var e;
  return null == (e = U()) ? true : module.getId()
}

function B(e) {
  let {
    visible: t,
    visibleChanged: n,
    focused: a,
    reference: o,
    focusedChanged: c,
    sourceQuestContent: u
  } = e, d = k(e.questOrQuests), f = i.useRef(null), _ = (0, s.e7)([O.Z], () => null != O.Z.questEnrollmentBlockedUntil, []);
  return (0, l.ZP)(() => () => {
    null != f.current && f.current.stop()
  }), i.useEffect(() => {
    let r = a && t,
      i = (n || c || d) && r,
      o = (n || c) && !r || d;
    (i || o) && null != f.current && f.current.stop(), i && (f.current = new L({
      questOrQuests: e.questOrQuests,
      questContent: e.questContent,
      questContentPosition: e.questContentPosition,
      questContentRowIndex: e.questContentRowIndex,
      triggeredByStatusChange: d,
      trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
      minViewTimeSeconds: e.minViewTimeSeconds,
      isQuestEnrollmentBlocked: _,
      sourceQuestContent: u
    }), f.current.start())
  }, [a, t, c, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, d, e.minViewTimeSeconds, _, u]), (0, r.jsx)(j.Provider, {
    value: f,
    children: e.children(o, f)
  })
}