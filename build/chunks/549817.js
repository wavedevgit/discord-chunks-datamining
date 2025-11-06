/** Chunk was on web.js **/
/** chunk id: 549817, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./472816.js"), require("./794429.js"), require("./415506.js"), require("./388685.js"), require("./997841.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk367907 = require("./367907.js"),
  Chunk781792 = require("./781792.js"),
  Chunk962086 = require("./962086.js"),
  Chunk160404 = require("./160404.js"),
  Chunk152376 = require("./152376.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js"),
  Chunk960048 = require("./960048.js"),
  Chunk709054 = require("./709054.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk816436 = require("./816436.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js"),
  Chunk490897 = require("./490897.js");

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

function w(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (d.Z.isFullServerPreview(e)) return;
  let n = t ? O.Z.getOnboardingPromptsForOnboarding(e) : O.Z.getOnboardingPrompts(e),
    r = O.Z.getOnboardingResponses(e),
    i = n.map(e => e.options.filter(e => r.includes(e.id))).flat(),
    s = {},
    l = {};
  return (n.forEach(e => {
    s[e.id] = Date.now(), e.options.forEach(e => l[e.id] = Date.now())
  }), t) ? a.tn.post({
    url: T.ANM.GUILD_ONBOARDING_RESPONSES(e),
    body: {
      onboarding_responses: i.map(e => e.id),
      onboarding_prompts_seen: s,
      onboarding_responses_seen: l
    },
    rejectWithError: true
  }).then(t => {
    null != t.body && o.Z.dispatch({
      type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
      guildId: e,
      options: t.body.onboarding_responses,
      prompts_seen: t.body.onboarding_prompts_seen,
      options_seen: t.body.onboarding_responses_seen
    })
  }).catch(e => b.Z.captureException(e)) : a.tn.put({
    url: T.ANM.GUILD_ONBOARDING_RESPONSES(e),
    body: {
      onboarding_responses: i.map(e => e.id),
      onboarding_prompts_seen: s,
      onboarding_responses_seen: l
    },
    rejectWithError: false
  }).then(t => {
    null != t.body && o.Z.dispatch({
      type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
      guildId: e,
      options: t.body.onboarding_responses,
      prompts_seen: t.body.onboarding_prompts_seen,
      options_seen: t.body.onboarding_responses_seen
    })
  }).catch(t => {
    b.Z.captureException(Error("Failed to update onboarding responses for guild ".concat(e, ": ").concat(t.statusCode), {
      cause: t
    }))
  })
}

function D(e, t, n) {
  var r, a;
  let s = null != (a = null == (r = p.ZP.getSelfMember(e)) ? true : r.roles) ? a : [];
  if (d.Z.isViewingRoles(e)) return void(0, u.og)(e, i().difference(i().union(s, t), n));
  (t.length > 0 || n.length > 0) && o.Z.dispatch({
    type: "GUILD_MEMBER_UPDATE_LOCAL",
    guildId: e,
    roles: i().difference(i().union(s, t), n),
    addedRoleIds: t,
    removedRoleIds: n
  })
}
let x = {
  selectOption(e, t, n, r) {
    let a = O.Z.getOnboardingPrompt(t);
    if (null == a) return;
    let s = a.singleSelect ? i().without(i().map(a.options, "id"), n) : [];
    o.Z.dispatch({
      type: "GUILD_ONBOARDING_SELECT_OPTION",
      guildId: e,
      promptId: t,
      optionId: n,
      selected: r,
      removedOptionIds: s
    })
  },
  updateOnboardingResponses: i().debounce(w, 1e3),
  updateRolesLocal: D,
  completeOnboarding(e, t) {
    let n = t.length > 0 ? t[t.length - 1] : null,
      r = O.Z.getSelectedOptions(e),
      i = (0, v.L6)(r),
      a = (0, v.dX)(r),
      o = O.Z.getEnabled(e) ? O.Z.getDefaultChannelIds(e) : [],
      [c, f] = (0, v.Ee)(e, t, o),
      b = [...a, ...o],
      C = b.map(e => _.Z.getChannel(e)).filter(E.lm),
      R = (0, I.v)(e, new Set(b), C, true).length,
      D = null == n ? [] : n.options.map(e => e.id),
      x = O.Z.getConnections(e),
      L = (0, v.OZ)(x),
      M = (0, v.N4)(x);
    if (m.default.track(T.rMx.GUILD_ONBOARDING_STEP_COMPLETED, P(N({}, (0, l.hH)(e)), {
        step: t.length - 1,
        options_selected: null == n ? 0 : r.filter(e => D.includes(e.id)).length,
        skipped: D.length > 0,
        back: false,
        in_onboarding: true,
        is_final_step: true,
        roles_granted: i.size,
        channels_granted: R,
        guild_onboarding_covered_channel_ids: c.map(e => e.id),
        guild_onboarding_uncovered_channel_ids: f.map(e => e.id),
        provider_connections_connected: L.connected,
        provider_connections_not_connected: L.notConnected,
        application_connections_connected: M.connected,
        application_connections_not_connected: M.notConnected
      })), (0, s.Ju)(e, A.W.GUILD_ONBOARDING_QUESTION, y.default.fromTimestamp(Date.now())), w(e, true), d.Z.isFullServerPreview(e)) {
      (0, u.zS)(e, b, []), (0, u.aq)(e, {
        optInEnabled: true
      }), (0, u.og)(e, Array.from(i));
      let t = h.default.getCurrentUser();
      if (null != t) {
        var j, k;
        let n = null != (k = null == (j = p.ZP.getMember(e, t.id)) ? true : j.flags) ? k : 0;
        (0, u.aq)(e, {
          memberOptions: {
            flags: (0, g.mB)(n, S.q.COMPLETED_ONBOARDING, true)
          }
        })
      }
    }
  },
  onboardExistingMember(e, t) {
    let n = new Set(t);
    (O.Z.getEnabled(e) ? O.Z.getDefaultChannelIds(e) : []).forEach(e => n.add(e)), n.size > 0 && (0, f.Mo)(e, Array.from(n), true, {
      page: T.ZY5.GUILD_ONBOARDING
    })
  },
  finishOnboarding(e) {
    o.Z.dispatch({
      type: "GUILD_ONBOARDING_COMPLETE",
      guildId: e
    })
  },
  setUserOnboardingStep(e, t) {
    o.Z.dispatch({
      type: "GUILD_ONBOARDING_SET_STEP",
      guildId: e,
      step: t
    })
  },
  async resetOnboarding(e) {
    let t = h.default.getCurrentUser();
    if (null != t) {
      var n, r;
      let i = null != (r = null == (n = p.ZP.getMember(e, t.id)) ? true : n.flags) ? r : 0;
      await (0, c.e)(e, {
        flags: (0, g.mB)(i, S.q.COMPLETED_ONBOARDING, false)
      })
    }
  }
}