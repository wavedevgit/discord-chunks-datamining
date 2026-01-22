/** Chunk was on 70685 **/
/** chunk id: 867276, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk624458 = require("./624458.js"),
  Chunk513461 = require("./513461.js"),
  Chunk985018 = require("./985018.jsx");
let l = e => {
  var t, r;
  let {
    guildId: l,
    userId: u,
    guildJoinRequestId: p,
    onConfirm: b,
    onError: O,
    modalProps: f
  } = e, [y, j] = o.useState(), d = async () => {
    try {
      await i.A.updateGuildJoinRequest(l, u, p, a.B5.REJECTED, y), null == b || b()
    } catch (e) {
      null == O || O()
    }
  };
  return (0, n.jsx)(c.VoidConfirmModal, (t = function(e) {
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
    onConfirm: d
  }, f), r = r = {
    children: (0, n.jsx)(c.fs1, {
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