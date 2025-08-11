/** Chunk was on 86346 **/
/** chunk id: 28061, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk447435 = require("./447435.js");

function c(e) {
  var t;
  let {
    user: a,
    checked: i,
    onChange: c,
    disabled: d
  } = e, {
    avatarSrc: u,
    eventHandlers: m
  } = (0, l.Z)({
    userId: null == a ? true : a.id,
    size: s.EFr.SIZE_32
  }), p = null != (t = a.globalName) ? t : a.username;
  return <div className={o.container}>{<div className={o.userAvatar}><s.qEK{...function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = a[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        className: n()({
          [o.muted]: d
        }),
        src: u,
        "aria-label": p,
        size: s.EFr.SIZE_32
      }, m)} /></div>}{<div className={o.usernameContainer}>{<s.Text className={o.userName} color={d ? "text-muted" : "text-default"} variant={"text-md/semibold"}>{a.username}</s.Text>}{<s.Text className={o.userName} color={d ? "text-muted" : "text-secondary"} variant={"text-xs/normal"}>{"@".concat(p)}</s.Text>}</div>}{<div className={o.checkbox}><s.XZJ disabled={d} value={i} onChange={(e, t) => c(a, t)} /></div>}</div>
}