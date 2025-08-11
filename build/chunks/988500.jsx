/** Chunk was on web.js **/
/** chunk id: 988500, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk203143 = require("./203143.js"),
  Chunk615669 = require("./615669.js"),
  Chunk388032 = require("./388032.jsx");
let l = {
  [Chunk615669.z.END_EARLY]: e => <i.sNh id={"end-poll-early"} label={s.intl.string(s.t.grdwws)} icon={i.e0C} action={() => {
      o.Z.endPollEarly({
        channelId: e.channel_id,
        messageId: e.id
      })
    }} iconProps={{
      color: "currentColor"
    }} />
};

function c(e) {
  let t = (0, a.Z)(e);
  return 0 === t.length ? null : <r.Fragment>{t.map(t => l[t](e))}</r.Fragment>
}