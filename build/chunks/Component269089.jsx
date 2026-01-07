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
require("./101713.js");
let g = (0, Chunk663993.Un)({
    createPromise: () => n.e("80960").then(n.bind(n, 223455)),
    webpackId: 223455,
    name: "PopoutWindowChannelCall"
  }),
  m = (0, Chunk663993.Un)({
    createPromise: () => n.e("31688").then(n.bind(n, 205557)),
    webpackId: 205557,
    name: "PopoutWindowCallTile"
  }),
  h = (0, Chunk663993.Un)({
    createPromise: () => n.e("20176").then(n.bind(n, 432472)),
    webpackId: 432472,
    name: "PopoutWindowStageChannelCall"
  }),
  b = (0, Chunk663993.Un)({
    createPromise: () => n.e("80960").then(n.bind(n, 945778)),
    webpackId: 945778,
    name: "PopoutWindowRTCDebug"
  }),
  _ = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("50751"), n.e("27278")]).then(n.bind(n, 748623)),
    webpackId: 748623,
    name: "PopoutWindowActivity"
  });
class E extends Chunk317770.Z {
  _initialize() {
    i.Z.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), i.Z.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout), i.Z.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout), i.Z.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout), this.initializeStyleSheetObserver()
  }
  _terminate() {
    i.Z.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), i.Z.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout), i.Z.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout), i.Z.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout), this.terminateStyleSheetObserver()
  }
  handleOpenChannelCallPopout(e) {
    let {
      channel: t
    } = e;
    u.open(d.KJ3.CHANNEL_CALL_POPOUT, e => t.isGuildStageVoice() ? (0, r.jsx)(h, {
      windowKey: e,
      channelId: t.id
    }) : (0, r.jsx)(g, {
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
              u.addStylesheet(t, n)
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
    u.open(d.KJ3.RTC_DEBUG_POPOUT, e => (0, r.jsx)(b, {
      windowKey: e
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
  handleOpenActivityPopout() {
    (0, l.te)(p.$S, c.Z.getDefaultLayout(p.$S, p.HN), p.HN), u.open(d.KJ3.ACTIVITY_POPOUT, e => (0, r.jsx)(_, {
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
      } = e, i = (0, o.Z)(t, n);
      u.open(i, e => (0, r.jsx)(m, {
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