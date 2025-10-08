/** Chunk was on 96033 **/
/** chunk id: 36793, original params: t,e,i (module,exports,require) **/
function n(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: n,
    maxDimensions: a,
    imageRotation: o = 0
  } = t, r = e.naturalWidth / e.width, l = function(t, e) {
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
  }(n, o), s = o % 180 != 0, d = i.width * r, c = i.height * r, u = Math.min(d, a.width), _ = Math.min(c, a.height), h = (s ? i.height : i.width) / 2, g = (s ? i.width : i.height) / 2, m = (e.width / 2 - h - l.x) * r, f = (e.height / 2 - g - l.y) * r, x = s ? c : d, p = s ? d : c, {
    x: N,
    y: v
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
  }(d, c, o);
  return a.width < d && (N *= a.width / d), a.height < c && (v *= a.height / c), {
    sourceX: m,
    sourceY: f,
    sourceWidth: x,
    sourceHeight: p,
    destinationX: N,
    destinationY: v,
    destinationWidth: s ? _ : u,
    destinationHeight: s ? u : _,
    canvasWidth: u,
    canvasHeight: _
  }
}

function a(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: a,
    maxDimensions: o,
    imageRotation: r = 0
  } = t, {
    sourceX: l,
    sourceY: s,
    sourceWidth: d,
    sourceHeight: c,
    destinationX: u,
    destinationY: _,
    destinationWidth: h,
    destinationHeight: g,
    canvasWidth: m,
    canvasHeight: f
  } = n({
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: a,
    maxDimensions: o,
    imageRotation: r
  }), x = document.createElement("canvas");
  x.width = m, x.height = f;
  let p = x.getContext("2d");
  return null != p && (p.rotate(r * Math.PI / 180), p.drawImage(e, l, s, d, c, u, _, h, g)), x.toDataURL("image/png")
}

function o(t, e, i) {
  let n = t.naturalWidth / t.naturalHeight,
    o = e,
    r = i;
  t.naturalWidth > t.naturalHeight ? o /= n : r *= n;
  let l = {
    height: o,
    width: r
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
    maxDimensions: l
  })
}
require.d(exports, {
  Ae: () => o,
  GS: () => n,
  PT: () => a
})