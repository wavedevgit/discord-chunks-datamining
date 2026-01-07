/** Chunk was on web.js **/
/** chunk id: 910316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => f
});
var Chunk974352 = require("./974352.js"),
  Chunk661822 = require("./661822.js"),
  Chunk343573 = require("./343573.js"),
  Chunk431660 = require("./431660.js"),
  Chunk98076 = require("./98076.js"),
  Chunk180710 = require("./180710.js"),
  Chunk354023 = require("./354023.js");
let u = 100;
class d {
  constructor() {
    this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = (0, r.Q)()
  }
  clone() {
    let e = new d;
    return e._breadcrumbs = [...this._breadcrumbs], e._tags = {
      ...this._tags
    }, e._extra = {
      ...this._extra
    }, e._contexts = {
      ...this._contexts
    }, e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    }, e._propagationContext = {
      ...this._propagationContext
    }, e._client = this._client, e._lastEventId = this._lastEventId, (0, c.D)(e, (0, c.Y)(this)), e
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
        tags: a,
        extra: o,
        user: s,
        contexts: l,
        level: c,
        fingerprint: u = [],
        propagationContext: d
      } = n || {};
    return this._tags = {
      ...this._tags,
      ...a
    }, this._extra = {
      ...this._extra,
      ...o
    }, this._contexts = {
      ...this._contexts,
      ...l
    }, s && Object.keys(s).length && (this._user = s), c && (this._level = c), u.length && (this._fingerprint = u), d && (this._propagationContext = d), r && (this._requestSession = r), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = true, this._transactionName = true, this._fingerprint = true, this._requestSession = true, this._session = true, (0, c.D)(this, true), this._attachments = [], this._propagationContext = (0, r.Q)(), this._notifyScopeListeners(), this
  }
  addBreadcrumb(e, t) {
    let n = "number" == typeof t ? t : u;
    if (n <= 0) return this;
    let r = {
        timestamp: (0, a.yW)(),
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
      span: (0, c.Y)(this)
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
    let n = t && t.event_id ? t.event_id : (0, o.DM)();
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
    let r = n && n.event_id ? n.event_id : (0, o.DM)();
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
    let n = t && t.event_id ? t.event_id : (0, o.DM)();
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