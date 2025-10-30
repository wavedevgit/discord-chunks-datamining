/** Chunk was on 1272 **/
/** chunk id: 533947, original params: e,t,n (module,exports,require) **/
let r, i, l;
require.d(exports, {
  Z: () => A
}), require("./539854.js"), require("./388685.js");
var a, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk308063 = require("./308063.js"),
  Chunk388610 = require("./388610.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk855674 = require("./855674.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let E = [],
  O = null,
  I = false,
  y = Chunk981631.QZA.CLOSED,
  v = {},
  C = false,
  S = null;

function T() {
  if (r = null != (i = Chunk388610.Z.getChannel()) ? Chunk430824.Z.getGuild(i.guild_id) : null, E = null != i && null != r && Chunk496675.Z.can(Chunk981631.Plq.MANAGE_WEBHOOKS, i) ? Chunk855674.Z.getWebhooksForChannel(r.id, i.id) : [], null != O) {
    let e = j(O.id);
    null != module && (O = module)
  }
  y = Chunk981631.QZA.OPEN, v = {}, C = false
}
let N = o().debounce(() => {
  C && ((null == O || o().isEqual(O, j(O.id))) && (C = false), C || x.emitChange())
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
    this.waitFor(Chunk388610.Z, Chunk430824.Z, Chunk855674.Z, Chunk496675.Z)
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
      submitting: y === Chunk981631.QZA.SUBMITTING,
      webhooks: E,
      editedWebhook: O,
      section: l,
      sectionId: S,
      hasChanges: this.hasChanges(),
      isFetching: I,
      errors: v
    }
  }
}
_(P, "displayName", "ChannelSettingsIntegrationsStore");
let x = new P(Chunk570140.Z, __OVERLAY__ ? {} : {
    INTEGRATION_SETTINGS_INIT: T,
    INTEGRATION_SETTINGS_SAVE_SUCCESS: T,
    CHANNEL_SETTINGS_SET_SECTION: function(e) {
      let {
        section: t
      } = e;
      if (t !== g.CoT.INTEGRATIONS) returnfalse;
      if (l = g.b4C.OVERVIEW, null == r) {
        let e = p.Z.getChannel(),
          t = null == e ? true : e.getGuildId();
        null != e && null != t && (d.Z.fetchForChannel(t, e.id), I = true), T()
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
      O = n, v = {}, C = false
    },
    INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
      O = null, v = {}, C = false
    },
    INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
      let {
        settings: t
      } = e;
      if (null == O) returnfalse;
      O = b({}, O), null != t.name && O.name !== t.name && (O.name = t.name, C = true), true !== t.avatar && O.avatar !== t.avatar && (O.avatar = t.avatar, C = true), null != t.channelId && O.channel_id !== t.channelId && (O.channel_id = t.channelId, C = true), C && N()
    },
    CHANNEL_SETTINGS_CLOSE: function() {
      i = null, r = null, E = [], O = null, y = Chunk981631.QZA.CLOSED
    },
    WEBHOOKS_UPDATE: function(e) {
      let {
        guildId: t,
        channelId: n,
        webhooks: l
      } = e;
      if (I = false, null != r && t === r.id && null != i && n === i.id && null != l && y !== g.QZA.SUBMITTING) {
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
            let n = b({}, t, r);
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
      y = Chunk981631.QZA.SUBMITTING, v = {}
    },
    INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
      var t;
      if (y !== g.QZA.SUBMITTING) returnfalse;
      y = g.QZA.OPEN, v = null != (t = e.errors) ? t : {}
    }
  }),
  A = x