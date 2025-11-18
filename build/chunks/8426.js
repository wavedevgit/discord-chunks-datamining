/** Chunk was on 32923 **/
/** chunk id: 8426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Hr: () => x,
  Hz: () => C,
  To: () => I,
  XG: () => O,
  _N: () => f,
  ad: () => _,
  bj: () => P,
  el: () => b,
  hS: () => j,
  lq: () => y,
  mM: () => N,
  oo: () => E,
  q6: () => T,
  r2: () => v,
  vR: () => h
}), require("./361932.js"), require("./187205.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk563534 = require("./563534.js"),
  Chunk734893 = require("./734893.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk969632 = require("./969632.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE",
    welcomeMessage: e
  })
}

function h(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION",
    action: e
  })
}

function b(e, t) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION",
    channelId: e,
    action: t
  })
}

function x(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION",
    channelId: e
  })
}

function j(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION",
    actions: e
  })
}
async function _(e, t, n, r) {
  if (!r) return Promise.resolve();
  try {
    let r = await l.tn.patch({
        url: m.ANM.NEW_MEMBER_ACTION(e, t),
        body: {
          icon: n
        },
        oldFormErrors: true,
        rejectWithError: false
      }),
      i = (0, c.cq)(r.body);
    return a.Z.dispatch({
      type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS",
      guildId: e,
      action: i
    }), Promise.resolve(r.body)
  } catch (t) {
    var o;
    let e = i().flatMap(null != (o = t.body) ? o : {}, e => e);
    return s.Z.show({
      title: p.intl.string(p.t["6nCZyG"]),
      body: p.intl.format(p.t.dYCPD2, {
        errorMessage: e.join(", ")
      })
    }), u.Z.addBreadcrumb({
      message: "Error updating new member action icon"
    }), Promise.reject()
  }
}

function v(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL",
    resourceChannel: e
  })
}

function O(e, t) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL",
    channelId: e,
    resourceChannel: t
  })
}

function C(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL",
    resourceChannelId: e
  })
}

function y(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL",
    resourceChannels: e
  })
}
async function N(e, t, n) {
  try {
    let r = await l.tn.put({
        url: m.ANM.RESOURCE_CHANNEL(e, t),
        body: {
          icon: n
        },
        oldFormErrors: true,
        rejectWithError: false
      }),
      i = (0, c.vD)(r.body);
    return a.Z.dispatch({
      type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS",
      guildId: e,
      resourceChannel: i
    }), r.body
  } catch (t) {
    var r;
    let e = i().flatMap(null != (r = t.body) ? r : {}, e => e);
    s.Z.show({
      title: p.intl.string(p.t["6nCZyG"]),
      body: p.intl.format(p.t.dYCPD2, {
        errorMessage: e.join(", ")
      })
    })
  }
}

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return n || g.Z.hasChanges() ? o.Z.getEnabled(e) && !(0, c.uo)(t) ? (s.Z.show({
    title: p.intl.string(p.t["6nCZyG"]),
    body: p.intl.string(p.t.JuhUTS)
  }), u.Z.addBreadcrumb({
    message: "Error saving home settings"
  }), Promise.reject()) : S(e, t) : Promise.resolve()
}

function I(e, t) {
  var n, r;
  let i = o.Z.getSettings(e);
  return t && !(0, c.uo)(i) ? void s.Z.show({
    title: p.intl.string(p.t["6nCZyG"]),
    body: p.intl.string(p.t.JuhUTS)
  }) : (a.Z.dispatch({
    type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED",
    guildId: e,
    enabled: t
  }), S(e, (n = function(e) {
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
async function S(e, t) {
  var n, r, o, u, g, f, h, b, x;
  a.Z.dispatch({
    type: "GUILD_HOME_SETTINGS_UPDATE_START"
  });
  try {
    let i = await l.tn.put({
        url: m.ANM.GUILD_HOME_SETTINGS(e),
        body: (0, c.HH)(e, t),
        oldFormErrors: true,
        rejectWithError: false
      }),
      s = (0, c.tB)(i.body);
    return a.Z.dispatch({
      type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS",
      guildId: e,
      homeSettings: s
    }), d.default.track(m.rMx.GUILD_SETTINGS_GUIDE_UPDATED, {
      guild_id: e,
      welcome_message_author_id: (null != (u = null == s || null == (n = s.welcomeMessage) ? true : n.authorIds) ? u : [])[0],
      welcome_message_length: null != (g = null == s || null == (o = s.welcomeMessage) || null == (r = o.message) ? true : r.length) ? g : 0,
      member_action_channel_ids: (null != (f = null == s ? true : s.newMemberActions) ? f : []).map(e => e.channelId),
      member_action_channel_actions: (null != (h = null == s ? true : s.newMemberActions) ? h : []).map(e => e.actionType),
      resource_channel_ids: (null != (b = null == s ? true : s.resourceChannels) ? b : []).map(e => e.channelId),
      enabled: null == s ? true : s.enabled
    }), i.body
  } catch (t) {
    let e = i().flatMap(null != (x = t.body) ? x : {}, e => e);
    a.Z.dispatch({
      type: "GUILD_HOME_SETTINGS_UPDATE_FAIL"
    }), s.Z.show({
      title: p.intl.string(p.t["6nCZyG"]),
      body: p.intl.format(p.t.dYCPD2, {
        errorMessage: e.join(", ")
      })
    })
  }
}

function T(e, t) {
  null != e && a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
    guildId: e,
    channelIds: t
  })
}

function P() {
  Chunk570140.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET"
  })
}