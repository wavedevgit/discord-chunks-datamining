/** Chunk was on 75708 **/
/** chunk id: 907995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk711703 = require("./711703.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk98199 = require("./98199.js");

function m(e) {
  let {
    label: t,
    labelHook: n,
    dismissNotice: s,
    className: m,
    noticeType: p
  } = e, g = null != s;
  r.useEffect(() => {
    (0, o.l)(p, c.up.VIEWED)
  }, [p]);
  let h = r.useCallback(() => {
      null != s && (s(), (0, o.l)(p, c.up.DISMISS))
    }, [p, s]),
    f = r.useCallback(() => {
      n(), (0, o.l)(p, c.up.LEARN_MORE)
    }, [p, n]);
  return <div className={a()(u.safetySettingsNotice, m)}>{<l.d3s size={"md"} />}{<l.Text variant={"text-sm/medium"} color={"interactive-active"}>{d.intl.format(t, {
        hook: (e, t) => (0, i.jsx)(l.eee, {
          onClick: f,
          children: e
        }, t)
      })}</l.Text>}{g && <l.P3F className={u.closeButton} onClick={h}><l.Dio /></l.P3F>}</div>
}