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
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk540432 = require("./540432.js");

function m(e) {
  let {
    index: t,
    query: l,
    handleQuerySelect: r,
    handleDateSelect: i,
    options: o,
    handleRemoveDateFilter: s
  } = e, u = a()(), h = a()("2015-05-15");
  return (0, n.jsxs)("div", {
    className: R.dateFilter,
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
      className: R.removeDateFilterButton,
      "aria-label": f.intl.formatToPlainString(f.t["2LwBlF"], {
        filterNumber: t + 1
      }),
      children: (0, n.jsx)(c.XHJ, {
        size: "md",
        color: "currentColor",
        className: R.trashIcon,
        "aria-hidden": true
      })
    })]
  })
}

function y(e) {
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
    className: R.filterSection,
    children: [(0, n.jsxs)("div", {
      className: R.labelContainer,
      children: [(0, n.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: f.intl.string(f.t.oesnwm)
      }), (0, n.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: f.intl.string(f.t.A2DY6J)
      })]
    }), l.map((e, l) => (0, n.jsx)(m, {
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

function b(e) {
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
    onBlur: p
  } = e, C = r.useMemo(() => d ? e => e : true, [d]);
  return (0, n.jsx)("div", {
    className: R.filterSection,
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
      customMatchSorter: C,
      onBlur: p,
      wrapTags: true
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
    className: R.filterSection,
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
    return null != e ? (0, C.nl)(e) : "general"
  }), d = (0, s.e7)([x.default], () => {
    let e = x.default.getCurrentUser();
    return null != e ? e.username : f.intl.string(f.t.cqpybK)
  }), [m, v] = r.useState(S.Z.getSearchInputText(i)), N = r.useMemo(() => (0, C.kG)(null != m ? m : ""), [m]), {
    prefilledSearchFilters: O,
    eligibleFilterTokens: j
  } = (0, E.p4)(N, i), M = j.has(_.dCx.FILTER_FROM), A = j.has(_.dCx.FILTER_MENTIONS), P = j.has(_.dCx.FILTER_IN), Q = j.has(_.dCx.FILTER_AUTHOR_TYPE), k = r.useMemo(() => (0, C.nI)(N), [N]), D = (0, T.g_)({
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
  } = (0, E.HJ)(i, _.dCx.FILTER_FROM, O[_.dCx.FILTER_FROM]), {
    options: Z,
    query: z,
    setQuery: X,
    setQueryString: K,
    handleClearFilter: V,
    getApplyQueryString: G,
    handleFocusFilter: $,
    handleBlurFilter: ee
  } = (0, E.HJ)(i, _.dCx.FILTER_MENTIONS, O[_.dCx.FILTER_MENTIONS]), {
    options: et,
    query: el,
    setQuery: en,
    handleClearFilter: er,
    getApplyQueryString: ei,
    handleFocusFilter: ea
  } = (0, E.Z2)(i, O[_.dCx.FILTER_HAS], D), {
    options: eo,
    query: es,
    setQuery: eu,
    setQueryString: ed,
    handleClearFilter: ec,
    getApplyQueryString: eh,
    handleFocusFilter: eg,
    handleBlurFilter: eF
  } = (0, E.ur)(i, O[_.dCx.FILTER_IN]), {
    options: ex,
    dates: ep,
    validDates: eC,
    handleDateQueryChange: eT,
    handleDateChange: eE,
    handleAddDateFilter: eS,
    handleRemoveDateFilter: eI,
    handleClearDateFilter: e_,
    getDateQueryString: ef
  } = (0, E.fI)(O.dateFilters), {
    options: eR,
    query: em,
    setQuery: ey,
    handleClearFilter: eb,
    getApplyQueryString: eL,
    handleFocusFilter: ev
  } = (0, E.fJ)(i, O[_.dCx.FILTER_AUTHOR_TYPE], D), {
    options: eN,
    query: eO,
    setQuery: ej,
    handleClearFilter: eM,
    getApplyQueryString: eA
  } = (0, E.zL)(i, O[_.dCx.FILTER_PINNED]), eP = r.useMemo(() => {
    let e = 0;
    return M && B.length > 0 && (e += B.length), A && z.length > 0 && (e += z.length), P && es.length > 0 && (e += es.length), el.length > 0 && (e += el.length), eC.length > 0 && (e += eC.length), Q && em.length > 0 && (e += em.length), null !== eO && (e += 1), e
  }, [M, B, A, z, P, es, el, eC, Q, em, eO]), eQ = r.useMemo(() => {
    let e = ei(_.dCx.FILTER_HAS),
      t = ef(),
      l = eA(_.dCx.FILTER_PINNED),
      n = [];
    if (M) {
      let e = U(_.dCx.FILTER_FROM);
      null != e && n.push(e)
    }
    if (A) {
      let e = G(_.dCx.FILTER_MENTIONS);
      null != e && n.push(e)
    }
    if (P) {
      let e = eh(_.dCx.FILTER_IN);
      null != e && n.push(e)
    }
    if (null != e && n.push(e), null != t && n.push(t), Q) {
      let e = eL(_.dCx.FILTER_AUTHOR_TYPE);
      null != e && n.push(e)
    }
    return null != l && n.push(l), [...n].join(" ")
  }, [M, U, A, G, P, eh, ei, ef, Q, eL, eA]), {
    validateFilter: ek,
    validateDateFilter: eD
  } = (0, E.YL)({
    nonFilterQueryString: k,
    filterQueryString: eQ
  }), eH = r.useMemo(() => !((!M || (0, E.Ek)(B, O[_.dCx.FILTER_FROM])) && (!A || (0, E.Ek)(z, O[_.dCx.FILTER_MENTIONS])) && (!P || (0, E.Ek)(es, O[_.dCx.FILTER_IN])) && (0, E.Ek)(el, O[_.dCx.FILTER_HAS]) && (0, E.LE)(eC, O.dateFilters) && (!Q || (0, E.Ek)(em, O[_.dCx.FILTER_AUTHOR_TYPE])) && (0, E.Ek)(eO, O[_.dCx.FILTER_PINNED])), [M, B, O, A, z, P, es, el, eC, Q, em, eO]), eB = r.useCallback(() => {
    if (0 === eQ.length && 0 === k.trim().length) {
      p.S.dispatch(_.CkL.SEARCH_RESULTS_CLOSE), l();
      return
    }
    let e = "".concat(eQ, " ").concat(k).trim();
    S.Z.dispatchSetSearchQuery({
      query: e,
      anchor: 0,
      focus: 0,
      performSearch: true,
      replace: true,
      searchQuerySource: I.w7.SEARCH_FILTERS_MODAL
    }), l()
  }, [eQ, k, l]), eq = r.useMemo(() => {
    if (0 === eP) return f.intl.string(f.t.YfwFu1);
    let e = "(".concat(eP, ")");
    return "".concat(f.intl.string(f.t.YfwFu1), " ").concat(e)
  }, [eP]), eY = r.useCallback(() => {
    M && w(), A && V(), P && ec(), Q && eb(), er(), e_(), eM()
  }, [M, A, er, P, e_, w, V, ec, Q, eb, eM]), ew = A && (0, n.jsx)(b, {
    label: f.intl.string(f.t.HEBnRU),
    sublabel: f.intl.string(f.t.PdfTqT),
    textPlaceholder: f.intl.formatToPlainString(f.t.zka3aJ, {
      username: d
    }),
    value: z,
    onChange: X,
    onFocus: $,
    onSearchChange: K,
    options: Z,
    filter: true,
    filterType: _.dCx.FILTER_MENTIONS,
    validateFilter: ek,
    closeOnSelect: false,
    onBlur: ee
  }), eU = (0, n.jsx)(b, {
    label: f.intl.string(f.t["892qg1"]),
    sublabel: f.intl.string(f.t["Oa//IE"]),
    textPlaceholder: f.intl.string(f.t.tROvHH),
    value: el,
    onChange: en,
    onFocus: ea,
    options: et,
    filter: false,
    closeOnSelect: false,
    filterType: _.dCx.FILTER_HAS,
    validateFilter: ek
  });
  return (0, n.jsx)(o.Modal, {
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
      onClick: eB,
      disabled: !eH
    }],
    actionBarInput: (0, n.jsx)(c.Avr, {
      variant: "primary",
      text: eq,
      onClick: eY,
      disabled: 0 === eP
    }),
    children: (0, n.jsxs)("div", {
      className: R.container,
      children: [M && (0, n.jsx)(b, {
        label: f.intl.string(f.t.Qz6eOR),
        sublabel: f.intl.string(f.t["2JyXnO"]),
        textPlaceholder: f.intl.formatToPlainString(f.t["V4WMj/"], {
          username: d
        }),
        value: B,
        onChange: q,
        onFocus: J,
        onSearchChange: Y,
        options: H,
        filter: true,
        filterType: _.dCx.FILTER_FROM,
        validateFilter: ek,
        closeOnSelect: false,
        onBlur: W
      }), P && (0, n.jsx)(b, {
        label: f.intl.string(f.t["kLrM/s"]),
        sublabel: i.type === _.aib.DMS ? f.intl.string(f.t["b+abYv"]) : f.intl.string(f.t.x8cC0z),
        textPlaceholder: f.intl.formatToPlainString(f.t.K4l507, {
          channelName: u
        }),
        value: es,
        onChange: eu,
        onFocus: eg,
        onSearchChange: ed,
        options: eo,
        filter: true,
        closeOnSelect: false,
        filterType: _.dCx.FILTER_IN,
        validateFilter: ek,
        onBlur: eF
      }), D ? eU : ew, D ? ew : eU, (0, n.jsx)(y, {
        options: ex,
        dates: ep,
        handleDateQueryChange: eT,
        handleDateChange: eE,
        handleAddDateFilter: eS,
        handleRemoveDateFilter: eI,
        validateDateFilter: eD
      }), Q && (0, n.jsx)(b, {
        label: f.intl.string(f.t.Xgc1av),
        sublabel: f.intl.string(f.t.XaOAdt),
        textPlaceholder: f.intl.string(f.t.CAdOdf),
        value: em,
        onChange: ey,
        onFocus: ev,
        options: eR,
        filter: false,
        closeOnSelect: false,
        filterType: _.dCx.FILTER_AUTHOR_TYPE,
        validateFilter: ek
      }), (0, n.jsx)(L, {
        label: f.intl.string(f.t["6LYPWS"]),
        sublabel: f.intl.string(f.t.L8jjfu),
        textPlaceholder: f.intl.string(f.t.AQpFbX),
        value: eO,
        onChange: ej,
        options: eN,
        filterType: _.dCx.FILTER_PINNED,
        validateFilter: ek
      })]
    })
  })
}