/** Chunk was on 22988 **/
/** chunk id: 12078, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk220250 = require("./220250.js"),
  Chunk813197 = require("./813197.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk921948 = require("./921948.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk570911 = require("./570911.js"),
  Chunk388032 = require("./388032.js"),
  Chunk364313 = require("./364313.js");

function j(e) {
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

function v(e, t) {
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

function _(e) {
  let {
    profile: t,
    canManageGuild: n,
    handleClick: i,
    hasCustomBanner: l
  } = e, s = (0, c.nv)(), d = (0, c.qw)({
    profile: t,
    defaultColor: s.hex(),
    forceDefaultColor: false
  });
  return <o.ua7 text={b.intl.string(b.t.W4Nd7e)}>{e => (0, r.jsx)(o.P3F, v(j({}, e), {
      "aria-disabled": !n,
      tabIndex: n ? 0 : false,
      "aria-label": b.intl.string(b.t.W4Nd7e),
      onClick: n ? i : true,
      style: {
        background: (0, c.dG)(d)
      },
      className: a()(x.itemContainer, {
        [x.disabled]: !n
      }),
      children: (0, r.jsx)("div", {
        className: a()({
          [x.itemSelected]: !l && null == t.brandColorPrimary
        })
      })
    }))}</o.ua7>
}

function O(e) {
  let {
    isDiscoverable: t,
    profile: n,
    onCustomBannerChange: l,
    canManageGuild: s
  } = e, c = null != n.customBanner, u = i.useMemo(() => {
    if (null == n.customBanner) return null;
    let e = n.customBanner;
    return m.ff.test(e) ? e : m.ZP.getGuildDiscoverySplashURL({
      id: n.id,
      splash: n.customBanner,
      size: 300 * (0, g.Z)()
    })
  }, [n]);
  if (!t) return null;
  let p = null != u ? <img className={x.uploadedImage} src={u} alt={""} aria-hidden={true} /> : <o.dZu size={"md"} />;
  return <div className={x.uploadItemContainer}><o.tEY within={true}><div className={a()(x.uploadItemWrapper, {
          [x.uploadItemSelected]: c
        })}><div className={a()(x.uploadItem, {
            [x.disabled]: !s
          })}>{p}{<div className={x.overlay} />}{<o.vdY size={"custom"} className={x.overlayIcon} width={20} height={20} color={"white"} />}{<d.ZP multiple={false} tabIndex={0} onChange={l} disabled={!s} />}</div></div></o.tEY></div>
}

function y(e) {
  var t;
  let {
    profile: n,
    onCustomBannerChange: l,
    canManageGuild: d
  } = e, m = (0, s.e7)([u.Z], () => u.Z.getGuild(n.id)), g = null != (t = null == m ? true : m.features.has(h.oNc.DISCOVERABLE)) && t, y = n.id, C = i.useCallback(e => () => {
    p.Z.updateGuildProfile(y, {
      brandColorPrimary: e,
      customBanner: null
    })
  }, [y]), N = i.useCallback(e => (!g || null == n.customBanner) && e === n.brandColorPrimary, [n, g]);
  return <o.hjN title={b.intl.string(b.t.BSVog4)}><div className={x.grid}>{<_ profile={n} canManageGuild={d} handleClick={C(null)} hasCustomBanner={g && null != n.customBanner} />}{f.cb.map(e => {
        let {
          name: t,
          color: n
        } = e;
        return <o.ua7 text={t}>{e => (0, r.jsx)(o.P3F, v(j({}, e), {
            "aria-disabled": !d,
            tabIndex: d ? 0 : false,
            "aria-label": t,
            onClick: d ? C(n) : true,
            style: {
              background: (0, c.dG)(n)
            },
            className: a()(x.itemContainer, {
              [x.disabled]: !d
            }),
            children: (0, r.jsx)("div", {
              className: a()({
                [x.itemSelected]: N(n)
              })
            })
          }))}</o.ua7>
      })}{<O canManageGuild={d} isDiscoverable={g} profile={n} onCustomBannerChange={l} />}</div></o.hjN>
}