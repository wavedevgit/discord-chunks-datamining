/** Chunk was on web.js **/
/** chunk id: 555528, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => q
}), require("./321073.js"), require("./896048.js"), require("./638769.js"), require("./65821.js");
var a, Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk435090 = require("./435090.js"),
  Chunk639180 = require("./639180.js"),
  Chunk5463 = require("./5463.js"),
  Chunk881957 = require("./881957.js"),
  Chunk652215 = require("./652215.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require("./644434.js");
let O = "migrated",
  A = .02,
  v = .01,
  S = {
    [Chunk652215.uss.GUILDS]: {
      resizeX: false,
      resizeY: true,
      dragAnywhere: false,
      layoutPolicy: Chunk881957.X.OPTIONAL,
      defaultSettings: {
        anchor: {
          left: .175,
          top: .05,
          bottom: true,
          right: true
        },
        size: {
          width: "auto",
          height: .65
        },
        pinned: false,
        minSize: {
          width: 312,
          height: 300
        }
      },
      version: 0
    },
    [Chunk652215.uss.TEXT]: {
      resizeX: true,
      resizeY: true,
      dragAnywhere: false,
      layoutPolicy: Chunk881957.X.OPTIONAL,
      defaultSettings: {
        anchor: {
          left: .26,
          top: .05,
          bottom: true,
          right: true
        },
        size: {
          width: .565,
          height: .65
        },
        pinned: true,
        minSize: {
          width: 430,
          height: 300
        }
      },
      version: 0
    },
    [Chunk652215.uss.VOICE]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: Chunk881957.X.REQUIRED,
      defaultSettings: {
        anchor: {
          left: .011,
          top: .011,
          bottom: true,
          right: true
        },
        size: {
          width: "auto",
          height: "auto"
        },
        pinned: true,
        minSize: {
          width: 272,
          height: 100
        }
      },
      version: 0
    },
    [Chunk652215.uss.GUILDS_TEXT]: {
      resizeX: true,
      resizeY: true,
      dragAnywhere: false,
      layoutPolicy: Chunk881957.X.OPTIONAL_DEFAULT,
      defaultSettings: {
        anchor: {
          left: true,
          top: .05,
          bottom: true,
          right: .25
        },
        size: {
          width: .6,
          height: .45
        },
        pinned: false,
        minSize: {
          height: 300,
          width: 610
        }
      },
      version: 0
    },
    [Chunk652215.uss.VOICE_V3]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: Chunk881957.X.REQUIRED,
      defaultSettings: {
        anchor: {
          left: v,
          top: .35,
          bottom: true,
          right: true
        },
        size: {
          width: "auto",
          height: "auto"
        },
        pinned: true,
        minSize: {
          width: 272,
          height: 24
        }
      },
      version: 3
    },
    [Chunk652215.uss.VIDEO]: {
      resizeX: true,
      resizeY: true,
      dragAnywhere: true,
      layoutPolicy: Chunk881957.X.OPTIONAL_DEFAULT,
      defaultSettings: {
        anchor: {
          left: v,
          top: true,
          bottom: A,
          right: true
        },
        size: {
          fixed: true,
          width: 408,
          height: 128
        },
        pinned: true,
        minSize: {
          width: 128,
          height: 128
        }
      },
      version: 3
    },
    [Chunk652215.uss.GO_LIVE]: {
      resizeX: true,
      resizeY: true,
      dragAnywhere: true,
      layoutPolicy: Chunk881957.X.OPTIONAL_DEFAULT,
      defaultSettings: {
        anchor: {
          left: true,
          top: true,
          bottom: A,
          right: v
        },
        size: {
          fixed: true,
          width: 256,
          height: 144
        },
        pinned: false,
        minSize: {
          width: 276,
          height: 164
        }
      },
      version: 3
    },
    [Chunk652215.uss.QUICK_ACTIONS]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: Chunk881957.X.REQUIRED,
      defaultSettings: {
        anchor: {
          left: .34,
          top: A,
          bottom: true,
          right: true
        },
        size: {
          width: "auto",
          height: "auto"
        },
        pinned: false,
        minSize: {
          width: 216,
          height: 56
        }
      },
      version: 3
    },
    [Chunk652215.uss.NOTIFICATIONS]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: Chunk881957.X.REQUIRED,
      defaultSettings: {
        anchor: {
          left: v,
          top: A,
          bottom: true,
          right: true
        },
        size: {
          height: "auto",
          width: "auto"
        },
        pinned: true,
        minSize: {
          width: 320,
          height: 100
        }
      },
      version: 3
    },
    [Chunk652215.uss.ACTIVITY]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: Chunk881957.X.REQUIRED,
      defaultSettings: {
        anchor: {
          left: true,
          top: .35,
          bottom: true,
          right: v
        },
        size: {
          height: "auto",
          width: "auto"
        },
        pinned: false,
        minSize: {
          width: 320,
          height: 100
        }
      },
      version: 3
    },
    [Chunk652215.uss.FRIENDS]: {
      resizeX: false,
      resizeY: true,
      dragAnywhere: true,
      layoutPolicy: Chunk881957.X.OPTIONAL_DEFAULT,
      defaultSettings: {
        anchor: {
          left: true,
          top: 6 * A,
          bottom: true,
          right: v
        },
        size: {
          fixed: true,
          height: 500,
          width: 350
        },
        minSize: {
          width: 350,
          height: 350
        },
        pinned: false
      },
      version: 3
    },
    [Chunk652215.uss.CLICK_ZONE_DEBUG]: {
      resizeX: true,
      resizeY: true,
      dragAnywhere: true,
      layoutPolicy: Chunk881957.X.DEBUG,
      defaultSettings: {
        anchor: {
          left: true,
          top: .35,
          bottom: true,
          right: .35
        },
        size: {
          height: "auto",
          width: "auto"
        },
        pinned: true,
        minSize: {
          width: 50,
          height: 50
        }
      },
      version: 3
    },
    [Chunk652215.uss.PERFORMANCE_DEBUG]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: Chunk881957.X.DEBUG,
      defaultSettings: {
        anchor: {
          left: true,
          top: .1,
          bottom: true,
          right: .1
        },
        size: {
          height: "auto",
          width: "auto"
        },
        pinned: true,
        minSize: {
          width: 120,
          height: 300
        }
      },
      version: 3
    }
  };

function I(e) {
  let {
    layoutId: t,
    widgets: n,
    version: a,
    defaultResolution: s
  } = e;
  if (null != r[t] && r[t].version === a) returnfalse;
  let o = [];
  n.forEach((e, t) => {
    let n = T(e.type),
      r = y(E({}, e), {
        zIndex: t
      });
    "" === r.id && (r.id = (0, l.A)()), null != n && (r.pinned = n.pinned, false !== n.anchor.left && (r.anchor = (0, _.NO)(n.anchor, s)), false !== n.size.width && (r.size = (0, _.R9)(n.size, s))), i = y(E({}, i), {
      [r.id]: new p.A(r)
    }), o.push(r.id)
  }), r = y(E({}, r), {
    [t]: new f.A({
      id: t,
      widgets: o,
      version: a
    })
  })
}

function T(e) {
  let t = r[O];
  if (null != t)
    for (let n of t.widgets) {
      let t = i[n];
      if (null != t && t.type === e) return t
    }
  return null
}

function C(e, t) {
  let n = i[e];
  if (null == n) returnfalse;
  let a = r[n.layoutId];
  return null != a && t(n, a)
}

function N(e) {
  let {
    widgetId: t,
    anchor: n,
    size: r,
    opacity: i,
    minSize: a,
    defaultSize: s
  } = e;
  return C(t, (e, t) => L({
    widget: e,
    anchor: n,
    size: r,
    opacity: i,
    minSize: a,
    defaultSize: s
  }))
}

function R(e) {
  let {
    widgetId: t
  } = e;
  return C(t, (e, t) => w(t, e.id))
}

function w(e, t) {
  let n = H(e);
  n.sort((e, t) => e.zIndex - t.zIndex);
  let r = n.findIndex(e => e.id === t);
  if (r === n.length - 1) returnfalse;
  n.push(n.splice(r, 1)[0]);
  for (let e = 0; e < n.length; e++) F(n[e], e);
  returntrue
}

function P(e) {
  let {
    widgetId: t,
    meta: n
  } = e;
  return C(t, (e, t) => {
    D(e, n)
  })
}

function D(e, t) {
  var n;
  i = y(E({}, i), {
    [e.id]: e.merge({
      meta: E({}, null != (n = e.meta) ? n : {}, t)
    })
  })
}

function x(e) {
  let {
    widgetId: t,
    pinned: n
  } = e;
  return C(t, (e, t) => {
    B(e, n)
  })
}

function L(e) {
  let {
    widget: t,
    anchor: n,
    size: r,
    opacity: a,
    minSize: s,
    defaultSize: o
  } = e;
  if (i = y(E({}, i), {
      [t.id]: t.merge({
        anchor: null != n ? n : t.anchor,
        size: null != r ? r : t.size,
        opacity: null != a ? a : t.opacity,
        minSize: null != s ? s : t.minSize
      })
    }), null != o) {
    let e = S[t.type];
    null != e && (e.defaultSettings.size = E({
      fixed: e.defaultSettings.size.fixed
    }, o))
  }
}

function j(e) {
  i = y(E({}, i), {
    [e.id]: e.merge({
      showExtrasHintTimestamp: Date.now()
    })
  })
}

function M(e) {
  let {
    widgetId: t
  } = e;
  return C(t, (e, t) => {
    j(e)
  })
}

function k(e) {
  let {
    widgetId: t
  } = e;
  i = E({}, i), delete i[t], o().forEach(r, (e, n) => {
    if (n === O) return;
    let i = e.widgets.indexOf(t);
    if (i >= 0) {
      let t = [...e.widgets];
      t.splice(i, 1), r = y(E({}, r), {
        [n]: e.set("widgets", t)
      })
    }
  })
}

function U(e) {
  let {
    layoutId: t
  } = e, n = r[t];
  if (null == n) returnfalse;
  n.widgets.forEach(e => {
    i = E({}, i), delete i[e]
  }), r = y(E({}, r), {
    [n.id]: n.set("widgets", [])
  })
}

function G(e) {
  let {
    widgetConfigs: t
  } = e;
  t.forEach(e => {
    let t = new p.A(e),
      n = r[t.layoutId];
    if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
    t = t.set("zIndex", n.widgets.length), i = y(E({}, i), {
      [t.id]: t
    });
    let a = [...n.widgets, t.id];
    r = y(E({}, r), {
      [n.id]: n.set("widgets", a)
    })
  })
}

function V(e) {
  let {
    widgetType: t,
    defaultConfig: n
  } = e;
  S[t] = E({}, S[t], n)
}

function F(e, t) {
  i = y(E({}, i), {
    [e.id]: e.set("zIndex", t)
  })
}

function B(e, t) {
  i = y(E({}, i), {
    [e.id]: e.set("pinned", null != t ? t : !e.pinned)
  })
}

function H(e) {
  let t = [];
  return e.widgets.forEach(e => {
    let n = i[e];
    null != n && t.push(n)
  }), t
}

function Y(e) {
  let t = {};
  return o().forEach(e, (e, n) => {
    t[n] = new f.A(e)
  }), t
}

function W(e) {
  let t = {};
  return o().forEach(e, (e, n) => {
    t[n] = new p.A(e)
  }), t
}

function K(e) {
  let t = S[e];
  if (null != t) return t.defaultSettings
}
class z extends(a = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && null != e.layouts && null != e.widgets ? (r = Y(e.layouts), i = W(e.widgets)) : (r = {}, i = {});
    let t = false,
      n = [];
    o().forEach(S, (e, t) => {
      e.layoutPolicy === h.X.REQUIRED && n.push(t)
    }), o().forEach(r, (e, a) => {
      let s = this.getWidgetsForLayout(a),
        o = false;
      for (let r of n) {
        let n = s.find(e => e.type === r);
        if (null != n || S[r].version !== e.version) continue;
        o = t = true;
        let c = (0, l.A)(),
          u = K(r);
        if (null == u) return;
        n = new p.A(y(E({}, u), {
          type: r,
          id: c,
          layoutId: a,
          zIndex: s.length
        })), s.push(n), i = y(E({}, i), {
          [c]: n
        })
      }
      o && (e = e.set("widgets", s.map(e => {
        let {
          id: t
        } = e;
        return t
      })), r = y(E({}, r), {
        [a]: e
      }))
    }), o().forEach(i, (e, n) => {
      let a = r[e.layoutId];
      (null == a || 0 > a.widgets.indexOf(n)) && (i = E({}, i), delete i[n], t = true)
    }), t && (this.persist(), this.emitChange())
  }
  getState() {
    return {
      layouts: r,
      widgets: i
    }
  }
  getLayouts() {
    return r
  }
  getLayout(e) {
    return r[e]
  }
  getAllWidgets() {
    return i
  }
  getWidget(e) {
    return i[e]
  }
  getWidgetsForLayout(e) {
    let t = this.getLayout(e);
    return null == t ? [] : t.widgets.reduce((e, t) => {
      let n = this.getWidget(t);
      return null != n && e.push(n), e
    }, [])
  }
  getAllUnpinnedPinnedWidgets(e) {
    let t = this.getWidgetsForLayout(e),
      n = [];
    return t.forEach(e => {
      let t = this.getWidgetConfig(e.type);
      if (null == t) {
        e.pinned || n.push(e.type);
        return
      }
      t.layoutPolicy === h.X.REQUIRED || e.pinned || n.push(e.type)
    }), n
  }
  getWidgetConfig(e) {
    return S[e]
  }
  getWidgetDefaultSettings(e) {
    return K(e)
  }
  getWidgetType(e) {
    let t = i[e];
    return null != t ? t.type : ""
  }
  getWidgetsByType(e) {
    return Object.values(i).filter(t => t.type === e)
  }
  getWidgetsByTypeAndLayout(e, t) {
    return Object.values(i).filter(n => n.type === e && n.layoutId === t)
  }
  getRegisteredWidgets() {
    return S
  }
  getDefaultLayout(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
      n = [];
    return o().forEach(this.getRegisteredWidgets(), (r, i) => {
      switch (r.layoutPolicy) {
        case h.X.REQUIRED:
        case h.X.OPTIONAL_DEFAULT:
          var a;
          if ((null != (a = r.version) ? a : 0) === t) {
            let t = K(i);
            if (null == t) return;
            n.push(y(E({}, t), {
              type: i,
              id: (0, l.A)(),
              layoutId: e
            }))
          }
      }
    }), n
  }
}
g(z, "displayName", "LayoutStore"), g(z, "persistKey", "LayoutStore"), g(z, "migrations", [() => {
  let {
    pinnedWidgets: e,
    positions: t,
    sizes: n,
    v: r
  } = E({}, u.w.get("OverlayStore"));
  if (5 === r && e) {
    let r = O,
      i = [],
      a = e.map(e => {
        let a = null != t ? t[e] : null,
          s = null != n ? n[e] : null,
          o = {
            id: e,
            layoutId: r,
            type: e,
            anchor: a || {
              top: false,
              left: false,
              bottom: null,
              right: null
            },
            size: s || {
              width: false,
              height: false
            },
            pinned: true,
            zIndex: 0
          };
        return i.push([o.id, o]), o.id
      }),
      s = {
        id: r,
        widgets: a
      };
    return {
      layouts: [
        [r, s]
      ],
      widgets: i
    }
  }
  return {
    layouts: [],
    widgets: []
  }
}, e => {
  let {
    layouts: t,
    widgets: n
  } = e, r = new Set(Object.keys(m.uss)), i = Array.from(n).filter(e => {
    let [t] = e;
    return !r.has(t)
  }), a = Array.from(t).filter(e => {
    let [t] = e;
    return t !== O
  });
  return a.forEach(e => {
    let [t, n] = e, r = null, a = null;
    if (n.widgets.find(e => {
        let n = i.find(n => {
          let [r, i] = n;
          return r === e && i.layoutId === t
        });
        return null != n && (null == a && n[1].type === m.uss.VOICE && (a = n[0]), null == r && n[1].type === m.uss.TEXT && (r = n[1].pinned), null != r && null != a || true)
      }), r || null == a) return;
    let s = (0, l.A)();
    n.widgets = [a, s];
    let o = K(m.uss.GUILDS_TEXT);
    null != o && i.push([s, y(E({}, o), {
      type: m.uss.GUILDS_TEXT,
      id: s,
      layoutId: t,
      zIndex: 2
    })])
  }), {
    widgets: i,
    layouts: a
  }
}, e => {
  let {
    layouts: t,
    widgets: n
  } = e;
  return {
    layouts: t.reduce((e, t) => {
      let [n, r] = t;
      return e[n] = r, e
    }, {}),
    widgets: n.reduce((e, t) => {
      let [n, r] = t;
      return e[n] = r, e
    }, {})
  }
}, e => {
  let {
    layouts: t,
    widgets: n
  } = e, r = {};
  for (let e in t) {
    let n = t[e];
    r[e] = y(E({}, n), {
      version: 0
    })
  }
  return {
    layouts: r,
    widgets: n
  }
}]);
let q = new z(Chunk73153.h, {
  LAYOUT_CREATE: I,
  LAYOUT_SET_PINNED: x,
  LAYOUT_UPDATE_WIDGET: N,
  LAYOUT_SET_TOP_WIDGET: R,
  LAYOUT_DELETE_WIDGET: k,
  LAYOUT_DELETE_ALL_WIDGETS: U,
  LAYOUT_CREATE_WIDGETS: G,
  LAYOUT_SET_WIDGET_META: P,
  LAYOUT_SHOW_OVERLAY_EXTRAS_HINT: M,
  LAYOUT_SET_DEFAULT_CONFIG: V
})