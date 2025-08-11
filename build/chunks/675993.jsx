/** Chunk was on web.js **/
/** chunk id: 675993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk115130 = require("./115130.js"),
  Chunk147865 = require("./147865.js"),
  Chunk427996 = require("./427996.jsx"),
  Chunk906732 = require("./906732.js"),
  Chunk706302 = require("./706302.js"),
  Chunk812236 = require("./812236.js"),
  Chunk835473 = require("./835473.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk240991 = require("./240991.js"),
  Chunk973616 = require("./973616.js"),
  Chunk626135 = require("./626135.js"),
  Chunk783097 = require("./783097.js"),
  Chunk695676 = require("./695676.js"),
  Chunk520315 = require("./520315.js"),
  Chunk29380 = require("./29380.jsx"),
  Chunk783685 = require("./783685.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk449549 = require("./449549.js"),
  Chunk73433 = require("./73433.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}
let D = 1,
  L = 2e3;

function x(e) {
  let {
    context: t,
    application: n,
    videoUrl: o,
    imageCoverUrl: l,
    sectionName: c,
    hasCommands: d
  } = e, _ = i.useMemo(() => {
    var e;
    return null != (e = (0, O.jD)(n)) ? e : ""
  }, [n]), p = (0, s.e7)([u.Z], () => u.Z.inDevModeForApplication(n.id)), {
    isSlideReady: h
  } = (0, v.hH)(), [m, E] = i.useState(false);
  i.useEffect(() => {
    h && E(true)
  }, [h]);
  let b = null != o;
  return <div className={C.container}>{b ? <div className={C.videoContainer}>{m ? <g.Z className={a()(C.videoCover, C.video)} loop={true} muted={true} autoPlay={true} src={o} poster={l} /> : null}{<img className={C.videoCover} src={l} aria-label={N.intl.string(N.t.X4IxWF)} />}</div> : null}{<div className={b ? C.overviewContainerWithVideo : C.overviewContainerNoVideo}>{<k application={n} />}{<j application={n} />}{_.length > 0 ? <B description={_} /> : null}{p ? <div className={C.developerShelfControlsContainer}><f.W hideSearch={true} className={C.developerShelfControls} /></div> : null}{<G context={t} application={n} sectionName={c} isDeveloperOfThisApp={p} hasCommands={d} />}</div>}{<M application={n} />}</div>
}

function M(e) {
  let {
    application: t
  } = e, n = (0, O.Cb)(t), i = (0, O.Hu)(t);
  return n || i ? <div className={C.monetizationDisclosureContainerStyle}>{n ? <div className={C.monetizationDisclosureStyle}>{<c.EOn size={"sm"} color={c.TVs.colors.INTERACTIVE_MUTED} />}{<c.Text variant={"text-sm/normal"} color={"text-secondary"}>{N.intl.string(N.t["8z5B2d"])}</c.Text>}</div> : null}{i ? <div className={C.monetizationDisclosureStyle}>{<c.uMN size={"sm"} color={c.TVs.colors.INTERACTIVE_MUTED} />}{<c.Text variant={"text-sm/normal"} color={"text-secondary"}>{N.intl.string(N.t["5khEk5"])}</c.Text>}</div> : null}</div> : null
}

function k(e) {
  var t;
  let {
    application: n
  } = e, i = (0, O.BQ)(n) ? n.name : null != (t = (0, O.$d)(n)) ? t : "", o = (0, O.vJ)(n);
  return <div className={C.titleContainer}>{<c.X6q variant={"heading-xl/extrabold"} lineClamp={1}>{i}</c.X6q>}{o ? <div className={C.partnerLabelContainer}><c.Text variant={"text-xs/medium"} color={"text-default"}>{N.intl.string(N.t.LO4f0N)}</c.Text></div> : null}</div>
}

function j(e) {
  let {
    application: t
  } = e, n = i.useMemo(() => {
    var e;
    return (0, O.BQ)(t) && null != (e = null == t ? true : t.tags) ? e : []
  }, [t]);
  return (0, O.ye)(t) ? <div className={C.tagsContainer}>{<U application={t} />}{n.map((e, t) => <div className={C.tagContainer}><c.Text variant={"text-sm/semibold"} color={"interactive-normal"}>{e}</c.Text></div>)}</div> : null
}

function U(e) {
  var t;
  let {
    application: n
  } = e;
  if (!(0, O.ye)(n)) return null;
  let i = null != (t = (0, O.BQ)(n) ? n instanceof b.ZP ? n.maxParticipants : n.max_participants : 0) ? t : 0;
  return <div className={C.tagContainer}>{<c.BFJ size={"xs"} color={c.TVs.colors.INTERACTIVE_NORMAL} />}{<c.Text variant={"text-sm/semibold"} color={"interactive-normal"}>{(0, d.lY)(i)}</c.Text>}</div>
}

function G(e) {
  var t;
  let {
    context: n,
    application: o,
    sectionName: a,
    hasCommands: s,
    isDeveloperOfThisApp: u
  } = e, d = (0, h.Fs)(n, o.id), f = (0, m.q)(o.id), g = null == f || null == (t = f.bot) ? true : t.id, E = (0, p.Z)({
    context: n,
    application: o,
    botUserId: g
  }), {
    analyticsLocations: b
  } = (0, _.ZP)();
  if (i.useEffect(() => {
      if (!(0, O.BQ)(o) || !(0, O.ye)(o)) return;
      let e = setTimeout(() => {
        (null == d || null == g) && y.default.track(A.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
          application_id: o.id,
          is_primary_entry_point_command_non_null: null != d,
          is_bot_user_id_non_null: null != g,
          show_try_it_out_button: E
        })
      }, L);
      return () => clearTimeout(e)
    }, [o, d, g, E]), !(0, O.BQ)(o) || !(0, O.ye)(o)) return null;
  let v = l.Ph.MAX;
  return null != d && null != g ? <div className={C.entrypointContainer}>{<div className={C.entryPointContainerFlexChild}><T.Z context={n} application={o} sectionName={a} primaryEntryPointCommand={d} buttonSize={v} /></div>}{E && null != g ? <div className={C.entryPointContainerFlexChild}><S.Z botUserId={g} applicationId={o.id} buttonSize={v} analyticsLocations={b} /></div> : null}</div> : u && !s && (0, O.ye)(o) ? <c.Wn className={C.primaryEntryPointWarningMessage} messageType={c.QYI.WARNING}>{N.intl.format(N.t["s/3hjI"], {})}</c.Wn> : null
}

function B(e) {
  let {
    description: t
  } = e, [n, o] = i.useState(true);
  i.useLayoutEffect(() => o(false), []);
  let a = i.useMemo(() => (0, E.parseBioReact)(t), [t]),
    {
      ref: s,
      lineHeight: l,
      lineCount: u
    } = Z(),
    d = i.useMemo(() => {
      if (null == l || null == u) return {
        key: 0
      };
      let e = l * u;
      return {
        key: 1,
        minHeightOverride: Math.min(e, D * l),
        maxHeightOverride: e
      }
    }, [u, l]),
    {
      ref: f,
      isTransitioning: _,
      onTransitionEnd: p
    } = (0, I.Z)(w({
      isExpanded: n
    }, d)),
    h = n || _;
  return <div className={C.descriptionContainer}>{<div ref={f} className={C.overflowHidden} onTransitionEnd={p}><c.Text ref={s} className={R.markup} variant={"text-sm/medium"} lineClamp={h ? true : D} style={{
          maxHeight: h ? true : d.minHeightOverride
        }}>{a}</c.Text></div>}{null != u && u > D ? <c.P3F className={C.expandableDescriptionClickable} onClick={() => o(e => !e)}>{<c.Text variant={"text-sm/semibold"} color={"text-brand"}>{h ? N.intl.string(N.t.u4YJ8v) : N.intl.string(N.t["N/tajI"])}</c.Text>}{h ? <c.u04 size={"sm"} color={c.TVs.colors.TEXT_BRAND} /> : <c.CJ0 size={"sm"} color={c.TVs.colors.TEXT_BRAND} />}</c.P3F> : null}</div>
}

function Z() {
  let e = Chunk73800.useRef(null),
    [t, n] = Chunk73800.useState(null),
    [r, o] = Chunk73800.useState(null);
  return Chunk73800.useLayoutEffect(() => {
    let t = module.current;
    if (null === exports || 0 === exports.clientHeight) return;
    let r = parseInt(getComputedStyle(exports).lineHeight);
    isNaN(Chunk255367) || (require(Chunk255367), Chunk120356(Math.floor(exports.clientHeight / Chunk255367)))
  }, []), {
    ref: module,
    lineHeight: exports,
    lineCount: Chunk255367
  }
}