/** Chunk was on web.js **/
/** chunk id: 766646, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => Z
}), require("./259475.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./415506.js"), require("./457542.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk992774 = require("./992774.js"),
  Chunk649754 = require("./649754.js"),
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
let I = 3e5,
  T = 6e4,
  A = {},
  C = new Chunk846519.V7,
  N = false,
  P = window.document.createElement("canvas"),
  R = 512,
  D = 288;
P.width = 512, P.height = D;
let w = P.getContext("2d");

function x() {
  C.stop(), null != r && (Chunk649754.Z.removeSink(r, A), r = null)
}
let L = s().debounce((e, t, n, r) => {
  M(e, (0, y.V9)({
    streamType: null != t ? O.lo.GUILD : O.lo.CALL,
    guildId: t,
    channelId: n,
    ownerId: r
  }))
}, 500);

function j(e) {
  let t = Math.min(R / e.width, D / e.height),
    n = e.width * t,
    r = e.height * t;
  P.width = n, P.height = r;
  let i = window.document.createElement("canvas"),
    a = i.getContext("2d");
  i.width = e.width, i.height = e.height;
  let o = new ImageData(e.data, e.width, e.height);
  return null == a || a.putImageData(o, 0, 0), new Promise(t => {
    null == w || w.drawImage(i, 0, 0, e.width, e.height, 0, 0, n, r), t()
  })
}
async function M(e, t) {
  if (r !== e || (0, E.isWeb)() && m.I0.getSetting() || h.Z.getIsActiveStreamPreviewDisabled(t)) return;
  let n = () => M(e, t);
  if (!N) try {
    let n = await k(e, 60);
    await j(n);
    let r = P.toDataURL("image/jpeg");
    if (p.Z.dispatch({
        type: "STREAM_PREVIEW_FETCH_SUCCESS",
        streamKey: t,
        previewURL: r
      }), E.isPlatformEmbedded) {
      let e = g.default.getToken();
      a()(null != e, "Auth token was null while sending screenshot."), await b.ZP.makeChunkedRequest(v.ANM.STREAM_PREVIEW(t), {
        thumbnail: r
      }, {
        method: "POST",
        token: e
      })
    } else await l.tn.post({
      url: v.ANM.STREAM_PREVIEW(t),
      body: {
        thumbnail: r
      },
      oldFormErrors: true,
      rejectWithError: false
    })
  } catch (t) {
    new _.Z("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t), r === e && C.start(T, n);
    return
  }
  r === e && (N ? C.start(T, n) : C.start(I, n))
}

function k(e, t) {
  let n = 0;
  return (E.isPlatformEmbedded ? G : U)(e, e => {
    if (new Uint32Array(e.data.buffer).some(e => 0 !== e)) returntrue;
    if (++n > t) throw Error("Timed out awaiting non-black frame after ".concat(t, " frames"));
    returnfalse
  })
}

function U(e, t) {
  let n = (0, d.aG)(e);
  if (null == n) return Promise.resolve(new ImageData(0, 0));
  let {
    width: r,
    height: i
  } = n.getVideoTracks()[0].getSettings(), a = document.createElement("video"), o = document.createElement("canvas");
  a.width = o.width = null != r ? r : R, a.height = o.height = null != i ? i : D, a.srcObject = n, a.play();
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

function G(e, t) {
  let n = (0, c.zS)(),
    i = (null == n ? true : n.getNextVideoOutputFrame) != null;
  return new Promise((a, o) => {
    let s = e => {
      try {
        null != e && t(e) && a(e)
      } catch (e) {
        o(e)
      }
    };
    i ? n.getNextVideoOutputFrame(e).then(s, t => {
      if (r === e) throw t
    }) : u.Z.addSink(e, A, s)
  }).finally(() => {
    i || u.Z.removeSink(e, A)
  })
}
let Z = {
  init() {
    Chunk570140.Z.subscribe("CONNECTION_OPEN", x), Chunk570140.Z.subscribe("LOGOUT", x), Chunk570140.Z.subscribe("STREAM_DELETE", x), Chunk570140.Z.subscribe("RTC_CONNECTION_VIDEO", e => {
      let {
        guildId: t,
        channelId: n,
        userId: i,
        streamId: a,
        context: o
      } = e;
      null == a || o !== S.Yn.STREAM || i !== g.default.getId() || __OVERLAY__ || (x(), r = a, L(a, t, n, i))
    }), Chunk570140.Z.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
      let {
        videoState: t
      } = e;
      N = t === v.FQ1.PAUSED
    })
  }
}