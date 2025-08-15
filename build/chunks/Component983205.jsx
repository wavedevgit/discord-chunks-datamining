/** Chunk was on 67079 **/
/** chunk id: 983205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => u
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk176354 = require("./176354.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk342745 = require("./342745.js");
let u = e => {
  let {
    name: t,
    onNameChange: n
  } = e, u = l.useRef(null), c = l.useRef(null), [d, m] = l.useState(false), h = l.useCallback(e => {
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
      m(false)
    }, []),
    p = l.useCallback(() => {
      m(true)
    }, []);
  return (0, r.jsx)(i.Is, {
    inputRef: u,
    inputClassName: o.input,
    error: d ? "" : true,
    minLength: 2,
    value: t,
    onChange: h,
    placeholder: s.intl.string(s.t.U2JFHR),
    name: "emoji_name",
    onBlur: g,
    onFocus: p,
    required: true
  })
}