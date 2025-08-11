/** Chunk was on 87626 **/
/** chunk id: 388755, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  D: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk608863 = require("./608863.js"),
  Chunk66037 = require("./66037.jsx"),
  Chunk643103 = require("./643103.js"),
  Chunk34211 = require("./34211.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk431138 = require("./431138.js"),
  Chunk35289 = require("./35289.js");
let m = Chunk231338.j_.MAIN_NAVIGATION_MENU;

function p(e) {
  let {
    className: t,
    TrackClick: a,
    onChangeLocale: s,
    avoidRouter: p,
    openNavAriaLabel: h,
    hideNavAriaLabel: I
  } = e, k = r.useId(), [g, A] = r.useState(false), O = r.useCallback(() => A(!g), [g]), f = r.useCallback(e => {
    ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), g && O())
  }, [g, O]);
  return r.useEffect(() => (window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f)), [f]), <header className={l()(N.header, t)}><nav className={N.headerInner}>{<a tag={"div"} eventName={m} className={N.headerLogo} data={{
          linkClicked: "logo"
        }}><o.Z avoidRouter={p} className={N.logoWrapper} to={u.am.INDEX} from={u.j_.MAIN_NAVIGATION_MENU}><img className={N.logo} src={_.r.ASSET_LOGO_DISCORD_SVG} alt={"Discord"} itemProp={"logo"} /></o.Z></a>}{<a tag={"div"} className={N.hamburgerButton} eventName={m} data={{
          linkClicked: "mobile-menu"
        }}><i.r open={g} aria-haspopup={"true"} aria-label={g ? I : h} aria-expanded={g} aria-controls={k} onClick={O} /></a>}{<ul className={g ? N.headerNavOpen : N.headerNav}>{<d.o avoidRouter={p} TrackClick={a} styles={N} isMobile={true} isVisible={g} />}{<c.p onChange={s} />}</ul>}</nav></header>
}