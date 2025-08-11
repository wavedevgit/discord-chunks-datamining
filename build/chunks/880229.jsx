/** Chunk was on 31667 **/
/** chunk id: 880229, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ImportBenefitsFromRoleModal: () => q,
  ImportBenefitsFromSubscriptionListingModal: () => L
}), require("./388685.js"), require("./953529.js"), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk211266 = require("./211266.js"),
  Chunk471445 = require("./471445.js"),
  Chunk91218 = require("./91218.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk339085 = require("./339085.js"),
  Chunk518738 = require("./518738.js"),
  Chunk131704 = require("./131704.js"),
  Chunk345162 = require("./345162.js"),
  Chunk324067 = require("./324067.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk817460 = require("./817460.js"),
  Chunk166803 = require("./166803.js"),
  Chunk629262 = require("./629262.js"),
  Chunk686807 = require("./686807.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818771 = require("./818771.js");
let B = (0, Chunk313201.hQ)(),
  E = (0, Chunk313201.hQ)(),
  P = (0, Chunk624138.Mg)(Chunk477690.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function R(e) {
  var t;
  let {
    emojiId: n,
    emojiName: l,
    className: r
  } = e, o = (0, a.e7)([g.ZP], () => null != n ? g.ZP.getCustomEmojiById(n) : true);
  return <h.Z emojiId={n} emojiName={l} animated={null != (t = null == o ? true : o.animated) && t} className={r} />
}

function O(e) {
  let {
    icon: t,
    children: n,
    checked: l,
    disabled: r = false,
    onChange: a
  } = e, s = l || r;
  return <label className={o()(M.row, {
      [M.checked]: s,
      [M.disabled]: r
    })}>{<div className={M.rowIconWrapper}>{t}</div>}{<div className={M.rowText}>{n}</div>}{<div className={M.rowCheckbox}>{<m.tEY><input type={"checkbox"} checked={s} disabled={r} className={M.checkboxInput} onChange={function(e) {
            a(e.target.checked)
          }} /></m.tEY>}{<div className={M.checkboxDisplay}><m.dz2 size={"md"} color={"currentColor"} className={M.checkboxIcon} aria-hidden={true} /></div>}</div>}</label>
}

function D(e) {
  let {
    title: t,
    selectAllText: n,
    benefits: l,
    dupeBenefits: r,
    selectedBenefits: o,
    onToggleBenefit: a
  } = e, s = l.every(e => o.has(e));
  return l.length > 0 ? <m.hjN title={t} className={M.section}>{l.length - r.size > 1 && <div className={M.list}><O icon={(0, i.jsx)(m.avL, {
          size: "md",
          color: "currentColor",
          className: M.rowIcon
        })} checked={s} onChange={function(e) {
          for (let t of l) r.has(t) || a(t, e)
        }}><m.Text color={"header-primary"} variant={"text-md/normal"}>{n}</m.Text></O></div>}{<div className={M.list}>{l.map(e => (0, i.jsxs)(O, {
        icon: (0, i.jsx)(R, {
          emojiId: e.emoji_id,
          emojiName: e.emoji_name,
          className: M.rowIcon
        }),
        checked: o.has(e),
        disabled: r.has(e),
        onChange: t => a(e, t),
        children: [(0, i.jsx)(m.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: (0, Z.Z)(e)
        }), (0, i.jsx)(m.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: e.description
        })]
      }, (0, k.ab)(e)))}</div>}</m.hjN> : null
}

function L(e) {
  let {
    transitionState: t,
    fromSubscriptionListing: n,
    existingChannelBenefits: r,
    existingIntangibleBenefits: o,
    onSubmit: a,
    onClose: d
  } = e, h = n.role_benefits.benefits, [u, x] = l.useState(() => new Set(h)), f = l.useMemo(() => h.filter(k.rC), [h]), j = (0, S.Z)(f), g = l.useMemo(() => h.filter(k.lL), [h]), p = l.useMemo(() => new Set(j.filter(e => r.some(t => t.ref_id === e.ref_id))), [j, r]), _ = l.useMemo(() => new Set(g.filter(e => o.some(t => (0, s.Z)(e, t)))), [o, g]);

  function v(e, t) {
    x(n => {
      let i = new Set(n);
      return t ? i.add(e) : i.delete(e), i
    })
  }

  function b(e) {
    e.preventDefault();
    let t = h.filter(e => u.has(e));
    a(t.filter(k.rC).filter(e => !p.has(e)), t.filter(k.lL).filter(e => !_.has(e))), d()
  }
  return <form onSubmit={b}><c.Modal transitionState={t} onClose={d} title={z.intl.format(z.t["7zpiYG"], {
        tierName: n.name
      }).toString()} actions={[{
        variant: "secondary",
        text: z.intl.string(z.t["ETE/oK"]),
        onClick: d
      }, {
        variant: "primary",
        text: z.intl.string(z.t["27a219"]),
        disabled: 0 === u.size,
        onClick: b
      }]}>{0 === j.length && 0 === g.length && <m.Text variant={"text-md/normal"}>{z.intl.string(z.t["I+16xs"])}</m.Text>}{<D title={z.intl.string(z.t.S2kKzM)} selectAllText={z.intl.string(z.t["5Q/fLC"])} benefits={j} dupeBenefits={p} selectedBenefits={u} onToggleBenefit={v} />}{<D title={z.intl.string(z.t.RdwKw8)} selectAllText={z.intl.string(z.t.aJPLVF)} benefits={g} dupeBenefits={_} selectedBenefits={u} onToggleBenefit={v} />}</c.Modal></form>
}

function F(e) {
  var t;
  let {
    guildId: n,
    role: l,
    channelCount: r,
    onSelect: o
  } = e, a = (0, p.p9)({
    guildId: n,
    roleId: l.id,
    size: P
  });
  return <m.P3F className={M.roleRow} onClick={o}>{<div className={M.rowIconWrapper}>{null != a ? (0, i.jsx)(f.Z, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, a)) : (0, i.jsx)(m.lZ8, {
        size: "custom",
        width: 23,
        height: 23,
        color: null != (t = l.colorString) ? t : T.Pbq,
        className: M.roleRowIconDefault
      })}</div>}{<div className={M.rowText}>{<m.Text color={"header-primary"} variant={"text-md/normal"} className={M.__invalid_benefitTitle}>{l.name}</m.Text>}{<m.Text color={"header-secondary"} variant={"text-sm/normal"}>{z.intl.format(z.t["2KzH8/"], {
          num: r
        })}</m.Text>}</div>}{<div className={M.rowCheckbox}><N.Z direction={N.Z.Directions.RIGHT} /></div>}</m.P3F>
}

function H(e) {
  let {
    guild: t,
    onSelect: n
  } = e, r = (0, a.e7)([C.Z], () => C.Z.getSortedRoles(t.id)), o = (0, a.e7)([b.Z], () => b.Z.getCategories(t.id)), s = l.useMemo(() => o._categories.flatMap(e => o[e.channel.id].filter(e => {
    let {
      channel: t
    } = e;
    return _.zS.has(t.type)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  })), [o]), c = l.useMemo(() => r.flatMap(e => {
    var t;
    if ((0, v.fI)(e) || (null == (t = e.tags) ? true : t.subscription_listing_id) != null || (0, v._N)(e, T.TC2)) return [];
    let n = (0, y.Z)(s, e).length;
    return n > 0 ? {
      role: e,
      channelCount: n
    } : []
  }), [r, s]);
  return c.length > 0 ? <div className={M.list}>{c.map(e => (0, i.jsx)(F, {
      guildId: t.id,
      role: e.role,
      channelCount: e.channelCount,
      onSelect: () => n(e.role)
    }, e.role.id))}</div> : <m.Text variant={"text-md/normal"}>{z.intl.string(z.t.u09gKi)}</m.Text>
}

function K(e) {
  let {
    onClose: t,
    guildId: n,
    onSelect: l
  } = e, r = (0, a.e7)([w.Z], () => w.Z.getGuild(n));
  return null == r ? null : <i.Fragment>{<m.xBx data-migration-pending={true}>{<m.X6q id={B} variant={"heading-md/semibold"}>{z.intl.string(z.t["3JrZ/P"])}</m.X6q>}{<m.olH data-migration-pending={true} className={M.modalCloseButton} onClick={t} />}</m.xBx>}{<m.hzk data-migration-pending={true} className={M.modalContent}><H guild={r} onSelect={l} /></m.hzk>}</i.Fragment>
}

function W(e) {
  let {
    onClose: t,
    guildId: n,
    role: r,
    onCancel: o,
    onImport: a
  } = e, s = l.useRef(r);
  null != r && (s.current = r);
  let c = null != r ? r : s.current,
    d = (0, u.Z)(() => {
      let e = b.Z.getCategories(n);
      return e._categories.flatMap(t => e[t.channel.id].filter(e => {
        let {
          channel: t
        } = e;
        return _.zS.has(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t
      }))
    }),
    h = l.useMemo(() => (0, y.Z)(d, c), [d, c]),
    [f, j] = l.useState(() => new Set(h.map(e => e.id)));

  function g(e, t) {
    j(n => {
      let i = new Set(n);
      return t ? i.add(e) : i.delete(e), i
    })
  }
  return <form onSubmit={function(e) {
      e.preventDefault(), a(h.map(e => e.id).filter(e => f.has(e))), t()
    }} className={M.slideForm}>{<m.xBx data-migration-pending={true}>{<m.X6q id={E} variant={"heading-md/semibold"}>{z.intl.format(z.t.iuPodH, {
          roleName: c.name
        })}</m.X6q>}{<m.olH data-migration-pending={true} className={M.modalCloseButton} onClick={t} />}</m.xBx>}{<m.hzk data-migration-pending={true} className={M.modalContent}>{h.length > 1 && <div className={M.list}><O icon={(0, i.jsx)(m.avL, {
            size: "md",
            color: "currentColor"
          })} checked={f.size === h.length} onChange={function(e) {
            for (let t of h) g(t.id, e)
          }}><m.Text color={"header-primary"} variant={"text-md/normal"}>{z.intl.string(z.t["5Q/fLC"])}</m.Text></O></div>}{<div className={M.list}>{h.map(e => {
          var t;
          let n = null != (t = (0, x.Th)(e.type)) ? t : m.VL1;
          return (0, i.jsx)(O, {
            icon: (0, i.jsx)("div", {
              className: M.rowIcon,
              children: (0, i.jsx)(n, {
                size: "custom",
                color: "currentColor",
                width: "100%",
                height: "100%"
              })
            }),
            checked: f.has(e.id),
            onChange: t => g(e.id, t),
            children: (0, i.jsx)(m.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              className: M.__invalid_benefitTitle,
              children: e.name
            })
          }, e.id)
        })}</div>}</m.hzk>}{<m.mzw data-migration-pending={true}><m.hE2 direction={"horizontal-reverse"}>{<m.zxk variant={"primary"} text={z.intl.string(z.t["1j8So6"])} type={"submit"} />}{<m.zxk variant={"secondary"} text={z.intl.string(z.t["ETE/oK"])} onClick={o} />}</m.hE2></m.mzw>}</form>
}

function q(e) {
  let {
    transitionState: t,
    guildId: n,
    onClose: r,
    onImport: o
  } = e, [a, s] = l.useState();
  return <m.Y0X data-migration-pending={true} transitionState={t} aria-labelledby={null == a ? B : E} parentComponent={"ImportBenefitsModal"}><m.MyZ contentDisplay={"flex"} activeSlide={+(null != a)} width={440}>{<m.Mi4 id={0}><K onClose={r} guildId={n} onSelect={s} /></m.Mi4>}{<m.Mi4 id={1}><W onClose={r} guildId={n} role={a} onCancel={() => s(true)} onImport={o} /></m.Mi4>}</m.MyZ></m.Y0X>
}