/** Chunk was on web.js **/
/** chunk id: 841284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk777207 = require("./777207.jsx"),
  Chunk962293 = require("./962293.js"),
  Chunk45251 = require("./45251.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk653048 = require("./653048.js");

function d(e) {
  let {
    pendingScheduledMessage: t
  } = e, {
    channelId: n,
    scheduledTimestamp: i
  } = t;

  function d(e) {
    e.stopPropagation(), (0, l.pO)(n)
  }
  return <div className={u.clipContainer}><div className={u.container}><div className={u.scheduledMessageBar}>{<a.x color={"header-secondary"} className={o()(u.text, u.scheduledMessageBarLabel)} variant={"text-sm/normal"}>{c.intl.formatToPlainString(c.t.MQcRX1, {
            timestamp: new Date(i).valueOf()
          })}</a.x>}{<div className={u.actions}><s.B onClick={d} /></div>}</div></div></div>
}