/** Chunk was on 85290 **/
function i(e) {
  let {
    image: t,
    cropDimensions: n,
    cropOriginCoordinates: i,
    maxDimensions: o,
    imageRotation: r = 0
  } = e, a = t.naturalWidth / t.width, l = function(e, t) {
    let {
      x: n,
      y: i
    } = e;
    switch (t) {
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
  }(i, r), c = r % 180 != 0, s = n.width * a, d = n.height * a, u = Math.min(s, o.width), _ = Math.min(d, o.height), g = (c ? n.height : n.width) / 2, m = (c ? n.width : n.height) / 2, b = (t.width / 2 - g - l.x) * a, f = (t.height / 2 - m - l.y) * a, p = c ? d : s, h = c ? s : d, {
    x: N,
    y: v
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
  }(s, d, r);
  return {
    sourceX: b,
    sourceY: f,
    sourceWidth: p,
    sourceHeight: h,
    destinationX: N,
    destinationY: v,
    destinationWidth: c ? _ : u,
    destinationHeight: c ? u : _,
    canvasWidth: u,
    canvasHeight: _
  }
}

function o(e) {
  let {
    image: t,
    cropDimensions: n,
    cropOriginCoordinates: o,
    maxDimensions: r,
    imageRotation: a = 0
  } = e, {
    sourceX: l,
    sourceY: c,
    sourceWidth: s,
    sourceHeight: d,
    destinationX: u,
    destinationY: _,
    destinationWidth: g,
    destinationHeight: m,
    canvasWidth: b,
    canvasHeight: f
  } = i({
    image: t,
    cropDimensions: n,
    cropOriginCoordinates: o,
    maxDimensions: r,
    imageRotation: a
  }), p = document.createElement("canvas");
  p.width = b, p.height = f;
  let h = p.getContext("2d");
  return null != h && (h.rotate(a * Math.PI / 180), h.drawImage(t, l, c, s, d, u, _, g, m)), p.toDataURL("image/png")
}

function r(e, t, n) {
  let i = e.naturalWidth / e.naturalHeight,
    r = t,
    a = n;
  e.naturalWidth > e.naturalHeight ? r /= i : a *= i;
  let l = {
    height: r,
    width: a
  };
  return o({
    image: e,
    cropDimensions: {
      width: e.width,
      height: e.height
    },
    cropOriginCoordinates: {
      x: 0,
      y: 0
    },
    maxDimensions: l
  })
}
n.d(t, {
  Ae: () => r,
  GS: () => i,
  PT: () => o
})