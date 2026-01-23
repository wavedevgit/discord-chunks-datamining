/** Chunk was on web.js **/
/** chunk id: 906822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RC: () => G,
  bK: () => Y,
  go: () => H,
  ur: () => x,
  vU: () => B
}), require("./896048.js"), require("./228524.js"), require("./457529.js"), require("./638769.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk323889 = require("./323889.js"),
  Chunk731738 = require("./731738.js"),
  Chunk311907 = require("./311907.js"),
  Chunk964486 = require("./964486.js"),
  Chunk475743 = require("./475743.js"),
  Chunk345353 = require("./345353.js"),
  Chunk69114 = require("./69114.js"),
  Chunk633965 = require("./633965.js"),
  Chunk831062 = require("./831062.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk486020 = require("./486020.js"),
  Chunk723702 = require("./723702.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk628473 = require("./628473.js"),
  Chunk943849 = require("./943849.js"),
  Chunk710969 = require("./710969.js"),
  Chunk652215 = require("./652215.js");

function T(e, t, n) {
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
      T(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = 100,
  P = 60,
  D = 1,
  x = .5,
  L = new Set;

function j(e, t) {
  return "".concat(e, "_").concat(t)
}
class M {
  getId() {
    return this.id
  }
  getQuestContentPosition() {
    return this.questContentPosition
  }
  getBrandSafetyContext() {
    var e;
    let t = (0, I.xn)(this.questContent),
      n = (0, I.vZ)(this.questContent),
      r = (0, p.pc)(),
      i = (0, p.Ld)();
    if (!(null == n ? true : n.is_campaign_ias_enabled) || !t || true === r || true === i) return null;
    let a = () => {
        let e = r(),
          t = m.A.getGuilds();
        return e.map(e => {
          var n;
          let r = t[e];
          if (true === r) return null;
          let i = {
            id: r.id,
            name: r.name
          };
          null !== r.description && (i.description = r.description);
          let a = null !== r.icon && null != (n = E.Ay.getGuildIconURL({
            id: r.id,
            icon: r.icon,
            size: 44,
            canAnimate: true
          })) ? n : null;
          return null !== a && (i.icon_url = a), i
        }).filter(e => null !== e)
      },
      s = g.A.getGuildId(),
      o = null != s ? m.A.getGuild(s) : null,
      l = () => null == o ? [] : i().map(e => {
        let t = h.A.getChannel(e);
        if (true === t) return null;
        let n = {
          id: t.id,
          name: t.name
        };
        return t.topic.length > 0 && (n.channel_topic = t.topic), n
      }).filter(e => null !== e),
      c = {
        guilds: a(),
        channels: l()
      };
    null != s && (c.selected_guild_id = s);
    let u = (null == o ? true : o.banner) !== null && (null == o ? true : o.banner) !== true && null != (e = E.Ay.getGuildBannerURL({
      id: o.id,
      banner: o.banner
    }, true)) ? e : null;
    return null !== u && (c.selected_guild_banner_url = u), c.guilds.length > w && (c.guilds = c.guilds.slice(0, w), c.truncated = true), c.channels.length > w && (c.channels = c.channels.slice(0, w), c.truncated = true), {
      brand_safety_context: JSON.stringify(c)
    }
  }
  constructor(e) {
    var t = this;
    T(this, "id", true), T(this, "entity", true), T(this, "questContent", true), T(this, "triggeredByStatusChange", true), T(this, "trackGuildAndChannelMetadata", true), T(this, "questContentPosition", true), T(this, "questContentRowIndex", true), T(this, "sourceQuestContent", true), T(this, "heartbeatTimeoutId", true), T(this, "lastBeatTime", true), T(this, "minViewTimeReachedTimeoutId", true), T(this, "minViewTimeSeconds", true), T(this, "minViewportPercentage", true), T(this, "isQuestEnrollmentBlocked", true), T(this, "isRunning", false), T(this, "trackViewedPlacement", e => {
      let t = (0, I.HN)(this.questContent);
      null != t && (0, I.xn)(this.questContent) && L.add(j(e, t))
    }), T(this, "shouldExtendSession", e => {
      let t = (0, I.HN)(this.questContent);
      return null != t && !L.has(j(e, t)) && (0, I.xn)(this.questContent)
    }), T(this, "onMinViewTimeReached", async () => {
      let e = (0, I.Li)(this.questContent),
        t = (0, I.L4)(this.questContent),
        n = await (0, d.N)((0, b.jO)(this.questContent)),
        r = {
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
          sourceQuestContent: this.sourceQuestContent
        },
        i = C({
          min_view_time_seconds: this.minViewTimeSeconds,
          min_viewport_percentage: this.minViewportPercentage,
          triggered_by_status_change: this.triggeredByStatusChange,
          apple_advertising_id: null != n && (0, y.isIOS)() ? n.advertisingId : null,
          android_advertising_id: null != n && (0, y.isAndroid)() ? n.advertisingId : null,
          metadata_raw: null != e ? e : null,
          metadata_sealed: null != t ? t : null
        }, (0, f.A)(), this.getBrandSafetyContext());
      this.entity.adContentIds.forEach((e, t) => {
        let n = this.shouldExtendSession(e);
        if (this.trackViewedPlacement(e), this.entity.adCreativeType === s.p.QUEST) {
          var a, o, l;
          let e = this.entity.adContentIds[t],
            s = O.A.getQuest(e);
          (0, A.L)().info("".concat(null != (a = null == s ? true : s.config.messages.questName) ? a : e, " Quest viewed for at least ").concat(this.minViewTimeSeconds, "s at ").concat((0, b.jO)(this.questContent)), {
            impressionId: this.id
          }), (0, b.av)(R(C({}, r), {
            shouldExtendSession: n,
            questId: e,
            event: S.HAw.QUEST_CONTENT_VIEWED,
            properties: R(C({}, i, this.commonProperties(s)), {
              traffic_metadata_raw: null != (o = (0, I.yI)(this.questContent, null == s ? true : s.id)) ? o : null,
              traffic_metadata_sealed: null != (l = (0, I.Gp)(this.questContent, null == s ? true : s.id)) ? l : null
            })
          }))
        } else {
          let e = this.entity.adContentIds[t];
          (0, A.L)().info("".concat(e, " ad content viewed for at least ").concat(this.minViewTimeSeconds, "s at ").concat((0, b.jO)(this.questContent)), {
            impressionId: this.id
          }), (0, b.Qg)(R(C({}, r), {
            shouldExtendSession: n,
            adContentId: e,
            adCreativeType: this.entity.adCreativeType,
            event: S.HAw.QUEST_CONTENT_VIEWED,
            properties: C({}, i, this.commonProperties())
          }))
        }
      })
    }), T(this, "beat", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (null != t.lastBeatTime) {
        let n = Math.round(Date.now() - t.lastBeatTime),
          r = {
            trackGuildAndChannelMetadata: t.trackGuildAndChannelMetadata,
            sourceQuestContent: t.sourceQuestContent
          },
          i = {
            is_termination_beat: e,
            viewed_time_ms: n,
            triggered_by_status_change: t.triggeredByStatusChange
          };
        t.entity.adContentIds.forEach((a, o) => {
          if (t.entity.adCreativeType === s.p.QUEST) {
            var l;
            let a = t.entity.adContentIds[o],
              s = O.A.getQuest(a);
            (0, A.L)().info("".concat(null != (l = null == s ? true : s.config.messages.questName) ? l : a, " Quest impression ").concat(e ? "terminal " : "", "heartbeat: ").concat(n, "ms since last heartbeat"), {
              impressionId: t.id
            }), (0, b.av)(R(C({}, r), {
              questId: a,
              event: S.HAw.QUEST_CONTENT_VIEW_TIME,
              properties: C({}, i, t.commonProperties(s))
            }))
          } else {
            let a = t.entity.adContentIds[o];
            (0, A.L)().info("".concat(a, " ad content impression ").concat(e ? "terminal " : "", "heartbeat: ").concat(n, "ms since last heartbeat"), {
              impressionId: t.id
            }), (0, b.Qg)(R(C({}, r), {
              adContentId: a,
              adCreativeType: t.entity.adCreativeType,
              event: S.HAw.QUEST_CONTENT_VIEW_TIME,
              properties: C({}, i, t.commonProperties())
            }))
          }
        })
      }
      t.lastBeatTime = Date.now()
    }), T(this, "commonProperties", e => C({
      impression_id: this.id,
      is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
      quest_status: null == e ? true : (0, b.NI)(e)
    }, (0, b.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex))), T(this, "clone", e => {
      let {
        triggeredByStatusChange: t
      } = e;
      return this.stop(), new M(C({
        questContent: this.questContent,
        questContentRowIndex: this.questContentRowIndex,
        questContentPosition: this.questContentPosition,
        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
        triggeredByStatusChange: t,
        isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
        sourceQuestContent: this.sourceQuestContent
      }, this.entity))
    }), T(this, "start", () => {
      this.stop(false), this.lastBeatTime = Date.now(), this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1e3 * P), this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1e3 * this.minViewTimeSeconds);
      let e = (0, I.Li)(this.questContent),
        t = (0, I.L4)(this.questContent),
        n = {
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
          sourceQuestContent: this.sourceQuestContent
        },
        r = {
          triggered_by_status_change: this.triggeredByStatusChange,
          metadata_raw: null != e ? e : null,
          metadata_sealed: null != t ? t : null
        };
      this.entity.adContentIds.forEach((e, t) => {
        if (this.entity.adCreativeType === s.p.QUEST) {
          var i, a, o;
          let e = this.entity.adContentIds[t],
            s = O.A.getQuest(e);
          (0, A.L)().info("".concat(null != (i = null == s ? true : s.config.messages.questName) ? i : e, " Quest became visible at ").concat((0, b.jO)(this.questContent)), {
            impressionId: this.id
          }), (0, b.av)(R(C({}, n), {
            questId: e,
            event: S.HAw.QUEST_CONTENT_LOADED,
            properties: R(C({}, r, this.commonProperties(s)), {
              traffic_metadata_raw: null != (a = (0, I.yI)(this.questContent, null == s ? true : s.id)) ? a : null,
              traffic_metadata_sealed: null != (o = (0, I.Gp)(this.questContent, null == s ? true : s.id)) ? o : null
            })
          }))
        } else {
          let e = this.entity.adContentIds[t];
          (0, A.L)().info("".concat(e, " ad content became visible at ").concat((0, b.jO)(this.questContent)), {
            impressionId: this.id
          }), (0, b.Qg)(R(C({}, n), {
            adContentId: e,
            adCreativeType: this.entity.adCreativeType,
            event: S.HAw.QUEST_CONTENT_LOADED,
            properties: C({}, r, this.commonProperties())
          }))
        }
      }), (0, v.x)("QuestImpressionTracker") && _.A.increment({
        name: o.K.QUEST_CONTENT_IMPRESSION,
        tags: ["quest_content:".concat((0, b.jO)(this.questContent))]
      }), this.isRunning = true
    }), T(this, "stop", function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
      e && t.beat(true), t.lastBeatTime = true, clearInterval(t.heartbeatTimeoutId), clearTimeout(t.minViewTimeReachedTimeoutId), t.isRunning = false
    });
    const {
      adContentIds: n,
      adCreativeType: r,
      questContent: i,
      triggeredByStatusChange: l,
      trackGuildAndChannelMetadata: c,
      questContentPosition: u,
      questContentRowIndex: p,
      minViewTimeSeconds: h = D,
      isQuestEnrollmentBlocked: m,
      sourceQuestContent: g
    } = e;
    this.id = (0, a.A)(), this.questContent = i, this.questContentPosition = u, this.minViewTimeSeconds = h, this.minViewportPercentage = x, this.trackGuildAndChannelMetadata = c, this.triggeredByStatusChange = l, this.questContentRowIndex = p, this.isQuestEnrollmentBlocked = m, this.sourceQuestContent = g, s.p.QUEST, this.entity = {
      adContentIds: n,
      adCreativeType: r
    }
  }
}

function k(e) {
  let {
    adContentIds: t,
    questContent: n
  } = e;
  return "".concat([...t].sort().join("_"), "_").concat(n)
}

function U(e, t) {
  return i.useMemo(() => null != t ? [t] : null != e ? Array.isArray(e) ? e.map(e => e.id) : [e.id] : [], [e, t])
}

function G(e) {
  let t = U("questOrQuests" in e ? e.questOrQuests : true, "adContentId" in e ? e.adContentId : true),
    n = "questOrQuests" in e ? s.p.QUEST : e.adCreativeType;
  return i.useMemo(() => {
    let r = k({
      adContentIds: t,
      questContent: e.questContent
    });
    return s.p.QUEST, {
      adContentIds: t,
      adCreativeType: n,
      key: r
    }
  }, [t, e.questContent, n])
}

function V(e) {
  let {
    adContentIds: t,
    adCreativeType: n
  } = e, r = (0, l.bG)([O.A], () => n !== s.p.QUEST || 1 !== t.length ? null : O.A.getQuest(t[0]), [t, n]), a = i.useMemo(() => null == r ? null : (0, b.NI)(r), [r]), o = (0, u.A)(a);
  return a !== o
}
let F = Chunk64700.createContext(true);

function B() {
  let e = i.useContext(F);
  return null == e ? true : e.current
}

function H() {
  var e;
  return null == (e = B()) ? true : e.getId()
}

function Y(e) {
  let {
    visible: t,
    visibleChanged: n,
    focused: a,
    reference: o,
    focusedChanged: u,
    sourceQuestContent: d
  } = e, f = V(e), p = i.useRef(null), _ = (0, l.bG)([O.A], () => null != O.A.questEnrollmentBlockedUntil, []);
  return (0, c.Ay)(() => () => {
    null != p.current && p.current.stop()
  }), i.useEffect(() => {
    let r = a && t,
      i = (n || u || f) && r,
      o = (n || u) && !r || f;
    if ((i || o) && null != p.current && p.current.stop(), i) {
      let t = {
        isQuestEnrollmentBlocked: _,
        minViewTimeSeconds: e.minViewTimeSeconds,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentRowIndex: e.questContentRowIndex,
        sourceQuestContent: d,
        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
        triggeredByStatusChange: f
      };
      e.adCreativeType, s.p.QUEST, p.current = new M(R(C({}, t), {
        adContentIds: e.adContentIds,
        adCreativeType: e.adCreativeType
      })), p.current.start()
    }
  }, [a, t, u, n, e.adContentIds, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, f, e.minViewTimeSeconds, _, d, e.adCreativeType]), (0, r.jsx)(F.Provider, {
    value: p,
    children: e.children(o, p)
  })
}