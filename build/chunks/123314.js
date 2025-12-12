/** Chunk was on web.js **/
/** chunk id: 123314, original params: e,t,n (module,exports,re quire) **/
Object.defineProperty(exports, "__esModule", {
  value: true
});
var Chunk473749 = require("./473749.js"),
  Chunk460444 = require("./460444.js"),
  o = function(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    }
  }(Chunk473749),
  a = function() {
    return (a = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e
    }).apply(this, arguments)
  };

function s(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
  }
  return n
}

function l(e, t, n, r) {
  return new(n || (n = Promise))(function(i, o) {
    function a(e) {
      try {
        l(r.next(e))
      } catch (e) {
        o(e)
      }
    }

    function s(e) {
      try {
        l(r.throw(e))
      } catch (e) {
        o(e)
      }
    }

    function l(e) {
      var t;
      e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
        e(t)
      })).then(a, s)
    }
    l((r = r.apply(e, t || [])).next())
  })
}

function c(e, t) {
  var n, r, i, o, a = {
    label: 0,
    sent: function() {
      if (1 & i[0]) throw i[1];
      return i[1]
    },
    trys: [],
    ops: []
  };
  return o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
    return this
  }), o;

  function s(o) {
    return function(s) {
      return function(o) {
        if (n) throw TypeError("Generator is already executing.");
        for (; a;) try {
          if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
          switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
            case 0:
            case 1:
              i = o;
              break;
            case 4:
              return a.label++, {
                value: o[1],
                done: false
              };
            case 5:
              a.label++, r = o[1], o = [0];
              continue;
            case 7:
              o = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                a = 0;
                continue
              }
              if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                a.label = o[1];
                break
              }
              if (6 === o[0] && a.label < i[1]) {
                a.label = i[1], i = o;
                break
              }
              if (i && a.label < i[2]) {
                a.label = i[2], a.ops.push(o);
                break
              }
              i[2] && a.ops.pop(), a.trys.pop();
              continue
          }
          o = t.call(e, a)
        } catch (e) {
          o = [6, e], r = 0
        } finally {
          n = i = 0
        }
        if (5 & o[0]) throw o[1];
        return {
          value: o[0] ? o[1] : true,
          done: true
        }
      }([o, s])
    }
  }
}

function u(e) {
  var t = e || d(),
    n = r.useState(t),
    i = n[0],
    o = n[1];
  return r.useEffect(function() {
    if ("undefined" != typeof window && "matchMedia" in window) {
      var t = function() {
          o(e || d())
        },
        n = window.matchMedia("screen and (resolution: ".concat(i, "dppx)"));
      return n.hasOwnProperty("addEventListener") ? n.addEventListener("change", t) : n.addListener(t),
        function() {
          n.hasOwnProperty("removeEventListener") ? n.removeEventListener("change", t) : n.removeListener(t)
        }
    }
  }, [i, e]), i
}

function d() {
  return Math.min(Math.max(1, "undefined" != typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1), 3)
}
var f = function() {
    function e() {}
    return module.prototype.observe = function() {}, module.prototype.unobserve = function() {}, module.prototype.disconnect = function() {}, module
  }(),
  p = globalThis.ResizeObserver || f,
  _ = true !== globalThis.ResizeObserver,
  m = !_;

function h(e, t) {
  true === t && (t = true);
  var n = r.useState({
      width: 0,
      height: 0
    }),
    i = n[0],
    o = n[1];
  r.useEffect(function() {
    if ("undefined" != typeof window && t) {
      var e = function() {
        o({
          width: window.innerWidth,
          height: window.innerHeight
        })
      };
      return m && (e(), window.addEventListener("resize", e)),
        function() {
          return window.removeEventListener("resize", e)
        }
    }
  }, []);
  var a, s, l, c = r.useRef(new p((a = function(e) {
    _ && o({
      width: e[e.length - 1].contentRect.width,
      height: e[e.length - 1].contentRect.height
    })
  }, s = 0, l = 0, function() {
    for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    clearTimeout(l), l = window.setTimeout(function() {
      return a.apply(e, t)
    }, s)
  })));
  return r.useEffect(function() {
    var n = c.current;
    if (t) {
      var r = e.current;
      return e.current && _ && n.observe(e.current),
        function() {
          n.disconnect(), r && _ && n.unobserve(r)
        }
    }
    n.disconnect()
  }, [e, c]), i
}
var g = {
  useDevicePixelRatio: true,
  fitCanvasToArtboardHeight: false,
  useOffscreenRenderer: true,
  shouldResizeCanvasToContainer: true
};

