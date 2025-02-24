/** Chunk was on 19083 **/
i.d(o, {
  Rl: () => n,
  rk: () => s
});
let n = async e => window.Meticulous?.isRunningAsTest ? (console.debug("Running as part of a Meticulous test case, so skipping loading the Meticulous recorder."), {
  stopRecording: async () => {}
}) : await t(e).catch(e => (console.error(e), {
  stopRecording: async () => {}
})), t = ({
  projectId: e,
  recordingToken: o,
  uploadIntervalMs: i,
  snapshotLinkedStylesheets: n,
  commitHash: t,
  maxMsToBlockFor: s,
  snippetsBaseUrl: r,
  forceRecording: c,
  middleware: d,
  responseSanitizers: l,
  isProduction: u
}) => {
  let a = !1;
  return new Promise((_, E) => {
    let w = s ?? 2e3;
    w > 0 && setTimeout(() => {
      a = !0, _({
        stopRecording: async () => {}
      })
    }, w);
    let p = document.createElement("script");
    p.type = "text/javascript", p.src = new URL("v1/meticulous-manual-init.js", r || "https://snippet.meticulous.ai").href;
    let S = window;
    S.METICULOUS_RECORDING_TOKEN = o ?? e, void 0 !== i && (S.METICULOUS_UPLOAD_INTERVAL_MS = i), void 0 !== t && (S.METICULOUS_APP_COMMIT_HASH = t), void 0 !== n && (S.METICULOUS_SNAPSHOT_LINKED_STYLESHEETS = n), void 0 !== c && (S.METICULOUS_FORCE_RECORDING = c), void 0 !== u && (S.METICULOUS_IS_PRODUCTION_ENVIRONMENT = u), null != l && l.length > 0 && (S.METICULOUS_NETWORK_RESPONSE_SANITIZERS = l), null != d && d.length > 0 && (S.METICULOUS_RECORDER_MIDDLEWARE_V1 = d), p.onload = function() {
      if (a) {
        console.debug("Meticulous snippet abandoned due to max blocking time reached.");
        return
      }
      let e = window.__meticulous?.initialiseRecorder;
      if ("function" != typeof e) {
        E("Meticulous recorder failed to initialise.");
        return
      }
      try {
        e()
      } catch (e) {
        E(e)
      }
      _({
        stopRecording: async () => {
          let e = window.__meticulous?.stopRecording;
          if (!e) throw Error("Recorder not initialised: window.__meticulous.stopRecording is not defined.");
          await e()
        }
      })
    }, p.onerror = () => {
      E("Meticulous recorder failed to initialise.")
    }, document.head.appendChild(p)
  })
}, s = async () => {
  let e = window?.__meticulous?.earlyNetworkRecorder?.dispose;
  e && await e()
}