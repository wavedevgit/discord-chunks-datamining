/** Chunk was on web.js **/
/** chunk id: 272008, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AH: () => U,
  Ag: () => z,
  CS: () => w,
  EW: () => W,
  MG: () => et,
  OR: () => K,
  QB: () => G,
  T0: () => Y,
  Wf: () => V,
  cT: () => J,
  eT: () => H,
  gU: () => ee,
  gl: () => Z,
  is: () => D,
  it: () => L,
  lL: () => $,
  lx: () => X,
  m0: () => M,
  nE: () => F,
  pf: () => B,
  qm: () => q,
  w: () => Q,
  wF: () => j,
  xw: () => x
}), require("./415506.js");
var Chunk990547 = require("./990547.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk479531 = require("./479531.js"),
  Chunk930446 = require("./930446.js"),
  Chunk912471 = require("./912471.js"),
  Chunk353250 = require("./353250.js"),
  Chunk186102 = require("./186102.js"),
  Chunk152521 = require("./152521.js"),
  Chunk626135 = require("./626135.js"),
  Chunk573261 = require("./573261.js"),
  Chunk617136 = require("./617136.js"),
  Chunk823289 = require("./823289.js"),
  Chunk705006 = require("./705006.js"),
  Chunk509212 = require("./509212.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk184299 = require("./184299.js"),
  Chunk720293 = require("./720293.js"),
  Chunk566078 = require("./566078.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
let P = 5;
async function w(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  try {
    let n = (await i.tn.post({
      url: S.ANM.QUEST_ON_CONSOLE_START(e),
      query: t ? {
        preview: t
      } : true,
      failImmediatelyWhenRateLimited: true,
      rejectWithError: false
    })).body;
    if (null != n.quest_user_status) a.Z.dispatch({
      type: "QUESTS_USER_STATUS_UPDATE",
      user_status: n.quest_user_status
    });
    else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return {
      errorHints: n.error_hints_v2.slice(0, P)
    }
  } catch (r) {
    var n;
    let e = new o.Z(r);
    if (429 === e.status) return {
      errorHints: [{
        type: b.HW.RATE_LIMITED,
        message: T.intl.string(T.t.Whhv4w),
        connected_account_id: "",
        connected_account_type: ""
      }]
    };
    let t = null != (n = e.getAnyErrorMessage()) ? n : T.intl.string(T.t.xSCvBf);
    return {
      errorHints: [{
        type: b.HW.GENERIC,
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
async function D(e) {
  await i.tn.post({
    url: S.ANM.QUEST_ON_CONSOLE_STOP(e),
    rejectWithError: false
  })
}
async function L() {
  await Chunk544891.tn.del({
    url: Chunk981631.ANM.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
    rejectWithError: false
  })
}
async function x() {
  if (!Chunk569984.Z.isFetchingCurrentQuests) {
    Chunk570140.Z.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
    }), Chunk705006.Z.recordQuestRequestAttempt(Chunk981631.ANM.QUESTS_CURRENT_QUESTS, "fetch_quests");
    try {
      let e = await Chunk544891.tn.get({
          url: Chunk981631.ANM.QUESTS_CURRENT_QUESTS,
          rejectWithError: false
        }),
        t = module.body.quests.filter(e => (0, g.Qe)(e)).map(e => (0, g.WP)(e)),
        n = module.body.quest_enrollment_blocked_until,
        r = exports.filter(e => {
          var t;
          return (null == (t = e.userStatus) ? true : t.claimedAt) != null || v.r.build(e.config).rewardPlatforms.length > 0
        }),
        o = module.body.excluded_quests;
      Chunk570140.Z.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
        quests: Chunk990547,
        excludedQuests: Chunk479531,
        questEnrollmentBlockedUntil: require
      }), Chunk705006.Z.recordQuestRequestApiResponse(Chunk981631.ANM.QUESTS_CURRENT_QUESTS, {
        wasSuccessful: true
      })
    } catch (e) {
      Chunk570140.Z.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
        error: new Chunk479531.Z(module)
      }), Chunk705006.Z.recordQuestRequestApiResponse(Chunk981631.ANM.QUESTS_CURRENT_QUESTS, {
        wasSuccessful: false
      })
    }
  }
}
async function M(e) {
  let {
    questId: t,
    streamKey: n,
    applicationId: i,
    terminal: s = false
  } = e;
  try {
    var l;
    let e = await _.Z.post({
      url: S.ANM.QUESTS_HEARTBEAT(t),
      body: {
        stream_key: n,
        application_id: i,
        terminal: s
      },
      trackedActionData: {
        event: r.NetworkActionNames.QUEST_HEARTBEAT,
        properties: {
          quest_id: t,
          terminal: s,
          is_overlay: __OVERLAY__,
          stack_trace: null != (l = Error().stack) ? l : "",
          is_playtime_eligible: true
        }
      },
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
      userStatus: (0, g.U3)(e.body),
      questId: t,
      streamKey: n
    })
  } catch (e) {
    a.Z.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_FAILURE",
      error: new o.Z(e),
      questId: t,
      streamKey: n
    })
  }
}

function k(e) {
  var t, n;
  return e instanceof c.CaptchaCancelError || null != e && "object" == typeof e && (400 === e.status && (null == (t = e.body) ? true : t.captcha_key) != null || null != e.captchaFields && !!(Object.keys(e.captchaFields).length > 0) || (null == (n = e.fields) ? true : n.captcha_key) != null || false)
}
var j = function(e) {
  return e.SUCCESS = "success", e.CAPTCHA_FAILED = "captcha_failed", e.UNKNOWN_ERROR = "unknown_error", e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request", e
}({});
async function U(e, t) {
  if (null != t.questContentCTA && (0, p._3)({
      questId: e,
      questContent: t.questContent,
      questContentCTA: t.questContentCTA,
      questContentPosition: t.questContentPosition,
      questContentRowIndex: t.questContentRowIndex,
      sourceQuestContent: t.sourceQuestContent
    }), e === I.V6 && (0, d.m)(), E.Z.isEnrolling(e)) return {
    type: "previous_in_flight_request"
  };
  a.Z.dispatch({
    type: "QUESTS_ENROLL_BEGIN",
    questId: e
  });
  try {
    let n = (0, g.jY)(t.questContent),
      r = await i.tn.post({
        url: S.ANM.QUESTS_ENROLL(e),
        body: R(C({
          location: t.questContent
        }, (0, g.qe)(e, t.questContent)), {
          metadata_raw: null != n ? n : null
        }),
        rejectWithError: true
      });
    return a.Z.dispatch({
      type: "QUESTS_ENROLL_SUCCESS",
      enrolledQuestUserStatus: (0, g.U3)(r.body)
    }), {
      type: "success"
    }
  } catch (t) {
    return a.Z.dispatch({
      type: "QUESTS_ENROLL_FAILURE",
      questId: e
    }), k(t) ? {
      type: "captcha_failed"
    } : {
      type: "unknown_error"
    }
  }
}
async function G(e, t, n) {
  if (!E.Z.isClaimingReward(e)) {
    a.Z.dispatch({
      type: "QUESTS_CLAIM_REWARD_BEGIN",
      questId: e
    });
    try {
      let r = (0, g.jY)(n),
        o = await i.tn.post({
          url: S.ANM.QUESTS_CLAIM_REWARD(e),
          body: R(C({
            platform: t,
            location: n
          }, (0, g.qe)(e, n)), {
            metadata_raw: null != r ? r : null
          }),
          rejectWithError: false
        }),
        s = (0, g.Xh)(o.body);
      return 0 === s.errors.length ? a.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_SUCCESS",
        questId: e,
        entitlements: s
      }) : a.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_FAILURE",
        error: s.errors,
        questId: e
      }), s
    } catch (t) {
      throw a.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_FAILURE",
        error: new o.Z(t),
        questId: e
      }), t
    }
  }
}
async function B(e) {
  if (!E.Z.isFetchingRewardCode(e)) {
    a.Z.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let t = await i.tn.get({
        url: S.ANM.QUESTS_REWARD_CODE(e),
        rejectWithError: false
      });
      a.Z.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, g.yI)(t.body)
      })
    } catch (t) {
      throw a.Z.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
        error: new o.Z(t),
        questId: e
      }), t
    }
  }
}
async function Z(e, t) {
  let n = E.Z.isDismissingContent(e),
    r = (0, g.GN)(t);
  if (!n && r) {
    a.Z.dispatch({
      type: "QUESTS_DISMISS_CONTENT_BEGIN",
      questId: e,
      content: t
    });
    try {
      let n = await i.tn.post({
        url: S.ANM.QUESTS_DISMISS_CONTENT(e, t),
        body: C({}, (0, g.qe)(e, t)),
        rejectWithError: false
      });
      a.Z.dispatch({
        type: "QUESTS_DISMISS_CONTENT_SUCCESS",
        dismissedQuestUserStatus: (0, g.U3)(n.body)
      })
    } catch (t) {
      a.Z.dispatch({
        type: "QUESTS_DISMISS_CONTENT_FAILURE",
        error: new o.Z(t),
        questId: e
      })
    }
  }
}

function F(e) {
  a.Z.dispatch({
    type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
    streamKey: e
  })
}
async function V(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1;
  try {
    let n = await i.tn.post({
      url: S.ANM.QUESTS_PREVIEW_COMPLETE(e),
      body: {
        percent: t
      },
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, g.U3)(n.body)
    })
  } catch (t) {
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}
async function H(e) {
  try {
    let t = await i.tn.del({
      url: S.ANM.QUESTS_PREVIEW_STATUS(e),
      body: {},
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, g.U3)(t.body)
    })
  } catch (t) {
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}
async function Y(e) {
  try {
    a.Z.dispatch({
      type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL"
    });
    let t = await i.tn.del({
      url: S.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
      body: {},
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, g.U3)(t.body)
    })
  } catch (t) {
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}

function W(e) {
  a.Z.dispatch({
    type: "QUESTS_DELIVERY_OVERRIDE",
    questId: e
  })
}

function K(e, t) {
  a.Z.dispatch({
    type: "QUESTS_SELECT_TASK_PLATFORM",
    questId: e,
    platform: t
  })
}
async function z() {
  if (!Chunk569984.Z.isFetchingClaimedQuests) {
    Chunk570140.Z.dispatch({
      type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN"
    });
    try {
      let e = (await Chunk544891.tn.get({
        url: Chunk981631.ANM.QUESTS_CLAIMED_QUESTS,
        rejectWithError: false
      })).body.quests.map(e => (0, g.hQ)(e));
      Chunk570140.Z.dispatch({
        type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS",
        quests: module
      })
    } catch (e) {
      Chunk570140.Z.dispatch({
        type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE",
        error: new Chunk479531.Z(module)
      })
    }
  }
}

function q(e, t, n) {
  a.Z.dispatch({
    type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS",
    questId: e,
    taskEventName: t,
    progress: n
  })
}

function X(e) {
  a.Z.dispatch({
    type: "QUESTS_RESET_OPTIMISTIC_PROGRESS",
    questId: e
  })
}
async function Q(e, t) {
  var n, r, c, d, _, p, E;
  a.Z.dispatch({
    type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN",
    placement: e
  }), m.Z.recordQuestRequestAttempt("/quests/decision", t);
  try {
    let o = await (0, l.Gg)(),
      E = await (0, s.Gy)(),
      y = (await i.tn.get({
        url: S.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == o ? true : o.uuid, E.uuid),
        rejectWithError: false
      })).body,
      O = y.quest,
      v = null != O ? (0, g.q6)(O) : true;
    if (a.Z.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: v,
        adDecisionData: {
          ad_id: null == (n = y.ad_identifiers) ? true : n.ad_id,
          adset_id: null == (r = y.ad_identifiers) ? true : r.adset_id,
          ad_set_id: null == (c = y.ad_identifiers) ? true : c.ad_set_id,
          campaign_id: null == (d = y.ad_identifiers) ? true : d.campaign_id,
          creative_id: null == (_ = y.ad_identifiers) ? true : _.creative_id,
          creative_type: null == (p = y.ad_identifiers) ? true : p.creative_type,
          decision_id: y.request_id,
          is_targeted: null != y.ad_identifiers
        },
        metadataRaw: y.metadata_raw,
        adContext: y.ad_context,
        responseTtlSeconds: y.response_ttl_seconds,
        placement: e
      }), m.Z.recordQuestRequestApiResponse("/quests/decision", {
        wasSuccessful: true,
        adRequestId: String(y.request_id)
      }), null == v) return;
    e === b.Ok.DESKTOP_ACCOUNT_PANEL_AREA && h.Z.startTracking(v.id), f.default.track(S.rMx.QUEST_DECISION_RECEIVED, R(C({}, (0, u.Z)()), {
      quest_id: v.id,
      caller_source: t,
      ad_request_id: String(y.request_id)
    }))
  } catch (n) {
    m.Z.recordQuestRequestApiResponse("/quests/decision", {
      wasSuccessful: false
    }), f.default.track(S.rMx.QUEST_DECISION_ROUNDTRIP_ERROR, R(C({}, (0, u.Z)()), {
      reason: null != (E = null == n ? true : n.message) ? E : null,
      api_error: new o.Z(n).getAnyErrorMessage(),
      caller_source: t
    })), a.Z.dispatch({
      type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE",
      error: new o.Z(n),
      placement: e
    })
  }
}
async function J(e, t) {
  var n;
  await _.Z.post({
    url: S.ANM.QUESTS_VIDEO_PROGRESS(e),
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
async function $(e, t) {
  let n = (0, O.z0)(e, t, O.n1.VIDEO, O.O.TRANSCRIPT);
  if (null == n) return void y.ZP.getState().setTranscriptAsset({
    questId: e.id,
    fetchStatus: y.iF.FAILURE
  });
  y.ZP.getState().setTranscriptAsset({
    questId: e.id,
    fetchStatus: y.iF.FETCHING
  });
  try {
    let t = await i.tn.get({
      url: n.url,
      rejectWithError: true
    });
    y.ZP.getState().setTranscriptAsset({
      questId: e.id,
      fetchStatus: y.iF.SUCCESS,
      text: t.text,
      url: n.url
    })
  } catch (t) {
    y.ZP.getState().setTranscriptAsset({
      questId: e.id,
      fetchStatus: y.iF.FAILURE
    })
  }
}
async function ee(e) {
  let t = await i.tn.get({
    url: S.ANM.QUEST(e),
    rejectWithError: false
  });
  return (0, g.q6)(t.body)
}
async function et(e) {
  if (!E.Z.isFetchingQuestPreview(e)) {
    a.Z.dispatch({
      type: "QUESTS_FETCH_PREVIEW_BEGIN",
      questId: e
    });
    try {
      let t = await i.tn.get({
        url: S.ANM.QUEST_PREVIEW(e),
        rejectWithError: false
      });
      a.Z.dispatch({
        type: "QUESTS_FETCH_PREVIEW_SUCCESS",
        questId: e,
        quest: (0, g.WP)(t.body)
      })
    } catch (t) {
      throw a.Z.dispatch({
        type: "QUESTS_FETCH_PREVIEW_FAILURE",
        error: new o.Z(t),
        questId: e
      }), t
    }
  }
}