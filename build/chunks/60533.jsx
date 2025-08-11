/** Chunk was on 22988 **/
/** chunk id: 60533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk90815 = require("./90815.js"),
  Chunk601964 = require("./601964.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.js"),
  Chunk675968 = require("./675968.js");

function u(e) {
  let {
    guild: t
  } = e, n = (0, i.e7)([o.default], () => {
    let e = o.default.getCurrentUser();
    return (0, s.eM)(t, e)
  }), u = () => {
    (0, a.q)(t.id, {
      demonetized: true
    })
  };
  return <l.Kqy gap={24} className={d.container}>{<l.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{c.intl.string(c.t.Ms33Dg)}</l.X6q>}{<l.Text variant={"text-md/normal"} color={"header-secondary"}>{c.intl.string(c.t.xK7oiY)}</l.Text>}{<l.ua7 text={c.intl.string(c.t.VAIHXV)} shouldShow={!n}>{e => {
        var t, i;
        return (0, r.jsx)("div", (t = function(e) {
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
        }({}, e), i = i = {
          children: (0, r.jsx)(l.zxk, {
            variant: "primary",
            text: c.intl.string(c.t.ZXeJbW),
            disabled: !n,
            onClick: u
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t))
      }}</l.ua7>}</l.Kqy>
}