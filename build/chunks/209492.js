/** Chunk was on web.js **/
/** chunk id: 209492, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  S: () => h,
  j: () => g
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk893988 = require("./893988.js"),
  Chunk314897 = require("./314897.js"),
  Chunk417363 = require("./417363.js"),
  Chunk780570 = require("./780570.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");

function _() {
  if (null == r) throw Error("Initialize cloud sync module before syncing.");
  return r
}

function m() {
  return d.isPlatformEmbedded && ((0, d.isMac)() || (0, d.isWindows)() && "arm64" !== f.ZP.architecture)
}
async function h() {
  if (null == r) {
    if (!m()) return void new o.Z("CloudSyncUtils").warn("CloudSync is not supported on this platform");
    await f.ZP.ensureModule("discord_cloudsync"), (r = new(f.ZP.getCloudSync())).on("state", e => a.Z.dispatch({
      type: "GAME_CLOUD_SYNC_UPDATE",
      state: e
    }))
  }
}

function g(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  if (!c.Z.supportsCloudSync(e, t)) return Promise.resolve({
    type: p.QCD.NONE
  });
  let a = _(),
    o = c.Z.getState(e, t);
  if (null == o) throw Error("No dispatch state for ".concat(e, ":").concat(t));
  let d = null != (n = o.storage) ? n : {},
    f = (0, u.Tu)(e, t),
    m = l.default.getToken();
  if (null == m) throw Error("Cannot use cloud sync when not authenticated.");
  let h = null != o.installPath ? (0, s.Z)(o.installPath) : null;
  if (null == h) throw Error("No install path for ".concat(e, ":").concat(t));
  let g = l.default.getId(),
    E = {
      forceHash: r,
      manifestPath: p.SRg.STORAGE_MANIFEST(h, g),
      roots: null != d.roots ? d.roots : [{
        id: p.SRg.ROOT_ID,
        paths: Object.keys(p.SRg.ROOT_PLATFORMS).map(e => ({
          platform: e,
          path: p.SRg.ROOT_STORAGE_PATH(h, g)
        })),
        patterns: p.SRg.ROOT_PATTERN
      }],
      storage: {
        baseURL: "".concat((0, i.K0)()).concat(p.ANM.APPLICATION_STORAGE(e, t)),
        token: m
      },
      replacements: {
        INSTALLDIR: p.SRg.INSTALL_DIR(h),
        USERID: g,
        BRANCHID: t
      }
    };
  return a.sync(f, E)
}