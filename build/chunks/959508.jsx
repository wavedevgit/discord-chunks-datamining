/** Chunk was on 22988 **/
/** chunk id: 959508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk603211 = require("./603211.js"),
  Chunk710344 = require("./710344.js"),
  Chunk637853 = require("./637853.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk889369 = require("./889369.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk976983 = require("./976983.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk434840 = require("./434840.js");
let O = {
  optionErrors: []
};

function y(e) {
  var t;
  let {
    guild: n,
    prompt: l,
    disableAutofocus: u,
    promptIndex: x,
    dragIndex: y,
    includeCount: I,
    singleColumn: E,
    onPromptDragComplete: S,
    onPromptDragStart: T,
    onPromptDragReset: P
  } = e, w = (0, s.e7)([h.Z], () => h.Z.editedDefaultChannelIds), {
    drag: R,
    dragSourcePosition: Z,
    drop: D,
    setIsDraggable: A
  } = (0, d.Z)({
    type: "ONBOARDING_PROMPT_CARD",
    index: y,
    optionId: l.id,
    onDragStart: T,
    onDragComplete: S,
    onDragReset: P
  }), k = (0, s.cj)([b.Z], () => {
    var e;
    return null != (e = b.Z.errors[x]) ? e : O
  }), [L, M] = i.useState(false), [G, U] = i.useState(false), B = null != (t = k.options) ? t : k.optionErrors.filter(p.lm)[0], F = k.config, H = l.options.length >= j.fY, z = (0, m.kl)(n.id, Array.from(w), [l]).length - w.size, W = i.useRef(null), V = i.useRef(x);
  return (i.useEffect(() => {
    V.current = x
  }), i.useLayoutEffect(() => {
    setTimeout(() => {
      if (0 === V.current && !u) {
        var e;
        null == (e = W.current) || e.focus()
      }
    }, 0)
  }, [u]), L) ? <c.tEY><div tabIndex={0} onFocus={() => U(true)} onBlur={() => U(false)} onMouseLeave={() => U(false)} className={a()(_.container, {
        [_.dropIndicatorBefore]: null != Z && x < Z,
        [_.dropIndicatorAfter]: null != Z && x > Z,
        [_.containerFocused]: G
      })} ref={e => {
        R(D(e))
      }}>{<div className={_.dragContainer} onMouseEnter={() => A(true)} onMouseLeave={() => A(false)}><c.Vni size={"xs"} color={"currentColor"} className={_.dragIcon} /></div>}{<c.Text className={_.questionNumber} variant={"text-xs/semibold"} color={"text-muted"}>{v.intl.format(v.t.yjS3zs, {
          index: x + 1
        })}</c.Text>}{<c.Text variant={"text-lg/semibold"} color={"text-default"}>{l.title}</c.Text>}{<c.P3F className={_.collapseButton} onClick={() => M(false)}><g.Z direction={g.Z.Directions.DOWN} height={16} width={16} /></c.P3F>}{<c.DY3 text={v.intl.string(v.t["Ku+86e"])} className={_.removeButton}><c.P3F className={_.closeIcon} onClick={() => (0, f.fi)(n, l.id)}><c.XHJ size={"xs"} color={"currentColor"} /></c.P3F></c.DY3>}</div></c.tEY> : <c.tEY><div tabIndex={0} onFocus={() => U(true)} onBlur={() => U(false)} className={a()(_.container, {
        [_.dropIndicatorBefore]: null != Z && x < Z,
        [_.dropIndicatorAfter]: null != Z && x > Z,
        [_.containerFocused]: G
      })} ref={e => {
        R(D(e))
      }}>{<div className={_.dragContainer} onMouseEnter={() => A(true)} onMouseLeave={() => A(false)}><c.Vni size={"xs"} color={"currentColor"} className={_.dragIcon} /></div>}{<c.Text className={_.questionNumber} variant={"text-xs/semibold"} color={"text-muted"}>{v.intl.format(v.t.yjS3zs, {
          index: x + 1
        })}</c.Text>}{<o.Is className={_.title} inputClassName={_.titleInput} inputRef={W} value={l.title} onChange={e => (0, f.Kk)(n, l.id, {
          title: e
        })} placeholder={v.intl.string(v.t.QMCuCg)} maxLength={j.iU} error={k.title} />}{<C prompt={l} guild={n} />}{<c.Text className={_.optionsHeader} variant={"text-xs/semibold"} color={"text-muted"}>{H ? v.intl.formatToPlainString(v.t.AbvhZG, {
          count: l.options.length,
          total: j.qm
        }) : v.intl.formatToPlainString(v.t.b7VxYW, {
          count: l.options.length,
          total: j.qm
        })}</c.Text>}{<N guild={n} prompt={l} promptIndex={x} errors={k} singleColumn={E} />}{null != B ? <c.pdY error={B} /> : null}{<div className={_.buttons}>{<div className={_.checkboxes}>{<c.XZJ size={20} type={c.XZJ.Types.INVERTED} value={!l.singleSelect} onChange={(e, t) => (0, f.Kk)(n, l.id, {
              singleSelect: !t
            })}><c.Text variant={"text-sm/normal"} color={"interactive-normal"}>{v.intl.string(v.t.uCebZW)}</c.Text></c.XZJ>}{l.inOnboarding ? <c.XZJ size={20} type={c.XZJ.Types.INVERTED} value={l.inOnboarding && l.required} onChange={(e, t) => (0, f.Kk)(n, l.id, {
              required: t
            })} disabled={!l.inOnboarding}><c.Text variant={"text-sm/normal"} color={"interactive-normal"}>{I ? v.intl.formatToPlainString(v.t["0re8T0"], {
                count: z
              }) : v.intl.string(v.t.Ur8Vrq)}</c.Text></c.XZJ> : null}</div>}{<c.P3F className={_.collapseButton} onClick={() => M(true)}><g.Z direction={g.Z.Directions.UP} height={16} width={16} /></c.P3F>}{<c.DY3 text={v.intl.string(v.t["Ku+86e"])} className={_.removeButton}><c.P3F className={_.closeIcon} onClick={() => (0, f.fi)(n, l.id)}><c.XHJ size={"xs"} color={"currentColor"} /></c.P3F></c.DY3>}</div>}{null != F ? <c.pdY error={F} /> : null}</div></c.tEY>
}

function C(e) {
  let {
    prompt: t,
    guild: n
  } = e, [l, a] = i.useState(false);
  if (i.useEffect(() => {
      !l && t.title.length > 0 && a(true)
    }, [l, t]), l) return null;

  function s(e) {
    return <c.P3F className={_.example} onClick={() => (0, f.Kk)(n, t.id, {
        title: e
      })}><c.Text variant={"text-xs/normal"}>{e}</c.Text></c.P3F>
  }
  return <div className={_.examplesSection}>{<c.Text variant={"text-xs/normal"} color={"text-muted"}>{v.intl.string(v.t.ECnSLi)}</c.Text>}{<div className={_.examples}>{s(v.intl.string(v.t["7GZMJS"]))}{s(v.intl.string(v.t.nItydn))}{s(v.intl.string(v.t.evuYbm))}{s(v.intl.string(v.t.XWRuOj))}</div>}</div>
}

function N(e) {
  let {
    guild: t,
    prompt: n,
    promptIndex: i,
    singleColumn: l,
    errors: a
  } = e, {
    handleDragStart: s,
    handleDragReset: o,
    handleDragComplete: c
  } = (0, u.Z)(n.options, e => (0, f.Kk)(t, n.id, {
    options: e
  }));
  return <div className={_.options}>{n.options.map((e, d) => <x.Z guild={t} prompt={n} promptIndex={i} singleColumn={l} option={e} onDragStart={s} onDragComplete={c} onDragReset={o} hasError={null != a.optionErrors[d]} />)}{n.options.length < j.qm ? <x.B guild={t} prompt={n} promptIndex={i} singleColumn={l} /> : null}</div>
}