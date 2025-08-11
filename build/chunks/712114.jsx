/** Chunk was on web.js **/
/** chunk id: 712114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk536442 = require("./536442.js"),
  Chunk39604 = require("./39604.js"),
  Chunk176127 = require("./176127.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk235966 = require("./235966.js");

function _(e) {
  let {
    onOpenClips: t,
    lastClipsSession: n,
    closePopout: _
  } = e;

  function p() {
    (0, l.Kw)(l.v6.CLIPS_CHANNEL_ATTACH_REMINDER), _()
  }
  return (i.useEffect(() => () => {
    (0, c.eL)()
  }, []), (0, s.Z)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.HOTSPOT,
    properties: {
      hotspot_location: l.v6.CLIPS_CHANNEL_ATTACH_REMINDER
    }
  }), null == n) ? null : <div className={f.recentClipsPopout}>{<div className={f.thumbnailStackContainer}><u.Z /></div>}{<a.X6q className={f.header} color={"header-primary"} variant={"heading-md/extrabold"}>{d.intl.format(d.t["+qxkzM"], {
        count: n.newClipIds.length
      })}</a.X6q>}{<a.Text color={"text-default"} className={f.__invalid_content} variant={"text-sm/medium"}>{d.intl.format(d.t["7XX0/f"], {
        applicationName: n.applicationName
      })}</a.Text>}{<div className={f.buttonsContainer}><a.hE2>{<a.zxk variant={"secondary"} text={d.intl.string(d.t["7r5Z19"])} onClick={p} />}{<a.zxk variant={"primary"} text={d.intl.string(d.t.md4qKy)} onClick={t} />}</a.hE2></div>}</div>
}