/** Chunk was on 12236 **/
/** chunk id: 779735, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk58149 = require("./58149.js"),
  Chunk915089 = require("./915089.js"),
  Chunk831062 = require("./831062.js"),
  Chunk923531 = require("./923531.js"),
  Chunk17372 = require("./17372.js"),
  Chunk369053 = require("./369053.js"),
  Chunk598131 = require("./598131.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk575119 = require("./575119.js");
let x = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: x,
    onSubmit: h,
    onNavigate: v,
    emailToken: f,
    isAuthenticated: j = true
  } = e, A = (0, d.GV)(), {
    nodes: y,
    root_node_id: O,
    success_node_id: S,
    fail_node_id: T
  } = n, [N, k] = r.useState(O), [w, C] = r.useState(true), [I, P] = r.useState(true), [E, D] = r.useState([]), [M, R] = r.useState(true), [L, G] = r.useState(true);
  (0, s.Ay)(() => {
    (0, u.VE)()
  });
  let U = e => {
      var n, l, r;
      let {
        destination: a
      } = e, [, s] = a, d = y[s];
      if (true === d) return void c.A.increment({
        name: i.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
      });
      if (d.elements.some(e => "skip" === e.type) && (null == (n = d.button) ? true : n.type) === "next") return U((l = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, e), r = r = {
        destination: ["", d.button.target]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
      }), l));
      if (D([...E, e]), null != d.key && (null == v || v(d.key)), C(true), P(true), t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
        let e = t.record.id;
        o.Ay.trackWithMetadata(_.HAw.IAR_NAVIGATE, {
          message_id: e,
          content_type: t.name,
          report_sub_type: d.report_type,
          current_node: y[N].id,
          next_node: d.id
        })
      }
      k(s)
    },
    B = async e => {
      var l;
      let r = j ? await (0, p.zC)(n, t, [...E, e]) : await (0, p.bo)(n, t, [...E, e], f),
        i = null == r || null == (l = r.body) ? true : l.report_id;
      null != i && R(i), G(y[e.nodeRef].report_type), null == h || h(i)
    }, H = () => {
      var e, n;
      if (E.length < 1) return;
      let l = [...E],
        r = l.pop(),
        i = null != (e = null == r ? true : r.nodeRef) ? e : O;
      if (t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
        let e = t.record.id;
        o.Ay.trackWithMetadata(_.HAw.IAR_NAVIGATE, {
          message_id: e,
          content_type: t.name,
          report_sub_type: y[i].report_type,
          current_node: y[N].id,
          next_node: y[i].id
        })
      }
      C(null == r || null == (n = r.multiSelect) ? true : n.state), P(null == r ? true : r.textInput), k(i), D(l), null == v || v("..")
    }, V = r.useMemo(() => {
      let e = [],
        t = [];
      for (let i in y) {
        var n, l, r;
        let a = y[i];
        if (a.id !== S && a.id !== T && a.id !== O) {
          if (a.key.endsWith("_SUBMIT") || (null == (n = a.button) ? true : n.type) === "submit") {
            t.push(a);
            continue
          }
          if (e.push(a), (null == (l = a.button) ? true : l.type) === "next") {
            let t = null == (r = a.button) ? true : r.target,
              n = e.indexOf(y[t]);
            false !== n && (e.splice(n, 1), e.push(y[t]))
          }
        }
      }
      return [y[O], ...e, ...t, y[S], y[T]]
    }, [y, O, T, S]);
  return (0, l.jsx)(a.EOs, {
    "data-migration-pending": true,
    transitionState: x.transitionState,
    "aria-labelledby": A,
    parentComponent: "InAppReportModal",
    children: (0, l.jsx)(a.tN_, {
      width: 440,
      activeSlide: N,
      centered: false,
      children: V.map(e => (0, l.jsx)(a.q7S, {
        id: e.id,
        children: (0, l.jsx)("div", {
          className: g.B,
          children: (0, l.jsx)(b.A, {
            node: e,
            reportType: t,
            reportSubType: L,
            history: E,
            onModalClose: x.onClose,
            onSelectChild: U,
            onNavigateBack: H,
            multiSelect: w,
            textInput: I,
            successNodeId: S,
            failNodeId: T,
            onSubmit: B,
            reportId: M,
            nodeMap: y
          })
        })
      }, e.id))
    })
  })
}