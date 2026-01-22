/** Chunk was on web.js **/
/** chunk id: 53656, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  default: () => Q
}), require("./321073.js"), require("./896048.js");
var a, Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk824953 = require("./824953.js"),
  Chunk576705 = require("./576705.js"),
  Chunk718116 = require("./718116.js"),
  Chunk555337 = require("./555337.js"),
  Chunk652215 = require("./652215.js");

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
  A = false,
  v = false,
  S = Chunk652215.XlH.CLOSED,
  I = {},
  T = false,
  C = null;

function N(e) {
  let {
    section: t
  } = e;
  if (t !== _.BEX.INTEGRATIONS) returnfalse;
  if (null == r) {
    let e = p.A.getGuildId();
    null != e && (u.A.fetchForGuild(e), A = true), w(false)
  }
}

function R(e) {
  let {
    section: t,
    sectionId: n
  } = e;
  i = t, C = n
}

function w(e) {
  if (null != (r = p.A.getProps().guild) && d.A.can(_.xBc.MANAGE_GUILD, r)) {
    let e = p.A.getProps().integrations;
    null == e && (v = true), g = null != e ? e : []
  } else g = [];
  if (E = null != r && d.A.can(_.xBc.MANAGE_WEBHOOKS, r) ? f.A.getWebhooksForGuild(r.id) : [], !e && null != y) {
    let e = z(y.id);
    null != e && (y = e)
  }
  if (null != O) {
    let e = q(O.id);
    null != e && (O = e)
  }
  b = null, S = _.XlH.OPEN, I = {}, T = false
}

function P() {
  r = null, g = [], E = [], b = null, y = null, O = null, S = _.XlH.CLOSED, T = false
}
let D = o().debounce(() => {
  T && (null != y ? o().isEqual(y, z(y.id)) && (T = false) : null != O && o().isEqual(O, q(O.id)) && (T = false), T || Z.emitChange())
}, 500);

function x(e) {
  let {
    settings: t
  } = e;
  if (null == y) returnfalse;
  y = m({}, y), null != t.enableEmoticons && y.enable_emoticons !== t.enableEmoticons && (y.enable_emoticons = t.enableEmoticons, T = true), null != t.expireBehavior && y.expire_behavior !== t.expireBehavior && (y.expire_behavior = t.expireBehavior, T = true), null != t.expireGracePeriod && y.expire_grace_period !== t.expireGracePeriod && (y.expire_grace_period = t.expireGracePeriod, T = true), T && D()
}

function L(e) {
  let {
    settings: t
  } = e;
  if (null == O) returnfalse;
  O = m({}, O), null != t.name && O.name !== t.name && (O.name = t.name, T = true), true !== t.avatar && O.avatar !== t.avatar && (O.avatar = t.avatar, T = true), null != t.channelId && O.channel_id !== t.channelId && (O.channel_id = t.channelId, T = true), T && D()
}

function j() {
  S = _.XlH.SUBMITTING, I = {}
}

function M(e) {
  var t;
  if (S !== _.XlH.SUBMITTING) returnfalse;
  S = _.XlH.OPEN, I = null != (t = e.errors) ? t : {}
}

function k(e) {
  let {
    guildId: t,
    integrations: n
  } = e;
  if (null == r || t !== r.id || S === _.XlH.SUBMITTING) returnfalse;
  for (let e of (v = false, n))
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
      (null == y ? true : y.id) === n.id && (false === n.enabled ? y = null : T || (y = n)), g[e] = n
    } else(null == y ? true : y.id) === t.id && (y = null), g.splice(e, 1)
  }
  g = [...g], D()
}

function U(e) {
  let {
    guildId: t,
    channelId: n,
    webhooks: i
  } = e;
  if (A = false, null != r && t === r.id && null != i && S !== _.XlH.SUBMITTING) {
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
        E[e] = n, T || (null == O ? true : O.id) !== n.id || (O = n)
      } else(null == O ? true : O.id) === t.id && (O = null), E.splice(e, 1)
    }
    for (let e of i) null == E.find(t => {
      let {
        id: n
      } = t;
      if (n === e.id) returntrue
    }) && E.push(e);
    E = [...E], D()
  }
}

function G(e) {
  let {
    commandId: t
  } = e;
  b = t, y = null, O = null, I = {}, T = true
}

function V(e) {
  let {
    commandId: t
  } = e;
  if (null == b || b !== t) returnfalse;
  b = null, I = {}, T = false
}

function F(e) {
  let {
    integrationId: t
  } = e, n = z(t);
  if (null == n) returnfalse;
  y = n, b = null, O = null, I = {}, T = false
}

function B() {
  y = null, I = {}, T = false
}

function H(e) {
  let {
    webhookId: t
  } = e, n = q(t);
  if (null == n) returnfalse;
  O = n, b = null, y = null, I = {}, T = false
}

function Y() {
  O = null, I = {}, T = false
}

function W() {
  return w(false)
}

function K() {
  return w(true)
}

function z(e) {
  return g.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}

function q(e) {
  return E.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class X extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(p.A, f.A, d.A)
  }
  hasChanges() {
    return T
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
    return S
  }
  getErrors() {
    return I
  }
  getSection() {
    return null != i ? i : _.wLn.OVERVIEW
  }
  getSectionId() {
    return C
  }
  getIntegration(e) {
    return z(e)
  }
  getWebhook(e) {
    return q(e)
  }
  isFetching() {
    return v || A
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
h(X, "displayName", "GuildSettingsIntegrationsStore");
let Z = new X(Chunk73153.h, __OVERLAY__ ? {} : {
    INTEGRATION_SETTINGS_INIT: W,
    INTEGRATION_SETTINGS_SAVE_SUCCESS: K,
    GUILD_SETTINGS_INIT: N,
    GUILD_SETTINGS_SET_SECTION: N,
    INTEGRATION_SETTINGS_SET_SECTION: R,
    INTEGRATION_SETTINGS_START_EDITING_COMMAND: G,
    INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: V,
    INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: F,
    INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: B,
    INTEGRATION_SETTINGS_UPDATE_INTEGRATION: x,
    INTEGRATION_SETTINGS_UPDATE_WEBHOOK: L,
    INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: H,
    INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: Y,
    GUILD_SETTINGS_CLOSE: P,
    GUILD_SETTINGS_LOADED_INTEGRATIONS: k,
    WEBHOOKS_UPDATE: U,
    INTEGRATION_SETTINGS_SUBMITTING: j,
    INTEGRATION_SETTINGS_SAVE_FAILURE: M
  }),
  Q = Z