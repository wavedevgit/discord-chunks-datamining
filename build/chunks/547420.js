/** Chunk was on 13323 **/
n.d(t, {
  MY: () => c,
  RC: () => l,
  UF: () => o,
  ZP: () => d
});
var r = n(857595),
  i = n(607070),
  s = n(981631);

function a(e) {
  return s.yqN.ZOOM_SCALES[Math.max(0, Math.min(s.yqN.ZOOM_SCALES.indexOf(i.Z.zoom) + e, s.yqN.ZOOM_SCALES.length - 1))]
}
let o = {
    binds: ["mod+plus"],
    comboKeysBindGlobal: !0,
    action: () => ((0, r.cq)(a(1)), !1)
  },
  l = {
    binds: ["mod+minus"],
    comboKeysBindGlobal: !0,
    action: () => ((0, r.cq)(a(-1)), !1)
  },
  c = {
    binds: ["mod+0"],
    comboKeysBindGlobal: !0,
    action: () => ((0, r.cq)(s.yqN.ZOOM_DEFAULT), !1)
  },
  d = 12633 == n.j ? {
    ZOOM_IN: o,
    ZOOM_OUT: l,
    ZOOM_RESET: c
  } : null