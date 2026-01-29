/** Chunk was on 1113 **/
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
  let O = (0, o.A)(b.id),
    _ = b.isSystemDM(),
    x = y && !_ && !b.isMultiUserDM(),
    j = {};
  if (_) {
    let e = O ? f.intl.string(f.t["+KSnWX"]) : f.intl.string(f.t.hvVgAZ);
    j.message = f.intl.string(f.t.Bt2N7D), j.subtitle = f.intl.string(f.t["n/Vzkw"]), j.buttonText = e, j.buttonIcon = O ? i.tfB : true, j.onButtonClick = () => {
      if (O) {
        open(g.Do), u.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: g.Do
        });
        return
      }
      open(d.A.getArticleURL(p.MVz.SYSTEM_DMS))
    }, j.imageSrc = n(388668)
  } else x && (j.message = f.intl.string(f.t["9T6N5/"]), j.buttonText = f.intl.string(f.t.XyHpKH), j.onButtonClick = () => {
    s.A.unblockUser(b.getRecipientId())
  });
  return (0, r.jsx)(h.A, (t = function(e) {
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
  }({}, j), m = m = {
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