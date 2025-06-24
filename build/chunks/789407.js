/** Chunk was on 13368 **/
n.d(t, {
  XB: () => o,
  ZP: () => l,
  r9: () => c
});
var r = n(726542),
  i = n(973616);
let o = "spotify",
  a = r.Z.get(o);
class l extends i.ZP {
  getIconURL(e) {
    return a.icon.lightPNG
  }
  getWhiteIconURL() {
    return a.icon.whitePNG
  }
  constructor() {
    super({}), this.id = o, this.name = a.name
  }
}
let c = new l