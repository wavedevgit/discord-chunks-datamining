/** Chunk was on web.js **/
/** chunk id: 280885, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk40966 = require("./40966.jsx"),
  Chunk580552 = require("./580552.js"),
  Chunk249458 = require("./249458.js"),
  Chunk313201 = require("./313201.js"),
  Chunk240991 = require("./240991.js"),
  Chunk388032 = require("./388032.js"),
  Chunk73433 = require("./73433.js");

function h(e) {
  let {
    userBio: t,
    className: n,
    animateOnHover: o = false,
    isHovering: h = false,
    lineClamp: m = 6,
    setLineClamp: g = true,
    textColor: E,
    userId: b
  } = e, y = (0, d.Dt)(), O = i.useMemo(() => (0, c.Z)(b) ? <l.Z /> : null == t || "" === t ? null : (0, f.parseBioReact)(t), [b, t]);
  return null == O ? null : <section className={a()(n, p.markup)} aria-labelledby={y}>{<s.nn4><s.H id={y}>{_.intl.string(_.t.jGoPJS)}</s.H></s.nn4>}{<s.Text variant={"text-sm/normal"} lineClamp={g ? m : true} color={true !== E ? E : true}><u.G.Provider value={{
          disableAnimations: o && !h,
          disableInteractions: false
        }}>{O}</u.G.Provider></s.Text>}</section>
}