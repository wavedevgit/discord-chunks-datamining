/** Chunk was on 45523 **/
/** chunk id: 983205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => u
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk176354 = require("./176354.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk137573 = require("./137573.js");
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
    f = l.useCallback(() => {
      m(true)
    }, []);
  return (0, r.jsx)(i.Is, {
    inputRef: u,
    inputClassName: s.input,
    error: d ? "" : true,
    minLength: 2,
    value: t,
    onChange: h,
    placeholder: o.intl.string(o.t.U2JFHR),
    name: "emoji_name",
    onBlur: g,
    onFocus: f,
    required: true
  })
}