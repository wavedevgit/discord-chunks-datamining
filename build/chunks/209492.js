/** Chunk was on 6380 **/
/** chunk id: 209492, original params: t,e,n (module,exports,require) **/
let i;
require.d(exports, {
  S: () => f,
  j: () => y
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
async function f() {
  if (null == i) {
    if (!(Chunk358085.isPlatformEmbedded && ((0, Chunk358085.isMac)() || (0, Chunk358085.isWindows)() && "arm64" !== Chunk998502.ZP.architecture))) return void new Chunk710845.Z("CloudSyncUtils").warn("CloudSync is not supported on this platform");
    await Chunk998502.ZP.ensureModule("discord_cloudsync"), (i = new(Chunk998502.ZP.getCloudSync())).on("state", t => l.Z.dispatch({
      type: "GAME_CLOUD_SYNC_UPDATE",
      state: t
    }))
  }
}

function y(t, e) {
  var n;
  let l = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  if (!s.Z.supportsCloudSync(t, e)) return Promise.resolve({
    type: h.QCD.NONE
  });
  let o = function() {
      if (null == i) throw Error("Initialize cloud sync module before syncing.");
      return i
    }(),
    u = s.Z.getState(t, e);
  if (null == u) throw Error("No dispatch state for ".concat(t, ":").concat(e));
  let p = null != (n = u.storage) ? n : {},
    f = (0, d.Tu)(t, e),
    y = c.default.getToken();
  if (null == y) throw Error("Cannot use cloud sync when not authenticated.");
  let C = null != u.installPath ? (0, a.Z)(u.installPath) : null;
  if (null == C) throw Error("No install path for ".concat(t, ":").concat(e));
  let O = c.default.getId(),
    m = {
      forceHash: l,
      manifestPath: h.SRg.STORAGE_MANIFEST(C, O),
      roots: null != p.roots ? p.roots : [{
        id: h.SRg.ROOT_ID,
        paths: Object.keys(h.SRg.ROOT_PLATFORMS).map(t => ({
          platform: t,
          path: h.SRg.ROOT_STORAGE_PATH(C, O)
        })),
        patterns: h.SRg.ROOT_PATTERN
      }],
      storage: {
        baseURL: "".concat((0, r.K0)()).concat(h.ANM.APPLICATION_STORAGE(t, e)),
        token: y
      },
      replacements: {
        INSTALLDIR: h.SRg.INSTALL_DIR(C),
        USERID: O,
        BRANCHID: e
      }
    };
  return o.sync(f, m)
}