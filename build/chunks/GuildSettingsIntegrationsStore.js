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
  y = null,
  b = null,
  O = null,
  v = false,
  A = false,
  I = Chunk652215.XlH.CLOSED,
  S = {},
  T = false,
  C = null;

function N(e) {
  let {
    section: t
  } = e;
  if (t !== _.BEX.INTEGRATIONS) returnfalse;
  if (null == r) {
    let e = p.A.getGuildId();
    null != e && (u.A.fetchForGuild(e), v = true), R(false)
  }
}

function w(e) {
  let {
    section: t,
    sectionId: n
  } = e;
  i = t, C = n
}

function R(e) {
  if (null != (r = p.A.getProps().guild) && d.A.can(_.xBc.MANAGE_GUILD, r)) {
    let e = p.A.getProps().integrations;
    null == e && (A = true), g = null != e ? e : []
  } else g = [];
  if (E = null != r && d.A.can(_.xBc.MANAGE_WEBHOOKS, r) ? f.A.getWebhooksForGuild(r.id) : [], !e && null != b) {
    let e = z(b.id);
    null != e && (b = e)
  }
  if (null != O) {
    let e = q(O.id);
    null != e && (O = e)
  }
  y = null, I = _.XlH.OPEN, S = {}, T = false
}

function P() {
  r = null, g = [], E = [], y = null, b = null, O = null, I = _.XlH.CLOSED, T = false
}
let D = o().debounce(() => {
  T && (null != b ? o().isEqual(b, z(b.id)) && (T = false) : null != O && o().isEqual(O, q(O.id)) && (T = false), T || X.emitChange())
}, 500);

function x(e) {
  let {
    settings: t
  } = e;
  if (null == b) returnfalse;
  b = m({}, b), null != t.enableEmoticons && b.enable_emoticons !== t.enableEmoticons && (b.enable_emoticons = t.enableEmoticons, T = true), null != t.expireBehavior && b.expire_behavior !== t.expireBehavior && (b.expire_behavior = t.expireBehavior, T = true), null != t.expireGracePeriod && b.expire_grace_period !== t.expireGracePeriod && (b.expire_grace_period = t.expireGracePeriod, T = true), T && D()
}

function L(e) {
  let {
    settings: t
  } = e;
  if (null == O) returnfalse;
  O = m({}, O), null != t.name && O.name !== t.name && (O.name = t.name, T = true), true !== t.avatar && O.avatar !== t.avatar && (O.avatar = t.avatar, T = true), null != t.channelId && O.channel_id !== t.channelId && (O.channel_id = t.channelId, T = true), T && D()
}

function j() {
  I = _.XlH.SUBMITTING, S = {}
}

function M(e) {
  var t;
  if (I !== _.XlH.SUBMITTING) returnfalse;
  I = _.XlH.OPEN, S = null != (t = e.errors) ? t : {}
}

function k(e) {
  let {
    guildId: t,
    integrations: n
  } = e;
  if (null == r || t !== r.id || I === _.XlH.SUBMITTING) returnfalse;
  for (let e of (A = false, n))
    if (null == g.find(t => {
        let {
          id: n
        } = t;
        if (n === e.id) returntrue
      })) {
      var i, a;
      g.push(e), e.type === (null == b ? true : b.type) && (null == (i = e.account) ? true : i.id) === (null == (a = b.account) ? true : a.id) && (b = e)
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
      (null == b ? true : b.id) === n.id && (false === n.enabled ? b = null : T || (b = n)), g[e] = n
    } else(null == b ? true : b.id) === t.id && (b = null), g.splice(e, 1)
  }
  g = [...g], D()
}

function U(e) {
  let {
    guildId: t,
    channelId: n,
    webhooks: i
  } = e;
  if (v = false, null != r && t === r.id && null != i && I !== _.XlH.SUBMITTING) {
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
  y = t, b = null, O = null, S = {}, T = true
}

function V(e) {
  let {
    commandId: t
  } = e;
  if (null == y || y !== t) returnfalse;
  y = null, S = {}, T = false
}

function F(e) {
  let {
    integrationId: t
  } = e, n = z(t);
  if (null == n) returnfalse;
  b = n, y = null, O = null, S = {}, T = false
}

function B() {
  b = null, S = {}, T = false
}

function H(e) {
  let {
    webhookId: t
  } = e, n = q(t);
  if (null == n) returnfalse;
  O = n, y = null, b = null, S = {}, T = false
}

function Y() {
  O = null, S = {}, T = false
}

function W() {
  return R(false)
}

function K() {
  return R(true)
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
class Z extends(a = Chunk311907.Ay.Store) {
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
    return y
  }
  get editedIntegration() {
    return b
  }
  get editedWebhook() {
    return O
  }
  get formState() {
    return I
  }
  getErrors() {
    return S
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
    return A || v
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
h(Z, "displayName", "GuildSettingsIntegrationsStore");
let X = new Z(Chunk73153.h, __OVERLAY__ ? {} : {
    INTEGRATION_SETTINGS_INIT: W,
    INTEGRATION_SETTINGS_SAVE_SUCCESS: K,
    GUILD_SETTINGS_INIT: N,
    GUILD_SETTINGS_SET_SECTION: N,
    INTEGRATION_SETTINGS_SET_SECTION: w,
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
  Q = X