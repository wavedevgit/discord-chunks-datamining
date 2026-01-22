/** Chunk was on 21738 **/
/** chunk id: 291731, original params: e,t,n (module,exports,require) **/
let r, i, l;
require.d(exports, {
  A: () => P
}), require("./321073.js"), require("./896048.js");
var a, Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk824953 = require("./824953.js"),
  Chunk863036 = require("./863036.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk718116 = require("./718116.js"),
  Chunk652215 = require("./652215.js");

function m(e, t, n) {
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
      m(e, t, n[t])
    })
  }
  return e
}
let _ = [],
  E = null,
  O = false,
  y = Chunk652215.XlH.CLOSED,
  I = {},
  v = false,
  S = null;

function C() {
  if (r = null != (i = p.A.getChannel()) ? f.A.getGuild(i.guild_id) : null, _ = null != i && null != r && h.A.can(g.xBc.MANAGE_WEBHOOKS, i) ? A.A.getWebhooksForChannel(r.id, i.id) : [], null != E) {
    let e = T(E.id);
    null != e && (E = e)
  }
  y = g.XlH.OPEN, I = {}, v = false
}
let N = o().debounce(() => {
  v && ((null == E || o().isEqual(E, T(E.id))) && (v = false), v || x.emitChange())
}, 500);

function T(e) {
  return _.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class j extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(p.A, f.A, A.A, h.A)
  }
  hasChanges() {
    return v
  }
  get webhooks() {
    return _
  }
  get editedWebhook() {
    return E
  }
  get formState() {
    return y
  }
  getWebhook(e) {
    return T(e)
  }
  showNotice() {
    return this.hasChanges()
  }
  getProps() {
    return {
      submitting: y === g.XlH.SUBMITTING,
      webhooks: _,
      editedWebhook: E,
      section: l,
      sectionId: S,
      hasChanges: this.hasChanges(),
      isFetching: O,
      errors: I
    }
  }
}
m(j, "displayName", "ChannelSettingsIntegrationsStore");
let x = new j(Chunk73153.h, __OVERLAY__ ? {} : {
    INTEGRATION_SETTINGS_INIT: C,
    INTEGRATION_SETTINGS_SAVE_SUCCESS: C,
    CHANNEL_SETTINGS_SET_SECTION: function(e) {
      let {
        section: t
      } = e;
      if (t !== g.p_A.INTEGRATIONS) returnfalse;
      if (l = g.wLn.OVERVIEW, null == r) {
        let e = p.A.getChannel(),
          t = null == e ? true : e.getGuildId();
        null != e && null != t && (d.A.fetchForChannel(t, e.id), O = true), C()
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
      } = e, n = T(t);
      if (null == n) returnfalse;
      E = n, I = {}, v = false
    },
    INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
      E = null, I = {}, v = false
    },
    INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
      let {
        settings: t
      } = e;
      if (null == E) returnfalse;
      E = b({}, E), null != t.name && E.name !== t.name && (E.name = t.name, v = true), true !== t.avatar && E.avatar !== t.avatar && (E.avatar = t.avatar, v = true), null != t.channelId && E.channel_id !== t.channelId && (E.channel_id = t.channelId, v = true), v && N()
    },
    CHANNEL_SETTINGS_CLOSE: function() {
      i = null, r = null, _ = [], E = null, y = g.XlH.CLOSED
    },
    WEBHOOKS_UPDATE: function(e) {
      let {
        guildId: t,
        channelId: n,
        webhooks: l
      } = e;
      if (O = false, null != r && t === r.id && null != i && n === i.id && null != l && y !== g.XlH.SUBMITTING) {
        for (let e = _.length - 1; e >= 0; e--) {
          let t = _[e];
          if (null != n && (null == t ? true : t.channel_id) !== n) continue;
          let r = l.find(e => {
            let {
              id: n
            } = e;
            if (n === t.id) returntrue
          });
          if (null != r) {
            let n = b({}, t, r);
            _[e] = n, v || (null == E ? true : E.id) !== n.id || (E = n)
          } else(null == E ? true : E.id) === t.id && (E = null), _.splice(e, 1)
        }
        for (let e of l) null == _.find(t => {
          let {
            id: n
          } = t;
          if (n === e.id) returntrue
        }) && _.push(e);
        _ = [..._], N()
      }
    },
    INTEGRATION_SETTINGS_SUBMITTING: function() {
      y = g.XlH.SUBMITTING, I = {}
    },
    INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
      var t;
      if (y !== g.XlH.SUBMITTING) returnfalse;
      y = g.XlH.OPEN, I = null != (t = e.errors) ? t : {}
    }
  }),
  P = x