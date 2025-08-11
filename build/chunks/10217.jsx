/** Chunk was on 2668 **/
/** chunk id: 10217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk893999 = require("./893999.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk212605 = require("./212605.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk70097 = require("./70097.js"),
  Chunk237617 = require("./237617.js"),
  Chunk318374 = require("./318374.js"),
  Chunk594174 = require("./594174.js"),
  Chunk962399 = require("./962399.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk39604 = require("./39604.js"),
  Chunk572720 = require("./572720.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk20484 = require("./20484.js"),
  Chunk954292 = require("./954292.js");

function L(e) {
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

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = function(e) {
  var t, n, a;
  let {
    clip: o,
    exporting: s,
    actionsDisabled: c,
    isNew: p,
    onDelete: m,
    onEdit: j,
    onShare: v
  } = e, w = (0, u.Wu)([x.default], () => o.users.map(e => x.default.getUser(e)).filter(C.lm)), {
    analyticsLocations: N
  } = (0, g.ZP)(b.Z.CLIPS_GALLERY_ITEM), [Z, L] = l.useState(false), D = l.useRef(null), I = (0, h.Z)(null != (a = null == (t = o.editMetadata) ? true : t.start) ? a : 0), _ = l.useRef(new d.sW(500, () => {
    var e;
    let t = D.current;
    null != t && t.paused && (t.currentTime = I.current, null == (e = D.current) || e.play())
  })), R = l.useCallback(() => {
    let e = D.current;
    null != e && (e.pause(), e.src = "")
  }, []), A = l.useCallback(() => {
    var e;
    L(true), null == (e = _.current) || e.delay()
  }, []), H = l.useCallback(() => {
    var e, t, n;
    L(false);
    let r = D.current;
    null == (e = _.current) || e.cancel(), null != r && (r.pause(), r.currentTime = null != (n = null == (t = o.editMetadata) ? true : t.start) ? n : 0)
  }, [null == (n = o.editMetadata) ? true : n.start]), V = l.useCallback(e => {
    var t, n;
    (null == (n = e.relatedTarget) || null == (t = n.parentElement) ? true : t.parentElement) !== e.currentTarget.parentElement && H()
  }, [H]), B = new Date(P.default.extractTimestamp(o.id)), F = B.toLocaleDateString(), G = B.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }), Y = "".concat(F, " • ").concat(G);
  return <g.Gt value={N}><f.kL8 aria-disabled={c} aria-label={S.intl.string(S.t.bt75u7)} onClick={c ? true : () => {
        j(o), O.default.track(E.rMx.CLIP_GALLERY_CARD_CLICKED)
      }} className={i()(k.clipItem, {
        [k.disabled]: c
      })} onBlur={V} onFocus={A} onMouseOver={A} onMouseLeave={H}>{<T clip={o} isNew={p} videoRef={D} />}{<div className={k.clipFooter}>{<M clip={o} focused={Z} onFocus={A} />}{<f.Text className={k.clipMetadata} color={"text-default"} variant={"text-md/medium"}>{o.applicationName}</f.Text>}{<f.Text className={k.clipMetadata} color={"text-default"} variant={"text-md/medium"}>{Y}</f.Text>}{<div className={k.usersAndDelete}>{<y.Z maxUsers={4} users={w} onFocusOverflow={e => {
              var t, n, r, l;
              let a = e.relatedTarget,
                i = null == (n = e.currentTarget.parentElement) || null == (t = n.parentElement) ? true : t.parentElement;
              (null == a ? true : a.parentElement) !== i && (null == a || null == (l = a.parentElement) || null == (r = l.parentElement) ? true : r.parentElement) !== i && A()
            }} aria-label={S.intl.string(S.t.WTozwc)} />}{Z && <z clip={o} actionsDisabled={c} exporting={s} onBeforeDelete={R} onDelete={m} onEdit={j} onShare={v} onBlur={e => {
              var t;
              (null == (t = e.relatedTarget) ? true : t.parentElement) !== e.currentTarget.parentElement && H()
            }} />}</div>}</div>}</f.kL8></g.Gt>
};

function T(e) {
  let {
    clip: t,
    isNew: n,
    videoRef: a
  } = e, i = 0 === t.length, [o, c] = l.useMemo(() => {
    let e = t.length,
      n = false,
      r = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
    return null != r && 1e3 * r < t.length && (e = 1e3 * r, n = true), [n, s().duration(e)]
  }, [t.length, t.editMetadata]), u = "".concat(c.seconds()).padStart(2, "0");
  return <div className={k.clipThumbContainer}>{<_ clip={t} videoRef={a} />}{<div className={k.clipBadges}>{i && <div className={k.clipProcessingBadge}><f.Text variant={"text-md/medium"} color={"always-white"}>{S.intl.string(S.t["2Fp7OD"])}</f.Text></div>}{!i && n && <f.Text className={k.clipNewBadge} variant={"eyebrow"} color={"always-white"}>{<f.T$Z size={"md"} color={"currentColor"} className={k.newIcon} />}{S.intl.string(S.t.y2b7CA).toUpperCase()}</f.Text>}{!i && <div className={k.clipDurationBadge}>{o ? <v.Z className={k.clipDurationEditIcon} /> : null}{<f.Text variant={"text-md/medium"} color={"always-white"}>{"".concat(c.minutes(), ":").concat(u)}</f.Text>}</div>}</div>}</div>
}

function M(e) {
  var t;
  let {
    clip: n,
    focused: a,
    onFocus: o
  } = e, [s, c] = l.useState(n.name), u = !n.name, [d, b] = l.useState(false), [g, j] = l.useState(null != (t = n.name) ? t : ""), [h, y] = l.useState(false), x = async () => {
    y(true), await (0, w.Tm)(n.id, {
      name: "" === g ? true : g
    }), y(false), b(false)
  };
  return (l.useEffect(() => {
    if (s !== n.name) {
      var e;
      c(n.name), j(null != (e = n.name) ? e : "")
    }
  }, [n.name, s]), d) ? <m.Is inputClassName={i()(Z["heading-lg/medium"], k.clipTitleInput)} onClick={e => e.stopPropagation()} value={g} autoFocus={true} onKeyDown={e => {
      "Enter" === e.key && x()
    }} disabled={h} onChange={j} onBlur={x} /> : <f.P3F className={k.clipTitleInputPlaceholder} onFocus={o} onClick={e => {
      e.stopPropagation(), b(true)
    }}>{u ? <f.X6q className={k.clipTitle} color={"text-muted"} variant={"heading-lg/medium"}>{S.intl.string(S.t["x+/nmJ"])}</f.X6q> : <f.X6q className={k.clipTitle} color={"text-default"} variant={"heading-lg/medium"}>{n.name}</f.X6q>}{a && <f.vdY size={"custom"} aria-label={S.intl.string(S.t.bt75u7)} color={f.TVs.colors.TEXT_MUTED} height={p.Z.sm} width={p.Z.sm} className={k.clipTitleIcon} />}</f.P3F>
}

function _(e) {
  let {
    clip: t,
    videoRef: n
  } = e, l = (0, N.l)(t);
  return 0 === t.length ? <f.$jN type={f.RAz.SPINNING_CIRCLE_SIMPLE} className={k.clipThumb} /> : null != l ? <j.Z preload={"metadata"} muted={true} poster={t.thumbnail} src={l} loop={true} className={k.clipThumb} ref={n} /> : <img alt={""} src={t.thumbnail} className={k.clipThumb} />
}

function z(e) {
  let {
    clip: t,
    exporting: n,
    actionsDisabled: a,
    onBeforeDelete: i,
    onDelete: o,
    onEdit: s,
    onShare: u,
    onBlur: d
  } = e, p = (0, c.Z)(), b = l.useCallback(e => {
    e.stopPropagation(), e.shiftKey ? (i(), (0, w.sS)(t.filepath)) : o(t, i), O.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "delete"
    })
  }, [o, i, t]), g = l.useCallback(e => {
    e.stopPropagation(), s(t), O.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "edit"
    })
  }, [s, t]), j = l.useCallback(e => {
    e.stopPropagation(), u(t), O.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "share"
    })
  }, [u, t]);
  return <div className={k.buttonContainer}>{null != o && <f.ua7 text={S.intl.string(S.t.oyYWHB)}>{e => (0, r.jsx)(m.zx, D(L({}, e), {
        disabled: a,
        color: p ? m.zx.Colors.RED : m.zx.Colors.PRIMARY,
        onClick: b,
        className: k.button,
        size: m.zx.Sizes.NONE,
        look: m.zx.Looks.FILLED,
        children: (0, r.jsx)(f.XHJ, {
          size: "md",
          color: "currentColor",
          className: k.miniIcon
        })
      }))}</f.ua7>}{<f.ua7 text={S.intl.string(S.t.bt75u7)}>{e => (0, r.jsx)(m.zx, D(L({}, e), {
        disabled: a,
        color: m.zx.Colors.PRIMARY,
        onClick: g,
        className: k.button,
        size: m.zx.Sizes.NONE,
        look: m.zx.Looks.FILLED,
        children: (0, r.jsx)(v.Z, {
          className: k.miniIcon
        })
      }))}</f.ua7>}{<f.ua7 text={S.intl.string(S.t.RDE0SU)}>{e => {
        var {
          onBlur: t
        } = e, l = function(e, t) {
          if (null == e) return {};
          var n, r, l = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
          }
          return l
        }(e, ["onBlur"]);
        return (0, r.jsx)(m.zx, D(L({}, l), {
          disabled: a && !n,
          submitting: n,
          color: m.zx.Colors.BRAND,
          onBlur: e => {
            d(e), null == t || t()
          },
          onClick: j,
          className: k.button,
          size: m.zx.Sizes.NONE,
          look: m.zx.Looks.FILLED,
          children: (0, r.jsx)(f.aAc, {
            size: "lg",
            color: "currentColor",
            className: k.miniIcon
          })
        }))
      }}</f.ua7>}</div>
}