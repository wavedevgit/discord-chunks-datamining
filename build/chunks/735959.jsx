/** Chunk was on 93886 **/
/** chunk id: 735959, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk515149 = require("./515149.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk330711 = require("./330711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk428530 = require("./428530.jsx"),
  Chunk257785 = require("./257785.jsx"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    [t, a] = Chunk73800.useState(),
    i = (0, Chunk515149.runtimeHashMessageKey)(null != exports ? exports : ""),
    f = Chunk73800.useMemo(() => Chunk388032.t[Chunk913527], [Chunk913527]);
  return <div>{<Chunk665149.ZP>{<Chunk665149.ZP.Icon icon={Chunk481060.os0} tooltip={"Locale"} />}{<Chunk665149.ZP.Title>{"Locale"}</Chunk665149.ZP.Title>}</Chunk665149.ZP>}{<Chunk257785.E>{<Chunk257785.Z9 name={"Active System"}>{"@discord/intl"}</Chunk257785.Z9>}{<Chunk257785.Z9 name={"App"}>{module}</Chunk257785.Z9>}{<Chunk257785.Z9 name={"System"}>{Chunk388032.systemLocale}</Chunk257785.Z9>}{<Chunk257785.Z9 name={"@discord/intl"}>{Chunk388032.intl.currentLocale}</Chunk257785.Z9>}{<Chunk257785.Z9 name={"common i18n"}>{Chunk330711.Z.getLocale()}</Chunk257785.Z9>}{<Chunk257785.Z9 name={"Moment"}>{s().locale()}</Chunk257785.Z9>}</Chunk257785.E>}{<Chunk665149.ZP>{<Chunk665149.ZP.Icon icon={Chunk481060.os0} tooltip={"Messages"} />}{<Chunk665149.ZP.Title>{"New System Messages"}</Chunk665149.ZP.Title>}</Chunk665149.ZP>}{<Chunk257785.E><Chunk257785.Z9 name={"Unique Rendered Main Messages"}>{Object.keys(Chunk388032.t).length}</Chunk257785.Z9></Chunk257785.E>}{<Chunk755721.Is onChange={function(e) {
        a(e)
      }} name={"Message name"} style={{
        margin: 16
      }} placeholder={"Find a message"} />}{<Chunk257785.E>{<Chunk257785.Z9 name={"Hashed key"}>{Chunk913527}</Chunk257785.Z9>}{<Chunk257785.Z9 name={"Exists?"}>{null != f ? "yes" : "no"}</Chunk257785.Z9>}</Chunk257785.E>}{<Chunk428530.Z data={null == f ? true : f(module)} />}</div>
}