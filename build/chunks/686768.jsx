/** Chunk was on 22447 **/
/** chunk id: 686768, original params: t,o,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk981631 = require("./981631.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk579474 = require("./579474.js");
let T = function(t) {
  let {
    transitionState: o,
    entryPoint: n,
    onClose: T
  } = t, {
    loading: h,
    initiateAgeVerification: C
  } = (0, R.WD)(T, true), b = r.useMemo(() => (0, s.Z)(), []);
  r.useEffect(() => {
    (0, u.lA)(b, u.d_.RETRY, n)
  }, [b, n]);
  let p = r.useMemo(() => [{
    title: E.intl.string(E.t.FYkioq),
    description: E.intl.string(E.t.xMfbR0),
    buttonText: E.intl.string(E.t.RtOE1t),
    buttonColor: l.zx.Colors.BRAND,
    buttonIcon: i.Gr1,
    buttonIconColor: i.TVs.colors.WHITE,
    buttonLoading: h,
    onPress: () => {
      C(), (0, u.x3)(b, u.d_.RETRY, u.sU.GET_STARTED)
    }
  }, {
    title: E.intl.string(E.t["LZO+HR"]),
    description: E.intl.string(E.t.N2mHaG),
    buttonText: E.intl.string(E.t["LZO+HR"]),
    buttonColor: l.zx.Colors.PRIMARY,
    buttonIcon: i.Gr1,
    buttonIconColor: i.TVs.colors.TEXT_PRIMARY,
    onPress: () => {
      c.Z.openUrl(x.sQ.APPEALS_LINK), (0, u.x3)(b, u.d_.RETRY, u.sU.MANUAL_REVIEW_REQUEST)
    }
  }], [C, b, h]);
  return <i.Y0X transitionState={o} className={m.root} parentComponent={"AgeVerificationRetryModal"}><i.hzk className={m.content}>{<div className={m.headersContainer}>{<i.X6q variant={"heading-xl/bold"}>{E.intl.string(E.t["5l3R/v"])}</i.X6q>}{<i.X6q variant={"heading-md/medium"} color={"text-default"}>{E.intl.string(E.t.O7SO0N)}</i.X6q>}{<i.olH className={m.modalClose} onClick={T} />}</div>}{p.map((t, o) => {
        let {
          title: n,
          description: r,
          buttonText: s,
          buttonColor: l,
          buttonIcon: i,
          buttonIconColor: d,
          buttonLoading: c,
          onPress: u
        } = t;
        return <a.ZP title={n} description={r} buttonText={s} buttonColor={l} onButtonPress={u} buttonIcon={i} buttonIconColor={d.css} buttonLoading={c} />
      })}{<i.Text variant={"text-xs/medium"} color={"text-muted"} className={m.learnMore}>{E.intl.format(E.t["L+FgkZ"], {
          handleOnHelpUrlHook: () => {
            c.Z.openUrl(d.Z.getArticleURL(_.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, u.x3)(b, u.d_.RETRY, u.sU.LEARN_MORE)
          }
        })}</i.Text>}</i.hzk></i.Y0X>
}