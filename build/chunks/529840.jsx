/** Chunk was on 83667 **/
/** chunk id: 529840, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk675465 = require("./675465.js");

function d(e) {
  var t;
  let {
    user: s,
    checked: n,
    onChange: d,
    disabled: o
  } = e, {
    avatarSrc: u,
    eventHandlers: h
  } = (0, l.Z)({
    userId: null == s ? true : s.id,
    size: i.EFr.SIZE_32
  }), m = null != (t = s.globalName) ? t : s.username;
  return <div className={c.container}>{<div className={c.user}>{<i.qEK{...function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(s);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
            return Object.getOwnPropertyDescriptor(s, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = s[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        className: a()({
          [c.muted]: o
        }),
        src: u,
        "aria-label": m,
        size: i.EFr.SIZE_32
      }, h)} />}{<i.Text color={o ? "text-muted" : "text-default"} variant={"text-md/semibold"}>{m}</i.Text>}</div>}{<div className={c.checkbox}><i.XZJ disabled={o} value={n} onChange={(e, t) => d(s, t)} /></div>}</div>
}