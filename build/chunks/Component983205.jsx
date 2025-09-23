/** Chunk was on 2262 **/
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
    onNameChange: n,
    label: o
  } = e, u = l.useRef(null), c = l.useRef(null), [d, h] = l.useState(false), m = l.useCallback(e => {
    var t;
    c.current = null == (t = u.current) ? true : t.selectionStart, n(e = (e = e.replace(/\s/g, "_")).length < 2 ? e : a.ZP.sanitizeEmojiName(e))
  }, [n]);
  l.useEffect(() => {
    if (null != c.current) {
      var e;
      null == (e = u.current) || e.setSelectionRange(c.current, c.current), c.current = null
    }
  });
  let g = l.useCallback(() => {
      h(false)
    }, []),
    p = l.useCallback(() => {
      h(true)
    }, []);
  return (0, r.jsx)(i.oil, {
    inputRef: u,
    error: d ? "" : true,
    minLength: 2,
    value: t,
    onChange: m,
    placeholder: s.intl.string(s.t.U2JFHR),
    name: "emoji_name",
    onBlur: g,
    onFocus: p,
    label: o,
    required: true
  })
}