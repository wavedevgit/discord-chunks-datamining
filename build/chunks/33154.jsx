/** Chunk was on web.js **/
/** chunk id: 33154, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  s: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk313201 = require("./313201.js"),
  Chunk823379 = require("./823379.js"),
  Chunk41776 = require("./41776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk695256 = require("./695256.js"),
  h = function(e) {
    return e[e.CHAT = 0] = "CHAT", e[e.REACTIONS = 1] = "REACTIONS", e
  }({});
let m = e => {
  let {
    type: t,
    guild: h,
    closePopout: m,
    ctaRef: g
  } = e, E = (0, c.Dt)(), [b, y] = i.useState(false), O = (0, o.e7)([d.Z], () => d.Z.isLurking(h.id), [h.id]);
  i.useEffect(() => {
    b && !O && m()
  }, [b, O, m]);
  let v = null,
    I = _.intl.string(_.t.d7b1p6);
  switch (t) {
    case 0:
      v = _.intl.string(_.t.Xiwf1d);
      break;
    case 1:
      v = _.intl.string(_.t.GXvlU1);
      break;
    default:
      return (0, u.vE)(t)
  }
  if (null == v) return null;
  let T = async () => {
    y(true);
    try {
      await l.Z.joinGuild(h.id, {
        source: f.vtS.CHAT_INPUT_BLOCKER
      }), m()
    } catch (e) {
      y(false)
    }
  };
  return <s.VqE className={p.container} aria-labelledby={E}>{<img alt={""} className={p.image} src={n(64395)} />}{<div className={p.content}>{<s.X6q variant={"heading-md/semibold"} id={E}>{v}</s.X6q>}{<s.Text color={"header-secondary"} variant={"text-sm/normal"}>{I}</s.Text>}{<div className={p.buttonContainer}>{<s.zxk variant={"primary"} text={_.intl.string(_.t["9VLmlZ"])} buttonRef={g} onClick={T} loading={b} />}{<a.zx onClick={m} look={a.zx.Looks.BLANK} className={p.cancel}>{_.intl.string(_.t["2m+Sqq"])}</a.zx>}</div>}</div>}</s.VqE>
}