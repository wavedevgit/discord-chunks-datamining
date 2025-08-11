/** Chunk was on 18824 **/
/** chunk id: 967254, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  N: () => k
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk499033 = require("./499033.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk531441 = require("./531441.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk467432 = require("./467432.js"),
  Chunk451284 = require("./451284.js"),
  Chunk613734 = require("./613734.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk202719 = require("./202719.js");

function E(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      s = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), s.forEach(function(e) {
      var s;
      s = n[e], e in t ? Object.defineProperty(t, e, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = s
    })
  }
  return t
}
let T = t => {
    let {
      status: e,
      onClick: n,
      opened: i,
      count: a
    } = t;
    return <c.P3F className={b.header} onClick={n}>{<div className={b.headerIconWrapper}><c.aNP size={"md"} color={"active" === e ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.INTERACTIVE_MUTED} /></div>}{<div className={b.title}>{<c.X6q variant={"heading-md/semibold"} color={"text-default"}>{"active" === e ? S.intl.formatToPlainString(S.t.IeV2oa, {
            count: a.toString()
          }) : S.intl.formatToPlainString(S.t.fZAHBQ, {
            count: a.toString()
          })}</c.X6q>}{<c.X6q variant={"text-sm/normal"} color={"text-muted"}>{"active" === e ? S.intl.string(S.t.XJ2YVV) : S.intl.string(S.t.SzGV0t)}</c.X6q>}</div>}{<div className={b.caret}><o.Z width={18} height={18} direction={i ? o.Z.Directions.UP : o.Z.Directions.DOWN} /></div>}</c.P3F>
  },
  O = () => <div className={Chunk202719.emptyState}>{<div className={Chunk202719.iconContainer}>{<div className={Chunk202719.iconBackground}><Chunk481060.rm8 size={"md"} color={"currentColor"} className={Chunk202719.icon} /></div>}{<Chunk499033.Z className={Chunk202719.stars} />}</div>}{<Chunk481060.X6q variant={"heading-md/bold"} className={Chunk202719.emptyStateText}>{Chunk388032.intl.string(Chunk388032.t.reLFaW)}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-xs/normal"} className={Chunk202719.emptyStateSubtext}>{Chunk388032.intl.string(Chunk388032.t.ERdH1t)}</Chunk481060.Text>}</div>,
  y = () => <div className={Chunk202719.emptyState}><Chunk481060.Text variant={"text-xs/normal"} className={Chunk202719.emptyStateSubtext}>{Chunk388032.intl.string(Chunk388032.t.RV3AXV)}</Chunk481060.Text></div>,
  I = t => {
    let {
      timestamp: e
    } = t;
    return <c.Text variant={"text-xs/normal"} className={b.timestamp}>{(0, g.XX)(e)}</c.Text>
  },
  _ = () => <Chunk481060.Text variant={"text-xs/bold"} className={Chunk202719.newBadge}>{Chunk388032.intl.string(Chunk388032.t.QKMRCw)}</Chunk481060.Text>,
  D = t => {
    let {
      classification: e
    } = t, {
      id: a,
      description: l
    } = e, o = m.default.extractTimestamp(a), d = (0, j.e)(e), u = i.useMemo(() => {
      var t, n, i, a, r;
      let o = {
        description: l,
        descriptionHook: t => <c.Text tag={"span"} variant={"heading-lg/bold"}>{t}</c.Text>
      };
      return (0, g.FB)(e) ? (null == e || null == (t = e.guild_metadata) ? true : t.member_type) !== h.wO.OWNER ? S.intl.format(S.t.rmpEPD, {
        guildName: null == e || null == (i = e.guild_metadata) ? true : i.name,
        classification_type: o.description,
        classificationHook: o.descriptionHook
      }) : S.intl.format(S.t.Lb0HVl, (a = E({}, o), r = r = {
        guildName: null == e || null == (n = e.guild_metadata) ? true : n.name
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          n.push.apply(n, s)
        }
        return n
      })(Object(r)).forEach(function(t) {
        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(r, t))
      }), a)) : S.intl.format(S.t.QY4g5u, o)
    }, [e, l]);
    return <c.P3F onClick={() => {
        (0, c.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("25183"), n.e("18831"), n.e("27066")]).then(n.bind(n, 41164));
          return e => (0, s.jsx)(t, E({
            classificationId: a,
            source: v.s.StandingTab
          }, e))
        })
      }} className={r()(b.itemDetail, {
        [b.itemDetailNew]: d
      })}><div className={b.descriptionContainer}>{d ? <_ /> : <I timestamp={o} />}{<c.X6q variant={"heading-lg/normal"}>{u}</c.X6q>}</div></c.P3F>
  },
  w = t => {
    let {
      status: e,
      classifications: n
    } = t, [a, r] = i.useState(false), [o, d] = i.useState(3), m = (0, p.P)(), h = (0, l.e7)([x.Z], () => x.Z.getIsDsaEligible()), g = i.useMemo(() => n.slice(0, o), [n, o]);
    i.useEffect(() => {
      a && u.default.track(N.rMx.SAFETY_HUB_ACTION, {
        action: v.n0.ViewViolationsDropdown,
        account_standing: m.state,
        classification_ids: g.map(t => Number(t.id)),
        source: v.s.StandingTab,
        is_violative_content_shown: false,
        is_dsa_eligible: h
      })
    }, [a, m.state, g, h]);
    let j = n.length - g.length > 3 ? 3 : n.length - g.length;
    return <div className={b.dropdown}>{<T status={e} onClick={() => r(t => !t)} opened={a} count={n.length} />}{a && <div className={b.items}>{<c.njP.Separator style={{
            height: "1px",
            width: "100%"
          }} />}{g.length > 0 && g.map(t => <D classification={t} />)}{g.length < n.length && <s.Fragment>{<c.njP.Separator style={{
              height: "1px",
              width: "100%"
            }} />}{<button className={b.paginationButton} onClick={() => d(t => t + j)}>{S.intl.format(S.t["9Ml56O"], {
              nextPageSize: j
            })}</button>}</s.Fragment>}{0 === g.length && "active" === e && <O />}{0 === g.length && "expired" === e && <y />}</div>}</div>
  },
  k = () => {
    let t = (0, Chunk613734.y9)(),
      e = (0, Chunk613734.KM)();
    return 0 === module.length && 0 === exports.length ? null : <div>{<w status={"active"} classifications={module} />}{<w status={"expired"} classifications={exports} />}</div>
  }