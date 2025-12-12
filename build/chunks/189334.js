/** Chunk was on web.js **/
/** chunk id: 189334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk282397 = require("./282397.js"),
  Chunk626135 = require("./626135.js"),
  Chunk131595 = require("./131595.js"),
  Chunk475774 = require("./475774.jsx"),
  Chunk981631 = require("./981631.js");

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
  } = await n.e("31453").then(n.bind(n, 440934));
  t(e), a.default.track(l.rMx.OPEN_MODAL, {
    type: "interaction_modal",
    application_id: e.application.id
  })
}

function f(e) {
  (0, s.Z)(e), a.default.track(l.rMx.OPEN_MODAL, {
    type: u,
    application_id: e.application.id
  })
}

function p(e) {
  let {
    application: t
  } = e, n = i.ZP.getIFrameModalApplicationId(), r = i.ZP.getIFrameModalKey();
  t.id === n && null != n && (0, o.Z)(n, r)
}

function _(e, t) {
  let n = null != t ? Date.now() - t : true;
  a.default.track(l.rMx.MODAL_DISMISSED, {
    type: u,
    application_id: e.applicationId,
    duration_open_ms: n
  })
}
class m extends Chunk147913.Z {
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
let h = new m