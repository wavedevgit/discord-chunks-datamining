/** Chunk was on 46746 **/
/** chunk id: 328242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk668519 = require("./668519.js"),
  Chunk855403 = require("./855403.js"),
  Chunk615161 = require("./615161.js"),
  Chunk676462 = require("./676462.js"),
  Chunk388032 = require("./388032.js"),
  Chunk814799 = require("./814799.js");

function p(e) {
  let {
    source: t
  } = e;
  return t.id.startsWith(s.vA.SCREEN) ? <o.pzj size={"xs"} /> : t.id.startsWith(s.vA.WINDOW) ? null != t.icon && "" !== t.icon ? <img src={t.icon} className={h.sourceIcon} alt={""} /> : <o.GON size={"xs"} /> : <o.Odl size={"xs"} />
}

function x(e) {
  let {
    source: t,
    selected: n,
    twoClickVariant: i,
    onClick: s
  } = e, {
    url: a,
    name: c
  } = t;
  return <o.P3F onClick={() => s(t)} className={l()(h.source, {
      [h.selectedSource]: n
    })}>{<div className={h.sourcePreviewContainer}><div className={h.sourcePreview}>{<img src={a} className={h.sourcePreviewImage} alt={""} />}{!i && <div className={h.sourceOverlay}><div className={h.sourceOverlayCTA}><o.Text variant={"text-sm/medium"} color={"button-filled-white-text"}>{m.intl.string(m.t.z7WGho)}</o.Text></div></div>}</div></div>}{<div className={h.sourceNameContainer}>{<p source={t} />}{<o.Text variant={"text-sm/medium"} className={h.sourceName}>{c}</o.Text>}</div>}</o.P3F>
}

function g(e) {
  var t;
  let {
    onClick: n
  } = e, {
    twoClickVariant: i
  } = (0, c.a)({
    autoTrackExposure: false,
    location: "sourcegrid"
  }), [{
    windowSources: l,
    deviceSources: a,
    screenSources: f,
    sourceType: m,
    fetchingSources: p,
    selectedSource: g
  }] = (0, u.E_)();
  return p ? <div className={h.loading}><o.$jN /></div> : (t = m === s.vA.WINDOW ? l : m === s.vA.SCREEN ? f : a, m === s.vA.CAMERA && 0 === t.length ? <_ /> : <div className={h.root}>{t.map(e => (0, r.jsx)(x, {
      onClick: n,
      source: e,
      selected: null != g && "windowHandle" in g ? (0, d.Z)(e.id, g.windowHandle) : (null == g ? true : g.id) === e.id,
      twoClickVariant: i
    }, e.id))}</div>)
}

function _() {
  return <div className={Chunk814799.emptyState}>{<Chunk481060.Odl size={"md"} color={Chunk481060.TVs.colors.ICON_MUTED} className={Chunk814799.emptyIcon} />}{<Chunk481060.Text variant={"text-lg/medium"} color={"header-primary"} className={Chunk814799.emptyHeader}>{Chunk388032.intl.string(Chunk676462.default["/z3YaW"])}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/medium"} color={"text-secondary"} className={Chunk814799.emptyBody}>{Chunk388032.intl.string(Chunk676462.default.agwSGB)}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/semibold"}>{Chunk388032.intl.format(Chunk676462.default.xpVzr6, {
        helpdeskURL: Chunk63063.Z.getArticleURL(0x53d41ade17)
      })}</Chunk481060.Text>}</div>
}