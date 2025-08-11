/** Chunk was on 49152 **/
/** chunk id: 406326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk833103 = require("./833103.js"),
  Chunk607802 = require("./607802.js"),
  Chunk945577 = require("./945577.js"),
  Chunk28964 = require("./28964.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk107242 = require("./107242.js");

function m(e) {
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

function b(e, t) {
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

function y(e) {
  let {
    searchContext: t,
    searchMode: l,
    onSearchModeChange: o,
    totalResults: y,
    isIndexing: _,
    isSearching: j,
    documentsIndexed: O
  } = e, v = (0, d.UX)({
    location: "SearchHeader"
  }), C = (0, h.xd)({
    isXDMSearch: t.type === p.aib.DMS,
    location: "SearchHeader"
  }), E = (0, c.gI)(t), {
    totalFilters: S
  } = (0, c.hE)(E), I = i.useMemo(() => {
    if (t.type === p.aib.DMS && v) {
      var e, n;
      let t = null != (n = null == (e = (0, u.$G)(E).channel_id) ? true : e.length) ? n : 0;
      return t > 0 ? f.intl.format(f.t.A2dqWF, {
        filterCount: t
      }) : f.intl.string(f.t.tc619f)
    }
    return null
  }, [v, t.type, E]), Z = i.useMemo(() => [{
    label: f.intl.string(f.t.CbaapK),
    value: p.QIO.NEWEST
  }, {
    label: f.intl.string(f.t.OukXZm),
    value: p.QIO.OLDEST
  }, {
    label: f.intl.string(f.t["q8gB5+"]),
    value: p.QIO.MOST_RELEVANT
  }], []), P = i.useCallback(() => {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("37979").then(n.bind(n, 238088));
      return n => <e{...b(m({}, n), {
        searchContext: t
      })} />
    })
  }, [t]), T = i.useMemo(() => S > 0 ? f.intl.format(f.t.uaR4sL, {
    filterCount: S
  }) : f.intl.string(f.t.UdhTtr), [S]);
  return <header className={a()(g.searchHeader, {
      [g.searchHeaderWithSubtitle]: null != I
    })}>{<div className={g.totalResults} role={"status"}><x totalResults={y} subtitle={I} isIndexing={_} isSearching={j} documentsIndexed={O} /></div>}{C ? <div className={g.searchModeAndFiltersContainer}>{<s.q4e options={Z} value={l} onChange={o} look={s.qQH.CUSTOM} className={g.searchModeSelect} popoutWidth={130} />}{<s.zxk variant={"secondary"} onClick={P} text={T} icon={s.gXV} size={"sm"} />}</div> : <s.njP orientation={"horizontal"} className={g.searchHeaderTabList} selectedItem={l} onItemSelect={o}>{<s.njP.Item className={g.searchHeaderTab} id={p.QIO.NEWEST}>{f.intl.string(f.t.rLjqbW)}</s.njP.Item>}{<s.njP.Item className={g.searchHeaderTab} id={p.QIO.OLDEST}>{f.intl.string(f.t.a1BaUl)}</s.njP.Item>}{<s.njP.Item className={g.searchHeaderTab} id={p.QIO.MOST_RELEVANT}>{f.intl.string(f.t.FtR97u)}</s.njP.Item>}</s.njP>}</header>
}

function x(e) {
  let {
    totalResults: t,
    subtitle: n,
    isSearching: i,
    isIndexing: l,
    documentsIndexed: a
  } = e;
  return l ? <j documentsIndexed={a} /> : i ? <O /> : <v totalResults={t} subtitle={n} />
}

function _() {
  return <div className={Chunk107242.spinnerWrapper}><Chunk481060.$jN type={Chunk481060.$jN.Type.SPINNING_CIRCLE} className={Chunk107242.spinner} itemClassName={Chunk107242.spinnerPath} /></div>
}

function j(e) {
  let {
    documentsIndexed: t
  } = e;
  return <s.ua7 text={f.intl.formatToPlainString(f.t["4Y3O+P"], {
      count: t
    })}>{e => (0, r.jsxs)("div", b(m({
      className: g.totalResultsWrapper
    }, e), {
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: (0, r.jsx)(s.eee, {
          className: g.helpdeskLink,
          href: o.Z.getArticleURL(p.BhN.SEARCH_INDEXING),
          children: f.intl.string(f.t["G3EA+/"])
        })
      }), (0, r.jsx)(_, {})]
    }))}</s.ua7>
}

function O() {
  return <Chunk255367.Fragment>{<Chunk481060.Text variant={"text-md/medium"} color={"header-secondary"}>{Chunk388032.intl.string(Chunk388032.t.uixzLS)}</Chunk481060.Text>}{<_ />}</Chunk255367.Fragment>
}

function v(e) {
  let {
    totalResults: t,
    subtitle: n
  } = e, l = i.useMemo(() => t.toLocaleString(), [t]), a = <s.Text variant={"text-md/medium"} color={"header-primary"}>{f.intl.format(f.t.ZGVL3t, {
      count: l
    })}</s.Text>;
  return null != n ? <div className={g.totalResultsWithSubtitle}>{a}{<s.Text variant={"text-xs/medium"} color={"text-secondary"}>{n}</s.Text>}</div> : a
}