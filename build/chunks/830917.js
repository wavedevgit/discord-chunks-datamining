/** Chunk was on 76443 **/
/** chunk id: 830917, original params: e,t,n (module,exports,require) **/
function l(e) {
  let {
    image: t,
    cropDimensions: n,
    cropOriginCoordinates: l,
    maxDimensions: r,
    imageRotation: i = 0
  } = e, a = t.naturalWidth / t.width, s = function(e, t) {
    let {
      x: n,
      y: l
    } = e;
    switch (t) {
      case 90:
        return {
          x: l, y: -n
        };
      case 180:
        return {
          x: -n, y: -l
        };
      case 270:
        return {
          x: -l, y: n
        };
      default:
        return {
          x: n, y: l
        }
    }
  }(l, i), u = i % 180 != 0, o = n.width * a, c = n.height * a, d = Math.min(o, r.width), m = Math.min(c, r.height), h = (u ? n.height : n.width) / 2, g = (u ? n.width : n.height) / 2, b = (t.width / 2 - h - s.x) * a, f = (t.height / 2 - g - s.y) * a, j = u ? c : o, v = u ? o : c, {
    x: x,
    y: _
  } = function(e, t, n) {
    switch (n) {
      case 0:
        return {
          x: 0, y: 0
        };
      case 90:
        return {
          x: 0, y: -e
        };
      case 180:
        return {
          x: -e, y: -t
        };
      case 270:
        return {
          x: -t, y: 0
        }
    }
  }(o, c, i);
  return r.width < o && (x *= r.width / o), r.height < c && (_ *= r.height / c), {
    sourceX: b,
    sourceY: f,
    sourceWidth: j,
    sourceHeight: v,
    destinationX: x,
    destinationY: _,
    destinationWidth: u ? m : d,
    destinationHeight: u ? d : m,
    canvasWidth: d,
    canvasHeight: m
  }
}

function r(e) {
  let {
    image: t,
    cropDimensions: n,
    cropOriginCoordinates: r,
    maxDimensions: i,
    imageRotation: a = 0
  } = e, {
    sourceX: s,
    sourceY: u,
    sourceWidth: o,
    sourceHeight: c,
    destinationX: d,
    destinationY: m,
    destinationWidth: h,
    destinationHeight: g,
    canvasWidth: b,
    canvasHeight: f
  } = l({
    image: t,
    cropDimensions: n,
    cropOriginCoordinates: r,
    maxDimensions: i,
    imageRotation: a
  }), j = document.createElement("canvas");
  j.width = b, j.height = f;
  let v = j.getContext("2d");
  return null != v && (v.rotate(a * Math.PI / 180), v.drawImage(t, s, u, o, c, d, m, h, g)), j.toDataURL("image/png")
}

function i(e, t, n) {
  let l = e.naturalWidth / e.naturalHeight,
    i = t,
    a = n;
  e.naturalWidth > e.naturalHeight ? i /= l : a *= l;
  let s = {
    height: i,
    width: a
  };
  return r({
    image: e,
    cropDimensions: {
      width: e.width,
      height: e.height
    },
    cropOriginCoordinates: {
      x: 0,
      y: 0
    },
    maxDimensions: s
  })
}
require.d(exports, {
  R7: () => l,
  h_: () => i,
  iL: () => r
})