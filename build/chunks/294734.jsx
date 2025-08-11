/** Chunk was on web.js **/
/** chunk id: 294734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk356264 = require("./356264.js"),
  Chunk628238 = require("./628238.js"),
  Chunk930282 = require("./930282.js"),
  Chunk25015 = require("./25015.jsx"),
  Chunk438075 = require("./438075.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk906467 = require("./906467.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk100604 = require("./100604.js"),
  Chunk694784 = require("./694784.js"),
  Chunk39154 = require("./39154.js"),
  Chunk245216 = require("./245216.jsx"),
  Chunk388032 = require("./388032.js"),
  Chunk752386 = require("./752386.js");

function C() {
  return <div className={Chunk752386.headerContainer}>{<Chunk245216.Z size={"xs"} className={Chunk752386.headerIcon} color={Chunk692547.Z.colors.TEXT_LOW_CONTRAST} />}{<Chunk793030.xv className={Chunk752386.headerText} variant={"text-sm/semibold"} color={"text-low-contrast"}>{Chunk388032.intl.string(Chunk388032.t.ToyvLi)}</Chunk793030.xv>}</div>
}

function R(e) {
  let {
    message: t,
    snapshot: n,
    index: d
  } = e, f = i.useMemo(() => new v.r(t, n, d), [t, n, d]), _ = (0, a.e7)([m.Z, O.default, y.Z, b.Z, E.Z, u.Z], () => f.getForwardInfo(m.Z, O.default, y.Z, b.Z, E.Z, u.Z).footerInfo, [f], s.Z), p = i.useCallback(() => {
    (0, I.Z)(t)
  }, [t]);
  return null == _ ? null : <c.P3F className={N.footerContainer} onClick={p}>{null != _.originIconUrl ? <img className={N.originIcon} src={_.originIconUrl} alt={""} /> : null}{<o.xv className={N.footerText} variant={"text-sm/medium"} color={"none"}>{"".concat(_.originLabel, "  •  ").concat(_.timestampLabel)}</o.xv>}{<c.Fbu size={"xxs"} color={l.Z.colors.TEXT_LOW_CONTRAST} />}</c.P3F>
}

function P(e) {
  var t;
  let {
    message: n,
    snapshot: o,
    index: s
  } = e, l = i.useMemo(() => (0, T.Z)(n, o), [n, o]), c = h.RS.useSetting(), u = h.NA.useSetting(), E = c && u, b = (0, a.e7)([g.Z], () => g.Z.isDeveloper), y = (0, d.A)((null != (t = l.editedTimestamp) ? t : l.timestamp).valueOf()), {
    content: O,
    hasSpoilerEmbeds: v
  } = (0, _.Z)(l, {
    hideSimpleEmbedContent: E,
    isInteracting: false,
    formatInline: false,
    allowList: y,
    allowHeading: y,
    allowLinks: true,
    allowDevLinks: b,
    previewLinkTarget: true
  }), I = (0, a.e7)([m.Z], () => m.Z.getChannel(n.channel_id)), S = h.jU.useSetting();
  return null == I ? null : <div className={N.container}>{<div className={N.quote} />}{<div className={N.content}>{<C />}{<f.ZP message={l} content={O} compact={S} />}{(0, p.Z)({
        channelMessageProps: {
          message: l,
          channel: I,
          compact: S
        },
        hasSpoilerEmbeds: v,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false
      })}{<R message={n} snapshot={o} index={s} />}</div>}</div>
}

function w(e) {
  let {
    message: t
  } = e;
  return <r.Fragment>{t.messageSnapshots.map((e, n) => (0, r.jsx)(P, {
      message: t,
      snapshot: e,
      index: n
    }, n))}</r.Fragment>
}