/** Chunk was on web.js **/
/** chunk id: 307854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => f
});
var Chunk731889 = require("./731889.js"),
  Chunk573736 = require("./573736.js"),
  Chunk101284 = require("./101284.js"),
  Chunk394798 = require("./394798.js"),
  Chunk622916 = require("./622916.js"),
  Chunk112797 = require("./112797.js"),
  Chunk99342 = require("./99342.js");
let u = 100;
class d {
  constructor() {
    this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = (0, Chunk731889.Q)()
  }
  clone() {
    let e = new d;
    return module._breadcrumbs = [...this._breadcrumbs], module._tags = {
      ...this._tags
    }, module._extra = {
      ...this._extra
    }, module._contexts = {
      ...this._contexts
    }, module._user = this._user, module._level = this._level, module._session = this._session, module._transactionName = this._transactionName, module._fingerprint = this._fingerprint, module._eventProcessors = [...this._eventProcessors], module._requestSession = this._requestSession, module._attachments = [...this._attachments], module._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    }, module._propagationContext = {
      ...this._propagationContext
    }, module._client = this._client, module._lastEventId = this._lastEventId, (0, Chunk99342.D)(module, (0, Chunk99342.Y)(this)), module
  }
  setClient(e) {
    this._client = e
  }
  setLastEventId(e) {
    this._lastEventId = e
  }
  getClient() {
    return this._client
  }
  lastEventId() {
    return this._lastEventId
  }
  addScopeListener(e) {
    this._scopeListeners.push(e)
  }
  addEventProcessor(e) {
    return this._eventProcessors.push(e), this
  }
  setUser(e) {
    return this._user = e || {
      email: true,
      id: true,
      ip_address: true,
      username: true
    }, this._session && (0, l.CT)(this._session, {
      user: e
    }), this._notifyScopeListeners(), this
  }
  getUser() {
    return this._user
  }
  getRequestSession() {
    return this._requestSession
  }
  setRequestSession(e) {
    return this._requestSession = e, this
  }
  setTags(e) {
    return this._tags = {
      ...this._tags,
      ...e
    }, this._notifyScopeListeners(), this
  }
  setTag(e, t) {
    return this._tags = {
      ...this._tags,
      [e]: t
    }, this._notifyScopeListeners(), this
  }
  setExtras(e) {
    return this._extra = {
      ...this._extra,
      ...e
    }, this._notifyScopeListeners(), this
  }
  setExtra(e, t) {
    return this._extra = {
      ...this._extra,
      [e]: t
    }, this._notifyScopeListeners(), this
  }
  setFingerprint(e) {
    return this._fingerprint = e, this._notifyScopeListeners(), this
  }
  setLevel(e) {
    return this._level = e, this._notifyScopeListeners(), this
  }
  setTransactionName(e) {
    return this._transactionName = e, this._notifyScopeListeners(), this
  }
  setContext(e, t) {
    return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
  }
  setSession(e) {
    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
  }
  getSession() {
    return this._session
  }
  update(e) {
    if (!e) return this;
    let t = "function" == typeof e ? e(this) : e,
      [n, r] = t instanceof f ? [t.getScopeData(), t.getRequestSession()] : (0, i.PO)(t) ? [e, e.requestSession] : [],
      {
        tags: o,
        extra: a,
        user: s,
        contexts: l,
        level: c,
        fingerprint: u = [],
        propagationContext: d
      } = n || {};
    return this._tags = {
      ...this._tags,
      ...o
    }, this._extra = {
      ...this._extra,
      ...a
    }, this._contexts = {
      ...this._contexts,
      ...l
    }, s && Object.keys(s).length && (this._user = s), c && (this._level = c), u.length && (this._fingerprint = u), d && (this._propagationContext = d), r && (this._requestSession = r), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = true, this._transactionName = true, this._fingerprint = true, this._requestSession = true, this._session = true, (0, Chunk99342.D)(this, true), this._attachments = [], this._propagationContext = (0, Chunk731889.Q)(), this._notifyScopeListeners(), this
  }
  addBreadcrumb(e, t) {
    let n = "number" == typeof t ? t : u;
    if (n <= 0) return this;
    let r = {
        timestamp: (0, o.yW)(),
        ...e
      },
      i = this._breadcrumbs;
    return i.push(r), this._breadcrumbs = i.length > n ? i.slice(-n) : i, this._notifyScopeListeners(), this
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1]
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this
  }
  addAttachment(e) {
    return this._attachments.push(e), this
  }
  clearAttachments() {
    return this._attachments = [], this
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: (0, Chunk99342.Y)(this)
    }
  }
  setSDKProcessingMetadata(e) {
    return this._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata,
      ...e
    }, this
  }
  setPropagationContext(e) {
    return this._propagationContext = e, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(e, t) {
    let n = t && t.event_id ? t.event_id : (0, a.DM)();
    if (!this._client) return s.kg.warn("No client configured on scope - will not capture exception!"), n;
    let r = Error("Sentry syntheticException");
    return this._client.captureException(e, {
      originalException: e,
      syntheticException: r,
      ...t,
      event_id: n
    }, this), n
  }
  captureMessage(e, t, n) {
    let r = n && n.event_id ? n.event_id : (0, a.DM)();
    if (!this._client) return s.kg.warn("No client configured on scope - will not capture message!"), r;
    let i = Error(e);
    return this._client.captureMessage(e, t, {
      originalException: e,
      syntheticException: i,
      ...n,
      event_id: r
    }, this), r
  }
  captureEvent(e, t) {
    let n = t && t.event_id ? t.event_id : (0, a.DM)();
    return this._client ? this._client.captureEvent(e, {
      ...t,
      event_id: n
    }, this) : s.kg.warn("No client configured on scope - will not capture event!"), n
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach(e => {
      e(this)
    }), this._notifyingListeners = false)
  }
}
let f = d