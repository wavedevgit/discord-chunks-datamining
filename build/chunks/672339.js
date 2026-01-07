/** Chunk was on web.js **/
/** chunk id: 672339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FU: () => O,
  eH: () => v,
  wG: () => y
}), require("./559231.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk46973 = require("./46973.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk932724 = require("./932724.js"),
  Chunk716161 = require("./716161.js"),
  Chunk634041 = require("./634041.js"),
  Chunk647177 = require("./647177.js"),
  Chunk63985 = require("./63985.js"),
  Chunk638457 = require("./638457.js"),
  Chunk678916 = require("./678916.js"),
  Chunk981631 = require("./981631.js");

function h(e) {
  return new Promise((t, n) => {
    let r = new Image;
    r.crossOrigin = "anonymous", r.onload = () => {
      let e = document.createElement("canvas");
      e.width = _.HE.width, e.height = _.HE.height;
      let n = e.getContext("2d");
      i()(null != n, "Canvas context is missing");
      let a = r.height / r.width,
        o = _.HE.height,
        s = _.HE.height / a,
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
async function g(e) {
  let t = await fetch(e),
    n = await t.blob();
  return new Uint8ClampedArray(await n.arrayBuffer())
}

function E(e, t, n, r, i) {
  (0, c.RI)({
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
  if (null == n) return E(e, t, a.zZ.NONE);
  if (n === _.f7) return E(e, t, a.zZ.BACKGROUND_BLUR);
  if ("string" == typeof n || "number" == typeof n) {
    var o;
    let e = (0, f.Z)()[n];
    i = null != (o = e.isVideo) && o, r = e.source
  } else {
    let e = n.asset;
    i = (0, s.xR)(e) || (0, s.ay)(e), r = (0, s.rI)({
      userId: n.user_id,
      assetId: n.id,
      assetHash: e,
      size: _.HE.width
    })
  }
  if (null != r) try {
    let n = i ? true : await h(r),
      o = i ? await g(r) : true;
    E(e, t, a.zZ.BACKGROUND_REPLACEMENT, n, o)
  } catch (e) {
    (0, c.Nm)()
  }
}
async function y(e, t) {
  let {
    track: n = true,
    location: r
  } = t;
  await b(a.TO.CAMERA_BACKGROUND_LIVE, {
    type: a.W$.INPUT_DEVICE
  }, e), n && (0, d.Bh)(e, r, "Enabled")
}
async function O(e, t, n) {
  let {
    track: r = true,
    location: i
  } = n;
  (0, c.GS)(), await b(a.TO.CAMERA_BACKGROUND_PREVIEW, {
    type: a.W$.STREAM,
    streamId: t
  }, e), r && (0, d.Bh)(e, i, "Preview")
}

function v() {
  let e = o.default.getCurrentUser();
  if (null == e) return;
  let t = (0, l.P)(e);
  (0, p.Z)() && !u.Z.hasBeenApplied && null != t && y(t, {
    track: false
  }).catch(m.dG4)
}