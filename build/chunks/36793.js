/** Chunk was on 42529 **/
/** chunk id: 36793, original params: t,e,i (module,exports,require) **/
function n(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: n,
    maxDimensions: a,
    imageRotation: r = 0
  } = t, o = e.naturalWidth / e.width, h = function(t, e) {
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
  }(n, r), _ = r % 180 != 0, l = i.width * o, d = i.height * o, u = Math.min(l, a.width), s = Math.min(d, a.height), c = (_ ? i.height : i.width) / 2, g = (_ ? i.width : i.height) / 2, m = (e.width / 2 - c - h.x) * o, y = (e.height / 2 - g - h.y) * o, p = _ ? d : l, w = _ ? l : d, {
    x: v,
    y: C
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
  }(l, d, r);
  return a.width < l && (v *= a.width / l), a.height < d && (C *= a.height / d), {
    sourceX: m,
    sourceY: y,
    sourceWidth: p,
    sourceHeight: w,
    destinationX: v,
    destinationY: C,
    destinationWidth: _ ? s : u,
    destinationHeight: _ ? u : s,
    canvasWidth: u,
    canvasHeight: s
  }
}

function a(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: a,
    maxDimensions: r,
    imageRotation: o = 0
  } = t, {
    sourceX: h,
    sourceY: _,
    sourceWidth: l,
    sourceHeight: d,
    destinationX: u,
    destinationY: s,
    destinationWidth: c,
    destinationHeight: g,
    canvasWidth: m,
    canvasHeight: y
  } = n({
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: a,
    maxDimensions: r,
    imageRotation: o
  }), p = document.createElement("canvas");
  p.width = m, p.height = y;
  let w = p.getContext("2d");
  return null != w && (w.rotate(o * Math.PI / 180), w.drawImage(e, h, _, l, d, u, s, c, g)), p.toDataURL("image/png")
}

function r(t, e, i) {
  let n = t.naturalWidth / t.naturalHeight,
    r = e,
    o = i;
  t.naturalWidth > t.naturalHeight ? r /= n : o *= n;
  let h = {
    height: r,
    width: o
  };
  return a({
    image: t,
    cropDimensions: {
      width: t.width,
      height: t.height
    },
    cropOriginCoordinates: {
      x: 0,
      y: 0
    },
    maxDimensions: h
  })
}
require.d(exports, {
  Ae: () => r,
  GS: () => n,
  PT: () => a
})