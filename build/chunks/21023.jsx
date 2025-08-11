/** Chunk was on 75708 **/
/** chunk id: 21023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk46062 = require("./46062.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk554074 = require("./554074.js");
let p = e => {
    let {
      text: t,
      badge: n,
      variant: s
    } = e;
    return <r.Text color={"text-default"} variant={null != s ? s : "text-sm/normal"}>{t}{" "}{n}</r.Text>
  },
  g = e => {
    let {
      text: t,
      variant: n
    } = e;
    return <r.Text color={"header-primary"} variant={null != n ? n : "text-md/semibold"}>{t}</r.Text>
  },
  h = e => {
    let {
      includes: t
    } = e;
    return t ? <i.Fragment>{<r.dz2 size={"md"} color={"currentColor"} className={m.checkmarkIcon} aria-hidden={true} />}{<r.nn4>{u.intl.string(u.t["tq+6t7"])}</r.nn4>}</i.Fragment> : <i.Fragment>{<r.Dio size={"md"} color={"currentColor"} className={m.closeIcon} aria-hidden={true} />}{<r.nn4>{u.intl.string(u.t.l4qZrq)}</r.nn4>}</i.Fragment>
  },
  f = (e, t, n, f, b) => {
    let x = {
        0: {
          label: <p text={u.intl.string(u.t["09yRKy"])} />,
          column1: <g text={a.ZP.formatPriceString(e, c.rV.MONTH)} />,
          column2: <g text={n ? f : a.ZP.formatPriceString(t, c.rV.MONTH)} />,
          withBottomBorder: true
        },
        1: {
          label: <p text={u.intl.string(u.t.vaDeDQ)} />,
          column1: <h includes={true} />,
          column2: <h includes={true} />
        },
        2: {
          label: <p text={u.intl.string(u.t.RIRtn5)} />,
          column1: <h includes={true} />,
          column2: <h includes={true} />
        },
        3: {
          label: <p text={u.intl.string(u.t.OuItFh)} />,
          column1: <h includes={true} />,
          column2: <h includes={true} />
        },
        4: {
          label: <p text={u.intl.string(u.t["9kRJS0"])} />,
          column1: <h includes={true} />,
          column2: <h includes={true} />
        },
        5: {
          label: <p text={u.intl.string(u.t.ufhQCw)} />,
          column1: <g text={(0, a.v9)(c.p9.TIER_0)} />,
          column2: <g text={(0, a.v9)(c.p9.TIER_2)} />
        },
        6: {
          label: <p text={u.intl.string(u.t.VwxlMz)} />,
          column1: <h includes={false} />,
          column2: <g text={u.intl.string(u.t.XdN6KS)} />
        },
        7: {
          label: <p text={u.intl.formatToPlainString(u.t.nyhDp6, {
              numBoosts: c.cb,
              percentageOff: (0, l.T3)(s.default.locale, c.Rr / 100)
            })} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />
        },
        8: {
          label: <p text={u.intl.string(u.t.tFbcuL)} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />
        },
        9: {
          label: <p text={u.intl.string(u.t["aR/zTk"])} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />
        },
        10: {
          label: <p text={u.intl.string(u.t.IzrZHx)} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />
        },
        11: {
          label: <p text={u.intl.string(u.t["HwNg/f"])} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />
        },
        12: {
          label: <p text={u.intl.string(u.t["y+HHLy"])} />,
          column1: <h includes={true} />,
          column2: <h includes={true} />
        },
        13: {
          label: <p text={u.intl.string(u.t.qQxxVV)} />,
          column1: <h includes={true} />,
          column2: <h includes={true} />
        },
        14: {
          label: <p text={u.intl.string(u.t.xi0NBA)} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />,
          withBottomBorder: true
        },
        15: {
          label: <p text={u.intl.string(u.t.MfsUHh)} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />
        },
        21: {
          label: <p text={u.intl.string(u.t["A+0H1d"])} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />
        },
        16: {
          label: <p text={u.intl.string(u.t["il8+nJ"])} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />
        },
        17: {
          label: <p text={u.intl.formatToPlainString(u.t["8crdzM"], {
              maxChars: d.en1
            })} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />,
          withBottomBorder: true
        },
        18: {
          label: <r.X6q className={m.__invalid_textColor} variant={"display-sm"}>{"Make Discord Yours"}</r.X6q>,
          column1: null,
          column2: null,
          withBottomBorder: false
        },
        19: {
          label: <r.X6q className={m.__invalid_textColor} variant={"display-sm"}>{"Enjoy an Upgraded Discord"}</r.X6q>,
          column1: null,
          column2: null,
          withBottomBorder: false
        },
        20: {
          label: <r.X6q className={m.__invalid_textColor} variant={"display-sm"}>{"Show Up the Way You Want"}</r.X6q>,
          column1: null,
          column2: null,
          withBottomBorder: false
        },
        22: {
          label: <p text={u.intl.string(u.t["93xPy8"])} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />,
          withBottomBorder: true
        },
        23: {
          label: <p text={u.intl.string(u.t["5BJqND"])} />,
          column1: <h includes={false} />,
          column2: <h includes={true} />,
          withBottomBorder: false
        }
      },
      {
        enabled: _
      } = o.T.useExperiment({
        location: "useGetPlanComparisonTableRows"
      }),
      j = b === c.a$.FP_ONLY;
    return [..._ ? [] : [x[0]], x[1], x[2], x[3], x[4], x[5], x[6], ...j ? [] : [x[7]], x[8], x[9], x[10], x[11], ...j ? [] : [x[12]], x[13], x[14], x[15], x[16], x[17], x[22], x[23]]
  }