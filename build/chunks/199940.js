/** Chunk was on 39048 **/
/** chunk id: 199940, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A4: () => _,
  DE: () => v,
  E0: () => I,
  G$: () => b,
  J4: () => x,
  Rp: () => j,
  UP: () => C,
  W5: () => T,
  WA: () => S,
  Wh: () => y,
  XD: () => N,
  hL: () => h,
  kO: () => D,
  px: () => A,
  sd: () => O,
  sk: () => G,
  z4: () => E
}), require("./114821.js"), require("./339614.js"), require("./896048.js"), require("./492834.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk701785 = require("./701785.js"),
  Chunk374084 = require("./374084.js"),
  Chunk954571 = require("./954571.js"),
  Chunk515718 = require("./515718.js"),
  Chunk728458 = require("./728458.js"),
  Chunk132514 = require("./132514.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE",
    welcomeMessage: e
  })
}

function b(e, t) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION",
    action: e,
    pendingData: t
  })
}

function x(e, t) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA",
    channelId: e,
    pendingData: t
  })
}

function j(e) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA",
    channelId: e
  })
}

function _(e, t) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION",
    channelId: e,
    action: t
  })
}

function O(e) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION",
    channelId: e
  })
}

function v(e) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION",
    actions: e
  })
}
async function y(e, t, n) {
  let r = {};
  null != n.emoji ? r.emoji = n.emoji : r.icon = n.icon;
  try {
    let n = await l.Bo.patch({
        url: p.Rsh.NEW_MEMBER_ACTION(e, t),
        body: r,
        oldFormErrors: true,
        rejectWithError: false
      }),
      i = (0, c.kk)(n.body);
    return s.h.dispatch({
      type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS",
      guildId: e,
      action: i
    }), Promise.resolve(n.body)
  } catch (t) {
    var o;
    let e = i().flatMap(null != (o = t.body) ? o : {}, e => e);
    return a.A.show({
      title: f.intl.string(f.t["6nCZyG"]),
      body: f.intl.format(f.t.dYCPD2, {
        errorMessage: e.join(", ")
      })
    }), g.A.addBreadcrumb({
      message: "Error updating new member action icon"
    }), Promise.reject()
  }
}

function A(e) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL",
    resourceChannel: e
  })
}

function E(e, t) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL",
    channelId: e,
    resourceChannel: t
  })
}

function N(e) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL",
    resourceChannelId: e
  })
}

function S(e) {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL",
    resourceChannels: e
  })
}
async function I(e, t, n) {
  try {
    let r = await l.Bo.put({
        url: p.Rsh.RESOURCE_CHANNEL(e, t),
        body: {
          icon: n
        },
        oldFormErrors: true,
        rejectWithError: false
      }),
      i = (0, c.RR)(r.body);
    return s.h.dispatch({
      type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS",
      guildId: e,
      resourceChannel: i
    }), r.body
  } catch (t) {
    var r;
    let e = i().flatMap(null != (r = t.body) ? r : {}, e => e);
    a.A.show({
      title: f.intl.string(f.t["6nCZyG"]),
      body: f.intl.format(f.t.dYCPD2, {
        errorMessage: e.join(", ")
      })
    })
  }
}

function T(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return n || m.A.hasChanges() ? o.h.getEnabled(e) && !(0, c.Ic)(t) ? (a.A.show({
    title: f.intl.string(f.t["6nCZyG"]),
    body: f.intl.string(f.t.JuhUTS)
  }), g.A.addBreadcrumb({
    message: "Error saving home settings"
  }), Promise.reject()) : P(e, t) : Promise.resolve()
}

function C(e, t) {
  var n, r;
  let i = o.h.getSettings(e);
  return t && !(0, c.Ic)(i) ? void a.A.show({
    title: f.intl.string(f.t["6nCZyG"]),
    body: f.intl.string(f.t.JuhUTS)
  }) : (s.h.dispatch({
    type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED",
    guildId: e,
    enabled: t
  }), P(e, (n = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, i), r = r = {
    enabled: t
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
  }), n)))
}
async function P(e, t) {
  var n, r, o, u, g, h, b, x, _;
  s.h.dispatch({
    type: "GUILD_HOME_SETTINGS_UPDATE_START"
  });
  let O = m.A.getPendingData();
  try {
    let i = await l.Bo.put({
        url: p.Rsh.GUILD_HOME_SETTINGS(e),
        body: (0, c.Y4)(e, t),
        oldFormErrors: true,
        rejectWithError: false
      }),
      a = (0, c.Xu)(i.body);
    return s.h.dispatch({
      type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS",
      guildId: e,
      homeSettings: a
    }), Object.entries(O).forEach(t => {
      let [n, r] = t;
      null == r || (null != r.iconData ? w(e, n, r).finally(() => {
        j(n)
      }) : j(n))
    }), d.default.track(p.HAw.GUILD_SETTINGS_GUIDE_UPDATED, {
      guild_id: e,
      welcome_message_author_id: (null != (n = null == a || null == (h = a.welcomeMessage) ? true : h.authorIds) ? n : [])[0],
      welcome_message_length: null != (r = null == a || null == (x = a.welcomeMessage) || null == (b = x.message) ? true : b.length) ? r : 0,
      member_action_channel_ids: (null != (o = null == a ? true : a.newMemberActions) ? o : []).map(e => e.channelId),
      member_action_channel_actions: (null != (u = null == a ? true : a.newMemberActions) ? u : []).map(e => e.actionType),
      resource_channel_ids: (null != (g = null == a ? true : a.resourceChannels) ? g : []).map(e => e.channelId),
      enabled: null == a ? true : a.enabled
    }), i.body
  } catch (t) {
    let e = i().flatMap(null != (_ = t.body) ? _ : {}, e => e);
    j(), s.h.dispatch({
      type: "GUILD_HOME_SETTINGS_UPDATE_FAIL"
    }), a.A.show({
      title: f.intl.string(f.t["6nCZyG"]),
      body: f.intl.format(f.t.dYCPD2, {
        errorMessage: e.join(", ")
      })
    })
  }
}
async function w(e, t, n) {
  let {
    iconData: r,
    isUrl: i,
    emoji: l
  } = n;
  if (null != l) return;
  let s = null != r && i ? await R(r) : r;
  await y(e, t, {
    icon: s,
    emoji: null
  })
}
async function R(e) {
  let t = await fetch(e),
    n = await t.blob();
  return await (0, u.We)(n)
}

function D(e, t) {
  null != e && s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
    guildId: e,
    channelIds: t
  })
}

function G() {
  s.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET"
  })
}