/** Chunk was on web.js **/
/** chunk id: 766646, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => U
}), require("./259475.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./415506.js"), require("./457542.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk992774 = require("./992774.js"),
  Chunk376398 = require("./376398.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk695346 = require("./695346.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk569545 = require("./569545.js"),
  Chunk70722 = require("./70722.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");
let S = 3e5,
  I = 6e4,
  T = new Chunk846519.V7,
  C = false,
  A = window.document.createElement("canvas"),
  N = 512,
  P = 288;
A.width = 512, A.height = P;
let w = A.getContext("2d");

function R() {
  T.stop(), null != r && (r = null)
}
let D = s().debounce((e, t, n, r) => {
  L(e, (0, b.V9)({
    streamType: null != t ? y.lo.GUILD : y.lo.CALL,
    guildId: t,
    channelId: n,
    ownerId: r
  }))
}, 500);

function x(e) {
  let t = Math.min(N / e.width, P / e.height),
    n = e.width * t,
    r = e.height * t;
  A.width = n, A.height = r;
  let i = window.document.createElement("canvas"),
    a = i.getContext("2d");
  i.width = e.width, i.height = e.height;
  let o = new ImageData(e.data, e.width, e.height);
  null == a || a.putImageData(o, 0, 0), null == w || w.drawImage(i, 0, 0, e.width, e.height, 0, 0, n, r)
}
async function L(e, t) {
  if (r !== e || (0, g.isWeb)() && _.I0.getSetting() || h.Z.getIsActiveStreamPreviewDisabled(t)) return;
  let n = () => L(e, t);
  if (!C) try {
    let n = await j(e, 60);
    x(n);
    let r = A.toDataURL("image/jpeg");
    if (f.Z.dispatch({
        type: "STREAM_PREVIEW_FETCH_SUCCESS",
        streamKey: t,
        previewURL: r
      }), g.isPlatformEmbedded) {
      let e = m.default.getToken();
      a()(null != e, "Auth token was null while sending screenshot."), await E.ZP.makeChunkedRequest(O.ANM.STREAM_PREVIEW(t), {
        thumbnail: r
      }, {
        method: "POST",
        token: e
      })
    } else await l.tn.post({
      url: O.ANM.STREAM_PREVIEW(t),
      body: {
        thumbnail: r
      },
      oldFormErrors: true,
      rejectWithError: false
    })
  } catch (t) {
    new p.Z("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t), r === e && T.start(I, n);
    return
  }
  r === e && (C ? T.start(I, n) : T.start(S, n))
}

function j(e, t) {
  let n = 0;
  return (g.isPlatformEmbedded ? k : M)(e, e => {
    if (new Uint32Array(e.data.buffer).some(e => 0 !== e)) returntrue;
    if (++n > t) throw Error("Timed out awaiting non-black frame after ".concat(t, " frames"));
    returnfalse
  })
}

function M(e, t) {
  let n = (0, u.aG)(e);
  if (null == n) return Promise.resolve(new ImageData(0, 0));
  let {
    width: r,
    height: i
  } = n.getVideoTracks()[0].getSettings(), a = document.createElement("video"), o = document.createElement("canvas");
  a.width = o.width = null != r ? r : N, a.height = o.height = null != i ? i : P, a.srcObject = n, a.play();
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
  let n = (0, c.zS)();
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
    f.Z.subscribe("CONNECTION_OPEN", R), f.Z.subscribe("LOGOUT", R), f.Z.subscribe("STREAM_DELETE", R), f.Z.subscribe("RTC_CONNECTION_VIDEO", e => {
      let {
        guildId: t,
        channelId: n,
        userId: i,
        streamId: a,
        context: o
      } = e;
      null == a || o !== v.Yn.STREAM || i !== m.default.getId() || __OVERLAY__ || (R(), r = a, D(a, t, n, i))
    }), f.Z.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
      let {
        videoState: t
      } = e;
      C = t === O.FQ1.PAUSED
    })
  }
}