/** Chunk was on 41727 **/
/** chunk id: 667285, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(e) {
  var t, m;
  let {
    channel: b,
    children: A
  } = e, y = (0, l.bG)([c.A], () => c.A.isBlocked(b.getRecipientId()));
  (0, a.A)(b.id);
  let _ = (0, o.A)(b.id),
    O = b.isSystemDM(),
    j = y && !O && !b.isMultiUserDM(),
    v = {};
  if (O) {
    let e = _ ? g.intl.string(g.t["+KSnWX"]) : g.intl.string(g.t.hvVgAZ);
    v.message = g.intl.string(g.t.Bt2N7D), v.subtitle = g.intl.string(g.t["n/Vzkw"]), v.buttonText = e, v.buttonIcon = _ ? i.tfB : true, v.onButtonClick = () => {
      if (_) {
        open(f.Do), u.default.track(h.HAw.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: f.Do
        });
        return
      }
      open(d.A.getArticleURL(h.MVz.SYSTEM_DMS))
    }, v.imageSrc = n(388668)
  } else j && (v.message = g.intl.string(g.t["9T6N5/"]), v.buttonText = g.intl.string(g.t.XyHpKH), v.onButtonClick = () => {
    s.A.unblockUser(b.getRecipientId())
  });
  return (0, r.jsx)(p.A, (t = function(e) {
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
  }({}, v), m = m = {
    children: A
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(m)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(m)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(m, e))
  }), t))
}