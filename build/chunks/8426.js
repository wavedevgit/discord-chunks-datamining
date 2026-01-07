/** Chunk was on 80187 **/
/** chunk id: 8426, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Hr: () => A,
  Hz: () => C,
  Lo: () => D,
  To: () => R,
  Wp: () => T,
  XG: () => g,
  _N: () => O,
  bj: () => P,
  el: () => G,
  gi: () => h,
  hS: () => p,
  lq: () => m,
  mM: () => U,
  oo: () => b,
  q6: () => w,
  r2: () => f,
  vR: () => d
}), require("./361932.js"), require("./187205.js"), require("./388685.js"), require("./457542.js");
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk563534 = require("./563534.js"),
  Chunk734893 = require("./734893.js"),
  Chunk626135 = require("./626135.js"),
  Chunk956664 = require("./956664.js"),
  Chunk960048 = require("./960048.js"),
  Chunk969632 = require("./969632.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE",
    welcomeMessage: e
  })
}

function d(e, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION",
    action: e,
    pendingData: n
  })
}

function T(e, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA",
    channelId: e,
    pendingData: n
  })
}

function D(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA",
    channelId: e
  })
}

function G(e, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION",
    channelId: e,
    action: n
  })
}

function A(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION",
    channelId: e
  })
}

function p(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION",
    actions: e
  })
}
async function h(e, n, t) {
  let r = {};
  null != t.emoji ? r.emoji = t.emoji : r.icon = t.icon;
  try {
    let t = await o.tn.patch({
        url: N.ANM.NEW_MEMBER_ACTION(e, n),
        body: r,
        oldFormErrors: true,
        rejectWithError: false
      }),
      l = (0, _.cq)(t.body);
    return i.Z.dispatch({
      type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS",
      guildId: e,
      action: l
    }), Promise.resolve(t.body)
  } catch (n) {
    var c;
    let e = l().flatMap(null != (c = n.body) ? c : {}, e => e);
    return a.Z.show({
      title: S.intl.string(S.t["6nCZyG"]),
      body: S.intl.format(S.t.dYCPD2, {
        errorMessage: e.join(", ")
      })
    }), E.Z.addBreadcrumb({
      message: "Error updating new member action icon"
    }), Promise.reject()
  }
}

function f(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL",
    resourceChannel: e
  })
}

function g(e, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL",
    channelId: e,
    resourceChannel: n
  })
}

function C(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL",
    resourceChannelId: e
  })
}

function m(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL",
    resourceChannels: e
  })
}
async function U(e, n, t) {
  try {
    let r = await o.tn.put({
        url: N.ANM.RESOURCE_CHANNEL(e, n),
        body: {
          icon: t
        },
        oldFormErrors: true,
        rejectWithError: false
      }),
      l = (0, _.vD)(r.body);
    return i.Z.dispatch({
      type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS",
      guildId: e,
      resourceChannel: l
    }), r.body
  } catch (n) {
    var r;
    let e = l().flatMap(null != (r = n.body) ? r : {}, e => e);
    a.Z.show({
      title: S.intl.string(S.t["6nCZyG"]),
      body: S.intl.format(S.t.dYCPD2, {
        errorMessage: e.join(", ")
      })
    })
  }
}

function b(e, n) {
  let t = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return t || I.Z.hasChanges() ? c.Z.getEnabled(e) && !(0, _.uo)(n) ? (a.Z.show({
    title: S.intl.string(S.t["6nCZyG"]),
    body: S.intl.string(S.t.JuhUTS)
  }), E.Z.addBreadcrumb({
    message: "Error saving home settings"
  }), Promise.reject()) : y(e, n) : Promise.resolve()
}

function R(e, n) {
  var t, r;
  let l = c.Z.getSettings(e);
  return n && !(0, _.uo)(l) ? void a.Z.show({
    title: S.intl.string(S.t["6nCZyG"]),
    body: S.intl.string(S.t.JuhUTS)
  }) : (i.Z.dispatch({
    type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED",
    guildId: e,
    enabled: n
  }), y(e, (t = function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({}, l), r = r = {
    enabled: n
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t)))
}
async function y(e, n) {
  var t, r, c, u, E, O, d, T, G;
  i.Z.dispatch({
    type: "GUILD_HOME_SETTINGS_UPDATE_START"
  });
  let A = I.Z.getPendingData();
  try {
    let l = await o.tn.put({
        url: N.ANM.GUILD_HOME_SETTINGS(e),
        body: (0, _.HH)(e, n),
        oldFormErrors: true,
        rejectWithError: false
      }),
      a = (0, _.tB)(l.body);
    return i.Z.dispatch({
      type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS",
      guildId: e,
      homeSettings: a
    }), Object.entries(A).forEach(n => {
      let [t, r] = n;
      null != r && (null != r.iconData ? M(e, t, r).finally(() => {
        D(t)
      }) : D(t))
    }), s.default.track(N.rMx.GUILD_SETTINGS_GUIDE_UPDATED, {
      guild_id: e,
      welcome_message_author_id: (null != (u = null == a || null == (t = a.welcomeMessage) ? true : t.authorIds) ? u : [])[0],
      welcome_message_length: null != (E = null == a || null == (c = a.welcomeMessage) || null == (r = c.message) ? true : r.length) ? E : 0,
      member_action_channel_ids: (null != (O = null == a ? true : a.newMemberActions) ? O : []).map(e => e.channelId),
      member_action_channel_actions: (null != (d = null == a ? true : a.newMemberActions) ? d : []).map(e => e.actionType),
      resource_channel_ids: (null != (T = null == a ? true : a.resourceChannels) ? T : []).map(e => e.channelId),
      enabled: null == a ? true : a.enabled
    }), l.body
  } catch (n) {
    let e = l().flatMap(null != (G = n.body) ? G : {}, e => e);
    D(), i.Z.dispatch({
      type: "GUILD_HOME_SETTINGS_UPDATE_FAIL"
    }), a.Z.show({
      title: S.intl.string(S.t["6nCZyG"]),
      body: S.intl.format(S.t.dYCPD2, {
        errorMessage: e.join(", ")
      })
    })
  }
}
async function M(e, n, t) {
  let {
    iconData: r,
    isUrl: l,
    emoji: o
  } = t;
  if (null != o) return;
  let i = null != r && l ? await L(r) : r;
  await h(e, n, {
    icon: i,
    emoji: null
  })
}
async function L(e) {
  let n = await fetch(e),
    t = await n.blob();
  return await (0, u.fD)(t)
}

function w(e, n) {
  null != e && i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
    guildId: e,
    channelIds: n
  })
}

function P() {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET"
  })
}