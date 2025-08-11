/** Chunk was on web.js **/
/** chunk id: 53432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.js"),
  Chunk705262 = require("./705262.js"),
  Chunk210887 = require("./210887.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk874893 = require("./874893.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function E() {
  let e = Chunk695346.jU.useSetting(),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)(),
    {
      theme: n,
      useSystemTheme: E,
      useForcedColors: b
    } = (0, Chunk442837.cj)([Chunk210887.Z, Chunk740492.ZP, Chunk607070.Z], () => ({
      theme: Chunk210887.Z.theme,
      useSystemTheme: Chunk740492.ZP.useSystemTheme,
      useForcedColors: Chunk607070.Z.useForcedColors
    })),
    y = Chunk695346.YC.useSetting(),
    O = (e, i) => <a.k5B id={e} group={"input-modes"} label={i} disabled={b} checked={E === h.KW.ON ? "system" === e : e === n} action={() => {
        (0, d.Yk)({
          isPersisted: true,
          analyticsLocations: t,
          themeName: "default ".concat(e)
        }), (0, s.ZI)({
          theme: e
        })
      }} />,
    v = O(Chunk981631.BRd.DARK, Chunk388032.intl.string(Chunk388032.t.SMPT1t)),
    I = O(Chunk981631.BRd.LIGHT, Chunk388032.intl.string(Chunk388032.t.K2sFfn)),
    T = [<Chunk481060.kSQ>{I}{v}{O(Chunk981631.BRd.DARKER, Chunk388032.intl.string(Chunk388032.t.b8Cei4))}{O(Chunk981631.BRd.MIDNIGHT, Chunk388032.intl.string(Chunk388032.t.Do4ZJy))}{O("system", Chunk388032.intl.string(Chunk388032.t["7rOU6u"]))}</Chunk481060.kSQ>, , ];
  return T.push(<Chunk481060.kSQ label={"UI Density"}>{<Chunk481060.k5B id={"compact-ui"} group={"list-density"} label={Chunk388032.intl.string(Chunk388032.t["7iegX1"])} checked={y === Chunk524437.Pi.COMPACT} action={() => {
        Chunk695346.YC.updateSetting(Chunk524437.Pi.COMPACT)
      }} />}{<Chunk481060.k5B id={"default-ui"} group={"list-density"} label={Chunk388032.intl.string(Chunk388032.t.bBvAEB)} checked={y === Chunk524437.Pi.DEFAULT} action={() => {
        Chunk695346.YC.updateSetting(Chunk524437.Pi.DEFAULT)
      }} />}{<Chunk481060.k5B id={"cozy-ui"} group={"list-density"} label={Chunk388032.intl.string(Chunk388032.t["4cuYHx"])} checked={y === Chunk524437.Pi.COZY} action={() => {
        Chunk695346.YC.updateSetting(Chunk524437.Pi.COZY)
      }} />}</Chunk481060.kSQ>), T.push(<Chunk481060.kSQ label={"Message Display"}>{<Chunk481060.k5B id={"cozy-chat"} group={"chat-density"} label={Chunk388032.intl.string(Chunk388032.t.Jqj4cX)} checked={!module} action={() => {
        Chunk695346.jU.updateSetting(false), (0, Chunk857595.ZZ)()
      }} />}{<Chunk481060.k5B id={"compact-chat"} group={"chat-density"} label={Chunk388032.intl.string(Chunk388032.t["1JNcPT"])} checked={module} action={() => {
        Chunk695346.jU.updateSetting(true), (0, Chunk857595.ZZ)()
      }} />}</Chunk481060.kSQ>), T
}