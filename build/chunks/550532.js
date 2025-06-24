/** Chunk was on 93886 **/
n.d(t, {
  Z: () => u
});
var a, r, l, i = n(442837),
  s = n(570140),
  o = n(780106);
let c = "None";
class d extends(l = i.ZP.Store) {
  getFakeGameToShow() {
    return c
  }
  getFakeGameData() {
    return o.O[c]
  }
}
r = "ContentInventoryDevToolsStore", (a = "displayName") in d ? Object.defineProperty(d, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[a] = r;
let u = new d(s.Z, {
  CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
    let {
      gameToShow: t
    } = e;
    c = t
  }
})