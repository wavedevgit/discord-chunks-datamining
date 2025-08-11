/** Chunk was on 5863 **/
/** chunk id: 74888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk11352 = require("./11352.js"),
  Chunk610617 = require("./610617.js"),
  Chunk413684 = require("./413684.js"),
  Chunk298812 = require("./298812.js"),
  Chunk200115 = require("./200115.js"),
  Chunk406205 = require("./406205.js"),
  Chunk388032 = require("./388032.js"),
  Chunk721802 = require("./721802.js");

function v(e) {
  return <div className={p.sectionHeader}><a.X6q variant={"text-xs/bold"} className={p.sectionHeaderTitle} color={"text-muted"}>{e.title}</a.X6q></div>
}

function j(e) {
  return <div>{null != e.title && <v title={e.title} />}{<div className={r()(p.sectionContent, {
        [p.sectionContentPadding]: true !== e.noPadding
      })}>{e.children}</div>}</div>
}

function S(e) {
  let {
    onClose: t
  } = e;
  return <a.xBx className={p.header}>{<div className={p.headerLeft}>{<a.Dkj size={"md"} color={"currentColor"} className={p.headerBell} />}{<a.X6q variant={"heading-lg/semibold"}>{x.intl.string(x.t.h850Sk)}</a.X6q>}</div>}{<a.olH onClick={t} />}</a.xBx>
}

function N(e) {
  let t = s.useRef(null),
    n = d.Y.useExperiment({
      location: "notification_settings_modal_redesign"
    }, {
      autoTrackExposure: true
    }).enabled,
    l = s.useRef(null);
  return (0, o.Ng)(() => {
    let n = setTimeout(() => {
      e.scrollToChannels && null != t.current && null != l.current && t.current.scrollIntoViewNode({
        node: l.current,
        shouldScrollToStart: true,
        padding: 40
      })
    }, 1e3);
    return () => clearTimeout(n)
  }), <a.Y0X size={a.CgR.MEDIUM} transitionState={e.transitionState} aria-label={x.intl.string(x.t.h850Sk)} parentComponent={"NotificationSettingsModalRedesign"}>{<S onClose={e.onClose} />}{<a.hzk className={p.content} scrollerRef={t}>{<j><g.Z guildId={e.guildId} /></j>}{<j title={x.intl.string(x.t["R9Ej9/"])} noPadding={true}><m.Z guildId={e.guildId} /></j>}{n && <j><c.Z onClose={e.onClose} guildId={e.guildId} isRedesign={true} /></j>}{<j title={x.intl.string(x.t["31DySk"])}><u.Z guildId={e.guildId} /></j>}{<v title={x.intl.string(x.t.JrySi4)} />}{<h.Z guildId={e.guildId} requestScrollToBottom={() => {
          null != t && null != t.current && t.current.scrollToBottom({
            animate: true
          })
        }} ref={l} />}</a.hzk>}</a.Y0X>
}