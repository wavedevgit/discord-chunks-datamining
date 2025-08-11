/** Chunk was on 60137 **/
/** chunk id: 332664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk600164 = require("./600164.js"),
  Chunk313201 = require("./313201.js"),
  Chunk237617 = require("./237617.js"),
  Chunk572539 = require("./572539.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk957115 = require("./957115.js"),
  Chunk764920 = require("./764920.js"),
  Chunk531578 = require("./531578.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk297849 = require("./297849.js");

function x() {
  return <Chunk481060.Text className={Chunk297849.helpdeskLink} variant={"text-xs/normal"} color={"text-muted"}>{Chunk388032.intl.format(Chunk388032.t.ybi2tL, {
      helpdeskURL: Chunk63063.Z.getSubmitRequestURL()
    })}</Chunk481060.Text>
}

function R(e) {
  var t;
  let {
    modalType: n,
    header: i,
    body: s,
    problemTitle: h,
    problems: R,
    transitionState: L,
    ratingOptions: T,
    ratingEmojiKind: j,
    ratingTextLabels: D,
    freeformNeededProblems: I = [],
    otherKey: C,
    hideDontShowAgainCheckbox: M,
    startRating: A = null,
    hideHelpDeskLink: P = false,
    onSubmit: y,
    onClose: F,
    impression: $,
    freeformDescription: k
  } = e, U = (0, o.Z)(R), [Z, B] = l.useState(false), [G, J] = l.useState(A), [w, H] = l.useState(null), [z, K] = l.useState(d().shuffle(R)), [Y, X] = l.useState(""), Q = (0, E.Dt)(), V = (0, O.Z)(G), W = (0, O.Z)(Z), q = (0, O.Z)(w), ee = (0, O.Z)(y), et = (0, O.Z)(Y), en = null;
  return null == G ? en = "RATING" : G !== S.aZ.GOOD && null == w ? en = "PROBLEM" : null != w && I.includes(w.value) && (en = "FREEFORM"), l.useEffect(() => {
    d().isEqual(U, R) || K((0, N.Bi)(R, C))
  }, [R, U, C]), (0, c.ZP)(() => (f.default.track(m.rMx.OPEN_MODAL, {
    type: n,
    source: "Feedback Modal"
  }), () => {
    ee.current({
      rating: V.current,
      problem: q.current,
      dontShowAgain: W.current,
      feedback: et.current
    })
  })), <u.Y0X impression={$} transitionState={L} className={_.modalRoot} aria-labelledby={Q} parentComponent={"FeedbackModal"}>{<u.xBx separator={false} className={_.headerContainer}>{<u.X6q id={Q} variant={"heading-xl/extrabold"} color={"none"}>{i}</u.X6q>}{<u.Text variant={"text-md/normal"} color={"none"} className={_.ratingBody}>{s}</u.Text>}</u.xBx>}{("RATING" === en || "PROBLEM" === en && null == D) && <u.xJW className={r()(_.problemInfo, _.ratingSelectorContainer)}><g.Z ratingOptions={T} emojiKind={j} textLabels={D} selectedRating={G} onChangeRating={function(e) {
          J(e), e === S.aZ.GOOD && F()
        }} /></u.xJW>}{"PROBLEM" === en && <u.hzk className={_.__invalid_content}><u.xJW title={h} className={r()(_.problemInfo, _.presetList, {
          [_.marginBottom16]: M
        })}><v.Z options={z} onClick={function(e) {
            H(e), I.includes(e.value) || F()
          }} hideCaret={e => {
            let {
              value: t
            } = e;
            return !I.includes(t)
          }} /></u.xJW></u.hzk>}{"FREEFORM" === en && <u.hzk className={_.__invalid_content}><u.xJW title={null != (t = null == k ? true : k(w)) ? t : p.intl.string(p.t.h95hcn)} className={_.problemInfo}>{<u.Kx8 value={Y} maxLength={S.iF} onChange={X} />}{!P && <x />}</u.xJW></u.hzk>}{"RATING" === en && !M && <u.mzw className={_.footer} direction={b.Z.Direction.HORIZONTAL}><u.XZJ type={u.XZJ.Types.INVERTED} size={18} value={Z} onChange={() => B(!Z)}><u.Text variant={"text-sm/normal"}>{p.intl.string(p.t["5E9SBw"])}</u.Text></u.XZJ></u.mzw>}{("FREEFORM" === en || "PROBLEM" === en && null != D) && <u.mzw className={_.footer} direction={b.Z.Direction.HORIZONTAL}><u.hE2 direction={"horizontal-reverse"}>{<u.zxk variant={"secondary"} size={"sm"} text={p.intl.string(p.t["13/7kZ"])} onClick={() => {
            "FREEFORM" === en ? (H(null), X("")) : J(null)
          }} />}{<u.zxk variant={"primary"} size={"sm"} text={p.intl.string(p.t.geKm7u)} onClick={F} />}</u.hE2></u.mzw>}</u.Y0X>
}