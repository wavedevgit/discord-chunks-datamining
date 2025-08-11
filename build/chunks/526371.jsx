/** Chunk was on 75708 **/
/** chunk id: 526371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk266454 = require("./266454.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk498646 = require("./498646.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk631587 = require("./631587.js"),
  Chunk394637 = require("./394637.js");

function C() {
  let e = (0, Chunk73800.useRef)(null),
    [t, n] = (0, Chunk73800.useState)(false),
    {
      analyticsLocations: s
    } = (0, Chunk906732.ZP)(Chunk100527.Z.HOLIDAY_COACHMARK),
    h = e => {
      (0, p.Q3)(o.z.CLICKER_COACHMARK, {
        dismissAction: e,
        forceTrack: true
      })
    };
  return (0, Chunk73800.useEffect)(() => {
    var n, i;
    exports ? null == (n = module.current) || require.play() : null == (i = module.current) || Chunk255367.pause()
  }, [exports]), <Chunk314910.ZP><Chunk481060.P3F className={a()(Chunk631587.wrapper, {
        [Chunk631587.wrapperHovered]: exports
      })} onMouseEnter={() => require(true)} onMouseLeave={() => require(false)} onClick={() => {
        Chunk498646(Chunk921944.L.PRIMARY), Chunk230711.Z.open(Chunk981631.oAB.CLICKER_GAME, null, {
          analyticsLocations: Chunk120356
        })
      }}>{<div className={Chunk631587.hiddenWhileNotHovered}>{<Chunk481060.P3F className={Chunk631587.dismiss} onClick={e => {
            e.stopPropagation(), h(b.L.USER_DISMISS)
          }}>{<Chunk481060.P$X className={Chunk631587.dismissIcon} color={"currentColor"} />}{<Chunk793030.xv color={"currentColor"} variant={"text-xs/bold"}>{Chunk388032.intl.string(Chunk603571.default.AsH93d)}</Chunk793030.xv>}</Chunk481060.P3F>}{<iframe className={Chunk631587.video} src={"https://www.youtube.com/embed/".concat("h-9SUgIeJnY", "?rel=0&showinfo=0&controls=1&origin=https://").concat(Chunk981631.$R1)} allowFullScreen={true} sandbox={"allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"} />}</div>}{<div className={Chunk631587.background}><div className={Chunk631587.backgroundGradient} /></div>}{<div className={Chunk631587.foreground}>{<img className={Chunk631587.icon} src={Chunk394637} alt={""} />}{<div className={Chunk631587.text}>{<Chunk793030.xv variant={"text-md/bold"} color={"always-white"}>{Chunk388032.intl.string(Chunk603571.default["7qZdOz"])}</Chunk793030.xv>}{<Chunk793030.xv variant={"text-sm/medium"} color={"always-white"}>{Chunk388032.intl.string(Chunk603571.default.orfMLS)}</Chunk793030.xv>}</div>}{<Chunk481060.d4D className={Chunk631587.arrow} color={"black"} />}</div>}</Chunk481060.P3F></Chunk314910.ZP>
}

function O() {
  let e = (0, Chunk266454.Nj)(Chunk704215.z.CLICKER_COACHMARK),
    {
      enableGame: t
    } = Chunk498646.C.getCurrentConfig({
      location: "Coachmark"
    });
  return module || !exports ? null : <C />
}