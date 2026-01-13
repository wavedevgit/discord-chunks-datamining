/** Chunk was on 77069 **/
/** chunk id: 921599, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  K: () => S
});
var Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");
let T = t => "".concat(t.toFixed(0), "px"),
  S = (0, Chunk509613.UO)(Chunk313789.n.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => o.intl.string(o.t.Q6lKkg),
    useSubtitle: () => o.intl.string(o.t.p7eUrb),
    markers: Chunk959517.fP,
    stickToMarkers: true,
    minValue: Chunk959517.fP["0"],
    maxValue: Chunk959517.fP[Chunk959517.fP.length - 1],
    useDefaultValue: () => u.jU.useSetting() ? a.c8 : a.pq,
    getInitialValue: () => {
      let t = l.Z.messageGroupSpacing,
        e = u.jU.getSetting();
      return null != t ? t : e ? a.c8 : a.pq
    },
    onValueRender: T,
    onMarkerRender: T,
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