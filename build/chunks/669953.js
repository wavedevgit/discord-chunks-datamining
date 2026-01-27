/** Chunk was on web.js **/
/** chunk id: 669953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./864466.js"), require("./443073.js"), require("./65821.js"), require("./896048.js"), require("./938796.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk665260 = require("./665260.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk334738 = require("./334738.js"),
  Chunk58149 = require("./58149.js"),
  Chunk445077 = require("./445077.js"),
  Chunk529942 = require("./529942.js"),
  Chunk164956 = require("./164956.js"),
  Chunk816662 = require("./816662.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk728458 = require("./728458.js"),
  Chunk661191 = require("./661191.js"),
  Chunk591552 = require("./591552.js"),
  Chunk961973 = require("./961973.js"),
  Chunk487626 = require("./487626.js"),
  Chunk652215 = require("./652215.js"),
  Chunk340837 = require("./340837.js"),
  Chunk790782 = require("./790782.js");

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

function P(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (f.A.isFullServerPreview(e)) return;
  let n = t ? O.A.getOnboardingPromptsForOnboarding(e) : O.A.getOnboardingPrompts(e),
    r = O.A.getOnboardingResponses(e),
    i = n.map(e => e.options.filter(e => r.includes(e.id))).flat(),
    a = {},
    l = {};
  return (n.forEach(e => {
    a[e.id] = Date.now(), e.options.forEach(e => l[e.id] = Date.now())
  }), t) ? o.Bo.post({
    url: I.Rsh.GUILD_ONBOARDING_RESPONSES(e),
    body: {
      onboarding_responses: i.map(e => e.id),
      onboarding_prompts_seen: a,
      onboarding_responses_seen: l
    },
    rejectWithError: true
  }).then(t => {
    null != t.body && s.h.dispatch({
      type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
      guildId: e,
      options: t.body.onboarding_responses,
      prompts_seen: t.body.onboarding_prompts_seen,
      options_seen: t.body.onboarding_responses_seen
    })
  }).catch(e => y.A.captureException(e)) : o.Bo.put({
    url: I.Rsh.GUILD_ONBOARDING_RESPONSES(e),
    body: {
      onboarding_responses: i.map(e => e.id),
      onboarding_prompts_seen: a,
      onboarding_responses_seen: l
    },
    rejectWithError: false
  }).then(t => {
    null != t.body && s.h.dispatch({
      type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
      guildId: e,
      options: t.body.onboarding_responses,
      prompts_seen: t.body.onboarding_prompts_seen,
      options_seen: t.body.onboarding_responses_seen
    })
  }).catch(t => {
    y.A.captureException(Error("Failed to update onboarding responses for guild ".concat(e, ": ").concat(t.statusCode), {
      cause: t
    }))
  })
}

function D(e, t, n) {
  var r, a;
  let o = null != (r = null == (a = h.Ay.getSelfMember(e)) ? true : a.roles) ? r : [];
  f.A.isViewingRoles(e) ? (0, d.ID)(e, i().difference(i().union(o, t), n)) : (t.length > 0 || n.length > 0) && s.h.dispatch({
    type: "GUILD_MEMBER_UPDATE_LOCAL",
    guildId: e,
    roles: i().difference(i().union(o, t), n),
    addedRoleIds: t,
    removedRoleIds: n
  })
}
let L = {
  selectOption(e, t, n, r) {
    let a = O.A.getOnboardingPrompt(t);
    if (null == a) return;
    let o = a.singleSelect ? i().without(i().map(a.options, "id"), n) : [];
    s.h.dispatch({
      type: "GUILD_ONBOARDING_SELECT_OPTION",
      guildId: e,
      promptId: t,
      optionId: n,
      selected: r,
      removedOptionIds: o
    })
  },
  updateOnboardingResponses: i().debounce(P, 1e3),
  updateRolesLocal: D,
  completeOnboarding(e, t) {
    let n = t.length > 0 ? t[t.length - 1] : null,
      r = O.A.getSelectedOptions(e),
      i = (0, v.a)(r),
      o = (0, v.vV)(r),
      s = O.A.getEnabled(e) ? O.A.getDefaultChannelIds(e) : [],
      [u, p] = (0, v._N)(e, t, s),
      y = [...o, ...s],
      C = y.map(e => _.A.getChannel(e)).filter(E.Vq),
      w = (0, A.w)(e, new Set(y), C, true).length,
      D = null == n ? [] : n.options.map(e => e.id),
      L = O.A.getConnections(e),
      x = (0, v.H_)(L),
      M = (0, v.OG)(L);
    if (g.default.track(I.HAw.GUILD_ONBOARDING_STEP_COMPLETED, R(N({}, (0, c.H$)(e)), {
        step: t.length - 1,
        options_selected: null == n ? 0 : r.filter(e => D.includes(e.id)).length,
        skipped: D.length > 0,
        back: false,
        in_onboarding: true,
        is_final_step: true,
        roles_granted: i.size,
        channels_granted: w,
        guild_onboarding_covered_channel_ids: u.map(e => e.id),
        guild_onboarding_uncovered_channel_ids: p.map(e => e.id),
        provider_connections_connected: x.connected,
        provider_connections_not_connected: x.notConnected,
        application_connections_connected: M.connected,
        application_connections_not_connected: M.notConnected
      })), (0, l.hK)(e, T.P.GUILD_ONBOARDING_QUESTION, b.default.fromTimestamp(Date.now())), P(e, true), f.A.isFullServerPreview(e)) {
      (0, d.$u)(e, y, []), (0, d.Z$)(e, {
        optInEnabled: true
      }), (0, d.ID)(e, Array.from(i));
      let t = m.default.getCurrentUser();
      if (null != t) {
        var j, k;
        let n = null != (j = null == (k = h.Ay.getMember(e, t.id)) ? true : k.flags) ? j : 0;
        (0, d.Z$)(e, {
          memberOptions: {
            flags: (0, a.lA)(n, S.D.COMPLETED_ONBOARDING, true)
          }
        })
      }
    }
  },
  onboardExistingMember(e, t) {
    let n = new Set(t);
    (O.A.getEnabled(e) ? O.A.getDefaultChannelIds(e) : []).forEach(e => n.add(e)), n.size > 0 && (0, p.Hb)(e, Array.from(n), true, {
      page: I.liQ.GUILD_ONBOARDING
    })
  },
  finishOnboarding(e) {
    s.h.dispatch({
      type: "GUILD_ONBOARDING_COMPLETE",
      guildId: e
    })
  },
  setUserOnboardingStep(e, t) {
    s.h.dispatch({
      type: "GUILD_ONBOARDING_SET_STEP",
      guildId: e,
      step: t
    })
  },
  async resetOnboarding(e) {
    let t = m.default.getCurrentUser();
    if (null != t) {
      var n, r;
      let i = null != (n = null == (r = h.Ay.getMember(e, t.id)) ? true : r.flags) ? n : 0;
      await (0, u.T)(e, {
        flags: (0, a.lA)(i, S.D.COMPLETED_ONBOARDING, false)
      })
    }
  }
}