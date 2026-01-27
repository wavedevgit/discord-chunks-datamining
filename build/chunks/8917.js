/** Chunk was on web.js **/
/** chunk id: 8917, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => U
}), require("./927092.js"), require("./212978.js"), require("./834879.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./65821.js"), require("./492834.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk562465 = require("./562465.js"),
  Chunk823598 = require("./823598.js"),
  Chunk201327 = require("./201327.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk253932 = require("./253932.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652896 = require("./652896.js"),
  Chunk502075 = require("./502075.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");
let A = 3e5,
  I = 6e4,
  S = new Chunk451988.Ep,
  T = false,
  C = window.document.createElement("canvas"),
  N = 512,
  w = 288;
C.width = 512, C.height = w;
let R = C.getContext("2d");

function P() {
  S.stop(), null != r && (r = null)
}
let D = s().debounce((e, t, n, r) => {
  x(e, (0, y._z)({
    streamType: null != t ? b.U4.GUILD : b.U4.CALL,
    guildId: t,
    channelId: n,
    ownerId: r
  }))
}, 500);

function L(e) {
  let t = Math.min(N / e.width, w / e.height),
    n = e.width * t,
    r = e.height * t;
  C.width = n, C.height = r;
  let i = window.document.createElement("canvas"),
    a = i.getContext("2d");
  i.width = e.width, i.height = e.height;
  let o = new ImageData(e.data, e.width, e.height);
  null == a || a.putImageData(o, 0, 0), null == R || R.drawImage(i, 0, 0, e.width, e.height, 0, 0, n, r)
}
async function x(e, t) {
  if (r !== e || (0, g.isWeb)() && _.uh.getSetting() || h.A.getIsActiveStreamPreviewDisabled(t)) return;
  let n = () => x(e, t);
  if (!T) try {
    let n = await M(e, 60);
    L(n);
    let r = C.toDataURL("image/jpeg");
    if (f.h.dispatch({
        type: "STREAM_PREVIEW_FETCH_SUCCESS",
        streamKey: t,
        previewURL: r
      }), g.isPlatformEmbedded) {
      let e = m.default.getToken();
      a()(null != e, "Auth token was null while sending screenshot."), await E.Ay.makeChunkedRequest(O.Rsh.STREAM_PREVIEW(t), {
        thumbnail: r
      }, {
        method: "POST",
        token: e
      })
    } else await l.Bo.post({
      url: O.Rsh.STREAM_PREVIEW(t),
      body: {
        thumbnail: r
      },
      oldFormErrors: true,
      rejectWithError: false
    })
  } catch (t) {
    new p.A("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t), r === e && S.start(I, n);
    return
  }
  r === e && (T ? S.start(I, n) : S.start(A, n))
}

function M(e, t) {
  let n = 0;
  return (g.isPlatformEmbedded ? k : j)(e, e => {
    if (new Uint32Array(e.data.buffer).some(e => 0 !== e)) returntrue;
    if (++n > t) throw Error("Timed out awaiting non-black frame after ".concat(t, " frames"));
    returnfalse
  })
}

function j(e, t) {
  let n = (0, u.yL)(e);
  if (null == n) return Promise.resolve(new ImageData(0, 0));
  let {
    width: r,
    height: i
  } = n.getVideoTracks()[0].getSettings(), a = document.createElement("video"), o = document.createElement("canvas");
  a.width = o.width = null != r ? r : N, a.height = o.height = null != i ? i : w, a.srcObject = n, a.play();
  let s = o.getContext("2d");
  return new Promise((e, n) => {
    a.ontimeupdate = () => {
      null == s || s.drawImage(a, 0, 0, o.width, o.height);
      let r = null == s ? true : s.getImageData(0, 0, o.width, o.height);
      try {
        null != r && t(r) && e(r)
      } catch (e) {
        n(e)
      }
    }
  }).finally(() => {
    a.ontimeupdate = null, a.removeAttribute("srcObject"), a.load()
  })
}

function k(e, t) {
  let n = (0, c.lE)();
  return new Promise((i, a) => {
    let o = e => {
      try {
        null != e && t(e) && i(e)
      } catch (e) {
        a(e)
      }
    };
    n.getNextVideoOutputFrame(e).then(o, t => {
      if (r === e) throw t
    })
  })
}
let U = {
  init() {
    f.h.subscribe("CONNECTION_OPEN", P), f.h.subscribe("LOGOUT", P), f.h.subscribe("STREAM_DELETE", P), f.h.subscribe("RTC_CONNECTION_VIDEO", e => {
      let {
        guildId: t,
        channelId: n,
        userId: i,
        streamId: a,
        context: o
      } = e;
      null == a || o !== v.x.STREAM || i !== m.default.getId() || __OVERLAY__ || (P(), r = a, D(a, t, n, i))
    }), f.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
      let {
        videoState: t
      } = e;
      T = t === O.uPF.PAUSED
    })
  }
}