/** Chunk was on 7654 **/
/** chunk id: 666258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => F
}), require("./388685.js"), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk533800 = require("./533800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk657305 = require("./657305.js"),
  Chunk835473 = require("./835473.js"),
  Chunk471445 = require("./471445.js"),
  Chunk313201 = require("./313201.js"),
  Chunk925329 = require("./925329.js"),
  Chunk65361 = require("./65361.js"),
  Chunk305347 = require("./305347.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk626135 = require("./626135.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk971130 = require("./971130.js"),
  Chunk366980 = require("./366980.js"),
  Chunk76234 = require("./76234.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942558 = require("./942558.js");

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = e => {
    let {
      inviteIcon: t,
      channelIcon: n,
      heading: i,
      subheading: r
    } = e;
    return <l.Fragment>{null == t ? null : <div className={Z.inviteIcon}>{t}</div>}{<div className={Z.inviteTarget}>{<div className={Z.inviteTargetHeading}>{null == n ? null : n}{<h.X6q variant={"heading-md/semibold"} color={"header-secondary"} lineClamp={1}>{i}</h.X6q>}</div>}{r}</div>}</l.Fragment>
  },
  R = e => {
    let {
      guild: t,
      channel: n
    } = e, i = (0, E.a5)({
      type: n.type
    }), r = <h.Text variant={"text-xs/medium"} color={"header-muted"} lineClamp={1}>{[i, t.name].join("\xa0\xa0•\xa0\xa0")}</h.Text>, s = (0, x.KS)(n, t), a = <N.Ft guildId={t.id} guildName={t.name} guildIcon={t.icon} iconSize={40} />;
    return <M inviteIcon={a} channelIcon={null == s ? null : (0, l.jsx)(s, {
        className: Z.inviteTargetIcon,
        size: "xs"
      })} heading={n.name} subheading={r} />
  },
  k = e => {
    let t, {
        guild: n
      } = e,
      {
        guildProfile: r,
        fetchGuildProfile: s
      } = (0, j.u)(n.id);
    i.useEffect(() => {
      s()
    }, [s]), t = null === r ? null : <div className={Z.guildPresence}>{<div className={Z.onlineCount}>{<div className={Z.dot} />}{<h.Text variant={"text-xs/medium"} color={"header-muted"}>{P.intl.format(P.t["LC+S+v"], {
            membersOnline: r.onlineCount
          })}</h.Text>}</div>}{<div className={Z.memberCount}>{<div className={Z.dot} />}{<h.Text variant={"text-xs/medium"} color={"header-muted"}>{P.intl.format(P.t.zRl6XV, {
            count: r.memberCount
          })}</h.Text>}</div>}</div>;
    let a = <N.Ft guildId={n.id} guildName={n.name} guildIcon={n.icon} iconSize={40} />;
    return <M inviteIcon={a} heading={n.name} subheading={t} />
  },
  D = e => {
    let {
      applicationId: t
    } = e, [n] = (0, v.Z)([t]);
    if (null == n) return null;
    let i = (0, p.Z)(n.name),
      r = <h.Text variant={"text-xs/medium"} color={"header-muted"} lineClamp={1}><l.Fragment>{n.tags.join("\xa0\xa0•\xa0\xa0")}</l.Fragment></h.Text>,
      s = <f.Z game={n} size={f.Z.Sizes.MEDIUM} className={Z.inviteIcon} />;
    return <M inviteIcon={s} heading={i} subheading={r} />
  };

function L(e) {
  let {
    guild: t,
    channel: n,
    applicationId: i
  } = e;
  return null != i ? <D applicationId={i} /> : null != n ? <R guild={t} channel={n} /> : <k guild={t} />
}

function V(e) {
  let {
    className: t,
    children: n
  } = e;
  return <div className={s()(t, Z.advancedOptions)}>{n}</div>
}

function U(e) {
  let t, n, {
    className: i,
    children: r,
    htmlFor: a,
    onClick: o
  } = e;
  return null != a ? (t = "label", n = {
    htmlFor: a
  }) : null != o ? (t = h.P3F, n = {
    onClick: o
  }) : (t = "div", n = {}), <t{...A(w({
    className: Z.advancedOption
  }, n), {
    children: (0, l.jsx)("div", {
      className: s()(i, Z.advancedOptionInner),
      children: r
    })
  })} />
}

function F(e) {
  let {
    className: t,
    guild: r,
    channel: a,
    applicationId: p,
    getInviteKey: v,
    sendInvite: x,
    canUseVanityURL: f,
    disabled: j,
    hasSelection: N,
    options: E,
    setOptions: M,
    isApplicationBypassAllowed: R,
    isGuestInviteAllowed: k,
    isTemporaryInviteAllowed: D,
    setError: F,
    analyticsLocation: B
  } = e, [z, G] = i.useState(false), [H, q] = i.useState(false), W = i.useRef(null), [Y] = (0, d.Wu)([_.Z], () => [_.Z.hideInstantInvites]), K = (0, I.Dt)(), X = (0, I.Dt)(), J = (0, I.Dt)(), Q = i.useMemo(() => f && null != r.vanityURLCode ? (0, O.Z)(r.vanityURLCode, false) : null, [r, f]), $ = i.useCallback(async () => {
    var e, t;
    if (j) return;
    null !== W.current && clearTimeout(W.current);
    let n = await v();
    o()(null != n, "Invite key could not be determined.");
    let l = (0, O.Z)(n);
    return (0, b.JG)(l, () => {
      G(true), W.current = setTimeout(() => {
        G(false), W.current = null
      }, 1e3)
    }, e => {
      F(e)
    }), S.default.track(C.rMx.COPY_INSTANT_INVITE, {
      server: r.id,
      channel: null != (e = null == a ? true : a.id) ? e : null,
      channel_type: null != (t = null == a ? true : a.type) ? t : null,
      location: B,
      code: n,
      application_id: p
    }), () => {
      null !== W.current && clearTimeout(W.current)
    }
  }, [j, v, r, a, B, p, F]), ee = i.useCallback(e => {
    M({
      max_age: e
    })
  }, [M]), et = i.useCallback(e => {
    M({
      max_uses: e
    })
  }, [M]), en = i.useCallback(e => {
    E.flags === e ? M({
      flags: true
    }) : M({
      flags: e
    })
  }, [E, M]), el = i.useCallback(e => {
    M({
      temporary: e
    })
  }, [M]), ei = i.useCallback(e => {
    var t;
    let i = null == (t = e.currentTarget) ? true : t.getBoundingClientRect(),
      {
        left: r = 0,
        width: s = 0
      } = null != i ? i : {};
    e.pageX = r + s + 12, (0, m.jW)(e, async () => {
      let {
        default: e
      } = await n.e("84212").then(n.bind(n, 593851));
      return t => <e{...A(w({}, t), {
        initialOptions: E,
        onChangeMaxAge: ee,
        onChangeMaxUses: et
      })} />
    })
  }, [E, ee, et]), er = function(e) {
    let t = y.H.find(t => {
        let {
          value: n
        } = t;
        return n === e.max_age
      }),
      n = y.p.find(t => {
        let {
          value: n
        } = t;
        return n === e.max_uses
      });
    return null == t || null == n ? null : t.value === T.ZP.INVITE_OPTIONS_FOREVER.value && n.value === T.ZP.INVITE_OPTIONS_UNLIMITED.value ? P.intl.string(P.t["5u4A6e"]) : t.value !== T.ZP.INVITE_OPTIONS_FOREVER.value && n.value !== T.ZP.INVITE_OPTIONS_UNLIMITED.value ? P.intl.formatToPlainString(P.t["Z5Vt5+"], {
      maxAge: t.label,
      maxUses: n.label
    }) : n.value === T.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value !== T.ZP.INVITE_OPTIONS_FOREVER.value ? t.label : n.value !== T.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value === T.ZP.INVITE_OPTIONS_FOREVER.value ? n.label : null
  }(E);
  return <div className={s()(t, Z.footer)}>{<div className={Z.guildRow}>{<L guild={r} channel={a} applicationId={p} />}{<h.ua7 position={"top"} text={P.intl.string(P.t["4QuV7O"])}>{e => (0, l.jsx)(h.P3F, A(w({
          className: s()(Z.settingsButton, {
            [Z.settingsOpen]: H
          })
        }, e), {
          onClick: () => {
            var t;
            null == e || null == (t = e.onClick) || t.call(e), q(e => !e)
          },
          children: (0, l.jsx)(h.ewm, {
            size: "refresh_sm",
            color: c.Z.colors.ICON_PRIMARY
          })
        }))}</h.ua7>}</div>}{H && <V>{<U onClick={ei}>{<div className={Z.advancedOptionContent}>{<h.X6q variant={"heading-md/medium"}>{P.intl.string(P.t.YlT5MT)}</h.X6q>}{<h.ua7 position={"top"} text={P.intl.string(P.t.efLzgY)}>{e => (0, l.jsx)(h.idN, A(w({}, e), {
              size: "xs",
              color: c.Z.colors.INTERACTIVE_NORMAL
            }))}</h.ua7>}</div>}{<div className={Z.advancedOptionContent}>{null != er && <h.Text variant={"text-sm/medium"} color={"header-muted"}>{er}</h.Text>}{<h.Fbu size={"xs"} color={c.Z.colors.INTERACTIVE_NORMAL} />}</div>}</U>}{R && <U htmlFor={K}>{<div className={Z.advancedOptionContent}>{<h.X6q variant={"heading-md/medium"}>{P.intl.string(P.t.EPIOl5)}</h.X6q>}{<h.ua7 position={"top"} text={P.intl.string(P.t["jvd/LC"])}>{e => (0, l.jsx)(h.idN, A(w({}, e), {
              size: "xs",
              color: c.Z.colors.INTERACTIVE_NORMAL
            }))}</h.ua7>}</div>}{<h.rsf id={K} checked={E.flags === u.$.IS_APPLICATION_BYPASS} onChange={() => en(u.$.IS_APPLICATION_BYPASS)} />}</U>}{k && <U htmlFor={X}>{<div className={Z.advancedOptionContent}>{<h.X6q variant={"heading-md/medium"}>{P.intl.string(P.t.NKqlpq)}</h.X6q>}{<h.ua7 position={"top"} text={P.intl.string(P.t.pBOevb)}>{e => (0, l.jsx)(h.idN, A(w({}, e), {
              size: "xs",
              color: c.Z.colors.INTERACTIVE_NORMAL
            }))}</h.ua7>}</div>}{<h.rsf id={X} checked={E.flags === u.$.IS_GUEST_INVITE} onChange={() => en(u.$.IS_GUEST_INVITE)} />}</U>}{D && <U htmlFor={J}>{<div className={Z.advancedOptionContent}>{<h.X6q variant={"heading-md/medium"}>{P.intl.string(P.t.UL177u)}</h.X6q>}{<h.ua7 position={"top"} text={P.intl.string(P.t.cl1HNT)}>{e => (0, l.jsx)(h.idN, A(w({}, e), {
              size: "xs",
              color: c.Z.colors.INTERACTIVE_NORMAL
            }))}</h.ua7>}</div>}{<h.rsf id={J} checked={!!E.temporary} onChange={e => el(e)} />}</U>}</V>}{<div className={Z.buttonRow}>{<h.ua7 position={"top"} text={Q} shouldShow={null !== Q && !Y}>{e => (0, l.jsx)(g.zx, A(w({
          className: Z.button,
          innerClassName: Z.buttonInner,
          color: g.zx.Colors.PRIMARY
        }, e), {
          onClick: () => {
            var t;
            null == e || null == (t = e.onClick) || t.call(e), $()
          },
          disabled: j,
          children: z ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(h.dz2, {
              size: "xs",
              color: "currentColor"
            }), (0, l.jsx)("span", {
              children: P.intl.string(P.t["+5kSoa"])
            })]
          }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(h.xPt, {
              size: "xs",
              color: "currentColor"
            }), (0, l.jsx)("span", {
              children: P.intl.string(P.t.WqhZsr)
            })]
          })
        }))}</h.ua7>}{<g.zx className={Z.button} innerClassName={Z.buttonInner} onClick={() => x()} disabled={!N || j}>{<span>{P.intl.string(P.t.BcAABg)}</span>}{<h.Uuj size={"xs"} color={"currentColor"} />}</g.zx>}</div>}</div>
}