function E(e) {
  return Object.assign({}, g, e)
}

function b(e) {
  var t = e.riveLoaded,
    n = true !== t && t,
    i = e.canvasElem,
    o = e.containerRef,
    a = e.options,
    s = true === a ? {} : a,
    l = e.onCanvasHasResized,
    c = e.artboardBounds,
    d = E(s),
    f = r.useState({
      height: 0,
      width: 0
    }),
    p = f[0],
    _ = p.height,
    m = p.width,
    g = f[1],
    b = r.useState({
      height: 0,
      width: 0
    }),
    y = b[0],
    O = y.height,
    v = y.width,
    S = b[1],
    I = r.useState(true),
    T = I[0],
    C = I[1],
    A = d.fitCanvasToArtboardHeight,
    N = d.shouldResizeCanvasToContainer,
    P = d.useDevicePixelRatio,
    R = d.customDevicePixelRatio,
    w = h(o, N),
    D = u(R),
    x = null != c ? c : {},
    L = x.maxX,
    j = x.maxY,
    M = r.useCallback(function() {
      var e, t, n, r, i = null != (t = null == (e = o.current) ? true : e.clientWidth) ? t : 0,
        a = null != (r = null == (n = o.current) ? true : n.clientHeight) ? r : 0;
      return A && c ? {
        width: i,
        height: i * (c.maxY / c.maxX)
      } : {
        width: i,
        height: a
      }
    }, [o, A, L, j]);
  r.useEffect(function() {
    if (N && o.current && n) {
      var e = M(),
        t = e.width,
        r = e.height,
        a = false;
      if (i) {
        var s = t !== m || r !== _;
        if (d.fitCanvasToArtboardHeight && s && (o.current.style.height = r + "px", a = true), d.useDevicePixelRatio) {
          if (s || t * D !== v || r * D !== O) {
            var c = D * t,
              u = D * r;
            i.width = c, i.height = u, i.style.width = t + "px", i.style.height = r + "px", S({
              width: c,
              height: u
            }), a = true
          }
        } else s && (i.width = t, i.height = r, S({
          width: t,
          height: r
        }), a = true);
        g({
          width: t,
          height: r
        })
      }
      l && (T || a) && l && l(), T && C(false)
    }
  }, [i, o, w, D, M, T, C, O, v, _, m, l, N, A, P, n]), r.useEffect(function() {
    S({
      width: 0,
      height: 0
    })
  }, [i])
}
var y, O = function() {
    function e() {}
    return module.prototype.observe = function() {}, module.prototype.unobserve = function() {}, module.prototype.disconnect = function() {}, module
  }(),
  v = globalThis.IntersectionObserver || O,
  S = function() {
    function e() {
      var e = this;
      this.elementsMap = new Map, this.onObserved = function(t) {
        t.forEach(function(t) {
          var n = e.elementsMap.get(t.target);
          n && n(t)
        })
      }, this.observer = new v(this.onObserved)
    }
    return module.prototype.registerCallback = function(e, t) {
      this.observer.observe(e), this.elementsMap.set(e, t)
    }, module.prototype.removeCallback = function(e) {
      this.observer.unobserve(e), this.elementsMap.delete(e)
    }, module
  }(),
  I = function() {
    return y || (y = new S), y
  };

