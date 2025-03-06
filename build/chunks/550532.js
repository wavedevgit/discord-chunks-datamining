/** Chunk was on 93886 **/
n.d(t, {
  Z: () => u
});
var r, a, i, l = n(442837),
  o = n(570140),
  s = n(780106);
let c = "None";
class d extends(i = l.ZP.Store) {
  getFakeGameToShow() {
    return c
  }
  getFakeGameData() {
    return s.O[c]
  }
}
a = "ContentInventoryDevToolsStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[r] = a;
let u = new d(o.Z, {
  CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
    let {
      gameToShow: t
    } = e;
    c = t
  }
})