/** Chunk was on 49152 **/
/** chunk id: 400251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R,
  m: () => T
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk686546 = require("./686546.js"),
  Chunk951394 = require("./951394.js"),
  Chunk565138 = require("./565138.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk134432 = require("./134432.js"),
  Chunk769654 = require("./769654.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk411198 = require("./411198.js"),
  Chunk683818 = require("./683818.js"),
  Chunk16853 = require("./16853.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk901593 = require("./901593.js"),
  Chunk883760 = require("./883760.js");

function I(e) {
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

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let T = e => {
  let {
    onClick: t
  } = e;
  return <c.P3F onClick={t} className={E.addEntryCard}>{<img alt={""} src={S} />}{<c.Text variant={"text-sm/semibold"} color={"header-primary"} className={E.addServerText}>{C.intl.string(C.t.H9jxS0)}</c.Text>}</c.P3F>
};

function N(e) {
  let {
    entry: t
  } = e, [l, s] = i.useState(false), o = i.useRef(null), {
    canEdit: u
  } = (0, j.Z)(t);
  return <div className={a()(E.actionButtonsContainer, {
      [E.forceButtonsShow]: l
    })}><p.ZP>{u ? <c.ua7 text={C.intl.string(C.t.XnuOvL)} hideOnClick={true}>{e => {
          var {
            onClick: i
          } = e, l = P(e, ["onClick"]);
          return (0, r.jsx)(p.zx, Z(I({}, l), {
            onClick: () => {
              null == i || i(), (0, c.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("34191").then(n.bind(n, 303647));
                return n => (0, r.jsx)(e, Z(I({}, n), {
                  entry: t
                }))
              })
            },
            "aria-label": C.intl.string(C.t.XnuOvL),
            children: (0, r.jsx)(c.vdY, {
              size: "xs",
              color: "currentColor",
              className: E.overflowIcon
            })
          }))
        }}</c.ua7> : null}{<O.Z targetElementRef={o} onRequestOpen={() => s(true)} onRequestClose={() => s(false)} entry={t} hideEditButton={true}>{e => {
          var {
            onClick: t
          } = e, n = P(e, ["onClick"]);
          return (0, r.jsx)(c.ua7, {
            text: C.intl.string(C.t.UKOtz8),
            hideOnClick: true,
            children: e => {
              var {
                onClick: i
              } = e, l = P(e, ["onClick"]);
              return (0, r.jsx)(p.zx, Z(I({}, n, l), {
                ref: o,
                onClick: e => {
                  null == i || i(), t(e)
                },
                "aria-label": C.intl.string(C.t.UKOtz8),
                children: (0, r.jsx)(c.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: E.overflowIcon
                })
              }))
            }
          })
        }}</O.Z>}</p.ZP></div>
}
let R = e => {
  var t;
  let {
    entry: l
  } = e, [a, p] = i.useState(false), j = null != (0, s.e7)([y.Z], () => y.Z.getGuild(l.guildId)), O = async () => {
    p(true);
    try {
      j ? (0, b.X)(l.guildId) : await d.Z.joinGuild(l.guildId, {
        source: v.vtS.DIRECTORY_ENTRY
      })
    } finally {
      p(false)
    }
  }, S = x.ZP.getGuildSplashURL({
    id: l.guildId,
    splash: l.splash,
    size: 300 * (0, m.x_)()
  }), P = null != (t = x.ZP.getGuildIconURL({
    id: l.guildId,
    icon: l.icon,
    size: 40
  })) ? t : true, T = C.intl.string(C.t.VJlc0d);
  return j && (T = C.intl.string(C.t.cqWE2d)), <div className={E.card} onContextMenu={e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 643560));
        return t => (0, r.jsx)(e, Z(I({}, t), {
          entry: l
        }))
      })
    }}>{<div className={E.cardHeader}>{<div className={E.splash}>{null != S && (0, r.jsx)("img", {
          src: S,
          alt: "",
          className: E.splashImage
        })}</div>}{<div className={E.guildIcon}><h.ZP mask={h.ZP.Masks.SQUIRCLE} width={48} height={48}><div className={E.iconMask}><f.Z className={E.icon} iconSrc={P} guild={(0, _.e)(l)} size={f.Z.Sizes.MEDIUM} active={true} /></div></h.ZP></div>}</div>}{<div className={E.guildInfo}>{<div className={E.title}>{<g.Z className={E.guildBadge} guild={l} tooltipColor={c.ua7.Colors.PRIMARY} />}{<c.Text className={E.guildName} variant={"heading-md/semibold"} color={"header-primary"}>{l.name}</c.Text>}</div>}{<c.Text className={E.description} variant={"text-sm/normal"} color={"header-secondary"}>{l.description}</c.Text>}{<div className={E.memberInfo}>{null != l.approximatePresenceCount && <div className={E.memberCount}>{<div className={E.dotOnline} />}{<c.Text variant={"text-xs/normal"} color={"header-secondary"}>{C.intl.format(C.t["LC+S+v"], {
              membersOnline: l.approximatePresenceCount
            })}</c.Text>}</div>}{null != l.approximateMemberCount && <div className={E.memberCount}>{<div className={E.dotOffline} />}{<c.Text variant={"text-xs/normal"} color={"header-secondary"}>{C.intl.format(C.t.zRl6XV, {
              count: l.approximateMemberCount
            })}</c.Text>}</div>}</div>}{<o.zx submitting={a} className={E.joinButton} color={j ? o.zx.Colors.PRIMARY : o.zx.Colors.GREEN} onClick={O}>{T}</o.zx>}</div>}{<N entry={l} />}</div>
}