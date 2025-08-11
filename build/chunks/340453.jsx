/** Chunk was on 75708 **/
/** chunk id: 340453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk998502 = require("./998502.js"),
  Chunk631885 = require("./631885.js"),
  Chunk329242 = require("./329242.jsx"),
  Chunk514299 = require("./514299.js");
let d = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function u(e) {
  var t, n;
  let {
    otherUser: a,
    status: u
  } = e, m = (0, l.j_)(a.id, u), {
    avatarSrc: p,
    avatarDecorationSrc: g,
    eventHandlers: h
  } = (0, s.Z)({
    userId: a.id,
    size: r.EFr.SIZE_40,
    animateOnHover: true
  });
  return <i.Fragment>{<div{...t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, h), n = n = {
      children: (0, i.jsx)(d, {
        className: c.avatar,
        src: p,
        avatarDecoration: g,
        size: r.EFr.SIZE_40,
        "aria-label": a.username
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t} />}{<div className={c.userPreview}>{<div className={c.userContainerWithTimestamp}><o.Z user={a} /></div>}{<r.Text className={c.__invalid_timestamp} color={"text-muted"} variant={"text-xs/normal"}>{m}</r.Text>}</div>}</i.Fragment>
}