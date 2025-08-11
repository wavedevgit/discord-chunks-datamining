/** Chunk was on 75708 **/
/** chunk id: 554042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk918222 = require("./918222.js"),
  Chunk607070 = require("./607070.js"),
  Chunk304761 = require("./304761.js"),
  Chunk865427 = require("./865427.js"),
  Chunk358085 = require("./358085.js"),
  Chunk210887 = require("./210887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk560030 = require("./560030.js");
let _ = [{
  label: "Latin alphabet",
  value: "aBcDeFgHiJkLmNoPqRsTuVwXyZ"
}, {
  label: "Latin pangram",
  value: "The quick brown fox jumps over the lazy dog"
}, {
  label: "Greek alphabet",
  value: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΆΈΉΊΌΎΏ"
}, {
  label: "Greek pangram",
  value: "ΤΑΧΊΣΤΗ ΑΛΏΠΗΞ ΒΑΦΉΣ ΨΗΜΈΝΗ ΓΗ, ΔΡΑΣΚΕΛΊΖΕΙ ΥΠΈΡ ΝΩΘΡΟΎ ΚΥΝΌΣ"
}, {
  label: "Cyrillic alphabet",
  value: "АБВГЃҐДЕЀЁЖЗИЙЍКЌЛМНОПРСТУЎФХЧЦШЩЏЬЪЫЉЊЅЄЭІЇЈЋЮЯЂѢѲѴ"
}, {
  label: "Cyrillic pangram",
  value: "В ЧАЩАХ ЮГА ЖИЛ БЫ ЦИТРУС? ДА, НО ФАЛЬШИВЫЙ ЭКЗЕМПЛЯР!"
}, {
  label: "Custom",
  value: "custom"
}];

function j() {
  let [e, t] = Chunk73800.useState(Math.round(window.outerWidth / window.innerWidth * 100)), {
    platformZoom: n,
    theme: s
  } = (0, Chunk442837.cj)([Chunk210887.Z, Chunk607070.Z], () => ({
    theme: Chunk210887.Z.theme,
    platformZoom: Chunk607070.Z.zoom
  })), [j, E] = Chunk73800.useState("upright"), C = ["normal", "medium", "semibold", "bold", "extrabold"], O = new Map([
    ["normal", 400],
    ["medium", 500],
    ["semibold", 600],
    ["bold", 700],
    ["extrabold", 800]
  ]);
  Chunk73800.useEffect(() => {
    Chunk358085.isPlatformEmbedded || window.addEventListener("resize", () => {
      exports(Math.round(window.outerWidth / window.innerWidth * 100))
    })
  }, []);
  let v = Chunk358085.isPlatformEmbedded ? require : module,
    S = (0, Chunk442837.e7)([Chunk304761.C], () => {
      var e, t;
      return (0, Chunk865427.fD)() ? null == (t = Chunk304761.C.getCurrentBuildOverride()) || null == (e = exports.overrides) ? true : module.discord_web : null
    }),
    [T, I] = (0, Chunk918222.R)("playground-overrideText", null),
    [N, y] = (0, Chunk918222.R)("playground-defaultText", _[0].value),
    A = Chunk73800.useCallback(e => {
      let t = _.find(t => {
        let {
          value: n
        } = t;
        return n === e
      });
      "" === e || null == e ? (y(_[0].value), I(null)) : null != t ? y(t.value) : (y("custom"), I(e))
    }, [I, y]);
  return <div style={{
      "--playground-font-family": "mono" === j ? "gg mono" : "gg sans",
      "--playground-font-style": "italic" === j ? "italic" : "normal"
    }}><Chunk481060.hjN tag={Chunk481060.RB0.H1}>{<div className={Chunk560030.toolbar}>{<div>{<Chunk481060.Text tag={"div"} variant={"heading-lg/bold"} style={{
              display: "inline-block"
            }}>{"Zoom: "}{v}{"%"}</Chunk481060.Text>}{null != S ? <Chunk481060.Text tag={"div"} variant={"heading-lg/bold"} style={{
              display: "inline-block",
              marginLeft: "1em"
            }} color={"header-secondary"}>{"("}{S.id}{")"}</Chunk481060.Text> : null}</div>}{<Chunk481060.xJW><Chunk481060.q4e className={Chunk560030.select} options={_} onChange={e => A(e)} value={N} /></Chunk481060.xJW>}{<Chunk481060.xJW><div className={Chunk560030.input}><Chunk481060.oil placeholder={"Enter custom input..."} value={null != T ? T : ""} onChange={A} /></div></Chunk481060.xJW>}</div>}{<div className={Chunk560030.toolbar}>{<Chunk481060.xJW><Chunk481060.FXm withTransparentBackground={true} className={Chunk560030.theme} orientation={"horizontal"} options={[{
              name: Chunk388032.intl.string(Chunk388032.t.b8Cei4),
              value: Chunk981631.BRd.DARK
            }, {
              name: Chunk388032.intl.string(Chunk388032.t.K2sFfn),
              value: Chunk981631.BRd.LIGHT
            }]} onChange={e => {
              (0, c.ZI)({
                theme: e.value
              })
            }} value={Chunk120356} /></Chunk481060.xJW>}{<Chunk481060.xJW><Chunk481060.FXm withTransparentBackground={true} className={Chunk560030.theme} orientation={"horizontal"} options={[{
              name: "Upright",
              value: "upright"
            }, {
              name: "Italic",
              value: "italic"
            }, {
              name: "Mono",
              value: "mono"
            }]} onChange={e => {
              E(e.value)
            }} value={j} /></Chunk481060.xJW>}</div>}{<div className={Chunk560030.textGrid}>{<div />}{C.map(e => <div className={x.columnHeading}><o.X6q variant={"eyebrow"}>{e}</o.X6q></div>)}{[10, 12, 14, 15, 16, 18, 20, 24].map(e => <r.Fragment>{<div className={x.fontSize}>{<o.X6q variant={"eyebrow"}>{e}{"px"}</o.X6q>}{100 !== v ? <o.X6q variant={"eyebrow"} color={"text-muted"}>{"("}{e * v / 100}{")"}</o.X6q> : null}</div>}{C.map(t => {
            var n;
            let r = null != (n = "custom" === N ? T : N) ? n : "";
            return <div className={x.textSample}><div title={"".concat(e, "px at ").concat(t)} className={a()(x.text, {
                  [x.breakAnywhere]: !r.includes(" ")
                })} style={{
                  fontSize: e,
                  fontWeight: O.get(t)
                }}>{<p>{r}</p>}{<p style={{
                    textTransform: "lowercase"
                  }}>{r}</p>}{<p style={{
                    textTransform: "uppercase"
                  }}>{r}</p>}</div></div>
          })}</r.Fragment>)}</div>}</Chunk481060.hjN></div>
}