/** Chunk was on 1272 **/
/** chunk id: 294330, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Eo: () => j,
  VD: () => T,
  ZP: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410030 = require("./410030.js"),
  Chunk686546 = require("./686546.js"),
  Chunk66637 = require("./66637.jsx"),
  Chunk782738 = require("./782738.js"),
  Chunk371260 = require("./371260.js"),
  Chunk372769 = require("./372769.js"),
  Chunk134432 = require("./134432.js"),
  Chunk768581 = require("./768581.js"),
  Chunk356164 = require("./356164.js"),
  Chunk826946 = require("./826946.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk727615 = require("./727615.js"),
  Chunk129512 = require("./129512.js"),
  Chunk330065 = require("./330065.js"),
  Chunk755386 = require("./755386.js");

function T(e) {
  let {
    guild: t,
    onClick: l,
    onView: o
  } = e, [h, g] = i.useState(false), [O, T] = i.useState(false), [P, j] = i.useState(false), x = i.useRef(null), A = i.useCallback(async () => {
    T(true);
    try {
      await l(t.id)
    } finally {
      T(false)
    }
  }, [t.id, l]), Z = i.useCallback(e => {
    e && !h && (g(true), null == o || o(t.id))
  }, [t.id, h, o]), w = i.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("88560").then(n.bind(n, 858523));
      return n => {
        var i, l;
        return <e{...i = function(e) {
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
        }({}, n), l = l = {
          guild: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i} />
      }
    })
  }, [t]), L = (0, d.ZP)(), R = t.features.has(y.oNc.HUB), D = i.useMemo(() => {
    let e = _.ZP.getGuildDiscoverySplashURL({
      id: t.id,
      splash: t.discoverySplash,
      size: 300 * (0, b.x_)()
    });
    if (null != e) return e;
    if (R) return N;
    switch (L) {
      case y.BRd.DARK:
        return C;
      case y.BRd.LIGHT:
        return S
    }
  }, [t.discoverySplash, t.id, R, L]), k = i.useMemo(() => _.ZP.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 48
  }), [t.icon, t.id]);
  return <div className={I.container}>{O && <div className={I.spinnerContainer}><c.$jN type={c.$jN.Type.PULSING_ELLIPSIS} className={I.spinner} /></div>}{<s.$ innerRef={x} onChange={Z} active={!h} threshold={.55}><f.Z ref={x} className={I.card} onClick={A} disabled={O} onContextMenu={w} aria-label={v.intl.string(v.t["M9wQ+f"])}>{<div className={I.header}>{<div className={a()(I.banner, {
              [I.loaded]: P
            })}><img src={D} alt={""} className={I.bannerImage} onLoad={() => j(true)} /></div>}{<E.Z className={I.maximizeIcon} guildId={t.id} />}{<div className={I.icon}><p.ZP mask={p.ZP.Masks.SQUIRCLE} width={56} height={56}><div className={I.iconMask}><p.ZP mask={p.ZP.Masks.SQUIRCLE} width={48} height={48}><img src={k} alt={""} className={I.avatar} /></p.ZP></div></p.ZP></div>}</div>}{<div className={I.guildDetails}>{<div className={I.title}>{<m.Z className={I.guildBadge} guild={t} tooltipColor={c.ua7.Colors.PRIMARY} />}{<c.X6q variant={"heading-md/semibold"} className={I.guildName}>{t.name}</c.X6q>}</div>}{<c.Text className={I.description} variant={"text-sm/normal"} color={"header-secondary"}>{t.description}</c.Text>}{<div className={I.memberDetails}>{null != t.presenceCount && <div className={I.memberDetailsCount}>{<div className={I.presenceCountDot} />}{<c.Text className={I.memberDetailsText} variant={"text-xs/normal"} color={"header-secondary"}>{v.intl.format(v.t["LC+S+v"], {
                  membersOnline: t.presenceCount
                })}</c.Text>}</div>}{null != t.memberCount && <div className={I.memberDetailsCount}>{<div className={I.memberCountDot} />}{<c.Text className={I.memberDetailsText} variant={"text-xs/normal"} color={"header-secondary"}>{v.intl.format(v.t.zRl6XV, {
                  count: t.memberCount
                })}</c.Text>}</div>}</div>}</div>}</f.Z></s.$>}</div>
}

function P(e) {
  let {
    guildId: t,
    onClick: n,
    onView: i
  } = e, l = (0, o.e7)([O.Z], () => O.Z.getGuild(t));
  return null == l ? null : <T guild={l} onClick={n} onView={i} />
}

function j(e) {
  let {
    guildId: t,
    index: n,
    onClick: l,
    onView: a
  } = e, o = i.useRef(null == t), s = i.useCallback((e, t, n, i) => null == t.guildId ? <g.Z state={n} cleanUp={i}><h.Z className={I.placeholder} /></g.Z> : <g.Z state={n} cleanUp={i} animate={o.current}><P guildId={t.guildId} onClick={l} onView={a} /></g.Z>, [l, a]), u = i.useCallback(e => {
    var t;
    return null != (t = e.guildId) ? t : "".concat(e.index)
  }, []), d = i.useMemo(() => [{
    guildId: t,
    index: n
  }], [t, n]);
  return <div className={I.transitionGroup}><c.W3x items={d} renderItem={s} getItemKey={u} /></div>
}
let x = Chunk73800.memo(P)