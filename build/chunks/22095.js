/** Chunk was on web.js **/
/** chunk id: 22095, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AH: () => G,
  Ag: () => q,
  CS: () => D,
  EW: () => K,
  Kh: () => ei,
  MG: () => en,
  OR: () => z,
  QB: () => Z,
  T0: () => W,
  Wf: () => H,
  cT: () => $,
  eT: () => Y,
  gU: () => et,
  gl: () => B,
  is: () => x,
  it: () => L,
  lL: () => ee,
  lx: () => X,
  m0: () => M,
  nE: () => V,
  pf: () => F,
  qm: () => Q,
  w: () => J,
  wF: () => U,
  xw: () => j
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
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk184299 = require("./184299.js"),
  Chunk475595 = require("./475595.js"),
  Chunk862657 = require("./862657.js"),
  Chunk552943 = require("./552943.js"),
  Chunk324805 = require("./324805.js"),
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

function N(e) {
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

function P(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = 5;
async function D(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  try {
    let n = (await i.tn.post({
      url: T.ANM.QUEST_ON_CONSOLE_START(e),
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
      errorHints: n.error_hints_v2.slice(0, w)
    }
  } catch (r) {
    var n;
    let e = new o.Z(r);
    if (429 === e.status) return {
      errorHints: [{
        type: b.HW.RATE_LIMITED,
        message: C.intl.string(C.t.Whhv4w),
        connected_account_id: "",
        connected_account_type: ""
      }]
    };
    let t = null != (n = e.getAnyErrorMessage()) ? n : C.intl.string(C.t.xSCvBf);
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
async function x(e) {
  await i.tn.post({
    url: T.ANM.QUEST_ON_CONSOLE_STOP(e),
    rejectWithError: false
  })
}
async function L() {
  await Chunk544891.tn.del({
    url: Chunk981631.ANM.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
    rejectWithError: false
  })
}
async function j() {
  if (!Chunk616022.Z.isFetchingCurrentQuests) {
    Chunk570140.Z.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
    });
    try {
      let e = await Chunk544891.tn.get({
          url: Chunk981631.ANM.QUESTS_CURRENT_QUESTS,
          rejectWithError: false
        }),
        t = module.body.quests.filter(e => (0, S.Qe)(e)).map(e => (0, S.WP)(e)),
        n = module.body.quest_enrollment_blocked_until,
        r = exports.filter(e => {
          var t;
          return (null == (t = e.userStatus) ? true : t.claimedAt) != null || e.config.rewardsConfig.platforms.length > 0
        }),
        o = module.body.excluded_quests.map(e => (0, S.Qr)(e));
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
      url: T.ANM.QUESTS_HEARTBEAT(t),
      body: {
        stream_key: n,
        application_id: i,
        terminal: s
      },
      trackedActionData: {
        event: r.NetworkActionNames.QUEST_HEARTBEAT,
        properties: {
          quest_id: t,
          application_id: i,
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
      userStatus: (0, S.U3)(e.body),
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
var U = function(e) {
  return e.SUCCESS = "success", e.CAPTCHA_FAILED = "captcha_failed", e.UNKNOWN_ERROR = "unknown_error", e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request", e
}({});
async function G(e, t) {
  if (null != t.questContentCTA && (0, m._3)({
      questId: e,
      questContent: t.questContent,
      questContentCTA: t.questContentCTA,
      questContentPosition: t.questContentPosition,
      questContentRowIndex: t.questContentRowIndex,
      sourceQuestContent: t.sourceQuestContent
    }), e === I.V6 && (0, d.m4)(), e === I.wF && (0, d._r)(), E.Z.isEnrolling(e)) return {
    type: "previous_in_flight_request"
  };
  a.Z.dispatch({
    type: "QUESTS_ENROLL_BEGIN",
    questId: e
  });
  try {
    let n = (0, v.jY)(t.questContent),
      r = (0, v.R_)(t.questContent),
      o = await i.tn.post({
        url: T.ANM.QUESTS_ENROLL(e),
        body: R(N({
          location: t.questContent
        }, (0, v.qe)(e, t.questContent)), {
          metadata_raw: null != n ? n : null,
          metadata_sealed: null != r ? r : null
        }),
        rejectWithError: true
      });
    return a.Z.dispatch({
      type: "QUESTS_ENROLL_SUCCESS",
      enrolledQuestUserStatus: (0, S.U3)(o.body)
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
async function Z(e, t, n) {
  if (!E.Z.isClaimingReward(e)) {
    a.Z.dispatch({
      type: "QUESTS_CLAIM_REWARD_BEGIN",
      questId: e
    });
    try {
      let r = (0, v.jY)(n),
        o = (0, v.R_)(n),
        s = await i.tn.post({
          url: T.ANM.QUESTS_CLAIM_REWARD(e),
          body: R(N({
            platform: t,
            location: n
          }, (0, v.qe)(e, n)), {
            metadata_raw: null != r ? r : null,
            metadata_sealed: null != o ? o : null
          }),
          rejectWithError: false
        }),
        l = (0, S.Xh)(s.body);
      return 0 === l.errors.length ? a.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_SUCCESS",
        questId: e,
        entitlements: l
      }) : a.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_FAILURE",
        error: l.errors,
        questId: e
      }), l
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
  if (!E.Z.isFetchingRewardCode(e)) {
    a.Z.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let t = await i.tn.get({
        url: T.ANM.QUESTS_REWARD_CODE(e),
        rejectWithError: false
      });
      a.Z.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, S.yI)(t.body)
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
async function B(e, t) {
  let n = E.Z.isDismissingContent(e),
    r = (0, v.GN)(t);
  if (!n && r) {
    a.Z.dispatch({
      type: "QUESTS_DISMISS_CONTENT_BEGIN",
      questId: e,
      content: t
    });
    try {
      let n = await i.tn.post({
        url: T.ANM.QUESTS_DISMISS_CONTENT(e, t),
        body: N({}, (0, v.qe)(e, t)),
        rejectWithError: false
      });
      a.Z.dispatch({
        type: "QUESTS_DISMISS_CONTENT_SUCCESS",
        dismissedQuestUserStatus: (0, S.U3)(n.body)
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
      url: T.ANM.QUESTS_PREVIEW_COMPLETE(e),
      body: {
        percent: t
      },
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, S.U3)(n.body)
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
      url: T.ANM.QUESTS_PREVIEW_STATUS(e),
      body: {},
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, S.U3)(t.body)
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
      url: T.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
      body: {},
      rejectWithError: false
    });
    a.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, S.U3)(t.body)
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
      })).body.quests.map(e => (0, S.hQ)(e));
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

function X(e) {
  a.Z.dispatch({
    type: "QUESTS_RESET_OPTIMISTIC_PROGRESS",
    questId: e
  })
}
async function J(e, t) {
  var n, r, c, d, p, _, m, E;
  let y = Date.now();
  g.Z.recordQuestRequestAttempt("/quests/decision", t, e), a.Z.dispatch({
    type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN",
    placement: e
  });
  try {
    let o = await (0, l.Gg)(),
      E = await (0, s.Gy)(),
      O = (await i.tn.get({
        url: T.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e, null == o ? true : o.uuid, E.uuid),
        rejectWithError: false
      })).body,
      v = O.quest,
      I = null != v ? (0, S.q6)(v) : true;
    if (a.Z.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: I,
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
        fetchedAt: y
      }), g.Z.recordQuestRequestApiResponse("/quests/decision", {
        wasSuccessful: true,
        adRequestId: String(O.request_id),
        currentQuestId: null != (m = null == I ? true : I.id) ? m : null,
        currentFetchedAt: y
      }), null == I) return;
    e === b.Ok.DESKTOP_ACCOUNT_PANEL_AREA && h.Z.startTracking(I.id), f.default.track(T.rMx.QUEST_DECISION_RECEIVED, R(N({}, (0, u.Z)()), {
      quest_id: I.id,
      caller_source: t,
      ad_request_id: String(O.request_id)
    }))
  } catch (n) {
    g.Z.recordQuestRequestApiResponse("/quests/decision", {
      wasSuccessful: false
    }), f.default.track(T.rMx.QUEST_DECISION_ROUNDTRIP_ERROR, R(N({}, (0, u.Z)()), {
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
  await _.Z.post({
    url: T.ANM.QUESTS_VIDEO_PROGRESS(e),
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
async function ee(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = (0, O.fh)(e, O.eC.VIDEO_PLAYER_TRANSCRIPT, true, t);
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
async function et(e) {
  let t = await i.tn.get({
    url: T.ANM.QUEST(e),
    rejectWithError: false
  });
  return (0, S.q6)(t.body)
}
async function en(e) {
  if (!E.Z.isFetchingQuestPreview(e)) {
    a.Z.dispatch({
      type: "QUESTS_FETCH_PREVIEW_BEGIN",
      questId: e
    });
    try {
      let t = await i.tn.get({
        url: T.ANM.QUEST_PREVIEW(e),
        rejectWithError: false
      });
      a.Z.dispatch({
        type: "QUESTS_FETCH_PREVIEW_SUCCESS",
        questId: e,
        quest: (0, S.WP)(t.body)
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