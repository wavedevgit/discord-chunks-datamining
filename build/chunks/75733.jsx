/** Chunk was on 22988 **/
/** chunk id: 75733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk318766 = require("./318766.js"),
  Chunk907040 = require("./907040.js"),
  Chunk176354 = require("./176354.js"),
  Chunk434404 = require("./434404.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.js"),
  Chunk186667 = require("./186667.js"),
  Chunk381109 = require("./381109.js");

function x(e) {
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
}
let j = {
  label: ""
};

function v(e) {
  let {
    emoji: t,
    disabled: n,
    handleSelectEmoji: l
  } = e, a = i.useRef(null), s = i.useMemo(() => null == t || null == t.name ? null : function() {
    var e;
    let n = m.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return <c.Z animated={null != (e = t.animated) && e} emojiId={t.id} emojiName={n} />
  }, [t]);
  return n ? <d.Z tabIndex={false} active={false} renderButtonContents={s} /> : <o.yRy targetElementRef={a} position={"bottom"} renderPopout={e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(u.Z, {
        closePopout: t,
        onSelectEmoji: l(t),
        pickerIntention: p.Hz.GUILD_PROFILE
      })
    }}>{(e, t) => {
      var n, i;
      let {
        isShown: l
      } = t;
      return (0, r.jsx)(d.Z, (n = x({}, e), i = i = {
        ref: a,
        tabIndex: 0,
        active: l,
        renderButtonContents: s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }}</o.yRy>
}

function _(e) {
  let {
    guildId: t,
    trait: n,
    index: l,
    onTraitUpdate: c,
    disabled: d
  } = e, u = i.useCallback(() => {
    c(t, l, {
      emoji: true,
      label: ""
    })
  }, [t, l, c]), m = i.useCallback(e => n => {
    let {
      emoji: r,
      willClose: i
    } = n;
    c(t, l, {
      emoji: null != r ? r : true
    }), i && e()
  }, [t, l, c]), [g, p] = i.useState(false), h = i.useCallback(() => p(true), []), b = i.useCallback(() => p(false), []), x = i.useCallback(e => {
    c(t, l, {
      label: e
    })
  }, [t, l, c]), j = i.useMemo(() => n.emoji, [n.emoji]), _ = null != n.label && n.label.length > 0 || null != n.emoji;
  return <div className={f.traitWrapper}>{<s.Is aria-disabled={d} disabled={d} value={n.label} onChange={x} maxLength={24} prefixElement={(0, r.jsx)(v, {
        emoji: j,
        disabled: d,
        handleSelectEmoji: m
      })} className={a()(f.traitContainer, {
        [f.traitContainerFocused]: g
      })} inputClassName={f.traitInput} onFocus={h} onBlur={b} />}{_ && <o.P3F onClick={u} className={f.traitRemoveButton}><o.k$p size={"xs"} color={"currentColor"} /></o.P3F>}</div>
}
let O = [0, 1, 2, 3, 4];

function y(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, l = i.useMemo(() => t.traits, [t]), a = i.useCallback((e, t, n) => {
    let r = [...l];
    r[t] = x({}, l[t], n), g.Z.updateGuildProfile(e, {
      traits: r
    })
  }, [l]);
  return <o.hjN className={b.section}>{<div className={b.sectionHeader}>{<o.vwX>{h.intl.string(h.t.S6JNrq)}</o.vwX>}{<o.R94 type={"description"}>{h.intl.string(h.t.l7Ig5e)}</o.R94>}</div>}{<div className={f.grid}>{O.map(e => {
        var i;
        return (0, r.jsx)(_, {
          guildId: t.id,
          trait: null != (i = l[e]) ? i : j,
          index: e,
          onTraitUpdate: a,
          disabled: !n
        }, "trait-".concat(e))
      })}</div>}</o.hjN>
}