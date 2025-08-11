/** Chunk was on 4266 **/
/** chunk id: 316210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk63063 = require("./63063.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk698657 = require("./698657.js"),
  Chunk708901 = require("./708901.js");
let f = e => {
  switch (e) {
    case c.jn.QUEST_BAR:
    case c.jn.QUEST_BAR_V2:
      return {
        location: true, age: true, activity: true
      };
    case c.jn.ACTIVITY_PANEL:
    case c.jn.QUESTS_EMBED:
    case c.jn.QUEST_LIVE_STREAM:
      return {
        activity: true
      };
    default:
      return
  }
};

function g(e) {
  let {
    transitionState: t,
    onClose: n,
    questContent: c,
    quest: g
  } = e, p = f(c), _ = s.useMemo(() => {
    var e;
    return (0, l.Fs)({
      isTargetedDisclosure: null != p,
      gamePublisher: g.config.messages.gamePublisher,
      gameTitle: g.config.messages.gameTitle,
      cosponsorName: null == (e = g.config.cosponsorMetadata) ? true : e.name
    })
  }, [g, p]);
  return <a.Y0X transitionState={t} size={a.CgR.DYNAMIC} className={u.modalRoot} parentComponent={"QuestsDisclosureModal"}>{<a.xBx direction={o.Z.Direction.VERTICAL} separator={false} className={u.modalHeader}>{<div className={u.modalTop}>{<div className={u.iconFrame}><img alt={""} src={x} /></div>}{<a.olH className={u.closeBtn} onClick={n} />}</div>}{<a.X6q variant={"heading-xl/bold"}>{m.intl.string(m.t.GcsZKC)}</a.X6q>}</a.xBx>}{<a.hzk className={u.modalContent}>{<a.Text variant={"text-sm/medium"} color={"header-secondary"} className={u.upperBodyText}>{_}</a.Text>}{<j targetedTraits={p} />}{<a.Text variant={"text-xs/medium"} color={"text-muted"}>{m.intl.format(m.t.tzq9WV, {
          privacySettingsUrl: i.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS)
        })}</a.Text>}</a.hzk>}{<a.mzw className={u.footer}><a.zxk variant={"primary"} text={m.intl.string(m.t.cpT0Cg)} onClick={n} /></a.mzw>}</a.Y0X>
}

function p(e) {
  let {
    location: t,
    age: n,
    activity: s
  } = e;
  return <ul className={u.targetList}>{t && <_ icon={a.enf}>{m.intl.string(m.t.xQSdPj)}</_>}{n && <_ icon={a.tBG}>{m.intl.string(m.t.mYt7hY)}</_>}{s && <_ icon={a.iWm}>{m.intl.string(m.t.XAsWxc)}</_>}</ul>
}

function j(e) {
  let {
    targetedTraits: t
  } = e;
  return null != t ? <p{...function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, t)} /> : null
}

function _(e) {
  let {
    icon: t,
    children: n
  } = e;
  return <a.Text variant={"text-sm/medium"} tag={"li"} className={u.targetItem}>{<t size={"xs"} color={"currentColor"} />}{n}</a.Text>
}