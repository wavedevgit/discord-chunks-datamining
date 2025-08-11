/** Chunk was on 22988 **/
/** chunk id: 34112, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./781311.js"), require("./539338.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk562075 = require("./562075.js"),
  Chunk539202 = require("./539202.js"),
  Chunk442837 = require("./442837.js"),
  Chunk865672 = require("./865672.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk493544 = require("./493544.js"),
  Chunk134433 = require("./134433.js"),
  Chunk91218 = require("./91218.js"),
  Chunk646892 = require("./646892.js"),
  Chunk741247 = require("./741247.js"),
  Chunk518738 = require("./518738.js"),
  Chunk549631 = require("./549631.js"),
  Chunk402235 = require("./402235.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk480608 = require("./480608.js"),
  Chunk243730 = require("./243730.js"),
  Chunk130341 = require("./130341.js"),
  Chunk970129 = require("./970129.js"),
  Chunk712181 = require("./712181.js"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk521219 = require("./521219.js"),
  Chunk587072 = require("./587072.js");

function Z(e) {
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

function D(e, t) {
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
let A = "DRAGGABLE_ROLE";

function k(e) {
  let {
    setEditRoleId: t,
    guild: n,
    everyoneRole: l,
    otherRoles: a,
    setSelectedSection: s,
    renderHeader: o,
    headerHeight: d,
    query: u
  } = e, m = (0, c.e7)([C.Z], () => C.Z.getRoleMemberCount(n.id), [n.id]), p = (0, c.e7)([_.Z], () => _.Z.getHighestRole(n), [n]), h = u.trim();
  i.useEffect(() => {
    (0, y.E)(n.id)
  }, [n.id]);
  let f = i.useRef(false);
  i.useEffect(() => {
    f.current || "" === u.trimStart() || (O.default.track(T.rMx.SEARCH_STARTED, {
      search_type: "Roles"
    }), f.current = true)
  }, [u]);
  let b = i.useMemo(() => a.filter(e => (0, N.uo)(e, h)), [a, h]),
    x = i.useMemo(() => [...a, l], [a, l]),
    {
      draggingId: j,
      handleDragStart: v,
      handleDragReset: I,
      handleDragComplete: S
    } = (0, E.Z)(x),
    P = i.useCallback(e => {
      var i;
      let {
        row: l
      } = e;
      if (0 === b.length) return <L />;
      let o = b[l];
      return <M role={o} guild={n} highestRole={p} currentPosition={l} memberCount={null != (i = null == m ? true : m[o.id]) ? i : 0} onDragStart={v} onDragReset={I} onDragComplete={S} disableHover={null != j} disableDrag={a.length !== b.length} setEditRoleId={t} setSelectedSection={s} />
    }, [b, n, p, m, v, I, S, j, a, t, s]);
  return <g.Xi sections={[Math.max(b.length, 1)]} sectionHeight={d} renderSection={o} rowHeight={61} renderRow={P} />
}

function L() {
  return <div className={Chunk521219.emptyRoles}>{<div className={Chunk587072.dragSpacing} />}{<Chunk481060.BFJ size={"md"} color={"currentColor"} />}{<Chunk481060.Text className={Chunk521219.emptyRolesText} variant={"text-md/semibold"} color={"text-muted"}>{Chunk388032.intl.string(Chunk388032.t["vR7M+/"])}</Chunk481060.Text>}</div>
}

function M(e) {
  var t, l, c;
  let {
    role: d,
    guild: g,
    highestRole: h,
    currentPosition: x,
    memberCount: v,
    onDragStart: _,
    onDragReset: O,
    onDragComplete: y,
    disableHover: C,
    disableDrag: N,
    setEditRoleId: E,
    setSelectedSection: T
  } = e, k = (0, I.T)(g, h, d), L = null != k, [M, U] = i.useState(false), B = i.useMemo(() => ({
    type: A,
    item: () => (_(d.id), {
      id: d.id,
      position: x
    }),
    canDrag: () => M && !L,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let n = t.getDropResult();
      if (null == n) return void O();
      y(n.roleId)
    }
  }), [d, _, O, y, L, M, x]), [{
    isDragging: F
  }, H] = (0, s.c)(B), z = i.useMemo(() => ({
    accept: A,
    canDrop: () => !L,
    collect: e => {
      let t = e.getItem();
      return null != t && e.isOver() && e.canDrop() ? {
        dragSourcePosition: t.position
      } : {
        dragSourcePosition: null
      }
    },
    drop: () => ({
      roleId: d.id
    })
  }), [L, d]), [{
    dragSourcePosition: W
  }, V] = (0, o.L)(z), Y = i.useCallback(e => {
    (0, m.jW)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 741247));
      return t => <e{...D(Z({}, t), {
        role: d,
        guild: g
      })} />
    })
  }, [g, d]), K = (0, b.e)(g, d);
  if (F) return <div ref={e => {
      H(e)
    }} className={a()(w.roleRow, w.roleRowDragging)} />;

  function q() {
    E(d.id)
  }

  function X() {
    q(), T(S.ZI.MEMBERS)
  }
  return <u.P3F className={a()(w.roleRow, {
      [w.roleRowDisableHover]: C,
      [w.containerDragBefore]: null != W && x < W,
      [w.containerDragAfter]: null != W && x > W
    })} onClick={q} onContextMenu={Y} innerRef={e => {
      H(V(e))
    }} data-dnd-name={d.name} aria-label={P.intl.formatToPlainString(P.t.Vu0AcX, {
      name: d.name,
      count: "".concat(v)
    })}>{<div className={a()(w.dragIcon, R.dragSpacing, {
        [w.dragIconHidden]: L || N
      })} onMouseEnter={() => U(true)} onMouseLeave={() => U(false)}><u.Vni size={"xs"} color={"currentColor"} /></div>}{<div className={a()(w.roleNameContainer, R.roleNameSpacing)}>{(null == (t = d.tags) ? true : t.guild_connections) === null ? <p.Z className={w.roleFlowerStar} color={d.colorString} size={24} /> : <G guildId={g.id} role={d} size={24} className={w.roleIcon} defaultIconClassName={w.shield} />}{null != k ? <I.Z className={w.lock} tooltipText={k} /> : null}{<u.Text className={w.roleName} color={"header-primary"} variant={"text-md/medium"}>{d.name}</u.Text>}{(null == (l = d.tags) ? true : l.subscription_listing_id) != null && <j.Z className={w.subscriptionRoleIcon} aria-label={P.intl.string(P.t.a2Ak8f)} />}{(null == (c = d.tags) ? true : c.is_guild_product_role) === true && <f.Z />}</div>}{<u.ua7 text={P.intl.string(P.t.CW75t7)} aria-label={P.intl.formatToPlainString(P.t.Fgs8fH, {
        count: "".concat(v)
      })} position={"right"}>{e => (0, r.jsxs)(u.P3F, D(Z({}, e), {
        className: a()(w.memberCountContainer, R.memberSpacing),
        onClick: X,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "none",
          children: v
        }), (0, r.jsx)(u.tBG, {
          size: "custom",
          color: "currentColor",
          className: w.person,
          width: 20,
          height: 20
        })]
      }))}</u.ua7>}{<div className={a()(w.buttonsContainer, R.buttonsSpacing)}>{<u.ua7 text={L ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75u7)}>{e => (0, r.jsx)(u.hU, D(Z({}, e), {
          variant: "secondary",
          "aria-label": L ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75u7),
          icon: L ? u.tEF : u.vdY,
          onClick: q
        }))}</u.ua7>}{<u.ua7 text={P.intl.string(P.t.UKOtz8)} shouldShow={K}>{e => (0, r.jsx)(u.hU, D(Z({}, e), {
          variant: "secondary",
          "aria-label": P.intl.string(P.t.UKOtz8),
          icon: u.xhG,
          onClick: Y,
          disabled: !K
        }))}</u.ua7>}</div>}</u.P3F>
}

function G(e) {
  var t, n, i, l;
  let {
    guildId: s,
    role: o,
    size: c,
    enableTooltip: m,
    className: g,
    defaultIconClassName: p
  } = e, {
    hasGradient: f,
    stops: b,
    gradientId: j
  } = (0, d.De)(null == (t = o.colorStrings) ? true : t.primaryColor, null == (n = o.colorStrings) ? true : n.secondaryColor, null == (i = o.colorStrings) ? true : i.tertiaryColor), _ = (0, v.yH)(s, o), O = (0, x.p9)({
    guildId: s,
    roleId: o.id,
    size: c
  });
  if (null != O) return <h.Z{...D(Z({}, O), {
    className: g,
    enableTooltip: m
  })} />;
  let y = null != (l = o.colorString) ? l : T.Pbq;
  return _ && f && (y = "url(#".concat(j, ")")), <r.Fragment>{_ && f && <svg width={"0"} height={"0"} style={{
        position: "absolute"
      }}><linearGradient id={j} x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>{b}</linearGradient></svg>}{<u.lZ8 size={"custom"} className={a()(g, p)} color={y} width={c} height={c} />}</r.Fragment>
}