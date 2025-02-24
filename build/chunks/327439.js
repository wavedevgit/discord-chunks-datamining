/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  T: () => S
});
var r = n(313694);

function i(e, t, n) {
  o(e, t), t.set(e, n)
}

function o(e, t) {
  if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
}

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function s(e, t) {
  var n = u(e, t, "get");
  return l(e, n)
}

function l(e, t) {
  return t.get ? t.get.call(e) : t.value
}

function c(e, t, n) {
  var r = u(e, t, "set");
  return d(e, r, n), n
}

function u(e, t, n) {
  if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e)
}

function d(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable) throw TypeError("attempted to set read only private field");
    t.value = n
  }
}
var f = new WeakMap,
  p = new WeakMap,
  _ = new WeakMap,
  h = new WeakMap,
  m = new WeakMap,
  g = new WeakMap,
  E = new WeakMap,
  v = new WeakMap,
  b = new WeakMap,
  y = new WeakMap,
  O = new WeakMap;
class S {
  constructor(e, t, n) {
    if (i(this, f, {
        writable: !0,
        value: void 0
      }), i(this, p, {
        writable: !0,
        value: void 0
      }), i(this, _, {
        writable: !0,
        value: void 0
      }), i(this, h, {
        writable: !0,
        value: void 0
      }), i(this, m, {
        writable: !0,
        value: void 0
      }), i(this, g, {
        writable: !0,
        value: (e, t, n) => {
          var r, i;
          if (!n.backend) throw Error("You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)));
          let o = n.backend(e, t, n.options),
            a = n.id,
            l = !n.id && o && o.constructor;
          if (l && (a = o.constructor.name), a) l && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
          else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(n), "\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx"));
          if (s(this, _)[a]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(n), " (conflicts with: ").concat(JSON.stringify(s(this, _)[a]), ")"));
          return {
            id: a,
            instance: o,
            preview: null !== (r = n.preview) && void 0 !== r && r,
            transition: n.transition,
            skipDispatchOnTransition: null !== (i = n.skipDispatchOnTransition) && void 0 !== i && i
          }
        }
      }), a(this, "setup", () => {
        if ("undefined" != typeof window) {
          if (S.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
          S.isSetUp = !0, s(this, E).call(this, window), s(this, _)[s(this, f)].instance.setup()
        }
      }), a(this, "teardown", () => {
        "undefined" != typeof window && (S.isSetUp = !1, s(this, v).call(this, window), s(this, _)[s(this, f)].instance.teardown())
      }), a(this, "connectDragSource", (e, t, n) => s(this, O).call(this, "connectDragSource", e, t, n)), a(this, "connectDragPreview", (e, t, n) => s(this, O).call(this, "connectDragPreview", e, t, n)), a(this, "connectDropTarget", (e, t, n) => s(this, O).call(this, "connectDropTarget", e, t, n)), a(this, "profile", () => s(this, _)[s(this, f)].instance.profile()), a(this, "previewEnabled", () => s(this, _)[s(this, f)].preview), a(this, "previewsList", () => s(this, p)), a(this, "backendsList", () => s(this, h)), i(this, E, {
        writable: !0,
        value: e => {
          s(this, h).forEach(t => {
            t.transition && e.addEventListener(t.transition.event, s(this, b))
          })
        }
      }), i(this, v, {
        writable: !0,
        value: e => {
          s(this, h).forEach(t => {
            t.transition && e.removeEventListener(t.transition.event, s(this, b))
          })
        }
      }), i(this, b, {
        writable: !0,
        value: e => {
          let t = s(this, f);
          if (s(this, h).some(t => !!(t.id !== s(this, f) && t.transition && t.transition.check(e)) && (c(this, f, t.id), !0)), s(this, f) !== t) {
            var n;
            s(this, _)[t].instance.teardown(), Object.keys(s(this, m)).forEach(e => {
              let t = s(this, m)[e];
              t.unsubscribe(), t.unsubscribe = s(this, y).call(this, t.func, ...t.args)
            }), s(this, p).backendChanged(this);
            let r = s(this, _)[s(this, f)];
            if (r.instance.setup(), r.skipDispatchOnTransition) return;
            let i = new e.constructor(e.type, e);
            null === (n = e.target) || void 0 === n || n.dispatchEvent(i)
          }
        }
      }), i(this, y, {
        writable: !0,
        value: (e, t, n, r) => s(this, _)[s(this, f)].instance[e](t, n, r)
      }), i(this, O, {
        writable: !0,
        value: (e, t, n, r) => {
          let i = "".concat(e, "_").concat(t),
            o = s(this, y).call(this, e, t, n, r);
          return s(this, m)[i] = {
            func: e,
            args: [t, n, r],
            unsubscribe: o
          }, () => {
            s(this, m)[i].unsubscribe(), delete s(this, m)[i]
          }
        }
      }), !n || !n.backends || n.backends.length < 1) throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
    c(this, p, new r.J), c(this, _, {}), c(this, h, []), n.backends.forEach(n => {
      let r = s(this, g).call(this, e, t, n);
      s(this, _)[r.id] = r, s(this, h).push(r)
    }), c(this, f, s(this, h)[0].id), c(this, m, {})
  }
}
a(S, "isSetUp", !1)