/** Chunk was on web.js **/
/** chunk id: 413339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PX: () => I,
  S1: () => A,
  gB: () => v
}), require("./927092.js"), require("./212978.js"), require("./597227.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk205693 = require("./205693.js"),
  Chunk780732 = require("./780732.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk723702 = require("./723702.js"),
  Chunk329551 = require("./329551.js"),
  Chunk987384 = require("./987384.js"),
  Chunk912630 = require("./912630.js"),
  Chunk965162 = require("./965162.js"),
  Chunk957153 = require("./957153.js"),
  Chunk463951 = require("./463951.js"),
  Chunk577718 = require("./577718.js"),
  Chunk652215 = require("./652215.js");

function E(e) {
  return new Promise((t, n) => {
    let r = new Image;
    r.crossOrigin = "anonymous", r.onload = () => {
      let e = document.createElement("canvas");
      e.width = m.Im.width, e.height = m.Im.height;
      let n = e.getContext("2d");
      i()(null != n, "Canvas context is missing");
      let a = r.height / r.width,
        o = m.Im.height,
        s = m.Im.height / a,
        l = (e.width - s) / 2,
        c = (e.height - o) / 2;
      n.drawImage(r, l, c, s, o);
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
async function y(e) {
  let t = await fetch(e),
    n = await t.blob();
  return new Uint8ClampedArray(await n.arrayBuffer())
}

function b(e, t, n, r, i) {
  let a = (0, c.isWindows)() && (0, o.r)({
    location: "applyBackgroundMediaFilterSettings"
  }).enabled;
  (0, d.wq)({
    [e]: {
      graph: n,
      target: t,
      image: r,
      blob: i,
      useH264MFDecoder: a
    }
  })
}
async function O(e, t, n) {
  let r, i = false;
  if (null == n) return b(e, t, a.gO.NONE);
  if ("blur" === n) return b(e, t, a.gO.BACKGROUND_BLUR);
  if ("string" == typeof n || "number" == typeof n) {
    var o;
    let e = (0, _.A)()[n];
    i = null != (o = e.isVideo) && o, r = e.source
  } else {
    let e = n.asset;
    i = (0, l.VI)(e) || (0, l.q6)(e), r = (0, l.Bo)({
      userId: n.user_id,
      assetId: n.id,
      assetHash: e,
      size: m.Im.width
    })
  }
  if (null != r) try {
    let n = i ? true : await E(r),
      o = i ? await y(r) : true;
    b(e, t, a.gO.BACKGROUND_REPLACEMENT, n, o)
  } catch (e) {
    (0, d.Mj)()
  }
}
async function v(e, t) {
  let {
    track: n = true,
    location: r
  } = t;
  await O(a.Tr.CAMERA_BACKGROUND_LIVE, {
    type: a.Qo.INPUT_DEVICE
  }, e), n && (0, p.Uz)(e, r, "Enabled")
}
async function A(e, t, n) {
  let {
    track: r = true,
    location: i
  } = n;
  (0, d.Oo)(), await O(a.Tr.CAMERA_BACKGROUND_PREVIEW, {
    type: a.Qo.STREAM,
    streamId: t
  }, e), r && (0, p.Uz)(e, i, "Preview")
}

function I() {
  let e = s.default.getCurrentUser();
  if (null == e) return;
  let t = (0, u.i)(e);
  (0, h.A)() && !f.A.hasBeenApplied && null != t && v(t, {
    track: false
  }).catch(g.tEg)
}