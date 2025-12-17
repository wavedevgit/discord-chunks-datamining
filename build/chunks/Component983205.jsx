/** Chunk was on 2262 **/
/** chunk id: 983205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => s
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk176354 = require("./176354.js"),
  Chunk388032 = require("./388032.jsx");
let s = e => {
  let {
    name: t,
    onNameChange: n,
    label: s
  } = e, u = i.useRef(null), c = i.useRef(null), [d, m] = i.useState(false), b = i.useCallback(e => {
    var t;
    c.current = null == (t = u.current) ? true : t.selectionStart, n(e = (e = e.replace(/\s/g, "_")).length < 2 ? e : a.ZP.sanitizeEmojiName(e))
  }, [n]);
  i.useEffect(() => {
    if (null != c.current) {
      var e;
      null == (e = u.current) || e.setSelectionRange(c.current, c.current), c.current = null
    }
  });
  let h = i.useCallback(() => {
      m(false)
    }, []),
    g = i.useCallback(() => {
      m(true)
    }, []);
  return (0, l.jsx)(r.oil, {
    inputRef: u,
    error: d ? "" : true,
    minLength: 2,
    value: t,
    onChange: b,
    placeholder: o.intl.string(o.t.U2JFHZ),
    name: "emoji_name",
    onBlur: h,
    onFocus: g,
    label: s,
    clearable: true,
    required: true
  })
}