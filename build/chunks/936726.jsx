/** Chunk was on 13616 **/
/** chunk id: 936726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./35282.js"), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk139387 = require("./139387.js"),
  Chunk308063 = require("./308063.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk208567 = require("./208567.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk572004 = require("./572004.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk368938 = require("./368938.js");

function N(e) {
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

function S(e, t) {
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
let I = e => {
  if (null == e) return null;
  let t = new g.Z(e);
  return v.ZP.getUserTag(t)
};

function w(e, t) {
  return null != t && /^data:/.test(t) ? t : (0, h.ov)({
    id: e.id,
    avatar: t,
    discriminator: y.fo$
  })
}

function Z(e) {
  let {
    id: t,
    webhook: n,
    editedWebhook: l,
    channelOptions: g,
    isExpanded: h,
    isNew: v,
    errors: Z,
    onToggleExpand: E
  } = e, [P, T] = r.useState(false), [k] = r.useState(new s.V7);
  r.useEffect(() => () => k.stop(), [k]);
  let A = r.useMemo(() => w(n, n.avatar), [n]),
    R = r.useCallback(() => {
      let e = "".concat((0, a.K0)(false)).concat(y.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
      (0, x.JG)(e)
    }, [n]),
    D = r.useCallback(() => {
      (0, c.h7j)(e => <c.ConfirmModal{...S(N({}, e), {
        header: _.intl.formatToPlainString(_.t.QVFjHh, {
          name: n.name
        }),
        confirmText: _.intl.string(_.t["W+K1Fh"]),
        cancelText: _.intl.string(_.t.xNhj0N),
        onConfirm: () => {
          p.Z.delete(n.guild_id, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t ? d.Z.show({
              title: _.intl.string(_.t.N5riYm),
              body: _.intl.string(_.t.eAxcCQ)
            }) : d.Z.show({
              title: _.intl.string(_.t.N5riYm),
              body: _.intl.string(_.t["/4TwKS"])
            })
          })
        },
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: _.intl.format(_.t["rIWe+/"], {
            name: n.name
          })
        })
      })} />)
    }, [n.guild_id, n.id, n.name]),
    L = [];
  null != n.user ? L.push({
    icon: c.T39,
    text: _.intl.formatToPlainString(_.t["7EcUbm"], {
      user: I(n.user),
      timestamp: j.default.extractTimestamp(n.id)
    })
  }) : L.push({
    icon: c.T39,
    text: _.intl.formatToPlainString(_.t["7mv59P"], {
      timestamp: j.default.extractTimestamp(n.id)
    })
  });
  let M = null;
  return h && null != l && (M = <div className={C.body}>{<c.$i$ className={C.topDivider} />}{<m.Z>{<m.Z.Child shrink={1} grow={0}><m.Z className={C.avatarWrapper} direction={m.Z.Direction.VERTICAL}>{<b.Z image={l.avatar} onChange={e => {
              u.Z.updateWebhook({
                avatar: e
              })
            }} makeURL={e => w(n, e)} imageClassName={C.avatarUploaderInner} showIcon={true} />}{null != Z.avatar && "" !== Z.avatar ? <c.Text color={"text-danger"} variant={"text-sm/normal"}>{Z.avatar}</c.Text> : null}</m.Z></m.Z.Child>}{<m.Z direction={m.Z.Direction.VERTICAL}>{<m.Z>{<m.Z.Child basis={"50%"}><c.xJW title={_.intl.string(_.t.ukdxur)}><c.oil value={l.name} onChange={e => {
                  u.Z.updateWebhook({
                    name: e
                  })
                }} maxLength={80} error={Z.name} /></c.xJW></m.Z.Child>}{<m.Z.Child basis={"50%"}><c.xJW title={_.intl.string(_.t.GK18KC)}><c.VcW value={l.channel_id} options={g} onChange={e => {
                  u.Z.updateWebhook({
                    channelId: e
                  })
                }} placeholder={_.intl.string(_.t.r2pts7)} /></c.xJW></m.Z.Child>}</m.Z>}{<c.$i$ className={C.bottomDivider} />}{<m.Z>{<c.ua7 text={_.intl.string(_.t.wwdb3t)} forceOpen={P} color={c.FGA.GREEN} disableTooltipPointerEvents={true}>{e => {
              var {
                onClick: t,
                onMouseEnter: r,
                onMouseLeave: l,
                onBlur: o,
                onFocus: a
              } = e, s = function(e, t) {
                if (null == e) return {};
                var n, i, r = function(e, t) {
                  if (null == e) return {};
                  var n, i, r = {},
                    l = Object.keys(e);
                  for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                  return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
              }(e, ["onClick", "onMouseEnter", "onMouseLeave", "onBlur", "onFocus"]);
              return (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": true,
                className: C.copyButton,
                children: (0, i.jsx)(c.zxk, S(N({
                  variant: "secondary",
                  size: "sm",
                  text: _.intl.string(_.t.Ae9rUV)
                }, s), {
                  "aria-label": "",
                  onClick: () => {
                    null == t || t(), T(true), c.uvj.announce(_.intl.string(_.t.wwdb3t)), k.start(1e3, () => T(false)), R()
                  },
                  disabled: null == n.token || "" === n.token
                }))
              })
            }}</c.ua7>}{<c.zxk variant={"critical-secondary"} size={"sm"} text={_.intl.string(_.t.jVrUnJ)} onClick={D} />}</m.Z>}</m.Z>}</m.Z>}</div>), <c.Zbd editable={true} id={t} className={o()(C.card, v ? C.pulse : null)}><m.Z direction={m.Z.Direction.VERTICAL}>{<c.P3F className={C.header} aria-expanded={h} onClick={E}><m.Z align={m.Z.Align.CENTER}>{<O.Z name={n.name} imageSrc={A} details={L} />}{<f.Z className={C.expandIcon} expanded={h} aria-hidden={true} />}</m.Z></c.P3F>}{M}</m.Z></c.Zbd>
}