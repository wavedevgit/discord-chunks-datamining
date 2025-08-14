/** Chunk was on 65819 **/
/** chunk id: 197712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $p: () => a,
  AK: () => d,
  Es: () => u,
  U$: () => o,
  kH: () => c
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./415506.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk392711 = require("./392711.js"),
  Chunk36793 = require("./36793.js"),
  Chunk486324 = require("./486324.js");
async function a(e) {
  let {
    file: t,
    image: l,
    cropDimensions: a,
    cropOriginCoordinates: o,
    maxDimensions: s,
    imageRotation: u = 0,
    resizeWidth: c = null,
    resizeHeight: d = null
  } = e, {
    sourceX: m,
    sourceY: h,
    sourceWidth: g,
    sourceHeight: f
  } = (0, r.GS)({
    image: l,
    cropDimensions: a,
    cropOriginCoordinates: o,
    maxDimensions: s,
    imageRotation: u
  }), x = await t.arrayBuffer(), p = new Worker(new URL("/assets/" + n.u("86047"), n.b)), _ = new Promise((e, t) => {
    p.onmessage = n => {
      let {
        data: l
      } = n;
      if (l.type === i.u.CROP_GIF_COMPLETE) {
        var r;
        e((r = new Blob([l.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var n;
            let l = null == (n = t.target) ? true : n.result;
            "string" == typeof l ? e(l) : e("")
          }, t.readAsDataURL(r)
        }))), p.terminate()
      } else l.type === i.u.CROP_GIF_ERROR && (t(Error("Error cropping GIF", {
        cause: null == l ? true : l.error
      })), p.terminate())
    }
  });
  return p.postMessage({
    type: i.u.CROP_GIF_START,
    gif: new Uint8Array(x),
    x: 0 | m,
    y: 0 | h,
    width: 0 | g,
    height: 0 | f,
    imageRotation: 0 | u,
    resizeWidth: c,
    resizeHeight: d
  }), {
    result: _,
    cancelFn: () => p.terminate()
  }
}

function o(e, t, n) {
  return {
    x: (0, l.clamp)(e, n.left, n.right),
    y: (0, l.clamp)(t, n.bottom, n.top)
  }
}

function s(e, t, n, l) {
  let r = n,
    a = l,
    o = i.US;
  return (n > o && (r = o, a = o / n * l), n / l < e) ? {
    width: r,
    height: a
  } : {
    width: t / a * r,
    height: t
  }
}

function u(e, t, n) {
  switch (e) {
    case i.pC.AVATAR:
    case i.pC.AVATAR_DECORATION:
    case i.pC.GUILD_ICON:
      return {
        width: t, height: n
      };
    case i.pC.BANNER:
      let l = i.SP;
      return s(i.MY, l, t, n);
    case i.pC.GUILD_BANNER:
      let r = i.t2;
      return s(i.Ij, r, t, n);
    case i.pC.VIDEO_BACKGROUND:
      let a = i.kP;
      return s(i.Ff, a, t, n);
    case i.pC.SCHEDULED_EVENT_IMAGE:
      let o = i.tv;
      return s(i.ut, o, t, n);
    case i.pC.HOME_HEADER:
      return s(i.sX, i.SW, t, n)
  }
}

function c(e, t, n) {
  let l = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    r = e - n.width,
    i = t - n.height;
  return 0 !== r && (l.left = -Math.abs(r / 2), l.right = r / 2), 0 !== i && (l.bottom = -Math.abs(i / 2), l.top = i / 2), l
}

function d(e, t, n, l) {
  let r = i.US;
  switch (e) {
    case i.pC.AVATAR:
    case i.pC.AVATAR_DECORATION:
    case i.pC.GUILD_ICON:
      let a = Math.min(t, n);
      return {
        width: a, height: a
      };
    case i.pC.BANNER:
      let o = Math.min(t, r);
      return {
        width: o, height: o * (1 / i.MY)
      };
    case i.pC.GUILD_BANNER:
      let s = Math.min(t, r);
      return {
        width: s, height: Math.min(9 / 16 * s, l)
      };
    case i.pC.VIDEO_BACKGROUND:
      let u = Math.min(t, r);
      return {
        width: u, height: 9 / 16 * u
      };
    case i.pC.SCHEDULED_EVENT_IMAGE:
      let c = Math.min(t, r);
      return {
        width: c, height: .4 * c
      };
    case i.pC.HOME_HEADER:
      let d = Math.min(t, r);
      return {
        width: d, height: d * (1 / i.sX)
      }
  }
}