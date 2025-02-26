/** Chunk was on 14093 **/
n.d(t, {
  f: () => a
}), n(411104);
var r = n(4646),
  l = n(665672);
async function a(e) {
  let {
    assetsToLoad: t,
    drawImage: a,
    exportConfigs: i
  } = e, o = await (0, r.k2)(t);
  await o.loadFonts();
  {
    let e = n(503082).Z,
      t = n(97008).Z,
      r = document.createElement("canvas"),
      s = new e(r, o),
      c = new t,
      u = new l.Z(s, c);
    a(u.canvas);
    let d = await u.export(i);
    return r.remove(), d
  }
}