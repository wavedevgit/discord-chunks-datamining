/** Chunk was on web.js **/
/** chunk id: 266569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n0: () => R,
  xs: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk323889 = require("./323889.js"),
  Chunk731738 = require("./731738.js"),
  Chunk311907 = require("./311907.js"),
  Chunk964486 = require("./964486.js"),
  Chunk345353 = require("./345353.js"),
  Chunk69114 = require("./69114.js"),
  Chunk831062 = require("./831062.js"),
  Chunk723702 = require("./723702.js"),
  Chunk859703 = require("./859703.js"),
  Chunk628473 = require("./628473.js"),
  Chunk943849 = require("./943849.js"),
  Chunk710969 = require("./710969.js"),
  Chunk561844 = require("./561844.js"),
  Chunk590202 = require("./590202.js"),
  Chunk910463 = require("./910463.js"),
  Chunk971649 = require("./971649.js");
require("./23766.js");
var Chunk652215 = require("./652215.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
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

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = new Set;

function N(e, t) {
  return "".concat(e, "_").concat(t)
}
class w {
  getId() {
    return this.id
  }
  getQuestContentPosition() {
    return this.questContentPosition
  }
  constructor(e) {
    var t = this;
    A(this, "id", true), A(this, "entity", true), A(this, "questContent", true), A(this, "triggeredByStatusChange", true), A(this, "trackGuildAndChannelMetadata", true), A(this, "questContentPosition", true), A(this, "questContentRowIndex", true), A(this, "sourceQuestContent", true), A(this, "heartbeatTimeoutId", true), A(this, "lastBeatTime", true), A(this, "minViewTimeReachedTimeoutId", true), A(this, "minViewTimeSeconds", true), A(this, "minViewportPercentage", true), A(this, "isQuestEnrollmentBlocked", true), A(this, "isRunning", false), A(this, "trackViewedPlacement", e => {
      let t = (0, g.HN)(this.questContent);
      null != t && (0, g.xn)(this.questContent) && C.add(N(e, t))
    }), A(this, "shouldExtendSession", e => {
      let t = (0, g.HN)(this.questContent);
      return null != t && !C.has(N(e, t)) && (0, g.xn)(this.questContent)
    }), A(this, "onMinViewTimeReached", async () => {
      let e = (0, g.Li)(this.questContent),
        t = (0, g.L4)(this.questContent),
        n = await (0, u.N)((0, y.jO)(this.questContent)),
        r = {
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
          sourceQuestContent: this.sourceQuestContent
        },
        i = I({
          min_view_time_seconds: this.minViewTimeSeconds,
          min_viewport_percentage: this.minViewportPercentage,
          triggered_by_status_change: this.triggeredByStatusChange,
          apple_advertising_id: null != n && (0, p.isIOS)() ? n.advertisingId : null,
          android_advertising_id: null != n && (0, p.isAndroid)() ? n.advertisingId : null,
          metadata_raw: null != e ? e : null,
          metadata_sealed: null != t ? t : null
        }, (0, d.A)(), (0, b.X)(this.questContent));
      this.entity.adContentIds.forEach((e, t) => {
        let n = this.shouldExtendSession(e);
        if (this.trackViewedPlacement(e), this.entity.adCreativeType === s.p.QUEST) {
          var a, o, l;
          let e = this.entity.adContentIds[t],
            s = _.A.getQuest(e);
          (0, m.L)().info("".concat(null != (a = null == s ? true : s.config.messages.questName) ? a : e, " Quest viewed for at least ").concat(this.minViewTimeSeconds, "s at ").concat((0, y.jO)(this.questContent)), {
            impressionId: this.id
          }), (0, E.av)(T(I({}, r), {
            shouldExtendSession: n,
            questId: e,
            event: v.HAw.QUEST_CONTENT_VIEWED,
            properties: T(I({}, i, this.commonProperties(s)), {
              traffic_metadata_raw: null != (o = (0, g.yI)(this.questContent, null == s ? true : s.id)) ? o : null,
              traffic_metadata_sealed: null != (l = (0, g.Gp)(this.questContent, null == s ? true : s.id)) ? l : null
            })
          }))
        } else {
          let e = this.entity.adContentIds[t];
          (0, m.L)().info("".concat(e, " ad content viewed for at least ").concat(this.minViewTimeSeconds, "s at ").concat((0, y.jO)(this.questContent)), {
            impressionId: this.id
          }), (0, E.Qg)(T(I({}, r), {
            shouldExtendSession: n,
            adContentId: e,
            adCreativeType: this.entity.adCreativeType,
            event: v.HAw.QUEST_CONTENT_VIEWED,
            properties: I({}, i, this.commonProperties())
          }))
        }
      })
    }), A(this, "beat", function() {
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
              s = _.A.getQuest(a);
            (0, m.L)().info("".concat(null != (l = null == s ? true : s.config.messages.questName) ? l : a, " Quest impression ").concat(e ? "terminal " : "", "heartbeat: ").concat(n, "ms since last heartbeat"), {
              impressionId: t.id
            }), (0, E.av)(T(I({}, r), {
              questId: a,
              event: v.HAw.QUEST_CONTENT_VIEW_TIME,
              properties: I({}, i, t.commonProperties(s))
            }))
          } else {
            let a = t.entity.adContentIds[o];
            (0, m.L)().info("".concat(a, " ad content impression ").concat(e ? "terminal " : "", "heartbeat: ").concat(n, "ms since last heartbeat"), {
              impressionId: t.id
            }), (0, E.Qg)(T(I({}, r), {
              adContentId: a,
              adCreativeType: t.entity.adCreativeType,
              event: v.HAw.QUEST_CONTENT_VIEW_TIME,
              properties: I({}, i, t.commonProperties())
            }))
          }
        })
      }
      t.lastBeatTime = Date.now()
    }), A(this, "commonProperties", e => I({
      impression_id: this.id,
      is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
      quest_status: null == e ? true : (0, y.NI)(e)
    }, (0, y.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex))), A(this, "clone", e => {
      let {
        triggeredByStatusChange: t
      } = e;
      return this.stop(), new w(I({
        questContent: this.questContent,
        questContentRowIndex: this.questContentRowIndex,
        questContentPosition: this.questContentPosition,
        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
        triggeredByStatusChange: t,
        isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
        sourceQuestContent: this.sourceQuestContent
      }, this.entity))
    }), A(this, "start", () => {
      this.stop(false), this.lastBeatTime = Date.now(), this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 6e4), this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1e3 * this.minViewTimeSeconds);
      let e = (0, g.Li)(this.questContent),
        t = (0, g.L4)(this.questContent),
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
            s = _.A.getQuest(e);
          (0, m.L)().info("".concat(null != (i = null == s ? true : s.config.messages.questName) ? i : e, " Quest became visible at ").concat((0, y.jO)(this.questContent)), {
            impressionId: this.id
          }), (0, E.av)(T(I({}, n), {
            questId: e,
            event: v.HAw.QUEST_CONTENT_LOADED,
            properties: T(I({}, r, this.commonProperties(s)), {
              traffic_metadata_raw: null != (a = (0, g.yI)(this.questContent, null == s ? true : s.id)) ? a : null,
              traffic_metadata_sealed: null != (o = (0, g.Gp)(this.questContent, null == s ? true : s.id)) ? o : null
            })
          }))
        } else {
          let e = this.entity.adContentIds[t];
          (0, m.L)().info("".concat(e, " ad content became visible at ").concat((0, y.jO)(this.questContent)), {
            impressionId: this.id
          }), (0, E.Qg)(T(I({}, n), {
            adContentId: e,
            adCreativeType: this.entity.adCreativeType,
            event: v.HAw.QUEST_CONTENT_LOADED,
            properties: I({}, r, this.commonProperties())
          }))
        }
      }), (0, h.x)("QuestImpressionTracker") && f.A.increment({
        name: o.K.QUEST_CONTENT_IMPRESSION,
        tags: ["quest_content:".concat((0, y.jO)(this.questContent))]
      }), this.isRunning = true
    }), A(this, "stop", function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
      e && t.beat(true), t.lastBeatTime = true, clearInterval(t.heartbeatTimeoutId), clearTimeout(t.minViewTimeReachedTimeoutId), t.isRunning = false
    });
    const {
      adContentIds: n,
      adCreativeType: r,
      questContent: i,
      triggeredByStatusChange: l,
      trackGuildAndChannelMetadata: c,
      questContentPosition: O,
      questContentRowIndex: S,
      minViewTimeSeconds: R = 1,
      isQuestEnrollmentBlocked: P,
      sourceQuestContent: D
    } = e;
    this.id = (0, a.A)(), this.questContent = i, this.questContentPosition = O, this.minViewTimeSeconds = R, this.minViewportPercentage = .5, this.trackGuildAndChannelMetadata = c, this.triggeredByStatusChange = l, this.questContentRowIndex = S, this.isQuestEnrollmentBlocked = P, this.sourceQuestContent = D, s.p.QUEST, this.entity = {
      adContentIds: n,
      adCreativeType: r
    }
  }
}
let R = Chunk64700.createContext(true);

function P(e) {
  let {
    visible: t,
    visibleChanged: n,
    focused: a,
    reference: o,
    focusedChanged: u,
    sourceQuestContent: d
  } = e, f = (0, O.iY)(e), p = i.useRef(null), h = (0, l.bG)([_.A], () => null != _.A.questEnrollmentBlockedUntil, []);
  return (0, c.Ay)(() => () => {
    null != p.current && p.current.stop()
  }), i.useEffect(() => {
    let r = a && t,
      i = (n || u || f) && r,
      o = (n || u) && !r || f;
    if ((i || o) && null != p.current && p.current.stop(), i) {
      let t = {
        isQuestEnrollmentBlocked: h,
        minViewTimeSeconds: e.minViewTimeSeconds,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentRowIndex: e.questContentRowIndex,
        sourceQuestContent: d,
        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
        triggeredByStatusChange: f
      };
      e.adCreativeType, s.p.QUEST, p.current = new w(T(I({}, t), {
        adContentIds: e.adContentIds,
        adCreativeType: e.adCreativeType
      })), p.current.start()
    }
  }, [a, t, u, n, e.adContentIds, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, f, e.minViewTimeSeconds, h, d, e.adCreativeType]), (0, r.jsx)(R.Provider, {
    value: p,
    children: e.children(o, p)
  })
}