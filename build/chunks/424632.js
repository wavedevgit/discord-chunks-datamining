/** Chunk was on 35929 **/
/** chunk id: 424632, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  F3: () => l,
  Qp: () => f,
  Qx: () => s,
  l$: () => u,
  ny: () => o
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./65821.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk735438 = require("./735438.js"),
  Chunk830917 = require("./830917.js"),
  Chunk339984 = require("./339984.js");
async function o(e) {
  let {
    file: t,
    image: a,
    cropDimensions: o,
    cropOriginCoordinates: l,
    maxDimensions: c,
    imageRotation: s = 0,
    resizeWidth: u = null,
    resizeHeight: f = null
  } = e, {
    sourceX: A,
    sourceY: h,
    sourceWidth: m,
    sourceHeight: w
  } = (0, n.R7)({
    image: a,
    cropDimensions: o,
    cropOriginCoordinates: l,
    maxDimensions: c,
    imageRotation: s
  }), E = await t.arrayBuffer(), d = new Worker(new URL("/assets/" + r.u("47773"), r.b)), _ = new Promise((e, r) => {
    d.onmessage = a => {
      var n, o;
      let {
        data: l
      } = a;
      if (l.type === i.lA.CROP_ANIMATED_IMAGE_COMPLETE) e((n = new Blob([l.result], {
        type: t.type
      }), new Promise(e => {
        let t = new FileReader;
        t.onload = t => {
          var r;
          let a = null == (r = t.target) ? true : r.result;
          "string" == typeof a ? e(a) : e("")
        }, t.readAsDataURL(n)
      }))), d.terminate();
      else if (l.type === i.lA.CROP_ANIMATED_IMAGE_ERROR) {
        let e = null == l ? true : l.error,
          t = null != (o = null == e ? true : e.message) ? o : "Unknown error";
        r(Error("Error cropping animated image: ".concat(t))), d.terminate()
      }
    }
  }), p = "image/webp" === t.type ? "webp" : "gif";
  return d.postMessage({
    type: i.lA.CROP_ANIMATED_IMAGE_START,
    data: new Uint8Array(E),
    x: 0 | A,
    y: 0 | h,
    width: 0 | m,
    height: 0 | w,
    imageRotation: 0 | s,
    resizeWidth: u,
    resizeHeight: f,
    format: p
  }), {
    result: _,
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
    l = i.Ip;
  return (r > l && (n = l, o = l / r * a), r / a < e) ? {
    width: n,
    height: o
  } : {
    width: t / o * n,
    height: t
  }
}

function s(e, t, r) {
  switch (e) {
    case i.HL.AVATAR:
    case i.HL.AVATAR_DECORATION:
    case i.HL.GUILD_ICON:
      return {
        width: t, height: r
      };
    case i.HL.BANNER:
      let a = i.pj;
      return c(i.wL, a, t, r);
    case i.HL.GUILD_BANNER:
      let n = i.Jz;
      return c(i.AB, n, t, r);
    case i.HL.VIDEO_BACKGROUND:
      let o = i.yi;
      return c(i.G9, o, t, r);
    case i.HL.SCHEDULED_EVENT_IMAGE:
      let l = i.pr;
      return c(i.Uw, l, t, r);
    case i.HL.HOME_HEADER:
      return c(i.ny, i.eJ, t, r)
  }
}

function u(e, t, r) {
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
    case i.HL.AVATAR:
    case i.HL.AVATAR_DECORATION:
    case i.HL.GUILD_ICON:
      let n = Math.min(t, r);
      return {
        width: n, height: n
      };
    case i.HL.BANNER:
      let o = Math.min(t, i.Ip);
      return {
        width: o, height: o * (1 / i.wL)
      };
    case i.HL.GUILD_BANNER:
      let l = Math.min(t, i.Ip);
      return {
        width: l, height: Math.min(9 / 16 * l, a)
      };
    case i.HL.VIDEO_BACKGROUND:
      let c = Math.min(t, i.Ip);
      return {
        width: c, height: 9 / 16 * c
      };
    case i.HL.SCHEDULED_EVENT_IMAGE:
      let s = Math.min(t, i.Ip);
      return {
        width: s, height: .4 * s
      };
    case i.HL.HOME_HEADER:
      let u = Math.min(t, i.Ip);
      return {
        width: u, height: u * (1 / i.ny)
      }
  }
}