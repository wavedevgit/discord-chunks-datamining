/** Chunk was on web.js **/
/** chunk id: 993760, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => c
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./65821.js"), require("./457529.js");
var Chunk972347 = require("./972347.js"),
  Chunk118356 = require("./118356.js"),
  Chunk205693 = require("./205693.js"),
  Chunk206607 = require("./206607.js"),
  o = require("./264572.js").Buffer;

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk972347.A {
  createUser(e) {
    this.recognizedUserIds.add(e), this.setupKeyRatchetForUser(e, this.latestPreparedTransitionVersion, s.jU.DECRYPT)
  }
  destroyUser(e) {
    this.recognizedUserIds.delete(e), this.encryptionWorker.postMessage({
      type: s.lA.DESTROY_USER,
      userId: e
    })
  }
  updateLocalUserCodecs(e, t) {
    this.encryptionWorker.postMessage({
      type: s.lA.UPDATE_CODECS,
      audioCodec: e,
      videoCodec: t
    })
  }
  updateSsrcs(e, t, n) {
    this.encryptionWorker.postMessage({
      type: s.lA.UPDATE_SSRC,
      userId: e,
      audioSsrc: t,
      videoSsrcs: n
    })
  }
  setupEncodedTransformsForTransceiver(e) {
    this.setupEncodedTransforms(e.sender), this.setupEncodedTransforms(e.receiver)
  }
  prepareSecureFramesTransition(e, t, n) {
    this.prepareSecureFramesRatchets(e, t), n()
  }
  prepareSecureFramesEpoch(e, t, n) {
    if ("1" === e) {
      let e = null;
      null != this.transientKeys && (e = this.transientKeys.GetTransientPrivateKey(t)), this.mlsSession.Init(t, BigInt(n), this.userId, e), this.onSecureFramesStateChanged()
    } else this.mlsSession.SetProtocolVersion(t)
  }
  executeSecureFramesTransition(e) {
    if (!this.secureFramesTransitions.has(e)) return void this.logger.warn("[TAG] Transition ID " + e + " not found, ignoring.");
    let t = this.secureFramesTransitions.get(e);
    this.secureFramesTransitions.delete(e), t === this.dave.kDisabledVersion && this.mlsSession.Reset(), this.setupKeyRatchetForUser(this.userId, t, s.jU.ENCRYPT), this.onSecureFramesStateChanged()
  }
  getMLSKeyPackage(e) {
    e(this.mlsSession.GetMarshalledKeyPackage())
  }
  updateMLSExternalSender(e) {
    this.mlsSession.SetExternalSender(e)
  }
  processMLSProposals(e, t) {
    let n = this.mlsSession.ProcessProposals(e, this.getRecognizedUserIDs());
    n && t(n)
  }
  prepareMLSCommitTransition(e, t, n) {
    let r = this.mlsSession.ProcessCommit(t),
      i = null != r.rosterUpdate;
    i && this.prepareSecureFramesRatchets(e, this.mlsSession.GetProtocolVersion()), r.ignored || n(i, this.mlsSession.GetProtocolVersion(), r.rosterUpdate)
  }
  processMLSWelcome(e, t, n) {
    let r = this.mlsSession.ProcessWelcome(t, this.getRecognizedUserIDs()),
      i = null != r;
    r && this.prepareSecureFramesRatchets(e, this.mlsSession.GetProtocolVersion()), n(i, this.mlsSession.GetProtocolVersion(), r)
  }
  setupEncryptionWorker() {
    let e = new Worker(new URL("/assets/" + n.u("52584"), n.b), Object.assign({}, {
      name: "encryption-worker"
    }, {
      type: true
    }));
    return e.onmessage = e => {
      let {
        data: t
      } = e;
      t.type === s.h5.PROTOCOL_VERSION_CHANGED ? (this.currentEncryptorProtocolVersion = t.protocolVersion, this.onSecureFramesStateChanged()) : this.logger.warn("Unknown message type from encryption worker", t)
    }, e.onerror = e => {
      this.logger.error("Encryption worker error", e)
    }, e.onmessageerror = e => {
      this.logger.error("Encryption worker message error", e)
    }, e.postMessage({
      type: s.lA.INITIALIZE
    }), e
  }
  getRecognizedUserIDs() {
    return Array.from(this.recognizedUserIds).concat([this.userId])
  }
  makeUserKeyRatchet(e, t) {
    return t === this.dave.kDisabledVersion ? null : this.mlsSession.GetKeyRatchet(e)
  }
  setupEncodedTransforms(e) {
    if ("transform" in e) e.transform = new RTCRtpScriptTransform(this.encryptionWorker, {});
    else if ("createEncodedStreams" in e) {
      let {
        readable: t,
        writable: n
      } = e.createEncodedStreams();
      this.encryptionWorker.postMessage({
        type: s.lA.RTC_TRANSFORM,
        readable: t,
        writable: n
      }, [t, n])
    } else throw Error("Encoded transforms not supported")
  }
  setupKeyRatchetForUser(e, t, n) {
    let r = this.makeUserKeyRatchet(e, t);
    this.encryptionWorker.postMessage({
      type: s.lA.SET_KEY_RATCHET,
      userId: e,
      operation: n,
      protocolVersion: t,
      keyRatchet: r
    })
  }
  prepareSecureFramesRatchets(e, t) {
    for (let e of this.getRecognizedUserIDs()) e !== this.userId && this.setupKeyRatchetForUser(e, t, s.jU.DECRYPT);
    e === this.dave.kInitTransitionId ? (this.setupKeyRatchetForUser(this.userId, t, s.jU.ENCRYPT), this.onSecureFramesStateChanged()) : this.secureFramesTransitions.set(e, t), this.latestPreparedTransitionVersion = t
  }
  onSecureFramesStateChanged() {
    var e;
    let t = {
      version: null != (e = this.currentEncryptorProtocolVersion) ? e : this.dave.kDisabledVersion,
      epochAuthenticator: ""
    };
    if (t.version !== this.dave.kDisabledVersion) {
      let e = this.mlsSession.GetLastEpochAuthenticator();
      t.epochAuthenticator = o.from(e).toString("base64")
    }(null == this.lastSecureFramesStateUpdate || this.lastSecureFramesStateUpdate.version !== t.version || this.lastSecureFramesStateUpdate.epochAuthenticator !== t.epochAuthenticator) && (this.logger.info("DAVE protocol state update: ".concat(JSON.stringify(t))), this.emit(a.yq.SecureFramesUpdate, t), this.lastSecureFramesStateUpdate = t)
  }
  constructor(e, t, n) {
    super(), l(this, "logger", true), l(this, "dave", true), l(this, "transientKeys", true), l(this, "mlsSession", true), l(this, "encryptionWorker", true), l(this, "userId", true), l(this, "currentEncryptorProtocolVersion", 0), l(this, "recognizedUserIds", new Set), l(this, "secureFramesTransitions", new Map), l(this, "latestPreparedTransitionVersion", 0), l(this, "lastSecureFramesStateUpdate", null), this.logger = new i.Vy("DaveSessionManager"), this.dave = e, this.transientKeys = t, this.userId = n;
    const r = "",
      s = "";
    this.mlsSession = new e.Session(r, s, (e, t) => {
      this.emit(a.yq.MLSFailure, e, t)
    }), this.encryptionWorker = this.setupEncryptionWorker()
  }
}