function T(e) {
  var t = e.setContainerRef,
    n = e.setCanvasRef,
    r = e.className,
    i = true === r ? "" : r,
    l = e.style,
    c = e.children,
    u = s(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"]),
    d = a({
      width: "100%",
      height: "100%"
    }, l);
  return o.default.createElement("div", a({
    ref: t,
    className: i
  }, !i && {
    style: d
  }), o.default.createElement("canvas", a({
    ref: n,
    style: {
      verticalAlign: "top",
      width: 0,
      height: 0
    }
  }, u), c))
}

function C(e, t) {
  true === t && (t = {});
  var n = r.useState(null),
    l = n[0],
    c = n[1],
    d = r.useRef(null),
    f = r.useRef(null),
    p = r.useState(null),
    _ = p[0],
    m = p[1],
    h = !!e,
    g = E(t),
    y = u(),
    O = r.useCallback(function() {
      if (_) {
        if (_.layout && _.layout.fit === i.Fit.Layout && l) {
          var e = y * _.layout.layoutScaleFactor;
          _.devicePixelRatioUsed = y, _.artboardWidth = (null == l ? true : l.width) / e, _.artboardHeight = (null == l ? true : l.height) / e
        }
        _.startRendering(), _.resizeToCanvas()
      }
    }, [_, y]);
  b({
    riveLoaded: !!_,
    canvasElem: l,
    containerRef: d,
    options: g,
    onCanvasHasResized: O,
    artboardBounds: null == _ ? true : _.bounds
  });
  var v = r.useCallback(function(e) {
    null === e && l && (l.height = 0, l.width = 0), c(e)
  }, []);
  r.useEffect(function() {
    if (l && e) {
      var t, n = null != _;
      if (null == _) {
        var r = g.useOffscreenRenderer,
          o = e.onRiveReady,
          c = s(e, ["onRiveReady"]);
        t = new i.Rive(a(a({
          useOffscreenRenderer: r
        }, c), {
          canvas: l
        })), null != f.current && f.current.cleanup(), f.current = t, t.on(i.EventType.Load, function() {
          n = true, o && o(t), l ? m(t) : t.cleanup()
        })
      }
      return function() {
        n || null == t || t.cleanup()
      }
    }
  }, [l, h, _]);
  var S = r.useCallback(function(e) {
      d.current = e
    }, []),
    C = {
      observe: r.useCallback(function(e, t) {
        I().registerCallback(e, t)
      }, []),
      unobserve: r.useCallback(function(e) {
        I().removeCallback(e)
      }, [])
    },
    A = C.observe,
    N = C.unobserve;
  r.useEffect(function() {
    var e, t = false,
      n = function() {
        if (l && t) {
          var e = l.getBoundingClientRect();
          e.width > 0 && e.height > 0 && e.top < (window.innerHeight || document.documentElement.clientHeight) && e.bottom > 0 && e.left < (window.innerWidth || document.documentElement.clientWidth) && e.right > 0 && (null == _ || _.startRendering(), t = false)
        }
      };
    return l && false !== g.shouldUseIntersectionObserver && A(l, function(r) {
        r.isIntersecting ? _ && _.startRendering() : _ && _.stopRendering(), t = !r.isIntersecting, clearTimeout(e), r.isIntersecting || 0 !== r.boundingClientRect.width || (e = setTimeout(n, 10))
      }),
      function() {
        l && N(l)
      }
  }, [A, N, _, l, g.shouldUseIntersectionObserver]), r.useEffect(function() {
    return function() {
      _ && (_.cleanup(), m(null))
    }
  }, [_, l]), r.useEffect(function() {
    return function() {
      null != f.current && f.current.cleanup()
    }
  }, []);
  var P = null == e ? true : e.animations;
  r.useEffect(function() {
    _ && P && (_.isPlaying ? (_.stop(_.animationNames), _.play(P)) : _.isPaused && (_.stop(_.animationNames), _.pause(P)))
  }, [P, _]);
  var R = r.useCallback(function(e) {
    return o.default.createElement(T, a({
      setContainerRef: S,
      setCanvasRef: v
    }, e))
  }, [v, S]);
  return {
    canvas: l,
    container: d.current,
    setCanvasRef: v,
    setContainerRef: S,
    rive: _,
    RiveComponent: R
  }
}

function A(e, t, n) {
  var i = r.useState(null),
    o = i[0],
    s = i[1],
    l = r.useState(n.defaultValue),
    c = l[0],
    u = l[1],
    d = r.useState(null),
    f = d[0],
    p = d[1],
    _ = r.useRef(null),
    m = r.useRef(e),
    h = r.useRef(n);
  r.useEffect(function() {
    h.current = n
  }, [n]);
  var g = r.useCallback(function() {
    var e = _.current,
      t = m.current,
      n = h.current;
    if (!e || !t) return s(null), u(n.defaultValue), p(null),
      function() {};
    var r = n.getProperty(e, t);
    if (r) {
      s(r), u(n.getValue(r)), n.getExtendedData && p(n.getExtendedData(r));
      var i = function() {
        u(n.getValue(r)), n.getExtendedData && p(n.getExtendedData(r)), n.onPropertyEvent && n.onPropertyEvent()
      };
      return r.on(i),
        function() {
          r.off(i)
        }
    }
    return function() {}
  }, []);
  r.useEffect(function() {
    return _.current = t, m.current = e, g()
  }, [t, e, g]);
  var E = r.useCallback(function(e) {
      if (o && _.current === t) try {
        return e(o), void(h.current.getExtendedData && p(h.current.getExtendedData(o)))
      } catch (e) {}
      if (_.current) try {
        var n = h.current.getProperty(_.current, m.current);
        n && (s(n), e(n), h.current.getExtendedData && p(h.current.getExtendedData(n)))
      } catch (e) {}
    }, [o, t]),
    b = r.useMemo(function() {
      return h.current.buildPropertyOperations(E)
    }, [E]),
    y = a({
      value: c
    }, b);
  return n.getExtendedData && (y.extendedData = f), y
}
exports.default = function(e) {
  var t = e.src,
    n = e.artboard,
    r = e.animations,
    i = e.stateMachines,
    l = e.layout,
    c = e.useOffscreenRenderer,
    u = true === c || c,
    d = e.shouldDisableRiveListeners,
    f = true !== d && d,
    p = e.shouldResizeCanvasToContainer,
    _ = true === p || p,
    m = e.automaticallyHandleEvents,
    h = true !== m && m,
    g = e.children,
    E = s(e, ["src", "artboard", "animations", "stateMachines", "layout", "useOffscreenRenderer", "shouldDisableRiveListeners", "shouldResizeCanvasToContainer", "automaticallyHandleEvents", "children"]),
    b = C({
      src: t,
      artboard: n,
      animations: r,
      layout: l,
      stateMachines: i,
      autoplay: true,
      shouldDisableRiveListeners: f,
      automaticallyHandleEvents: h
    }, {
      useOffscreenRenderer: u,
      shouldResizeCanvasToContainer: _
    }).RiveComponent;
  return o.default.createElement(b, a({}, E), g)
}, exports.useResizeCanvas = b, exports.useRive = C, exports.useRiveFile = function(e) {
  var t = this,
    n = r.useState(null),
    o = n[0],
    a = n[1],
    s = r.useState("idle"),
    u = s[0],
    d = s[1];
  return r.useEffect(function() {
    var n = null;
    return l(t, true, true, function() {
        return c(this, function(t) {
          try {
            d("loading"), (n = new i.RiveFile(e)).init(), n.on(i.EventType.Load, function() {
              null == n || n.getInstance(), a(n), d("success")
            }), n.on(i.EventType.LoadError, function() {
              d("failed")
            }), a(n)
          } catch (e) {
            console.error(e), d("failed")
          }
          return [2]
        })
      }),
      function() {
        null == n || n.cleanup()
      }
  }, [e.src, e.buffer]), {
    riveFile: o,
    status: u
  }
}, exports.useStateMachineInput = function(e, t, n, o) {
  var a = r.useState(null),
    s = a[0],
    l = a[1];
  return r.useEffect(function() {
    function r() {
      if (e && t && n || l(null), e && t && n) {
        var r = e.stateMachineInputs(t);
        if (r) {
          var i = r.find(function(e) {
            return e.name === n
          });
          true !== o && i && (i.value = o), l(i || null)
        }
      } else l(null)
    }
    r(), e && e.on(i.EventType.Load, function() {
      r()
    })
  }, [e]), s
}, exports.useViewModel = function(e, t) {
  var n = null != t ? t : {},
    o = n.name,
    a = n.useDefault,
    s = true !== a && a,
    l = r.useState(null),
    c = l[0],
    u = l[1];
  return r.useEffect(function() {
    function t() {
      var t;
      if (e) {
        var n = null;
        u(n = null != o ? (null == (t = e.viewModelByName) ? true : t.call(e, o)) || null : e.defaultViewModel() || null)
      } else u(null)
    }
    return t(), e && e.on(i.EventType.Load, t),
      function() {
        e && e.off(i.EventType.Load, t)
      }
  }, [e, o, s]), c
}, exports.useViewModelInstance = function(e, t) {
  var n = null != t ? t : {},
    i = n.name,
    o = n.useDefault,
    a = true !== o && o,
    s = n.useNew,
    l = true !== s && s,
    c = n.rive,
    u = r.useState(null),
    d = u[0],
    f = u[1];
  return r.useEffect(function() {
    var t, n, r;
    if (e) {
      var o = null;
      f(o = null != i ? e.instanceByName(i) || null : a ? (null == (t = e.defaultInstance) ? true : t.call(e)) || null : l ? (null == (n = e.instance) ? true : n.call(e)) || null : (null == (r = e.defaultInstance) ? true : r.call(e)) || null), c && o && c.viewModelInstance !== o && c.bindViewModelInstance(o)
    } else f(null)
  }, [e, i, a, l, c]), d
}, exports.useViewModelInstanceArtboard = function(e, t) {
  return {
    setValue: A(e, t, {
      getProperty: r.useCallback(function(e, t) {
        return e.artboard(t)
      }, []),
      getValue: r.useCallback(function() {}, []),
      defaultValue: null,
      buildPropertyOperations: r.useCallback(function(e) {
        return {
          setValue: function(t) {
            e(function(e) {
              e.value = t
            })
          }
        }
      }, [])
    }).setValue
  }
}, exports.useViewModelInstanceBoolean = function(e, t) {
  var n = A(e, t, {
    getProperty: r.useCallback(function(e, t) {
      return e.boolean(t)
    }, []),
    getValue: r.useCallback(function(e) {
      return e.value
    }, []),
    defaultValue: null,
    buildPropertyOperations: r.useCallback(function(e) {
      return {
        setValue: function(t) {
          e(function(e) {
            e.value = t
          })
        }
      }
    }, [])
  });
  return {
    value: n.value,
    setValue: n.setValue
  }
}, exports.useViewModelInstanceColor = function(e, t) {
  var n = A(e, t, {
    getProperty: r.useCallback(function(e, t) {
      return e.color(t)
    }, []),
    getValue: r.useCallback(function(e) {
      return e.value
    }, []),
    defaultValue: null,
    buildPropertyOperations: r.useCallback(function(e) {
      return {
        setValue: function(t) {
          e(function(e) {
            e.value = t
          })
        },
        setRgb: function(t, n, r) {
          e(function(e) {
            e.rgb(t, n, r)
          })
        },
        setRgba: function(t, n, r, i) {
          e(function(e) {
            e.rgba(t, n, r, i)
          })
        },
        setAlpha: function(t) {
          e(function(e) {
            e.alpha(t)
          })
        },
        setOpacity: function(t) {
          e(function(e) {
            e.opacity(t)
          })
        }
      }
    }, [])
  });
  return {
    value: n.value,
    setValue: n.setValue,
    setRgb: n.setRgb,
    setRgba: n.setRgba,
    setAlpha: n.setAlpha,
    setOpacity: n.setOpacity
  }
}, exports.useViewModelInstanceEnum = function(e, t) {
  var n = A(e, t, {
    getProperty: r.useCallback(function(e, t) {
      return e.enum(t)
    }, []),
    getValue: r.useCallback(function(e) {
      return e.value
    }, []),
    defaultValue: null,
    getExtendedData: r.useCallback(function(e) {
      return e.values
    }, []),
    buildPropertyOperations: r.useCallback(function(e) {
      return {
        setValue: function(t) {
          e(function(e) {
            e.value = t
          })
        }
      }
    }, [])
  });
  return {
    value: n.value,
    values: n.extendedData || [],
    setValue: n.setValue
  }
}, exports.useViewModelInstanceImage = function(e, t) {
  return {
    setValue: A(e, t, {
      getProperty: r.useCallback(function(e, t) {
        return e.image(t)
      }, []),
      getValue: r.useCallback(function() {}, []),
      defaultValue: null,
      buildPropertyOperations: r.useCallback(function(e) {
        return {
          setValue: function(t) {
            e(function(e) {
              e.value = t
            })
          }
        }
      }, [])
    }).setValue
  }
}, exports.useViewModelInstanceList = function(e, t) {
  var n, i = r.useState(0)[1],
    o = A(e, t, {
      getProperty: r.useCallback(function(e, t) {
        return e.list(t)
      }, []),
      getValue: r.useCallback(function(e) {
        return e.length
      }, []),
      defaultValue: null,
      onPropertyEvent: function() {
        i(function(e) {
          return e + 1
        })
      },
      buildPropertyOperations: r.useCallback(function(e) {
        return {
          addInstance: function(t) {
            e(function(e) {
              return e.addInstance(t)
            })
          },
          addInstanceAt: function(t, n) {
            var r = false;
            return e(function(e) {
              r = e.addInstanceAt(t, n)
            }), r
          },
          removeInstance: function(t) {
            e(function(e) {
              return e.removeInstance(t)
            })
          },
          removeInstanceAt: function(t) {
            e(function(e) {
              return e.removeInstanceAt(t)
            })
          },
          getInstanceAt: function(t) {
            var n = null;
            return e(function(e) {
              n = e.instanceAt(t)
            }), n
          },
          swap: function(t, n) {
            e(function(e) {
              return e.swap(t, n)
            })
          }
        }
      }, [])
    });
  return {
    length: null != (n = o.value) ? n : 0,
    addInstance: o.addInstance,
    addInstanceAt: o.addInstanceAt,
    removeInstance: o.removeInstance,
    removeInstanceAt: o.removeInstanceAt,
    getInstanceAt: o.getInstanceAt,
    swap: o.swap
  }
}, exports.useViewModelInstanceNumber = function(e, t) {
  var n = A(e, t, {
    getProperty: r.useCallback(function(e, t) {
      return e.number(t)
    }, []),
    getValue: r.useCallback(function(e) {
      return e.value
    }, []),
    defaultValue: null,
    buildPropertyOperations: r.useCallback(function(e) {
      return {
        setValue: function(t) {
          e(function(e) {
            e.value = t
          })
        }
      }
    }, [])
  });
  return {
    value: n.value,
    setValue: n.setValue
  }
}, exports.useViewModelInstanceString = function(e, t) {
  var n = A(e, t, {
    getProperty: r.useCallback(function(e, t) {
      return e.string(t)
    }, []),
    getValue: r.useCallback(function(e) {
      return e.value
    }, []),
    defaultValue: null,
    buildPropertyOperations: r.useCallback(function(e) {
      return {
        setValue: function(t) {
          e(function(e) {
            e.value = t
          })
        }
      }
    }, [])
  });
  return {
    value: n.value,
    setValue: n.setValue
  }
}, exports.useViewModelInstanceTrigger = function(e, t, n) {
  var i = (null != n ? n : {}).onTrigger;
  return {
    trigger: A(e, t, {
      getProperty: r.useCallback(function(e, t) {
        return e.trigger(t)
      }, []),
      getValue: r.useCallback(function() {}, []),
      defaultValue: null,
      onPropertyEvent: i,
      buildPropertyOperations: r.useCallback(function(e) {
        return {
          trigger: function() {
            e(function(e) {
              e.trigger()
            })
          }
        }
      }, [])
    }).trigger
  }
}, Object.keys(Chunk460444).forEach(function(e) {
  "default" === e || t.hasOwnProperty(e) || Object.defineProperty(t, e, {
    enumerable: true,
    get: function() {
      return i[e]
    }
  })
})