/** Chunk was on web.js **/
/** chunk id: 860151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk381176 = require("./381176.js"),
  Chunk373370 = require("./373370.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk817447 = require("./817447.js");
let d = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: i,
    questContent: d,
    taskDetails: f,
    location: _,
    sourceQuestContent: p
  } = e, h = (0, l.DD)({
    quest: i,
    taskDetails: f,
    location: _,
    questContent: d,
    sourceQuestContent: p
  }), m = (0, s.h)({
    location: _,
    questConfig: i.config
  });
  return <div className={o()(u.wrapper, t)} style={m ? true : {
      color: i.config.colors.primary
    }}>{<c.Z autoplay={n} className={u.rewardTile} quest={i} questContent={d} location={_} sourceQuestContent={p} />}{<div className={u.copy}><a.Text variant={"text-sm/normal"} color={"text-default"}>{h}</a.Text></div>}</div>
}