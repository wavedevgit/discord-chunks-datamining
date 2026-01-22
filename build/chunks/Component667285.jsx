/** Chunk was on 97492 **/
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
    channel: m,
    children: A
  } = e, y = (0, l.bG)([c.A], () => c.A.isBlocked(m.getRecipientId()));
  (0, s.A)(m.id);
  let O = (0, o.A)(m.id),
    j = m.isSystemDM(),
    v = y && !j && !m.isMultiUserDM(),
    x = {};
  if (j) {
    let e = O ? b.intl.string(b.t["+KSnWX"]) : b.intl.string(b.t.hvVgAZ);
    x.message = b.intl.string(b.t.Bt2N7D), x.subtitle = b.intl.string(b.t["n/Vzkw"]), x.buttonText = e, x.buttonIcon = O ? i.tfB : true, x.onButtonClick = () => {
      if (O) {
        open(h.Do), u.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: h.Do
        });
        return
      }
      open(d.A.getArticleURL(p.MVz.SYSTEM_DMS))
    }, x.imageSrc = n(388668)
  } else v && (x.message = b.intl.string(b.t["9T6N5/"]), x.buttonText = b.intl.string(b.t.XyHpKH), x.onButtonClick = () => {
    a.A.unblockUser(m.getRecipientId())
  });
  return (0, r.jsx)(f.A, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, x), g = g = {
    children: A
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(g)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(g)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(g, e))
  }), t))
}