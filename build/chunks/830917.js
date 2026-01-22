/** Chunk was on 97010 **/
/** chunk id: 830917, original params: t,e,i (module,exports,require) **/
function h(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: h,
    maxDimensions: n,
    imageRotation: a = 0
  } = t, r = e.naturalWidth / e.width, d = function(t, e) {
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
  }(h, a), c = a % 180 != 0, u = i.width * r, s = i.height * r, o = Math.min(u, n.width), g = Math.min(s, n.height), b = (c ? i.height : i.width) / 2, w = (c ? i.width : i.height) / 2, f = (e.width / 2 - b - d.x) * r, l = (e.height / 2 - w - d.y) * r, x = c ? s : u, p = c ? u : s, {
    x: y,
    y: _
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
  }(u, s, a);
  return n.width < u && (y *= n.width / u), n.height < s && (_ *= n.height / s), {
    sourceX: f,
    sourceY: l,
    sourceWidth: x,
    sourceHeight: p,
    destinationX: y,
    destinationY: _,
    destinationWidth: c ? g : o,
    destinationHeight: c ? o : g,
    canvasWidth: o,
    canvasHeight: g
  }
}

function n(t) {
  let {
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: n,
    maxDimensions: a,
    imageRotation: r = 0
  } = t, {
    sourceX: d,
    sourceY: c,
    sourceWidth: u,
    sourceHeight: s,
    destinationX: o,
    destinationY: g,
    destinationWidth: b,
    destinationHeight: w,
    canvasWidth: f,
    canvasHeight: l
  } = h({
    image: e,
    cropDimensions: i,
    cropOriginCoordinates: n,
    maxDimensions: a,
    imageRotation: r
  }), x = document.createElement("canvas");
  x.width = f, x.height = l;
  let p = x.getContext("2d");
  return null != p && (p.rotate(r * Math.PI / 180), p.drawImage(e, d, c, u, s, o, g, b, w)), x.toDataURL("image/png")
}

function a(t, e, i) {
  let h = t.naturalWidth / t.naturalHeight,
    a = e,
    r = i;
  t.naturalWidth > t.naturalHeight ? a /= h : r *= h;
  let d = {
    height: a,
    width: r
  };
  return n({
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
  h_: () => a,
  iL: () => n
})