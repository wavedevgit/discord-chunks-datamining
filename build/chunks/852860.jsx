/** Chunk was on 77025 **/
/** chunk id: 852860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744053 = require("./744053.js");
let d = function(e) {
  var t;
  let {
    message: n,
    errorMessage: d,
    submitting: m,
    onReset: f,
    onSave: h,
    onSaveText: x,
    onResetText: p,
    onSaveButtonColor: g,
    disabled: b,
    saveButtonTooltip: v
  } = e, j = i.useRef(null), [C, _] = i.useState(false);
  return i.useEffect(() => {
    function e() {
      _(true), setTimeout(() => _(false), 1e3)
    }
    return a.S.subscribe(o.CkL.EMPHASIZE_NOTICE, e), () => {
      a.S.unsubscribe(o.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), <div className={u.container} data-emphasized={C}><div className={u.flexContainer} ref={j}><s.JcV containerRef={j}>{<div className={u.shrinkingContainer}><div className={u.message}>{null != (t = null != d ? d : n) ? t : c.intl.string(c.t.GP7JLC)}</div></div>}{<div className={u.actions}>{null != f && <l.zx className={u.resetButton} size={l.zx.Sizes.SMALL} color={l.zx.Colors.PRIMARY} look={l.zx.Looks.LINK} onClick={f}><span>{null != p ? p : c.intl.string(c.t.yBZMsb)}</span></l.zx>}{null != h ? <s.ua7 text={v}>{e => {
              var t, n;
              return (0, r.jsx)(l.zx, (t = function(e) {
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
              }({
                size: l.zx.Sizes.SMALL,
                color: null != g ? g : l.zx.Colors.GREEN,
                submitting: m,
                disabled: b,
                onClick: h
              }, e), n = n = {
                children: null != x ? x : c.intl.string(c.t.K344S0)
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }), t))
            }}</s.ua7> : null}</div>}</s.JcV></div></div>
}