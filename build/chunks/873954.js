/** Chunk was on web.js **/
/** chunk id: 873954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FE: () => A,
  G5: () => v,
  IW: () => I,
  yF: () => h
});
var Chunk665012 = require("./665012.js"),
  Chunk223833 = require("./223833.js"),
  Chunk451035 = require("./451035.js"),
  Chunk52759 = require("./52759.js"),
  Chunk603113 = require("./603113.js"),
  Chunk600711 = require("./600711.js"),
  Chunk647438 = require("./647438.js"),
  Chunk179506 = require("./179506.js"),
  Chunk955817 = require("./955817.js"),
  Chunk13826 = require("./13826.js");
let _ = (0, Chunk647438.createContext)(false),
  p = (0, Chunk647438.createContext)(null);

function h(e) {
  if ((0, c.useContext)(p)) return e.content;
  let {
    collection: t,
    document: n
  } = b(e.createCollection);
  return c.createElement(c.Fragment, null, c.createElement(o._G, null, c.createElement(p.Provider, {
    value: n
  }, e.content)), c.createElement(m, {
    render: e.children,
    collection: t
  }))
}

function m({
  collection: e,
  render: t
}) {
  return t(e)
}

function g(e, t, n) {
  let r = (0, u.Av)(),
    i = (0, c.useRef)(r);
  i.current = r;
  let a = (0, c.useCallback)(() => i.current ? n() : t(), [t, n]);
  return (0, f.useSyncExternalStore)(e, a)
}
let E = "function" == typeof Chunk647438.useSyncExternalStore ? Chunk647438.useSyncExternalStore : g;

function b(e) {
  let [t] = (0, c.useState)(() => new(0, i.BB)((null == e ? true : e()) || new(0, r.M))), n = E((0, c.useCallback)(e => t.subscribe(e), [t]), (0, c.useCallback)(() => {
    let e = t.getCollection();
    return t.isSSR && t.resetAfterSSR(), e
  }, [t]), (0, c.useCallback)(() => (t.isSSR = true, t.getCollection()), [t]));
  return (0, d.b)(() => (t.isMounted = true, () => {
    t.isMounted = false
  }), [t]), {
    collection: n,
    document: t
  }
}
let y = (0, Chunk647438.createContext)(null);

function O(e, t, n, r, i, a) {
  let o = (0, c.useCallback)(e => {
      null == e || e.setProps(t, n, r, a)
    }, [t, n, r, a]),
    s = (0, c.useContext)(y);
  if (s) {
    let o = s.ownerDocument.nodesByProps.get(t);
    return o || ((o = s.ownerDocument.createElement(e)).setProps(t, n, r, a), s.appendChild(o), s.ownerDocument.updateCollection(), s.ownerDocument.nodesByProps.set(t, o)), i ? c.createElement(y.Provider, {
      value: o
    }, i) : null
  }
  return c.createElement(e, {
    ref: o
  }, i)
}

function v(e, t) {
  let n = ({
      node: e
    }) => t(e.props, e.props.ref, e),
    r = (0, c.forwardRef)((r, i) => {
      let a = (0, c.useContext)(l.RG);
      if (!(0, c.useContext)(_)) {
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

function I(e, t, n = T) {
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

function T(e) {
  return (0, a.H)({
    ...e,
    addIdAndValue: true
  })
}
let S = (0, Chunk647438.createContext)(null);

function A(e) {
  let t = (0, c.useContext)(S),
    n = ((null == t ? true : t.dependencies) || []).concat(e.dependencies),
    r = e.idScope || (null == t ? true : t.idScope),
    i = T({
      ...e,
      idScope: r,
      dependencies: n
    });
  return (0, c.useContext)(p) && (i = c.createElement(C, null, i)), t = (0, c.useMemo)(() => ({
    dependencies: n,
    idScope: r
  }), [r, ...n]), c.createElement(S.Provider, {
    value: t
  }, i)
}

function C({
  children: e
}) {
  let t = (0, c.useContext)(p),
    n = (0, c.useMemo)(() => c.createElement(p.Provider, {
      value: null
    }, c.createElement(_.Provider, {
      value: true
    }, e)), [e]);
  return (0, u.Av)() ? c.createElement(y.Provider, {
    value: t
  }, n) : (0, s.createPortal)(n, t)
}