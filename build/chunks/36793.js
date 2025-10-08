/** Chunk was on 97162 **/
/** chunk id: 36793, original params: t,e,i (module,exports,require) **/
function n(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: n,
    maxDimensions: r,
    imageRotation: h = 0
  } = t, o = e.naturalWidth / e.width, a = function(t, e) {
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
  }(n, h), d = h % 180 != 0, u = i.width * o, c = i.height * o, w = Math.min(u, r.width), s = Math.min(c, r.height), m = (d ? i.height : i.width) / 2, p = (d ? i.width : i.height) / 2, f = (e.width / 2 - m - a.x) * o, _ = (e.height / 2 - p - a.y) * o, l = d ? c : u, g = d ? u : c, {
    x: x,
    y: I
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
  return r.width < u && (x *= r.width / u), r.height < c && (I *= r.height / c), {
    sourceX: f,
    sourceY: _,
    sourceWidth: l,
    sourceHeight: g,
    destinationX: x,
    destinationY: I,
    destinationWidth: d ? s : w,
    destinationHeight: d ? w : s,
    canvasWidth: w,
    canvasHeight: s
  }
}

function r(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: r,
    maxDimensions: h,
    imageRotation: o = 0
  } = t, {
    sourceX: a,
    sourceY: d,
    sourceWidth: u,
    sourceHeight: c,
    destinationX: w,
    destinationY: s,
    destinationWidth: m,
    destinationHeight: p,
    canvasWidth: f,
    canvasHeight: _
  } = n({
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: r,
    maxDimensions: h,
    imageRotation: o
  }), l = document.createElement("canvas");
  l.width = f, l.height = _;
  let g = l.getContext("2d");
  return null != g && (g.rotate(o * Math.PI / 180), g.drawImage(e, a, d, u, c, w, s, m, p)), l.toDataURL("image/png")
}

function h(t, e, i) {
  let n = t.naturalWidth / t.naturalHeight,
    h = e,
    o = i;
  t.naturalWidth > t.naturalHeight ? h /= n : o *= n;
  let a = {
    height: h,
    width: o
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
    maxDimensions: a
  })
}
require.d(exports, {
  Ae: () => h,
  GS: () => n,
  PT: () => r
})