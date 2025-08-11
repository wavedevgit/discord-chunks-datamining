/** Chunk was on 83667 **/
/** chunk id: 687555, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  ZP: () => T,
  d: () => q,
  ih: () => k
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk597312 = require("./597312.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk794433 = require("./794433.js"),
  Chunk480466 = require("./480466.js"),
  Chunk434650 = require("./434650.js"),
  Chunk210887 = require("./210887.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk955839 = require("./955839.js"),
  Chunk514020 = require("./514020.js"),
  Chunk529840 = require("./529840.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk236237 = require("./236237.js"),
  Chunk724531 = require("./724531.js"),
  Chunk99713 = require("./99713.js"),
  Chunk334202 = require("./334202.js"),
  Chunk7234 = require("./7234.js");

function I(e) {
  let {
    numOfSelectedUsers: t,
    anySelected: s
  } = e, n = (0, b.Z)({
    numNewSelected: t,
    anySelected: s
  });
  return <r.Fragment>{<div className={y.title}>{<O className={y.titleImage} />}{<h.X6q variant={"heading-xl/bold"}>{Z.intl.string(Z.t.Lm2nFR)}</h.X6q>}</div>}{<h.Text className={y.description} variant={"text-md/medium"} color={"header-secondary"}>{n}</h.Text>}</r.Fragment>
}

function k() {
  return <Chunk255367.Fragment>{<div className={Chunk236237.title}><Chunk481060.X6q variant={"heading-xl/bold"}>{Chunk388032.intl.string(Chunk388032.t["PFp+aG"])}</Chunk481060.X6q></div>}{<Chunk481060.Text className={Chunk236237.description} variant={"text-md/medium"} color={"header-secondary"}>{Chunk388032.intl.string(Chunk388032.t.eBIGBw)}</Chunk481060.Text>}</Chunk255367.Fragment>
}

function q() {
  return <div className={Chunk236237.erroredContent}><Chunk481060.Eep src={Chunk334202} width={225} height={160} /></div>
}

function F(e) {
  let {
    onClose: t
  } = e;
  return <div className={y.erroredContainer}>{<div className={i()(y.erroredHeader, y.headerSeparator)}>{<div className={y.title}><h.X6q variant={"heading-xl/bold"}>{Z.intl.string(Z.t.a9HOKi)}</h.X6q></div>}{<h.Text className={y.description} variant={"text-md/medium"} color={"header-secondary"}>{Z.intl.string(Z.t.JjjeZW)}</h.Text>}</div>}{<div className={y.erroredContent}><h.Eep src={R} width={178} height={190} /></div>}{<div className={i()(y.footer, y.footerSeparator)}><u.zx className={y.submit} onClick={() => t()}>{Z.intl.string(Z.t.wpSqAQ)}</u.zx></div>}</div>
}

function M(e) {
  let {
    onShare: t
  } = e, s = (0, o.e7)([N.Z], () => N.Z.getRecipientStatus()), [a, l] = n.useState([]), [c, d] = n.useState(new Set), [f, x] = n.useState(false);
  return n.useEffect(() => {
    (async () => {
      let e = [];
      for (let [t, r] of s)
        if (r === v.Fe.PENDING) {
          let s = await (0, m.PR)(t);
          e.push(s)
        } l(e)
    })()
  }, [s]), <div className={y.remindContainer}>{<div className={i()(y.remindHeader, y.headerSeparator)}>{<div className={y.title}>{<O className={y.titleImage} />}{<h.X6q variant={"heading-xl/bold"}>{Z.intl.string(Z.t.SY9tyM)}</h.X6q>}</div>}{<h.Text className={y.description} variant={"text-md/medium"} color={"header-secondary"}>{Z.intl.string(Z.t.mPmPrq)}</h.Text>}</div>}{<div className={y.list}>{a.map(e => (0, r.jsx)(w.Z, {
        user: e,
        checked: c.has(e),
        onChange: (e, t) => {
          d(s => {
            let r = new Set(s);
            return t ? r.add(e) : r.delete(e), r
          })
        }
      }, e.id))}</div>}{<div className={i()(y.footer, y.footerSeparator)}><u.zx className={y.submit} disabled={f} onClick={async () => {
          x(true), await t([...c.values()]), x(false)
        }}>{Z.intl.string(Z.t.ItpQxs)}</u.zx></div>}</div>
}

function O(e) {
  let {
    className: t
  } = e;
  return "light" === (0, o.e7)([j.Z], () => j.Z.theme) ? <h.Eep className={t} src={P} width={55} height={38} /> : <h.Eep className={t} src={C} width={55} height={38} />
}
let T = function(e) {
  let {
    onClose: t,
    onShare: s
  } = e, a = (0, o.e7)([N.Z], () => N.Z.getReferralsRemaining()), [l, m] = n.useState(""), j = (0, x.Z)(l, 400), [v, b] = n.useState(new Map), [P, R] = n.useState(false), {
    eligibleUsers: E,
    fetchUsers: C,
    hasError: O,
    isFetching: T,
    resendUsers: z
  } = (0, S.q)({
    searchQuery: j,
    selectedUsers: v
  }), G = n.useMemo(() => [...v.keys()].filter(e => !z.has(e)), [v, z]);
  c()(null != a, "Referrals remaining should not be null");
  let Q = (0, g.O)(e => {
    e && !T && C()
  });
  if (O) return <F onClose={t} />;
  if (0 === a) return <M onShare={s} />;
  let D = j.length > 0 && 0 === E.length;
  return <div>{<div className={i()(y.header, y.headerSeparator)}>{D ? <k /> : <I numOfSelectedUsers={G.length} anySelected={v.size > 0} />}{<f.Z className={y.searchbar} size={f.Z.Sizes.MEDIUM} tags={[...v.values()].map(e => p.ZP.getName(e))} placeholder={Z.intl.string(Z.t.Kd5RaG)} query={l} onRemoveTag={e => {
          b(t => {
            let s = [...t.values()][e],
              r = new Map(t);
            return r.delete(s.id), r
          })
        }} onQueryChange={m} />}</div>}{D ? <q /> : <d.w0 className={y.list}>{E.map(e => <w.Z disabled={[...v.values()].filter(e => !z.has(e.id)).length >= a && !v.has(e.id) && !z.has(e.id)} checked={v.has(e.id)} user={e} onChange={(e, t) => {
          b(s => {
            let r = new Map(s);
            return t ? r.set(e.id, e) : r.delete(e.id), r
          })
        }} />)}{T && <h.$jN />}{<div ref={Q} />}</d.w0>}{<div className={i()(y.footer, y.footerSeparator)}><u.zx className={y.submit} disabled={0 === v.size && !D || P} onClick={async () => {
          if (D) return void t();
          R(true), await s([...v.values()]), R(false)
        }}>{D ? Z.intl.string(Z.t.wpSqAQ) : Z.intl.string(Z.t.ItpQxs)}</u.zx></div>}</div>
}