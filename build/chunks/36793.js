/** Chunk was on 96033 **/
/** chunk id: 36793, original params: t,e,i (module,exports,require) **/
function n(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: n,
    maxDimensions: a,
    imageRotation: r = 0
  } = t, o = e.naturalWidth / e.width, l = function(t, e) {
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
  }(n, r), s = r % 180 != 0, d = i.width * o, c = i.height * o, u = Math.min(d, a.width), _ = Math.min(c, a.height), g = (s ? i.height : i.width) / 2, h = (s ? i.width : i.height) / 2, m = (e.width / 2 - g - l.x) * o, f = (e.height / 2 - h - l.y) * o, x = s ? c : d, p = s ? d : c, {
    x: v,
    y: N
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
  }(d, c, r);
  return a.width < d && (v *= a.width / d), a.height < c && (N *= a.height / c), {
    sourceX: m,
    sourceY: f,
    sourceWidth: x,
    sourceHeight: p,
    destinationX: v,
    destinationY: N,
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
    maxDimensions: r,
    imageRotation: o = 0
  } = t, {
    sourceX: l,
    sourceY: s,
    sourceWidth: d,
    sourceHeight: c,
    destinationX: u,
    destinationY: _,
    destinationWidth: g,
    destinationHeight: h,
    canvasWidth: m,
    canvasHeight: f
  } = n({
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: a,
    maxDimensions: r,
    imageRotation: o
  }), x = document.createElement("canvas");
  x.width = m, x.height = f;
  let p = x.getContext("2d");
  return null != p && (p.rotate(o * Math.PI / 180), p.drawImage(e, l, s, d, c, u, _, g, h)), x.toDataURL("image/png")
}

function r(t, e, i) {
  let n = t.naturalWidth / t.naturalHeight,
    r = e,
    o = i;
  t.naturalWidth > t.naturalHeight ? r /= n : o *= n;
  let l = {
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
    maxDimensions: l
  })
}
require.d(exports, {
  Ae: () => r,
  GS: () => n,
  PT: () => a
})