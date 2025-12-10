/** Chunk was on web.js **/
/** chunk id: 145260, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  default: () => X
}), require("./539854.js"), require("./388685.js");
var a, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk308063 = require("./308063.js"),
  Chunk496675 = require("./496675.js"),
  Chunk855674 = require("./855674.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}
let g = [],
  E = [],
  b = null,
  y = null,
  O = null,
  v = false,
  S = false,
  I = Chunk981631.QZA.CLOSED,
  T = {},
  C = false,
  A = null;

function N(e) {
  let {
    section: t
  } = e;
  if (t !== _.pNK.INTEGRATIONS) returnfalse;
  if (null == r) {
    let e = p.Z.getGuildId();
    null != e && (u.Z.fetchForGuild(e), v = true), R(false)
  }
}

function P(e) {
  let {
    section: t,
    sectionId: n
  } = e;
  i = t, A = n
}

function R(e) {
  if (null != (r = p.Z.getProps().guild) && d.Z.can(_.Plq.MANAGE_GUILD, r)) {
    let e = p.Z.getProps().integrations;
    null == e && (S = true), g = null != e ? e : []
  } else g = [];
  if (E = null != r && d.Z.can(_.Plq.MANAGE_WEBHOOKS, r) ? f.Z.getWebhooksForGuild(r.id) : [], !e && null != y) {
    let e = K(y.id);
    null != e && (y = e)
  }
  if (null != O) {
    let e = z(O.id);
    null != e && (O = e)
  }
  b = null, I = _.QZA.OPEN, T = {}, C = false
}

function D() {
  r = null, g = [], E = [], b = null, y = null, O = null, I = Chunk981631.QZA.CLOSED, C = false
}
let w = s().debounce(() => {
  C && (null != y ? s().isEqual(y, K(y.id)) && (C = false) : null != O && s().isEqual(O, z(O.id)) && (C = false), C || Q.emitChange())
}, 500);

function x(e) {
  let {
    settings: t
  } = e;
  if (null == y) returnfalse;
  y = h({}, y), null != t.enableEmoticons && y.enable_emoticons !== t.enableEmoticons && (y.enable_emoticons = t.enableEmoticons, C = true), null != t.expireBehavior && y.expire_behavior !== t.expireBehavior && (y.expire_behavior = t.expireBehavior, C = true), null != t.expireGracePeriod && y.expire_grace_period !== t.expireGracePeriod && (y.expire_grace_period = t.expireGracePeriod, C = true), C && w()
}

function L(e) {
  let {
    settings: t
  } = e;
  if (null == O) returnfalse;
  O = h({}, O), null != t.name && O.name !== t.name && (O.name = t.name, C = true), true !== t.avatar && O.avatar !== t.avatar && (O.avatar = t.avatar, C = true), null != t.channelId && O.channel_id !== t.channelId && (O.channel_id = t.channelId, C = true), C && w()
}

function j() {
  I = Chunk981631.QZA.SUBMITTING, T = {}
}

function M(e) {
  var t;
  if (I !== _.QZA.SUBMITTING) returnfalse;
  I = _.QZA.OPEN, T = null != (t = e.errors) ? t : {}
}

function k(e) {
  let {
    guildId: t,
    integrations: n
  } = e;
  if (null == r || t !== r.id || I === _.QZA.SUBMITTING) returnfalse;
  for (let e of (S = false, n))
    if (null == g.find(t => {
        let {
          id: n
        } = t;
        if (n === e.id) returntrue
      })) {
      var i, a;
      g.push(e), e.type === (null == y ? true : y.type) && (null == (i = e.account) ? true : i.id) === (null == (a = y.account) ? true : a.id) && (y = e)
    } for (let e = g.length - 1; e >= 0; e--) {
    let t = g[e],
      r = n.find(e => {
        let {
          id: n
        } = e;
        if (n === t.id) returntrue
      });
    if (null != r) {
      let n = h({}, t, r);
      (null == y ? true : y.id) === n.id && (false === n.enabled ? y = null : C || (y = n)), g[e] = n
    } else(null == y ? true : y.id) === t.id && (y = null), g.splice(e, 1)
  }
  g = [...g], w()
}

function U(e) {
  let {
    guildId: t,
    channelId: n,
    webhooks: i
  } = e;
  if (v = false, null != r && t === r.id && null != i && I !== _.QZA.SUBMITTING) {
    for (let e = E.length - 1; e >= 0; e--) {
      let t = E[e];
      if (null != n && (null == t ? true : t.channel_id) !== n) continue;
      let r = i.find(e => {
        let {
          id: n
        } = e;
        if (n === t.id) returntrue
      });
      if (null != r) {
        let n = h({}, t, r);
        E[e] = n, C || (null == O ? true : O.id) !== n.id || (O = n)
      } else(null == O ? true : O.id) === t.id && (O = null), E.splice(e, 1)
    }
    for (let e of i) null == E.find(t => {
      let {
        id: n
      } = t;
      if (n === e.id) returntrue
    }) && E.push(e);
    E = [...E], w()
  }
}

function G(e) {
  let {
    commandId: t
  } = e;
  b = t, y = null, O = null, T = {}, C = true
}

function Z(e) {
  let {
    commandId: t
  } = e;
  if (null == b || b !== t) returnfalse;
  b = null, T = {}, C = false
}

function B(e) {
  let {
    integrationId: t
  } = e, n = K(t);
  if (null == n) returnfalse;
  y = n, b = null, O = null, T = {}, C = false
}

function F() {
  y = null, T = {}, C = false
}

function V(e) {
  let {
    webhookId: t
  } = e, n = z(t);
  if (null == n) returnfalse;
  O = n, b = null, y = null, T = {}, C = false
}

function H() {
  O = null, T = {}, C = false
}

function Y() {
  return R(false)
}

function W() {
  return R(true)
}

function K(e) {
  return g.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}

function z(e) {
  return E.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class q extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk855674.Z, Chunk496675.Z)
  }
  hasChanges() {
    return C
  }
  get guild() {
    return r
  }
  get integrations() {
    return g
  }
  get webhooks() {
    return E
  }
  get editedCommandId() {
    return b
  }
  get editedIntegration() {
    return y
  }
  get editedWebhook() {
    return O
  }
  get formState() {
    return I
  }
  getErrors() {
    return T
  }
  getSection() {
    return null != i ? i : Chunk981631.b4C.OVERVIEW
  }
  getSectionId() {
    return A
  }
  getIntegration(e) {
    return K(e)
  }
  getWebhook(e) {
    return z(e)
  }
  isFetching() {
    return S || v
  }
  showNotice() {
    return this.hasChanges()
  }
  getApplication(e) {
    var t;
    return null == (t = g.find(t => {
      var n;
      return (null == (n = t.application) ? true : n.id) === e
    })) ? true : t.application
  }
}
m(q, "displayName", "GuildSettingsIntegrationsStore");
let Q = new q(Chunk570140.Z, __OVERLAY__ ? {} : {
    INTEGRATION_SETTINGS_INIT: Y,
    INTEGRATION_SETTINGS_SAVE_SUCCESS: W,
    GUILD_SETTINGS_INIT: N,
    GUILD_SETTINGS_SET_SECTION: N,
    INTEGRATION_SETTINGS_SET_SECTION: P,
    INTEGRATION_SETTINGS_START_EDITING_COMMAND: G,
    INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: Z,
    INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: B,
    INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: F,
    INTEGRATION_SETTINGS_UPDATE_INTEGRATION: x,
    INTEGRATION_SETTINGS_UPDATE_WEBHOOK: L,
    INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: V,
    INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: H,
    GUILD_SETTINGS_CLOSE: D,
    GUILD_SETTINGS_LOADED_INTEGRATIONS: k,
    WEBHOOKS_UPDATE: U,
    INTEGRATION_SETTINGS_SUBMITTING: j,
    INTEGRATION_SETTINGS_SAVE_FAILURE: M
  }),
  X = Q