/** Chunk was on web.js **/
/** chunk id: 683650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => g,
  o: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk266843 = require("./266843.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk444879 = require("./444879.js"),
  Chunk87181 = require("./87181.js");

function m() {
  let e = () => {
    (0, Chunk110560.navigateToQuestHome)({
      fromContent: Chunk497505.jn.QUESTS_EMBED
    })
  };
  return <div className={Chunk444879.buttonContainer}><Chunk755721.zx className={Chunk444879.button} color={Chunk755721.Tt.BRAND} onClick={module}>{Chunk388032.intl.string(Chunk388032.t.GURBQk)}</Chunk755721.zx></div>
}
var g = function(e) {
  return e.NOT_FOUND = "not_found", e.MOBILE_ONLY = "mobile_only", e
}({});

function E(e) {
  let {
    questId: t,
    reason: n = "not_found"
  } = e, {
    containerRef: i,
    size: a
  } = (0, d.h)();
  return (0, l.Zk)(f.V_.UNKNOWN_QUEST, t), <div ref={e => {
      i.current = e
    }} className={o()(p.container, {
      [p.wide]: "lg" === a,
      [p.tall]: "lg" !== a
    })}>{<div className={p.contentContainer}>{<s.X6q variant={"lg" === a ? "heading-xl/bold" : "heading-lg/bold"} color={"header-primary"}>{_.intl.string(_.t.vnP31d)}</s.X6q>}{<s.Text variant={"lg" === a ? "text-sm/medium" : "text-xs/medium"} color={"text-default"} className={p.__invalid_mobileWebCopy}>{_.intl.string("mobile_only" === n ? _.t.Pag1gY : _.t.CTn0yc)}</s.Text>}{<m />}</div>}{<div className={p.imgContainer}><img src={h} alt={""} className={p.missingQuestImage} /></div>}</div>
}