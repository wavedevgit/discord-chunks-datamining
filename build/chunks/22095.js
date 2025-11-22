/** Chunk was on web.js **/
/** chunk id: 22095, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AH: () => G,
  Ag: () => q,
  CS: () => w,
  EW: () => K,
  Kh: () => ei,
  MG: () => en,
  OR: () => z,
  QB: () => B,
  T0: () => W,
  Wf: () => H,
  cT: () => $,
  eT: () => Y,
  gU: () => et,
  gl: () => F,
  is: () => L,
  it: () => x,
  lL: () => ee,
  lx: () => Q,
  m0: () => k,
  nE: () => V,
  pf: () => Z,
  qm: () => X,
  w: () => J,
  wF: () => U,
  xw: () => M
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
  Chunk70956 = require("./70956.js"),
  Chunk573261 = require("./573261.js"),
  Chunk617136 = require("./617136.js"),
  Chunk823289 = require("./823289.js"),
  Chunk705006 = require("./705006.js"),
  Chunk313481 = require("./313481.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk184299 = require("./184299.js"),
  Chunk720293 = require("./720293.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = 5;
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
      errorHints: n.error_hints_v2.slice(0, D)
    }
  } catch (r) {
    var n;
    let e = new o.Z(r);
    if (429 === e.status) return {
      errorHints: [{
        type: y.HW.RATE_LIMITED,
        message: A.intl.string(A.t.Whhv4w),
        connected_account_id: "",
        connected_account_type: ""
      }]
    };
    let t = null != (n = e.getAnyErrorMessage()) ? n : A.intl.string(A.t.xSCvBf);
    return {
      errorHints: [{
        type: y.HW.GENERIC,
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
async function L(e) {
  await i.tn.post({
    url: S.ANM.QUEST_ON_CONSOLE_STOP(e),
    rejectWithError: false
  })
}
async function x() {
  await Chunk544891.tn.del({
    url: Chunk981631.ANM.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
    rejectWithError: false
  })
}
async function M() {
  if (!Chunk616022.Z.isFetchingCurrentQuests) {
    Chunk570140.Z.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
    });
    try {
      let e = await Chunk544891.tn.get({
          url: Chunk981631.ANM.QUESTS_CURRENT_QUESTS,
          rejectWithError: false
        }),
        t = module.body.quests.filter(e => (0, O.Qe)(e)).map(e => (0, O.WP)(e)),
        n = module.body.quest_enrollment_blocked_until,
        r = exports.filter(e => {
          var t;
          return (null == (t = e.userStatus) ? true : t.claimedAt) != null || e.config.rewardsConfig.platforms.length > 0
        }),
        o = module.body.excluded_quests.map(e => (0, O.Qr)(e));
      Chunk570140.Z.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
        quests: Chunk990547,
        excludedQuests: Chunk479531,
        questEnrollmentBlockedUntil: require
      })
    } catch (e) {
      Chunk570140.Z.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
        error: new Chunk479531.Z(module)
      })
    }
  }
}
async function k(e) {
  let {
    questId: t,
    streamKey: n,
    applicationId: i,
    terminal: s = false
  } = e;
  try {
    var l;
    let e = await p.Z.post({
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
      userStatus: (0, O.U3)(e.body),
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

function j(e) {
  var t, n;
  return e instanceof c.CaptchaCancelError || null != e && "object" == typeof e && (400 === e.status && (null == (t = e.body) ? true : t.captcha_key) != null || null != e.captchaFields && !!(Object.keys(e.captchaFields).length > 0) || (null == (n = e.fields) ? true : n.captcha_key) != null || false)
}
var U = function(e) {
  return e.SUCCESS = "success", e.CAPTCHA_FAILED = "captcha_failed", e.UNKNOWN_ERROR = "unknown_error", e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request", e
}({});
async function G(e, t) {
  if (null != t.questContentCTA && (0, h._3)({
      questId: e,
      questContent: t.questContent,
      questContentCTA: t.questContentCTA,
      questContentPosition: t.questContentPosition,
      questContentRowIndex: t.questContentRowIndex,
      sourceQuestContent: t.sourceQuestContent
    }), e === T.V6 && (0, d.m4)(), e === E.wF && (0, d._r)(), b.Z.isEnrolling(e)) return {
    type: "previous_in_flight_request"
  };
  a.Z.dispatch({
    type: "QUESTS_ENROLL_BEGIN",
    questId: e
  });
  try {
    let n = (0, O.jY)(t.questContent),
      r = await i.tn.post({
        url: S.ANM.QUESTS_ENROLL(e),
        body: P(N({
          location: t.questContent
        }, (0, O.qe)(e, t.questContent)), {
          metadata_raw: null != n ? n : null
        }),
        rejectWithError: true
      });
    return a.Z.dispatch({
      type: "QUESTS_ENROLL_SUCCESS",
      enrolledQuestUserStatus: (0, O.U3)(r.body)
    }), {
      type: "success"
    }
  } catch (t) {
    return a.Z.dispatch({
      type: "QUESTS_ENROLL_FAILURE",
      questId: e
    }), j(t) ? {
      type: "captcha_failed"
    } : {
      type: "unknown_error"
    }
  }
}
async function B(e, t, n) {
  if (!b.Z.isClaimingReward(e)) {
    a.Z.dispatch({
      type: "QUESTS_CLAIM_REWARD_BEGIN",
      questId: e
    });
    try {
      let r = (0, O.jY)(n),
        o = await i.tn.post({
          url: S.ANM.QUESTS_CLAIM_REWARD(e),
          body: P(N({
            platform: t,
            location: n
          }, (0, O.qe)(e, n)), {
            metadata_raw: null != r ? r : null
          }),
          rejectWithError: false
        }),
        s = (0, O.Xh)(o.body);
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
async function Z(e) {
  if (!b.Z.isFetchingRewardCode(e)) {
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
        rewardCode: (0, O.yI)(t.body)
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
async function F(e, t) {
  let n = b.Z.isDismissingContent(e),
    r = (0, O.GN)(t);
  if (!n && r) {
    a.Z.dispatch({
      type: "QUESTS_DISMISS_CONTENT_BEGIN",
      questId: e,
      content: t
    });
    try {
      let n = await i.tn.post({
        url: S.ANM.QUESTS_DISMISS_CONTENT(e, t),
        body: N({}, (0, O.qe)(e, t)),
        rejectWithError: false
      });
      a.Z.dispatch({
        type: "QUESTS_DISMISS_CONTENT_SUCCESS",
        dismissedQuestUserStatus: (0, O.U3)(n.body)
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

function V(e) {
  a.Z.dispatch({
    type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
    streamKey: e
  })
}
async function H(e) {
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
      previewQuestUserStatus: (0, O.U3)(n.body)
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
    let t = await i.tn.del({
      url: S.ANM.QUESTS_PREVIEW_STATUS(e),
      body: {},
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, O.U3)(t.body)
    })
  } catch (t) {
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}
async function W(e) {
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
      previewQuestUserStatus: (0, O.U3)(t.body)
    })
  } catch (t) {
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}

function K(e) {
  a.Z.dispatch({
    type: "QUESTS_DELIVERY_OVERRIDE",
    questId: e
  })
}

function z(e, t) {
  a.Z.dispatch({
    type: "QUESTS_SELECT_TASK_PLATFORM",
    questId: e,
    platform: t
  })
}
async function q() {
  if (!Chunk616022.Z.isFetchingClaimedQuests) {
    Chunk570140.Z.dispatch({
      type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN"
    });
    try {
      let e = (await Chunk544891.tn.get({
        url: Chunk981631.ANM.QUESTS_CLAIMED_QUESTS,
        rejectWithError: false
      })).body.quests.map(e => (0, O.hQ)(e));
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

function X(e, t, n) {
  a.Z.dispatch({
    type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS",
    questId: e,
    taskEventName: t,
    progress: n
  })
}

function Q(e) {
  a.Z.dispatch({
    type: "QUESTS_RESET_OPTIMISTIC_PROGRESS",
    questId: e
  })
}
async function J(e, t) {
  var n, r, c, d, _, p, h, E;
  let b = Date.now();
  g.Z.recordQuestRequestAttempt("/quests/decision", t, e), a.Z.dispatch({
    type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN",
    placement: e
  });
  try {
    let o = await (0, l.Gg)(),
      E = await (0, s.Gy)(),
      v = (await i.tn.get({
        url: S.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == o ? true : o.uuid, E.uuid),
        rejectWithError: false
      })).body,
      I = v.quest,
      T = null != I ? (0, O.q6)(I) : true;
    if (a.Z.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: T,
        adDecisionData: {
          ad_id: null == (n = v.ad_identifiers) ? true : n.ad_id,
          adset_id: null == (r = v.ad_identifiers) ? true : r.adset_id,
          ad_set_id: null == (c = v.ad_identifiers) ? true : c.ad_set_id,
          campaign_id: null == (d = v.ad_identifiers) ? true : d.campaign_id,
          creative_id: null == (_ = v.ad_identifiers) ? true : _.creative_id,
          creative_type: null == (p = v.ad_identifiers) ? true : p.creative_type,
          decision_id: v.request_id,
          is_targeted: null != v.ad_identifiers
        },
        metadataRaw: v.metadata_raw,
        adContext: v.ad_context,
        responseTtlSeconds: v.response_ttl_seconds,
        placement: e,
        fetchedAt: b
      }), g.Z.recordQuestRequestApiResponse("/quests/decision", {
        wasSuccessful: true,
        adRequestId: String(v.request_id),
        currentQuestId: null != (h = null == T ? true : T.id) ? h : null,
        currentFetchedAt: b
      }), null == T) return;
    e === y.Ok.DESKTOP_ACCOUNT_PANEL_AREA && m.Z.startTracking(T.id), f.default.track(S.rMx.QUEST_DECISION_RECEIVED, P(N({}, (0, u.Z)()), {
      quest_id: T.id,
      caller_source: t,
      ad_request_id: String(v.request_id)
    }))
  } catch (n) {
    g.Z.recordQuestRequestApiResponse("/quests/decision", {
      wasSuccessful: false
    }), f.default.track(S.rMx.QUEST_DECISION_ROUNDTRIP_ERROR, P(N({}, (0, u.Z)()), {
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
async function $(e, t) {
  var n;
  await p.Z.post({
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
async function ee(e, t) {
  let n = (0, I.z0)(e, t, I.n1.VIDEO, I.O.TRANSCRIPT);
  if (null == n) return void v.ZP.getState().setTranscriptAsset({
    questId: e.id,
    fetchStatus: v.iF.FAILURE
  });
  v.ZP.getState().setTranscriptAsset({
    questId: e.id,
    fetchStatus: v.iF.FETCHING
  });
  try {
    let t = await i.tn.get({
      url: n.url,
      rejectWithError: true
    });
    v.ZP.getState().setTranscriptAsset({
      questId: e.id,
      fetchStatus: v.iF.SUCCESS,
      text: t.text,
      url: n.url
    })
  } catch (t) {
    v.ZP.getState().setTranscriptAsset({
      questId: e.id,
      fetchStatus: v.iF.FAILURE
    })
  }
}
async function et(e) {
  let t = await i.tn.get({
    url: S.ANM.QUEST(e),
    rejectWithError: false
  });
  return (0, O.q6)(t.body)
}
async function en(e) {
  if (!b.Z.isFetchingQuestPreview(e)) {
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
        quest: (0, O.WP)(t.body)
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
let er = 5 * Chunk70956.Z.Millis.MINUTE;
async function ei() {
  if (Chunk616022.Z.isFetchingQuestHomeTakeover()) return;
  let e = Chunk616022.Z.getLastFetchedQuestHomeTakeover();
  if (!(null != module && Date.now() - module <= er)) {
    Chunk570140.Z.dispatch({
      type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN"
    });
    try {
      let e = [Chunk49436.rO.QUEST_HOME_BANNER],
        t = await Chunk544891.tn.get({
          url: Chunk981631.ANM.QUEST_PLACEMENT,
          query: {
            placements: module,
            platform: Chunk49436.QN.WEB
          },
          rejectWithError: false
        });
      Chunk570140.Z.dispatch({
        type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS",
        takeover: (0, Chunk509212.t6)(exports.body)
      })
    } catch (e) {
      throw Chunk570140.Z.dispatch({
        type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE",
        error: new Chunk479531.Z(module)
      }), module
    }
  }
}