/** Chunk was on 47841 **/
/** chunk id: 692453, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j,
  R: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk219504 = require("./219504.js"),
  Chunk975571 = require("./975571.js"),
  Chunk555337 = require("./555337.js"),
  Chunk923121 = require("./923121.js"),
  Chunk352821 = require("./352821.js"),
  Chunk250006 = require("./250006.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk902973 = require("./902973.js");

function x(e) {
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

function j(e) {
  let {
    saveOnClose: t
  } = e, s = (0, l.bG)([d.A], () => d.A.getGuildId()), j = (0, l.bG)([g.A], () => g.A.getEditedConnections()), _ = (0, l.bG)([g.A], () => g.A.isSubmitting()), O = i.useRef(s);
  i.useEffect(() => {
    O.current = s
  }, [s]), i.useEffect(() => {
    let {
      current: e
    } = O;
    return () => {
      t && null != e && (0, u.fH)(e)
    }
  }, [t, s]);
  let v = i.useCallback(() => {
      null != s && (0, a.mMO)(async () => {
        let {
          default: e
        } = await n.e("90194").then(n.bind(n, 566857));
        return t => (0, r.jsx)(e, x({}, t))
      })
    }, [s]),
    y = i.useMemo(() => j.map(e => {
      var t, n;
      return t = x({}, e), n = n = {
        id: (0, f.Sq)(e)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t
    }), [j]),
    A = i.useCallback(e => {
      let t = e.map(e => {
        let {
          id: t
        } = e;
        return function(e, t) {
          if (null == e) return {};
          var n, r, i, l = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
          }
          if (l = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.getOwnPropertyNames(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
              return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }(e, ["id"])
      });
      (0, u.Bq)(t)
    }, []),
    {
      handleDragStart: E,
      handleDragReset: N,
      handleDragComplete: S,
      draggingId: I
    } = (0, o.A)(y, A);
  if (null == s) return null;
  let T = j.length < f.pA;
  return (0, r.jsx)("div", {
    className: h.kL,
    children: (0, r.jsxs)("div", {
      className: h.jx,
      children: [(0, r.jsxs)("div", {
        className: h.G6,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-lg/bold",
          children: b.intl.string(b.t.Cl8F8H)
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          children: b.intl.format(b.t.vqgyJR, {
            linkedRolesUrl: c.A.getArticleURL(p.MVz.CONNECTION_DETAILS_ADMIN)
          })
        })]
      }), j.length > 0 && (0, r.jsx)("div", {
        className: h.eF,
        children: y.map((e, t) => (0, r.jsx)(m.A, {
          connection: e,
          index: t,
          onDragStart: E,
          onDragReset: N,
          onDragComplete: S,
          draggingId: I
        }, e.id))
      }), (0, r.jsxs)("button", {
        className: h.qG,
        onClick: v,
        disabled: !T || _,
        type: "button",
        children: [(0, r.jsx)(a.U1e, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor"
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/semibold",
          color: "text-brand",
          children: b.intl.string(b.t["03EqaC"])
        })]
      }), !T && (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: b.intl.format(b.t.Nc7guW, {
          max: f.pA
        })
      })]
    })
  })
}

function _() {
  let e = (0, l.bG)([d.A], () => d.A.getGuildId()),
    t = (0, l.bG)([g.A], () => g.A.isSubmitting()),
    n = (0, l.bG)([g.A], () => g.A.getErrors());
  if (null == e) return null;
  let i = n.length > 0;
  return (0, r.jsx)(s.A, {
    onSave: () => {
      i || (0, u.q3)(e)
    },
    onReset: u.p2,
    submitting: t,
    onSaveText: b.intl.string(b.t["R3BPH+"]),
    disabled: i,
    errorMessage: i ? (0, r.jsx)("div", {
      className: h.Tt,
      children: (0, r.jsx)("ul", {
        className: h.qr,
        children: n.map((e, t) => (0, r.jsxs)("li", {
          className: h.Ff,
          children: [(0, r.jsx)(a.EpV, {
            size: "sm",
            color: "currentColor"
          }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            children: e
          })]
        }, t))
      })
    }) : null
  })
}