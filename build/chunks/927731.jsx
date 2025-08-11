/** Chunk was on 22988 **/
/** chunk id: 927731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk644542 = require("./644542.js"),
  Chunk923726 = require("./923726.js"),
  Chunk584825 = require("./584825.js"),
  Chunk295141 = require("./295141.js"),
  Chunk723047 = require("./723047.js"),
  Chunk290348 = require("./290348.js"),
  Chunk450215 = require("./450215.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199824 = require("./199824.js");

function y(e) {
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

function C(e, t) {
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
let N = "guild-role-subscription-tier-template-selector",
  I = e => {
    let [t, n] = i.useState(true), [r, l] = i.useState();
    return i.useEffect(() => {
      n(true), (0, f.X)(e).then(e => {
        l(e), n(false)
      })
    }, [e]), {
      loading: t,
      priceTiers: r
    }
  };

function E(e) {
  let {
    guildId: t,
    priceTiers: l,
    groupListingId: f
  } = e, I = (0, h._k)(f), {
    editStateIds: E,
    addNewEditStateId: S,
    addNewEditStateFromTemplate: T,
    removeEditStateId: P
  } = x.B7(f, t, {
    includeSoftDeleted: true
  }), [w, R] = i.useState({}), Z = i.useMemo(() => {
    let e = E.map(e => {
      var t;
      return null != (t = w[e]) ? t : e
    });
    return (0, s.uniq)(e)
  }, [E, w]), D = (e, t) => {
    R(n => C(y({}, n), {
      [e]: t
    }))
  }, A = (0, p.ss)(t), k = (0, p.Gp)(), L = i.useCallback(() => {
    k && g.jJ.trackExposure({
      guildId: t,
      location: "b2d9de_1"
    }), k && A ? (0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("9558").then(n.bind(n, 34460));
      return n => <e{...C(y({}, n), {
        guildId: t,
        addNewEditStateFromTemplate: T,
        addNewEditStateFromScratch: S,
        priceTiers: l
      })} />
    }, {
      modalKey: N
    }) : S()
  }, [t, T, S, l, k, A]), M = x.Lo(Z), G = i.useCallback(() => Z.forEach(x.GM), [Z]), U = (0, b.mY)(), B = (0, o.e7)([m.Z], () => m.Z.getProps().subsection);
  return i.useEffect(() => (B === v.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && L(), () => {
    (0, d.Mr3)(N)
  }), [B, L]), <r.Fragment>{<div className={O.groupListings}>{Z.map(e => <j.Z guildId={t} initialEditStateId={e} allSubscriptionListings={I} priceTiers={l} groupListingId={f} onDeleteEditState={() => P(e)} onBeforeDispatchNewListing={t => D(t.id, e)} onAfterDispatchNewListing={() => P(e)} />)}{<d.P3F onClick={U ? true : L} className={a()(O.createTierButton, {
          [O.disabled]: U
        })} aria-disabled={U}>{<d.oFk size={"xs"} color={"currentColor"} className={O.createTierIcon} />}{<d.Text variant={"text-md/normal"} color={"interactive-active"}>{_.intl.string(_.t.PiFnn5)}</d.Text>}</d.P3F>}</div>}{<c.W component={"div"} className={O.contentRegion}>{M && (0, r.jsx)(d.oXn, {
        children: (0, r.jsx)(u.Z, {
          onReset: G
        })
      })}</c.W>}</r.Fragment>
}

function S(e) {
  let {
    guildId: t
  } = e, {
    priceTiers: n
  } = I(t), i = (0, h.GG)(t), {
    maxTiers: l
  } = (0, p.s1)(t), a = i.map(e => e.id);
  return <d.hjN title={_.intl.string(_.t["72+Soq"])} className={O.container}>{<d.R94 type={d.R94.Types.DESCRIPTION}>{_.intl.format(_.t.nHRSvL, {
        maxTiers: l
      })}</d.R94>}{<d.LZC size={16} />}{<E priceTiers={n} guildId={t} groupListingId={a[0]} />}</d.hjN>
}