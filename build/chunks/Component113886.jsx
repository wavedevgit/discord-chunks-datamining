/** Chunk was on 56496 **/
/** chunk id: 113886, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk693546 = require("./693546.js"),
  Chunk246364 = require("./246364.js"),
  Chunk388032 = require("./388032.jsx");
let l = e => {
  var t, r;
  let {
    guildId: l,
    userId: u,
    guildJoinRequestId: p,
    onConfirm: b,
    onError: O,
    modalProps: f
  } = e, [y, j] = c.useState(), g = async () => {
    try {
      await i.Z.updateGuildJoinRequest(l, u, p, a.wB.REJECTED, y), null == b || b()
    } catch (e) {
      null == O || O()
    }
  };
  return (0, n.jsx)(o.ConfirmModal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    header: s.intl.string(s.t["mFP/qw"]),
    cancelText: s.intl.string(s.t["ETE/oC"]),
    confirmText: s.intl.string(s.t.hDtbsz),
    onConfirm: g
  }, f), r = r = {
    children: (0, n.jsx)(o.Kx8, {
      value: y,
      onChange: j,
      maxLength: 160
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}