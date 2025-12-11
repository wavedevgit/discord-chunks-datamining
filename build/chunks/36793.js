/** Chunk was on 48564 **/
/** chunk id: 36793, original params: t,e,n (module,exports,require) **/
function i(t) {
  let {
    image: e,
    cropDimensions: n,
    cropOriginCoordinates: i,
    maxDimensions: r,
    imageRotation: a = 0
  } = t, o = e.naturalWidth / e.width, l = function(t, e) {
    let {
      x: n,
      y: i
    } = t;
    switch (e) {
      case 90:
        return {
          x: i, y: -n
        };
      case 180:
        return {
          x: -n, y: -i
        };
      case 270:
        return {
          x: -i, y: n
        };
      default:
        return {
          x: n, y: i
        }
    }
  }(i, a), c = a % 180 != 0, s = n.width * o, u = n.height * o, d = Math.min(s, r.width), b = Math.min(u, r.height), g = (c ? n.height : n.width) / 2, f = (c ? n.width : n.height) / 2, h = (e.width / 2 - g - l.x) * o, m = (e.height / 2 - f - l.y) * o, p = c ? u : s, x = c ? s : u, {
    x: v,
    y: _
  } = function(t, e, n) {
    switch (n) {
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
  }(s, u, a);
  return r.width < s && (v *= r.width / s), r.height < u && (_ *= r.height / u), {
    sourceX: h,
    sourceY: m,
    sourceWidth: p,
    sourceHeight: x,
    destinationX: v,
    destinationY: _,
    destinationWidth: c ? b : d,
    destinationHeight: c ? d : b,
    canvasWidth: d,
    canvasHeight: b
  }
}

function r(t) {
  let {
    image: e,
    cropDimensions: n,
    cropOriginCoordinates: r,
    maxDimensions: a,
    imageRotation: o = 0
  } = t, {
    sourceX: l,
    sourceY: c,
    sourceWidth: s,
    sourceHeight: u,
    destinationX: d,
    destinationY: b,
    destinationWidth: g,
    destinationHeight: f,
    canvasWidth: h,
    canvasHeight: m
  } = i({
    image: e,
    cropDimensions: n,
    cropOriginCoordinates: r,
    maxDimensions: a,
    imageRotation: o
  }), p = document.createElement("canvas");
  p.width = h, p.height = m;
  let x = p.getContext("2d");
  return null != x && (x.rotate(o * Math.PI / 180), x.drawImage(e, l, c, s, u, d, b, g, f)), p.toDataURL("image/png")
}

function a(t, e, n) {
  let i = t.naturalWidth / t.naturalHeight,
    a = e,
    o = n;
  t.naturalWidth > t.naturalHeight ? a /= i : o *= i;
  let l = {
    height: a,
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
    maxDimensions: l
  })
}
require.d(exports, {
  Ae: () => a,
  GS: () => i,
  PT: () => r
})