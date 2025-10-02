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
let O = [],
  E = null,
  y = false,
  v = Chunk981631.QZA.CLOSED,
  I = {},
  S = false,
  C = null;

function T() {
  if (r = null != (i = Chunk388610.Z.getChannel()) ? Chunk430824.Z.getGuild(i.guild_id) : null, O = null != i && null != r && Chunk496675.Z.can(Chunk981631.Plq.MANAGE_WEBHOOKS, i) ? Chunk855674.Z.getWebhooksForChannel(r.id, i.id) : [], null != E) {
    let e = j(E.id);
    null != module && (E = module)
  }
  v = Chunk981631.QZA.OPEN, I = {}, S = false
}
let N = s().debounce(() => {
  S && ((null == E || s().isEqual(E, j(E.id))) && (S = false), S || x.emitChange())
}, 500);

function j(e) {
  return O.find(t => {
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
    return S
  }
  get webhooks() {
    return O
  }
  get editedWebhook() {
    return E
  }
  get formState() {
    return v
  }
  getWebhook(e) {
    return j(e)
  }
  showNotice() {
    return this.hasChanges()
  }
  getProps() {
    return {
      submitting: v === Chunk981631.QZA.SUBMITTING,
      webhooks: O,
      editedWebhook: E,
      section: l,
      sectionId: C,
      hasChanges: this.hasChanges(),
      isFetching: y,
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
        null != e && null != t && (d.Z.fetchForChannel(t, e.id), y = true), T()
      }
    },
    INTEGRATION_SETTINGS_SET_SECTION: function(e) {
      let {
        section: t,
        sectionId: n
      } = e;
      l = t, C = n
    },
    INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
      let {
        webhookId: t
      } = e, n = j(t);
      if (null == n) returnfalse;
      E = n, I = {}, S = false
    },
    INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
      E = null, I = {}, S = false
    },
    INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
      let {
        settings: t
      } = e;
      if (null == E) returnfalse;
      E = _({}, E), null != t.name && E.name !== t.name && (E.name = t.name, S = true), true !== t.avatar && E.avatar !== t.avatar && (E.avatar = t.avatar, S = true), null != t.channelId && E.channel_id !== t.channelId && (E.channel_id = t.channelId, S = true), S && N()
    },
    CHANNEL_SETTINGS_CLOSE: function() {
      i = null, r = null, O = [], E = null, v = Chunk981631.QZA.CLOSED
    },
    WEBHOOKS_UPDATE: function(e) {
      let {
        guildId: t,
        channelId: n,
        webhooks: l
      } = e;
      if (y = false, null != r && t === r.id && null != i && n === i.id && null != l && v !== m.QZA.SUBMITTING) {
        for (let e = O.length - 1; e >= 0; e--) {
          let t = O[e];
          if (null != n && (null == t ? true : t.channel_id) !== n) continue;
          let r = l.find(e => {
            let {
              id: n
            } = e;
            if (n === t.id) returntrue
          });
          if (null != r) {
            let n = _({}, t, r);
            O[e] = n, S || (null == E ? true : E.id) !== n.id || (E = n)
          } else(null == E ? true : E.id) === t.id && (E = null), O.splice(e, 1)
        }
        for (let e of l) null == O.find(t => {
          let {
            id: n
          } = t;
          if (n === e.id) returntrue
        }) && O.push(e);
        O = [...O], N()
      }
    },
    INTEGRATION_SETTINGS_SUBMITTING: function() {
      v = Chunk981631.QZA.SUBMITTING, I = {}
    },
    INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
      var t;
      if (v !== m.QZA.SUBMITTING) returnfalse;
      v = m.QZA.OPEN, I = null != (t = e.errors) ? t : {}
    }
  }),
  A = x