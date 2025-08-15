/** Chunk was on web.js **/
/** chunk id: 195990, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk994667 = require("./994667.js"),
  Chunk594174 = require("./594174.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  var t;
  let {
    user: n,
    application: h,
    onAction: m,
    onClose: g
  } = e, {
    themeType: E
  } = (0, u.z)(), [b, y] = i.useState(false), O = (0, a.e7)([c.default], () => c.default.getCurrentUser()), v = null == (t = h.thirdPartySkus.find(e => e.distributor === _.GQo.ROBLOX)) ? true : t.id, I = (0, l.dW)(v);
  return null == O || n.id === O.id || null == v ? null : (0, r.jsx)(d.tG, {
    text: p.intl.string(p.t.RscU7O),
    submitting: b,
    size: E === f.lY.MODAL_V2 ? o.Ph.TINY : o.Ph.SMALL,
    fullWidth: E !== f.lY.MODAL_V2,
    themeColor: "secondary",
    onClick: async e => {
      y(true), e.stopPropagation(), null == m || m({
        action: "PRESS_PLAY_BUTTON"
      });
      try {
        await I()
      } catch (e) {
        (0, s.showToast)((0, s.createToast)(p.intl.string(p.t.F8FvU1), s.ToastType.FAILURE))
      }
      y(false), null == g || g()
    }
  })
}