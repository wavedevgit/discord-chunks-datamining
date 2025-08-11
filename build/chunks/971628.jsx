/** Chunk was on web.js **/
/** chunk id: 971628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => N,
  Z: () => P
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk631969 = require("./631969.jsx"),
  Chunk605436 = require("./605436.js"),
  Chunk537383 = require("./537383.jsx"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk208838 = require("./208838.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = 40,
  T = 32,
  S = (0, Chunk313201.hQ)(),
  A = (0, Chunk313201.hQ)();

function N(e) {
  return "".concat(e.rowType, ":").concat(e.id)
}

function C(e) {
  return <l.vwX tag={"h5"} className={a()(E.sectionTitle, E.rowHeight)}>{e}</l.vwX>
}

function R(e) {
  let {
    id: t,
    children: n,
    rowLabel: i,
    checked: o,
    onSelect: c,
    disabled: d,
    showCheckbox: f,
    selected: _,
    onMouseEnter: p,
    "aria-posinset": h,
    "aria-setsize": m
  } = e, g = (0, s.JA)(t);
  return <l.P3F{...v(y({}, g), {
    id: t,
    className: a()(E.addMemberRow, {
      [E.selectedRow]: _
    }),
    onClick: e => {
      d || (e.preventDefault(), c())
    },
    onMouseEnter: p,
    role: "option",
    "aria-disabled": d,
    "aria-selected": o,
    "aria-setsize": m,
    "aria-posinset": h,
    children: (0, r.jsxs)(u.Z, {
      justify: u.Z.Justify.BETWEEN,
      align: u.Z.Align.CENTER,
      children: [f ? (0, r.jsx)(l.XZJ, {
        displayOnly: true,
        size: 18,
        value: o,
        type: l.XZJ.Types.INVERTED,
        disabled: d,
        children: (0, r.jsx)("div", {
          className: E.checkboxLabel,
          children: n
        })
      }) : n, null != i ? (0, r.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/normal",
        children: i
      }) : null]
    })
  })} />
}

function P(e) {
  let {
    listClassName: t,
    pendingAdditions: n,
    query: o,
    onQueryChange: s,
    onClickRow: d,
    onRemovePendingAddition: b,
    roles: y = [],
    members: O = [],
    users: v = [],
    guilds: P = [],
    placeholderText: w,
    disabledText: D,
    hintText: L,
    searchTitleText: x,
    renderEmptyText: M,
    focusSearchAfterReady: k,
    isReady: j,
    maxCount: U,
    hideRowLabel: G = false
  } = e, B = i.useRef(null), Z = i.useRef(null), F = [y.length, O.length, v.length, P.length], [V, H] = i.useState(false), [Y, W] = i.useState(0), [K, z] = i.useState(false);
  i.useEffect(() => {
    var e;
    null == (e = B.current) || e.focus()
  }, []);
  let q = i.useCallback(function(e, t) {
      let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
      if (W(e), z(t), n) {
        var r;
        null == (r = Z.current) || r.scrollToIndex({
          section: null != e ? e : 0,
          row: null != t ? t : 0,
          padding: 8
        })
      }
    }, []),
    X = i.useCallback((e, t) => {
      if (null == t) return;
      s("");
      let n = (e === m.m$.ROLES ? y : [])[t];
      n.rowType !== m.aC.EMPTY_STATE && d(n)
    }, [y, d, s]),
    Q = i.useCallback(e => {
      var t;
      null != e && e.rowType !== m.aC.EMPTY_STATE && (d(e), s(""), null == (t = B.current) || t.focus())
    }, [d, s]),
    J = i.useMemo(() => Object.keys(n), [n]);

  function $(e) {
    b(J[e])
  }
  let ee = i.useMemo(() => O.some(e => !e.disabled) || y.some(e => !e.disabled) || v.some(e => !e.disabled) || P.some(e => !e.disabled), [O, y, v, P]) || "" === o.trim();

  function et() {
    var e;
    H(!(null == (e = Z.current) ? true : e.isScrolledToTop()) && ee)
  }
  i.useEffect(() => {
    et()
  });
  let en = e => {
      let t, i, {
          section: o,
          row: s
        } = e,
        u = null,
        d = false,
        _ = false,
        h = false,
        g = null != U && Object.keys(n).length >= U;
      switch (o) {
        case m.m$.ROLES:
          d = (i = N(u = y[s])) in n || u.disabled, _ = u.disabled || !d && g, h = Y === m.m$.ROLES && K === s, t = <div className={E.rowBody}>{<div className={a()(E.rowHeight, E.alignCenter)}><l.lZ8 size={"custom"} color={u.colorString} height={20} /></div>}{<div className={E.rowLabel}>{<l.Text variant={"text-sm/medium"} className={E.__invalid_rowTitle} color={u.rowType === m.aC.EMPTY_STATE ? "text-muted" : "text-default"}>{u.name}</l.Text>}{u.disabled && null != D ? <l.Text color={"header-secondary"} variant={"text-xs/normal"}>{D}</l.Text> : null}</div>}</div>;
          break;
        case m.m$.MEMBERS:
          d = (i = N(u = O[s])) in n || u.disabled, _ = u.disabled || !d && g, h = Y === m.m$.MEMBERS && K === s, t = <div className={E.rowBody}>{<l.qEK src={u.avatarURL} size={l.EFr.SIZE_24} aria-label={""} />}{<l.Text className={E.rowLabel} variant={"text-sm/normal"}>{u.name}</l.Text>}{null != u.nickname ? <l.Text color={"text-muted"} className={E.rowLabelSubText} variant={"text-sm/normal"} aria-hidden={true}>{u.username}</l.Text> : null}{u.bot && <c.Z verified={u.verifiedBot} />}</div>;
          break;
        case m.m$.USERS:
          d = (i = N(u = v[s])) in n || u.disabled, _ = u.disabled || !d && g, h = Y === m.m$.USERS && K === s, t = <div className={E.rowBody}>{<l.qEK src={u.avatarURL} size={l.EFr.SIZE_24} aria-label={""} />}{<div className={E.rowLabel}>{<l.Text variant={"text-sm/normal"}>{u.name}</l.Text>}{u.disabled && null != D ? <l.Text color={"header-secondary"} variant={"text-xs/normal"}>{D}</l.Text> : null}</div>}</div>;
          break;
        case m.m$.GUILDS:
          d = (i = N(u = P[s])) in n || u.disabled, _ = u.disabled || !d && g, h = Y === m.m$.GUILDS && K === s, t = <div className={E.rowBody}>{<f.Z guild={u.guild} active={true} size={f.Z.Sizes.SMALLER} />}{<div className={E.rowLabel}><l.Text variant={"text-sm/medium"} color={"text-default"}>{u.name}</l.Text></div>}</div>
      }
      return null == u ? null : <R id={"user-row-".concat(s)} rowLabel={G ? null : p.zB(u.rowType)} checked={d} disabled={_} onSelect={() => Q(u)} showCheckbox={u.rowType !== m.aC.EMPTY_STATE} onMouseEnter={() => q(o, s, false)} selected={h} aria-posinset={s + 1} aria-setsize={F.reduce((e, t) => e + t, 0)}>{t}</R>
    },
    er = e => {
      let {
        section: t
      } = e;
      switch (t) {
        case m.m$.ROLES:
          return C(g.intl.string(g.t.LPJmLy));
        case m.m$.MEMBERS:
          return C(g.intl.string(g.t["9Oq93t"]));
        case m.m$.USERS:
          return C(g.intl.string(g.t.nqDUBQ));
        case m.m$.GUILDS:
          return C(g.intl.string(g.t["7hB4kp"]))
      }
    };
  return <r.Fragment>{<div className={a()(E.searchBox, {
        [E.scrollSeparator]: V
      })}>{null != x && <l.vwX tag={l.RB0.H5}>{x}</l.vwX>}{<h.Z ref={B} query={o} onQueryChange={s} selectedSection={Y} selectedRow={K} onSelectionChange={q} onSelect={X} tags={J.map(e => n[e].display)} sections={F} onRemoveTag={$} placeholder={w} focusAfterReady={k} isReady={j} aria-labelledby={S} aria-controls={A} />}{null != L ? <l.Text variant={"text-xs/normal"}>{L}</l.Text> : null}</div>}{ee ? <l.aVo ref={Z} className={a()(E.roleMemberList, t)} sections={F} renderRow={en} rowHeight={I} renderSection={er} sectionHeight={T} onScroll={et} role={true} innerRole={"listbox"} innerId={A} innerAriaMultiselectable={true} innerAriaOrientation={"vertical"} /> : <u.Z className={t} align={u.Z.Align.CENTER} justify={u.Z.Justify.CENTER} direction={u.Z.Direction.VERTICAL}>{<_.Z className={E.noResultIcon} />}{<l.Text variant={"text-sm/normal"}>{M(o)}</l.Text>}</u.Z>}</r.Fragment>
}