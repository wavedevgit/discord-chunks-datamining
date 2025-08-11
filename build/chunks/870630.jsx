/** Chunk was on web.js **/
/** chunk id: 870630, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk245364 = require("./245364.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk782121 = require("./782121.js"),
  Chunk744481 = require("./744481.js"),
  Chunk724641 = require("./724641.js"),
  Chunk184229 = require("./184229.js"),
  Chunk504309 = require("./504309.js");
let m = function(e) {
  let t = (0, l.ZP)(),
    n = i.useRef(null),
    [m, g] = i.useState({}),
    E = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWER).hex();
  switch (i.useLayoutEffect(() => {
      let {
        current: e
      } = n;
      if (null == e) return;
      let t = window.getComputedStyle(e),
        r = window.getComputedStyle(e, "::placeholder"),
        i = t.getPropertyValue("font-family"),
        o = t.getPropertyValue("font-weight");
      g({
        base: {
          fontFamily: i,
          fontWeight: o,
          color: t.getPropertyValue("color"),
          fontSize: t.getPropertyValue("font-size"),
          backgroundColor: E,
          padding: "12px",
          "::placeholder": {
            color: r.getPropertyValue("color")
          },
          borderRadius: s.TVs.radii.xs
        }
      })
    }, [n, E]), e.type) {
    case c.He.PRZELEWY24: {
      let i = (0, a.wj)(t) ? p : h,
        {
          onNameChange: l,
          onEmailChange: c,
          onP24BankChange: f,
          p24BankValue: _,
          billingAddressInfo: g
        } = e;
      return <div className={d.body}>{<s.hjN title={u.intl.string(u.t["w/qqKC"])}><s.oil inputRef={n} name={u.intl.string(u.t["w/qqKC"])} placeholder={u.intl.string(u.t["w/qqKC"])} onChange={e => c(e)} value={g.email} /></s.hjN>}{<s.hjN className={d.nonTopInputWrapper} title={u.intl.string(u.t.yf7ms7)}><s.oil name={u.intl.string(u.t.yf7ms7)} placeholder={u.intl.string(u.t.yf7ms7)} onChange={e => l(e)} value={g.name} /></s.hjN>}{<s.hjN className={d.nonTopInputWrapper} title={u.intl.string(u.t.De3b8v)}>{<o.P24BankElement options={{
              value: _,
              style: m
            }} onChange={e => f(e.value)} />}{<div className={d.bankSelectionStub}><img src={i} alt={"Przelewy24"} /></div>}</s.hjN>}</div>
    }
    case c.He.EPS: {
      let {
        onAccountHolderNameChange: i,
        onEPSBankChange: l,
        epsBankValue: c,
        billingAddressInfo: p
      } = e, h = (0, a.wj)(t) ? f : _;
      return <div className={d.body}>{<s.hjN title={u.intl.string(u.t.sN3wra)}><s.oil inputRef={n} name={u.intl.string(u.t.sN3wra)} placeholder={u.intl.string(u.t.sN3wra)} onChange={e => i(e)} value={p.name} /></s.hjN>}{<s.hjN className={d.nonTopInputWrapper} title={u.intl.string(u.t.dFyV09)}>{<o.EpsBankElement options={{
              value: c,
              style: m
            }} onChange={e => l(e.value)} />}{<div className={d.bankSelectionStub}><img src={h} alt={"EPS"} /></div>}</s.hjN>}</div>
    }
    default:
      throw Error("unknown payment source type")
  }
}