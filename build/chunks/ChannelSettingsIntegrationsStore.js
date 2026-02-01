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

function A(e, t, n) {
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
      A(e, t, n[t])
    })
  }
  return e
}
let b = [],
  E = null,
  O = false,
  y = Chunk652215.XlH.CLOSED,
  I = {},
  v = false,
  S = null;

function C() {
  if (r = null != (i = p.A.getChannel()) ? h.A.getGuild(i.guild_id) : null, b = null != i && null != r && g.A.can(f.xBc.MANAGE_WEBHOOKS, i) ? m.A.getWebhooksForChannel(r.id, i.id) : [], null != E) {
    let e = T(E.id);
    null != e && (E = e)
  }
  y = f.XlH.OPEN, I = {}, v = false
}
let N = o().debounce(() => {
  v && ((null == E || o().isEqual(E, T(E.id))) && (v = false), v || x.emitChange())
}, 500);

function T(e) {
  return b.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class j extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(p.A, h.A, m.A, g.A)
  }
  hasChanges() {
    return v
  }
  get webhooks() {
    return b
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
      submitting: y === f.XlH.SUBMITTING,
      webhooks: b,
      editedWebhook: E,
      section: l,
      sectionId: S,
      hasChanges: this.hasChanges(),
      isFetching: O,
      errors: I
    }
  }
}
A(j, "displayName", "ChannelSettingsIntegrationsStore");
let x = new j(Chunk73153.h, __OVERLAY__ ? {} : {
    INTEGRATION_SETTINGS_INIT: C,
    INTEGRATION_SETTINGS_SAVE_SUCCESS: C,
    CHANNEL_SETTINGS_SET_SECTION: function(e) {
      let {
        section: t
      } = e;
      if (t !== f.p_A.INTEGRATIONS) returnfalse;
      if (l = f.wLn.OVERVIEW, null == r) {
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
      E = _({}, E), null != t.name && E.name !== t.name && (E.name = t.name, v = true), true !== t.avatar && E.avatar !== t.avatar && (E.avatar = t.avatar, v = true), null != t.channelId && E.channel_id !== t.channelId && (E.channel_id = t.channelId, v = true), v && N()
    },
    CHANNEL_SETTINGS_CLOSE: function() {
      i = null, r = null, b = [], E = null, y = f.XlH.CLOSED
    },
    WEBHOOKS_UPDATE: function(e) {
      let {
        guildId: t,
        channelId: n,
        webhooks: l
      } = e;
      if (O = false, null != r && t === r.id && null != i && n === i.id && null != l && y !== f.XlH.SUBMITTING) {
        for (let e = b.length - 1; e >= 0; e--) {
          let t = b[e];
          if (null != n && (null == t ? true : t.channel_id) !== n) continue;
          let r = l.find(e => {
            let {
              id: n
            } = e;
            if (n === t.id) returntrue
          });
          if (null != r) {
            let n = _({}, t, r);
            b[e] = n, v || (null == E ? true : E.id) !== n.id || (E = n)
          } else(null == E ? true : E.id) === t.id && (E = null), b.splice(e, 1)
        }
        for (let e of l) null == b.find(t => {
          let {
            id: n
          } = t;
          if (n === e.id) returntrue
        }) && b.push(e);
        b = [...b], N()
      }
    },
    INTEGRATION_SETTINGS_SUBMITTING: function() {
      y = f.XlH.SUBMITTING, I = {}
    },
    INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
      var t;
      if (y !== f.XlH.SUBMITTING) returnfalse;
      y = f.XlH.OPEN, I = null != (t = e.errors) ? t : {}
    }
  }),
  P = x