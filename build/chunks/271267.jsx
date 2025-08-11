/** Chunk was on 22988 **/
/** chunk id: 271267, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => g,
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957011 = require("./957011.js"),
  Chunk587431 = require("./587431.js"),
  Chunk756066 = require("./756066.js"),
  Chunk388032 = require("./388032.js"),
  Chunk601781 = require("./601781.js"),
  Chunk270395 = require("./270395.js");

function m(e) {
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
let g = "role_subscriptions_eligibility_modal";

function p(e) {
  let {
    guild: t,
    eligibility: i,
    eligibilityLoading: a,
    eligibilityError: s,
    refreshEligibility: o
  } = e;
  return <l.zxk variant={"expressive"} onClick={function() {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("21863").then(n.bind(n, 466501));
        return n => {
          var l, c;
          return (0, r.jsx)(e, (l = m({}, n), c = c = {
            eligibility: i,
            eligibilityLoading: a,
            eligibilityError: s,
            refreshEligibility: o,
            guildId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(c)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e))
          }), l))
        }
      }, {
        modalKey: g
      })
    }} size={"md"} text={c.intl.string(c.t.NL5ZNT)} icon={l.Mgn} />
}

function h(e) {
  let {
    guild: t,
    checkboxText: n
  } = e, {
    canSubmitAcceptance: o,
    error: d,
    loading: u,
    submitAcceptTermsRequest: m
  } = (0, a.Z)(t.id), [g, p] = i.useState(false);
  return <r.Fragment>{<l.XZJ onChange={function() {
        p(e => !e)
      }} size={20} type={l.XZJ.Types.INVERTED} value={g}><l.Text variant={"text-sm/normal"} color={"header-secondary"}>{n}</l.Text></l.XZJ>}{<l.LZC size={24} />}{<l.zxk disabled={!g || !o} onClick={m} loading={u} variant={"expressive"} text={c.intl.string(c.t.NL5ZNT)} />}{null != d && <r.Fragment>{<l.LZC size={24} />}{<s.Z>{d.getAnyErrorMessage()}</s.Z>}</r.Fragment>}</r.Fragment>
}

function f(e) {
  let {
    guild: t,
    monetizationEligibility: n
  } = e, {
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: a,
    eligibility: s,
    eligibleForMonetization: c,
    acceptTermsCheckboxText: d,
    wasRejectedInV1: u
  } = n;
  return c ? u ? <o.Z{...m({}, n)} /> : <h guild={t} checkboxText={d} /> : <p guild={t} eligibility={s} eligibilityLoading={i} eligibilityError={l} refreshEligibility={a} />
}

function b(e) {
  let {
    guild: t,
    monetizationEligibility: n
  } = e;
  return <div className={d.ctaContainer}>{<img className={d.heroBanner} src={u} alt={c.intl.string(c.t.Af4klJ)} />}{<div className={d.ctaContent}>{<l.X6q variant={"heading-xl/semibold"} color={"header-primary"}>{c.intl.string(c.t.PqYfh4)}</l.X6q>}{<l.LZC size={12} />}{<l.Text variant={"text-md/normal"} color={"header-secondary"}>{c.intl.string(c.t["41wkMT"])}</l.Text>}{<l.LZC size={24} />}{<f guild={t} monetizationEligibility={n} />}</div>}</div>
}