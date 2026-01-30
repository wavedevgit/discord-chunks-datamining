/** Chunk was on web.js **/
/** chunk id: 101306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => m
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk436283 = require("./436283.js"),
  Chunk954571 = require("./954571.js"),
  Chunk490203 = require("./490203.js"),
  Chunk49807 = require("./49807.jsx"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = "interaction_iframe_modal";
async function d(e) {
  let {
    openInteractionModal: t
  } = await Promise.all([n.e("28936"), n.e("13088"), n.e("92414"), n.e("49559"), n.e("89488")]).then(n.bind(n, 121338));
  t(e), a.default.track(l.HAw.OPEN_MODAL, {
    type: "interaction_modal",
    application_id: e.application.id
  })
}

function f(e) {
  (0, s.A)(e), a.default.track(l.HAw.OPEN_MODAL, {
    type: u,
    application_id: e.application.id
  })
}

function p(e) {
  let {
    application: t
  } = e, n = i.Ay.getIFrameModalApplicationId(), r = i.Ay.getIFrameModalKey();
  t.id === n && null != n && (0, o.A)(n, r)
}

function _(e, t) {
  let n = null != t ? Date.now() - t : true;
  a.default.track(l.HAw.MODAL_DISMISSED, {
    type: u,
    application_id: e.applicationId,
    duration_open_ms: n
  })
}
class h extends Chunk439372.A {
  constructor(...e) {
    super(...e), c(this, "iframeModalOpenTimeMs", true), c(this, "actions", {
      INTERACTION_MODAL_CREATE: e => {
        d(e)
      },
      INTERACTION_IFRAME_MODAL_CREATE: e => {
        this.iframeModalOpenTimeMs = Date.now(), f(e)
      },
      INTERACTION_IFRAME_MODAL_CLOSE: e => {
        _(e, this.iframeModalOpenTimeMs), this.iframeModalOpenTimeMs = true
      },
      RPC_APP_DISCONNECTED: e => {
        p(e)
      }
    })
  }
}
let m = new h