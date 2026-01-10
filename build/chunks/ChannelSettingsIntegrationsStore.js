/** Chunk was on 1272 **/
/** chunk id: 533947, original params: e,t,n (module,exports,require) **/
let r, i, l;
require.d(exports, {
  Z: () => A
}), require("./539854.js"), require("./388685.js");
var a, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk308063 = require("./308063.js"),
  Chunk388610 = require("./388610.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk855674 = require("./855674.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
let E = [],
  O = null,
  v = false,
  y = Chunk981631.QZA.CLOSED,
  I = {},
  C = false,
  S = null;

function T() {
  if (r = null != (i = p.Z.getChannel()) ? f.Z.getGuild(i.guild_id) : null, E = null != i && null != r && g.Z.can(m.Plq.MANAGE_WEBHOOKS, i) ? h.Z.getWebhooksForChannel(r.id, i.id) : [], null != O) {
    let e = j(O.id);
    null != e && (O = e)
  }
  y = m.QZA.OPEN, I = {}, C = false
}
let N = s().debounce(() => {
  C && ((null == O || s().isEqual(O, j(O.id))) && (C = false), C || x.emitChange())
}, 500);

function j(e) {
  return E.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class P extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(p.Z, f.Z, h.Z, g.Z)
  }
  hasChanges() {
    return C
  }
  get webhooks() {
    return E
  }
  get editedWebhook() {
    return O
  }
  get formState() {
    return y
  }
  getWebhook(e) {
    return j(e)
  }
  showNotice() {
    return this.hasChanges()
  }
  getProps() {
    return {
      submitting: y === m.QZA.SUBMITTING,
      webhooks: E,
      editedWebhook: O,
      section: l,
      sectionId: S,
      hasChanges: this.hasChanges(),
      isFetching: v,
      errors: I
    }
  }
}
b(P, "displayName", "ChannelSettingsIntegrationsStore");
let x = new P(Chunk570140.Z, __OVERLAY__ ? {} : {
    INTEGRATION_SETTINGS_INIT: T,
    INTEGRATION_SETTINGS_SAVE_SUCCESS: T,
    CHANNEL_SETTINGS_SET_SECTION: function(e) {
      let {
        section: t
      } = e;
      if (t !== m.CoT.INTEGRATIONS) returnfalse;
      if (l = m.b4C.OVERVIEW, null == r) {
        let e = p.Z.getChannel(),
          t = null == e ? true : e.getGuildId();
        null != e && null != t && (d.Z.fetchForChannel(t, e.id), v = true), T()
      }
    },
    INTEGRATION_SETTINGS_SET_SECTION: function(e) {
      let {
        section: t,
        sectionId: n
      } = e;
      l = t, S = n
    },
    INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
      let {
        webhookId: t
      } = e, n = j(t);
      if (null == n) returnfalse;
      O = n, I = {}, C = false
    },
    INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
      O = null, I = {}, C = false
    },
    INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
      let {
        settings: t
      } = e;
      if (null == O) returnfalse;
      O = _({}, O), null != t.name && O.name !== t.name && (O.name = t.name, C = true), true !== t.avatar && O.avatar !== t.avatar && (O.avatar = t.avatar, C = true), null != t.channelId && O.channel_id !== t.channelId && (O.channel_id = t.channelId, C = true), C && N()
    },
    CHANNEL_SETTINGS_CLOSE: function() {
      i = null, r = null, E = [], O = null, y = m.QZA.CLOSED
    },
    WEBHOOKS_UPDATE: function(e) {
      let {
        guildId: t,
        channelId: n,
        webhooks: l
      } = e;
      if (v = false, null != r && t === r.id && null != i && n === i.id && null != l && y !== m.QZA.SUBMITTING) {
        for (let e = E.length - 1; e >= 0; e--) {
          let t = E[e];
          if (null != n && (null == t ? true : t.channel_id) !== n) continue;
          let r = l.find(e => {
            let {
              id: n
            } = e;
            if (n === t.id) returntrue
          });
          if (null != r) {
            let n = _({}, t, r);
            E[e] = n, C || (null == O ? true : O.id) !== n.id || (O = n)
          } else(null == O ? true : O.id) === t.id && (O = null), E.splice(e, 1)
        }
        for (let e of l) null == E.find(t => {
          let {
            id: n
          } = t;
          if (n === e.id) returntrue
        }) && E.push(e);
        E = [...E], N()
      }
    },
    INTEGRATION_SETTINGS_SUBMITTING: function() {
      y = m.QZA.SUBMITTING, I = {}
    },
    INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
      var t;
      if (y !== m.QZA.SUBMITTING) returnfalse;
      y = m.QZA.OPEN, I = null != (t = e.errors) ? t : {}
    }
  }),
  A = x