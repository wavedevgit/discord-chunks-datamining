/** Chunk was on 75708 **/
/** chunk id: 840720, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk305347 = require("./305347.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk919563 = require("./919563.js");

function m(e) {
  let {
    className: t,
    guildTag: n,
    guildBadge: s,
    guildId: m,
    guildName: p,
    guildIcon: g,
    guildIconSize: h
  } = e, f = r.useRef(null), [b, x] = r.useState(false);
  return r.useEffect(() => {
    let e = f.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && x(e.offsetWidth < e.scrollWidth)
  }, []), <div className={a()(u.container, t)}>{<div className={u.guildPrefixContainer}>{<o.Ft guildId={m} guildName={p} guildIcon={g} iconSize={h} className={u.guildPrefixIcon} animate={false} />}{<div className={u.details}><l.ua7 text={p} color={l.ua7.Colors.PRIMARY} shouldShow={b}>{e => {
            var t, n;
            return (0, i.jsx)("span", (t = function(e) {
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
            }({
              ref: f
            }, e), n = n = {
              className: u.guildName,
              children: p
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }}</l.ua7></div>}</div>}{<div className={u.tagContainer}><c.m0 guildId={m} className={u.tag} guildTag={n} guildBadge={s} badgeSize={d.Gg.SIZE_16} textColor={"interactive-normal"} textVariant={"text-sm/semibold"} badgeClassName={u.badge} /></div>}</div>
}