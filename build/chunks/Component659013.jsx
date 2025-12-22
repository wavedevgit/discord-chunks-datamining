/** Chunk was on 27065 **/
/** chunk id: 659013, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk611004 = require("./611004.jsx"),
  Chunk971212 = require("./971212.jsx"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk53568 = require("./53568.js");

function y(e) {
  let {
    index: t,
    query: l,
    handleQuerySelect: r,
    handleDateSelect: i,
    options: o,
    handleRemoveDateFilter: s
  } = e, u = a()(), h = a()("2015-05-15");
  return (0, n.jsxs)("div", {
    className: m.dateFilter,
    children: [(0, n.jsx)(c.P, {
      label: R.intl.string(R.t.ArxagQ),
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
    }), (0, n.jsx)(d.Wrb, {
      value: l.date,
      onSelect: e => {
        i({
          date: e,
          index: t
        })
      },
      minDate: h,
      maxDate: u
    }), (0, n.jsx)(d.P3F, {
      onClick: () => {
        s(t)
      },
      className: m.removeDateFilterButton,
      "aria-label": R.intl.formatToPlainString(R.t["2LwBlF"], {
        filterNumber: t + 1
      }),
      children: (0, n.jsx)(d.XHJ, {
        size: "md",
        color: "currentColor",
        className: m.trashIcon,
        "aria-hidden": true
      })
    })]
  })
}

function b(e) {
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
    className: m.filterSection,
    children: [(0, n.jsxs)("div", {
      className: m.labelContainer,
      children: [(0, n.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: R.intl.string(R.t.oesnwm)
      }), (0, n.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: R.intl.string(R.t.A2DY6J)
      })]
    }), l.map((e, l) => (0, n.jsx)(y, {
      options: t,
      index: l,
      query: e,
      handleQuerySelect: r,
      handleDateSelect: i,
      handleRemoveDateFilter: o
    }, e.id)), u && (0, n.jsx)(d.Button, {
      variant: "secondary",
      fullWidth: true,
      text: R.intl.string(R.t.iP9YpB),
      icon: d.BRu,
      onClick: () => {
        s() && a()
      }
    })]
  })
}

function L(e) {
  let {
    label: t,
    sublabel: l,
    textPlaceholder: i,
    value: a,
    onChange: o,
    options: s,
    filter: c,
    closeOnSelect: d,
    onFocus: h,
    onSearchChange: g,
    filterType: F,
    validateFilter: x,
    onBlur: p
  } = e, C = r.useMemo(() => c ? e => e : true, [c]);
  return (0, n.jsx)("div", {
    className: m.filterSection,
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
      closeOnSelect: d,
      customMatchSorter: C,
      onBlur: p,
      wrapTags: true
    })
  })
}

function v(e) {
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
    className: m.filterSection,
    children: (0, n.jsx)(c.P, {
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

function _(e) {
  let {
    transitionState: t,
    onClose: l,
    searchContext: i
  } = e, a = (0, h.Dt)(), u = (0, s.e7)([g.Z, F.Z], () => {
    let e = g.Z.getChannel(F.Z.getChannelId());
    return null != e ? (0, C.nl)(e) : "general"
  }), c = (0, s.e7)([x.default], () => {
    let e = x.default.getCurrentUser();
    return null != e ? e.username : R.intl.string(R.t.cqpybK)
  }), [y, _] = r.useState(E.Z.getSearchInputText(i)), N = r.useMemo(() => (0, C.kG)(null != y ? y : ""), [y]), {
    prefilledSearchFilters: O,
    eligibleFilterTokens: j
  } = (0, S.p4)(N, i), M = j.has(I.dCx.FILTER_FROM), A = j.has(I.dCx.FILTER_MENTIONS), P = j.has(I.dCx.FILTER_IN), Q = j.has(I.dCx.FILTER_AUTHOR_TYPE), k = r.useMemo(() => (0, C.nI)(N), [N]), D = (0, T.g_)({
    location: "SearchFiltersModal"
  }), {
    options: H,
    query: B,
    setQuery: q,
    setQueryString: Y,
    handleClearFilter: w,
    getApplyQueryString: U,
    handleFocusFilter: J,
    handleBlurFilter: W
  } = (0, S.HJ)(i, I.dCx.FILTER_FROM, O[I.dCx.FILTER_FROM]), {
    options: Z,
    query: z,
    setQuery: X,
    setQueryString: K,
    handleClearFilter: V,
    getApplyQueryString: G,
    handleFocusFilter: $,
    handleBlurFilter: ee
  } = (0, S.HJ)(i, I.dCx.FILTER_MENTIONS, O[I.dCx.FILTER_MENTIONS]), {
    options: et,
    query: el,
    setQuery: en,
    handleClearFilter: er,
    getApplyQueryString: ei,
    handleFocusFilter: ea
  } = (0, S.Z2)(i, O[I.dCx.FILTER_HAS], D), {
    options: eo,
    query: es,
    setQuery: eu,
    setQueryString: ec,
    handleClearFilter: ed,
    getApplyQueryString: eh,
    handleFocusFilter: eg,
    handleBlurFilter: eF
  } = (0, S.ur)(i, O[I.dCx.FILTER_IN]), {
    options: ex,
    dates: ep,
    validDates: eC,
    handleDateQueryChange: eT,
    handleDateChange: eE,
    handleAddDateFilter: eS,
    handleRemoveDateFilter: ef,
    handleClearDateFilter: eI,
    getDateQueryString: eR
  } = (0, S.fI)(O.dateFilters), {
    options: em,
    query: ey,
    setQuery: eb,
    handleClearFilter: eL,
    getApplyQueryString: ev,
    handleFocusFilter: e_
  } = (0, S.fJ)(i, O[I.dCx.FILTER_AUTHOR_TYPE], D), {
    options: eN,
    query: eO,
    setQuery: ej,
    handleClearFilter: eM,
    getApplyQueryString: eA
  } = (0, S.zL)(i, O[I.dCx.FILTER_PINNED]), eP = r.useMemo(() => {
    let e = 0;
    return M && B.length > 0 && (e += B.length), A && z.length > 0 && (e += z.length), P && es.length > 0 && (e += es.length), el.length > 0 && (e += el.length), eC.length > 0 && (e += eC.length), Q && ey.length > 0 && (e += ey.length), null !== eO && (e += 1), e
  }, [M, B, A, z, P, es, el, eC, Q, ey, eO]), eQ = r.useMemo(() => {
    let e = ei(I.dCx.FILTER_HAS),
      t = eR(),
      l = eA(I.dCx.FILTER_PINNED),
      n = [];
    if (M) {
      let e = U(I.dCx.FILTER_FROM);
      null != e && n.push(e)
    }
    if (A) {
      let e = G(I.dCx.FILTER_MENTIONS);
      null != e && n.push(e)
    }
    if (P) {
      let e = eh(I.dCx.FILTER_IN);
      null != e && n.push(e)
    }
    if (null != e && n.push(e), null != t && n.push(t), Q) {
      let e = ev(I.dCx.FILTER_AUTHOR_TYPE);
      null != e && n.push(e)
    }
    return null != l && n.push(l), [...n].join(" ")
  }, [M, U, A, G, P, eh, ei, eR, Q, ev, eA]), {
    validateFilter: ek,
    validateDateFilter: eD
  } = (0, S.YL)({
    nonFilterQueryString: k,
    filterQueryString: eQ
  }), eH = r.useMemo(() => !((!M || (0, S.Ek)(B, O[I.dCx.FILTER_FROM])) && (!A || (0, S.Ek)(z, O[I.dCx.FILTER_MENTIONS])) && (!P || (0, S.Ek)(es, O[I.dCx.FILTER_IN])) && (0, S.Ek)(el, O[I.dCx.FILTER_HAS]) && (0, S.LE)(eC, O.dateFilters) && (!Q || (0, S.Ek)(ey, O[I.dCx.FILTER_AUTHOR_TYPE])) && (0, S.Ek)(eO, O[I.dCx.FILTER_PINNED])), [M, B, O, A, z, P, es, el, eC, Q, ey, eO]), eB = r.useCallback(() => {
    if (0 === eQ.length && 0 === k.trim().length) {
      p.S.dispatch(I.CkL.SEARCH_RESULTS_CLOSE), l();
      return
    }
    let e = "".concat(eQ, " ").concat(k).trim();
    E.Z.dispatchSetSearchQuery({
      query: e,
      anchor: 0,
      focus: 0,
      performSearch: true,
      replace: true,
      searchQuerySource: f.w7.SEARCH_FILTERS_MODAL
    }), l()
  }, [eQ, k, l]), eq = r.useMemo(() => {
    if (0 === eP) return R.intl.string(R.t.YfwFu1);
    let e = "(".concat(eP, ")");
    return "".concat(R.intl.string(R.t.YfwFu1), " ").concat(e)
  }, [eP]), eY = r.useCallback(() => {
    M && w(), A && V(), P && ed(), Q && eL(), er(), eI(), eM()
  }, [M, A, er, P, eI, w, V, ed, Q, eL, eM]), ew = A && (0, n.jsx)(L, {
    label: R.intl.string(R.t.HEBnRU),
    sublabel: R.intl.string(R.t.PdfTqT),
    textPlaceholder: R.intl.formatToPlainString(R.t.zka3aJ, {
      username: c
    }),
    value: z,
    onChange: X,
    onFocus: $,
    onSearchChange: K,
    options: Z,
    filter: true,
    filterType: I.dCx.FILTER_MENTIONS,
    validateFilter: ek,
    closeOnSelect: false,
    onBlur: ee
  }), eU = (0, n.jsx)(L, {
    label: R.intl.string(R.t["892qg1"]),
    sublabel: R.intl.string(R.t["Oa//IE"]),
    textPlaceholder: R.intl.string(R.t.tROvHH),
    value: el,
    onChange: en,
    onFocus: ea,
    options: et,
    filter: false,
    closeOnSelect: false,
    filterType: I.dCx.FILTER_HAS,
    validateFilter: ek
  });
  return (0, n.jsx)(o.Modal, {
    transitionState: t,
    onClose: l,
    "aria-labelledby": a,
    title: R.intl.string(R.t["F8a0W/"]),
    actions: [{
      variant: "secondary",
      text: R.intl.string(R.t["ETE/oC"]),
      onClick: l
    }, {
      variant: "primary",
      text: R.intl.string(R.t.qDzapn),
      onClick: eB,
      disabled: !eH
    }],
    actionBarInput: (0, n.jsx)(d.Avr, {
      variant: "primary",
      text: eq,
      onClick: eY,
      disabled: 0 === eP
    }),
    children: (0, n.jsxs)("div", {
      className: m.container,
      children: [M && (0, n.jsx)(L, {
        label: R.intl.string(R.t.Qz6eOR),
        sublabel: R.intl.string(R.t["2JyXnO"]),
        textPlaceholder: R.intl.formatToPlainString(R.t["V4WMj/"], {
          username: c
        }),
        value: B,
        onChange: q,
        onFocus: J,
        onSearchChange: Y,
        options: H,
        filter: true,
        filterType: I.dCx.FILTER_FROM,
        validateFilter: ek,
        closeOnSelect: false,
        onBlur: W
      }), P && (0, n.jsx)(L, {
        label: R.intl.string(R.t["kLrM/s"]),
        sublabel: i.type === I.aib.DMS ? R.intl.string(R.t["b+abYv"]) : R.intl.string(R.t.x8cC0z),
        textPlaceholder: R.intl.formatToPlainString(R.t.K4l507, {
          channelName: u
        }),
        value: es,
        onChange: eu,
        onFocus: eg,
        onSearchChange: ec,
        options: eo,
        filter: true,
        closeOnSelect: false,
        filterType: I.dCx.FILTER_IN,
        validateFilter: ek,
        onBlur: eF
      }), D ? eU : ew, D ? ew : eU, (0, n.jsx)(b, {
        options: ex,
        dates: ep,
        handleDateQueryChange: eT,
        handleDateChange: eE,
        handleAddDateFilter: eS,
        handleRemoveDateFilter: ef,
        validateDateFilter: eD
      }), Q && (0, n.jsx)(L, {
        label: R.intl.string(R.t.Xgc1av),
        sublabel: R.intl.string(R.t.XaOAdt),
        textPlaceholder: R.intl.string(R.t.CAdOdf),
        value: ey,
        onChange: eb,
        onFocus: e_,
        options: em,
        filter: false,
        closeOnSelect: false,
        filterType: I.dCx.FILTER_AUTHOR_TYPE,
        validateFilter: ek
      }), (0, n.jsx)(v, {
        label: R.intl.string(R.t["6LYPWS"]),
        sublabel: R.intl.string(R.t.L8jjfu),
        textPlaceholder: R.intl.string(R.t.AQpFbX),
        value: eO,
        onChange: ej,
        options: eN,
        filterType: I.dCx.FILTER_PINNED,
        validateFilter: ek
      })]
    })
  })
}