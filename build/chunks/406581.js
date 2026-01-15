/** Chunk was on web.js **/
/** chunk id: 406581, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FE: () => C,
  G5: () => v,
  IW: () => S,
  yF: () => _
});
var Chunk557635 = require("./557635.js"),
  Chunk242315 = require("./242315.js"),
  Chunk632765 = require("./632765.js"),
  Chunk176159 = require("./176159.js"),
  Chunk24156 = require("./24156.js"),
  Chunk497448 = require("./497448.js"),
  Chunk473749 = require("./473749.js"),
  Chunk112683 = require("./112683.js"),
  Chunk525405 = require("./525405.js");
let f = (0, Chunk473749.createContext)(false),
  p = (0, Chunk473749.createContext)(null);

function _(e) {
  if ((0, c.useContext)(p)) return e.content;
  let {
    collection: t,
    document: n
  } = E(e.createCollection);
  return c.createElement(c.Fragment, null, c.createElement(o._G, null, c.createElement(p.Provider, {
    value: n
  }, e.content)), c.createElement(h, {
    render: e.children,
    collection: t
  }))
}

function h({
  collection: e,
  render: t
}) {
  return t(e)
}

function m(e, t, n) {
  let r = (0, u.Av)(),
    i = (0, c.useRef)(r);
  i.current = r;
  let a = (0, c.useCallback)(() => i.current ? n() : t(), [t, n]);
  return (0, d.useSyncExternalStore)(e, a)
}
let g = "function" == typeof Chunk473749.useSyncExternalStore ? Chunk473749.useSyncExternalStore : m;

function E(e) {
  let [t] = (0, c.useState)(() => new(0, i.BB)((null == e ? true : e()) || new(0, r.Mi)));
  return {
    collection: g((0, c.useCallback)(e => t.subscribe(e), [t]), (0, c.useCallback)(() => {
      let e = t.getCollection();
      return t.isSSR && t.resetAfterSSR(), e
    }, [t]), (0, c.useCallback)(() => (t.isSSR = true, t.getCollection()), [t])),
    document: t
  }
}
let b = (0, Chunk473749.createContext)(null);

function y(e) {
  var t;
  return (t = class extends r.S3 {}).type = e, t
}

function O(e, t, n, r, i, a) {
  "string" == typeof e && (e = y(e));
  let o = (0, c.useCallback)(i => {
      null == i || i.setProps(t, n, e, r, a)
    }, [t, n, r, a, e]),
    s = (0, c.useContext)(b);
  if (s) {
    let o = s.ownerDocument.nodesByProps.get(t);
    return o || ((o = s.ownerDocument.createElement(e.type)).setProps(t, n, e, r, a), s.appendChild(o), s.ownerDocument.updateCollection(), s.ownerDocument.nodesByProps.set(t, o)), i ? c.createElement(b.Provider, {
      value: o
    }, i) : null
  }
  return c.createElement(e.type, {
    ref: o
  }, i)
}

function v(e, t) {
  let n = ({
      node: e
    }) => t(e.props, e.props.ref, e),
    r = (0, c.forwardRef)((r, i) => {
      let a = (0, c.useContext)(l.RG);
      if (!(0, c.useContext)(f)) {
        if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
        return t(r, i)
      }
      return O(e, r, i, "children" in r ? r.children : null, null, e => c.createElement(l.RG.Provider, {
        value: a
      }, c.createElement(n, {
        node: e
      })))
    });
  return r.displayName = t.name, r
}

function S(e, t, n = I) {
  let r = ({
      node: e
    }) => t(e.props, e.props.ref, e),
    i = (0, c.forwardRef)((t, i) => {
      var a;
      let o = n(t);
      return null != (a = O(e, t, i, null, o, e => c.createElement(r, {
        node: e
      }))) ? a : c.createElement(c.Fragment, null)
    });
  return i.displayName = t.name, i
}

function I(e) {
  return (0, a.H)({
    ...e,
    addIdAndValue: true
  })
}
let T = (0, Chunk473749.createContext)(null);

function C(e) {
  let t = (0, c.useContext)(T),
    n = ((null == t ? true : t.dependencies) || []).concat(e.dependencies),
    r = e.idScope || (null == t ? true : t.idScope),
    i = I({
      ...e,
      idScope: r,
      dependencies: n
    });
  return (0, c.useContext)(p) && (i = c.createElement(A, null, i)), t = (0, c.useMemo)(() => ({
    dependencies: n,
    idScope: r
  }), [r, ...n]), c.createElement(T.Provider, {
    value: t
  }, i)
}

function A({
  children: e
}) {
  let t = (0, c.useContext)(p),
    n = (0, c.useMemo)(() => c.createElement(p.Provider, {
      value: null
    }, c.createElement(f.Provider, {
      value: true
    }, e)), [e]);
  return (0, u.Av)() ? c.createElement(b.Provider, {
    value: t
  }, n) : (0, s.createPortal)(n, t)
}