/** Chunk was on web.js **/
/** chunk id: 413339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PX: () => A,
  S1: () => O,
  gB: () => y
}), require("./927092.js"), require("./212978.js"), require("./597227.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk205693 = require("./205693.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk329551 = require("./329551.js"),
  Chunk987384 = require("./987384.js"),
  Chunk912630 = require("./912630.js"),
  Chunk965162 = require("./965162.js"),
  Chunk957153 = require("./957153.js"),
  Chunk463951 = require("./463951.js"),
  Chunk577718 = require("./577718.js"),
  Chunk652215 = require("./652215.js");

function m(e) {
  return new Promise((t, n) => {
    let r = new Image;
    r.crossOrigin = "anonymous", r.onload = () => {
      let e = document.createElement("canvas");
      e.width = _.Im.width, e.height = _.Im.height;
      let n = e.getContext("2d");
      i()(null != n, "Canvas context is missing");
      let a = r.height / r.width,
        s = _.Im.height,
        o = _.Im.height / a,
        l = (e.width - o) / 2,
        c = (e.height - s) / 2;
      n.drawImage(r, l, c, o, s);
      let u = n.getImageData(0, 0, e.width, e.height);
      t({
        data: u.data,
        width: u.width,
        height: u.height,
        pixelFormat: "rgba"
      })
    }, r.onerror = e => n(e), r.src = e
  })
}
async function g(e) {
  let t = await fetch(e),
    n = await t.blob();
  return new Uint8ClampedArray(await n.arrayBuffer())
}

function E(e, t, n, r, i) {
  (0, c.wq)({
    [e]: {
      graph: n,
      target: t,
      image: r,
      blob: i
    }
  })
}
async function b(e, t, n) {
  let r, i = false;
  if (null == n) return E(e, t, a.gO.NONE);
  if ("blur" === n) return E(e, t, a.gO.BACKGROUND_BLUR);
  if ("string" == typeof n || "number" == typeof n) {
    var s;
    let e = (0, f.A)()[n];
    i = null != (s = e.isVideo) && s, r = e.source
  } else {
    let e = n.asset;
    i = (0, o.VI)(e) || (0, o.q6)(e), r = (0, o.Bo)({
      userId: n.user_id,
      assetId: n.id,
      assetHash: e,
      size: _.Im.width
    })
  }
  if (null != r) try {
    let n = i ? true : await m(r),
      s = i ? await g(r) : true;
    E(e, t, a.gO.BACKGROUND_REPLACEMENT, n, s)
  } catch (e) {
    (0, c.Mj)()
  }
}
async function y(e, t) {
  let {
    track: n = true,
    location: r
  } = t;
  await b(a.Tr.CAMERA_BACKGROUND_LIVE, {
    type: a.Qo.INPUT_DEVICE
  }, e), n && (0, d.Uz)(e, r, "Enabled")
}
async function O(e, t, n) {
  let {
    track: r = true,
    location: i
  } = n;
  (0, c.Oo)(), await b(a.Tr.CAMERA_BACKGROUND_PREVIEW, {
    type: a.Qo.STREAM,
    streamId: t
  }, e), r && (0, d.Uz)(e, i, "Preview")
}

function A() {
  let e = s.default.getCurrentUser();
  if (null == e) return;
  let t = (0, l.i)(e);
  (0, p.A)() && !u.A.hasBeenApplied && null != t && y(t, {
    track: false
  }).catch(h.tEg)
}