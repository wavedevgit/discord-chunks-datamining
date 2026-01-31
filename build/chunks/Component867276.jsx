/** Chunk was on 70685 **/
/** chunk id: 867276, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk624458 = require("./624458.js"),
  Chunk513461 = require("./513461.js"),
  Chunk985018 = require("./985018.jsx");
let u = e => {
  var t, r;
  let {
    guildId: u,
    userId: p,
    guildJoinRequestId: b,
    onConfirm: O,
    onError: f,
    modalProps: y
  } = e, [j, g] = c.useState(), h = async () => {
    try {
      await a.A.updateGuildJoinRequest(u, p, b, s.B5.REJECTED, j), null == O || O()
    } catch (e) {
      null == f || f()
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
    title: l.intl.string(l.t["mFP/qw"]),
    cancelText: l.intl.string(l.t["ETE/oC"]),
    confirmText: l.intl.string(l.t.hDtbsz),
    onConfirm: h
  }, y), r = r = {
    children: (0, n.jsx)(i.fs1, {
      value: j,
      onChange: g,
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