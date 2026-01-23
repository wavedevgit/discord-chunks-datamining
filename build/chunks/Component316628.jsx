/** Chunk was on 76443 **/
/** chunk id: 316628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => u
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk690521 = require("./690521.js"),
  Chunk985018 = require("./985018.jsx");
let u = e => {
  let {
    name: t,
    onNameChange: n,
    label: u
  } = e, o = r.useRef(null), c = r.useRef(null), [d, m] = r.useState(false), h = r.useCallback(e => {
    var t;
    c.current = null == (t = o.current) ? true : t.selectionStart, n(e = (e = e.replace(/\s/g, "_")).length < 2 ? e : a.Ay.sanitizeEmojiName(e))
  }, [n]);
  r.useEffect(() => {
    if (null != c.current) {
      var e;
      null == (e = o.current) || e.setSelectionRange(c.current, c.current), c.current = null
    }
  });
  let g = r.useCallback(() => {
      m(false)
    }, []),
    b = r.useCallback(() => {
      m(true)
    }, []);
  return (0, l.jsx)(i.ksK, {
    inputRef: o,
    error: d ? "" : true,
    minLength: 2,
    value: t,
    onChange: h,
    placeholder: s.intl.string(s.t.U2JFHZ),
    name: "emoji_name",
    onBlur: g,
    onFocus: b,
    label: u,
    clearable: true,
    required: true
  })
}