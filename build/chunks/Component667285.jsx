/** Chunk was on 61344 **/
/** chunk id: 667285, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk258367 = require("./258367.js"),
  Chunk343328 = require("./343328.js"),
  Chunk994500 = require("./994500.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk786051 = require("./786051.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk559868 = require("./559868.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  var t, g;
  let {
    channel: A,
    children: b
  } = e, _ = (0, r.bG)([c.A], () => c.A.isBlocked(A.getRecipientId()));
  (0, s.A)(A.id);
  let y = (0, o.A)(A.id),
    v = A.isSystemDM(),
    E = _ && !v && !A.isMultiUserDM(),
    O = {};
  if (v) {
    let e = y ? m.intl.string(m.t["+KSnWX"]) : m.intl.string(m.t.hvVgAZ);
    O.message = m.intl.string(m.t.Bt2N7D), O.subtitle = m.intl.string(m.t["n/Vzkw"]), O.buttonText = e, O.buttonIcon = y ? i.tfB : true, O.onButtonClick = () => {
      if (y) {
        open(f.Do), u.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: f.Do
        });
        return
      }
      open(d.A.getArticleURL(p.MVz.SYSTEM_DMS))
    }, O.imageSrc = n(388668)
  } else E && (O.message = m.intl.string(m.t["9T6N5/"]), O.buttonText = m.intl.string(m.t.XyHpKH), O.onButtonClick = () => {
    a.A.unblockUser(A.getRecipientId())
  });
  return (0, l.jsx)(h.A, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({}, O), g = g = {
    children: b
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(g)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(g)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(g, e))
  }), t))
}