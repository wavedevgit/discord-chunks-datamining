/** Chunk was on 58173 **/
function r(e, t, n) {
  return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x)
}

function l(e, t, n, l) {
  return r(e, n, l) !== r(t, n, l) && r(e, t, n) !== r(e, t, l)
}

function o(e, t, n) {
  let r = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  return {
    x: t.x + (t.x - e.x) / r * n,
    y: t.y + (t.y - e.y) / r * n
  }
}

function i(e, t, n) {
  let r = {
      x: n.x,
      y: n.y
    },
    o = {
      x: n.x + n.width,
      y: n.y
    },
    i = {
      x: n.x,
      y: n.y + n.height
    },
    s = {
      x: n.x + n.width,
      y: n.y + n.height
    };
  return l(e, t, r, o) || l(e, t, o, s) || l(e, t, s, i) || l(e, t, i, r)
}
n.d(t, {
  Vr: () => i,
  ld: () => o
})