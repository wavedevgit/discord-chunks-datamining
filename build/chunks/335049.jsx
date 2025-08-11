/** Chunk was on 13616 **/
/** chunk id: 335049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk471445 = require("./471445.js"),
  Chunk91218 = require("./91218.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk555781 = require("./555781.js");

function S(e) {
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
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  let {
    guild: t,
    id: l,
    type: o,
    isLocked: a,
    lockTooltipText: c
  } = e, d = !a || null != c;
  s()(d, "No lockTooltipText provided while isLocked=true");
  let m = r.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => <e{...I(S({}, t), {
        id: l,
        label: C.intl.string(C.t.oJ1Mu7)
      })} />
    })
  }, [l]);
  switch (o) {
    case p.Kw.CHANNEL:
      return <Z guild={t} id={l} isLocked={a} lockTooltipText={c} openEntryContextMenu={m} />;
    case p.Kw.ROLE:
      return <E guild={t} id={l} isLocked={a} lockTooltipText={c} openEntryContextMenu={m} />;
    case p.Kw.USER:
      return <P guild={t} id={l} isLocked={a} lockTooltipText={c} openEntryContextMenu={m} />
  }
}

function Z(e) {
  let {
    guild: t,
    id: n,
    isLocked: l,
    lockTooltipText: a,
    openEntryContextMenu: s
  } = e, u = (0, m.bD)(t.id), {
    icon: p,
    name: g,
    categoryName: f
  } = (0, c.cj)([h.Z], () => {
    if (u === n) return {
      name: C.intl.string(C.t["7YqSGx"]),
      icon: d.VL1
    };
    let e = h.Z.getChannel(n),
      i = (null == e ? true : e.parent_id) != null ? h.Z.getChannel(e.parent_id) : null;
    return {
      icon: null != e ? (0, b.KS)(e, t) : null,
      name: null == e ? true : e.name,
      categoryName: null == i ? true : i.name
    }
  }, [u, t, n]), x = r.useCallback(e => {
    n !== u && s(e)
  }, [u, n, s]);
  return null == p || null == g ? null : <div onContextMenu={x} className={N.identifier}>{<p size={"custom"} width={20} height={20} color={"currentColor"} className={o()(N.channelIcon, N.image)} />}{<d.Text className={N.roleName} color={"header-primary"} variant={"text-md/normal"}>{g}</d.Text>}{null != f ? <d.Text className={N.tag} variant={"text-sm/normal"}>{"("}{f}{")"}</d.Text> : null}{l ? <T tooltipText={a} /> : null}</div>
}

function E(e) {
  var t;
  let {
    guild: l,
    id: a,
    isLocked: s,
    lockTooltipText: p
  } = e, m = (0, c.e7)([j.Z], () => j.Z.getRole(l.id, a)), b = (0, f.p9)({
    guildId: l.id,
    roleId: a,
    size: 24
  }), h = r.useCallback(e => {
    null != l && null != m && (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("14486").then(n.bind(n, 786746));
      return t => <e{...I(S({}, t), {
        guild: l,
        role: m
      })} />
    })
  }, [l, m]);
  return (null == m ? true : m.name) == null ? null : <div onContextMenu={h} className={N.identifier}>{null != b ? <g.Z{...S({
      className: o()(N.__invalid_icon, N.image)
    }, b)} /> : <d.lZ8 size={"custom"} width={23} height={23} className={o()(N.shield, N.image)} color={null != (t = m.colorString) ? t : _.Pbq} />}{<d.Text className={N.roleName} color={"header-primary"} variant={"text-md/normal"}>{m.name}</d.Text>}{s ? <T tooltipText={p} /> : null}</div>
}

function P(e) {
  let {
    guild: t,
    id: n,
    isLocked: r,
    lockTooltipText: l,
    openEntryContextMenu: o
  } = e, a = (0, c.e7)([O.default], () => O.default.getUser(n)), s = (0, c.e7)([x.ZP], () => {
    var e;
    return null == (e = x.ZP.getMember(t.id, n)) ? true : e.nick
  }, [t.id, n]), u = (0, c.e7)([v.Z], () => v.Z.hidePersonalInformation);
  return null == a ? null : <div onContextMenu={o} className={N.identifier}>{<d.qEK className={N.image} src={a.getAvatarURL(t.id, 24)} aria-label={a.username} size={d.EFr.SIZE_24} />}{<d.Text className={N.roleName} color={"header-primary"} variant={"text-md/normal"}>{null != s ? s : a.username}</d.Text>}{u ? null : <d.Text className={N.tag} variant={"text-sm/normal"}>{y.ZP.getUserTag(a)}</d.Text>}{r ? <T tooltipText={l} /> : null}</div>
}

function T(e) {
  let {
    tooltipText: t
  } = e;
  return <d.ua7 text={t}>{e => (0, i.jsx)("div", I(S({
      className: N.lockIcon
    }, e), {
      children: (0, i.jsx)(d.mBM, {
        size: "xs",
        color: "currentColor"
      })
    }))}</d.ua7>
}