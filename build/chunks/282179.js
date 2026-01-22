/** Chunk was on web.js **/
/** chunk id: 282179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => f
});
var Chunk159744 = require("./159744.js"),
  Chunk587993 = require("./587993.js"),
  Chunk745768 = require("./745768.js"),
  Chunk27133 = require("./27133.js"),
  Chunk478681 = require("./478681.js"),
  Chunk986787 = require("./986787.js"),
  Chunk378006 = require("./378006.js");
let u = 100;
class d {
  constructor() {
    this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = (0, r.J)()
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
    }, e._client = this._client, e._lastEventId = this._lastEventId, (0, c.r)(e, (0, c.f)(this)), e
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
    }, this._session && (0, l.qO)(this._session, {
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
      [n, r] = t instanceof f ? [t.getScopeData(), t.getRequestSession()] : (0, i.Qd)(t) ? [e, e.requestSession] : [],
      {
        tags: a,
        extra: s,
        user: o,
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
      ...s
    }, this._contexts = {
      ...this._contexts,
      ...l
    }, o && Object.keys(o).length && (this._user = o), c && (this._level = c), u.length && (this._fingerprint = u), d && (this._propagationContext = d), r && (this._requestSession = r), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = true, this._transactionName = true, this._fingerprint = true, this._requestSession = true, this._session = true, (0, c.r)(this, true), this._attachments = [], this._propagationContext = (0, r.J)(), this._notifyScopeListeners(), this
  }
  addBreadcrumb(e, t) {
    let n = "number" == typeof t ? t : u;
    if (n <= 0) return this;
    let r = {
        timestamp: (0, a.lu)(),
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
      span: (0, c.f)(this)
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
    let n = t && t.event_id ? t.event_id : (0, s.eJ)();
    if (!this._client) return o.vF.warn("No client configured on scope - will not capture exception!"), n;
    let r = Error("Sentry syntheticException");
    return this._client.captureException(e, {
      originalException: e,
      syntheticException: r,
      ...t,
      event_id: n
    }, this), n
  }
  captureMessage(e, t, n) {
    let r = n && n.event_id ? n.event_id : (0, s.eJ)();
    if (!this._client) return o.vF.warn("No client configured on scope - will not capture message!"), r;
    let i = Error(e);
    return this._client.captureMessage(e, t, {
      originalException: e,
      syntheticException: i,
      ...n,
      event_id: r
    }, this), r
  }
  captureEvent(e, t) {
    let n = t && t.event_id ? t.event_id : (0, s.eJ)();
    return this._client ? this._client.captureEvent(e, {
      ...t,
      event_id: n
    }, this) : o.vF.warn("No client configured on scope - will not capture event!"), n
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach(e => {
      e(this)
    }), this._notifyingListeners = false)
  }
}
let f = d