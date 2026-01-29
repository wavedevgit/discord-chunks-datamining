/** Chunk was on 4670 **/
/** chunk id: 31760, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  J: () => N,
  q: () => C
}), require("./228524.js"), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk780964 = require("./780964.js"),
  Chunk143177 = require("./143177.js"),
  Chunk350017 = require("./350017.js"),
  Chunk819188 = require("./819188.jsx"),
  Chunk231137 = require("./231137.js"),
  Chunk151098 = require("./151098.js"),
  Chunk716005 = require("./716005.js"),
  Chunk144010 = require("./144010.js"),
  Chunk175631 = require("./175631.js"),
  Chunk430443 = require("./430443.js"),
  Chunk997442 = require("./997442.jsx"),
  Chunk985018 = require("./985018.jsx");

function C(e) {
  let {
    label: t,
    description: i,
    placeholder: r,
    overrideId: a,
    setOverride: u,
    fetchOverride: o
  } = e, [d, T] = l.useState(null != a ? a : ""), c = l.useRef(null), [A, S] = l.useState(0), _ = () => {
    null != c.current && (clearTimeout(c.current), c.current = null)
  };
  return l.useEffect(() => _, []), (0, n.jsx)(s.D0$, {
    layout: "horizontal-responsive",
    label: t,
    description: i,
    children: (0, n.jsx)(s.ksK, {
      placeholder: r,
      error: 2 === A ? "Failed to fetch override" : true,
      successMessage: 3 === A ? "Override applied" : true,
      value: d,
      onChange: e => {
        if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
          if (T(e), _(), 0 === e.length) {
            S(0), u(null);
            return
          }
          c.current = setTimeout(() => {
            S(1), o(e).then(t => {
              S(null == t ? 2 : 3), null != t && u(e)
            })
          }, 500)
        }
      },
      clearable: true
    })
  })
}
let N = (0, Chunk419954.zZ)(Chunk780964.X.DEV_OVERRIDES, {
  useTitle: () => "Overrides",
  buildLayout: () => [g.U, I.l, T.B, c.q, S.g, o.Y, E.s, A.t, _.T, d.s],
  useInlineNotice: () => ({
    type: a.W.INLINE_NOTICE,
    noticeType: "info",
    useText: () => O.intl.format(O.t.UeZJlg, {
      link: "https://i.dis.gd/dev-settings-changes"
    })
  })
})