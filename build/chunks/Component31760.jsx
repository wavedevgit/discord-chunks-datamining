/** Chunk was on 28979 **/
/** chunk id: 31760, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  J: () => C,
  q: () => N
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

function N(t) {
  let {
    label: e,
    description: i,
    placeholder: r,
    overrideId: u,
    setOverride: a,
    fetchOverride: o
  } = t, [T, A] = l.useState(null != u ? u : ""), d = l.useRef(null), [S, E] = l.useState(0), _ = () => {
    null != d.current && (clearTimeout(d.current), d.current = null)
  };
  return l.useEffect(() => _, []), (0, n.jsx)(s.D0$, {
    layout: "horizontal-responsive",
    label: e,
    description: i,
    children: (0, n.jsx)(s.ksK, {
      placeholder: r,
      error: 2 === S ? "Failed to fetch override" : true,
      successMessage: 3 === S ? "Override applied" : true,
      value: T,
      onChange: t => {
        if (!(t.length > 0) || /^[0-9]+$/.test(t)) {
          if (A(t), _(), 0 === t.length) {
            E(0), a(null);
            return
          }
          d.current = setTimeout(() => {
            E(1), o(t).then(e => {
              E(null == e ? 2 : 3), null != e && a(t)
            })
          }, 500)
        }
      },
      clearable: true
    })
  })
}
let C = (0, Chunk419954.zZ)(Chunk780964.X.DEV_OVERRIDES, {
  useTitle: () => "Overrides",
  buildLayout: () => [c.U, I.l, A.B, d.q, E.g, o.Y, g.s, S.t, _.T, T.s],
  useNotice: () => ({
    type: u.W.INLINE_NOTICE,
    noticeType: "info",
    useText: () => O.intl.format(O.t.UeZJlg, {
      link: "https://i.dis.gd/dev-settings-changes"
    })
  })
})