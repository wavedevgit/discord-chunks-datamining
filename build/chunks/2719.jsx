/** Chunk was on 75708 **/
/** chunk id: 2719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => en
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk129861 = require("./129861.js"),
  Chunk279837 = require("./279837.js"),
  Chunk168107 = require("./168107.js"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk952306 = require("./952306.js"),
  Chunk299206 = require("./299206.js"),
  Chunk821795 = require("./821795.js"),
  Chunk295474 = require("./295474.js"),
  Chunk144114 = require("./144114.js"),
  Chunk918505 = require("./918505.js"),
  Chunk332473 = require("./332473.js"),
  Chunk921801 = require("./921801.js"),
  Chunk485341 = require("./485341.js"),
  Chunk687158 = require("./687158.js"),
  Chunk518950 = require("./518950.js"),
  Chunk184325 = require("./184325.js"),
  Chunk867176 = require("./867176.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk695346 = require("./695346.js"),
  Chunk461877 = require("./461877.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk815660 = require("./815660.js"),
  Chunk801461 = require("./801461.js"),
  Chunk388032 = require("./388032.js"),
  Chunk556780 = require("./556780.js");

function z(e) {
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

function W(e, t) {
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
let Y = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function K(e) {
  var t, s;
  let {
    className: l,
    user: o
  } = e, c = r.useRef(null), u = (0, v.o9)(), p = (0, S.b)(), g = (0, C.gS)(), h = null != (s = null == g || null == (t = g.nick) ? true : t[0]) ? s : null, [f, b] = r.useState(false);
  r.useEffect(() => {
    b(null != c.current && c.current.scrollWidth > c.current.clientWidth)
  }, [o.username]);
  let x = !o.isClaimed(),
    _ = u && !o.hasUniqueUsername() && !o.hasVerifiedEmailOrPhone() || x,
    j = _ ? F.intl.string(F.t["7Ngnys"]) : true;
  return <div className={a()(H.field, l)}>{<div className={H.constrainedRow}><div className={H.usernameRow}>{<m.vwX className={H.fieldTitle}>{F.intl.string(F.t.qqhR3N)}</m.vwX>}{<div className={H.usernameInnerRow} ref={c}>{<m.Text tag={"span"} color={"header-primary"} variant={"text-md/normal"}>{o.username}</m.Text>}{!o.hasUniqueUsername() && <m.Text tag={"span"} color={"header-secondary"} variant={"text-md/normal"}>{"#"}{o.discriminator}</m.Text>}</div>}</div></div>}{p && <div className={H.pomeloWarning}><m.ua7 text={F.intl.string(F.t.HHC5Z2)}>{e => (0, i.jsx)(m.Mgn, W(z({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: d.Z.colors.STATUS_WARNING.css
        }))}</m.ua7></div>}{null != h && <div className={H.pomeloWarning}><m.ua7 text={h} aria-label={false}>{e => (0, i.jsx)(m.Mgn, W(z({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: d.Z.colors.STATUS_WARNING.css
        }))}</m.ua7></div>}{<m.ua7 text={j}>{e => (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: H.fieldButton,
        children: (0, i.jsx)(m.zxk, W(z({
          variant: "secondary",
          size: "sm",
          text: f ? F.intl.string(F.t["16kTw8"]) : F.intl.string(F.t.bt75u7)
        }, e), {
          disabled: _,
          "aria-label": F.intl.string(F.t["JECa9/"]),
          onClick: () => (0, m.ZDy)(async () => {
            if (p) {
              let {
                default: e
              } = await n.e("85342").then(n.bind(n, 193049));
              return t => (0, i.jsx)(e, z({
                source: G.Kq.USER_SETTINGS_EDIT
              }, t))
            } {
              let {
                default: e
              } = await Promise.all([n.e("84956"), n.e("42758")]).then(n.bind(n, 2702));
              return t => (0, i.jsx)(e, z({}, t))
            }
          })
        }))
      })}</m.ua7>}</div>
}

function q(e) {
  var t, n;
  let {
    user: s,
    className: l
  } = e, o = (0, C.gS)(), c = null != (n = null == o || null == (t = o.nick) ? true : t[0]) ? n : null, u = w.ZP.getGlobalName(s), p = r.useRef(null), [g, h] = r.useState(false);
  return r.useEffect(() => {
    h(null != p.current && p.current.scrollWidth > p.current.clientWidth)
  }, [u]), <div className={a()(H.field, l)}>{<div className={H.constrainedRow}><div className={H.usernameRow}>{<m.vwX className={H.fieldTitle}>{F.intl.string(F.t["9AjdkJ"])}</m.vwX>}{<div className={H.usernameInnerRow} ref={p}><m.Text tag={"span"} color={"header-primary"} variant={"text-md/normal"}>{null == u ? F.intl.string(F.t.ep5kjI) : u}</m.Text></div>}</div></div>}{null != c && <div className={H.pomeloWarning}><m.ua7 text={c} aria-label={false}>{e => (0, i.jsx)(m.Mgn, W(z({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: d.Z.colors.STATUS_WARNING.css
        }))}</m.ua7></div>}{<div data-button-hoisted-classname-wrapper={true} className={H.fieldButton}><m.zxk variant={"secondary"} size={"sm"} text={g ? F.intl.string(F.t["16kTw8"]) : F.intl.string(F.t.bt75u7)} aria-label={F.intl.string(F.t.YXeWYG)} onClick={ee} /></div>}</div>
}

function X(e) {
  let {
    text: t,
    censor: n,
    revealLabel: s,
    hideLabel: a
  } = e, [l, o] = r.useState(false), c = l ? t : n(t);
  return <i.Fragment>{c}{<u.zx look={u.zx.Looks.LINK} size={u.zx.Sizes.MIN} color={u.zx.Colors.LINK} aria-label={l ? a : s} onClick={() => o(!l)}>{l ? F.intl.string(F.t.fgq1go) : F.intl.string(F.t.dcztdX)}</u.zx>}</i.Fragment>
}

function J(e) {
  let t, {
    className: r,
    user: s
  } = e;
  if (s.isClaimed())
    if (null == s.email) t = {
      buttonText: F.intl.string(F.t.OYkgVl),
      buttonAriaLabel: F.intl.string(F.t["pvBD+f"]),
      buttonColor: u.zx.Colors.PRIMARY,
      valueMessage: F.intl.string(F.t["8SfTNz"]),
      handleClick: () => (0, m.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("9343"), n.e("39809")]).then(n.bind(n, 642298));
        return t => <e{...z({}, t)} />
      })
    };
    else {
      let {
        email: e
      } = s;
      t = {
        buttonText: F.intl.string(F.t.bt75u7),
        buttonAriaLabel: F.intl.string(F.t["8peUT0"]),
        buttonColor: u.zx.Colors.PRIMARY,
        valueMessage: <X text={e} censor={M.E} revealLabel={F.intl.string(F.t["Zvx+yc"])} hideLabel={F.intl.string(F.t.nqTD4e)} />,
        handleClick: () => (0, m.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("9343"), n.e("39809")]).then(n.bind(n, 642298));
          return t => <e{...z({}, t)} />
        })
      }
    }
  else t = {
    buttonText: F.intl.string(F.t.BleMPD),
    buttonAriaLabel: F.intl.string(F.t.BleMPD),
    buttonColor: u.zx.Colors.BRAND,
    valueMessage: F.intl.string(F.t.qxk9zs),
    handleClick: () => _.Z.openClaimAccountModal()
  };
  return <div className={a()(H.field, r)}>{<div className={H.constrainedRow}><div>{<m.vwX className={H.fieldTitle}>{F.intl.string(F.t.tlZllJ)}</m.vwX>}{<div><m.Text tag={"span"} color={"header-primary"} variant={"text-md/normal"}>{t.valueMessage}</m.Text></div>}</div></div>}{<div data-button-hoisted-classname-wrapper={true} className={H.fieldButton}><m.zxk variant={"secondary"} size={"sm"} text={t.buttonText} aria-label={t.buttonAriaLabel} onClick={t.handleClick} /></div>}</div>
}

function Q(e) {
  let t, {
    className: r,
    user: s
  } = e;
  if (!s.isClaimed()) return null;
  let {
    phone: l,
    email: o
  } = s, c = null != l;
  return t = c ? <X text={l} censor={M.n} revealLabel={F.intl.string(F.t.eY3xlZ)} hideLabel={F.intl.string(F.t.jllbv7)} /> : F.intl.string(F.t.I5kDqq), <div className={a()(H.field, r)}>{<div className={H.constrainedRow}><div>{<m.vwX className={H.fieldTitle}>{F.intl.string(F.t.kerONj)}</m.vwX>}{<div><m.Text tag={"span"} color={"header-primary"} variant={"text-md/normal"}>{t}</m.Text></div>}</div></div>}{<div className={H.fieldButtonList}>{c && null != o ? <u.zx className={a()(H.fieldButton, H.removeButton)} size={u.zx.Sizes.SMALL} look={u.zx.Looks.LINK} color={u.zx.Colors.PRIMARY} aria-label={F.intl.string(F.t.Rpn4Aw)} onClick={function() {
          (0, m.h7j)(e => (0, i.jsx)(h.Z, W(z({}, e), {
            title: F.intl.string(F.t["3CTiKi"]),
            children: s.hasFlag(U.xW$.MFA_SMS) ? F.intl.string(F.t.jrhJys) : true,
            actionText: F.intl.string(F.t.N86XcH),
            handleSubmit: e => O.Z.removePhone(e, O.L.USER_SETTINGS_UPDATE)
          })))
        }}>{F.intl.string(F.t.N86XcH)}</u.zx> : null}{<div data-button-hoisted-classname-wrapper={true} className={H.fieldButton}><m.zxk variant={"secondary"} size={"sm"} text={c ? F.intl.string(F.t.bt75u7) : F.intl.string(F.t.OYkgVl)} aria-label={c ? F.intl.string(F.t.YDabSU) : F.intl.string(F.t.SfUuEx)} onClick={function() {
            (0, m.ZDy)(async () => {
              let {
                default: e
              } = await Promise.resolve().then(n.bind(n, 607018));
              return t => (0, i.jsx)(e, z({
                reason: O.L.USER_SETTINGS_UPDATE
              }, t))
            }, {
              modalKey: V.M
            })
          }} /></div>}</div>}</div>
}

function $(e) {
  let {
    user: t
  } = e, n = (0, j.Z)({
    id: t.id,
    label: F.intl.string(F.t["/AXYnJ"])
  }), s = L.Sb.useSetting(), a = r.useRef(null);
  return s && Z.wS ? <m.yRy targetElementRef={a} renderPopout={e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(m.v2r, {
        onClose: t,
        onSelect: true,
        navId: "copy-id",
        "aria-label": F.intl.string(F.t.RANhlJ),
        children: n
      })
    }}>{e => (0, i.jsx)(m.P3F, W(z({}, e), {
      innerRef: a,
      className: H.overflowMenuButton,
      "aria-label": F.intl.string(F.t.DEoVWV),
      children: (0, i.jsx)(m.xhG, {
        size: "md",
        color: "currentColor",
        className: H.overflowMenuIcon
      })
    }))}</m.yRy> : null
}

function ee() {
  Chunk230711.Z.setSection(Chunk981631.oAB.PROFILE_CUSTOMIZATION)
}

function et(e) {
  let {
    className: t
  } = e, n = (0, x.l6)(), s = (0, x.Jm)(), l = !n || s, o = r.useMemo(() => n ? s ? F.intl.string(F.t.sK0dmJ) : F.intl.string(F.t.XxRj7e) : F.intl.string(F.t.UX0OdX), [n, s]);
  return <div className={a()(H.field, t)}>{<div className={H.constrainedRow}><div>{<m.vwX className={H.fieldTitle}>{F.intl.string(F.t["/52UY2"])}</m.vwX>}{<div><m.Text tag={"span"} color={"header-primary"} variant={"text-md/normal"}>{o}</m.Text></div>}</div></div>}{l && <div data-button-hoisted-classname-wrapper={true} className={H.fieldButton}><m.zxk variant={"secondary"} size={"sm"} text={s ? F.intl.string(F.t.KPGVWl) : F.intl.string(F.t.yNGjyM)} aria-label={s ? F.intl.string(F.t.KPGVWl) : F.intl.string(F.t.yNGjyM)} onClick={() => f.Z.showAgeVerificationGetStartedModal(b.cU.ACCOUNT_AGE_GROUP)} /></div>}</div>
}

function en() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return o()(null != module, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), module
    }),
    n = (0, Chunk687158.ZP)(exports.id),
    r = (0, Chunk485341.Z)(require),
    s = Chunk695346.co.useSetting(),
    a = (0, Chunk442837.e7)([Chunk25990.Z], () => Chunk25990.Z.getErrors()),
    l = null == a || null == (e = a.avatar) ? true : module[0],
    {
      avatarSrc: d,
      avatarDecorationSrc: u
    } = (0, Chunk518950.Z)({
      userId: null == exports ? true : exports.id,
      size: Chunk481060.EFr.SIZE_80
    });
  return <div className={Chunk556780.accountProfileCard}>{<Chunk867176.b user={exports} displayProfile={require} avatarSize={Chunk481060.EFr.SIZE_80} avatarOffsetX={16} avatarOffsetY={false} bannerWidth={660} bannerHeight={100} themePadding={0} />}{<div className={Chunk556780.userInfo}>{<Y className={Chunk556780.avatar} src={Chunk692547} avatarDecoration={Chunk755721} status={Chunk120356} size={Chunk481060.EFr.SIZE_80} aria-label={exports.username} />}{<div>{<div className={Chunk556780.profileCardUsernameRow}>{<Chunk129861.Z user={exports} className={Chunk556780.userTag} discriminatorClass={Chunk556780.discriminator} displayNameStylesType={Chunk821795.F.STATIC} />}{<$ user={exports} />}</div>}{<Chunk184325.Z badges={Chunk73800} className={Chunk556780.badgeList} badgeClassName={Chunk556780.badge} />}</div>}{<Chunk481060.zxk variant={"primary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t["2p2aY2"])} onClick={ee} />}</div>}{<div className={Chunk556780.background}>{null != Chunk512722 ? <Chunk481060.Text className={Chunk556780.avatarError} variant={"text-xs/normal"} color={"text-danger"}>{Chunk512722}</Chunk481060.Text> : null}{<div className={Chunk556780.fieldList}>{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_DISPLAY_NAME}><q className={Chunk556780.fieldSpacerBottom} user={exports} /></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_USERNAME}><K user={exports} /></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_EMAIL}><J className={Chunk556780.fieldSpacer} user={exports} /></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_PHONE_NUMBER}><Q className={Chunk556780.fieldSpacer} user={exports} /></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_AGE_GROUP}><et className={Chunk556780.fieldSpacer} /></Chunk921801.F>}</div>}</div>}</div>
}