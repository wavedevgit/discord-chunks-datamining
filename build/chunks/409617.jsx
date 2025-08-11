/** Chunk was on 65652 **/
/** chunk id: 409617, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk600164 = require("./600164.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk613734 = require("./613734.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk473787 = require("./473787.js"),
  Chunk91463 = require("./91463.js");

function C(e) {
  let {
    className: n,
    isDsaEligible: t = false,
    onClose: s,
    onNext: C,
    onBack: N
  } = e, j = (0, p.U0)(), I = (0, r.e7)([x.Z], () => x.Z.getFreeTextAppealReason()), [E, T] = a.useState(""), [v, f] = a.useState(false);
  a.useEffect(() => {
    T(null != I ? I : ""), f(j === u.bK.SOMETHING_ELSE)
  }, [I, j, t]);
  let S = e => {
      f(e === u.bK.SOMETHING_ELSE), e !== u.bK.SOMETHING_ELSE && (T(""), c.Z.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
        userInput: ""
      })), c.Z.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
        signal: e
      })
    },
    k = u.RY.map(e => ({
      value: e,
      name: (0, m.ox)(e)
    }));
  return <i.Fragment>{<o.xBx data-migration-pending={true} direction={d.Z.Direction.VERTICAL} className={g.header} separator={false}>{<o.X6q className={g.title} variant={"heading-xl/semibold"}>{_.intl.string(_.t["C5q+pa"])}</o.X6q>}{<o.Text className={g.subtitle} color={"header-secondary"} variant={"text-md/normal"}>{_.intl.string(_.t.VEcRh4)}</o.Text>}{null != s && <o.olH className={g.closeButton} onClick={s} />}</o.xBx>}{<o.hzk data-migration-pending={true} className={l()(h.modalContent, n)} paddingFix={false}>{<o.FXm radioPosition={"right"} radioItemClassName={g.radioItem} size={o.FXm.Sizes.NOT_SET} value={j} options={k} onChange={e => {
          let {
            value: n
          } = e;
          return S(n)
        }} />}{t && v && <i.Fragment>{<o.Kx8 rows={4} maxLength={1024} placeholder={_.intl.string(_.t.bQrZIC)} value={E} onChange={T} autoFocus={true} />}{<o.Text variant={"text-sm/normal"} color={"header-muted"}>{_.intl.string(_.t.xfNY3N)}</o.Text>}</i.Fragment>}{<o.Text variant={"text-sm/normal"} className={h.disclaimer}>{_.intl.format(_.t["8k9GCQ"], {})}</o.Text>}</o.hzk>}{<o.mzw data-migration-pending={true}><o.hE2 direction={"horizontal-reverse"}>{<o.zxk variant={"primary"} text={_.intl.string(_.t.PDTjLC)} onClick={() => {
            c.Z.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: E
            }), null == C || C()
          }} />}{<o.zxk variant={"secondary"} text={_.intl.string(_.t["13/7kZ"])} onClick={() => {
            c.Z.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: E
            }), null == N || N()
          }} />}</o.hE2></o.mzw>}</i.Fragment>
}