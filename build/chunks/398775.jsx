/** Chunk was on 81709 **/
/** chunk id: 398775, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Sz: () => O,
  of: () => E
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk99945 = require("./99945.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk906732 = require("./906732.js"),
  Chunk600164 = require("./600164.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296848 = require("./296848.js"),
  Chunk798769 = require("./798769.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk714421 = require("./714421.js");
async function j(e) {
  let {
    premiumSubscription: t,
    pauseDuration: n,
    onClose: i,
    setHasError: r,
    setIsCancelling: a,
    analyticsLocations: s,
    analyticsLocation: o
  } = e;
  try {
    a(true), r(false), await (0, d.Mg)(t, {
      pauseDuration: n
    }, {
      amount: 0,
      currency: t.currency
    }, (0, b.UX)(t.items, t.currency, t.paymentSourceId), s, o), i()
  } catch (e) {
    r(true), a(false)
  }
}

function E(e) {
  let {
    premiumType: t,
    onClose: n,
    pauseDuration: a,
    setPauseDuration: s,
    footer: l,
    premiumSubscription: c
  } = e, d = r.useCallback(e => {
    let {
      value: t
    } = e;
    s(t)
  }, [s]), p = c.status === h.O0b.PAUSED ? g.intl.string(g.t.Lp9WoK) : g.intl.string(g.t.eSR83d), _ = function(e) {
    let t = e.status === h.O0b.PAUSED ? g.t.o3upfX : g.t.dBXZEh,
      {
        durations: n,
        currentDaysPaused: i
      } = (0, x.AT)(e),
      r = [];
    for (let e of n) {
      let n = o.T[e];
      r.push({
        name: g.intl.formatToPlainString(t, {
          days: n - i
        }),
        value: n,
        radioItemIconClassName: C.radioOption
      })
    }
    return r.sort((e, t) => e.value - t.value), r.push({
      name: g.intl.string(g.t.OCPUMz),
      value: 0,
      radioBarClassName: C.cancelText,
      radioItemIconClassName: C.cancelText
    }), r
  }(c);
  return (0, m.ZP)(() => {
    _.length < 1 || s(_[0].value)
  }), <i.Fragment>{<y.Z premiumType={t} onClose={n} />}{<u.xBx separator={false}><div className={C.__invalid_header}>{<u.X6q variant={"heading-xl/bold"} className={C.__invalid_modalHeader}>{g.intl.string(g.t.f3nnBw)}</u.X6q>}{<u.X6q variant={"heading-sm/medium"} className={C.subtitle}>{p}</u.X6q>}</div></u.xBx>}{<u.hzk className={C.body}><u.FXm options={_} onChange={d} value={a} /></u.hzk>}{<u.mzw justify={f.Z.Justify.START}>{l}</u.mzw>}</i.Fragment>
}

function O(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: a,
    pauseDuration: o,
    analyticsLocation: d
  } = e, [m, b] = r.useState(false), {
    analyticsLocations: x
  } = (0, _.ZP)(), [E, O] = r.useState(false), P = (0, p.ZP)(), v = null, N = null, I = [h.O0b.PAST_DUE, h.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd, T = s()(I).add(o, "days").toDate();
  switch (t.status) {
    case h.O0b.PAST_DUE:
      N = g.intl.format(g.t["xaS18/"], {
        pauseDuration: o,
        resumeDate: T
      });
      break;
    case h.O0b.PAUSED:
      N = g.intl.format(g.t.Vur3FR, {
        resumeDate: T
      });
      break;
    default:
      N = g.intl.format(g.t.W85vFB, {
        pauseDate: I,
        resumeDate: T,
        pauseDuration: o
      })
  }
  return v = <div className={C.body}>{N}</div>, <i.Fragment>{<y.Z premiumType={n} onClose={a} />}{<u.xBx separator={false}><div className={C.__invalid_header}><u.X6q variant={"heading-xl/bold"} className={C.__invalid_modalHeader}>{g.intl.string(g.t["AnMG5+"])}</u.X6q></div></u.xBx>}{<u.hzk className={C.body}>{m ? <u.kzN className={C.errorBlock}>{g.intl.string(g.t["5mlOCQ"])}</u.kzN> : null}{v}</u.hzk>}{<u.mzw justify={f.Z.Justify.START}><div className={C.whatYouLoseButtonContainer}>{<u.zxk variant={"critical-primary"} text={g.intl.string(g.t["cY+Ooa"])} disabled={E || null == o} onClick={async () => {
            await j({
              premiumSubscription: t,
              pauseDuration: o,
              setIsCancelling: O,
              setHasError: b,
              onClose: a,
              analyticsLocations: x,
              analyticsLocation: d
            })
          }} />}{<c.zx look={c.zx.Looks.LINK} color={(0, l.wj)(P) ? c.zx.Colors.WHITE : c.zx.Colors.PRIMARY} onClick={a}>{g.intl.string(g.t.h9tkAA)}</c.zx>}</div></u.mzw>}</i.Fragment>
}