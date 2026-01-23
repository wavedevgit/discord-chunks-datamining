/** Chunk was on 97010 **/
/** chunk id: 830917, original params: t,e,i (module,exports,require) **/
function h(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: h,
    maxDimensions: r,
    imageRotation: n = 0
  } = t, a = e.naturalWidth / e.width, d = function(t, e) {
    let {
      x: i,
      y: h
    } = t;
    switch (e) {
      case 90:
        return {
          x: h, y: -i
        };
      case 180:
        return {
          x: -i, y: -h
        };
      case 270:
        return {
          x: -h, y: i
        };
      default:
        return {
          x: i, y: h
        }
    }
  }(h, n), u = n % 180 != 0, o = i.width * a, s = i.height * a, c = Math.min(o, r.width), w = Math.min(s, r.height), _ = (u ? i.height : i.width) / 2, g = (u ? i.width : i.height) / 2, l = (e.width / 2 - _ - d.x) * a, p = (e.height / 2 - g - d.y) * a, x = u ? s : o, m = u ? o : s, {
    x: f,
    y: y
  } = function(t, e, i) {
    switch (i) {
      case 0:
        return {
          x: 0, y: 0
        };
      case 90:
        return {
          x: 0, y: -t
        };
      case 180:
        return {
          x: -t, y: -e
        };
      case 270:
        return {
          x: -e, y: 0
        }
    }
  }(o, s, n);
  return r.width < o && (f *= r.width / o), r.height < s && (y *= r.height / s), {
    sourceX: l,
    sourceY: p,
    sourceWidth: x,
    sourceHeight: m,
    destinationX: f,
    destinationY: y,
    destinationWidth: u ? w : c,
    destinationHeight: u ? c : w,
    canvasWidth: c,
    canvasHeight: w
  }
}

function r(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: r,
    maxDimensions: n,
    imageRotation: a = 0
  } = t, {
    sourceX: d,
    sourceY: u,
    sourceWidth: o,
    sourceHeight: s,
    destinationX: c,
    destinationY: w,
    destinationWidth: _,
    destinationHeight: g,
    canvasWidth: l,
    canvasHeight: p
  } = h({
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: r,
    maxDimensions: n,
    imageRotation: a
  }), x = document.createElement("canvas");
  x.width = l, x.height = p;
  let m = x.getContext("2d");
  return null != m && (m.rotate(a * Math.PI / 180), m.drawImage(e, d, u, o, s, c, w, _, g)), x.toDataURL("image/png")
}

function n(t, e, i) {
  let h = t.naturalWidth / t.naturalHeight,
    n = e,
    a = i;
  t.naturalWidth > t.naturalHeight ? n /= h : a *= h;
  let d = {
    height: n,
    width: a
  };
  return r({
    image: t,
    cropDimensions: {
      width: t.width,
      height: t.height
    },
    cropOriginCoordinates: {
      x: 0,
      y: 0
    },
    maxDimensions: d
  })
}
require.d(exports, {
  R7: () => h,
  h_: () => n,
  iL: () => r
})