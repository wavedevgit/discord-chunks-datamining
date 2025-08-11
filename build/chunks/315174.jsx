/** Chunk was on 34779 **/
/** chunk id: 315174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => D,
  wD: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666188 = require("./666188.js"),
  Chunk340541 = require("./340541.js"),
  Chunk159300 = require("./159300.js"),
  Chunk553984 = require("./553984.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk598056 = require("./598056.js"),
  Chunk358555 = require("./358555.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk388032 = require("./388032.js"),
  Chunk917669 = require("./917669.js");

function S(e) {
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

function x(e, t) {
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

function I(e) {
  var t;
  let {
    guild: n,
    controller: i,
    guildBanner: l,
    animate: c
  } = e, {
    value: u
  } = i.springs;
  return <s.animated.div className={E.animatedContainer} style={{
      opacity: u,
      transform: u.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    }}><s.animated.div className={o()(E.bannerImage, {
        [E.bannerImgFullWidth]: a.tq
      })} style={{
        transform: u.to(e => "translateY(".concat((1 - e) * 90, "px)"))
      }}><img className={o()(E.bannerImg, {
          [E.bannerImgFullWidth]: a.tq
        })} src={null != (t = O.ZP.getGuildBannerURL({
          id: n.id,
          banner: l
        }, c)) ? t : ""} alt={""} aria-hidden={true} /></s.animated.div></s.animated.div>
}

function P(e) {
  let {
    guild: t,
    controller: n,
    hasBanner: i,
    hasSubheader: l
  } = e, {
    value: a
  } = n.springs, c = t.features.has(C.oNc.DISCOVERABLE), d = <div className={E.communityInfo}>{c && (0, r.jsx)(u.ua7, {
      text: j.intl.string(j.t.O8lDIy),
      position: "right",
      children: e => (0, r.jsxs)("div", x(S({
        className: E.communityInfoPill
      }, e), {
        children: [(0, r.jsx)(u.enf, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: E.communityIcon
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: j.intl.string(j.t["B/vjCg"])
        })]
      }))
    })}</div>;
  return l ? <div className={o()(E.communityInfoContainer, E.hasSubheader)}>{d}</div> : <s.animated.div className={E.communityInfoContainer} style={i ? {
      opacity: a
    } : {
      height: a.to(e => "".concat(20 * e, "px"))
    }}>{d}</s.animated.div>
}

function N() {
  return <Chunk481060.r7p size={"custom"} color={"currentColor"} className={Chunk917669.favoritesIcon} height={20} width={20} />
}
let w = e => {
  let {
    open: t
  } = e, n = t ? u.u04 : u.CJ0;
  return <n size={"xs"} color={"currentColor"} />
};

function Z(e) {
  let {
    guild: t
  } = e;
  return <u.X6q variant={"text-md/semibold"} lineClamp={1} className={E.name}>{t.name}</u.X6q>
}

function T(e) {
  var t;
  let {
    bannerVisible: n,
    guild: i,
    onClick: l,
    onContextMenu: o,
    ariaControls: s,
    ariaExpanded: a,
    guildHeaderRef: c,
    children: d
  } = e;
  return <r.Fragment>{<y.Z guild={i} isBannerVisible={n} />}{i.id === v._ && <N />}{<Z guild={i} />}{null != l && <u.P3F className={E.headerButton} onClick={l} onContextMenu={o} aria-controls={s} aria-expanded={a} focusProps={{
        ringTarget: c,
        offset: 4
      }} aria-label={j.intl.formatToPlainString(j.t.xMXpl5, {
        guildName: null != (t = null == i ? true : i.name) ? t : ""
      })} />}{<div className={E.headerChildren}>{d}</div>}</r.Fragment>
}
let A = [Chunk647086._, Chunk981631.STv];

function R(e) {
  let {
    bannerVisible: t,
    guild: l,
    onClick: o,
    onContextMenu: s,
    children: a
  } = e, d = i.useRef(null), h = (0, c.e7)([g.Z], () => g.Z.theme), m = i.useCallback(async () => {
    let {
      default: e
    } = await Promise.all([n.e("87154"), n.e("42018")]).then(n.bind(n, 859432));
    return t => {
      let {
        closePopout: n
      } = t;
      return <u.f6W theme={h}>{t => (0, r.jsx)("div", {
          className: t,
          children: (0, r.jsx)(e, {
            onClose: n,
            guild: l
          })
        })}</u.f6W>
    }
  }, [l, h]), O = (0, c.e7)([b.Z], () => (0, p.b)(b.Z, l)), _ = i.useCallback(() => {
    O ? (0, u.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7654"), n.e("17439")]).then(n.bind(n, 560114));
      return t => <e{...x(S({}, t), {
        guild: l,
        source: C.t4x.GUILD_HEADER
      })} />
    }) : (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("88358").then(n.bind(n, 598402));
      return t => <e{...S({}, t)} />
    })
  }, [O, l]);
  return <r.Fragment>{<u.KeG targetElementRef={d} renderPopout={m} position={"bottom"} align={"left"} animation={u.yRy.Animation.SCALE} spacing={4}>{e => {
        var n;
        return (0, r.jsxs)(u.P3F, x(S({
          innerRef: d,
          className: E.guildDropdown,
          "aria-label": j.intl.formatToPlainString(j.t.xMXpl5, {
            guildName: null != (n = null == l ? true : l.name) ? n : ""
          }),
          onContextMenu: s
        }, e), {
          onClick: t => {
            var n;
            null == e || null == (n = e.onClick) || n.call(e, t), null == o || o(t)
          },
          children: [(0, r.jsxs)("div", {
            className: E.guildBadgeAndName,
            children: [(0, r.jsx)(y.Z, {
              guild: l,
              isBannerVisible: t
            }), l.id === v._ && (0, r.jsx)(N, {}), (0, r.jsx)(Z, {
              guild: l
            })]
          }), (0, r.jsx)("div", {
            className: E.headerChildren,
            children: a
          })]
        }))
      }}</u.KeG>}{!A.includes(l.id) && <u.ua7 text={j.intl.string(j.t.Sd8Ix8)} position={"bottom"}>{e => (0, r.jsx)(u.P3F, x(S({
        className: E.inviteButton
      }, e), {
        onClick: () => {
          var t;
          null == (t = e.onClick) || t.call(e), _()
        },
        children: (0, r.jsx)(u.ejJ, {
          size: "refresh_sm",
          color: "currentColor"
        })
      }))}</u.ua7>}{l.id === C.STv && <f.p />}</r.Fragment>
}
let D = Chunk73800.memo(function(e) {
  let {
    ref: t,
    bannerVisible: n,
    controller: l,
    className: s,
    onClick: c,
    onContextMenu: p,
    onMouseDown: f,
    disableBannerAnimation: g,
    "aria-expanded": b,
    "aria-controls": y,
    guild: v,
    guildBanner: j,
    animationOverlayHeight: N,
    children: w,
    headerClassName: Z,
    communityInfoVisible: A,
    hasSubheader: D
  } = e, M = v.features.has(C.oNc.ANIMATED_BANNER), k = (0, d.Z)(v), U = !k && (0, _.Z)(v), G = !k && A, B = (0, O.xR)(j) && M && !g, [V, F] = i.useState(false), H = i.useRef(false), z = i.useRef(null), W = null != t ? t : z, K = i.useRef(true), Y = m.QK.getSetting();
  i.useEffect(() => {
    if (B && n && !H.current && Y) return F(true), K.current = setTimeout(() => {
      F(false)
    }, 5e3), () => {
      clearTimeout(K.current)
    }
  }, [B, n, Y]), i.useEffect(() => {
    H.current = n
  }, [n]);
  let q = () => {
      let {
        renderBanner: t,
        guildBanner: n
      } = e;
      return null != n && !t
    },
    {
      entrypoints: X
    } = (0, h._k)({
      location: "guild_header"
    }),
    Q = {
      bannerVisible: n,
      guild: v,
      onClick: c,
      onContextMenu: p,
      ariaControls: y,
      ariaExpanded: b,
      guildHeaderRef: W
    };
  return <u.f6W theme={n ? C.BRd.DARK : true}>{e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        "data-has-banner": q(),
        "data-banner-visible": n,
        ref: W,
        className: o()(s, {
          [E.container]: true,
          [E.clickable]: !X && null != c,
          [E.selected]: !X && null != c && b,
          [E.hasBanner]: q(),
          [E.bannerVisible]: n,
          [e]: false,
          [E.communityInfoVisible]: G || D && U,
          [E.invitesRefresh]: X
        }),
        onMouseDown: f,
        onClick: X ? true : c,
        onContextMenu: p,
        children: [(0, r.jsxs)("header", {
          className: o()(E.header, Z, {
            [E.themedHeaderMobile]: a.tq
          }),
          children: [(0, r.jsx)("div", {
            className: o()(E.headerContent, E.primaryInfo),
            children: X ? (0, r.jsx)(R, x(S({}, Q), {
              children: w
            })) : (0, r.jsx)(T, x(S({}, Q), {
              children: w
            }))
          }), U && (0, r.jsx)(P, {
            guild: v,
            controller: l,
            hasBanner: null != j,
            hasSubheader: null != D && D
          })]
        }), null != j ? (0, r.jsx)(I, {
          guild: v,
          controller: l,
          guildBanner: j,
          animate: V
        }) : null, (0, r.jsx)(L, {
          controller: l
        })]
      }), B && q() ? (0, r.jsx)("div", {
        className: E.animatedBannerHoverLayer,
        onMouseEnter: () => {
          F(true), clearTimeout(K.current)
        },
        onMouseLeave: () => F(false),
        style: {
          height: N
        }
      }) : null]
    })}</u.f6W>
});

function L(e) {
  let {
    controller: t
  } = e, {
    theme: n
  } = (0, u.TCT)(), i = t.springs.value;
  return <r.Fragment>{<s.animated.div className={E.headerEllipseBackdrop} style={{
        opacity: i.to(e => .5 * e)
      }} />}{<s.animated.div className={E.headerEllipseForeground} style={{
        opacity: i.to(e => e)
      }} />}{<s.animated.div className={E.headerGlass} style={{
        opacity: i.to(e => (1 - e) * 6),
        filter: (0, u.apv)(n) ? i.to(e => "brightness(".concat(.75 + .25 * e, ")")) : true
      }} />}</r.Fragment>
}