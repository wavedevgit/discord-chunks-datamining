/** Chunk was on 73628 **/
/** chunk id: 943516, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  YP: () => p,
  ZP: () => q,
  aN: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk866442 = require("./866442.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk485386 = require("./485386.js"),
  Chunk470209 = require("./470209.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk165639 = require("./165639.js");

function p() {
  return {
    name: "",
    color: Chunk981631.p6O
  }
}

function m(e) {
  let t, {
    onRemove: A,
    role: r
  } = e;
  return t = null != r ? <n.Fragment>{<s.nn4>{f.intl.format(f.t["94dBOT"], {
        color: (0, a.Rf)(r.color)
      })}</s.nn4>}{<div className={g.attachedRoleColor} style={{
        backgroundColor: (0, a.Rf)(r.color)
      }} />}{<s.LZC size={8} horizontal={true} />}{<s.Text variant={"text-md/normal"} color={"text-default"}>{r.name}</s.Text>}{null != A && <n.Fragment>{<s.LZC size={12} horizontal={true} />}{<s.P3F aria-label={f.intl.string(f.t.tO2HIy)} onClick={A} className={g.attachedRoleClose}><s.Dio size={"xs"} color={"currentColor"} className={g.attachedRoleCloseIcon} /></s.P3F>}</n.Fragment>}</n.Fragment> : <s.$jN type={s.$jN.Type.PULSING_ELLIPSIS} />, <div className={g.attachedRoleContainer}>{t}</div>
}

function h() {
  return <Chunk481060.Mgn size={"xs"} color={"currentColor"} className={Chunk165639.warningIcon} />
}

function C(e) {
  let {
    roleName: t
  } = e;
  return <n.Fragment>{<s.Text variant={"text-md/normal"} color={"text-muted"}>{f.intl.format(f.t.i2x5aW, {
        roleName: t,
        emphasisHook: e => (0, n.jsx)(s.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-default",
          children: e
        })
      })}</s.Text>}{<s.X6q className={g.detachWarningHeading} variant={"text-md/medium"} color={"text-default"}>{<s.I9k size={"sm"} color={"currentColor"} />}{<s.LZC horizontal={true} size={8} />}{f.intl.string(f.t.KWx4HR)}</s.X6q>}{<s.Text variant={"text-md/normal"} color={"text-muted"}>{f.intl.string(f.t.hNHNpq)}</s.Text>}{<s.X6q className={g.detachWarningHeading} variant={"text-md/medium"} color={"text-default"}>{<s.XHJ size={"sm"} color={"currentColor"} />}{<s.LZC horizontal={true} size={8} />}{f.intl.string(f.t.WIPKAQ)}</s.X6q>}{<s.Text variant={"text-md/normal"} color={"text-muted"}>{f.intl.string(f.t["40shJS"])}</s.Text>}</n.Fragment>
}

function q(e) {
  let {
    newRoleParams: t,
    setNewRoleParams: r,
    guildId: a,
    productId: u,
    listingRoleId: p,
    error: q
  } = e, b = (0, o.e7)([d.Z], () => null != p ? d.Z.getRole(a, p) : true);
  return null === t ? <s.xJW title={(0, n.jsxs)("div", {
      className: g.warningTitle,
      children: [(0, n.jsx)(h, {}), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 4
      }), f.intl.string(f.t.ovXIrK)]
    })} tag={"label"} error={q} titleClassName={g.roleHeader}>{<s.Text variant={"text-xs/normal"} color={"text-muted"}>{f.intl.string(f.t.H7coX1)}</s.Text>}{<s.LZC size={8} />}{<div className={g.reattachRoleRow}>{<m role={b} onRemove={true} />}{<s.LZC horizontal={true} size={8} />}{<i.zx innerClassName={g.restoreDetachedRoleButtonInner} color={i.zx.Colors.PRIMARY} onClick={() => {
          r(true)
        }}>{<s.Text variant={"text-md/normal"} color={"none"}>{f.intl.string(f.t.KkRpFh)}</s.Text>}{<s.LZC horizontal={true} size={8} />}{<s.UEU size={"xs"} color={"currentColor"} />}</i.zx>}</div>}</s.xJW> : null != p ? <s.xJW title={f.intl.string(f.t.zIg9t7)} tag={"label"} error={q} titleClassName={g.roleHeader}>{<s.Text variant={"text-xs/normal"} color={"text-muted"}>{f.intl.string(f.t.OfuEkJ)}</s.Text>}{<s.LZC size={8} />}{<m role={b} onRemove={() => {
        l()(null != u, "productId cannot be null"), l()(null != b, "no role attached"),
          function(e) {
            let {
              onConfirm: t,
              roleName: r
            } = e;
            (0, s.ZDy)(async () => {
              let {
                default: e
              } = await Promise.resolve().then(A.bind(A, 776045));
              return A => (0, n.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var A = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(A);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable
                  }))), n.forEach(function(t) {
                    var n;
                    n = A[t], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = n
                  })
                }
                return e
              }({
                title: f.intl.string(f.t.Y3Hi3d),
                body: (0, n.jsx)(C, {
                  roleName: r
                }),
                cta: f.intl.string(f.t.VawZV1),
                closeLabel: f.intl.string(f.t["6y+3Bw"]),
                onConfirm: t
              }, A))
            })
          }({
            roleName: b.name,
            onConfirm: () => r(null)
          })
      }} />}</s.xJW> : (l()(null != t, "newRoleParams cannot be null at this point"), <s.xJW required={true} title={f.intl.string(f.t.xZvFpK)} tag={"label"} error={q} titleClassName={g.roleHeader}>{<s.Text variant={"text-xs/normal"} color={"text-muted"}>{f.intl.string(f.t.CllC5u)}</s.Text>}{<s.LZC size={8} />}{<c.Z newRoleParams={t} setNewRoleParams={r} />}</s.xJW>)
}