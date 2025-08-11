/** Chunk was on web.js **/
/** chunk id: 438306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk933557 = require("./933557.js"),
  Chunk454585 = require("./454585.js"),
  Chunk131704 = require("./131704.js"),
  Chunk496675 = require("./496675.js"),
  Chunk396769 = require("./396769.jsx"),
  Chunk967128 = require("./967128.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk991992 = require("./991992.js"),
  Chunk73433 = require("./73433.js");

function g(e) {
  let {
    channel: t
  } = e, n = (0, s.ZP)(t, true), g = (0, i.e7)([u.Z], () => u.Z.can(_.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
  return <f.ZP channelId={t.id}>{<f.Kq channelType={t.type} />}{<f.Ot>{p.intl.format(p.t.I3R7Vl, {
        channelName: n
      })}</f.Ot>}{<f.jz className={m.markup}>{p.intl.format(p.t.pYMVRU, {
        channelName: n,
        topicHook: () => l.Z.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })}</f.jz>}{g ? <div className={h.buttonContainer}><d.Z label={p.intl.string(p.t["3gUsJS"])} onClick={() => {
          a.ZP.open(t.id)
        }} icon={(0, r.jsx)(o.vdY, {
          size: "xs",
          color: "currentColor"
        })} /></div> : null}</f.ZP>
}