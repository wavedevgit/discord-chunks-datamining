/** Chunk was on 10620 **/
/** chunk id: 624659, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk237617 = require("./237617.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk648159 = require("./648159.js"),
  Chunk63063 = require("./63063.js"),
  Chunk957115 = require("./957115.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk297849 = require("./297849.js"),
  Chunk135771 = require("./135771.js");

function C() {
  return <Chunk481060.Text className={Chunk297849.helpdeskLink} variant={"text-xs/normal"} color={"text-muted"}>{Chunk388032.intl.format(Chunk388032.t.ybi2tL, {
      helpdeskURL: Chunk63063.Z.getSubmitRequestURL()
    })}</Chunk481060.Text>
}

function x(e) {
  var t, n;
  let {
    header: i,
    body: o,
    problems: h,
    transitionState: x,
    feedbackProblems: T = {},
    otherKey: y,
    hasCloseButton: L,
    onSubmit: D,
    onClose: I,
    canDismissForever: M = true,
    showHelpdeskLink: R = true
  } = e, k = (0, b.Z)(h), [j, A] = a.useState(false), [P, B] = a.useState(null), [U, $] = a.useState(u().shuffle(h)), [F, Z] = a.useState(""), [w, H] = a.useState(false), J = (0, O.Dt)(), G = (0, f.Z)(j), z = (0, f.Z)(P), Y = (0, f.Z)(D), K = (0, f.Z)(F), X = (0, f.Z)(w), Q = null != P ? T[P] : null, V = null != Q;
  return a.useEffect(() => {
    u().isEqual(k, h) || $((0, g.Bi)(h, y))
  }, [h, k, y]), (0, c.ZP)(() => () => {
    Y.current({
      problem: z.current,
      dontShowAgain: G.current,
      feedback: K.current,
      closeClicked: X.current
    })
  }), <s.Y0X transitionState={x} aria-labelledby={J} parentComponent={"SimpleFeedbackModal"}>{<_.Z />}{<s.xBx separator={false} className={r()(N.headerContainer, p.headerContainer)}>{<s.X6q id={J} variant={"heading-xl/bold"} color={"header-primary"} className={N.header}>{i}</s.X6q>}{<s.Text variant={"text-sm/medium"} color={"header-secondary"} className={r()(N.ratingBody, p.headerBody)}>{null != (t = null == Q ? true : Q.subheader) ? t : o}</s.Text>}{L ? <s.olH className={N.modalCloseButton} onClick={function() {
          H(true), I()
        }} /> : null}</s.xBx>}{<s.hzk className={p.modalContent}>{V ? null : <s.xJW className={N.problemInfo}><v.Z options={U} onClick={function(e) {
            let {
              value: t
            } = e;
            B(t), Object.keys(T).includes(t) || I()
          }} /></s.xJW>}{V ? <s.xJW className={N.problemInfo}>{<d.iS value={F} maxLength={S.iF} onChange={Z} className={p.textArea} placeholder={null != (n = Q.hint) ? n : m.intl.string(m.t.h95hcn)} />}{R ? <C /> : null}</s.xJW> : null}</s.hzk>}{M || V ? <s.mzw className={r()(N.footer, V ? p.submitFooter : p.modalFooter)} direction={E.Z.Direction.HORIZONTAL}>{V ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.zx, {
          className: p.backButton,
          size: d.zx.Sizes.NONE,
          look: d.zx.Looks.LINK,
          color: d.zx.Colors.PRIMARY,
          onClick: () => {
            B(null), Z("")
          },
          children: m.intl.string(m.t["13/7kZ"])
        }), (0, l.jsx)(s.zxk, {
          variant: "primary",
          size: "sm",
          text: m.intl.string(m.t.geKm7u),
          onClick: I
        })]
      }) : M ? (0, l.jsx)(s.XZJ, {
        size: 24,
        type: s.XZJ.Types.INVERTED,
        value: j,
        onChange: () => A(!j),
        children: (0, l.jsx)(s.Text, {
          variant: "text-md/normal",
          children: m.intl.string(m.t.lkWab2)
        })
      }) : null}</s.mzw> : null}</s.Y0X>
}