/** Chunk was on web.js **/
/** chunk id: 51025, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A1: () => C,
  LO: () => y,
  S1: () => E,
  Wx: () => P,
  XT: () => w,
  al: () => N,
  cG: () => O,
  li: () => I,
  ob: () => b,
  pC: () => S,
  v4: () => T,
  wO: () => A,
  wi: () => R
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk812206 = require("./812206.js"),
  Chunk594190 = require("./594190.js"),
  Chunk703656 = require("./703656.js"),
  Chunk695346 = require("./695346.js"),
  Chunk391690 = require("./391690.js"),
  Chunk626135 = require("./626135.js"),
  Chunk129542 = require("./129542.js"),
  Chunk877481 = require("./877481.js"),
  Chunk830168 = require("./830168.js"),
  Chunk57513 = require("./57513.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let g = 64;

function E(e, t) {
  _.Z.init({
    userToken: e,
    userId: t,
    installPaths: c.Z.installationPaths,
    platform: (0, d.D)(),
    stateCallback: e => {
      i.Z.dispatch({
        type: "DISPATCH_APPLICATION_STATE_UPDATE",
        state: e
      })
    },
    errorCallback: e => {
      i.Z.dispatch({
        type: "DISPATCH_APPLICATION_ERROR",
        error: e
      })
    }
  })
}

function b() {
  Chunk830168.Z.destroy()
}

function y(e) {
  let {
    application: t,
    branchId: n,
    buildId: r,
    manifestIds: a,
    installationPath: o,
    analyticsLocation: s
  } = e;
  _.Z.setTargetManifest({
    applicationId: t.id,
    applicationName: t.name,
    applicationIcon: t.icon,
    branchId: n,
    buildId: r,
    manifestIds: a,
    installationPath: o
  }), i.Z.dispatch({
    type: "DISPATCH_APPLICATION_INSTALL",
    applicationId: t.id,
    branchId: n,
    installationPath: o
  }), u.default.track(h.rMx.LIBRARY_INSTALL_INITIATED, {
    application_id: t.id,
    application_name: t.name,
    sku_id: t.primarySkuId,
    location: s
  })
}

function O(e, t, n) {
  (0, p.l)(e.id, t).then(() => {
    i.Z.dispatch({
      type: "DISPATCH_APPLICATION_REPAIR",
      applicationId: e.id,
      branchId: t
    })
  }), u.default.track(h.rMx.LIBRARY_REPAIR_INITIATED, {
    application_id: e.id,
    application_name: e.name,
    sku_id: e.primarySkuId,
    location: n
  })
}

function v(e, t, n, r) {
  if (o.ZP.getRunningDiscordApplicationIds().includes(e.id)) return;
  let i = c.Z.getInstallationPath(e.id, t);
  if (null == i) throw Error("Missing installation path for application: ".concat(e.id, " ").concat(t));
  _.Z.setTargetManifest({
    applicationId: e.id,
    applicationName: e.name,
    applicationIcon: e.icon,
    branchId: t,
    buildId: n,
    manifestIds: r,
    installationPath: i
  })
}

function I(e, t, n, r) {
  let a = arguments.length > 4 && true !== arguments[4] && arguments[4];
  v(e, t, n, r), i.Z.dispatch({
    type: "DISPATCH_APPLICATION_UPDATE",
    applicationId: e.id,
    branchId: t,
    automatic: a
  })
}

function S(e, t, n) {
  let r = a.Z.getApplication(e);
  null != r && (f.Z.removeShortcuts(r.name), u.default.track(h.rMx.LIBRARY_UNINSTALL_INITIATED, {
    application_id: r.id,
    application_name: r.name,
    sku_id: r.primarySkuId,
    location: n
  })), _.Z.uninstall(e, t), i.Z.dispatch({
    type: "DISPATCH_APPLICATION_UNINSTALL",
    applicationId: e,
    branchId: t
  })
}

function T() {
  Chunk830168.Z.resume()
}

function A() {
  Chunk830168.Z.pause()
}

function C(e, t) {
  i.Z.dispatch({
    type: "DISPATCH_APPLICATION_MOVE_UP",
    applicationId: e,
    branchId: t
  })
}

function N(e, t) {
  _.Z.cancel(e, t), i.Z.dispatch({
    type: "DISPATCH_APPLICATION_CANCEL",
    applicationId: e,
    branchId: t
  })
}

function R(e, t) {
  i.Z.dispatch({
    type: "DISPATCH_APPLICATION_REMOVE_FINISHED",
    applicationId: e,
    branchId: t
  })
}

function P(e, t) {
  let n = a.Z.getApplication(e);
  null != n && f.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), n.name, n.id, t.installPath)
}

function w(e, t) {
  let i = a.Z.getApplication(e);
  r.tn.post({
    url: h.ANM.LIBRARY_APPLICATION_INSTALLED(e, e),
    oldFormErrors: true,
    rejectWithError: true
  }), null != i && (f.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), i.name, i.id, t.installPath), Promise.resolve().then(n.bind(n, 292556)).then(e => {
    let {
      default: t
    } = e;
    t.showNotification(i.getIconURL(g), m.intl.string(m.t["1wR7yI"]), m.intl.formatToPlainString(m.t["89VAgW"], {
      name: i.name
    }), {
      notif_type: "Game Library Game Installed"
    }, {
      onClick: () => (0, s.uL)(h.Z5c.APPLICATION_LIBRARY),
      omitViewTracking: true,
      isUserAvatar: false
    })
  }))
}