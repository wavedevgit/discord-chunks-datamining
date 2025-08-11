/** Chunk was on web.js **/
/** chunk id: 222709, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk528963 = require("./528963.js"),
  Chunk143740 = require("./143740.jsx"),
  Chunk212342 = require("./212342.js"),
  Chunk388032 = require("./388032.js"),
  Chunk745641 = require("./745641.js");
let _ = e => {
  let {
    channelId: t,
    messageId: n
  } = e, _ = (0, o.e7)([u.Z], () => u.Z.shouldShowBump(n), [n]), p = i.useCallback(() => {
    l.Z.dismissPublishBump(n), (0, c.Z)(t, n)
  }, [t, n]), h = i.useCallback(() => {
    l.Z.dismissPublishBump(n)
  }, [n]), m = i.useCallback(() => {
    l.Z.permanentlyHidePublishBump(t)
  }, [t]);
  return _ ? <div className={f.container}>{<div className={f.bumpBox}>{<s.MqZ size={"xs"} color={"currentColor"} className={f.icon} />}{<s.X6q variant={"heading-sm/normal"} className={f.tagline}>{d.intl.string(d.t.hasZoa)}</s.X6q>}{<a.zx color={a.zx.Colors.LINK} look={a.zx.Looks.LINK} size={a.zx.Sizes.MIN} className={f.publish} onClick={p}>{d.intl.string(d.t["MFGE5+"])}</a.zx>}{<s.P3F onClick={h}><s.k$p size={"xs"} color={"currentColor"} className={f.closeIcon} /></s.P3F>}</div>}{<s.Text color={"text-muted"} className={f.hidePermanently} variant={"text-sm/normal"}><s.P3F onClick={m}>{d.intl.string(d.t.efSkDg)}</s.P3F></s.Text>}</div> : null
}