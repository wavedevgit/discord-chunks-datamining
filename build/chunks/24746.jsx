/** Chunk was on 88934 **/
/** chunk id: 24746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  o = require.n(Chunk159635),
  Chunk481060 = require("./481060.js"),
  Chunk241209 = require("./241209.js"),
  Chunk547563 = require("./547563.js"),
  Chunk388032 = require("./388032.js"),
  Chunk582735 = require("./582735.js");
let h = o().parserFor(Chunk547563.Z),
  g = o().reactFor(o().ruleOutput(Chunk547563.Z, "react"));

function f(e) {
  let {
    description: t,
    supportsMarkdown: n
  } = e, [i, s] = a.useState(false), o = a.useRef(null);
  a.useEffect(() => {
    if (null == o.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      s((null != (n = null == (e = o.current) ? true : e.scrollHeight) ? n : 0) - (null != (r = null == (t = o.current) ? true : t.clientHeight) ? r : 0) > 1)
    });
    return e.observe(o.current), () => e.disconnect()
  }, []);
  let [u, p] = a.useState(false), f = a.useCallback(() => {
    p(e => !e)
  }, []);
  return <r.Fragment>{<div ref={o} className={l()({
        [m.descriptionClamp]: !u,
        [m.descriptionClampSafari]: !u && "Safari" === platform.name
      })}>{n ? (0, r.jsx)(d.Z, {
        className: m.detailedDescription,
        parser: h,
        output: g,
        state: {
          allowLinks: true
        },
        children: t
      }) : (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: t
      })}</div>}{i || u ? <_ isShowingMore={u} onToggle={f} /> : null}</r.Fragment>
}

function _(e) {
  let {
    onToggle: t,
    isShowingMore: n
  } = e, i = a.useMemo(() => <div className={m.showMoreContent}>{<c.Text variant={"text-md/semibold"} color={"interactive-normal"}>{n ? p.intl.string(p.t["vtfc4+"]) : p.intl.string(p.t.ZDRyur)}</c.Text>}{n ? <c.u04 size={"md"} color={"currentColor"} className={m.showMoreButtonIcon} /> : <c.CJ0 size={"md"} color={"currentColor"} className={m.showMoreButtonIcon} />}</div>, [n]);
  return <c.P3F className={m.showMoreButton} onClick={t}>{<div className={m.divider} />}{i}{<div className={m.divider} />}</c.P3F>
}
let b = function(e) {
  var t, n;
  let {
    application: i
  } = e, l = null == (t = i.directory_entry) ? true : t.detailed_description, s = null == (n = i.directory_entry) ? true : n.short_description, o = a.useMemo(() => null != l && l.length > 0 ? <f description={l} supportsMarkdown={true} /> : null != s && s.length > 0 ? <f description={s} supportsMarkdown={false} /> : null, [l, s]);
  return null == o ? null : <div className={m.overviewContainer}>{<c.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{p.intl.string(p.t.txraKS)}</c.X6q>}{o}</div>
}