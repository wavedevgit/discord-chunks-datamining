/** Chunk was on 79120 **/
"use strict";
n.d(t, {
  XB: () => i,
  ZP: () => a,
  r9: () => s
});
var r = n(726542),
  l = n(973616);
let i = "spotify",
  o = r.Z.get(i);
class a extends l.ZP {
  getIconURL(e) {
    return o.icon.lightPNG
  }
  constructor() {
    super({}), this.id = i, this.name = o.name
  }
}
let s = new a