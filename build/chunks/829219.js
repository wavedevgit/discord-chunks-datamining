/** Chunk was on web.js **/
/** chunk id: 829219, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CV: () => x,
  Fr: () => $,
  Gn: () => X,
  Gt: () => K,
  HA: () => Z,
  N1: () => j,
  Oq: () => V,
  Ov: () => L,
  Oy: () => G,
  QG: () => Q,
  R2: () => M,
  Tb: () => es,
  UZ: () => W,
  WM: () => U,
  Yb: () => Y,
  d6: () => z,
  dQ: () => ei,
  g5: () => B,
  jh: () => F,
  lk: () => H,
  lx: () => q,
  qY: () => en,
  r8: () => J,
  uI: () => et,
  vD: () => D,
  xB: () => er,
  yO: () => ee
}), require("./65821.js"), require("./896048.js");
var Chunk110259 = require("./110259.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk181658 = require("./181658.js"),
  Chunk881615 = require("./881615.js"),
  Chunk861638 = require("./861638.js"),
  Chunk577015 = require("./577015.js"),
  Chunk69114 = require("./69114.js"),
  Chunk310829 = require("./310829.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk499785 = require("./499785.js"),
  Chunk216456 = require("./216456.js"),
  Chunk260364 = require("./260364.js"),
  Chunk869359 = require("./869359.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk405670 = require("./405670.js"),
  Chunk579473 = require("./579473.js"),
  Chunk710969 = require("./710969.js"),
  Chunk229006 = require("./229006.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = 5;
async function D(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  try {
    let n = (await i.Bo.post({
      url: S.Rsh.QUEST_ON_CONSOLE_START(e),
      query: t ? {
        preview: t
      } : true,
      failImmediatelyWhenRateLimited: true,
      rejectWithError: false
    })).body;
    if (null != n.quest_user_status) a.h.dispatch({
      type: "QUESTS_USER_STATUS_UPDATE",
      user_status: n.quest_user_status
    });
    else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return {
      errorHints: n.error_hints_v2.slice(0, P)
    }
  } catch (r) {
    var n;
    let e = new s.A(r);
    if (429 === e.status) return {
      errorHints: [{
        type: y.xv.RATE_LIMITED,
        message: T.intl.string(T.t.Whhv4w),
        connected_account_id: "",
        connected_account_type: ""
      }]
    };
    let t = null != (n = e.getAnyErrorMessage()) ? n : T.intl.string(T.t.xSCvBf);
    return {
      errorHints: [{
        type: y.xv.GENERIC,
        message: t,
        connected_account_id: "",
        connected_account_type: ""
      }]
    }
  }
  return {
    errorHints: []
  }
}
async function x(e) {
  await i.Bo.post({
    url: S.Rsh.QUEST_ON_CONSOLE_STOP(e),
    rejectWithError: false
  })
}
async function L() {
  await i.Bo.del({
    url: S.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
    rejectWithError: false
  })
}
async function j() {
  if (!E.A.isFetchingCurrentQuests) {
    a.h.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
    });
    try {
      let e = await i.Bo.get({
          url: S.Rsh.QUESTS_CURRENT_QUESTS,
          rejectWithError: false
        }),
        t = e.body.quests.filter(e => (0, A.s2)(e)).map(e => (0, A.rO)(e)),
        n = e.body.quest_enrollment_blocked_until,
        r = t.filter(e => {
          var t;
          return (null == (t = e.userStatus) ? true : t.claimedAt) != null || e.config.rewardsConfig.platforms.length > 0
        }),
        s = e.body.excluded_quests.map(e => (0, A._g)(e));
      a.h.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
        quests: r,
        excludedQuests: s,
        questEnrollmentBlockedUntil: n
      })
    } catch (e) {
      a.h.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
        error: new s.A(e)
      })
    }
  }
}
async function M(e) {
  let {
    questId: t,
    streamKey: n,
    applicationId: i,
    terminal: o = false
  } = e;
  try {
    var l;
    let e = await _.A.post({
      url: S.Rsh.QUESTS_HEARTBEAT(t),
      body: {
        stream_key: n,
        application_id: i,
        terminal: o
      },
      trackedActionData: {
        event: r.NetworkActionNames.QUEST_HEARTBEAT,
        properties: {
          quest_id: t,
          application_id: i,
          terminal: o,
          is_overlay: __OVERLAY__,
          stack_trace: null != (l = Error().stack) ? l : "",
          is_playtime_eligible: true
        }
      },
      rejectWithError: false
    });
    a.h.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
      userStatus: (0, A.tp)(e.body),
      questId: t,
      streamKey: n
    })
  } catch (e) {
    a.h.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_FAILURE",
      error: new s.A(e),
      questId: t,
      streamKey: n
    })
  }
}

function k(e) {
  var t, n;
  return e instanceof c.CaptchaCancelError || null != e && "object" == typeof e && (400 === e.status && (null == (t = e.body) ? true : t.captcha_key) != null || null != e.captchaFields && !!(Object.keys(e.captchaFields).length > 0) || (null == (n = e.fields) ? true : n.captcha_key) != null || false)
}
var U = function(e) {
  return e.SUCCESS = "success", e.CAPTCHA_FAILED = "captcha_failed", e.UNKNOWN_ERROR = "unknown_error", e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request", e
}({});
async function G(e, t) {
  if (null != t.questContentCTA && (0, h.Y5)({
      questId: e,
      questContent: t.questContent,
      questContentCTA: t.questContentCTA,
      questContentPosition: t.questContentPosition,
      questContentRowIndex: t.questContentRowIndex,
      sourceQuestContent: t.sourceQuestContent
    }), e === I.Fw && (0, d.u)(), E.A.isEnrolling(e)) return {
    type: "previous_in_flight_request"
  };
  a.h.dispatch({
    type: "QUESTS_ENROLL_BEGIN",
    questId: e
  });
  try {
    let n = (0, v.Li)(t.questContent),
      r = (0, v.L4)(t.questContent),
      s = await i.Bo.post({
        url: S.Rsh.QUESTS_ENROLL(e),
        body: R(N({
          location: t.questContent
        }, (0, v.Kc)(e, t.questContent)), {
          metadata_raw: null != n ? n : null,
          metadata_sealed: null != r ? r : null
        }),
        rejectWithError: true
      });
    return a.h.dispatch({
      type: "QUESTS_ENROLL_SUCCESS",
      enrolledQuestUserStatus: (0, A.tp)(s.body)
    }), {
      type: "success"
    }
  } catch (t) {
    return a.h.dispatch({
      type: "QUESTS_ENROLL_FAILURE",
      questId: e
    }), k(t) ? {
      type: "captcha_failed"
    } : {
      type: "unknown_error"
    }
  }
}
async function V(e, t, n) {
  if (!E.A.isClaimingReward(e)) {
    a.h.dispatch({
      type: "QUESTS_CLAIM_REWARD_BEGIN",
      questId: e
    });
    try {
      let r = (0, v.Li)(n),
        s = (0, v.L4)(n),
        o = await i.Bo.post({
          url: S.Rsh.QUESTS_CLAIM_REWARD(e),
          body: R(N({
            platform: t,
            location: n
          }, (0, v.Kc)(e, n)), {
            metadata_raw: null != r ? r : null,
            metadata_sealed: null != s ? s : null
          }),
          rejectWithError: false
        }),
        l = (0, A.Dv)(o.body);
      return 0 === l.errors.length ? a.h.dispatch({
        type: "QUESTS_CLAIM_REWARD_SUCCESS",
        questId: e,
        entitlements: l
      }) : a.h.dispatch({
        type: "QUESTS_CLAIM_REWARD_FAILURE",
        error: l.errors,
        questId: e
      }), l
    } catch (t) {
      throw a.h.dispatch({
        type: "QUESTS_CLAIM_REWARD_FAILURE",
        error: new s.A(t),
        questId: e
      }), t
    }
  }
}
async function F(e) {
  if (!E.A.isFetchingRewardCode(e)) {
    a.h.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let t = await i.Bo.get({
        url: S.Rsh.QUESTS_REWARD_CODE(e),
        rejectWithError: false
      });
      a.h.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, A.Rd)(t.body)
      })
    } catch (t) {
      throw a.h.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
        error: new s.A(t),
        questId: e
      }), t
    }
  }
}
async function B(e, t) {
  let n = E.A.isDismissingContent(e),
    r = (0, v.vy)(t);
  if (!n && r) {
    a.h.dispatch({
      type: "QUESTS_DISMISS_CONTENT_BEGIN",
      questId: e,
      content: t
    });
    try {
      let n = await i.Bo.post({
        url: S.Rsh.QUESTS_DISMISS_CONTENT(e, t),
        body: N({}, (0, v.Kc)(e, t)),
        rejectWithError: false
      });
      a.h.dispatch({
        type: "QUESTS_DISMISS_CONTENT_SUCCESS",
        dismissedQuestUserStatus: (0, A.tp)(n.body)
      })
    } catch (t) {
      a.h.dispatch({
        type: "QUESTS_DISMISS_CONTENT_FAILURE",
        error: new s.A(t),
        questId: e
      })
    }
  }
}

function H(e) {
  a.h.dispatch({
    type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
    streamKey: e
  })
}
async function Y(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1;
  try {
    let n = await i.Bo.post({
      url: S.Rsh.QUESTS_PREVIEW_COMPLETE(e),
      body: {
        percent: t
      },
      rejectWithError: false
    });
    a.h.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, A.tp)(n.body)
    })
  } catch (t) {
    a.h.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new s.A(t),
      questId: e
    })
  }
}
async function W(e) {
  try {
    let t = await i.Bo.del({
      url: S.Rsh.QUESTS_PREVIEW_STATUS(e),
      body: {},
      rejectWithError: false
    });
    a.h.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, A.tp)(t.body)
    })
  } catch (t) {
    a.h.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new s.A(t),
      questId: e
    })
  }
}
async function K(e) {
  try {
    a.h.dispatch({
      type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL"
    });
    let t = await i.Bo.del({
      url: S.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e),
      body: {},
      rejectWithError: false
    });
    a.h.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, A.tp)(t.body)
    })
  } catch (t) {
    a.h.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new s.A(t),
      questId: e
    })
  }
}

function z(e) {
  a.h.dispatch({
    type: "QUESTS_DELIVERY_OVERRIDE",
    questId: e
  })
}

function q(e, t) {
  a.h.dispatch({
    type: "QUESTS_SELECT_TASK_PLATFORM",
    questId: e,
    platform: t
  })
}
async function Z() {
  if (!E.A.isFetchingClaimedQuests) {
    a.h.dispatch({
      type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN"
    });
    try {
      let e = (await i.Bo.get({
        url: S.Rsh.QUESTS_CLAIMED_QUESTS,
        rejectWithError: false
      })).body.quests.map(e => (0, A.S)(e));
      a.h.dispatch({
        type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS",
        quests: e
      })
    } catch (e) {
      a.h.dispatch({
        type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE",
        error: new s.A(e)
      })
    }
  }
}

function X(e, t, n) {
  a.h.dispatch({
    type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS",
    questId: e,
    taskEventName: t,
    progress: n
  })
}

function Q(e) {
  a.h.dispatch({
    type: "QUESTS_RESET_OPTIMISTIC_PROGRESS",
    questId: e
  })
}
async function J(e, t) {
  var n, r, c, d, p, _, h, E;
  let b = Date.now();
  g.A.recordQuestRequestAttempt("/quests/decision", t, e), a.h.dispatch({
    type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN",
    placement: e
  });
  try {
    let s = await (0, l.Ht)(),
      E = await (0, o.sN)(),
      O = (await i.Bo.get({
        url: S.Rsh.QUEST_FETCH_QUEST_TO_DELIVER(e, null == s ? true : s.uuid, E.uuid),
        rejectWithError: false
      })).body,
      v = O.quest,
      I = null != v ? (0, A.Yn)(v) : true;
    if (a.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: I,
        adDecisionData: {
          ad_id: null == (r = O.ad_identifiers) ? true : r.ad_id,
          adset_id: null == (c = O.ad_identifiers) ? true : c.adset_id,
          ad_set_id: null == (d = O.ad_identifiers) ? true : d.ad_set_id,
          campaign_id: null == (p = O.ad_identifiers) ? true : p.campaign_id,
          creative_id: null == (_ = O.ad_identifiers) ? true : _.creative_id,
          creative_type: null == (h = O.ad_identifiers) ? true : h.creative_type,
          decision_id: O.request_id,
          is_targeted: null != O.ad_identifiers
        },
        metadataRaw: O.metadata_raw,
        metadataSealed: O.metadata_sealed,
        trafficMetadataRaw: O.traffic_metadata_raw,
        trafficMetadataSealed: O.traffic_metadata_sealed,
        adContext: O.ad_context,
        responseTtlSeconds: O.response_ttl_seconds,
        placement: e,
        fetchedAt: b
      }), g.A.recordQuestRequestApiResponse("/quests/decision", {
        wasSuccessful: true,
        adRequestId: String(O.request_id),
        currentQuestId: null != (n = null == I ? true : I.id) ? n : null,
        currentFetchedAt: b
      }), null == I) return;
    e === y.yW.DESKTOP_ACCOUNT_PANEL_AREA && m.A.startTracking(I.id), f.default.track(S.HAw.QUEST_DECISION_RECEIVED, R(N({}, (0, u.A)()), {
      quest_id: I.id,
      caller_source: t,
      ad_request_id: String(O.request_id)
    }))
  } catch (n) {
    g.A.recordQuestRequestApiResponse("/quests/decision", {
      wasSuccessful: false
    }), f.default.track(S.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, R(N({}, (0, u.A)()), {
      reason: null != (E = null == n ? true : n.message) ? E : null,
      api_error: new s.A(n).getAnyErrorMessage(),
      caller_source: t
    })), a.h.dispatch({
      type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE",
      error: new s.A(n),
      placement: e
    })
  }
}

function $(e, t) {
  a.h.dispatch({
    type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
    quest: true,
    placement: e,
    fetchedAt: Date.now(),
    responseTtlSeconds: t / 1e3
  })
}
async function ee(e, t) {
  a.h.dispatch({
    type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN",
    content: t
  });
  try {
    let n = await (0, l.Ht)(),
      r = e.join(","),
      s = await i.Bo.get({
        url: S.Rsh.QUEST_EARNED_DECISION(r, t, null == n ? true : n.uuid),
        rejectWithError: false
      }),
      o = s.body.quests,
      c = new Map;
    if (null != o)
      for (let [e, t] of Object.entries(o))(0, A.s2)(t) && c.set(e, (0, A.rO)(t));
    let u = s.body.metadata_raw;
    return a.h.dispatch({
      type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
      quests: c,
      metadataRaw: u,
      content: t
    }), {
      quests: c,
      metadataRaw: u
    }
  } catch (e) {
    a.h.dispatch({
      type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE",
      error: new s.A(e),
      content: t
    })
  }
}
async function et(e, t) {
  var n;
  await _.A.post({
    url: S.Rsh.QUESTS_VIDEO_PROGRESS(e),
    body: {
      timestamp: t
    },
    trackedActionData: {
      event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
      properties: {
        quest_id: e,
        timestamp_sec: t.toString(),
        stack_trace: null != (n = Error().stack) ? n : ""
      }
    },
    rejectWithError: false
  })
}
async function en(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = (0, O.tW)(e, O.fY.VIDEO_PLAYER_TRANSCRIPT, true, t);
  if (null == n) return void b.Ay.getState().setTranscriptAsset({
    questId: e.id,
    fetchStatus: b.Lx.FAILURE
  });
  b.Ay.getState().setTranscriptAsset({
    questId: e.id,
    fetchStatus: b.Lx.FETCHING
  });
  try {
    let t = await i.Bo.get({
      url: n.url,
      rejectWithError: true
    });
    b.Ay.getState().setTranscriptAsset({
      questId: e.id,
      fetchStatus: b.Lx.SUCCESS,
      text: t.text,
      url: n.url
    })
  } catch (t) {
    b.Ay.getState().setTranscriptAsset({
      questId: e.id,
      fetchStatus: b.Lx.FAILURE
    })
  }
}
async function er(e) {
  let t = await i.Bo.get({
    url: S.Rsh.QUEST(e),
    rejectWithError: false
  });
  return (0, A.Yn)(t.body)
}
async function ei(e) {
  if (!E.A.isFetchingQuestPreview(e)) {
    a.h.dispatch({
      type: "QUESTS_FETCH_PREVIEW_BEGIN",
      questId: e
    });
    try {
      let t = await i.Bo.get({
        url: S.Rsh.QUEST_PREVIEW(e),
        rejectWithError: false
      });
      a.h.dispatch({
        type: "QUESTS_FETCH_PREVIEW_SUCCESS",
        questId: e,
        quest: (0, A.rO)(t.body)
      })
    } catch (t) {
      throw a.h.dispatch({
        type: "QUESTS_FETCH_PREVIEW_FAILURE",
        error: new s.A(t),
        questId: e
      }), t
    }
  }
}
let ea = 5 * Chunk927813.A.Millis.MINUTE;
async function es() {
  if (E.A.isFetchingQuestHomeTakeover()) return;
  let e = E.A.getLastFetchedQuestHomeTakeover();
  if (!(null != e && Date.now() - e <= ea)) {
    a.h.dispatch({
      type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN"
    });
    try {
      let e = [y.gh.QUEST_HOME_BANNER],
        t = await i.Bo.get({
          url: S.Rsh.QUEST_PLACEMENT,
          query: {
            placements: e,
            platform: y.vg.WEB
          },
          rejectWithError: false
        });
      a.h.dispatch({
        type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS",
        takeover: (0, A.Em)(t.body)
      })
    } catch (e) {
      throw a.h.dispatch({
        type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE",
        error: new s.A(e)
      }), e
    }
  }
}