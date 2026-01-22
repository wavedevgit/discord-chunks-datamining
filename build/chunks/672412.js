/** Chunk was on 77639 **/
/** chunk id: 672412, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./321073.js"), require("./65821.js"), require("./492834.js");
var Chunk626584 = require("./626584.js"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk274372 = require("./274372.js"),
  Chunk572164 = require("./572164.js"),
  Chunk846126 = require("./846126.js"),
  Chunk464414 = require("./464414.js");

function u(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      o = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), o.forEach(function(t) {
      u(e, t, a[t])
    })
  }
  return e
}
let h = new Chunk626584.A("MLNativeModuleManager"),
  p = new class {
    start(e, t) {
      this.onMLResult = e, this.onMLModuleLoaded = t, h.info("ML signal manager started"), (0, r.TD)() && (h.info("Clips enabled on startup, initializing ML module"), this.maybeSetupMLModulePrefetchModels())
    }
    stop() {
      this.onMLResult = null, this.onMLModuleLoaded = null, this.activeDownloads.clear(), h.info("ML signal manager stopped")
    }
    getNativeModuleState() {
      return this.state.nativeMLModuleState
    }
    getModelState(e) {
      return this.state.modelState[e]
    }
    getMLModels() {
      return this.state.models
    }
    isNativeModuleLoaded() {
      return this.state.nativeMLModuleState === d.Q.LOADED
    }
    isNativeModuleLoading() {
      return this.state.nativeMLModuleState === d.Q.LOADING
    }
    async maybeSetupMLModulePrefetchModels() {
      if (!(this.isNativeModuleLoaded() || this.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!((0, l.isWindows)() || (0, l.isMac)())) {
          this.state.nativeMLModuleState = d.Q.UNSUPPORTED;
          return
        }
        try {
          this.state.nativeMLModuleState = d.Q.LOADING, await this.refreshMLCatalog(), await this.prefetchMLModels(), await this.loadMLNativeModule()
        } catch (e) {
          h.warn("Failed to load Clips ML module: ".concat(e.message)), this.state.nativeMLModuleState = d.Q.FAILED
        }
      }
    }
    async loadMLNativeModule() {
      try {
        var e, t, a;
        await n.Ay.ensureModule("discord_ml");
        let o = n.Ay.requireModule("discord_ml");
        await o.setupResources(), await o.setMLResultCallback(e => {
          let t;
          try {
            t = JSON.parse(e)
          } catch (e) {
            h.warn("Failed to parse ML result: ".concat(e.message));
            return
          }
          "string" == typeof t.type && null != t.payload && null != this.onMLResult && this.onMLResult({
            type: t.type,
            payload: t.payload
          })
        }), null == (t = this.onMLModuleLoaded) || t.call(this), this.state.nativeMLModuleState = d.Q.LOADED;
        let l = i.A.getMediaEngine();
        l.setClipsMLPipelineEnabled(true);
        let r = null != (e = null == (a = s.A.getSettings()) ? true : a.mlPipelinesEnabled) ? e : {
          emotionClassifier: true,
          wakeWordDetector: true,
          yellDetector: true,
          whisperTranscription: true
        };
        l.setClipsMLPipelineTypeEnabled("emotion_classifier", r.emotionClassifier), l.setClipsMLPipelineTypeEnabled("wake_word_detector", r.wakeWordDetector), l.setClipsMLPipelineTypeEnabled("yell_detector", r.yellDetector), l.setClipsMLPipelineTypeEnabled("whisper_transcription", r.whisperTranscription), h.info("ML native module loaded successfully")
      } catch (e) {
        h.warn("Failed to load Clips ML module: ".concat(e.message)), this.state.nativeMLModuleState = d.Q.FAILED
      }
    }
    async refreshMLCatalog() {
      if (!this.mlCatalogRefreshing) try {
        this.mlCatalogRefreshing = true;
        let e = await this.loadMLCatalog();
        null == this.state.catalogLastFetchTime && await this.scanModelState(e), this.state.models = e.models, this.state.catalogLastFetchTime = new Date, this.state.catalogFetchFailed = false, h.info("ML catalog refreshed successfully")
      } catch (e) {
        h.warn("Failed to refresh Clips ML catalog: ".concat(e.message)), this.state.catalogFetchFailed = true
      } finally {
        this.mlCatalogRefreshing = false
      }
    }
    loadMLCatalog() {
      let e = {
        version: "1.0.0",
        models: {}
      };
      for (let [t, a] of c.Xg) e.models[t] = {
        url: "https://cdn.discordapp.com/assets/content/".concat(a, ".onnx"),
        version: "1.0.0"
      };
      return h.info("Loaded mock ML catalog with models:", Object.keys(e.models)), Promise.resolve(e)
    }
    async scanModelState(e) {
      if (!n.Ay.canCheckMLModelFilesExist()) return;
      let t = Object.keys(e.models).map(e => ({
        id: e,
        fileName: e
      }));
      for (let {
          id: e,
          exists: a
        }
        of(await n.Ay.checkMLModelFilesExist(t))) this.state.modelState[e] = {
        status: a ? d.D.DOWNLOADED : d.D.MISSING
      }
    }
    async prefetchMLModels() {
      if (__OVERLAY__) return;
      let e = this.state.models,
        t = [];
      for (let [a, o] of Object.entries(e)) {
        let e = this.state.modelState[a];
        (null == e ? true : e.status) !== d.D.DOWNLOADED && (null == e ? true : e.status) !== d.D.DOWNLOADING && t.push(this.downloadMLModel({
          modelId: a,
          url: o.url,
          fileName: a
        }))
      }
      h.info("Waiting for ML model downloads", t), await Promise.all(t), h.info("Finished downloading all ML models")
    }
    downloadMLModel(e) {
      let {
        url: t,
        modelId: a,
        fileName: o
      } = e, i = this.state.modelState[a], l = this.activeDownloads.get(a);
      if (null != l) return l;
      if ((null == i ? true : i.status) === d.D.DOWNLOADED) return Promise.resolve();
      if ((null == i ? true : i.status) === d.D.DOWNLOADING) return Promise.reject(Error("ML model is downloading but not in active downloads map"));
      this.state.modelState[a] = {
        status: d.D.DOWNLOADING,
        downloadedBytes: 0
      };
      let s = n.Ay.downloadMLModelFile(t, o, e => {
        var t, o;
        let {
          downloadedBytes: i,
          totalBytes: l
        } = e;
        this.state.modelState[a] = (t = f({}, this.state.modelState[a]), o = o = {
          downloadedBytes: i,
          totalBytes: l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a.push.apply(a, o)
          }
          return a
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
        }), t)
      }).then(e => {
        e.fetchedFromNetwork && h.info("Downloaded ML model from network:", a), this.state.modelState[a] = {
          status: d.D.DOWNLOADED,
          downloadedBytes: true
        }
      }).catch(t => {
        (null == t ? true : t.USER_CANCELED_DOWNLOAD) ? h.info("User canceled the download for ML model", e): h.error("Failed to download ML model", f({
          reason: t
        }, e)), this.state.modelState[a] = {
          status: d.D.MISSING
        }
      }).finally(() => {
        this.activeDownloads.delete(a)
      });
      return this.activeDownloads.set(a, s), s
    }
    constructor() {
      u(this, "state", {
        nativeMLModuleState: d.Q.UNINITIALIZED,
        models: {},
        modelState: {},
        catalogLastFetchTime: true,
        catalogFetchFailed: false
      }), u(this, "activeDownloads", new Map), u(this, "mlCatalogRefreshing", false), u(this, "onMLResult", null), u(this, "onMLModuleLoaded", null)
    }
  }