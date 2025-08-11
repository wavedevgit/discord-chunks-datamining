/** Chunk was on 58703 **/
/** chunk id: 13137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk600164 = require("./600164.js"),
  Chunk313201 = require("./313201.js"),
  Chunk572539 = require("./572539.js"),
  Chunk63063 = require("./63063.js"),
  Chunk764920 = require("./764920.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.js"),
  Chunk333575 = require("./333575.js");
let v = e => s().shuffle(e.map(e => {
  var t, n, o;
  return n = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), o.forEach(function(t) {
        var o;
        o = n[t], t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = o
      })
    }
    return e
  }({}, e), o = o = {
    problemOptions: s().shuffle(e.problemOptions).concat(null != (t = e.freeformConfig) ? t : [])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
    }
    return n
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
  }), n
}));

function y(e) {
  var t;
  let n, i, {
      onMount: a,
      onSubmit: y,
      onClose: j,
      ratingHeader: w,
      ratingBody: x,
      ratingOptions: C,
      ratingEmojiKind: E,
      initialRating: P = null,
      categoriesHeader: k,
      optionsTree: S,
      hideDontShowAgainCheckbox: D,
      impression: L,
      transitionState: R
    } = e,
    N = (0, d.Z)(S),
    [F, I] = r.useState(v(S));
  r.useEffect(() => {
    s().isEqual(N, S) || I(v(S))
  }, [S, N]);
  let Z = (0, m.Dt)(),
    [T, B] = r.useState(false),
    [A, M] = r.useState(P),
    [V, H] = r.useState(null),
    [U, K] = r.useState(null),
    [z, J] = r.useState("");
  (0, u.ZP)(() => null == a ? true : a()), (0, u.zq)(() => {
    var e;
    y({
      rating: A,
      category: null != (e = null == V ? true : V.value) ? e : null,
      problem: U,
      dontShowAgain: T,
      feedback: z
    })
  });
  let X = true,
    W = false;
  return null == A ? (n = <o.Fragment>{<c.xJW className={l()(h.problemInfo, h.ratingSelectorContainer)}><_.Z ratingOptions={C} emojiKind={E} selectedRating={A} onChangeRating={function(e) {
          M(e), e === O.aZ.GOOD && j()
        }} /></c.xJW>}{!D && <c.mzw className={h.footer} direction={b.Z.Direction.HORIZONTAL}><c.XZJ type={c.XZJ.Types.INVERTED} size={18} value={T} onChange={() => B(!T)}><c.Text variant={"text-sm/normal"}>{g.intl.string(g.t["5E9SBw"])}</c.Text></c.XZJ></c.mzw>}</o.Fragment>, X = false) : A !== O.aZ.GOOD && null == V ? (n = <c.hzk className={h.__invalid_content}><c.xJW title={k} titleClassName={h.noTitleCase} className={l()(h.problemInfo, h.presetList, {
        [h.marginBottom16]: D
      })}><p.Z options={F} onClick={H} hideCaret={() => true} /></c.xJW></c.hzk>, i = () => M(null)) : null != V && null == U ? (n = <c.hzk className={h.__invalid_content}><c.xJW title={V.problemsHeader} titleClassName={h.noTitleCase} className={l()(h.problemInfo, h.presetList, {
        [h.marginBottom16]: D
      })}><p.Z options={V.problemOptions} onClick={function(e) {
          var t;
          K(e), null != V && null != e && (null == (t = V.freeformConfig) ? true : t.value) !== e.value && j()
        }} hideCaret={e => {
          var t;
          let {
            value: n
          } = e;
          return (null == (t = V.freeformConfig) ? true : t.value) !== n
        }} /></c.xJW></c.hzk>, i = () => H(null)) : null != V && null != U && (null == (t = V.freeformConfig) ? true : t.value) === U.value && (n = <c.hzk className={h.__invalid_content}><c.xJW title={g.intl.string(g.t.h95hcn)} titleClassName={h.noTitleCase} className={h.problemInfo}>{<c.Kx8 value={z} maxLength={O.iF} onChange={J} />}{!V.freeformConfig.hideHelpdeskLink && <c.Text className={h.helpdeskLink} variant={"text-xs/normal"} color={"text-muted"}>{g.intl.format(g.t.ybi2tL, {
          helpdeskURL: f.Z.getSubmitRequestURL()
        })}</c.Text>}</c.xJW></c.hzk>, i = () => {
    J(""), K(null)
  }, W = true), <c.Y0X impression={L} transitionState={R} className={h.modalRoot} aria-labelledby={Z} parentComponent={"FeedbackModalV2"}>{<c.xBx separator={false} className={h.headerContainer}>{<c.X6q id={Z} variant={"heading-xl/extrabold"} color={"none"}>{w}</c.X6q>}{<c.Text variant={"text-md/normal"} color={"none"} className={h.ratingBody}>{x}</c.Text>}</c.xBx>}{n}{X && <c.mzw className={h.footer} direction={b.Z.Direction.HORIZONTAL}>{<c.zxk variant={"secondary"} size={"sm"} text={g.intl.string(g.t["13/7kZ"])} onClick={i} />}{W && <c.zxk variant={"primary"} size={"sm"} text={g.intl.string(g.t.geKm7u)} onClick={j} />}</c.mzw>}</c.Y0X>
}