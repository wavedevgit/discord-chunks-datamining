/** Chunk was on 93886 **/
a.d(t, {
  Z: () => u
});
var n, r, l, i = a(442837),
  s = a(570140),
  o = a(780106);
let c = "None";
class d extends(l = i.ZP.Store) {
  getFakeGameToShow() {
    return c
  }
  getFakeGameData() {
    return o.O[c]
  }
}
r = "ContentInventoryDevToolsStore", (n = "displayName") in d ? Object.defineProperty(d, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[n] = r;
let u = new d(s.Z, {
  CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
    let {
      gameToShow: t
    } = e;
    c = t
  }
})