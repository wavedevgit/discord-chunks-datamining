/** Chunk was on 97162 **/
/** chunk id: 36793, original params: t,e,i (module,exports,require) **/
function n(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: n,
    maxDimensions: r,
    imageRotation: h = 0
  } = t, a = e.naturalWidth / e.width, d = function(t, e) {
    let {
      x: i,
      y: n
    } = t;
    switch (e) {
      case 90:
        return {
          x: n, y: -i
        };
      case 180:
        return {
          x: -i, y: -n
        };
      case 270:
        return {
          x: -n, y: i
        };
      default:
        return {
          x: i, y: n
        }
    }
  }(n, h), o = h % 180 != 0, u = i.width * a, c = i.height * a, s = Math.min(u, r.width), w = Math.min(c, r.height), p = (o ? i.height : i.width) / 2, l = (o ? i.width : i.height) / 2, g = (e.width / 2 - p - d.x) * a, m = (e.height / 2 - l - d.y) * a, f = o ? c : u, _ = o ? u : c, {
    x: x,
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
  }(u, c, h);
  return r.width < u && (x *= r.width / u), r.height < c && (y *= r.height / c), {
    sourceX: g,
    sourceY: m,
    sourceWidth: f,
    sourceHeight: _,
    destinationX: x,
    destinationY: y,
    destinationWidth: o ? w : s,
    destinationHeight: o ? s : w,
    canvasWidth: s,
    canvasHeight: w
  }
}

function r(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: r,
    maxDimensions: h,
    imageRotation: a = 0
  } = t, {
    sourceX: d,
    sourceY: o,
    sourceWidth: u,
    sourceHeight: c,
    destinationX: s,
    destinationY: w,
    destinationWidth: p,
    destinationHeight: l,
    canvasWidth: g,
    canvasHeight: m
  } = n({
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: r,
    maxDimensions: h,
    imageRotation: a
  }), f = document.createElement("canvas");
  f.width = g, f.height = m;
  let _ = f.getContext("2d");
  return null != _ && (_.rotate(a * Math.PI / 180), _.drawImage(e, d, o, u, c, s, w, p, l)), f.toDataURL("image/png")
}

function h(t, e, i) {
  let n = t.naturalWidth / t.naturalHeight,
    h = e,
    a = i;
  t.naturalWidth > t.naturalHeight ? h /= n : a *= n;
  let d = {
    height: h,
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
  Ae: () => h,
  GS: () => n,
  PT: () => r
})