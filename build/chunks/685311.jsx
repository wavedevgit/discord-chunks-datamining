/** Chunk was on 27978 **/
/** chunk id: 685311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk536285 = require("./536285.js"),
  Chunk857458 = require("./857458.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk20493 = require("./20493.js");
let p = function(e) {
  let {
    match: t,
    location: n,
    attemptDeepLink: l
  } = e, [p, f] = i.useState(0);
  i.useEffect(() => {
    s.default.once("connected", () => {
      f(1)
    }), s.default.once("disconnected", () => {
      (0, u.uL)((0, a.M)())
    }), s.default.connect()
  }, []), i.useEffect(() => {
    if (0 !== p) return;
    let e = setTimeout(() => (0, u.uL)((0, a.M)()), 3e3);
    return () => clearTimeout(e)
  }, [p]);
  let m = i.useCallback(async (e, t) => {
    try {
      f(2), await l(e, t), f(3)
    } catch (e) {
      console.error("Error opening deeplink", e)
    }
  }, [l]);
  if ((0, u.DB)()) return null;
  switch (p) {
    case 1:
      return <c.ZP>{<c.Dx className={h.marginBottom8}>{d.intl.string(d.t.qllnGh)}</c.Dx>}{<c.DK>{d.intl.string(d.t.SXCxyc)}</c.DK>}{<c.zx className={h.marginTop40} onClick={() => m(t, n)}>{d.intl.string(d.t.UQvCf3)}</c.zx>}{<c.zx className={o()(h.marginTop8, h.marginCenterHorz)} color={c.zx.Colors.LINK} look={c.zx.Looks.LINK} onClick={() => (0, u.uL)((0, a.M)())}>{d.intl.string(d.t["2ixEBg"])}</c.zx>}</c.ZP>;
    case 0:
    case 2:
      return <c.ZP>{<c.Dx>{d.intl.string(d.t["Z+hCVV"])}</c.Dx>}{<c.Hh />}</c.ZP>;
    case 3:
      return <c.ZP>{<c.Dx className={h.marginBottom8}>{d.intl.string(d.t.csrAMD)}</c.Dx>}{<c.DK>{d.intl.string(d.t.ghBJz8)}</c.DK>}</c.ZP>
  }
}