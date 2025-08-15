/** Chunk was on web.js **/
/** chunk id: 355863, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => Y
}), require("./539854.js"), require("./388685.js"), require("./642613.js"), require("./415506.js");
var a, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk131792 = require("./131792.js"),
  Chunk252982 = require("./252982.js"),
  Chunk434529 = require("./434529.js"),
  Chunk981631 = require("./981631.js"),
  Chunk757744 = require("./757744.js");

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
let O = "migrated",
  v = .02,
  I = .01,
  T = {
    [Chunk981631.Odu.GUILDS]: {
      resizeX: false,
      resizeY: true,
      dragAnywhere: false,
      layoutPolicy: "OPTIONAL",
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
      version: Chunk757744.bv
    },
    [Chunk981631.Odu.TEXT]: {
      resizeX: true,
      resizeY: true,
      dragAnywhere: false,
      layoutPolicy: "OPTIONAL",
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
      version: Chunk757744.bv
    },
    [Chunk981631.Odu.VOICE]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: "REQUIRED",
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
      version: Chunk757744.bv
    },
    [Chunk981631.Odu.GUILDS_TEXT]: {
      resizeX: true,
      resizeY: true,
      dragAnywhere: false,
      layoutPolicy: "OPTIONAL_DEFAULT",
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
      version: Chunk757744.bv
    },
    [Chunk981631.Odu.VOICE_V3]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: "REQUIRED",
      defaultSettings: {
        anchor: {
          left: I,
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
      version: Chunk757744.HN
    },
    [Chunk981631.Odu.VIDEO]: {
      resizeX: true,
      resizeY: true,
      dragAnywhere: true,
      layoutPolicy: "OPTIONAL_DEFAULT",
      defaultSettings: {
        anchor: {
          left: I,
          top: true,
          bottom: v,
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
      version: Chunk757744.HN
    },
    [Chunk981631.Odu.GO_LIVE]: {
      resizeX: true,
      resizeY: true,
      dragAnywhere: true,
      layoutPolicy: "OPTIONAL_DEFAULT",
      defaultSettings: {
        anchor: {
          left: true,
          top: true,
          bottom: v,
          right: I
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
      version: Chunk757744.HN
    },
    [Chunk981631.Odu.QUICK_ACTIONS]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: "REQUIRED",
      defaultSettings: {
        anchor: {
          left: .34,
          top: v,
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
      version: Chunk757744.HN
    },
    [Chunk981631.Odu.NOTIFICATIONS]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: "REQUIRED",
      defaultSettings: {
        anchor: {
          left: I,
          top: v,
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
      version: Chunk757744.HN
    },
    [Chunk981631.Odu.ACTIVITY]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: "REQUIRED",
      defaultSettings: {
        anchor: {
          left: true,
          top: .35,
          bottom: true,
          right: I
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
      version: Chunk757744.HN
    },
    [Chunk981631.Odu.FRIENDS]: {
      resizeX: false,
      resizeY: true,
      dragAnywhere: true,
      layoutPolicy: "OPTIONAL_DEFAULT",
      defaultSettings: {
        anchor: {
          left: true,
          top: 6 * v,
          bottom: true,
          right: I
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
      version: Chunk757744.HN
    },
    [Chunk981631.Odu.CLICK_ZONE_DEBUG]: {
      resizeX: true,
      resizeY: true,
      dragAnywhere: true,
      layoutPolicy: "DEBUG",
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
      version: Chunk757744.HN
    },
    [Chunk981631.Odu.PERFORMANCE_DEBUG]: {
      resizeX: false,
      resizeY: false,
      dragAnywhere: true,
      layoutPolicy: "DEBUG",
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
      version: Chunk757744.HN
    }
  };

function S(e) {
  let {
    layoutId: t,
    widgets: n,
    version: a,
    defaultResolution: o
  } = e;
  if (null != r[t] && r[t].version === a) returnfalse;
  let s = [];
  n.forEach((e, t) => {
    let n = A(e.type),
      r = y(E({}, e), {
        zIndex: t
      });
    "" === r.id && (r.id = (0, l.Z)()), null != n && (r.pinned = n.pinned, false !== n.anchor.left && (r.anchor = (0, p.jL)(n.anchor, o)), false !== n.size.width && (r.size = (0, p.Ox)(n.size, o))), i = y(E({}, i), {
      [r.id]: new _.Z(r)
    }), s.push(r.id)
  }), r = y(E({}, r), {
    [t]: new f.Z({
      id: t,
      widgets: s,
      version: a
    })
  })
}

function A(e) {
  let t = r[O];
  if (null != t)
    for (let n of t.widgets) {
      let t = i[n];
      if (null != t && t.type === e) return t
    }
  return null
}

function N(e, t) {
  let n = i[e];
  if (null == n) returnfalse;
  let a = r[n.layoutId];
  return null != a && t(n, a)
}

function C(e) {
  let {
    widgetId: t,
    anchor: n,
    size: r,
    opacity: i,
    minSize: a
  } = e;
  return N(t, (e, t) => x(e, n, r, i, a))
}

function R(e) {
  let {
    widgetId: t
  } = e;
  return N(t, (e, t) => P(t, e.id))
}

function P(e, t) {
  let n = B(e);
  n.sort((e, t) => e.zIndex - t.zIndex);
  let r = n.findIndex(e => e.id === t);
  if (r === n.length - 1) returnfalse;
  n.push(n.splice(r, 1)[0]);
  for (let e = 0; e < n.length; e++) U(n[e], e);
  returntrue
}

function w(e) {
  let {
    widgetId: t,
    meta: n
  } = e;
  return N(t, (e, t) => {
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

function L(e) {
  let {
    widgetId: t
  } = e;
  return N(t, (e, t) => {
    G(e)
  })
}

function x(e, t, n, r, a) {
  i = y(E({}, i), {
    [e.id]: e.merge({
      anchor: null != t ? t : e.anchor,
      size: null != n ? n : e.size,
      opacity: null != r ? r : e.opacity,
      minSize: null != a ? a : e.minSize
    })
  })
}

function M(e) {
  let {
    widgetId: t
  } = e;
  i = E({}, i), delete i[t], s().forEach(r, (e, n) => {
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

function k(e) {
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

function j(e) {
  let {
    widgetConfigs: t
  } = e;
  t.forEach(e => {
    let t = new _.Z(e),
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

function U(e, t) {
  i = y(E({}, i), {
    [e.id]: e.set("zIndex", t)
  })
}

function G(e) {
  i = y(E({}, i), {
    [e.id]: e.set("pinned", !e.pinned)
  })
}

function B(e) {
  let t = [];
  return e.widgets.forEach(e => {
    let n = i[e];
    null != n && t.push(n)
  }), t
}

function V(e) {
  let t = {};
  return s().forEach(e, (e, n) => {
    t[n] = new f.Z(e)
  }), t
}

function F(e) {
  let t = {};
  return s().forEach(e, (e, n) => {
    t[n] = new _.Z(e)
  }), t
}

function Z(e) {
  let t = T[e];
  if (null != t) return t.defaultSettings
}
class H extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && null != e.layouts && null != e.widgets ? (r = V(e.layouts), i = F(e.widgets)) : (r = {}, i = {});
    let t = false,
      n = [];
    s().forEach(T, (e, t) => {
      "REQUIRED" === e.layoutPolicy && n.push(t)
    }), s().forEach(r, (e, a) => {
      let o = this.getWidgetsForLayout(a),
        s = false;
      for (let r of n) {
        let n = o.find(e => e.type === r);
        if (null != n || T[r].version !== e.version) continue;
        s = t = true;
        let c = (0, l.Z)(),
          u = Z(r);
        if (null == u) return;
        n = new _.Z(y(E({}, u), {
          type: r,
          id: c,
          layoutId: a,
          zIndex: o.length
        })), o.push(n), i = y(E({}, i), {
          [c]: n
        })
      }
      s && (e = e.set("widgets", o.map(e => {
        let {
          id: t
        } = e;
        return t
      })), r = y(E({}, r), {
        [a]: e
      }))
    }), s().forEach(i, (e, n) => {
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
      "REQUIRED" === t.layoutPolicy || e.pinned || n.push(e.type)
    }), n
  }
  getWidgetConfig(e) {
    return T[e]
  }
  getWidgetDefaultSettings(e) {
    return Z(e)
  }
  getWidgetType(e) {
    let t = i[e];
    return null != t ? t.type : ""
  }
  getRegisteredWidgets() {
    return T
  }
  getDefaultLayout(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
      n = [];
    return s().forEach(this.getRegisteredWidgets(), (r, i) => {
      switch (r.layoutPolicy) {
        case "REQUIRED":
        case "OPTIONAL_DEFAULT":
          var a;
          if ((null != (a = r.version) ? a : 0) === t) {
            let t = Z(i);
            if (null == t) return;
            n.push(y(E({}, t), {
              type: i,
              id: (0, l.Z)(),
              layoutId: e
            }))
          }
      }
    }), n
  }
}
g(H, "displayName", "LayoutStore"), g(H, "persistKey", "LayoutStore"), g(H, "migrations", [() => {
  let {
    pinnedWidgets: e,
    positions: t,
    sizes: n,
    v: r
  } = E({}, Chunk433517.K.get("OverlayStore"));
  if (5 === r && module) {
    let r = O,
      i = [],
      a = module.map(e => {
        let a = null != t ? t[e] : null,
          o = null != n ? n[e] : null,
          s = {
            id: e,
            layoutId: r,
            type: e,
            anchor: a || {
              top: false,
              left: false,
              bottom: null,
              right: null
            },
            size: o || {
              width: false,
              height: false
            },
            pinned: true,
            zIndex: 0
          };
        return i.push([s.id, s]), s.id
      }),
      o = {
        id: r,
        widgets: a
      };
    return {
      layouts: [
        [r, Chunk392711]
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
  } = e, r = new Set(Object.keys(h.Odu)), i = Array.from(n).filter(e => {
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
        return null != n && (null == a && n[1].type === h.Odu.VOICE && (a = n[0]), null == r && n[1].type === h.Odu.TEXT && (r = n[1].pinned), null != r && null != a || true)
      }), r || null == a) return;
    let o = (0, l.Z)();
    n.widgets = [a, o];
    let s = Z(h.Odu.GUILDS_TEXT);
    null != s && i.push([o, y(E({}, s), {
      type: h.Odu.GUILDS_TEXT,
      id: o,
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
      version: m.bv
    })
  }
  return {
    layouts: r,
    widgets: n
  }
}]);
let Y = new H(Chunk570140.Z, {
  LAYOUT_CREATE: S,
  LAYOUT_SET_PINNED: L,
  LAYOUT_UPDATE_WIDGET: C,
  LAYOUT_SET_TOP_WIDGET: R,
  LAYOUT_DELETE_WIDGET: M,
  LAYOUT_DELETE_ALL_WIDGETS: k,
  LAYOUT_CREATE_WIDGETS: j,
  LAYOUT_SET_WIDGET_META: w
})