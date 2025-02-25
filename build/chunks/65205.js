/** Chunk was on 61195 **/
function i(e, t, n) {
  return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x)
}

function o(e, t, n, o) {
  return i(e, n, o) !== i(t, n, o) && i(e, t, n) !== i(e, t, o)
}

function r(e, t, n) {
  let i = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  return {
    x: t.x + (t.x - e.x) / i * n,
    y: t.y + (t.y - e.y) / i * n
  }
}

function a(e, t, n) {
  let i = {
      x: n.x,
      y: n.y
    },
    r = {
      x: n.x + n.width,
      y: n.y
    },
    a = {
      x: n.x,
      y: n.y + n.height
    },
    l = {
      x: n.x + n.width,
      y: n.y + n.height
    };
  return o(e, t, i, r) || o(e, t, r, l) || o(e, t, l, a) || o(e, t, a, i)
}
n.d(t, {
  Vr: () => a,
  ld: () => r
})