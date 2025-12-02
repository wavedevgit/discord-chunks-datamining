/** Chunk was on web.js **/
/** chunk id: 22095, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AH: () => Z,
  Ag: () => X,
  CS: () => x,
  EW: () => z,
  Kh: () => ea,
  MG: () => er,
  OR: () => q,
  QB: () => B,
  T0: () => K,
  Wf: () => Y,
  cT: () => ee,
  eT: () => W,
  gU: () => en,
  gl: () => V,
  is: () => L,
  it: () => j,
  lL: () => et,
  lx: () => J,
  m0: () => k,
  nE: () => H,
  pf: () => F,
  qm: () => Q,
  w: () => $,
  wF: () => G,
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
  Chunk475595 = require("./475595.js"),
  Chunk552943 = require("./552943.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
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

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = 5;
async function x(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  try {
    let n = (await i.tn.post({
      url: A.ANM.QUEST_ON_CONSOLE_START(e),
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
        message: C.intl.string(C.t.Whhv4w),
        connected_account_id: "",
        connected_account_type: ""
      }]
    };
    let t = null != (n = e.getAnyErrorMessage()) ? n : C.intl.string(C.t.xSCvBf);
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
    url: A.ANM.QUEST_ON_CONSOLE_STOP(e),
    rejectWithError: false
  })
}
async function j() {
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
        t = module.body.quests.filter(e => (0, I.Qe)(e)).map(e => (0, I.WP)(e)),
        n = module.body.quest_enrollment_blocked_until,
        r = exports.filter(e => {
          var t;
          return (null == (t = e.userStatus) ? true : t.claimedAt) != null || e.config.rewardsConfig.platforms.length > 0
        }),
        o = module.body.excluded_quests.map(e => (0, I.Qr)(e));
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
    let e = await _.Z.post({
      url: A.ANM.QUESTS_HEARTBEAT(t),
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
      userStatus: (0, I.U3)(e.body),
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

function U(e) {
  var t, n;
  return e instanceof c.CaptchaCancelError || null != e && "object" == typeof e && (400 === e.status && (null == (t = e.body) ? true : t.captcha_key) != null || null != e.captchaFields && !!(Object.keys(e.captchaFields).length > 0) || (null == (n = e.fields) ? true : n.captcha_key) != null || false)
}
var G = function(e) {
  return e.SUCCESS = "success", e.CAPTCHA_FAILED = "captcha_failed", e.UNKNOWN_ERROR = "unknown_error", e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request", e
}({});
async function Z(e, t) {
  if (null != t.questContentCTA && (0, m._3)({
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
        url: A.ANM.QUESTS_ENROLL(e),
        body: w(P({
          location: t.questContent
        }, (0, O.qe)(e, t.questContent)), {
          metadata_raw: null != n ? n : null
        }),
        rejectWithError: true
      });
    return a.Z.dispatch({
      type: "QUESTS_ENROLL_SUCCESS",
      enrolledQuestUserStatus: (0, I.U3)(r.body)
    }), {
      type: "success"
    }
  } catch (t) {
    return a.Z.dispatch({
      type: "QUESTS_ENROLL_FAILURE",
      questId: e
    }), U(t) ? {
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
          url: A.ANM.QUESTS_CLAIM_REWARD(e),
          body: w(P({
            platform: t,
            location: n
          }, (0, O.qe)(e, n)), {
            metadata_raw: null != r ? r : null
          }),
          rejectWithError: false
        }),
        s = (0, I.Xh)(o.body);
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
async function F(e) {
  if (!b.Z.isFetchingRewardCode(e)) {
    a.Z.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let t = await i.tn.get({
        url: A.ANM.QUESTS_REWARD_CODE(e),
        rejectWithError: false
      });
      a.Z.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, I.yI)(t.body)
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
async function V(e, t) {
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
        url: A.ANM.QUESTS_DISMISS_CONTENT(e, t),
        body: P({}, (0, O.qe)(e, t)),
        rejectWithError: false
      });
      a.Z.dispatch({
        type: "QUESTS_DISMISS_CONTENT_SUCCESS",
        dismissedQuestUserStatus: (0, I.U3)(n.body)
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

function H(e) {
  a.Z.dispatch({
    type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
    streamKey: e
  })
}
async function Y(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1;
  try {
    let n = await i.tn.post({
      url: A.ANM.QUESTS_PREVIEW_COMPLETE(e),
      body: {
        percent: t
      },
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, I.U3)(n.body)
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
    let t = await i.tn.del({
      url: A.ANM.QUESTS_PREVIEW_STATUS(e),
      body: {},
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, I.U3)(t.body)
    })
  } catch (t) {
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}
async function K(e) {
  try {
    a.Z.dispatch({
      type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL"
    });
    let t = await i.tn.del({
      url: A.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
      body: {},
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, I.U3)(t.body)
    })
  } catch (t) {
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}

function z(e) {
  a.Z.dispatch({
    type: "QUESTS_DELIVERY_OVERRIDE",
    questId: e
  })
}

function q(e, t) {
  a.Z.dispatch({
    type: "QUESTS_SELECT_TASK_PLATFORM",
    questId: e,
    platform: t
  })
}
async function X() {
  if (!Chunk616022.Z.isFetchingClaimedQuests) {
    Chunk570140.Z.dispatch({
      type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN"
    });
    try {
      let e = (await Chunk544891.tn.get({
        url: Chunk981631.ANM.QUESTS_CLAIMED_QUESTS,
        rejectWithError: false
      })).body.quests.map(e => (0, I.hQ)(e));
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

function Q(e, t, n) {
  a.Z.dispatch({
    type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS",
    questId: e,
    taskEventName: t,
    progress: n
  })
}

function J(e) {
  a.Z.dispatch({
    type: "QUESTS_RESET_OPTIMISTIC_PROGRESS",
    questId: e
  })
}
async function $(e, t) {
  var n, r, c, d, p, _, m, E;
  let b = Date.now();
  g.Z.recordQuestRequestAttempt("/quests/decision", t, e), a.Z.dispatch({
    type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN",
    placement: e
  });
  try {
    let o = await (0, l.Gg)(),
      E = await (0, s.Gy)(),
      O = (await i.tn.get({
        url: A.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == o ? true : o.uuid, E.uuid),
        rejectWithError: false
      })).body,
      v = O.quest,
      S = null != v ? (0, I.q6)(v) : true;
    if (a.Z.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: S,
        adDecisionData: {
          ad_id: null == (n = O.ad_identifiers) ? true : n.ad_id,
          adset_id: null == (r = O.ad_identifiers) ? true : r.adset_id,
          ad_set_id: null == (c = O.ad_identifiers) ? true : c.ad_set_id,
          campaign_id: null == (d = O.ad_identifiers) ? true : d.campaign_id,
          creative_id: null == (p = O.ad_identifiers) ? true : p.creative_id,
          creative_type: null == (_ = O.ad_identifiers) ? true : _.creative_type,
          decision_id: O.request_id,
          is_targeted: null != O.ad_identifiers
        },
        metadataRaw: O.metadata_raw,
        metadataSealed: O.metadata_sealed,
        adContext: O.ad_context,
        responseTtlSeconds: O.response_ttl_seconds,
        placement: e,
        fetchedAt: b
      }), g.Z.recordQuestRequestApiResponse("/quests/decision", {
        wasSuccessful: true,
        adRequestId: String(O.request_id),
        currentQuestId: null != (m = null == S ? true : S.id) ? m : null,
        currentFetchedAt: b
      }), null == S) return;
    e === y.Ok.DESKTOP_ACCOUNT_PANEL_AREA && h.Z.startTracking(S.id), f.default.track(A.rMx.QUEST_DECISION_RECEIVED, w(P({}, (0, u.Z)()), {
      quest_id: S.id,
      caller_source: t,
      ad_request_id: String(O.request_id)
    }))
  } catch (n) {
    g.Z.recordQuestRequestApiResponse("/quests/decision", {
      wasSuccessful: false
    }), f.default.track(A.rMx.QUEST_DECISION_ROUNDTRIP_ERROR, w(P({}, (0, u.Z)()), {
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
async function ee(e, t) {
  var n;
  await _.Z.post({
    url: A.ANM.QUESTS_VIDEO_PROGRESS(e),
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
async function et(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = (0, S.fh)(e, S.eC.VIDEO_PLAYER_TRANSCRIPT, true, t);
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
async function en(e) {
  let t = await i.tn.get({
    url: A.ANM.QUEST(e),
    rejectWithError: false
  });
  return (0, I.q6)(t.body)
}
async function er(e) {
  if (!b.Z.isFetchingQuestPreview(e)) {
    a.Z.dispatch({
      type: "QUESTS_FETCH_PREVIEW_BEGIN",
      questId: e
    });
    try {
      let t = await i.tn.get({
        url: A.ANM.QUEST_PREVIEW(e),
        rejectWithError: false
      });
      a.Z.dispatch({
        type: "QUESTS_FETCH_PREVIEW_SUCCESS",
        questId: e,
        quest: (0, I.WP)(t.body)
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
let ei = 5 * Chunk70956.Z.Millis.MINUTE;
async function ea() {
  if (Chunk616022.Z.isFetchingQuestHomeTakeover()) return;
  let e = Chunk616022.Z.getLastFetchedQuestHomeTakeover();
  if (!(null != module && Date.now() - module <= ei)) {
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
        takeover: (0, Chunk552943.t6)(exports.body)
      })
    } catch (e) {
      throw Chunk570140.Z.dispatch({
        type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE",
        error: new Chunk479531.Z(module)
      }), module
    }
  }
}