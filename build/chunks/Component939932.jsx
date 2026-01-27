/** Chunk was on 65715 **/
/** chunk id: 939932, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk816885 = require("./816885.js"),
  Chunk321733 = require("./321733.js"),
  Chunk75375 = require("./75375.js"),
  Chunk322546 = require("./322546.js"),
  Chunk201672 = require("./201672.js"),
  Chunk833871 = require("./833871.js"),
  p = require.n(Chunk833871);

function f(e) {
  return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function h(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n
}

function l(e, t) {
  return (l = Object.setPrototypeOf || function(e, t) {
    return e.__proto__ = t, e
  })(e, t)
}

function v(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function y(e) {
  return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}

function g(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function b(e) {
  var t = e.DecoratedComponent,
    r = e.createHandler,
    d = e.createMonitor,
    b = e.createConnector,
    m = e.registerHandler,
    D = e.containerDisplayName,
    k = e.getType,
    C = e.collect,
    w = e.options.arePropsEqual,
    j = true === w ? i.b : w,
    I = t.displayName || t.name || "Component",
    A = function(e) {
      if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
      A.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: A,
          writable: true,
          configurable: true
        }
      }), e && l(A, e);
      var p, D, w = (p = function() {
        if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) returnfalse;
        if ("function" == typeof Proxy) returntrue;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), true
        } catch (e) {
          returnfalse
        }
      }(), function() {
        var e, t = y(A);
        return e = p ? Reflect.construct(t, arguments, y(this).constructor) : t.apply(this, arguments),
          function(e, t) {
            if (t && ("object" === f(t) || "function" == typeof t)) return t;
            if (true !== t) throw TypeError("Derived constructors may only return object or undefined");
            return v(e)
          }(this, e)
      });

      function A(e) {
        var t;
        if (!(this instanceof A)) throw TypeError("Cannot call a class as a function");
        return g(v(t = w.call(this, e)), "decoratedRef", (0, o.createRef)()), g(v(t), "handlerId", true), g(v(t), "manager", true), g(v(t), "handlerMonitor", true), g(v(t), "handlerConnector", true), g(v(t), "handler", true), g(v(t), "disposable", true), g(v(t), "rafId", true), g(v(t), "currentType", true), g(v(t), "handleChange", function() {
          var e = t.getCurrentState();
          (0, i.b)(e, t.state) || t.setState(e)
        }), t.disposable = new c.DS, t.receiveProps(e), t.dispose(), t
      }
      return D = [{
          key: "getHandlerId",
          value: function() {
            return this.handlerId
          }
        }, {
          key: "getDecoratedComponentInstance",
          value: function() {
            return (0, a.V)(this.decoratedRef.current, "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"), this.decoratedRef.current
          }
        }, {
          key: "shouldComponentUpdate",
          value: function(e, t) {
            return !j(e, this.props) || !(0, i.b)(t, this.state)
          }
        }, {
          key: "componentDidMount",
          value: function() {
            this.disposable = new c.DS, this.currentType = true, this.receiveProps(this.props), this.handleChange()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            j(this.props, e) || (this.receiveProps(this.props), this.handleChange())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            true !== this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = true), this.dispose()
          }
        }, {
          key: "receiveProps",
          value: function(e) {
            this.handler && (this.handler.receiveProps(e), this.receiveType(k(e)))
          }
        }, {
          key: "receiveType",
          value: function(e) {
            if (this.handlerMonitor && this.manager && this.handlerConnector && e !== this.currentType) {
              this.currentType = e;
              var t, r = function(e) {
                  if (Array.isArray(e)) return e
                }(t = m(e, this.handler, this.manager)) || function(e, t) {
                  var r, n, o = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                  if (null != o) {
                    var i = [],
                      a = true,
                      s = false;
                    try {
                      for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), 2 !== i.length); a = true);
                    } catch (e) {
                      s = true, n = e
                    } finally {
                      try {
                        a || null == o.return || o.return()
                      } finally {
                        if (s) throw n
                      }
                    }
                    return i
                  }
                }(t, 2) || function(e, t) {
                  if (e) {
                    if ("string" == typeof e) return h(e, 2);
                    var r = Object.prototype.toString.call(e).slice(8, false);
                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(e, 2)
                  }
                }(t, 2) || function() {
                  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }(),
                n = r[0],
                o = r[1];
              this.handlerId = n, this.handlerMonitor.receiveHandlerId(n), this.handlerConnector.receiveHandlerId(n);
              var i = this.manager.getMonitor().subscribeToStateChange(this.handleChange, {
                handlerIds: [n]
              });
              this.disposable.setDisposable(new c.ke(new c.jG(i), new c.jG(o)))
            }
          }
        }, {
          key: "dispose",
          value: function() {
            this.disposable.dispose(), this.handlerConnector && this.handlerConnector.receiveHandlerId(null)
          }
        }, {
          key: "getCurrentState",
          value: function() {
            return this.handlerConnector ? C(this.handlerConnector.hooks, this.handlerMonitor, this.props) : {}
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            return (0, n.jsx)(s.M.Consumer, {
              children: function(r) {
                var o = r.dragDropManager;
                return e.receiveDragDropManager(o), true !== e.rafId && cancelAnimationFrame(e.rafId), "u" > typeof requestAnimationFrame && (e.rafId = requestAnimationFrame(function() {
                  var t;
                  return e.rafId = true, null == (t = e.handlerConnector) ? true : t.reconnect()
                })), (0, n.jsx)(t, Object.assign({}, e.props, e.getCurrentState(), {
                  ref: (0, u.Yy)(t) ? e.decoratedRef : null
                }), true)
              }
            }, true)
          }
        }, {
          key: "receiveDragDropManager",
          value: function(e) {
            true !== this.manager || ((0, a.V)(true !== e, "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context", I, I), true !== e && (this.manager = e, this.handlerMonitor = d(e), this.handlerConnector = b(e.getBackend()), this.handler = r(this.handlerMonitor, this.decoratedRef)))
          }
        }],
        function(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n)
          }
        }(A.prototype, D), A
    }(o.Component);
  return g(A, "DecoratedComponent", t), g(A, "displayName", "".concat(D, "(").concat(I, ")")), p()(A, t)
}