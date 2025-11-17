/** Chunk was on 1272 **/
/** chunk id: 269089, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk570140 = require("./570140.js"),
  Chunk765250 = require("./765250.js"),
  Chunk317770 = require("./317770.js"),
  Chunk7291 = require("./7291.js"),
  Chunk663993 = require("./663993.js"),
  Chunk355863 = require("./355863.js"),
  Chunk788983 = require("./788983.js"),
  Chunk981631 = require("./981631.js"),
  Chunk757744 = require("./757744.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./966117.js");
let h = (0, Chunk663993.Un)({
    createPromise: () => require.e("80960").then(require.bind(require, 223455)),
    webpackId: 223455,
    name: "PopoutWindowChannelCall"
  }),
  g = (0, Chunk663993.Un)({
    createPromise: () => require.e("31688").then(require.bind(require, 205557)),
    webpackId: 205557,
    name: "PopoutWindowCallTile"
  }),
  m = (0, Chunk663993.Un)({
    createPromise: () => require.e("20176").then(require.bind(require, 432472)),
    webpackId: 432472,
    name: "PopoutWindowStageChannelCall"
  }),
  _ = (0, Chunk663993.Un)({
    createPromise: () => require.e("80960").then(require.bind(require, 945778)),
    webpackId: 945778,
    name: "PopoutWindowRTCDebug"
  }),
  b = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("50751"), require.e("27278")]).then(require.bind(require, 748623)),
    webpackId: 748623,
    name: "PopoutWindowActivity"
  });
class E extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), Chunk570140.Z.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout), Chunk570140.Z.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout), Chunk570140.Z.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout), this.initializeStyleSheetObserver()
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), Chunk570140.Z.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout), Chunk570140.Z.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout), Chunk570140.Z.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout), this.terminateStyleSheetObserver()
  }
  handleOpenChannelCallPopout(e) {
    let {
      channel: t
    } = e;
    u.bA(d.KJ3.CHANNEL_CALL_POPOUT, e => t.isGuildStageVoice() ? (0, r.jsx)(m, {
      windowKey: e,
      channelId: t.id
    }) : (0, r.jsx)(h, {
      windowKey: e,
      channelId: t.id
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
  initializeStyleSheetObserver() {
    this._observer = new MutationObserver(function(e) {
      for (let t of e)
        if ("childList" === t.type) {
          for (let e of t.addedNodes)
            if (e.nodeType === Node.ELEMENT_NODE && "LINK" === e.tagName && "stylesheet" === e.rel) {
              let t = e.href,
                n = e.integrity;
              u.YS(t, n)
            }
        }
    }), this._observer.observe(document.head, {
      childList: true
    })
  }
  terminateStyleSheetObserver() {
    null != this._observer && (this._observer.disconnect(), this._observer = null)
  }
  handleOpenRTCDebugPopout() {
    Chunk788983.bA(Chunk981631.KJ3.RTC_DEBUG_POPOUT, e => (0, r.jsx)(_, {
      windowKey: e
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
  handleOpenActivityPopout() {
    (0, Chunk765250.te)(Chunk757744.$S, Chunk355863.Z.getDefaultLayout(Chunk757744.$S, Chunk757744.HN), Chunk757744.HN), Chunk788983.bA(Chunk981631.KJ3.ACTIVITY_POPOUT, e => (0, r.jsx)(b, {
      windowKey: e
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
  constructor(...e) {
    super(...e), f(this, "_observer", null), f(this, "handleOpenCallTilePopout", e => {
      let {
        channelId: t,
        participantId: n
      } = e, i = (0, s.Z)(t, n);
      u.bA(i, e => (0, r.jsx)(g, {
        windowKey: e,
        channelId: t,
        participantId: n
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    })
  }
}
let O = new E