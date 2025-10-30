/** Chunk was on 87955 **/
/** chunk id: 431927, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./539854.js"), require("./415506.js"), require("./457542.js");
var Chunk710845 = require("./710845.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk435064 = require("./435064.js"),
  Chunk868010 = require("./868010.js"),
  Chunk323678 = require("./323678.js");

function c(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      o = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), o.forEach(function(t) {
      c(e, t, a[t])
    })
  }
  return e
}
let f = new Chunk710845.Z("MLNativeModuleManager"),
  h = new class {
    start(e, t) {
      this.onMLResult = e, this.onMLModuleLoaded = t, f.info("ML signal manager started"), s.Z.getSettings().clipsEnabled && (f.info("Clips enabled on startup, initializing ML module"), this.maybeSetupMLModulePrefetchModels())
    }
    stop() {
      this.onMLResult = null, this.onMLModuleLoaded = null, this.activeDownloads.clear(), f.info("ML signal manager stopped")
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
          f.warn("Failed to load Clips ML module: ".concat(module.message)), this.state.nativeMLModuleState = Chunk868010.C.FAILED
        }
      }
    }
    async loadMLNativeModule() {
      try {
        var e, t, a;
        await Chunk998502.ZP.ensureModule("discord_ml");
        let o = Chunk998502.ZP.requireModule("discord_ml");
        await Chunk710845.setupResources(), await Chunk710845.setMLResultCallback(e => {
          let t;
          try {
            t = JSON.parse(e)
          } catch (e) {
            f.warn("Failed to parse ML result: ".concat(e.message));
            return
          }
          "string" == typeof t.type && null != t.payload && null != this.onMLResult && this.onMLResult({
            type: t.type,
            payload: t.payload
          })
        }), null == (e = this.onMLModuleLoaded) || module.call(this), this.state.nativeMLModuleState = Chunk868010.C.LOADED;
        let l = Chunk131951.Z.getMediaEngine();
        Chunk358085.setClipsMLPipelineEnabled(true);
        let d = null != (a = null == (t = Chunk435064.Z.getSettings()) ? true : exports.mlPipelinesEnabled) ? require : {
          emotionClassifier: true,
          wakeWordDetector: true,
          yellDetector: true,
          whisperTranscription: true
        };
        Chunk358085.setClipsMLPipelineTypeEnabled("emotion_classifier", Chunk323678.emotionClassifier), Chunk358085.setClipsMLPipelineTypeEnabled("wake_word_detector", Chunk323678.wakeWordDetector), Chunk358085.setClipsMLPipelineTypeEnabled("yell_detector", Chunk323678.yellDetector), Chunk358085.setClipsMLPipelineTypeEnabled("whisper_transcription", Chunk323678.whisperTranscription), f.info("ML native module loaded successfully")
      } catch (e) {
        f.warn("Failed to load Clips ML module: ".concat(module.message)), this.state.nativeMLModuleState = Chunk868010.C.FAILED
      }
    }
    async refreshMLCatalog() {
      if (!this.mlCatalogRefreshing) try {
        this.mlCatalogRefreshing = true;
        let e = await this.loadMLCatalog();
        null == this.state.catalogLastFetchTime && await this.scanModelState(module), this.state.models = module.models, this.state.catalogLastFetchTime = new Date, this.state.catalogFetchFailed = false, f.info("ML catalog refreshed successfully")
      } catch (e) {
        f.warn("Failed to refresh Clips ML catalog: ".concat(module.message)), this.state.catalogFetchFailed = true
      } finally {
        this.mlCatalogRefreshing = false
      }
    }
    loadMLCatalog() {
      let e = {
        version: "1.0.0",
        models: {}
      };
      for (let [t, a] of Chunk323678.lc) module.models[exports] = {
        url: "https://cdn.discordapp.com/assets/content/".concat(require, ".onnx"),
        version: "1.0.0"
      };
      return f.info("Loaded mock ML catalog with models:", Object.keys(module.models)), Promise.resolve(module)
    }
    async scanModelState(e) {
      if (!n.ZP.canCheckMLModelFilesExist()) return;
      let t = Object.keys(e.models).map(e => ({
        id: e,
        fileName: e
      }));
      for (let {
          id: e,
          exists: a
        }
        of(await n.ZP.checkMLModelFilesExist(t))) this.state.modelState[e] = {
        status: a ? r.l.DOWNLOADED : r.l.MISSING
      }
    }
    async prefetchMLModels() {
      if (__OVERLAY__) return;
      let e = this.state.models,
        t = [];
      for (let [a, o] of Object.entries(module)) {
        let e = this.state.modelState[require];
        (null == module ? true : module.status) !== Chunk868010.l.DOWNLOADED && (null == module ? true : module.status) !== Chunk868010.l.DOWNLOADING && exports.push(this.downloadMLModel({
          modelId: require,
          url: Chunk710845.url,
          fileName: require
        }))
      }
      f.info("Waiting for ML model downloads", exports), await Promise.all(exports), f.info("Finished downloading all ML models")
    }
    downloadMLModel(e) {
      let {
        url: t,
        modelId: a,
        fileName: o
      } = e, i = this.state.modelState[a], l = this.activeDownloads.get(a);
      if (null != l) return l;
      if ((null == i ? true : i.status) === r.l.DOWNLOADED) return Promise.resolve();
      if ((null == i ? true : i.status) === r.l.DOWNLOADING) return Promise.reject(Error("ML model is downloading but not in active downloads map"));
      this.state.modelState[a] = {
        status: r.l.DOWNLOADING,
        downloadedBytes: 0
      };
      let s = n.ZP.downloadMLModelFile(t, o, e => {
        var t, o;
        let {
          downloadedBytes: i,
          totalBytes: l
        } = e;
        this.state.modelState[a] = (t = u({}, this.state.modelState[a]), o = o = {
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
        e.fetchedFromNetwork && f.info("Downloaded ML model from network:", a), this.state.modelState[a] = {
          status: r.l.DOWNLOADED,
          downloadedBytes: true
        }
      }).catch(t => {
        (null == t ? true : t.USER_CANCELED_DOWNLOAD) ? f.info("User canceled the download for ML model", e): f.error("Failed to download ML model", u({
          reason: t
        }, e)), this.state.modelState[a] = {
          status: r.l.MISSING
        }
      }).finally(() => {
        this.activeDownloads.delete(a)
      });
      return this.activeDownloads.set(a, s), s
    }
    constructor() {
      c(this, "state", {
        nativeMLModuleState: Chunk868010.C.UNINITIALIZED,
        models: {},
        modelState: {},
        catalogLastFetchTime: true,
        catalogFetchFailed: false
      }), c(this, "activeDownloads", new Map), c(this, "mlCatalogRefreshing", false), c(this, "onMLResult", null), c(this, "onMLModuleLoaded", null)
    }
  }