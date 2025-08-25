/** Chunk was on 2262 **/
/** chunk id: 983205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => s
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk176354 = require("./176354.js"),
  Chunk388032 = require("./388032.jsx");
let s = e => {
  let {
    name: t,
    onNameChange: n
  } = e, s = l.useRef(null), u = l.useRef(null), [c, d] = l.useState(false), m = l.useCallback(e => {
    var t;
    u.current = null == (t = s.current) ? true : t.selectionStart, n(e = (e = e.replace(/\s/g, "_")).length < 2 ? e : a.ZP.sanitizeEmojiName(e))
  }, [n]);
  l.useEffect(() => {
    if (null != u.current) {
      var e;
      null == (e = s.current) || e.setSelectionRange(u.current, u.current), u.current = null
    }
  });
  let h = l.useCallback(() => {
      d(false)
    }, []),
    g = l.useCallback(() => {
      d(true)
    }, []);
  return (0, r.jsx)(i.oil, {
    inputRef: s,
    error: c ? "" : true,
    minLength: 2,
    value: t,
    onChange: m,
    placeholder: o.intl.string(o.t.U2JFHR),
    name: "emoji_name",
    onBlur: h,
    onFocus: g,
    required: true
  })
}