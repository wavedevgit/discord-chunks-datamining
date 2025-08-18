/** Chunk was on 67079 **/
/** chunk id: 197712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $p: () => i,
  AK: () => d,
  Es: () => u,
  U$: () => s,
  kH: () => c
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./415506.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk392711 = require("./392711.js"),
  Chunk36793 = require("./36793.js"),
  Chunk486324 = require("./486324.js");
async function i(e) {
  let {
    file: t,
    image: r,
    cropDimensions: i,
    cropOriginCoordinates: s,
    maxDimensions: o,
    imageRotation: u = 0,
    resizeWidth: c = null,
    resizeHeight: d = null
  } = e, {
    sourceX: h,
    sourceY: m,
    sourceWidth: g,
    sourceHeight: p
  } = (0, l.GS)({
    image: r,
    cropDimensions: i,
    cropOriginCoordinates: s,
    maxDimensions: o,
    imageRotation: u
  }), f = await t.arrayBuffer(), v = new Worker(new URL("/assets/" + n.u("86047"), n.b)), x = new Promise((e, t) => {
    v.onmessage = n => {
      let {
        data: r
      } = n;
      if (r.type === a.u.CROP_GIF_COMPLETE) {
        var l;
        e((l = new Blob([r.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var n;
            let r = null == (n = t.target) ? true : n.result;
            "string" == typeof r ? e(r) : e("")
          }, t.readAsDataURL(l)
        }))), v.terminate()
      } else r.type === a.u.CROP_GIF_ERROR && (t(Error("Error cropping GIF", {
        cause: null == r ? true : r.error
      })), v.terminate())
    }
  });
  return v.postMessage({
    type: a.u.CROP_GIF_START,
    gif: new Uint8Array(f),
    x: 0 | h,
    y: 0 | m,
    width: 0 | g,
    height: 0 | p,
    imageRotation: 0 | u,
    resizeWidth: c,
    resizeHeight: d
  }), {
    result: x,
    cancelFn: () => v.terminate()
  }
}

function s(e, t, n) {
  return {
    x: (0, r.clamp)(e, n.left, n.right),
    y: (0, r.clamp)(t, n.bottom, n.top)
  }
}

function o(e, t, n, r) {
  let l = n,
    i = r,
    s = a.US;
  return (n > s && (l = s, i = s / n * r), n / r < e) ? {
    width: l,
    height: i
  } : {
    width: t / i * l,
    height: t
  }
}

function u(e, t, n) {
  switch (e) {
    case a.pC.AVATAR:
    case a.pC.AVATAR_DECORATION:
    case a.pC.GUILD_ICON:
      return {
        width: t, height: n
      };
    case a.pC.BANNER:
      let r = a.SP;
      return o(a.MY, r, t, n);
    case a.pC.GUILD_BANNER:
      let l = a.t2;
      return o(a.Ij, l, t, n);
    case a.pC.VIDEO_BACKGROUND:
      let i = a.kP;
      return o(a.Ff, i, t, n);
    case a.pC.SCHEDULED_EVENT_IMAGE:
      let s = a.tv;
      return o(a.ut, s, t, n);
    case a.pC.HOME_HEADER:
      return o(a.sX, a.SW, t, n)
  }
}

function c(e, t, n) {
  let r = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    l = e - n.width,
    a = t - n.height;
  return 0 !== l && (r.left = -Math.abs(l / 2), r.right = l / 2), 0 !== a && (r.bottom = -Math.abs(a / 2), r.top = a / 2), r
}

function d(e, t, n, r) {
  let l = a.US;
  switch (e) {
    case a.pC.AVATAR:
    case a.pC.AVATAR_DECORATION:
    case a.pC.GUILD_ICON:
      let i = Math.min(t, n);
      return {
        width: i, height: i
      };
    case a.pC.BANNER:
      let s = Math.min(t, l);
      return {
        width: s, height: s * (1 / a.MY)
      };
    case a.pC.GUILD_BANNER:
      let o = Math.min(t, l);
      return {
        width: o, height: Math.min(9 / 16 * o, r)
      };
    case a.pC.VIDEO_BACKGROUND:
      let u = Math.min(t, l);
      return {
        width: u, height: 9 / 16 * u
      };
    case a.pC.SCHEDULED_EVENT_IMAGE:
      let c = Math.min(t, l);
      return {
        width: c, height: .4 * c
      };
    case a.pC.HOME_HEADER:
      let d = Math.min(t, l);
      return {
        width: d, height: d * (1 / a.sX)
      }
  }
}