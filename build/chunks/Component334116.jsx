/** Chunk was on 21738 **/
/** chunk id: 334116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk73153 = require("./73153.js"),
  Chunk391973 = require("./391973.js"),
  Chunk272355 = require("./272355.js"),
  Chunk958005 = require("./958005.js"),
  Chunk268218 = require("./268218.js"),
  Chunk555528 = require("./555528.js"),
  Chunk574172 = require("./574172.js"),
  Chunk652215 = require("./652215.js"),
  Chunk644434 = require("./644434.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./518959.js");
let f = (0, Chunk268218.Fe)({
    createPromise: () => n.e("71138").then(n.bind(n, 140539)),
    webpackId: 140539,
    name: "PopoutWindowChannelCall"
  }),
  g = (0, Chunk268218.Fe)({
    createPromise: () => n.e("36133").then(n.bind(n, 943472)),
    webpackId: 943472,
    name: "PopoutWindowCallTile"
  }),
  m = (0, Chunk268218.Fe)({
    createPromise: () => n.e("36308").then(n.bind(n, 911315)),
    webpackId: 911315,
    name: "PopoutWindowStageChannelCall"
  }),
  A = (0, Chunk268218.Fe)({
    createPromise: () => n.e("71138").then(n.bind(n, 414760)),
    webpackId: 414760,
    name: "PopoutWindowRTCDebug"
  }),
  _ = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("71447"), n.e("13492")]).then(n.bind(n, 860051)),
    webpackId: 860051,
    name: "PopoutWindowActivity"
  });
class b extends Chunk272355.A {
  _initialize() {
    i.h.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), i.h.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout), i.h.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout), i.h.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout), this.initializeStyleSheetObserver()
  }
  _terminate() {
    i.h.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), i.h.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout), i.h.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout), i.h.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout), this.terminateStyleSheetObserver()
  }
  handleOpenChannelCallPopout(e) {
    let {
      channel: t
    } = e;
    u.open(d.MLl.CHANNEL_CALL_POPOUT, e => t.isGuildStageVoice() ? (0, r.jsx)(m, {
      windowKey: e,
      channelId: t.id
    }) : (0, r.jsx)(f, {
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
    u.open(d.MLl.RTC_DEBUG_POPOUT, e => (0, r.jsx)(A, {
      windowKey: e
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
  handleOpenActivityPopout() {
    (0, l.Vz)(p.G, c.A.getDefaultLayout(p.G, 4), 4), u.open(d.MLl.ACTIVITY_POPOUT, e => (0, r.jsx)(_, {
      windowKey: e
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
  constructor(...e) {
    super(...e), h(this, "_observer", null), h(this, "handleOpenCallTilePopout", e => {
      let {
        channelId: t,
        participantId: n
      } = e, i = (0, s.A)(t, n);
      u.open(i, e => (0, r.jsx)(g, {
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
let E = new b