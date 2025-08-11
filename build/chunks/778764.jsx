/** Chunk was on 75708 **/
/** chunk id: 778764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./49124.js"), require("./953529.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk849055 = require("./849055.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk313201 = require("./313201.js"),
  Chunk202858 = require("./202858.jsx"),
  Chunk287880 = require("./287880.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk365007 = require("./365007.js"),
  Chunk15980 = require("./15980.js"),
  Chunk755733 = require("./755733.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk49149 = require("./49149.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    transitionState: t,
    onClose: a,
    ticket: c,
    challenge: m
  } = e, b = (0, d.Dt)(), [C, O] = r.useState(""), [v, S] = r.useState(true), [T, I] = r.useState(x.x.INIT), [N, y] = r.useState(""), [A, P] = r.useState(null), R = async () => {
    let e;
    I(x.x.REGISTER);
    let t = p.isPlatformEmbedded && h.ZP.supportsFeature(_.eRX.WEBAUTHN) ? h.ZP.webAuthnRegister(m) : s.Ue(JSON.parse(m)).then(e => JSON.stringify(e));
    try {
      e = await t
    } catch (e) {
      g.Z.captureException(e), P(j.intl.string(j.t.xSCvBQ)), I(x.x.INIT);
      return
    }
    y(e), I(x.x.NAME)
  };
  return <o.Y0X transitionState={t} aria-labelledby={b} parentComponent={"UserSettingsWebAuthn"}>{<o.xBx className={E.header} separator={false}>{<o.X6q id={b} variant={"heading-lg/semibold"}>{T === x.x.INIT && j.intl.string(j.t.vrOCCg)}{T === x.x.REGISTER && j.intl.string(j.t.wePEBA)}{T === x.x.NAME && j.intl.string(j.t["cY/IOj"])}</o.X6q>}{<o.olH onClick={a} className={E.modalCloseButton} />}</o.xBx>}{<o.MyZ activeSlide={T} width={440}>{<o.Mi4 id={x.x.INIT}>{<o.hzk className={E.content}>{<div className={E.icon}><img alt={""} src={n(773072)} /></div>}{<div>{null != A && (0, i.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "status-danger",
              children: A
            })}</div>}{<div><o.Text variant={"text-md/normal"}>{j.intl.string(j.t.Lh5vTU)}</o.Text></div>}</o.hzk>}{<o.mzw><o.zxk variant={"primary"} text={j.intl.string(j.t.oibaQU)} onClick={R} /></o.mzw>}</o.Mi4>}{<o.Mi4 id={x.x.REGISTER}>{<o.hzk className={E.content}>{<div className={E.icon}><img alt={""} src={n(773072)} /></div>}{<div><o.Text variant={"text-md/normal"}>{j.intl.string(j.t.aVMiX1)}</o.Text></div>}</o.hzk>}{<o.mzw><o.zxk variant={"primary"} text={""} loading={true} /></o.mzw>}</o.Mi4>}{<o.Mi4 id={x.x.NAME}><form onSubmit={e => {
            e.preventDefault(), (0, f.Sr)(C, c, N).then(async () => {
              await (0, u.Yn)(false)
            }).then(() => a()).catch(() => {
              P(j.intl.string(j.t.fEptJC)), I(x.x.INIT)
            })
          }}>{<o.hzk className={E.content}>{<div className={E.icon}><img alt={""} src={n(637163)} /></div>}{<div>{<o.Text variant={"text-md/normal"}>{j.intl.string(j.t["Jzd+z8"])}</o.Text>}{<l.Is className={E.input} value={C} onChange={e => {
                  O(e), S(0 === e.length)
                }} autoFocus={true} minLength={1} />}</div>}</o.hzk>}{<o.mzw className={E.footer}><o.hE2 direction={"horizontal-reverse"}>{<o.zxk variant={"primary"} text={j.intl.string(j.t["5dyZ1d"])} type={"submit"} disabled={v} />}{<o.zxk variant={"secondary"} text={j.intl.string(j.t["13/7kZ"])} onClick={() => {
                  I(x.x.INIT)
                }} />}</o.hE2></o.mzw>}</form></o.Mi4>}</o.MyZ>}</o.Y0X>
}

function S(e) {
  let {
    onSelect: t,
    credential: r
  } = e;
  return <o.v2r navId={"webauthn-credential-actions"} onClose={c.Zy} aria-label={j.intl.string(j.t["+nrTbG"])} onSelect={t}>{<o.sNh id={"webauthn-edit-credential-".concat(r.id)} label={j.intl.string(j.t.bt75u7)} action={() => {
        (0, o.ZDy)(async () => {
          let {
            default: e
          } = await n.e("804").then(n.bind(n, 89616));
          return t => (0, i.jsx)(e, C({
            credential: r
          }, t))
        })
      }} />}{<o.sNh id={"webauthn-delete-credential-".concat(r.id)} label={j.intl.string(j.t["+xgS+P"])} color={"danger"} action={() => {
        (0, f.cT)(r)
      }} />}</o.v2r>
}

function T() {
  let {
    credentials: e,
    hasFetchedCredentials: t
  } = (0, Chunk442837.cj)([Chunk15980.Z], () => ({
    hasFetchedCredentials: Chunk15980.Z.hasFetchedCredentials(),
    credentials: Chunk15980.Z.getCredentials()
  }));
  Chunk73800.useEffect(() => {
    exports || (0, Chunk365007.hL)()
  }, [exports]);
  let [n, s] = Chunk73800.useState(false);
  return <Chunk481060.hjN title={Chunk388032.intl.string(Chunk388032.t.y7SXYW)} className={Chunk49149.settings}>{<Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION} className={Chunk49149.description}>{Chunk388032.intl.string(Chunk388032.t.TMukAA)}</Chunk481060.R94>}{module.length > 0 && <div className={Chunk49149.credentialList}>{module.map(e => (0, i.jsxs)("div", {
        className: E.credentialItem,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: e.name
        }), (0, i.jsx)(l.zx, {
          look: l.zx.Looks.BLANK,
          color: l.zx.Colors.TRANSPARENT,
          size: l.zx.Sizes.ICON,
          onClick: t => {
            (0, c.vq)(t, t => (0, i.jsx)(S, O(C({}, t), {
              credential: e
            })))
          },
          "aria-label": j.intl.string(j.t["+nrTbG"]),
          innerClassName: E.credentialOptions,
          children: (0, i.jsx)(o.Huf, {
            size: "md",
            className: E.__invalid_overflowIcon,
            colorClass: E.__invalid_overflowIconFg,
            "aria-hidden": true
          })
        })]
      }, e.id))}</div>}{<div><Chunk481060.zxk variant={"primary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t.vrOCCg)} onClick={() => {
          Chunk849055(true), (0, Chunk365007.L$)().then(e => {
            let {
              ticket: t,
              challenge: n
            } = e;
            (0, o.h7j)(e => (0, i.jsx)(v, O(C({}, e), {
              ticket: t,
              challenge: n
            })))
          }).catch(e => {
            e.message !== j.intl.string(j.t.N2yb9f) && g.Z.captureException(e)
          }).finally(() => {
            Chunk849055(false)
          })
        }} loading={require} disabled={!Chunk287880.Ae} /></div>}</Chunk481060.hjN>
}