/** Chunk was on web.js **/
/** chunk id: 145260, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  default: () => Q
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

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
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
  I = false,
  T = Chunk981631.QZA.CLOSED,
  S = {},
  A = false,
  C = null;

function N(e) {
  let {
    section: t
  } = e;
  if (t !== p.pNK.INTEGRATIONS) returnfalse;
  if (null == r) {
    let e = _.Z.getGuildId();
    null != e && (u.Z.fetchForGuild(e), v = true), P(false)
  }
}

function R(e) {
  let {
    section: t,
    sectionId: n
  } = e;
  i = t, C = n
}

function P(e) {
  if (null != (r = _.Z.getProps().guild) && d.Z.can(p.Plq.MANAGE_GUILD, r)) {
    let e = _.Z.getProps().integrations;
    null == e && (I = true), g = null != e ? e : []
  } else g = [];
  if (E = null != r && d.Z.can(p.Plq.MANAGE_WEBHOOKS, r) ? f.Z.getWebhooksForGuild(r.id) : [], !e && null != y) {
    let e = K(y.id);
    null != e && (y = e)
  }
  if (null != O) {
    let e = z(O.id);
    null != e && (O = e)
  }
  b = null, T = p.QZA.OPEN, S = {}, A = false
}

function D() {
  r = null, g = [], E = [], b = null, y = null, O = null, T = Chunk981631.QZA.CLOSED, A = false
}
let w = s().debounce(() => {
  A && (null != y ? s().isEqual(y, K(y.id)) && (A = false) : null != O && s().isEqual(O, z(O.id)) && (A = false), A || X.emitChange())
}, 500);

function x(e) {
  let {
    settings: t
  } = e;
  if (null == y) returnfalse;
  y = m({}, y), null != t.enableEmoticons && y.enable_emoticons !== t.enableEmoticons && (y.enable_emoticons = t.enableEmoticons, A = true), null != t.expireBehavior && y.expire_behavior !== t.expireBehavior && (y.expire_behavior = t.expireBehavior, A = true), null != t.expireGracePeriod && y.expire_grace_period !== t.expireGracePeriod && (y.expire_grace_period = t.expireGracePeriod, A = true), A && w()
}

function L(e) {
  let {
    settings: t
  } = e;
  if (null == O) returnfalse;
  O = m({}, O), null != t.name && O.name !== t.name && (O.name = t.name, A = true), true !== t.avatar && O.avatar !== t.avatar && (O.avatar = t.avatar, A = true), null != t.channelId && O.channel_id !== t.channelId && (O.channel_id = t.channelId, A = true), A && w()
}

function M() {
  T = Chunk981631.QZA.SUBMITTING, S = {}
}

function k(e) {
  var t;
  if (T !== p.QZA.SUBMITTING) returnfalse;
  T = p.QZA.OPEN, S = null != (t = e.errors) ? t : {}
}

function j(e) {
  let {
    guildId: t,
    integrations: n
  } = e;
  if (null == r || t !== r.id || T === p.QZA.SUBMITTING) returnfalse;
  for (let e of (I = false, n))
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
      let n = m({}, t, r);
      (null == y ? true : y.id) === n.id && (false === n.enabled ? y = null : A || (y = n)), g[e] = n
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
  if (v = false, null != r && t === r.id && null != i && T !== p.QZA.SUBMITTING) {
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
        let n = m({}, t, r);
        E[e] = n, A || (null == O ? true : O.id) !== n.id || (O = n)
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
  b = t, y = null, O = null, S = {}, A = true
}

function B(e) {
  let {
    commandId: t
  } = e;
  if (null == b || b !== t) returnfalse;
  b = null, S = {}, A = false
}

function Z(e) {
  let {
    integrationId: t
  } = e, n = K(t);
  if (null == n) returnfalse;
  y = n, b = null, O = null, S = {}, A = false
}

function F() {
  y = null, S = {}, A = false
}

function V(e) {
  let {
    webhookId: t
  } = e, n = z(t);
  if (null == n) returnfalse;
  O = n, b = null, y = null, S = {}, A = false
}

function H() {
  O = null, S = {}, A = false
}

function Y() {
  return P(false)
}

function W() {
  return P(true)
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
    return A
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
    return T
  }
  getErrors() {
    return S
  }
  getSection() {
    return null != i ? i : Chunk981631.b4C.OVERVIEW
  }
  getSectionId() {
    return C
  }
  getIntegration(e) {
    return K(e)
  }
  getWebhook(e) {
    return z(e)
  }
  isFetching() {
    return I || v
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
h(q, "displayName", "GuildSettingsIntegrationsStore");
let X = new q(Chunk570140.Z, __OVERLAY__ ? {} : {
    INTEGRATION_SETTINGS_INIT: Y,
    INTEGRATION_SETTINGS_SAVE_SUCCESS: W,
    GUILD_SETTINGS_INIT: N,
    GUILD_SETTINGS_SET_SECTION: N,
    INTEGRATION_SETTINGS_SET_SECTION: R,
    INTEGRATION_SETTINGS_START_EDITING_COMMAND: G,
    INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: B,
    INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: Z,
    INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: F,
    INTEGRATION_SETTINGS_UPDATE_INTEGRATION: x,
    INTEGRATION_SETTINGS_UPDATE_WEBHOOK: L,
    INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: V,
    INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: H,
    GUILD_SETTINGS_CLOSE: D,
    GUILD_SETTINGS_LOADED_INTEGRATIONS: j,
    WEBHOOKS_UPDATE: U,
    INTEGRATION_SETTINGS_SUBMITTING: M,
    INTEGRATION_SETTINGS_SAVE_FAILURE: k
  }),
  Q = X