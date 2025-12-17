/** Chunk was on 30409 **/
/** chunk id: 197712, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  AK: () => f,
  Es: () => u,
  GU: () => o,
  U$: () => l,
  kH: () => s
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./415506.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk392711 = require("./392711.js"),
  Chunk36793 = require("./36793.js"),
  Chunk486324 = require("./486324.js");
async function o(e) {
  let {
    file: t,
    image: a,
    cropDimensions: o,
    cropOriginCoordinates: l,
    maxDimensions: c,
    imageRotation: u = 0,
    resizeWidth: s = null,
    resizeHeight: f = null
  } = e, {
    sourceX: h,
    sourceY: A,
    sourceWidth: m,
    sourceHeight: p
  } = (0, n.GS)({
    image: a,
    cropDimensions: o,
    cropOriginCoordinates: l,
    maxDimensions: c,
    imageRotation: u
  }), E = await t.arrayBuffer(), d = new Worker(new URL("/assets/" + r.u("776"), r.b)), w = new Promise((e, r) => {
    d.onmessage = a => {
      var n, o;
      let {
        data: l
      } = a;
      if (l.type === i.u.CROP_ANIMATED_IMAGE_COMPLETE) e((n = new Blob([l.result], {
        type: t.type
      }), new Promise(e => {
        let t = new FileReader;
        t.onload = t => {
          var r;
          let a = null == (r = t.target) ? true : r.result;
          "string" == typeof a ? e(a) : e("")
        }, t.readAsDataURL(n)
      }))), d.terminate();
      else if (l.type === i.u.CROP_ANIMATED_IMAGE_ERROR) {
        let e = null == l ? true : l.error,
          t = null != (o = null == e ? true : e.message) ? o : "Unknown error";
        r(Error("Error cropping animated image: ".concat(t))), d.terminate()
      }
    }
  }), _ = "image/webp" === t.type ? "webp" : "gif";
  return d.postMessage({
    type: i.u.CROP_ANIMATED_IMAGE_START,
    data: new Uint8Array(E),
    x: 0 | h,
    y: 0 | A,
    width: 0 | m,
    height: 0 | p,
    imageRotation: 0 | u,
    resizeWidth: s,
    resizeHeight: f,
    format: _
  }), {
    result: w,
    cancelFn: () => d.terminate()
  }
}

function l(e, t, r) {
  return {
    x: (0, a.clamp)(e, r.left, r.right),
    y: (0, a.clamp)(t, r.bottom, r.top)
  }
}

function c(e, t, r, a) {
  let n = r,
    o = a,
    l = i.vJ;
  return (r > l && (n = l, o = l / r * a), r / a < e) ? {
    width: n,
    height: o
  } : {
    width: t / o * n,
    height: t
  }
}

function u(e, t, r) {
  switch (e) {
    case i.pC.AVATAR:
    case i.pC.AVATAR_DECORATION:
    case i.pC.GUILD_ICON:
      return {
        width: t, height: r
      };
    case i.pC.BANNER:
      let a = i.qj;
      return c(i.MY, a, t, r);
    case i.pC.GUILD_BANNER:
      let n = i.C5;
      return c(i.Ij, n, t, r);
    case i.pC.VIDEO_BACKGROUND:
      let o = i.PB;
      return c(i.Ff, o, t, r);
    case i.pC.SCHEDULED_EVENT_IMAGE:
      let l = i.WV;
      return c(i.ut, l, t, r);
    case i.pC.HOME_HEADER:
      return c(i.sX, i.SW, t, r)
  }
}

function s(e, t, r) {
  let a = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    n = e - r.width,
    i = t - r.height;
  return 0 !== n && (a.left = -Math.abs(n / 2), a.right = n / 2), 0 !== i && (a.bottom = -Math.abs(i / 2), a.top = i / 2), a
}

function f(e, t, r, a) {
  switch (e) {
    case i.pC.AVATAR:
    case i.pC.AVATAR_DECORATION:
    case i.pC.GUILD_ICON:
      let n = Math.min(t, r);
      return {
        width: n, height: n
      };
    case i.pC.BANNER:
      let o = Math.min(t, i.vJ);
      return {
        width: o, height: o * (1 / i.MY)
      };
    case i.pC.GUILD_BANNER:
      let l = Math.min(t, i.vJ);
      return {
        width: l, height: Math.min(9 / 16 * l, a)
      };
    case i.pC.VIDEO_BACKGROUND:
      let c = Math.min(t, i.vJ);
      return {
        width: c, height: 9 / 16 * c
      };
    case i.pC.SCHEDULED_EVENT_IMAGE:
      let u = Math.min(t, i.vJ);
      return {
        width: u, height: .4 * u
      };
    case i.pC.HOME_HEADER:
      let s = Math.min(t, i.vJ);
      return {
        width: s, height: s * (1 / i.sX)
      }
  }
}