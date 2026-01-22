/** Chunk was on web.js **/
/** chunk id: 986120, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  E: () => g,
  T: () => m
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk606076 = require("./606076.js"),
  Chunk961350 = require("./961350.js"),
  Chunk194871 = require("./194871.js"),
  Chunk674378 = require("./674378.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js");

function _() {
  if (null == r) throw Error("Initialize cloud sync module before syncing.");
  return r
}

function h() {
  return d.isPlatformEmbedded && ((0, d.isMac)() || (0, d.isWindows)() && "arm64" !== f.Ay.architecture)
}
async function m() {
  null != r || (h() ? (await f.Ay.ensureModule("discord_cloudsync"), (r = new(f.Ay.getCloudSync())).on("state", e => a.h.dispatch({
    type: "GAME_CLOUD_SYNC_UPDATE",
    state: e
  }))) : new s.A("CloudSyncUtils").warn("CloudSync is not supported on this platform"))
}

function g(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  if (!c.A.supportsCloudSync(e, t)) return Promise.resolve({
    type: p.R_U.NONE
  });
  let a = _(),
    s = c.A.getState(e, t);
  if (null == s) throw Error("No dispatch state for ".concat(e, ":").concat(t));
  let d = null != (n = s.storage) ? n : {},
    f = (0, u.gW)(e, t),
    h = l.default.getToken();
  if (null == h) throw Error("Cannot use cloud sync when not authenticated.");
  let m = null != s.installPath ? (0, o.A)(s.installPath) : null;
  if (null == m) throw Error("No install path for ".concat(e, ":").concat(t));
  let g = l.default.getId(),
    E = {
      forceHash: r,
      manifestPath: p.gkb.STORAGE_MANIFEST(m, g),
      roots: null != d.roots ? d.roots : [{
        id: p.gkb.ROOT_ID,
        paths: Object.keys(p.gkb.ROOT_PLATFORMS).map(e => ({
          platform: e,
          path: p.gkb.ROOT_STORAGE_PATH(m, g)
        })),
        patterns: p.gkb.ROOT_PATTERN
      }],
      storage: {
        baseURL: "".concat((0, i.TP)()).concat(p.Rsh.APPLICATION_STORAGE(e, t)),
        token: h
      },
      replacements: {
        INSTALLDIR: p.gkb.INSTALL_DIR(m),
        USERID: g,
        BRANCHID: t
      }
    };
  return a.sync(f, E)
}