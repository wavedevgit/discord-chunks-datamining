/** Chunk was on 77069 **/
/** chunk id: 921599, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  K: () => T
});
var Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");
let S = t => "".concat(t.toFixed(0), "px"),
  T = (0, Chunk509613.UO)(Chunk313789.n.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.Q6lKkg),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.p7eUrb),
    markers: Chunk959517.fP,
    stickToMarkers: true,
    minValue: Chunk959517.fP["0"],
    maxValue: Chunk959517.fP[Chunk959517.fP.length - 1],
    getInitialValue: () => {
      let t = Chunk607070.Z.messageGroupSpacing,
        e = Chunk695346.jU.getSetting();
      return null != module ? module : exports ? Chunk959517.c8 : Chunk959517.pq
    },
    onValueRender: S,
    onMarkerRender: S,
    setValue: t => {
      switch (t) {
        case 0:
        case 4:
        case 8:
        case 16:
        case 24:
          (0, i.ZZ)(t)
      }
    }
  })