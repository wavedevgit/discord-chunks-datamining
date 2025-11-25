/** Chunk was on 18683 **/
/** chunk id: 686563, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./539854.js"), require("./415506.js"), require("./457542.js");
var Chunk710845 = require("./710845.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk435064 = require("./435064.js"),
  Chunk341569 = require("./341569.js"),
  Chunk868010 = require("./868010.js"),
  Chunk323678 = require("./323678.js");

function u(e, t, o) {
  return t in e ? Object.defineProperty(e, t, {
    value: o,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = o, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(o);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
      return Object.getOwnPropertyDescriptor(o, e).enumerable
    }))), a.forEach(function(t) {
      u(e, t, o[t])
    })
  }
  return e
}
let h = new Chunk710845.Z("MLNativeModuleManager"),
  p = new class {
    start(e, t) {
      this.onMLResult = e, this.onMLModuleLoaded = t, h.info("ML signal manager started"), (0, r.LI)() && (h.info("Clips enabled on startup, initializing ML module"), this.maybeSetupMLModulePrefetchModels())
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
      return this.state.nativeMLModuleState === Chunk868010.C.LOADED
    }
    isNativeModuleLoading() {
      return this.state.nativeMLModuleState === Chunk868010.C.LOADING
    }
    async maybeSetupMLModulePrefetchModels() {
      if (!(this.isNativeModuleLoaded() || this.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!((0, Chunk358085.isWindows)() || (0, Chunk358085.isMac)())) {
          this.state.nativeMLModuleState = Chunk868010.C.UNSUPPORTED;
          return
        }
        try {
          this.state.nativeMLModuleState = Chunk868010.C.LOADING, await this.refreshMLCatalog(), await this.prefetchMLModels(), await this.loadMLNativeModule()
        } catch (e) {
          h.warn("Failed to load Clips ML module: ".concat(module.message)), this.state.nativeMLModuleState = Chunk868010.C.FAILED
        }
      }
    }
    async loadMLNativeModule() {
      try {
        var e, t, o;
        await Chunk998502.ZP.ensureModule("discord_ml");
        let a = Chunk998502.ZP.requireModule("discord_ml");
        await Chunk710845.setupResources(), await Chunk710845.setMLResultCallback(e => {
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
        }), null == (e = this.onMLModuleLoaded) || module.call(this), this.state.nativeMLModuleState = Chunk868010.C.LOADED;
        let l = Chunk131951.Z.getMediaEngine();
        Chunk358085.setClipsMLPipelineEnabled(true);
        let r = null != (o = null == (t = Chunk435064.Z.getSettings()) ? true : exports.mlPipelinesEnabled) ? require : {
          emotionClassifier: true,
          wakeWordDetector: true,
          yellDetector: true,
          whisperTranscription: true
        };
        Chunk358085.setClipsMLPipelineTypeEnabled("emotion_classifier", Chunk341569.emotionClassifier), Chunk358085.setClipsMLPipelineTypeEnabled("wake_word_detector", Chunk341569.wakeWordDetector), Chunk358085.setClipsMLPipelineTypeEnabled("yell_detector", Chunk341569.yellDetector), Chunk358085.setClipsMLPipelineTypeEnabled("whisper_transcription", Chunk341569.whisperTranscription), h.info("ML native module loaded successfully")
      } catch (e) {
        h.warn("Failed to load Clips ML module: ".concat(module.message)), this.state.nativeMLModuleState = Chunk868010.C.FAILED
      }
    }
    async refreshMLCatalog() {
      if (!this.mlCatalogRefreshing) try {
        this.mlCatalogRefreshing = true;
        let e = await this.loadMLCatalog();
        null == this.state.catalogLastFetchTime && await this.scanModelState(module), this.state.models = module.models, this.state.catalogLastFetchTime = new Date, this.state.catalogFetchFailed = false, h.info("ML catalog refreshed successfully")
      } catch (e) {
        h.warn("Failed to refresh Clips ML catalog: ".concat(module.message)), this.state.catalogFetchFailed = true
      } finally {
        this.mlCatalogRefreshing = false
      }
    }
    loadMLCatalog() {
      let e = {
        version: "1.0.0",
        models: {}
      };
      for (let [t, o] of Chunk323678.lc) module.models[exports] = {
        url: "https://cdn.discordapp.com/assets/content/".concat(require, ".onnx"),
        version: "1.0.0"
      };
      return h.info("Loaded mock ML catalog with models:", Object.keys(module.models)), Promise.resolve(module)
    }
    async scanModelState(e) {
      if (!n.ZP.canCheckMLModelFilesExist()) return;
      let t = Object.keys(e.models).map(e => ({
        id: e,
        fileName: e
      }));
      for (let {
          id: e,
          exists: o
        }
        of(await n.ZP.checkMLModelFilesExist(t))) this.state.modelState[e] = {
        status: o ? d.l.DOWNLOADED : d.l.MISSING
      }
    }
    async prefetchMLModels() {
      if (__OVERLAY__) return;
      let e = this.state.models,
        t = [];
      for (let [o, a] of Object.entries(module)) {
        let e = this.state.modelState[require];
        (null == module ? true : module.status) !== Chunk868010.l.DOWNLOADED && (null == module ? true : module.status) !== Chunk868010.l.DOWNLOADING && exports.push(this.downloadMLModel({
          modelId: require,
          url: Chunk710845.url,
          fileName: require
        }))
      }
      h.info("Waiting for ML model downloads", exports), await Promise.all(exports), h.info("Finished downloading all ML models")
    }
    downloadMLModel(e) {
      let {
        url: t,
        modelId: o,
        fileName: a
      } = e, i = this.state.modelState[o], l = this.activeDownloads.get(o);
      if (null != l) return l;
      if ((null == i ? true : i.status) === d.l.DOWNLOADED) return Promise.resolve();
      if ((null == i ? true : i.status) === d.l.DOWNLOADING) return Promise.reject(Error("ML model is downloading but not in active downloads map"));
      this.state.modelState[o] = {
        status: d.l.DOWNLOADING,
        downloadedBytes: 0
      };
      let s = n.ZP.downloadMLModelFile(t, a, e => {
        var t, a;
        let {
          downloadedBytes: i,
          totalBytes: l
        } = e;
        this.state.modelState[o] = (t = f({}, this.state.modelState[o]), a = a = {
          downloadedBytes: i,
          totalBytes: l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var o = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            o.push.apply(o, a)
          }
          return o
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
        }), t)
      }).then(e => {
        e.fetchedFromNetwork && h.info("Downloaded ML model from network:", o), this.state.modelState[o] = {
          status: d.l.DOWNLOADED,
          downloadedBytes: true
        }
      }).catch(t => {
        (null == t ? true : t.USER_CANCELED_DOWNLOAD) ? h.info("User canceled the download for ML model", e): h.error("Failed to download ML model", f({
          reason: t
        }, e)), this.state.modelState[o] = {
          status: d.l.MISSING
        }
      }).finally(() => {
        this.activeDownloads.delete(o)
      });
      return this.activeDownloads.set(o, s), s
    }
    constructor() {
      u(this, "state", {
        nativeMLModuleState: Chunk868010.C.UNINITIALIZED,
        models: {},
        modelState: {},
        catalogLastFetchTime: true,
        catalogFetchFailed: false
      }), u(this, "activeDownloads", new Map), u(this, "mlCatalogRefreshing", false), u(this, "onMLResult", null), u(this, "onMLModuleLoaded", null)
    }
  }