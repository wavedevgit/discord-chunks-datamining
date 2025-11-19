/** Chunk was on 37979 **/
/** chunk id: 238088, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js"), require("./539854.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk333200 = require("./333200.jsx"),
  Chunk673221 = require("./673221.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk607802 = require("./607802.js"),
  Chunk28964 = require("./28964.js"),
  Chunk465524 = require("./465524.jsx"),
  Chunk611004 = require("./611004.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk540432 = require("./540432.js");

function R(e) {
  let {
    index: t,
    query: l,
    handleQuerySelect: r,
    handleDateSelect: i,
    options: o,
    handleRemoveDateFilter: s
  } = e, u = a()(), h = a()("2015-05-15");
  return (0, n.jsxs)("div", {
    className: _.dateFilter,
    children: [(0, n.jsx)(d.P, {
      label: f.intl.string(f.t.ArxagQ),
      hideLabel: true,
      selectionMode: "single",
      formatOption: e => {
        let {
          key: t,
          value: l,
          label: n,
          leading: r,
          trailing: i
        } = e;
        return {
          id: null != t ? t : l,
          value: l,
          label: n,
          leading: r,
          trailing: i
        }
      },
      options: o,
      onSelectionChange: e => {
        null != e && r({
          query: e,
          index: t
        })
      },
      value: l.query,
      fullWidth: true
    }), (0, n.jsx)(c.Wrb, {
      value: l.date,
      onSelect: e => {
        i({
          date: e,
          index: t
        })
      },
      minDate: h,
      maxDate: u
    }), (0, n.jsx)(c.P3F, {
      onClick: () => {
        s(t)
      },
      className: _.removeDateFilterButton,
      "aria-label": f.intl.formatToPlainString(f.t["2LwBlF"], {
        filterNumber: t + 1
      }),
      children: (0, n.jsx)(c.XHJ, {
        size: "md",
        color: "currentColor",
        className: _.trashIcon,
        "aria-hidden": true
      })
    })]
  })
}

function m(e) {
  let {
    options: t,
    dates: l,
    handleDateQueryChange: r,
    handleDateChange: i,
    handleAddDateFilter: a,
    handleRemoveDateFilter: o,
    validateDateFilter: s
  } = e, u = l.length < 4;
  return (0, n.jsxs)("div", {
    className: _.filterSection,
    children: [(0, n.jsxs)("div", {
      className: _.labelContainer,
      children: [(0, n.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        children: f.intl.string(f.t.oesnwm)
      }), (0, n.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: f.intl.string(f.t.A2DY6J)
      })]
    }), l.map((e, l) => (0, n.jsx)(R, {
      options: t,
      index: l,
      query: e,
      handleQuerySelect: r,
      handleDateSelect: i,
      handleRemoveDateFilter: o
    }, e.id)), u && (0, n.jsx)(c.Button, {
      variant: "secondary",
      fullWidth: true,
      text: f.intl.string(f.t.iP9YpB),
      icon: c.BRu,
      onClick: () => {
        s() && a()
      }
    })]
  })
}

function y(e) {
  let {
    label: t,
    sublabel: l,
    textPlaceholder: i,
    value: a,
    onChange: o,
    options: s,
    filter: d,
    closeOnSelect: c,
    onFocus: h,
    onSearchChange: g,
    filterType: F,
    validateFilter: x,
    onBlur: C
  } = e, p = r.useMemo(() => d ? e => e : true, [d]);
  return (0, n.jsx)("div", {
    className: _.filterSection,
    children: (0, n.jsx)(u.V, {
      label: t,
      description: l,
      selectionMode: "multiple",
      formatOption: e => {
        let {
          key: t,
          value: l,
          label: n,
          leading: r,
          trailing: i
        } = e;
        return {
          id: null != t ? t : l,
          value: l,
          label: n,
          leading: r,
          trailing: i
        }
      },
      options: s,
      placeholder: i,
      value: a,
      onSelectionChange: e => {
        (!(e.length > a.length) || x(F, e[e.length - 1])) && o(e)
      },
      onFocus: h,
      onQueryChange: e => null == g ? true : g(e.target.value),
      closeOnSelect: c,
      customMatchSorter: p,
      onBlur: C
    })
  })
}

function L(e) {
  let {
    label: t,
    sublabel: l,
    textPlaceholder: r,
    value: i,
    onChange: a,
    options: o,
    filterType: s,
    validateFilter: u
  } = e;
  return (0, n.jsx)("div", {
    className: _.filterSection,
    children: (0, n.jsx)(d.P, {
      label: t,
      description: l,
      selectionMode: "single",
      formatOption: e => {
        let {
          key: t,
          value: l,
          label: n,
          leading: r,
          trailing: i
        } = e;
        return {
          id: null != t ? t : l,
          value: l,
          label: n,
          leading: r,
          trailing: i
        }
      },
      placeholder: r,
      options: o,
      onSelectionChange: e => {
        (null == e || u(s, e)) && a(e)
      },
      value: i,
      clearable: null != i,
      fullWidth: true
    })
  })
}

function v(e) {
  let {
    transitionState: t,
    onClose: l,
    searchContext: i
  } = e, a = (0, h.Dt)(), u = (0, s.e7)([g.Z, F.Z], () => {
    let e = g.Z.getChannel(F.Z.getChannelId());
    return null != e ? (0, p.nl)(e) : "general"
  }), d = (0, s.e7)([x.default], () => {
    let e = x.default.getCurrentUser();
    return null != e ? e.username : f.intl.string(f.t.cqpybK)
  }), [_, R] = r.useState(S.Z.getSearchInputText(i)), v = r.useMemo(() => (0, p.kG)(null != _ ? _ : ""), [_]), {
    prefilledSearchFilters: b,
    eligibleFilterTokens: N
  } = (0, E.p4)(v, i), O = N.has(I.dCx.FILTER_FROM), j = N.has(I.dCx.FILTER_MENTIONS), M = N.has(I.dCx.FILTER_IN), P = N.has(I.dCx.FILTER_AUTHOR_TYPE), A = r.useMemo(() => (0, p.nI)(v), [v]), k = (0, T.g_)({
    location: "SearchFiltersModal"
  }), {
    options: Q,
    query: D,
    setQuery: H,
    setQueryString: B,
    handleClearFilter: q,
    getApplyQueryString: Y,
    handleFocusFilter: U,
    handleBlurFilter: J
  } = (0, E.HJ)(i, I.dCx.FILTER_FROM, b[I.dCx.FILTER_FROM]), {
    options: W,
    query: w,
    setQuery: z,
    setQueryString: Z,
    handleClearFilter: X,
    getApplyQueryString: K,
    handleFocusFilter: V,
    handleBlurFilter: G
  } = (0, E.HJ)(i, I.dCx.FILTER_MENTIONS, b[I.dCx.FILTER_MENTIONS]), {
    options: $,
    query: ee,
    setQuery: et,
    handleClearFilter: el,
    getApplyQueryString: en,
    handleFocusFilter: er
  } = (0, E.Z2)(i, b[I.dCx.FILTER_HAS], k), {
    options: ei,
    query: ea,
    setQuery: eo,
    setQueryString: es,
    handleClearFilter: eu,
    getApplyQueryString: ed,
    handleFocusFilter: ec,
    handleBlurFilter: eh
  } = (0, E.ur)(i, b[I.dCx.FILTER_IN]), {
    options: eg,
    dates: eF,
    validDates: ex,
    handleDateQueryChange: eC,
    handleDateChange: ep,
    handleAddDateFilter: eT,
    handleRemoveDateFilter: eE,
    handleClearDateFilter: eS,
    getDateQueryString: eI
  } = (0, E.fI)(b.dateFilters), {
    options: ef,
    query: e_,
    setQuery: eR,
    handleClearFilter: em,
    getApplyQueryString: ey,
    handleFocusFilter: eL
  } = (0, E.fJ)(i, b[I.dCx.FILTER_AUTHOR_TYPE], k), {
    options: ev,
    query: eb,
    setQuery: eN,
    handleClearFilter: eO,
    getApplyQueryString: ej
  } = (0, E.zL)(i, b[I.dCx.FILTER_PINNED]), eM = r.useMemo(() => {
    let e = 0;
    return O && D.length > 0 && (e += D.length), j && w.length > 0 && (e += w.length), M && ea.length > 0 && (e += ea.length), ee.length > 0 && (e += ee.length), ex.length > 0 && (e += ex.length), P && e_.length > 0 && (e += e_.length), null !== eb && (e += 1), e
  }, [O, D, j, w, M, ea, ee, ex, P, e_, eb]), eP = r.useMemo(() => {
    let e = en(I.dCx.FILTER_HAS),
      t = eI(),
      l = ej(I.dCx.FILTER_PINNED),
      n = [];
    if (O) {
      let e = Y(I.dCx.FILTER_FROM);
      null != e && n.push(e)
    }
    if (j) {
      let e = K(I.dCx.FILTER_MENTIONS);
      null != e && n.push(e)
    }
    if (M) {
      let e = ed(I.dCx.FILTER_IN);
      null != e && n.push(e)
    }
    if (null != e && n.push(e), null != t && n.push(t), P) {
      let e = ey(I.dCx.FILTER_AUTHOR_TYPE);
      null != e && n.push(e)
    }
    return null != l && n.push(l), [...n].join(" ")
  }, [O, Y, j, K, M, ed, en, eI, P, ey, ej]), {
    validateFilter: eA,
    validateDateFilter: ek
  } = (0, E.YL)({
    nonFilterQueryString: A,
    filterQueryString: eP
  }), eQ = r.useMemo(() => !((!O || (0, E.Ek)(D, b[I.dCx.FILTER_FROM])) && (!j || (0, E.Ek)(w, b[I.dCx.FILTER_MENTIONS])) && (!M || (0, E.Ek)(ea, b[I.dCx.FILTER_IN])) && (0, E.Ek)(ee, b[I.dCx.FILTER_HAS]) && (0, E.LE)(ex, b.dateFilters) && (!P || (0, E.Ek)(e_, b[I.dCx.FILTER_AUTHOR_TYPE])) && (0, E.Ek)(eb, b[I.dCx.FILTER_PINNED])), [O, D, b, j, w, M, ea, ee, ex, P, e_, eb]), eD = r.useCallback(() => {
    if (0 === eP.length && 0 === A.trim().length) {
      C.S.dispatch(I.CkL.SEARCH_RESULTS_CLOSE), l();
      return
    }
    let e = "".concat(eP, " ").concat(A).trim();
    C.S.dispatch(I.CkL.SET_SEARCH_QUERY, {
      query: e,
      anchor: 0,
      focus: 0,
      performSearch: true,
      replace: true
    }), l()
  }, [eP, A, l]), eH = r.useMemo(() => {
    if (0 === eM) return f.intl.string(f.t.YfwFu1);
    let e = "(".concat(eM, ")");
    return "".concat(f.intl.string(f.t.YfwFu1), " ").concat(e)
  }, [eM]), eB = r.useCallback(() => {
    O && q(), j && X(), M && eu(), P && em(), el(), eS(), eO()
  }, [O, j, el, M, eS, q, X, eu, P, em, eO]), eq = j && (0, n.jsx)(y, {
    label: f.intl.string(f.t.HEBnRU),
    sublabel: f.intl.string(f.t.PdfTqT),
    textPlaceholder: f.intl.formatToPlainString(f.t.zka3aJ, {
      username: d
    }),
    value: w,
    onChange: z,
    onFocus: V,
    onSearchChange: Z,
    options: W,
    filter: true,
    filterType: I.dCx.FILTER_MENTIONS,
    validateFilter: eA,
    closeOnSelect: false,
    onBlur: G
  }), eY = (0, n.jsx)(y, {
    label: f.intl.string(f.t["892qg1"]),
    sublabel: f.intl.string(f.t["Oa//IE"]),
    textPlaceholder: f.intl.string(f.t.tROvHH),
    value: ee,
    onChange: et,
    onFocus: er,
    options: $,
    filter: false,
    closeOnSelect: false,
    filterType: I.dCx.FILTER_HAS,
    validateFilter: eA
  });
  return (0, n.jsxs)(o.Modal, {
    transitionState: t,
    onClose: l,
    "aria-labelledby": a,
    title: f.intl.string(f.t["F8a0W/"]),
    actions: [{
      variant: "secondary",
      text: f.intl.string(f.t["ETE/oC"]),
      onClick: l
    }, {
      variant: "primary",
      text: f.intl.string(f.t.qDzapn),
      onClick: eD,
      disabled: !eQ
    }],
    actionBarInput: (0, n.jsx)(c.Avr, {
      variant: "primary",
      text: eH,
      onClick: eB,
      disabled: 0 === eM
    }),
    children: [O && (0, n.jsx)(y, {
      label: f.intl.string(f.t.Qz6eOR),
      sublabel: f.intl.string(f.t["2JyXnO"]),
      textPlaceholder: f.intl.formatToPlainString(f.t["V4WMj/"], {
        username: d
      }),
      value: D,
      onChange: H,
      onFocus: U,
      onSearchChange: B,
      options: Q,
      filter: true,
      filterType: I.dCx.FILTER_FROM,
      validateFilter: eA,
      closeOnSelect: false,
      onBlur: J
    }), M && (0, n.jsx)(y, {
      label: f.intl.string(f.t["kLrM/s"]),
      sublabel: f.intl.string(f.t.x8cC0z),
      textPlaceholder: f.intl.formatToPlainString(f.t.K4l507, {
        channelName: u
      }),
      value: ea,
      onChange: eo,
      onFocus: ec,
      onSearchChange: es,
      options: ei,
      filter: true,
      closeOnSelect: false,
      filterType: I.dCx.FILTER_IN,
      validateFilter: eA,
      onBlur: eh
    }), k ? eY : eq, k ? eq : eY, (0, n.jsx)(m, {
      options: eg,
      dates: eF,
      handleDateQueryChange: eC,
      handleDateChange: ep,
      handleAddDateFilter: eT,
      handleRemoveDateFilter: eE,
      validateDateFilter: ek
    }), P && (0, n.jsx)(y, {
      label: f.intl.string(f.t.Xgc1av),
      sublabel: f.intl.string(f.t.XaOAdt),
      textPlaceholder: f.intl.string(f.t.CAdOdf),
      value: e_,
      onChange: eR,
      onFocus: eL,
      options: ef,
      filter: false,
      closeOnSelect: false,
      filterType: I.dCx.FILTER_AUTHOR_TYPE,
      validateFilter: eA
    }), (0, n.jsx)(L, {
      label: f.intl.string(f.t["6LYPWS"]),
      sublabel: f.intl.string(f.t.L8jjfu),
      textPlaceholder: f.intl.string(f.t.AQpFbX),
      value: eb,
      onChange: eN,
      options: ev,
      filterType: I.dCx.FILTER_PINNED,
      validateFilter: eA
    })]
  })
}