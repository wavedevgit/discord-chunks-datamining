/** Chunk was on 67079 **/
/** chunk id: 983205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => o
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk176354 = require("./176354.js"),
  Chunk388032 = require("./388032.jsx");
let o = e => {
  let {
    name: t,
    onNameChange: n
  } = e, o = l.useRef(null), u = l.useRef(null), [c, d] = l.useState(false), h = l.useCallback(e => {
    var t;
    u.current = null == (t = o.current) ? true : t.selectionStart, n(e = (e = e.replace(/\s/g, "_")).length < 2 ? e : i.ZP.sanitizeEmojiName(e))
  }, [n]);
  l.useEffect(() => {
    if (null != u.current) {
      var e;
      null == (e = o.current) || e.setSelectionRange(u.current, u.current), u.current = null
    }
  });
  let m = l.useCallback(() => {
      d(false)
    }, []),
    g = l.useCallback(() => {
      d(true)
    }, []);
  return (0, r.jsx)(a.oil, {
    inputRef: o,
    error: c ? "" : true,
    minLength: 2,
    value: t,
    onChange: h,
    placeholder: s.intl.string(s.t.U2JFHR),
    name: "emoji_name",
    onBlur: m,
    onFocus: g,
    required: true
  })
}