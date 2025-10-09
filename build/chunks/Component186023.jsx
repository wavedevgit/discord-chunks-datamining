/** Chunk was on 73705 **/
/** chunk id: 186023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk367907 = require("./367907.js"),
  Chunk313201 = require("./313201.js"),
  Chunk797614 = require("./797614.js"),
  Chunk546791 = require("./546791.js"),
  Chunk277537 = require("./277537.js"),
  Chunk82554 = require("./82554.js"),
  Chunk185625 = require("./185625.js"),
  Chunk255514 = require("./255514.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk584581 = require("./584581.js");
let b = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: b,
    onSubmit: x,
    onNavigate: v,
    emailToken: j,
    isAuthenticated: y = true
  } = e, O = (0, c.Dt)(), {
    nodes: C,
    root_node_id: I,
    success_node_id: Z,
    fail_node_id: S
  } = n, [T, N] = i.useState(I), [P, E] = i.useState(true), [k, w] = i.useState(true), [D, R] = i.useState([]), [M, A] = i.useState(true), [B, L] = i.useState(true), U = (0, _.PO)("in_app_report_modal");
  (0, o.ZP)(() => {
    U && (0, u.k0)()
  });
  let G = e => {
      var n, r, i;
      let {
        destination: a
      } = e, [, o] = a, c = C[o];
      if (true === c) return void d.Z.increment({
        name: l.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
      });
      if (c.elements.some(e => "skip" === e.type) && (null == (n = c.button) ? true : n.type) === "next") return G((r = function(e) {
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
      }({}, e), i = i = {
        destination: ["", c.button.target]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r));
      if (R([...D, e]), null != c.key && (null == v || v(c.key)), E(true), w(true), t.name === m.b.MESSAGE || t.name === m.b.FIRST_DM) {
        let e = t.record.id;
        s.ZP.trackWithMetadata(f.rMx.IAR_NAVIGATE, {
          message_id: e,
          content_type: t.name,
          report_sub_type: c.report_type,
          current_node: C[T].id,
          next_node: c.id
        })
      }
      N(o)
    },
    H = async e => {
      var r;
      let i = y ? await (0, p.ZD)(n, t, [...D, e]) : await (0, p.fw)(n, t, [...D, e], j),
        l = null == i || null == (r = i.body) ? true : r.report_id;
      null != l && A(l), L(C[e.nodeRef].report_type), null == x || x(l)
    }, W = () => {
      var e, n;
      if (D.length < 1) return;
      let r = [...D],
        i = r.pop(),
        l = null != (n = null == i ? true : i.nodeRef) ? n : I;
      if (t.name === m.b.MESSAGE || t.name === m.b.FIRST_DM) {
        let e = t.record.id;
        s.ZP.trackWithMetadata(f.rMx.IAR_NAVIGATE, {
          message_id: e,
          content_type: t.name,
          report_sub_type: C[l].report_type,
          current_node: C[T].id,
          next_node: C[l].id
        })
      }
      E(null == i || null == (e = i.multiSelect) ? true : e.state), w(null == i ? true : i.textInput), N(l), R(r), null == v || v("..")
    }, z = i.useMemo(() => {
      let e = [],
        t = [];
      for (let l in C) {
        var n, r, i;
        let a = C[l];
        if (a.id !== Z && a.id !== S && a.id !== I) {
          if (a.key.endsWith("_SUBMIT") || (null == (n = a.button) ? true : n.type) === "submit") {
            t.push(a);
            continue
          }
          if (e.push(a), (null == (r = a.button) ? true : r.type) === "next") {
            let t = null == (i = a.button) ? true : i.target,
              n = e.indexOf(C[t]);
            false !== n && (e.splice(n, 1), e.push(C[t]))
          }
        }
      }
      return [C[I], ...e, ...t, C[Z], C[S]]
    }, [C, I, S, Z]);
  return (0, r.jsx)(a.Y0X, {
    "data-migration-pending": true,
    transitionState: b.transitionState,
    "aria-labelledby": O,
    parentComponent: "InAppReportModal",
    children: (0, r.jsx)(a.MyZ, {
      width: 440,
      activeSlide: T,
      centered: false,
      children: z.map(e => (0, r.jsx)(a.Mi4, {
        id: e.id,
        children: (0, r.jsx)("div", {
          className: h.slideContainer,
          children: (0, r.jsx)(g.Z, {
            node: e,
            reportType: t,
            reportSubType: B,
            history: D,
            onModalClose: b.onClose,
            onSelectChild: G,
            onNavigateBack: W,
            multiSelect: P,
            textInput: k,
            successNodeId: Z,
            failNodeId: S,
            onSubmit: H,
            reportId: M,
            nodeMap: C
          })
        })
      }, e.id))
    })
  })
}